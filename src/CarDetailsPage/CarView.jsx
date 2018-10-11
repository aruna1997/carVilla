import React,{Component} from "react";
import ControlledExpansionPanels from "./ControlledExpansionPanels";
const background={
    height:"400px",
    backgroundPosition:"center",
    backgroundSize:"contain",
    backgroundRepeat:"no-repeat"
}


class CarView extends Component{
    render(){
       const {data}=this.props;
       console.log('data',data);
        return(
            <div className="row">
            <div className="col-md-6 col-sm-12" style={{...background,backgroundImage:`url(http://172.18.3.90:3001${data.image.url})`}}>
              {/* <img src={"http://172.18.3.90:3001"+data.image.url} width="100%"></img> */}
               {console.log('check-url',`http://172.18.3.90:3001+${data.image.url}`)}
               
            </div>
            <div className="col-md-6 col-sm-12">
                <ControlledExpansionPanels data={data}/>
            </div>  
            </div>
        )
    }
}
export default CarView;