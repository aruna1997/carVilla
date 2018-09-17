import React,{Component} from 'react';
import Header from './Header/Header';
import FeaturedCars from './FeaturedCars';
import Footer from './Footer/Footer';
import { connect } from "react-redux";
class App extends Component
{
render()
{
    console.log('state',this.props);
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