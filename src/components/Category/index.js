import React from 'react';
import { Table, Button, ButtonToolbar, Modal } from 'react-bootstrap';

class Category extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            confirm: false,
        }
    }

    render() {
        const {
            currentCatId,
            categories,
            editCategory,
            delCategory,
        } = this.props

        const cat = categories[currentCatId]

        return (
            <div>
                <h3>Карточка категории</h3>
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
                        <td>{cat.name}</td>
                    </tr>
                    </tbody>
                </Table>
                <ButtonToolbar >
                    <Button variant="success" size="sm" onClick={editCategory} style={{marginRight: '20px'}}>Редактировать</Button>
                    <Button variant='danger' size="sm" onClick={() => this.setState({confirm: true})}>Удалить</Button>
                </ButtonToolbar>
                <Modal
                    show={this.state.confirm}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header>
                        <Modal.Title>Удалить категорию?</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => {this.setState({confirm: false})}}>Отмена</Button>
                        <Button variant="danger" onClick={() => {
                            this.setState({confirm: false})
                            delCategory(currentCatId)
                        }}>Удалить</Button>
                    </Modal.Footer>
                </Modal>
            </div>

        )
    }
}
export default (Category)

