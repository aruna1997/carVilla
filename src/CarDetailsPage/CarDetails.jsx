import React,{Component} from "react";
import { connect } from "react-redux";
import CarView from "./CarView.jsx";
class CarDetails extends Component
{
    render()
    {
        if(this.props.data)
        {
           let a={};
           const id=this.props.location.state;
           console.log('props',this.props);
           this.props.data.forEach(key=>{
               if(key.id===id)
               {
                   a=key;
               }
           })
           return <CarView data={a} />;
        }
        else
        {
              return "not there";
        }
    }
}
function mapStateToProps(state)
{
    return state;
}
export default connect(mapStateToProps,null)(CarDetails);