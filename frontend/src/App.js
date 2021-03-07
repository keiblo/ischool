import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ContactScreen from './screens/ContactScreen'
import ReviewsScreen from './screens/ReviewsScreen'
import IntroductionScreen from './screens/IntroductionScreen'
import CourseDetailsScreen from './screens/CourseDetailsScreen'
import CartScreen from './screens/CartScreen'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route path='/' component={HomeScreen} exact />
        <Route path='/course/:id' component={CourseDetailsScreen} />
        <Route path='/contact' component={ContactScreen} />
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/reviews' component={ReviewsScreen} />
        <Route path='/introduction' component={IntroductionScreen} />
        <Footer />
      </div>
    </Router>
  )
}

export default App
