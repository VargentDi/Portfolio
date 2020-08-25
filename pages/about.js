import BaseLayout from "@/components/layouts/BaseLayout"
import BasePage from '@/components/BasePage'
import { useGetUser } from "@/actions/user";

const about = () => {
  const {data,error,loading}=useGetUser()
  return (
    <BaseLayout user={data} loading={loading}>
        <BasePage>

      <h1>about page</h1>
      </BasePage>

    </BaseLayout>
  )
}


export default about