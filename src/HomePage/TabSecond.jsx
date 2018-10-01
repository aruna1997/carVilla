import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Featured.css";
import {FormControl, FormGroup, Button } from 'react-bootstrap';
import {setCity,setMaxPrice,setMinPrice} from '../actions';
export class TabSecond extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minPrice: 0,
            maxPrice: Number.MAX_SAFE_INTEGER,
            city: ''
        }
    }
    componentDidMount()
    {
     this.b.focus();
    }
    handleChangeCity(event) {
        this.setState({ city: event.target.value });
    }
    getValidPrice() {
        if (this.state.maxPrice < this.state.minPrice) {
            return 'error';
        }
        else {
            return 'success';
        }
    }
    showmenu() {
        let a = document.getElementById('hided-dropdown').style.display
        if (a === "block") {
            document.getElementById('hided-dropdown').style.display = "none";
        }
        else {
            document.getElementById('hided-dropdown').style.display = "block";
        }
    }
    changeMinPrice = (value, check) => {
        this.setState({ minPrice: value });
        if (check !== 0) {
            document.getElementById("min-list").style.display = "none";
            document.getElementById("max-list").style.display = "block";
        }
    }
    changeMaxPrice(value, check) {
        this.setState({ maxPrice: value });

        if (check !== 0) {
            document.getElementById('hided-dropdown').style.display = "none";
        }
    }
    showmaxPrice() {
        if (this.state.maxPrice === Number.MAX_SAFE_INTEGER || (!this.state.maxPrice)) {
            return " "
        }
        else {
            return this.state.maxPrice;
        }
    }
    setParam() {
        if (this.state.city.trim().length !== 0) {
            this.props.setCity(this.state.city);
        }
        else {
            alert('Field cannot be leave blank');
        }
        if (this.state.minPrice > this.state.maxPrice) {
            alert('maximum price cannot be lesser than maximum price');
        }
        else {
            this.props.setMaxPrice(this.state.maxPrice);
            this.props.setMinPrice(this.state.minPrice);
        }

    }
    render() {
        return (
            <div>
                <FormGroup
                    validationState={this.getValidPrice()}>
                    <div className="row">
                        <div className="col-xs-5 no-padding">
                            <FormControl
                                type="text"
                                value={this.state.city}
                                placeholder="Enter City..."
                                onChange={this.handleChangeCity.bind(this)}
                                className="input-section no-border"
                                inputRef={(ref)=>{this.b=ref}}
                            />
                        </div>
                        <div className="col-xs-5 no-padding">
                            <div className="row">
                                <div className="col-xs-10 zero-padding display-price" onClick={this.showmenu.bind(this)}>
                                    {this.state.minPrice + "L-" + this.showmaxPrice() + "L"}
                                    <FormControl.Feedback />
                                </div>
                                <div className="col-xs-2 zero-padding dropdown-btn" onClick={this.showmenu.bind(this)}>
                                    <span className="fa fa-angle-down"></span>
                                </div>
                                <div id="hided-dropdown">
                                    <div className="row max-min">
                                        <div className="col-xs-offset-1 col-xs-4 no-padding">
                                            <FormControl
                                                id="Min-price"
                                                type="number"
                                                min='0'
                                                placeholder="Min.."
                                                
                                                onChange={(event) => { this.changeMinPrice(event.target.valueAsNumber, 0)}}
                                                onClick={() => {
                                                    document.getElementById("min-list").style.display = "block";
                                                    document.getElementById("max-list").style.display = "none";
                                                }}
                                            />
                                        </div>
                                        <div className="col-xs-offset-2 col-xs-4 no-padding">
                                            <FormControl
                                                id="Max-price"
                                                type="number"
                                                min={this.state.minPrice}
                                                placeholder="Max.."
                                                onChange={event => {
                                                    this.changeMaxPrice(event.target.valueAsNumber, 0)
                                                }}
                                                onClick={() => {
                                                    if (this.state.maxPrice === Number.MAX_SAFE_INTEGER) {
                                                        this.setState({ maxPrice: this.state.minPrice })
                                                    }
                                                    document.getElementById("max-list").style.display = "block";
                                                    document.getElementById("min-list").style.display = "none";
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <ul id="min-list">
                                            <li className="min-item" onClick={() => this.changeMinPrice(0, 1)}>Any</li>
                                            <li className="min-item" onClick={() => this.changeMinPrice(1, 1)}>1 Lakh</li>
                                            <li className="min-item" onClick={() => this.changeMinPrice(2, 1)}>2 Lakh</li>
                                            <li className="min-item" onClick={() => this.changeMinPrice(3, 1)}>3 Lakh</li>
                                            <li className="min-item" onClick={() => this.changeMinPrice(4, 1)}>4 Lakh</li>
                                            <li className="min-item" onClick={() => this.changeMinPrice(5, 1)}>5 Lakh</li>
                                            <li className="min-item" onClick={() => this.changeMinPrice(6, 1)}>6 Lakh</li>
                                        </ul>
                                        <ul id="max-list">
                                            <li className="max-item" onClick={() => this.changeMaxPrice(this.state.minPrice + 10, 1)}>{this.state.minPrice + 10 + " Lakh"}</li>
                                            <li className="max-item" onClick={() => this.changeMaxPrice(this.state.minPrice + 12, 1)}>{this.state.minPrice + 12 + " Lakh"}</li>
                                            <li className="max-item" onClick={() => this.changeMaxPrice(this.state.minPrice + 15, 1)}>{this.state.minPrice + 15 + " Lakh"}</li>
                                            <li className="max-item" onClick={() => this.changeMaxPrice(this.state.minPrice + 20, 1)}>{this.state.minPrice + 20 + " Lakh"}</li>
                                            <li className="max-item" onClick={() => this.changeMaxPrice(this.state.minPrice + 22, 1)}>{this.state.minPrice + 22 + " Lakh"}</li>
                                            <li className="max-item" onClick={() => this.changeMaxPrice(this.state.minPrice + 25, 1)}>{this.state.minPrice + 25 + " Lakh"}</li>
                                            <li className="max-item" onClick={() => this.changeMaxPrice(this.state.minPrice + 30, 1)}>{this.state.minPrice + 30 + " Lakh"}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-2 no-padding">
                            <Button bsStyle="success" onClick={this.setParam.bind(this)}>FIND CAR</Button>
                        </div>
                    </div>
                </FormGroup>
            </div>
        )
    }
}
function mapStateToProps(state)
{
    const {carName,city,maxPrice,minPrice} = state;
    return {carName,city,maxPrice,minPrice};
}
export default connect(mapStateToProps, { setCity, setMaxPrice, setMinPrice })(TabSecond);