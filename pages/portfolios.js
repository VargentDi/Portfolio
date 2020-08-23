import BaseLayout from "../components/layouts/BaseLayout"
import useSWR from 'swr'
import {Link} from '../routes'

const fetcher = url => fetch(url).then(r => r.json())


const portfolios = ({ post }) => {
  // const { data, err } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
  return (
    <BaseLayout>
      <h1>portfolios</h1>
      {<ul>
        {post.map((e) => {
          return <li key={e.id} style={{ 'fontSize': '20px' }}>
            <Link route={`/portfolios/${e.id}`} >
              <a>
                {e.title}
              </a>
            </Link>
          </li>
        })}
      </ul>}

    </BaseLayout>
  )
}
portfolios.getInitialProps = async (ctx) => {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return { post: data.slice(0, 10) }
}
export default portfolios