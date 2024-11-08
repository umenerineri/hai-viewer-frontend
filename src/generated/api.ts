/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * III-Exhibition works-HAI viewer
 * API specification for interactions between Frontend, Backend, and Cloud Storage.
 * OpenAPI spec version: 1.0.0
 */
import {
  useQuery,
  useSuspenseQuery
} from '@tanstack/react-query'
import type {
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseQueryOptions,
  UseQueryResult,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult
} from '@tanstack/react-query'
import axios from 'axios'
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import type {
  GetApiHandlerView200,
  GetApiHandlerView400,
  GetApiHandlerView404,
  GetApiHandlerViewDefault
} from './model'



/**
 * Viewer Page for human AI drawings.
 * @summary Drawing Viewer Page
 */
export const getApiHandlerView = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<GetApiHandlerView200>> => {
    
    return axios.get(
      `/api/handler/view`,options
    );
  }


export const getGetApiHandlerViewQueryKey = () => {
    return [`/api/handler/view`] as const;
    }

    
export const getGetApiHandlerViewQueryOptions = <TData = Awaited<ReturnType<typeof getApiHandlerView>>, TError = AxiosError<GetApiHandlerView400 | GetApiHandlerView404 | void | GetApiHandlerViewDefault>>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiHandlerView>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiHandlerViewQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiHandlerView>>> = ({ signal }) => getApiHandlerView({ signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiHandlerView>>, TError, TData> & { queryKey: QueryKey }
}

export type GetApiHandlerViewQueryResult = NonNullable<Awaited<ReturnType<typeof getApiHandlerView>>>
export type GetApiHandlerViewQueryError = AxiosError<GetApiHandlerView400 | GetApiHandlerView404 | void | GetApiHandlerViewDefault>


export function useGetApiHandlerView<TData = Awaited<ReturnType<typeof getApiHandlerView>>, TError = AxiosError<GetApiHandlerView400 | GetApiHandlerView404 | void | GetApiHandlerViewDefault>>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiHandlerView>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiHandlerView>>,
          TError,
          TData
        > , 'initialData'
      >, axios?: AxiosRequestConfig}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetApiHandlerView<TData = Awaited<ReturnType<typeof getApiHandlerView>>, TError = AxiosError<GetApiHandlerView400 | GetApiHandlerView404 | void | GetApiHandlerViewDefault>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiHandlerView>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiHandlerView>>,
          TError,
          TData
        > , 'initialData'
      >, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetApiHandlerView<TData = Awaited<ReturnType<typeof getApiHandlerView>>, TError = AxiosError<GetApiHandlerView400 | GetApiHandlerView404 | void | GetApiHandlerViewDefault>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiHandlerView>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
/**
 * @summary Drawing Viewer Page
 */

export function useGetApiHandlerView<TData = Awaited<ReturnType<typeof getApiHandlerView>>, TError = AxiosError<GetApiHandlerView400 | GetApiHandlerView404 | void | GetApiHandlerViewDefault>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiHandlerView>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getGetApiHandlerViewQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const getGetApiHandlerViewSuspenseQueryOptions = <TData = Awaited<ReturnType<typeof getApiHandlerView>>, TError = AxiosError<GetApiHandlerView400 | GetApiHandlerView404 | void | GetApiHandlerViewDefault>>( options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getApiHandlerView>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiHandlerViewQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiHandlerView>>> = ({ signal }) => getApiHandlerView({ signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseSuspenseQueryOptions<Awaited<ReturnType<typeof getApiHandlerView>>, TError, TData> & { queryKey: QueryKey }
}

export type GetApiHandlerViewSuspenseQueryResult = NonNullable<Awaited<ReturnType<typeof getApiHandlerView>>>
export type GetApiHandlerViewSuspenseQueryError = AxiosError<GetApiHandlerView400 | GetApiHandlerView404 | void | GetApiHandlerViewDefault>


export function useGetApiHandlerViewSuspense<TData = Awaited<ReturnType<typeof getApiHandlerView>>, TError = AxiosError<GetApiHandlerView400 | GetApiHandlerView404 | void | GetApiHandlerViewDefault>>(
  options: { query:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getApiHandlerView>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetApiHandlerViewSuspense<TData = Awaited<ReturnType<typeof getApiHandlerView>>, TError = AxiosError<GetApiHandlerView400 | GetApiHandlerView404 | void | GetApiHandlerViewDefault>>(
  options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getApiHandlerView>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetApiHandlerViewSuspense<TData = Awaited<ReturnType<typeof getApiHandlerView>>, TError = AxiosError<GetApiHandlerView400 | GetApiHandlerView404 | void | GetApiHandlerViewDefault>>(
  options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getApiHandlerView>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey }
/**
 * @summary Drawing Viewer Page
 */

export function useGetApiHandlerViewSuspense<TData = Awaited<ReturnType<typeof getApiHandlerView>>, TError = AxiosError<GetApiHandlerView400 | GetApiHandlerView404 | void | GetApiHandlerViewDefault>>(
  options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getApiHandlerView>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getGetApiHandlerViewSuspenseQueryOptions(options)

  const query = useSuspenseQuery(queryOptions) as  UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




