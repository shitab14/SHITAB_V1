import { axiosClient } from '@/lib/axios';

export const apiService = {
  get: async <T>(url: string): Promise<T> => {
    const response = await axiosClient.get<T>(url);
    return response.data;
  },
  post: async <T>(url: string, data: unknown): Promise<T> => {
    const response = await axiosClient.post<T>(url, data);
    return response.data;
  },
};
