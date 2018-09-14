    import React,{Component} from 'react';
    import "./Header.css";
    import {Tab,Tabs,FormControl,FormGroup,Button} from 'react-bootstrap';
    
    class HeaderBanner extends Component
    {
        constructor(props)
        {
            super(props);
            this.state={
                key:1,
                value:'',
                minPrice:0,
                maxPrice:Number.MAX_SAFE_INTEGER,
                city:''
            }
            this.minPrice=React.createRef();
        }
        handleSelect(key)
        {
            this.setState({key})
        }
        handleChange(event)
        {
            this.setState({value:event.target.value})
        }
        handleChangeCity(event)
        {
            this.setState({city:event.target.value})
        }
        getValidationState() {
            const length = this.state.value.length;
            if (length > 10) return 'success';
            else if (length > 5) return 'warning';
            else if (length > 0) return 'error';
            return null;
        }
        getValidPrice()
        {
            if(this.state.maxPrice<this.state.minPrice)
            {
              return 'error';
            }
            else
            {
                return 'success';
            }
        }
        showmenu()
        {
            let a=document.getElementById('hided-dropdown').style.display
            if(a==="block")
            {
                document.getElementById('hided-dropdown').style.display="none";
            }
            else
            {
                document.getElementById('hided-dropdown').style.display="block";
            }
        }
        changeMinPrice=(value,check)=>{
            console.log(value);
            this.setState({minPrice:value});
            if(check!=0)
            {
                document.getElementById("min-list").style.display="none";
                document.getElementById("max-list").style.display="block";
            }
        }
        changeMaxPrice(value,check)
        {
            if (value < this.state.minPrice) {
                console.log('preice error');
            }
            this.setState({maxPrice:value});
            if(check!=0)
            {
                document.getElementById('hided-dropdown').style.display="none";
            }
        }
        showmaxPrice()
        {
            if(this.state.maxPrice===Number.MAX_SAFE_INTEGER||(!this.state.maxPrice))   
            {
                return " "
            }
            else
            {
                return this.state.maxPrice;
            }
        }
        render()
        {
            console.log('minPrice',this.state.minPrice);
            return(
                <div className="col-sm-offset-7 col-xs-offset-1 head-banner">
                <h2 className="white">FIND THE RIGHT CAR</h2>
                <Tabs
                defaultActiveKey={1}
                activeKey={this.state.key}
                onSelect={this.handleSelect.bind(this)}
                id="controlled-tab-example"
                className="head-section" >
                    <Tab eventKey={1} title="New Cars">
                        <form>
                            <FormGroup
                            validationState={this.getValidationState()}>
                            <div className="row">
                            <div className="col-xs-10 no-padding">
                                <FormControl
                                type="text"
                                value={this.state.value}
                                placeholder="Enter Name..."
                                onChange={this.handleChange.bind(this)}
                                className="input-section no-border"
                                />
                                </div>
                                <div className="col-xs-2 no-padding">
                                <Button bsStyle="success">Search</Button>
                                </div>
                                </div>
                                {/* <FormControl.Feedback /> */} 
                            </FormGroup>
                        </form>
                        </Tab>
                    <Tab eventKey={2} title="Used Cars">
                        <form>
                        <FormGroup
                        validationState={this.getValidPrice()}
                        >
                        <div className="row">
                        <div className="col-xs-5 no-padding">
                        <FormControl
                        type="text"
                        value={this.state.city}
                        placeholder="Enter City..."
                        onChange={this.handleChangeCity.bind(this)}
                        className="input-section no-border"
                        />
                        </div>
                        <div className="col-xs-5 no-padding">
                        <div className="row">
                        <div className="col-xs-10 zero-padding display-price" onClick={this.showmenu.bind(this)}>
                        {this.state.minPrice+"L-"+this.showmaxPrice()+"L"}
                        <FormControl.Feedback/>
                        </div>
                        <div className="col-xs-2 zero-padding dropdown-btn" onClick={this.showmenu.bind(this)}>
                        <span className="fa fa-angle-down"></span>
                        </div>
                        <div id="hided-dropdown">
                        <div className="row max-min">
                        <div className="col-xs-offset-1 col-xs-4 no-padding"> 
                        <FormControl
                        id="formControlsText"
                        type="number"
                        min='0'
                        placeholder="Min.."
                        value={this.state.minPrice}
                        inputRef={(input)=>this.minimumPrice=input}
                        onChange={()=>{this.changeMinPrice(this.minimumPrice.valueAsNumber,0)}}
                        onClick={()=>{
                            document.getElementById("min-list").style.display="block";
                            document.getElementById("max-list").style.display="none";
                        }}
                        />
                        </div>
                        <div className="col-xs-offset-2 col-xs-4 no-padding">
                        <FormControl
                        type="number"
                        min={this.state.minPrice}
                        value={this.state.maxPrice}
                        placeholder="Max.."
                        inputRef={(input)=>this.maximumPrice=input}
                        onChange={event=>{this.changeMaxPrice(this.maximumPrice.valueAsNumber,0)
                                          /* document.getElementById('min-price').addEventListener("mouseout",this.getValidPrice()) */}}
                        onClick={()=>{
                            if(this.state.maxPrice===Number.MAX_SAFE_INTEGER)
                            {
                                this.setState({maxPrice:this.state.minPrice})
                            }
                            document.getElementById("max-list").style.display="block";
                            document.getElementById("min-list").style.display="none";
                        }}         
                        />
                        </div>
                        </div>
                        <div>
                        <ul id="min-list">
                        <li className="min-item" onClick={()=>this.changeMinPrice(0,1)}>Any</li>
                        <li className="min-item" onClick={()=>this.changeMinPrice(1,1)}>1 Lakh</li>
                        <li className="min-item" onClick={()=>this.changeMinPrice(2,1)}>2 Lakh</li>
                        <li className="min-item" onClick={()=>this.changeMinPrice(3,1)}>3 Lakh</li>
                        <li className="min-item" onClick={()=>this.changeMinPrice(4,1)}>4 Lakh</li>
                        <li className="min-item" onClick={()=>this.changeMinPrice(5,1)}>5 Lakh</li>
                        <li className="min-item" onClick={()=>this.changeMinPrice(6,1)}>6 Lakh</li>
                        </ul>
                        <ul id="max-list">
                        <li className="max-item" onClick={()=>this.changeMaxPrice(this.state.minPrice+10,1)}>{this.state.minPrice+10+" Lakh"}</li>
                        <li className="max-item" onClick={()=>this.changeMaxPrice(this.state.minPrice+12,1)}>{this.state.minPrice+12+" Lakh"}</li>
                        <li className="max-item" onClick={()=>this.changeMaxPrice(this.state.minPrice+15,1)}>{this.state.minPrice+15+" Lakh"}</li>
                        <li className="max-item" onClick={()=>this.changeMaxPrice(this.state.minPrice+20,1)}>{this.state.minPrice+20+" Lakh"}</li>
                        <li className="max-item" onClick={()=>this.changeMaxPrice(this.state.minPrice+22,1)}>{this.state.minPrice+22+" Lakh"}</li>
                        <li className="max-item" onClick={()=>this.changeMaxPrice(this.state.minPrice+25,1)}>{this.state.minPrice+25+" Lakh"}</li>
                        <li className="max-item" onClick={()=>this.changeMaxPrice(this.state.minPrice+30,1)}>{this.state.minPrice+30+" Lakh"}</li>
                        </ul>
                        </div>
                        </div>
                        </div>
                        </div>
                        <div className="col-xs-2 no-padding">
                        <Button bsStyle="success">FIND CAR</Button>
                        </div>
                        </div>
                        {/*  <FormControl.Feedback /> */}
                        </FormGroup>
                        </form>
                    </Tab>
                </Tabs>
                </div>)
            }
        }
        export default HeaderBanner;
        