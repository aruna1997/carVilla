import React,{Component} from 'react';
import HeaderNav from './HeaderNav';
import HeaderBanner from './HeaderBanner';
import './Header.css';
class Header extends Component
{
render()
{
   return(
       <div className="head">
       <HeaderNav/>
       <HeaderBanner/>
       </div>
   )
}
}
export default Header;