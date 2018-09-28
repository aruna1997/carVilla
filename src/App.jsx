import React,{Component} from 'react';
import Header from './Header/Header';
import FeaturedCars from './FeaturedCars';
import Footer from './Footer/Footer';
class App extends Component
{
render()
{
    return (
    <div>
    <Header />
    <FeaturedCars/>
    <Footer />
    </div>
)
}
}
export default App;