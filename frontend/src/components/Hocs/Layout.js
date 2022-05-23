import React from 'react';
import Navbar from '../Navbar';

const layout = (props) => (
    <div>
        <Navbar />
        <div className='container my-4'>
            {props.children}
        </div>
    </div>
);

export default layout;