import React,{Component} from 'react';
import "./Featured.css";
import Random from './Random';
import staticBanner from '../images/static-banner.jpg';
import LinearBuffer from '../carListingPage/LinearBuffer';  
import { connect } from "react-redux";
import {setCarRecord} from "../actions"
/* const featured=[
 {
   name:'One',
   city:'delhi',
   price:'453737',
   src:'https://imgd.aeplcdn.com/310x174/cw/ec/30146/MercedesBenz-CClass-Facelift-Exterior-130761.jpg?wm=0&q=85'    
 },   
 {
    name:'One',
    city:'delhi',
    price:'453737',
    src:'https://imgd.aeplcdn.com/310x174/cw/ec/30146/MercedesBenz-CClass-Facelift-Exterior-130761.jpg?wm=0&q=85'    
  },
  {
    name:'One',
    city:'delhi',
    price:'453737',
    src:'https://imgd.aeplcdn.com/310x174/cw/ec/30146/MercedesBenz-CClass-Facelift-Exterior-130761.jpg?wm=0&q=85'    
  },
  {
    name:'One',
    city:'delhi',
    price:'453737',
    src:'https://imgd.aeplcdn.com/310x174/cw/ec/30146/MercedesBenz-CClass-Facelift-Exterior-130761.jpg?wm=0&q=85'    
  },
  {
    name:'One',
    city:'delhi',
    price:'453737',
    src:'https://imgd.aeplcdn.com/310x174/cw/ec/30146/MercedesBenz-CClass-Facelift-Exterior-130761.jpg?wm=0&q=85'    
  },
  {
    name:'One',
    city:'delhi',
    price:'453737',
    src:'https://imgd.aeplcdn.com/310x174/cw/ec/30146/MercedesBenz-CClass-Facelift-Exterior-130761.jpg?wm=0&q=85'    
  }      
] */
class FeaturedCars extends Component{
  
  constructor(props)
  {
    super(props);
    this.state={
      data:[],
      loading:true
    }
  }
  myOptions = {
      method: 'GET',
      cache: 'default',
      headers:{
        'Authorization':'Bearer connectwithapi'
      }
    };
  componentDidMount()
  {
    const url='http://172.18.3.90:3001/api/v1/cars';
    fetch(url,this.myOptions)
    .then(response =>response.json())
    .then(json=>{
      this.setState({data:json.data})
      this.props.setCarRecord(this.state.data)
      this.setState({loading:false})
    }).catch(e => {
      console.log(e);
     });  
  }
  showSlider()
  {
    if(!this.state.loading)
    {
     return (<Random data={this.state.data}/>)
    }
    else
    {
    return (<div><LinearBuffer/></div>);
    }
  }
render()
{ 
return(
<div>
    <h2 className="feature-title">Featured Cars</h2>
    <div className="row">
    <div className="col-sm-offset-1 col-sm-10">
     {this.showSlider()}
    </div>
    </div>
    <img src={staticBanner}  alt="static banner" className="img-responsive static-banner" />
</div>
) 
}
}
function mapStateToProps(state)
{
  return state;
}
export default connect(mapStateToProps,{setCarRecord})(FeaturedCars);