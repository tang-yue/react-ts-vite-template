import { RawAxiosResponseHeaders, AxiosResponseHeaders, AxiosRequestConfig } from 'axios'

export interface AxiosResponse<T = any, D = any>  {
  data: T;
  status: number;
  statusText: string;
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
  config: AxiosRequestConfig<D>;
  request?: any;
}