import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Container, Nav, Button} from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar bg='light' expand='lg' collapseOnSelect>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>Insta School</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <LinkContainer to='/introduction'>
              <Nav.Link>コース紹介</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/reviews'>
              <Nav.Link>受講生の声</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact'>
              <Nav.Link>お問い合わせ</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className='ml-auto'>
            <LinkContainer to='/cart'>
              <Button className='btn-rounded' type='button'>
                <i className='fas fa-hashtag'></i>申し込み
              </Button>
            </LinkContainer>
            <LinkContainer to='/login'>
              <Nav.Link>
                <i className='fas fa-user'></i>ログイン
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
