import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Updates = () => {
  return (
    <div className="container my-5"  style={{ fontFamily: 'Oswald' }}>
      <h2 className="text-center">Updates</h2>
      <ul className="list-group">
        <li className="list-group-item">Update 1: Description of update 1.</li>
        <li className="list-group-item">Update 2: Description of update 2.</li>
        <li className="list-group-item">Update 3: Description of update 3.</li>
      </ul>
    </div>
  );
};

export default Updates;
