import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import withAuth from '@/hoc/withAuth';
import { Row, Col } from 'reactstrap';
import PortfolioForm from '@/components/PortfolioForm';
import { useCreatePortfolio } from '@/actions/portfolio';
import Redirect from '@/components/shared/Redirect';

const PortfolioNew = ({user, loading: userLoading}) => {
  const [createPortfolio, {data, loading, error}] = useCreatePortfolio();
  if (data) { return <Redirect to="/portfolios" /> }

  const _createPortfolio = (data) => {
    createPortfolio(data)
  }
  return (
    <BaseLayout user={user} loading={userLoading}>
      <BasePage header="Create Portfolio">
        <Row>
          <Col md="8">
          <PortfolioForm onSubmit={_createPortfolio} />
          { error && <div className="alert alert-danger mt-2">{error}</div>}
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(PortfolioNew)('admin');