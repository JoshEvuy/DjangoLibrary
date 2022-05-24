import React from 'react';

const Home = () => {

    return (
        <div className='container text-center'>
            <h5>Liberia con Python (Django Rest Framework) + React</h5>
            <p className='lead'>
                Falta por implementar/solucionar lo siguiente:
            </p>

            <ul className='list-group'>
                <li className='list-group-item d-flex justify-content-between align-items-center'>
                    Enviar valores 'nulos' desde React en los formularios
                    <span className='badge bg-danger rounded-pill'>X</span>
                </li>
                <li className='list-group-item d-flex justify-content-between align-items-center'>
                    Mostrar el estado de los libros (Reservado/No Reservado)
                    <span className='badge bg-danger rounded-pill'>X</span>
                </li>
            </ul>
        </div>
    );

};

export default Home;