import React from 'react';
import * as CustomerServer from './CustomerServer';
import { useNavigate } from 'react-router-dom';

const CustomerItem = ({ customer, listCustomers }) => {

    const history = useNavigate();

    const handleDelete = async (customerId) => {
        await CustomerServer.deleteCustomer(customerId);
        listCustomers();
    };

    return (
        <div className='col-md-3 mb-4'>
            <div className='card'>
                <div className='card-body'>
                    <h5 className='card-title'>{customer.name}</h5>
                    <p className='card-text'>first_lastname: {customer.first_lastname}</p>
                </div>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>second_lastname: {customer.second_lastname}</li>
                    <li className='list-group-item'>birthdate: {customer.birthdate}</li>
                    <li className='list-group-item'>dni: {customer.dni}</li>
                    <li className='list-group-item'>address: {customer.address}</li>
                    <li className='list-group-item'>population: {customer.population}</li>
                    <li className='list-group-item'>province: {customer.province}</li>
                </ul>
                <div className='card-body text-center'>
                    <button onClick={() => history(`/customers/update/${customer.id}`, { replace: true })} className='btn btn-success'>Update</button>
                    <button onClick={() => customer.id && handleDelete(customer.id)} className='btn btn-danger'>Delete Customer</button>
                </div>
            </div>
        </div>

    );

};

export default CustomerItem;