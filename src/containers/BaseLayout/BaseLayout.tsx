import { Container } from 'react-bootstrap';
import Header from '@/components/Header';
import { Outlet } from 'react-router-dom';

const BaseLayout = () => (
  <Container className="px-1 min-vh-100">
    <Header />
    <Outlet />
  </Container>
);

export default BaseLayout;
