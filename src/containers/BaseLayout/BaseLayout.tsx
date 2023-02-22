import { Container } from 'react-bootstrap';
import Header from '@/components/Header';
import { Outlet } from 'react-router-dom';

const BaseLayout = () => (
  <Container>
    <Header />
    <Outlet />
  </Container>
);

export default BaseLayout;
