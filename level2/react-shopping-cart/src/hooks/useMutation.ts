import { useState, useCallback } from 'react';

import CartAPI from '../api/cart';

type MutationFn<TArgs, TResult> = (args: TArgs) => Promise<TResult>;

interface UseMutationOptions<TResult> {
  onMutate?: () => void;
  onSuccess?: (data: TResult) => void;
  onError?: (error: Error) => void;
}

const useMutation = <TArgs = unknown, TResult = unknown>(
  mutationFn: MutationFn<TArgs, TResult>,
  options?: UseMutationOptions<TResult>,
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const mutate = useCallback(
    async (args: TArgs) => {
      if (options?.onMutate) {
        options.onMutate();
      }

      setIsLoading(true);
      setError(null);

      try {
        const response = await mutationFn(args);
        if (options?.onSuccess) {
          options.onSuccess(response);
        }
        return response;
      } catch (err) {
        if (err instanceof Error) {
          if (options?.onError) {
            options.onError(err);
          }
          setError(err);
        }
      } finally {
        setIsLoading(false);
      }
    },
    [mutationFn, options],
  );

  return { mutate, isLoading, error };
};

export default useMutation;
