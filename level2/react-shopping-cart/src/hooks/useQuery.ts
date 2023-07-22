import { useEffect, useState } from 'react';

type QueryFn<T> = () => Promise<T>;

const useQuery = <T>(queryFn: QueryFn<T>) => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await queryFn();
        setData(data);
      } catch (err) {
        if (err instanceof Error) setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [queryFn]);

  return { data, isLoading, error };
};

export default useQuery;
