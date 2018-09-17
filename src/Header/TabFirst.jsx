import React,{ Component } from 'react';
import "./Header.css";
import {Tab,Tabs,FormControl,FormGroup,Button} from 'react-bootstrap';
import {setCarName} from '../actions';
import {connect} from 'react-redux';
class TabFirst extends Component
{
 constructor(props)
 {
     super(props);
     this.state={
         carName:''
     }
 }    
 handleChange(event)
 {
     this.setState({carName:event.target.value})
 }
render()
{
    return (
        <form>
            <FormGroup>
                <div className="row">
                    <div className="col-xs-10 no-padding">
                        <FormControl
                            type="text"
                            value={this.state.carName}
                            placeholder="Enter Name..."
                            onChange={this.handleChange.bind(this)}
                            className="input-section no-border"
                        />
                    </div>
                    <div className="col-xs-2 no-padding">
                        <Button bsStyle="success" onClick={() => {
                            if (this.state.carName.trim().length != 0) {
                                this.props.setCarName(this.state.carName);
                            }
                            else {
                                alert('Field cannot be leave blank');
                            }
                        }}>Search</Button>
                    </div>
                </div>
            </FormGroup>
        </form>
    )
}
}
export default connect(null,{setCarName})(TabFirst);