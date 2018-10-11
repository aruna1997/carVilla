import React,{Component} from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import HomePage from './HomePage/HomePage.jsx';
import CarList from "./carListingPage/CarList.jsx";
import CarDetails from "./CarDetailsPage/CarDetails.jsx";
import EnquiryPage from "./EnquiryPage/EnquiryPage.jsx";
import { Switch,Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#ff8f00",//"#2A2A2A",//,
            contrastText:"black"//"#fcfcfc"//"black"
             }, 
        secondary: {
             main: '#616161',//'#841958',//,
             contrastText:"white" 
             },     
        type:'dark' 
    },
});

class App extends Component
{ 
    constructor(props)
    {
        super(props);
        this.state={
            carId:0
        }
        this.changeId=this.changeId.bind(this);
    }
    changeId(id)
    {
        this.setState({carId:id});
    }
    render() {
        return (
            <MuiThemeProvider theme={theme}>
            <div>
            <Header />
            <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/carList' render={()=>(<CarList changeId={this.changeId}/>)} />
            <Route path='/enquire' component={EnquiryPage} />
            {this.state.carId!==0?<Route path='/carDetail' render={props=> <CarDetails {...props}/> }/>:<div style={{margin:"100px"}}>Sorry!no page found</div>}
            <Route render={()=><div style={{margin:"100px"}}>Sorry!no page found</div>}/>
            </Switch>
            <Footer />
            </div>
            </MuiThemeProvider>
        )
    }
}
export default App;