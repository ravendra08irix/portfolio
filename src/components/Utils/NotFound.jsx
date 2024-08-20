import React from 'react';
import { InfinitySpin, Puff } from 'react-loader-spinner';

const NotFound = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <div style={{ textAlign: 'center', maxWidth: '400px' }}>




                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '500px' }}>

                    <InfinitySpin
                        visible={true}
                        width="200"
                        color="red"
                        ariaLabel="infinity-spin-loading"
                    />

                   


                </div>
                <h1>404 !</h1>
                <p>Oops! The page you're looking for doesn't exist.</p>
                <p>
                    <a href="/" style={{ textDecoration: 'none' }}>Go back to the home page</a>
                </p>
            </div>
        </div>
    );
};

export default NotFound;
