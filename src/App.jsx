import React,{Component} from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import HomePage from './HomePage/HomePage.jsx';
import CarDetail from "./carDetailsPage/CarDetail.jsx";
import { Switch,Route } from "react-router-dom";
class App extends Component
{
render()
{
    return (
    <div>
    <Header />
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/carDetail' component={CarDetail} />
        <Route render={()=><div>Sorry!no page found</div>}/>
    </Switch>
    <Footer />
    </div>
)
}
}
export default App;