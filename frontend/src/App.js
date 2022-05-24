import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Hocs/Layout';
import Home from './components/Home';
import BookList from './components/Book/BookList';
import BookForm from './components/Book/BookForm';
import CustomerList from './components/Customer/CustomerList';
import CustomerForm from './components/Customer/CustomerForm';
import BookrentList from './components/Bookrent/BookrentList';
import BookrentForm from './components/Bookrent/BookrentForm';

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route exact path='/' caseSensitive={false} element={<Home />} />

        <Route exact path='/books' caseSensitive={false} element={<BookList />} />
        <Route exact path='/books/create' caseSensitive={false} element={<BookForm />} />
        <Route exact path='/books/update/:id' caseSensitive={false} element={<BookForm />} />

        <Route exact path='/customers' caseSensitive={false} element={<CustomerList />} />
        <Route exact path='/customers/create' caseSensitive={false} element={<CustomerForm />} />
        <Route exact path='/customers/update/:id' caseSensitive={false} element={<CustomerForm />} />

        <Route exact path='/bookrents' caseSensitive={false} element={<BookrentList />} />
        <Route exact path='/bookrents/create' caseSensitive={false} element={<BookrentForm />} />
        <Route exact path='/bookrents/update/:id' caseSensitive={false} element={<BookrentForm />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
