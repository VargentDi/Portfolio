import { useApiHandler } from '@/actions';
import useSWR from 'swr';
import { fetcher } from '@/actions';
import axios from 'axios'
const createPortfolio = (data) => axios.post('/api/v1/portfolios', data);
const deletePortfolio = (id) => axios.delete(`/api/v1/portfolios/${id}`);

const updatePortfolio = (id, data) => axios.patch(`/api/v1/portfolios/${id}`, data);
export const useGetPortfolio = (id) => {
  const { data, error, ...rest} = useSWR(id ? `/api/v1/portfolios/${id}` : null, fetcher);
  return { data, error, loading: !data && !error, ...rest};
}
export const useUpdatePortfolio = () => useApiHandler(updatePortfolio);

export const useCreatePortfolio = () => useApiHandler(createPortfolio);
export const useDeletePortfolio = () => useApiHandler(deletePortfolio);
