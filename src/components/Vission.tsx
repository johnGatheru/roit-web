"use client";
import { Tabs } from "antd";
import styled from "@emotion/styled";
import { useState } from "react";
import { Slide } from "react-awesome-reveal";

const StyledTabs = styled(Tabs)`
  .ant-tabs-nav {
    margin-bottom: 16px;
    display: flex;
    justify-content: center;
  }
  .ant-tabs-tab {
    padding: 12px 24px;
  }
  .ant-tabs-tab-active .ant-tabs-tab-btn {
    font-weight: bold;
    border-bottom: 2px solid orange;
  }
`;

const ContentWrapper = styled.div`
  padding: 24px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const VisionGoalMission = () => {
  const [activeKey, setActiveKey] = useState("1");

  const items = [
    {
      key: "1",
      label: "Vision",
      children: (
        <ContentWrapper>
          <Slide direction="right" triggerOnce>
            Our vision is to be the leading provider of innovative solutions in
            our industry, driving positive change and progress.
          </Slide>
        </ContentWrapper>
      ),
    },
    {
      key: "2",
      label: "Goal",
      children: (
        <ContentWrapper>
          <Slide direction="right" triggerOnce>
            Our goal is to achieve sustainable growth by consistently delivering
            high-quality products and services that exceed our customers'
            expectations.
          </Slide>
        </ContentWrapper>
      ),
    },
    {
      key: "3",
      label: "Objectives",
      children: (
        <ContentWrapper>
          <Slide direction="right" triggerOnce>
            Our objectives are to expand our market presence, enhance customer
            satisfaction, and continuously innovate our offerings.
          </Slide>
        </ContentWrapper>
      ),
    },
    {
      key: "4",
      label: "Mission",
      children: (
        <ContentWrapper>
          <Slide direction="right" triggerOnce>
            Our mission is to deliver value to our stakeholders by operating
            with integrity, efficiency, and a commitment to excellence.
          </Slide>
        </ContentWrapper>
      ),
    },
  ];

  return (
    <StyledTabs
      activeKey={activeKey}
      onChange={setActiveKey}
      items={items}
      centered
    />
  );
};

export default VisionGoalMission;
