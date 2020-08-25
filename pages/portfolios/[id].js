

import { withRouter, useRouter } from 'next/router'
import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import {useGetDataById} from '@/actions'


function Portfolios({query}) {
  const router = useRouter()
  const { data, error, loading } = useGetDataById(router.query.id)
  return (
    <BaseLayout>
      <BasePage>
        {loading && <p>loading....</p>}
        {error && <div className='alert alert-danger'>{error.message}</div>}
        {data && <><h1>i am portfolios page</h1>
          <h1>title :{data.title}</h1>
          <p>body:{data.body}</p>
          <p>id:{data.id}</p></>}
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