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
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white" {...props}>
      <Container>
        <LinkContainer to={homeRoute}>
          <Navbar.Brand>阿美姐手工花生糖</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            {ROUTES.map((route) => (
              <LinkContainer key={route.id} to={route.path}>
                <Nav.Link>{route.name}</Nav.Link>
              </LinkContainer>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
