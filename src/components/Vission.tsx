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
    font-size: 16px;
    color: #000000; /* Default text color for inactive tabs */
  }

  /* Active tab styles */
  .ant-tabs-tab-active .ant-tabs-tab-btn {
    font-weight: bold;
    color: #facc15 !important; /* Force active tab text color to #facc15 */
  }

  .ant-tabs-tab-btn:hover {
    color: #facc15 !important;
  }

  /* Ensure the ink bar is also #facc15 */
  .ant-tabs-ink-bar {
    background-color: #facc15 !important;
  }

  /* Adjustments for smaller screens */
  @media (max-width: 768px) {
    .ant-tabs-tab {
      padding: 8px 16px;
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    .ant-tabs-tab {
      padding: 6px 12px;
      font-size: 12px;
    }
  }
`;

const ContentWrapper = styled.div`
  padding: 24px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-size: 16px;

  @media (max-width: 768px) {
    padding: 16px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 12px;
  }
`;

const VisionGoalMission = () => {
  const [activeKey, setActiveKey] = useState("1");

  const items = [
    {
      key: "1",
      label: "Vision",
      children: (
        <ContentWrapper>
          <Slide direction="right" triggerOnce duration={1000}>
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
          <Slide direction="right" triggerOnce duration={1000}>
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
          <Slide direction="right" triggerOnce duration={1000}>
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
          <Slide direction="right" triggerOnce duration={1000}>
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
