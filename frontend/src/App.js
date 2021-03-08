import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ContactScreen from './screens/ContactScreen'
import ReviewsScreen from './screens/ReviewsScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import IntroductionScreen from './screens/IntroductionScreen'
import CourseDetailsScreen from './screens/CourseDetailsScreen'
import CartScreen from './screens/CartScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PaymentScreen'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route path='/placeorder' component={PlaceOrderScreen} />
        <Route path='/payment' component={PaymentScreen} />
        <Route path='/shipping' component={ShippingScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/profile' component={ProfileScreen} />
        <Route path='/course/:id' component={CourseDetailsScreen} />
        <Route path='/contact' component={ContactScreen} />
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/reviews' component={ReviewsScreen} />
        <Route path='/introduction' component={IntroductionScreen} />

        <Route path='/' component={HomeScreen} exact />
        <Footer />
      </div>
    </Router>
  )
}

export default App
