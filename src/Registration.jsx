import React, { useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

const Registration = () => {
    const [data,setData]=useState({
        studentName:"",
        studentAddress:"",
        studentGender:"",
        studentDOB:"",
        studentCourse:"",

    })
    const[validationErrors,setVlidationErrors]=useState({});
    const[isFormValid,setFormValid]=useState(false)
    return (
        <>
            <div style={{marginLeft:"350px",width:"700px"}} className='border rounded bg-info p-3 container text-center'>
                {/* Name */}
                <FloatingLabel controlId="floatingName" label="Enter your name">
                    <Form.Control type="text" placeholder="name" />
                </FloatingLabel>

                {/* Address */}
                <FloatingLabel
                    controlId="floatingTextarea"
                    label="Enter your Address"
                    className="mb-3"
                >
                    <Form.Control as="textarea" placeholder="Leave a comment here" />
                </FloatingLabel>

                {/*email */}
                <FloatingLabel controlId="floatingName" label="Email Address">
                    <Form.Control type="mail" placeholder="name" />
                </FloatingLabel>
                {/*radio buytton  */}
                <Form>
                    <div className="mb-3 d-flex mt-3">
                        <Form.Check className='mx-4'
                            type="radio"
                            id="male"
                            name="gender"
                            label="Male"
                        />
                        <Form.Check className='mx-4'
                            type="radio"
                            id="female"
                            name="gender"
                            label="Female"
                        />
                        <Form.Check className='mx-4'
                            type="radio"
                            id="other"
                            name="gender"
                            label="Others"
                        />
                    </div>
                </Form>
                <FloatingLabel controlId="floatingName" label="Enter your Date of Birth">
                    <Form.Control type="date" placeholder="name" />
                </FloatingLabel>
                <Form.Select aria-label="Default select example">
                    <option hidden> Select Subject</option>
                    <option value="1">Biology</option>
                    <option value="2">Computer Science</option>
                    <option value="3">Commerce</option>
                    <option value="3">Humanities</option>
                </Form.Select>
                <div className='mt-4'>
                    <button className='btn btn-warning me-3'>CANCEL</button> 
                    <button className=' btn btn-success'>REGISTER</button>
    
                </div>
            </div>
        </>
    )
}

export default Registration