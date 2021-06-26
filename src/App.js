import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import AllCollectionsPage from './pages/AllCollectionsPage';
import CollectionPage from './pages/CollectionPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import ShippingPage from './pages/ShippingPage';
import PaymentPage from './pages/PaymentPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import OrderPage from './pages/OrderPage';
import UserAdminPage from './pages/UserAdminPage';
import UserEditPage from './pages/UserEditPage';
import ProductAdminPage from './pages/ProductAdminPage';
import ProductEditPage from './pages/ProductEditPage';
import OrderAdminPage from './pages/OrderAdminPage';


function App() {
  return (
    <Router>
      <Header />
        <main className="py-5">
          <Container>
            <Route exact path='/' component={HomeScreen} />
            <Route path='/products/:id' component={ProductPage} />
            <Route exact path='/collections' component={AllCollectionsPage} />
            <Route path='/collections/:id' component={CollectionPage} />
            <Route path='/cart/:id?' component={CartPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/register' component={RegisterPage} />
            <Route path='/profile' component={ProfilePage} />
            <Route path='/shipping' component={ShippingPage} />
            <Route path='/payment' component={PaymentPage} />
            <Route path='/placeorder' component={PlaceOrderPage} />
            <Route path='/order/:id' component={OrderPage} />

            <Route path='/admin/users' component={UserAdminPage} />
            <Route path='/admin/user/:id/edit' component={UserEditPage} />
            <Route path='/admin/products' component={ProductAdminPage} />
            <Route path='/admin/product/:id/edit' component={ProductEditPage} />
            <Route path='/admin/orderlist/' component={OrderAdminPage} />
          </Container>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
