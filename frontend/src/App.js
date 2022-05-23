import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Hocs/Layout';
import Home from './components/Home';
import BookList from './components/Book/BookList';
import CustomerList from './components/Customer/CustomerList';
import BookrentList from './components/Bookrent/BookrentList';

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path='/' caseSensitive={false} element={<Home />} />
        <Route path='/books' caseSensitive={false} element={<BookList />} />
        <Route path='/customers' caseSensitive={false} element={<CustomerList />} />
        <Route path='/bookrents' caseSensitive={false} element={<BookrentList />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
