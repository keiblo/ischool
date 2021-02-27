import React from 'react'
import {Navbar, Container, Nav, Button} from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar bg='light' expand='lg' collapseOnSelect>
      <Container>
        <Navbar.Brand href='/'>Insta School</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/introduction'>コース紹介</Nav.Link>
            <Nav.Link href='/materials'> レッスン教材</Nav.Link>
            <Nav.Link href='/reviews'>受講生の声</Nav.Link>
            <Nav.Link href='/contact'>お問い合わせ</Nav.Link>
          </Nav>
          <Nav className='ml-auto'>
            <Button href='/cart' className='btn-rounded'>
              申し込み
            </Button>
            <Nav.Link href='/login'>ログイン</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
