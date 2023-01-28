import { Routes, Route } from "react-router-dom";
import Cookies from "universal-cookie";
import { ToastContainer } from 'react-toastify';

import Home from "./pages/Home";
import SignIn from "./pages/Auth/SignIn";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import PrivateRoutes from "./components/Routes/PrivateRoutes";

// Admin
import Dashboard from "./pages/Admin/Dashboard";
import ProductList from "./pages/Admin/Products";

const App = () => {
  const cookies = new Cookies();
  const routePrefix = "/admin";
  return (
    <>
      <ToastContainer position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signin" element={<SignIn />} />
        <Route element={<PrivateRoutes user={!!cookies.get('isAuthenticated')} />} >
          <Route path={`${routePrefix}/dashboard`} element={<Dashboard />} />
          <Route path={`${routePrefix}/products`} element={<ProductList />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>

  );
}

export default App;
