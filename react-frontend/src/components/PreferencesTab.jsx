import React from "react";
import { Grid, Row, Col, Button } from "reactstrap";
export default class PreferencesTab extends React.Component {
  render() {
    return (
      <div id="pref-tab">
        <Row>
          <Col xs="6">
            <p>Definition</p>
          </Col>
          <Col xs="6">
            <Button color="primary" />
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <p>Synonym</p>
          </Col>
          <Col xs="6">
            <Button color="primary" />
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <p>Antonym</p>
          </Col>
          <Col xs="6">
            <Button color="primary" />
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <p>Translation</p>
          </Col>
          <Col xs="6">
            <Button color="primary" />
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <p>Spellcheck</p>
          </Col>
          <Col xs="6">
            <Button color="primary" />
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <p>Slang</p>
          </Col>
          <Col xs="6">
            <Button color="primary" />
          </Col>
        </Row>
      </div>
    );
  }
}
