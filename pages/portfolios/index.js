
import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import Link from "next/link"
import {useGetData} from '../../actions'
// import useGetData from '@/actions'


const portfolios = () => {

  const { data ,error,loading} = useGetData()
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
    <BaseLayout>
      <BasePage>
        <h1>portfolios</h1>
        {loading&&<p>loading....</p>}
        {data&&<ul>
          {renderPosts(data)}
        </ul>}
        {error&&<div className='alert alert-danger'>{error.message}</div>}
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