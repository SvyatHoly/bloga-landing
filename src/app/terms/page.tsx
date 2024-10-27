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

          <Section>
            <SectionTitle>Your Privacy</SectionTitle>
            <p>
              We only use any personal data we collect through your use of the
              App in the ways set out in our privacy policy available at our
              website.
            </p>
            <p>
              Please be aware that internet transmissions are never completely
              private or secure and that any message or information you send
              using the App may be read or intercepted by others, even if there
              is a special notice that a particular transmission is encrypted.
            </p>
          </Section>

          <Section>
            <SectionTitle>How You May Use The App</SectionTitle>
            <p>
              In return for your agreeing to comply with these terms you may:
            </p>
            <List>
              <ListItem>
                Download or stream a copy of the App and view, use and display
                the App on mobile devices
              </ListItem>
              <ListItem>
                Receive and use any free supplementary software code or update
                of the App incorporating &ldquo;patches&rdquo; and corrections
                of errors as we may provide to you
              </ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>Content Standards</SectionTitle>
            <p>
              These content standards apply to all material which you share or
              upload via the App (Contribution).
            </p>

            <SubsectionTitle>A Contribution must:</SubsectionTitle>
            <List>
              <ListItem>Be accurate (where it states facts)</ListItem>
              <ListItem>Be genuinely held (where it states opinions)</ListItem>
              <ListItem>
                Comply with the law applicable in England and Wales and in any
                country from which it is posted
              </ListItem>
            </List>

            <SubsectionTitle>A Contribution must not:</SubsectionTitle>
            <List>
              <ListItem>Be defamatory of any person</ListItem>
              <ListItem>
                Be obscene, offensive, hateful or inflammatory
              </ListItem>
              <ListItem>
                Promote discrimination based on race, sex, religion,
                nationality, disability, sexual orientation or age
              </ListItem>
              <ListItem>
                Infringe any copyright, database right or trade mark of any
                other person
              </ListItem>
              <ListItem>Be likely to deceive any person</ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>Intellectual Property Rights</SectionTitle>
            <p>
              All intellectual property rights in the App throughout the world
              belong to us, or our licensors, and the rights in the App are
              licensed (not sold) to you. You have no intellectual property
              rights in, or to, the App other than the right to use them in
              accordance with these terms.
            </p>
          </Section>

          <Section>
            <SectionTitle>Our Responsibility for Loss or Damage</SectionTitle>
            <p>
              We are responsible to you for foreseeable loss and damage caused
              by us. If we fail to comply with these terms, we are responsible
              for loss or damage you suffer that is a foreseeable result of our
              breaking these terms or our failing to use reasonable care and
              skill, but we are not responsible for any loss or damage that is
              not foreseeable.
            </p>
          </Section>

          <Section>
            <SectionTitle>Governing Law</SectionTitle>
            <p>
              These terms are governed by English law and you can bring legal
              proceedings in respect of the products in the English courts.
            </p>
          </Section>
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

  p {
    margin: 16px 0;
  }
`;

const Section = styled.section`
  margin: 32px 0;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin: 32px 0 16px;
  color: white;
`;

const SubsectionTitle = styled.h3`
  font-size: 20px;
  margin: 24px 0 16px;
  color: white;
`;

const List = styled.ul`
  list-style-type: disc;
  margin: 16px 0;
  padding-left: 24px;
`;

const ListItem = styled.li`
  margin: 8px 0;
`;
