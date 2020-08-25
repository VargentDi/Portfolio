
import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import Link from "next/link"
import {useGetData} from '../../actions'
import { useGetUser } from "@/actions/user";


const portfolios = () => {
  const {data:user,error,loading:userLoading}=useGetUser()

  const { data:posts ,error:postError,loading} = useGetData()
  const renderPosts = (data) => {
    return data.map(e =>
      <li key={e.id} style={{ 'fontSize': '20px' }}>
        <Link as={`/portfolios/${e.id}`} href='/portfolios/[id]'>
          <a>
            {e.title}
          </a>
        </Link>
      </li>
    )
  }

  return (
    <BaseLayout user={user} loading={userLoading}>
      <BasePage>
        <h1>portfolios</h1>
        {loading&&<p>loading....</p>}
        {posts&&<ul>
          {renderPosts(posts)}
        </ul>}
        {postError&&<div className='alert alert-danger'>{error.message}</div>}
      </BasePage>
    </BaseLayout>
  )
}
// portfolios.getInitialProps = async (ctx) => {

//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   const data = await res.json()
//   return { post: data.slice(0, 10) }
// }
export default portfolios