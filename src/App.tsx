import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import Loader from "./components/Loader";

// using lazy loading

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Transactions = lazy(() => import("./pages/Transactions"));
const Customers = lazy(() => import("./pages/Customers"));
const Products = lazy(() => import("./pages/Products"));
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const ProductManagement = lazy(() => import("./pages/management/ProductManagement"));
const TransactionManagement = lazy(() => import("./pages/management/TransactionManagement"));


const App = () => {
  return (

    <Router>  

      <Suspense fallback={ <Loader /> }>
        <Routes>
          <Route path="/admin/dashboard" element={ <Dashboard /> } />
          <Route path="/admin/transaction" element={ <Transactions />} />
          <Route path="/admin/customer" element={ <Customers /> } />
          <Route path="/admin/product" element={ <Products /> } />


          <Route path="/admin/product/new" element={ <NewProduct /> } />
          <Route path="/admin/product/:id" element={ <ProductManagement /> } />
          <Route path="/admin/transaction/:id" element={ <TransactionManagement /> } />
        </Routes>
      </Suspense>

    </Router>
  )
}

export default App