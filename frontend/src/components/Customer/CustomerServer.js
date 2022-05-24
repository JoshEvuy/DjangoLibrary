const API_BASE_ENDPOINT = 'http://localhost:8000/api';
const API_BOOK_ENDPOINT = API_BASE_ENDPOINT + '/customers/';

export const listCustomers = async () => {
    return await fetch(API_BOOK_ENDPOINT);
};

export const getCustomer = async (customerId) => {
    return await fetch(`${API_BOOK_ENDPOINT}${customerId}`);
};

export const createCustomer = async (newCustomer) => {
    return await fetch(API_BOOK_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': String(newCustomer.name).trim(),
            'first_lastname': String(newCustomer.first_lastname).trim(),
            'second_lastname': String(newCustomer.second_lastname).trim(),
            'birthdate': String(newCustomer.birthdate).trim(),
            'dni': String(newCustomer.dni).trim(),
            'address': String(newCustomer.address).trim(),
            'population': String(newCustomer.population).trim(),
            'province': String(newCustomer.province).trim(),
        })
    });
};

export const updateCustomer = async (customerId, updatedCustomer) => {
    return await fetch(`${API_BOOK_ENDPOINT}${customerId}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': String(updatedCustomer.name).trim(),
            'first_lastname': String(updatedCustomer.first_lastname).trim(),
            'second_lastname': String(updatedCustomer.second_lastname).trim(),
            'birthdate': String(updatedCustomer.birthdate).trim(),
            'dni': String(updatedCustomer.dni).trim(),
            'address': String(updatedCustomer.address).trim(),
            'population': String(updatedCustomer.population).trim(),
            'province': String(updatedCustomer.province).trim(),
        })
    });
};

export const deleteCustomer = async (customerId) => {
    return await fetch(`${API_BOOK_ENDPOINT}${customerId}`, {
        method: 'DELETE',
    });
};