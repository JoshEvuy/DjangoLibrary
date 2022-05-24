import React, { useState, useEffect } from 'react';
import * as CustomerServer from './CustomerServer';
import CustomerItem from './CustomerItem';
import { Link } from 'react-router-dom';

const CustomerList = () => {

    const [customers, setCustomers] = useState([]);

    const listCustomers = async () => {
        try {
            const res = await CustomerServer.listCustomers();
            const data = await res.json();
            setCustomers(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        listCustomers();
    }, []);

    return (
        <div className='row'>
            <div className='col-md-12 mb-4'>
                <Link type='button' className='btn btn-primary' to='/customers/create'>Create a customer</Link>
            </div>
            {customers.map((customer) => (
                <CustomerItem key={customer.id} customer={customer} listCustomers={listCustomers} />
            ))}
        </div>
    );
};

export default CustomerList;