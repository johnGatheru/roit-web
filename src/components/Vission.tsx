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

const objectives = [
  "Enhance Client Relationships: Develop strategies to strengthen client relationships and ensure tailored services.",
  "Deliver Innovative Solutions: Continuously research and adopt innovative financial practices and technologies.",
  "Increase Financial Literacy: Conduct workshops to educate clients on financial management and industry trends.",
  "Achieve Sustainable Growth: Set targets for a 20% increase in client acquisition and retention annually.",
  "Promote Team Development: Invest in ongoing training for team members to enhance skills and expertise.",
  "Ensure Compliance and Best Practices: Establish a framework for compliance with financial regulations.",
  "Expand Service Offerings: Identify and develop additional services to cater to emerging market trends.",
];

const VisionGoalMission = () => {
  const [activeKey, setActiveKey] = useState("1");

  const items = [
    {
      key: "1",
      label: "Vision",
      children: (
        <ContentWrapper>
          <Slide direction="right" triggerOnce duration={1000}>
            Collectively, our team is driven by a shared vision of integrity,
            innovation, and client-centric service. Together, we transcend
            challenges into opportunities, ensuring that CN ROIT & ASSOCIATES
            remains a beacon of excellence in the consultancy field. We are
            dedicated to fostering long-term relationships with our clients,
            illuminating the path to financial success for each and every one of
            our esteemed clients. Our commitment to continuous improvement and
            adaptation enables us to meet the evolving needs of those we serve.
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
            <h3>Our Goal</h3>
            <p>
              Our goal at CN ROIT & ASSOCIATES is to establish ourselves as the
              leading consultancy firm in the industry, recognized for our
              unwavering commitment to transforming financial challenges into
              growth opportunities for our clients. We aim to foster long-term
              partnerships built on trust and mutual success, ensuring our
              clients feel supported and empowered throughout their financial
              journeys.
            </p>
            <p>
              By leveraging our expertise in advanced tax strategies,
              comprehensive financial insights, and effective management
              solutions, we strive to deliver exceptional value that goes beyond
              traditional consultancy services. Our team is dedicated to
              continuous improvement, innovation, and client-centric service,
              ensuring we adapt to the ever-evolving financial landscape.
              Through strategic collaboration and a proactive approach, we aim
              to illuminate the path to financial success for each client,
              becoming their trusted advisor and a beacon of excellence in the
              consultancy field.
            </p>
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
            <h3>Our Objectives</h3>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              {objectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
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
            Our mission is to deliver exceptional financial insights, advanced
            tax strategies, and effective management solutions that empower our
            clients to confidently navigate their financial journey. We focus on
            understanding the unique needs of each client, providing tailored
            advice and innovative solutions that drive success. By leveraging
            our expertise, we enhance our clients' financial literacy and
            facilitate informed decision-making. Ultimately, we aim to be the
            trusted partner our clients rely on for guidance and strategic
            insights in all their financial endeavors.
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
