import { useState } from 'react';

import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { Row, Col, Button } from 'reactstrap';
import { useRouter } from 'next/router';
import { useGetUser } from '@/actions/user';
import PortfolioApi from '@/lib/api/portfolios';
import PortfolioCard from '@/components/PortfolioCard';
import { isAuthorized } from '@/utils/auth0';
import { useDeletePortfolio } from '@/actions/portfolio';

const Portfolios = ({ portfolios:initialPortfolios }) => {
  const router = useRouter();
  const [portfolios, setPortfolios] = useState(initialPortfolios);

  const { data: dataU, loading: loadingU } = useGetUser();
  const [deletePortfolio, {data, error}] = useDeletePortfolio();
  const _deletePortfolio = async (e, portfolioId) => {
    e.stopPropagation();
    const isConfirm = confirm('Are you sure you want to delete this portfolio?');
    if (isConfirm) {
      await deletePortfolio(portfolioId);
      setPortfolios(portfolios.filter(p => p._id !== portfolioId));

    }
  }

  return (
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage
        header="Portfolios"
        className="portfolio-page" title='Newest portfolios - Di Zhao'>
        <Row>
          {portfolios.map(portfolio =>
            <Col
              key={portfolio._id}
              onClick={() => {
                router.push('/portfolios/[id]', `/portfolios/${portfolio._id}`)
              }}
              md="4">
              <PortfolioCard
                portfolio={portfolio}>
                {dataU && isAuthorized(dataU, 'admin') &&
                  <>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push('/portfolios/[id]/edit', `/portfolios/${portfolio._id}/edit`)
                      }}
                      className="mr-2"
                      color="warning">Edit</Button>
                    <Button color="danger" onClick={(e) => _deletePortfolio(e, portfolio._id)}>Delete</Button>
                  </>
                }
              </PortfolioCard>
            </Col>
          )
          }
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export async function getStaticProps() {
  const json = await new PortfolioApi().getAll();
  const portfolios = await json.data
  return {
    props: { portfolios },
    revalidate: 1
  }
}

export default Portfolios