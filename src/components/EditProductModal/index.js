import React from 'react';
import moment from 'moment'
import { Modal, Button, Form, Row, Col, Dropdown } from 'react-bootstrap';



class EditProductModal extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            show: false,
            name: '',
            price: '',
            expirationDate: '',
            category: '',
            dateIsValid: true,
            priceIsValid: true,
            nameIsValid: true,
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.show === nextProps.show && prevState.show) return null
        const prod = nextProps.currentProdId ?
            nextProps.goods[nextProps.currentProdId] :
            {name: '', price: '', expirationDate: moment(Date.now()).format('DD.MM.YYYY'), category: '0'}
        return {
            show: nextProps.show,
            categories: nextProps.categories,
            currentProdId: nextProps.currentProdId,
            ...prod
        }
    }

    submitHandler = event => {
        event.preventDefault();

        const {dateIsValid, priceIsValid, nameIsValid} = this.state
        const form = event.currentTarget;
        form.className += " was-validated";

        if (nameIsValid && dateIsValid && priceIsValid) {
            const {currentProdId, name, price, expirationDate, category} = this.state
            if(currentProdId){
                this.props.saveProduct(currentProdId, {name, price, expirationDate, category})
            }
            else{
                this.props.addProduct({name, price, expirationDate, category})
            }
        }
    };

    changeHandler = event => {
        const field = event.target.name
        const value = event.target.value

        switch (field) {
            case 'expirationDate':
                const dateArr = value.split(".")
                if (dateArr.length<3) {
                    this.setState({dateIsValid: false})
                    this.setState({ [field]: value });
                }
                const date = new Date(dateArr[2], dateArr[1] - 1, dateArr[0])
                if (new Date().getTime() >= date.getTime()) {
                    this.setState({dateIsValid: false})
                }
                else {
                    this.setState({dateIsValid: true})
                }
                break;
            case 'price':
                this.setState({priceIsValid: Number(value)>0})
                break;
            case 'name':
                this.setState({nameIsValid: value.length >= 5 && value.length <= 40})
                break;
            default:
        }
        this.setState({ [field]: value });
    };

    render () {
        const {
            categories,
            currentProdId,
            category,
            dateIsValid,
            priceIsValid,
            nameIsValid
        } = this.state

        return (
            <Modal
                show={this.state.show}
                onHide={this.props.closeModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Form
                    noValidate
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {currentProdId ? 'Редактирование карточки товара' : 'Добавление нового товара'}
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
                                    isInvalid={!nameIsValid}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Минимум 5 символов, максимум 40
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPrice">
                            <Form.Label column sm={4}>Цена</Form.Label>
                            <Col sm={8}>
                                <Form.Control
                                    name = "price"
                                    type = "text"
                                    value = {this.state.price}
                                    onChange={this.changeHandler}
                                    isInvalid={!priceIsValid}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Цена должна быть больше 0
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formDate">
                            <Form.Label column sm={4}>Цена</Form.Label>
                            <Col sm={8}>
                                <Form.Control
                                    name = "expirationDate"
                                    type = "text"
                                    value = {this.state.expirationDate}
                                    onChange={this.changeHandler}
                                    isInvalid={!dateIsValid}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Дата должна быть больше, чем {moment(Date.now()).format('DD.MM.YYYY')}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                    <Row>
                        <Form.Label column sm={4}>Категория</Form.Label>
                        <Col sm={8}>
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                                    {categories && categories[category] && categories[category].name}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {categories &&  Object.keys(categories).map(id => (
                                        <Dropdown.Item key={id} onClick={() => {this.setState({category: id})}}>{categories[id].name}</Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>


                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.submitHandler}>{currentProdId ? 'Сохранить' : 'Добавить'}</Button>
                    <Button variant='light' onClick={this.props.closeModal}>Отмена</Button>
                </Modal.Footer>
            </Form>
            </Modal>
        );
    }
}

export default EditProductModal;
