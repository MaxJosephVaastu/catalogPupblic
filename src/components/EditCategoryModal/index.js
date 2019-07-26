import React from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

class EditCategoryModal extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            show: false,
            name: '',
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.show === nextProps.show && prevState.show) return null
        const cat = nextProps.currentCatId ?
            nextProps.categories[nextProps.currentCatId] :
            {name: ''}
        return {
            show: nextProps.show,
            currentCatId: nextProps.currentCatId,
            ...cat
        }
    }

    submitHandler = event => {
        event.preventDefault();

        const form = event.currentTarget;
        form.className += " was-validated";

        if (form.checkValidity()) {
            const {name, currentCatId} = this.state
            if(currentCatId){
                this.props.saveCategory(currentCatId, {name});
            }
            else{
                this.props.addCategory({name});
            }
        }
    };

    changeHandler = event => {
        const field = event.target.name
        const value = event.target.value

        this.setState({ [field]: value })
    };

    render () {
        const {currentCatId} = this.state

        return (
            <Modal
                show={this.state.show}
                onHide={this.props.closeModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Form
                    onSubmit={this.submitHandler}
                    noValidate
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {currentCatId ? 'Редактирование карточки категории' : 'Добавление категории'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group as={Row} controlId="formName" >
                        <Form.Label column sm={4}>Наименование</Form.Label>
                        <Col sm={8}>
                            <Form.Control
                                name = "name"
                                type = "text"
                                value = {this.state.name}
                                onChange={this.changeHandler}
                                required
                                pattern="^([\w\s\W]{5,50})$"
                            />
                            <Form.Control.Feedback type="invalid">
                                Минимум 5 символов, максимум 40
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button type='submit'>{currentCatId ? 'Сохранить' : 'Добавить'}</Button>
                    <Button variant='light' onClick={this.props.closeModal}>Отмена</Button>
                </Modal.Footer>
            </Form>
            </Modal>
        );
    }
}

export default EditCategoryModal;
