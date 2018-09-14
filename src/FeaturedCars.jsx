import React,{Component} from 'react';
import "./Featured.css";
import Random from './Random';
import staticBanner from './images/static-banner.jpg';
const featured=[
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
]
class FeaturedCars extends Component{
render()
{
return(
<div>
    <h2 className="feature-title">Featured Cars</h2>
    <div className="row">
    <div className="col-sm-offset-1 col-sm-10">
     <Random data={featured}/>
    </div>
    </div>
    <img src={staticBanner}  alt="static banner" className="img-responsive static-banner" />
</div>
) 
}
}
export default FeaturedCars;