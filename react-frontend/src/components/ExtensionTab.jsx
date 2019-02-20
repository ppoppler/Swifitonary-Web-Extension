import React from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col} from 'reactstrap';
import classnames from 'classnames';
import PreferencesTab from './PreferencesTab';


export default class ExtensionTab extends React.Component {
    constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

    toggle(tab){
        if(this.state.activeTab !== tab){
            this.setState({
                activeTab: tab
            });
        }
    }

    render(){
        return(
            <div className="Montserrat">
                <Nav tabs inverse>
                    <NavItem>
                        <NavLink className={classnames({active:this.state.activeTab === '1'})}
                        onClick={() => {this.toggle('1');}}>
                            Prefs
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({active:this.state.activeTab === '2'})}
                        onClick={() => {this.toggle('2');}}>
                            Settings
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <PreferencesTab/>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <p>Various settings and changes</p>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        )
    }
}