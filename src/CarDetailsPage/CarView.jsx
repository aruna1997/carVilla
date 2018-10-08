import React,{Component} from "react";
class CarView extends Component{
    render(){
       const {data}=this.props;
       console.log('data',data);
        return(
            <div style={{margin:"100px"}}>ok</div>  
        )
    }
}
export default CarView;