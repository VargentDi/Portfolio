

import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import { useGetUser } from "@/actions/user";
import PortfolioApi from '@/lib/api/portfolios';


function Portfolios({portfolio}) {

  const {data:user,loading:userLoading}=useGetUser()

  return (
    <BaseLayout user={user} loading={userLoading}>
      <BasePage header="Portfolio Detail">
        {
          JSON.stringify(portfolio)
        }
      </BasePage>
    </BaseLayout>
  )
}

export async function getStaticPaths() {
  const json = await new PortfolioApi().getAll();
  const portfolios = await json.json();

  // Get the paths we want pre-render based on portfolio ID
  const paths = portfolios.map(portfolio => {
    return {
      params: {id: portfolio._id}
    }
  })

  // fallback: false means that "not found pages" will be resolved into 404 page
  return { paths, fallback: false };
}

export async function getStaticProps({params}) {
  const json = await new PortfolioApi().getById(params.id);
  const portfolio = await json.json();
  return { props: {portfolio}};
}
export default (Portfolios)