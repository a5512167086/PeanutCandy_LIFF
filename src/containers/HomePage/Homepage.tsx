import CustomTab from '@/components/CustomTab';
import ProductList from '@/components/ProductList';
import { Container } from 'react-bootstrap';

const Homepage = () => (
  <Container className="px-1">
    <CustomTab />
    <div className="my-3">
      <ProductList />
    </div>
  </Container>
);

export default Homepage;
