import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';


class Menu extends React.Component {


    render() {
        const {
            categories,
            goods,
            showProduct,
            showCategory
        } = this.props

        return (
            <Accordion>
                {
                    Object.keys(categories).map(catId => (
                        <Card key = {`card${catId}`}>
                            <Accordion.Toggle as={Card.Header} eventKey={catId} onClick={() => {showCategory(catId)}}>
                                {categories[catId].name}
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={catId}>
                                <Card.Body style={{paddingTop: '0', paddingBottom: '12px'}}>
                                    {
                                        Object.keys(goods).filter(prodId => goods[prodId].category === catId)
                                            .map(prodId => (
                                                <Button
                                                    variant="link"
                                                    size="sm"
                                                    block
                                                    style={{textAlign:'left', padding: '6px 0 0 0'}}
                                                    key={`card${catId}_${prodId}`}
                                                    onClick={() => showProduct(prodId)}
                                                >
                                                {goods[prodId].name}
                                                </Button>
                                            ))
                                    }
                                    {
                                        Object.keys(goods).filter(prodId => goods[prodId].category === catId).length === 0 && <div>В этой категории нет товаров</div>
                                    }
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        )

                    )
                }
            </Accordion>
        )
    }
}

export default (Menu)
