import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";

// Pages
import Home from './pages/Home/Home'

import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Signup from './pages/Auth/Signup'
import Signin from './pages/Auth/Signin'
import PageNotFound from './pages/PageNotFound'
import About from './pages/About/About'

import BlogCards from './pages/Blog/components/BlogCards'
import SingleBlog from './pages/Blog/Single Blog/SingleBlog'
import DashboardInfo from "./pages/Dashboard/components/DashboardInfo";
import OrderDetail from "./pages/Dashboard/components/OrderDetail";
import UserAddress from "./pages/Dashboard/components/UserAddress";
import Settings from "./pages/Dashboard/components/Settings";
import OrderHistory from "./pages/Dashboard/components/OrderHistory";
import History from "./pages/Dashboard/components/History";
import Dashboard from "./pages/Dashboard/Dashboard";
import RootLayout from "./components/layouts/RootLayout";
import Index from "./pages/Blog/Index";
import ShopProvider from "./contexts/shop/ShopContext";


export default function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />

        <Route path="blog" element={<Index />}>
          <Route index element={<BlogCards />}></Route>
          <Route path="blog/:CardID" element={<SingleBlog />} />
        </Route>
        <Route
          path="shop"
          element={
            <ShopProvider>
              <Shop />
            </ShopProvider>
          }
        />
        <Route path="product/:productID" element={<ProductDetails />} />
        <Route path="sign-in" element={<Signup />} />
        <Route path="sign-up" element={<Signin />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<DashboardInfo />} />
          <Route path="order-history" element={<OrderHistory />}>
            <Route  index  element = {<History></History>}/>
            <Route path="order-detail"  element={<OrderDetail></OrderDetail>} />
          </Route>
          <Route path="settings" element={<Settings></Settings>}/>
          <Route path="wishlist" element={<UserAddress />} />
        </Route>
        <Route path="blog/:CardID" element={<SingleBlog />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:productID" element={<ProductDetails />} />
        <Route path="sign-up" element={<Signup />} />
        <Route path="sign-in" element={<Signin />} />
        <Route path="about" element={<About />} />
        <Route path="PageNotFound" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to={'/PageNotFound'} />} />
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
}
