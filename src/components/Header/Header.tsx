import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavbarProps } from 'react-bootstrap';
import { ROUTES } from '@/configs/routes';
import { Route } from '@/types/common';

const Header = ({ ...props }: NavbarProps) => {
  const [homeRoute, setHomeRoute] = useState('');

  useEffect(() => {
    setHomeRoute(ROUTES.find((route: Route) => route.id === 'home')?.path || '');
  }, [homeRoute]);

  return (
    <Navbar expand="lg" bg="white" variant="white" {...props}>
      <Container>
        <LinkContainer to={'/'}>
          <Navbar.Brand>Test</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            {ROUTES.map(
              (route) =>
                route.id !== 'home' && (
                  <LinkContainer key={route.id} to={route.path}>
                    <Nav.Link>{route.id.toUpperCase()}</Nav.Link>
                  </LinkContainer>
                )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
