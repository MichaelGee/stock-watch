import React from "react";
import { Spin } from "antd";
import styled from "styled-components";
import { LoadingOutlined } from "@ant-design/icons";

const SpinContainer = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  z-index: 0;
  display: grid;
  place-item: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const antIcon = <LoadingOutlined style={{ fontSize: 30 }} spin />;

const Loader = () => {
  return (
    <SpinContainer>
      <Spin tip='Loading...' indicator={antIcon}></Spin>
    </SpinContainer>
  );
};

export default Loader;
