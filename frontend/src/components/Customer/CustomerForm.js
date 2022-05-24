import React, { useEffect, useState } from 'react';
import * as CustomerServer from './CustomerServer';
import { useNavigate, useParams } from 'react-router-dom';

// let current = new Date();
// let current_date = `${current.getFullYear()}-${current.getMonth() + 2}-${current.getDate()}`;

const CustomerForm = () => {

    const history = useNavigate();
    const params = useParams();

    const initialState = {
        name: '',
        first_lastname: '',
        second_lastname: '',
        birthdate: '',
        dni: '',
        address: '',
        population: '',
        province: ''
    };

    const [customer, setCustomer] = useState(initialState);

    const handleInputChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res;
            if (!params.id) {
                res = await CustomerServer.createCustomer(customer);
                const data = await res.json();
                if (data.message === 'Success') {
                    setCustomer(initialState);
                }
            } else {
                await CustomerServer.updateCustomer(params.id, customer);
            }

            history('/customers', { replace: true });
        } catch (error) {
            console.log(error);
        }
    };

    const getCustomer = async (customerId) => {
        try {
            const res = await CustomerServer.getCustomer(customerId);
            const data = await res.json();
            const { name, first_lastname, second_lastname, birthdate, dni, address, population, province } = data;
            setCustomer({ name, first_lastname, second_lastname, birthdate, dni, address, population, province });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (params.id) {
            getCustomer(params.id)
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className='col-md-3 mx-auto'>
            <h2 className='mb-3 text-center'>Customer</h2>
            <form onSubmit={handleSubmit} className='row g-3'>
                <div className='col-md-12'>
                    <label htmlFor='name' className='form-label'>name</label>
                    <input type='text' name='name' value={customer.name} onChange={handleInputChange} className='form-control' id='name' autoFocus minLength={2} maxLength={15} required />
                </div>
                <div className='col-md-12'>
                    <label htmlFor='first_lastname' className='form-label'>first_lastname</label>
                    <input type='text' name='first_lastname' value={customer.first_lastname} onChange={handleInputChange} className='form-control' id='first_lastname' minLength={2} maxLength={20} required />
                </div>
                <div className='col-6'>
                    <label htmlFor='second_lastname' className='form-label'>second_lastname</label>
                    <input type='text' name='second_lastname' value={customer.second_lastname} onChange={handleInputChange} className='form-control' id='second_lastname' minLength={2} maxLength={20} required />
                </div>
                <div className='col-6'>
                    <label htmlFor='birthdate' className='form-label'>birthdate</label>
                    <input type='date' name='birthdate' value={customer.birthdate} onChange={handleInputChange} className='form-control' id='birthdate' required />
                </div>
                <div className='col-md-6'>
                    <label htmlFor='dni' className='form-label'>dni</label>
                    <input type='text' name='dni' value={customer.dni} onChange={handleInputChange} className='form-control' id='dni' minLength={2} maxLength={12} required />
                </div>
                <div className='col-md-6'>
                    <label htmlFor='address' className='form-label'>address</label>
                    <input type='text' name='address' value={customer.address} onChange={handleInputChange} className='form-control' id='address' minLength={2} maxLength={50} required />
                </div>
                <div className='col-md-6'>
                    <label htmlFor='population' className='form-label'>population</label>
                    <input type='text' name='population' value={customer.population} onChange={handleInputChange} className='form-control' id='population' minLength={2} maxLength={30} required />
                </div>
                <div className='col-md-6'>
                    <label htmlFor='province' className='form-label'>province</label>
                    <input type='text' name='province' value={customer.province} onChange={handleInputChange} className='form-control' id='province' minLength={2} maxLength={20} required />
                </div>
                <div className='col-md-12'>
                    {
                        params.id ? (
                            <button type='submit' className='btn btn-primary'>Update</button>
                        ) : (
                            <button type='submit' className='btn btn-success'>Create</button>
                        )
                    }

                </div>
            </form>
        </div>
    );
};

export default CustomerForm;