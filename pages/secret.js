import BaseLayout from "@/components/layouts/BaseLayout"
import BasePage from '@/components/BasePage'
import withAuth from '@/hoc/withAuth'
const secret = ({ user, loading }) => {


  return (<BaseLayout user={user} loading={loading}>
    <BasePage>

      <h1>secret page {user.name}</h1>
    </BasePage>

  </BaseLayout>)

}

export default withAuth(secret)()