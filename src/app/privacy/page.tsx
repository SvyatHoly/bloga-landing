"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function Privacy() {
  return (
    <PageContainer>
      <Content>
        <Header>
          <BackButton href="/">← Back to Home</BackButton>
          <Title>Privacy Policy</Title>
        </Header>
        <TextContent>
          <p>Last updated: October 27, 2024</p>

          <h2>1. Important Information and Who We Are</h2>
          <p>
            This privacy policy explains how we process your personal data
            through your use of our Services, including any data you may provide
            when using our Services.
          </p>
          <p>
            Our services are not intended for children to access and we do not
            knowingly or intentionally collect data relating to children under
            the age of 16.
          </p>

          <h2>2. The Data We Collect</h2>
          <p>We collect and process the following types of personal data:</p>
          <ul>
            <li>
              <strong>Identity Data:</strong> Your name, email address, phone
              number, age and gender
            </li>
            <li>
              <strong>Contact Data:</strong> Your email address and telephone
              numbers
            </li>
            <li>
              <strong>Communications Data:</strong> Content of messages sent
              through our Services
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, browser type, device
              information
            </li>
            <li>
              <strong>Usage Data:</strong> How you interact with our Services
            </li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>
            We use your personal data only when the law allows us to. Most
            commonly, we process your data:
          </p>
          <ul>
            <li>To perform the contract we have with you</li>
            <li>Where it is necessary for our legitimate interests</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>4. Your Privacy Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct any inaccurate data</li>
            <li>Request erasure of your data</li>
            <li>Object to processing of your data</li>
            <li>Request restriction of processing</li>
            <li>Data portability</li>
            <li>Withdraw consent</li>
          </ul>

          <h2>5. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy
            practices, please contact us at:
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:slava@arma-app.com"
              className="text-white hover:opacity-80"
            >
              slava@arma-app.com
            </a>
          </p>

          <h2>6. Cookies</h2>
          <p>We use the following essential cookies:</p>
          <ul>
            <li>
              <strong>Authentication Token:</strong> Used to maintain your
              logged-in status and secure your session
            </li>
            <li>
              <strong>Notifications Token:</strong> Used for delivering push
              notifications when enabled
            </li>
          </ul>
        </TextContent>
      </Content>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  min-height: 100vh;
  background: black;
  color: white;
  padding: 40px 24px;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  gap: 24px;
`;

const BackButton = styled(Link)`
  color: white;
  text-decoration: none;
  opacity: 0.7;
  transition: opacity 0.2s;
  font-size: 16px;
  &:hover {
    opacity: 1;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  margin: 0;
`;

const TextContent = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);

  h2 {
    font-size: 24px;
    margin: 32px 0 16px;
    color: white;
  }

  p {
    margin: 16px 0;
  }

  ul {
    margin: 16px 0;
    padding-left: 20px;

    li {
      margin: 8px 0;
    }
  }

  strong {
    color: white;
  }

  a {
    color: white;
    text-decoration: underline;
    opacity: 0.8;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;
