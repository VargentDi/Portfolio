

import { useEffect,useState } from "react";
import useSWR from 'swr'
export const fetcher = url => fetch(url).then(async res=>{
  const result = await res.json();
  if(res.status!=200){
    return Promise.reject(result)
  }
  return result
})

  export const useGetData=()=>{
  const {data,error,...rest}= useSWR('/api/v1/posts',fetcher)
  return {data,error,loading: !data&&!error,...rest}
}

  export const useGetDataById=(id)=>{
  const {data,error,...rest}= useSWR(`/api/v1/posts/${id}`,fetcher)
  return {data,error,loading: !data&&!error,...rest}
}


