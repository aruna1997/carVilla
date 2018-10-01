import React,{Component} from "react";
import { TopBanner } from "./TopBanner.jsx";
import FeaturedCars from "./FeaturedCars.jsx";
class HomePage extends Component
{
render()
{
    return(<div>
         <TopBanner/>
         <FeaturedCars/>   
          </div>)
}
}
export default HomePage;