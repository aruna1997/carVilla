import React, { Component } from 'react';
import "./Header.css";
import { Tab, Tabs, FormControl, FormGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import TabFirst from './TabFirst';
import TabSecond from './TabSecond';
class HeaderBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 1,
            carName: '',
        }
    }

    handleSelect(key) {
        this.setState({ key })
    }

    render() {
        console.log('props', this.props);
        console.log('max-price', this.state.maxPrice);
        console.log('minPrice', this.state.minPrice);
        return (

            <div className="col-sm-offset-7 col-xs-offset-1 head-banner">
                <h2 className="white">FIND THE RIGHT CAR</h2>
                <Tabs
                    defaultActiveKey={1}
                    activeKey={this.state.key}
                    onSelect={this.handleSelect.bind(this)}
                    id="controlled-tab-example"
                    className="head-section" >
                    <Tab eventKey={1} title="New Cars">
                        <TabFirst />
                    </Tab>
                    <Tab eventKey={2} title="Used Cars">
                        <TabSecond />
                    </Tab>
                </Tabs>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { state };
}
export default connect(mapStateToProps)(HeaderBanner);
