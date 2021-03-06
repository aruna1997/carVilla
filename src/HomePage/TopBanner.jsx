import React, { Component } from 'react';
import "./Featured.css";
import { Tab, Tabs} from 'react-bootstrap';
import { connect } from 'react-redux';
import TabFirst from './TabFirst';
import TabSecond from './TabSecond';
export class TopBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 1,
        }
    }

    handleSelect=(key)=> {
        this.setState({ key })
    }
    render() {
        return (
            <div className="head">
            <div className="col-sm-offset-7 col-xs-offset-1 head-banner">
                <h2 className="white">FIND THE RIGHT CAR</h2>
                <Tabs
                    defaultActiveKey={1}
                    activeKey={this.state.key}
                    onSelect={this.handleSelect}
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
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { state };
}
export default connect(mapStateToProps,null)(TopBanner);
