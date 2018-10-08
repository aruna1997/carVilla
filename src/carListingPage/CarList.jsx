import React,{Component} from "react";
import MediaCard from "./MediaCard";
import LinearBuffer from "./LinearBuffer";
import CarListHeading from "./CarListHeading";
import { connect } from "react-redux";
import { setCarRecord } from "../actions";
import "./CarList.css";

/* 
const d=[
    {
        src:"https://imgd.aeplcdn.com/310x174/cw/ec/30146/MercedesBenz-CClass-Facelift-Exterior-130761.jpg?wm=0&q=85",
        title:"one"
    },
    {
        src:"https://imgd.aeplcdn.com/310x174/cw/ec/30146/MercedesBenz-CClass-Facelift-Exterior-130761.jpg?wm=0&q=85",
        title:"one"
    },
    {
        src:"https://imgd.aeplcdn.com/310x174/cw/ec/30146/MercedesBenz-CClass-Facelift-Exterior-130761.jpg?wm=0&q=85",
        title:"one"
    },
    {
        src:"https://imgd.aeplcdn.com/310x174/cw/ec/30146/MercedesBenz-CClass-Facelift-Exterior-130761.jpg?wm=0&q=85",
        title:"one"
    },
    {
        src:"https://imgd.aeplcdn.com/310x174/cw/ec/30146/MercedesBenz-CClass-Facelift-Exterior-130761.jpg?wm=0&q=85",
        title:"one"
    },
] */
class CarList extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            loading:true,
            data:[]
        }
    }
    myOptions={
        method:'GET',
        cache:'default',
        headers:{
            'Authorization':"Bearer connectwithapi"
        }
    }
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
    renderCar()
    {
        if(!this.state.loading)
        {
            return (<div className="cardRoot">
                {this.state.data.map((key,index)=>{
                    return <MediaCard key={index} data={key} changeId={this.props.changeId}/>
                })}
                 </div>
            )
        }
        else
        {
           return (<div><LinearBuffer /></div>)
        }
    }
    render()
    {
        return(<React.Fragment>
        <CarListHeading/>
        {this.renderCar()}
        </React.Fragment>
        )
    }
}
export default connect(null,{setCarRecord})(CarList);