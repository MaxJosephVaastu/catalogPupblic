import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';



class LoginModal extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        }
    }

    submitHandler = event => {
        event.preventDefault();

        const form = event.currentTarget;
        form.className += " was-validated";

        if (form.checkValidity() === true) {
            this.props.login();
        }
    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render () {

        return (
            <Modal
                show={this.props.show}
                onHide={this.props.closeModal}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Form
                    onSubmit={this.submitHandler}
                    noValidate
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Авторизация
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                        <Form.Group controlId="formLogin">
                            <Form.Label>Логин</Form.Label>
                            <Form.Control
                                name = "login"
                                type = "text"
                                placeholder = "Логин"
                                value = {this.state.login}
                                onChange={this.changeHandler}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Заполните это поле
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control
                                name = "password"
                                type = "password"
                                placeholder = "Пароль"
                                value = {this.state.password}
                                onChange={this.changeHandler}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Заполните это поле
                            </Form.Control.Feedback>
                        </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                    <Button type='submit'>Войти</Button>
                </Modal.Footer>
            </Form>
            </Modal>
        );
    }
}

export default LoginModal;
