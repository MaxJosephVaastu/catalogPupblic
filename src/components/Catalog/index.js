import React from 'react';
import { Container, Navbar, Nav, Row, Col} from 'react-bootstrap';
import Modals from '../../containers/Modals'
import Menu from '../../containers/Menu'
import Product from '../../containers/Product';
import Category from '../../containers/Category';
import {LOGIN_MODAL} from '../../constants/Modals';

class Catalog extends React.Component {


    render() {

        const {currentProdId, currentCatId, openModal, logout, newCategory, newProduct} = this.props

        return (
            <Container fluid="true">
                <Navbar bg="dark" variant="dark" expand="md">
                    <Navbar.Brand> Каталог товаров</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {!this.props.isLoggedIn &&<Nav className="mr-auto">
                             <Nav.Link onClick={() => {openModal(LOGIN_MODAL)}}>Войти</Nav.Link>
                         </Nav>}
                        {this.props.isLoggedIn &&<Nav className="mr-auto">
                            <Nav.Link onClick={newCategory}>Добавить категорию</Nav.Link>
                            <Nav.Link onClick={newProduct}>Добавить товар</Nav.Link>
                            <Nav.Link onClick={logout}>Выйти</Nav.Link>
                        </Nav>}
                    </Navbar.Collapse>
                </Navbar>
                {this.props.isLoggedIn &&
                    <Row>
                        <Col md={4}>
                            <Menu/>
                        </Col>
                        <Col md={8}>
                            {currentProdId && <Product/>}
                            {currentCatId && <Category/>}
                        </Col>
                    </Row>
                }
                {!this.props.isLoggedIn &&
                    <Row>
                        <div className="d-block mx-auto" style={{textAlign: 'center', padding: '100px 10px'}}>Для просмотра каталога неободимо войти в приложение</div>
                    </Row>
                }

                <Modals />
            </Container>
        )
    }
}
export default (Catalog)

