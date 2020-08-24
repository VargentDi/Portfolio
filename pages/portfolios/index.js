

import BasePage from '@/components/BasePage'
import Link from "next/link"
import { useEffect } from "React";
const fetcher = url => fetch(url).then(r => r.json())


const portfolios = ({ post }) => {
  // const { data, err } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

  // useEffect(() => {

  // }, [])

  return (
    <BaseLayout>
      <BasePage>
        <h1>portfolios</h1>
        {<ul>
          {post.map((e) => {
            return <li key={e.id} style={{ 'fontSize': '20px' }}>
              <Link as={`/portfolios/${e.id}`} href='/portfolios/[id]'>
                <a>
                  {e.title}
                </a>
              </Link>
            </li>
          })}
        </ul>}

      </BasePage>


    </BaseLayout>
  )
}
portfolios.getInitialProps = async (ctx) => {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return { post: data.slice(0, 10) }
}
export default portfolios