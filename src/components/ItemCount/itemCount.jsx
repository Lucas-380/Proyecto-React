import  React from 'react'
import { Card, Button } from 'react-bootstrap'
import './itemCount.css'

const itemCount = ({stock, add, remove, initial}) => {


    return (
        <div className="m-5">
            <Card style={{ width: '18rem' , margin:'auto' }}>
                <Card.Header>Item Count</Card.Header>
                <Card.Body>
                    <Card.Title className="mb-2 text-muted mx-5">Stock Inicial = {stock}</Card.Title>
                    <Card.Text>                        
                        <Button className="btn-success" onClick={()=>add()}>+</Button>
                        <h3 className="numberInitial">{initial}</h3>
                        <Button className="btn-danger"  onClick={()=>remove()}>-</Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default itemCount
