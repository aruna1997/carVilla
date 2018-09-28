import React,{Component} from 'react';
import "./Featured.css";
import Random from './Random';
import staticBanner from './images/static-banner.jpg';
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
      cache: 'default'
    };
  componentDidMount()
  {
    const url='http://172.18.3.90:3000/api/v1/cars';
    fetch(url,this.myOptions)
    .then(response =>response.json())
    .then(json=>{
      this.setState({data:json.data})
      this.setState({loading:false})
    }).catch(e => {
      console.log(e);
     });  
  }
  showSlider()
  {
    if(!this.state.loading&&this.state.data.length!=0)
    {
     return (<Random data={this.state.data}/>)
    }
    else
    {
      return "one";
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
export default FeaturedCars;