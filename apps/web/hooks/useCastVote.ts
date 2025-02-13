import useApiCall from './useApiCall';
import routes from '../routes';
import { useCallback, useState } from 'react';
import { ProposalStateE, useCastVote as solanaUseCastVote, useGetDaoState } from '@builderdao-sdk/dao-program'

type IndexVotesData = {
  id: number;
  numberOfVotes: number;
  state?: ProposalStateE;
};

export const useCastVote = (
  currentVotes,
): [
  (tutorialId: number) => Promise<void>,
  {
    submitting: boolean;
    error: Error;
  },
] => {
  const { daoState } = useGetDaoState();
  const [castVote] = solanaUseCastVote();
  const [updateTutorialIndex] = useApiCall<IndexVotesData, any>(
    routes.api.algolia.updateTutorial,
  );

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleAction = useCallback(
    async (tutorialId: number) => {
      try {
        setError(null);
        setSubmitting(true);

        await castVote(tutorialId);

        const newNumberOfVotes = currentVotes.length + 1;
        const partialIndexData: IndexVotesData = {
          id: tutorialId,
          numberOfVotes: newNumberOfVotes,
        }

        if (newNumberOfVotes >= daoState.quorum.toNumber()) {
          partialIndexData.state = ProposalStateE.funded;
        }

        await updateTutorialIndex({
          data: partialIndexData,
        });

      } catch (err) {
        console.log('Err:', err);
        setError(err);
        throw new err();
      } finally {
        setSubmitting(false);
      }
    },
    [castVote, updateTutorialIndex, currentVotes.length],
  );

  return [handleAction, { submitting, error }];
};
