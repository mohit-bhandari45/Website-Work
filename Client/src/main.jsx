import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { GoogleOAuthProvider } from '@react-oauth/google';
import LandingPage from './pages/LandingPage.jsx';
import About from './pages/About.jsx';
import Catalog from './pages/Catalog.jsx';
import Contacts from './pages/Contacts.jsx';
import Gallery from './pages/Gallery.jsx';
import ShowMore from './pages/ShowMore.jsx';
import ShoppingCart from './pages/user/ShoppingCart.jsx';
import ArtistSignup from './pages/artist/ArtistSignup.jsx';
import UserProfile from './pages/user/UserProfile.jsx';
import ArtistProfile from './pages/artist/ArtistProfile.jsx';
import WishList from './pages/user/WishList.jsx';
import Checkout from './pages/user/Checkout.jsx';
import ProductDetails from './pages/user/ProductDetails.jsx';
import Page404 from './pages/Page404.jsx';
import { BooleanProvider } from './context/context.jsx';

const App = () => {
  return (
    <GoogleOAuthProvider clientId="1013003077692-bp8uca4g508sh0ejjmr2uichvo62t6nh.apps.googleusercontent.com">
      <BooleanProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/showmore" element={<ShowMore />} />
            <Route path="/404" element={<Page404 />} />
            <Route path="/artistsignup" element={<ArtistSignup />} />
            <Route path="/artistprofile" element={<ArtistProfile />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/productdetails" element={<ProductDetails />} />
          </Routes>
        </Router>
      </BooleanProvider>
    </GoogleOAuthProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
