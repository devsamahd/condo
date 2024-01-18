import AuthContext from '@/context/main';
import { AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import axios from '@/app/api/axios'

interface UseRequestResponse<T> {
  getRequest: (path: string) => Promise<T>;
  postRequest: (path: string, body?: any) => Promise<T>;
  putRequest: (path: string, body?: any) => Promise<T>;
  deleteRequest: (path: string) => Promise<T>;
  data: T | null;
}

const useRequest = <T>(): UseRequestResponse<T> => {
  const router = useRouter();
  const [data, setData] = useState<T | null>(null);
  const { setLoading }:any = useContext(AuthContext);

  const performRequest = async (
    method: 'get' | 'post' | 'put' | 'delete',
    path: string,
    body?: any
  ): Promise<T> => {
    let isMounted = true;
    const controller = new AbortController();

    try {
      setLoading(true);
      const response: AxiosResponse<T> = await axios[method](path, body, {
        signal: controller.signal,
        // Add any other axios configurations here if needed
      });
      isMounted && setData(response.data);

      return response.data;
    } catch (err: any) {
      console.error(err);
      if (err.response && err.response.status === 401) {
        router.push('/auth');
      }
      throw err;
    } finally {
      setLoading(false);
      isMounted && setData(null);
      controller.abort();
    }
  };

  const getRequest = (path: string): Promise<T> => performRequest('get', path);
  const postRequest = (path: string, body?: any): Promise<T> => performRequest('post', path, body);
  const putRequest = (path: string, body?: any): Promise<T> => performRequest('put', path, body);
  const deleteRequest = (path: string): Promise<T> => performRequest('delete', path);

  return { getRequest, postRequest, putRequest, deleteRequest, data };
};

export default useRequest;
