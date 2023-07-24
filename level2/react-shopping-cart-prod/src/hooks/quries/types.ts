import {
  UseInfiniteQueryOptions,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';

export type UseQueryOptionsOf<TAPI extends (...args: unknown[]) => unknown> =
  UseQueryOptions<
    Awaited<ReturnType<TAPI>>,
    Error,
    Awaited<ReturnType<TAPI>>,
    string[]
  >;

export type UseInfiniteQueryOptionsOf<
  TAPI extends (...args: unknown[]) => unknown,
> = UseInfiniteQueryOptions<
  Awaited<ReturnType<TAPI>>,
  Error,
  Awaited<ReturnType<TAPI>>,
  Awaited<ReturnType<TAPI>>,
  string[]
>;

export type UseMutationOptionsOf<TAPI extends (...args: unknown[]) => unknown> =
  UseMutationOptions<
    Awaited<ReturnType<TAPI>>,
    Error,
    Parameters<TAPI>[0] extends undefined ? void : Parameters<TAPI>[0]
  >;
