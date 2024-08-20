import React, { useEffect, useRef, useState } from 'react';
import { Container, Card, CardBody, Input, Form, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner';

import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

const Contact = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({ name: '', email: '' });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const nameRef = useRef(null);

    useEffect(() => {
        const input = nameRef.current;
        if (input && typeof input.setSelectionRange === 'function') {
            input.focus();
            input.setSelectionRange(0, 0);
        } else {
            console.error("setSelectionRange is not a function on the input element.");
        }
    }, []);

    const fieldChangeHandle = (event, property) => {
        setData({ ...data, [property]: event.target.value });
        setErrors({ ...errors, [property]: '' });
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (data.name.trim() === '') {
            newErrors.name = 'name is required';
            valid = false;
        } else if (data.email.trim() === '') {
            newErrors.email = 'email is required';
            valid = false;
        }

        setErrors(newErrors);
        return { valid, errors: newErrors };
    };


function createSHA256Hash(inputString) {
    const hash = crypto.createHash('sha256');
    hash.update(inputString);
    return hash.digest('hex');
}

    const submitForm = async (event) => {
        event.preventDefault();
        const { valid, errors: validationErrors } = validateForm();
        if (valid) {
            try {
                setLoading(true);
                const response = await axios.post(`${BASE_URL}/login`, data);
                setLoading(false);

                console.log(response);
                if (response.data.resCode === 200) {

                    
                    var tokenData=response.data.token;

                    

                    sessionStorage.setItem("token",btoa(tokenData) );





                    setTimeout(() => {
                        toast.success(response.data.resCode);
                    }, 50);
                    navigate('/v1/home');
                } else if (response.data.resCode === 404) {
                    toast.error(response.data.message);
                    navigate('/');
                } else {
                    toast.error(response.data.message);
                    navigate('/');
                }
            } catch (error) {
                setLoading(false);
                toast.error("An error occurred. Please try again.");
            }
        } else {
            // Display validation errors using toast
            Object.values(validationErrors).forEach((errorMessage) => {
                toast.error(errorMessage);
            });
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center vh-100" style={{ backgroundColor: '#f0f2f5' }}>
            <Container className="col-lg-3 col-md-6 col-sm-8 col-11">
                <Card className="shadow p-4 mb-5 bg-white rounded" style={{ fontFamily: 'Oswald' }}>
                    <h2 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#040720' }}>Contact</h2>
                    <div><Toaster /></div>
                    <CardBody>
                        <Form onSubmit={submitForm}>
                            {errors.name && (
                                <div className="mb-3 text-danger">
                                    {errors.name}
                                </div>
                            )}
                            {errors.email && (
                                <div className="mb-3 text-danger">
                                    {errors.email}
                                </div>
                            )}
                            <div className="mb-3">
                                <Input
                                    type="text"
                                    id="name"
                                    placeholder="Name"
                                    className="form-control rounded-3"
                                    name="Name"
                                    onChange={(e) => fieldChangeHandle(e, 'name')}
                                    value={data.name}
                                    autoComplete="off"
                                    ref={nameRef}
                                />
                            </div>
                            <div className="mb-3">
                                <Input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    className="form-control rounded-3"
                                    name="email"
                                    onChange={(e) => fieldChangeHandle(e, 'email')}
                                    value={data.email}
                                    autoComplete="off"
                                />
                            </div>
                            <div className="mb-3">
                                <Input
                                    type="textarea"
                                    id="email"
                                    placeholder="Message"
                                    className="form-control rounded-3"
                                    name="email"
                                    onChange={(e) => fieldChangeHandle(e, 'email')}
                                    value={data.email}
                                    autoComplete="off"
                                />
                            </div>
                            <div className="text-center">
                                <Button className="rounded-5 shadow" style={{ backgroundColor: '#040720', width: '100px' }} type="submit" disabled={loading}>
                                    {loading ? 'Sending...' : 'Send'}
                                </Button>
                            </div>
                            {loading && (
                                <div className="text-center mt-3">
                                    <InfinitySpin width="200" color="blue" ariaLabel="infinity-spin-loading" />
                                </div>
                            )}
                        </Form>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
};

export default Contact;
