import React from 'react';
import { Table, Button, ButtonToolbar, Modal } from 'react-bootstrap';

class Product extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            confirm: false,
        }
    }

    hideConfirm () {
        this.setState({confirm: false})
    }

    showConfirm () {
        this.setState({confirm: true})
    }

    del () {
        this.setState({confirm: false})
        this.props.delProduct(this.props.currentProdId)
    }

    render() {
        const {
            currentProdId,
            categories,
            goods,
            editProduct,
        } = this.props

        const prod = goods[currentProdId]

        return (
            <div>
                <h3>Карточка товара</h3>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Характеристика</th>
                        <th>Значение</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Наименование</td>
                        <td>{prod.name}</td>
                    </tr>
                    <tr>
                        <td>Цена</td>
                        <td>{prod.price}</td>
                    </tr>
                    <tr>
                        <td>Срок годности</td>
                        <td>{prod.expirationDate}</td>
                    </tr>
                    <tr>
                        <td>Категория</td>
                        <td>{categories[prod.category].name}</td>
                    </tr>
                    </tbody>
                </Table>
                <ButtonToolbar>
                    <Button variant="success" size="sm" onClick={editProduct} style={{marginRight: '20px'}}>Редактировать</Button>
                    <Button variant='danger' size="sm" onClick={this.showConfirm.bind(this)}>Удалить</Button>
                </ButtonToolbar>
                <Modal
                    show={this.state.confirm}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header>
                        <Modal.Title>Удалить товар?</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.hideConfirm.bind(this)}>Отмена</Button>
                        <Button variant="danger" onClick={this.del.bind(this)}>Удалить</Button>
                    </Modal.Footer>
                </Modal>
                </div>

        )
    }
}
export default (Product)

