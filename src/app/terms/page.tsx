"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function Terms() {
  return (
    <PageContainer>
      <Content>
        <Header>
          <BackButton href="/">← Back to Home</BackButton>
          <Title>Terms of Service</Title>
        </Header>
        <TextContent>
          <p>Last updated: October 27, 2024</p>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using Bloga, you acknowledge that you have read,
            understood, and agree to be bound by these Terms of Service.
          </p>
          {/* Add more terms content as needed */}
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
  }

  p {
    margin: 16px 0;
  }
`;
