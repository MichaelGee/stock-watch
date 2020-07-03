import React from "react";
import { Card, Col, Row } from "antd";

const BasicCard = () => {
  const card = {
    borderRadius: "5px",
    backgroundColor: "#FFFFFF",
    borderColor: "transparent",
    boxShadow:
      "0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09)",
  };

  return (
    <div>
      <div className='site-card-wrapper'>
        <Row gutter={16}>
          <Col span={8}>
            <Card style={card} bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card style={card} bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card style={card} bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BasicCard;
