"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AppleIcon } from "./Icons/AppIcon";
import { FeatureIcon } from "./Icons/FeatureIcon";
import Link from "next/link";

const Container = styled.div`
  min-height: 100%;
  background: black;
  color: white;

  @media (max-width: 1023px) {
    padding-bottom: 100px;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    height: 100vh;
    overflow: hidden;
  }
`;

const GlobalStyles = styled.div`
  @media (max-width: 1023px) {
    body {
      scrollbar-width: none;
      -ms-overflow-style: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;

const Content = styled.div`
  max-width: 1540px;
  margin: 0 auto;
  padding: 0 24px;

  @media (min-width: 1024px) {
    height: 100%;
  }
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    height: 100%;
  }
`;

const LeftSection = styled.div`
  width: 100%;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (min-width: 1024px) {
    width: 50%;
    padding-right: 32px;
    height: 100%;
    overflow: hidden;
  }
`;

const RightSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    width: 50%;
    height: 100%;
    padding-top: 48px;
    align-items: start;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  @media (min-width: 1024px) {
    width: 100%; // Increased from 90%
    height: 100%; // Increased from 90%
    padding-left: 32px; // Add some padding from the left section
  }
`;

const AppImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;

  @media (min-width: 1024px) {
    padding-bottom: 92px;
    max-height: 90%; // Increased from 90%
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    height: 100%;
    justify-content: space-between;
  }
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FeaturesWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow-x: auto;
  padding-bottom: 16px;
  margin: 0 -24px;
  padding: 0 24px;

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1024px) {
    margin: 0;
    padding: 0;
    overflow: visible;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;
  justify-content: center;

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

const LogoIcon = styled.img`
  width: 54px;
  height: 63px;
`;

const LogoText = styled.span`
  font-size: 37px;
  font-weight: bold;
  font-family: "Inter", sans-serif;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 24px;
  text-align: center;
  font-family: "Inter", sans-serif;

  @media (min-width: 768px) {
    font-size: 48px;
  }

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
  margin-bottom: 32px;
  text-align: center;
  font-family: "Inter", sans-serif;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const FeatureTag = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 37px;
  font-size: 14px;
  white-space: nowrap;
  font-family: "Inter", sans-serif;
  border: 2px solid rgba(141, 141, 141, 0.38);
  color: rgba(255, 255, 255, 0.8);
`;

const Footer = styled.div`
  display: flex;
  gap: 24px;
  padding: 24px 0 92px 0;
  justify-content: center;
  margin-top: auto;

  @media (max-width: 1023px) {
    order: 2;
    padding-bottom: 120px; // Increased padding to account for download button
  }

  @media (min-width: 1024px) {
    justify-content: flex-start;
    order: unset;
    padding-bottom: 92px;
  }
`;

const FooterLink = styled(Link)`
  color: white;
  opacity: 0.5;
  font-size: 20px;
  text-decoration: none;
  font-family: "Inter", sans-serif;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const FeaturesList = styled.div`
  display: flex;
  gap: 16px;

  @media (min-width: 1024px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`;

const DownloadButtonWrapper = styled.div<{ $isMobile: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  // Add padding to account for button scale
  transform: translateZ(0);

  @media (min-width: 1024px) {
    display: ${(props) => (props.$isMobile ? "none" : "block")};
    position: relative;
    padding: 32px 0 0 0;
    background: transparent;
    width: auto;
    // Add margin to prevent clipping
    margin: 0 8px 8px 8px;
  }

  ${(props) =>
    props.$isMobile &&
    `
    @media (min-width: 1024px) {
      display: none;
    }
  `}

  ${(props) =>
    !props.$isMobile &&
    `
    @media (max-width: 1023px) {
      display: none;
    }
  `}
`;

const DownloadButton = styled.button`
  width: 266px;
  height: 88px;
  padding: 24px;
  background: white;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 22px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
  transform-origin: center center;
  // Add will-change to optimize the animation
  will-change: transform;

  span {
    font-family: "Inter", sans-serif;
    font-size: 28px;
    font-weight: 600;
    text-align: left;
    position: relative;
    z-index: 1;
    color: black;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #f3f4f6, white);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.1);

    &::before {
      transform: translateX(0);
    }
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }

  svg {
    position: relative;
    z-index: 1;
  }
`;

const LandingPage = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const isDesktopView = window.innerWidth >= 1024;
      setIsDesktop(isDesktopView);
      document.body.style.overflow = isDesktopView ? "hidden" : "auto";
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "auto"; // Cleanup
    };
  }, []);

  const features = [
    { id: 1, text: "ALBUMS", icon: <FeatureIcon /> },
    { id: 2, text: "WORKS OFFLINE", icon: <FeatureIcon /> },
    { id: 3, text: "MULTISELECT", icon: <FeatureIcon /> },
  ];

  return (
    <>
      <GlobalStyles />
      <Container>
        <Content>
          <MainSection>
            <LeftSection>
              <ContentWrapper>
                <Logo>
                  <LogoIcon src="/Icon_Light.png" alt="Bloga Logo" />
                  <LogoText>Bloga</LogoText>
                </Logo>

                <MainContent>
                  <CenteredContainer>
                    <Title>Swipe, Clean, Sort.</Title>

                    <Subtitle>
                      Sorting your media library with user-friendly features and
                      a pleasant interface
                    </Subtitle>

                    <FeaturesWrapper>
                      <FeaturesList>
                        {features.map((feature) => (
                          <FeatureTag key={feature.id}>
                            {feature.icon}
                            {feature.text}
                          </FeatureTag>
                        ))}
                      </FeaturesList>
                    </FeaturesWrapper>

                    <DownloadButtonWrapper $isMobile={false}>
                      <DownloadButton>
                        <AppleIcon />
                        <span>Download</span>
                      </DownloadButton>
                    </DownloadButtonWrapper>
                  </CenteredContainer>
                </MainContent>

                {/* Footer for desktop */}
                {isDesktop && (
                  <Footer>
                    <FooterLink href="mailto:slava@arma-app.com">
                      Contact us
                    </FooterLink>
                    <FooterLink href="/terms">Terms</FooterLink>
                    <FooterLink href="/privacy">Privacy</FooterLink>
                  </Footer>
                )}
              </ContentWrapper>
            </LeftSection>

            <RightSection>
              <ImageContainer>
                <AppImage src="AppImage.png" alt="App Preview" />
              </ImageContainer>
              {/* Footer for mobile */}
              {!isDesktop && (
                <Footer>
                  <FooterLink href="mailto:slava@arma-app.com">
                    Contact us
                  </FooterLink>
                  <FooterLink href="/terms">Terms</FooterLink>
                  <FooterLink href="/privacy">Privacy</FooterLink>
                </Footer>
              )}
            </RightSection>
          </MainSection>

          <DownloadButtonWrapper $isMobile={true}>
            <DownloadButton>
              <AppleIcon />
              <span>Download</span>
            </DownloadButton>
          </DownloadButtonWrapper>
        </Content>
      </Container>
    </>
  );
};

export default LandingPage;
