import CustomTab from '@/components/CustomTab';
import ProductList from '@/components/ProductList';
import StickyButton from '@/components/StickyShopButton';
import { Container } from 'react-bootstrap';

const Homepage = () => (
  <Container className="px-1 h-100">
    <CustomTab />
    <div className="my-3">
      <ProductList />
    </div>
    <StickyButton />
  </Container>
);

export default Homepage;
