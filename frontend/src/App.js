import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Hocs/Layout';
import Home from './components/Home';
import BookList from './components/Book/BookList';
import CustomerList from './components/Customer/CustomerList';
import BookrentList from './components/Bookrent/BookrentList';
import BookForm from './components/Book/BookForm';

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route exact path='/' caseSensitive={false} element={<Home />} />
        <Route exact path='/books' caseSensitive={false} element={<BookList />} />
        <Route exact path='/books/create' caseSensitive={false} element={<BookForm />} />
        <Route exact path='/books/update/:id' caseSensitive={false} element={<BookForm />} />
        <Route exact path='/customers' caseSensitive={false} element={<CustomerList />} />
        <Route exact path='/bookrents' caseSensitive={false} element={<BookrentList />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
