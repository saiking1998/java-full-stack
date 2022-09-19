import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Boll from './images/boll.png'

function RectBoot() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Boll} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Button variant='success' size='lg'>click here</Button>

        </div>
    )
}

export default RectBoot