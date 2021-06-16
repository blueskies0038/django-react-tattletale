import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import AllCollectionsPage from './pages/AllCollectionsPage';
import CollectionPage from './pages/CollectionPage';

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
          </Container>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
