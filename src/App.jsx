import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";

import Home from './pages/Home/Home'
import Shop from './pages/ShopProduckt/ShopProduckt'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Signup from './pages/Auth/Signup'
import Signin from './pages/Auth/Signin'
import PageNotFound from './pages/PageNotFound'
import About from './pages/About/About'

import BlogCards from './pages/Blog/components/BlogCards'
import SingleBlog from './pages/Blog/Single Blog/SingleBlog'
import DashboardInfo from "./pages/Dashboard/components/DashboardInfo";
import OrderDetail from "./pages/Dashboard/components/OrderDetail";
import Settings from "./pages/Dashboard/components/Settings";
import OrderHistory from "./pages/Dashboard/components/OrderHistory";
import History from "./pages/Dashboard/components/History";
import Dashboard from "./pages/Dashboard/Dashboard";
import RootLayout from "./components/layouts/RootLayout";
import Index from "./pages/Blog/Index";
import ShopProvider from "./contexts/shop/ShopContext";
import Favorite from "./pages/Favorite/Favorite";
import {Card} from "./components/common/Cards/Card";
import AddProduct from "./pages/Dashboard/components/AddProduct";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Faqs from "./pages/Faqs/Faqs";
import { useEffect, useState } from "react";
import { getUser } from "./utils/utils";
import DrinkIndex from "./pages/Categories/Drink/DrinkIndex";
import Yogurt from "./pages/Categories/Yogurt/Yogurt";
import Cake from "./pages/Categories/Cake/Cake";
import Butter from "./pages/Categories/Butter/Butter";
import Contact from "./pages/Contact/Contact";

export default function App() {
  const [logged, setLogged] = useState(true)
  const [user, setUser] = useState({})

  useEffect(() => {
    (async () => {
      const res = await getUser()
      setLogged(res !== null)
      setUser(res)
    })()
  }, [])

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
        {logged ? (
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<DashboardInfo />} />
            <Route path="order-history" element={<OrderHistory />}>
              <Route index element={<History></History>} />
              <Route path="order-detail" element={<OrderDetail></OrderDetail>} />
            </Route>
            <Route path="settings" element={<Settings></Settings>} />
            {user?.role === 'Seller' && (
              <Route path="addProduct" element={<AddProduct />} />
            )}
          </Route>
        ) : <Route path="PageNotFound" element={<PageNotFound />} />}
        <Route path="favorite" element={<Favorite />} />
        <Route path="shoppingCart" element={<ShoppingCart />} />
        <Route path="drinkIndex" element={<DrinkIndex/>} />
        <Route path="yogurt" element={<Yogurt/>} />
        <Route path="cake" element={<Cake/>} />
        <Route path="butter" element={<Butter/>} />
        <Route path="blog/:CardID" element={<SingleBlog />} />
        <Route path="product" element={<Shop />} />
        <Route path="card" element={<Card />} />
        <Route path="shop/:productID" element={<ProductDetails />} />
        <Route path="sign-up" element={<Signup />} />
        <Route path="sign-in" element={<Signin />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="PageNotFound" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to={'/PageNotFound'} />} />
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
}
