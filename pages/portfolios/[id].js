

import { withRouter, useRouter } from 'next/router'
import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import {useGetDataById} from '@/actions'
import { useGetUser } from "@/actions/user";


function Portfolios({query}) {

  const {data:user,loading:userLoading}=useGetUser()

  const router = useRouter()
  const { data:posts, error, loading } = useGetDataById(router.query.id)
  return (
    <BaseLayout user={user} loading={userLoading}>
      <BasePage>
        {loading && <p>loading....</p>}
        {error && <div className='alert alert-danger'>{error.message}</div>}
        {posts && <><h1>i am portfolios page</h1>
          <h1>title :{posts.title}</h1>
          <p>body:{posts.body}</p>
          <p>id:{posts.id}</p></>}
      </BasePage>

    </BaseLayout>
  )
}

Portfolios.getInitialProps = async ({ query }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
  const data = await res.json()
  return { post: data }
}
export default withRouter(Portfolios)