import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customer from './customer/Customer';
import Home from './home/Home';
import Layout from './layout/Layout';
import NoPage from './layout/NoPage';

const App = () => {
  console.log(process.env);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="customer" element={<Customer />} />
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
