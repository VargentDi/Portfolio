import BaseLayout from "@/components/layouts/BaseLayout"
import BasePage from '@/components/BasePage'
import { useGetUser } from "@/actions/user";
import { authorizeUser, withAuth } from "../utils/auth0";


const secretssr = ({ user ,title}) => {
  return (<BaseLayout user={user} loading={false}>

    <BasePage>
      <h1>secretssr page {user && user.name}</h1>
      <h1>secretssr page {title && title}</h1>
    </BasePage>
  </BaseLayout>)
}

const getTitle=()=>{
  return new Promise((res)=>{
    setTimeout(()=>{
       res({title:'new title'})
    },500)
  })
}

export const getServerSideProps = withAuth(async ()=>{
  const title = await getTitle()
  return title
})()

export default (secretssr)