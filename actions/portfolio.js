import { useApiHandler } from '@/actions';


function createPortfolio(data){
  return fetch('/api/v1/portfolios',{
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body:JSON.stringify(data)
  })
}

export const useCreatePortfolio = () => useApiHandler(createPortfolio);
