import BaseLayout from "@/components/layouts/BaseLayout"
import { useGetUser } from "@/actions/user";

import BasePage from '@/components/BasePage'

const cv =()=>{

  const {data,error,loading}=useGetUser()

  return(
    <BaseLayout user={data} loading={loading}>
    <BasePage>
    <h1>cv</h1>
    </BasePage>
    </BaseLayout>

  )
}


export default cv