import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card, Col, Row } from "antd";
function App() {
  //  const button = {backgroundColor: '#2fbf71', borderColor: '#2fbf71'}

  const card = {
    backgroundColor: "#FFFFFF",
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='site-card-wrapper'>
          <Row gutter={16}>
            <Col span={8}>
              <Card style={card} hoverable bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card style={card} hoverable bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card style={card} hoverable bordered={false}>
                Card content
              </Card>
            </Col>
          </Row>
        </div>
      </header>
    </div>
  );
}

export default App;
