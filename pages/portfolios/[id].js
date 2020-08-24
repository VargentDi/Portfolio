

import { withRouter } from 'next/router'
import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'

function Portfolios({ router, post }) {
  return (
    <BaseLayout>
      <BasePage>
        <h1>i am portfolios page</h1>
        <h1>title :{post.title}</h1>
        <p>body:{post.body}</p>
        <p>id:{post.id}</p>
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