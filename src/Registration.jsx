import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

const Registration = () => {
    return (
        <>
            <div className='border'>
                <FloatingLabel controlId="floatingName" label="Enter your name">
                    <Form.Control type="text" placeholder="name" />
                </FloatingLabel>
            </div>
        </>
    )
}

export default Registration