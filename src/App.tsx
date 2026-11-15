import React from "react";
import styled from "styled-components";
import { Button } from "./components/Button";
import { Label } from "./components/Label";
import { Text } from "./components/Text";
import { Card } from "./components/Card";
import { Dropdown } from "./components/Dropdown";
import { RadioButton } from "./components/RadioButton";
import { Table } from "./components/Table";
import { Img } from "./components/Img";
import { HeroImage } from "./components/HeroImage";

// Styled modern layout components
const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: #f8fafc;
  color: #1e293b;
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
  padding: 40px 20px;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e2e8f0;

  h1 {
    font-size: 2.25rem;
    font-weight: 800;
    color: #0f172a;
    margin: 0 0 8px 0;
    letter-spacing: -0.025em;
  }

  p {
    color: #64748b;
    font-size: 1.05rem;
    margin: 0;
  }
`;

const ShowcaseSection = styled.section`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.04),
    0 2px 4px -2px rgba(0, 0, 0, 0.03);

  h2 {
    font-size: 1.15rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 16px 0;
    padding-bottom: 10px;
    border-bottom: 1px solid #f1f5f9;
  }
`;

const FlexRow = styled.div<{ gap?: string }>`
  display: flex;
  gap: ${(props) => props.gap || "16px"};
  flex-wrap: wrap;
  align-items: center;
`;

function App() {
  return (
    <PageWrapper>
      <Container>
        <Header>
          <h1>Singh Lovepreet UI Garden Showcase</h1>
          <p>React Component Library &amp; Design System • WEBD-3012</p>
        </Header>

        <ShowcaseSection>
          <h2>1. Hero Image</h2>
          <HeroImage
            src="https://via.placeholder.com/1000x300"
            alt="Hero Banner"
            title="Component Library Showcase"
            subtitle="Built with React, TypeScript, and Styled Components"
          />
        </ShowcaseSection>

        <ShowcaseSection>
          <h2>2. Buttons</h2>
          <FlexRow>
            <Button label="Active Button" />
            <Button label="Disabled Button" disabled={true} />
          </FlexRow>
        </ShowcaseSection>

        <ShowcaseSection>
          <h2>3. Labels & Text</h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <Label text="This is a Label Component" />
            <Text
              content="This is a body text rendered using the Text component."
              size="medium"
            />
          </div>
        </ShowcaseSection>

        <ShowcaseSection>
          <h2>4. Card Component</h2>
          <FlexRow>
            <Card
              title="Active Card"
              description="This is an active UI card."
            />
            <Card
              title="Disabled Card"
              description="This card is currently disabled."
              disabled={true}
            />
          </FlexRow>
        </ShowcaseSection>

        <ShowcaseSection>
          <h2>5. Dropdown & Radio Button</h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <Dropdown
              options={[
                { label: "Option 1", value: "1" },
                { label: "Option 2", value: "2" },
              ]}
              placeholder="Select..."
            />
            <FlexRow gap="24px">
              <RadioButton label="Radio Option 1" name="group1" value="1" />
              <RadioButton
                label="Disabled Radio"
                name="group1"
                value="2"
                disabled={true}
              />
            </FlexRow>
          </div>
        </ShowcaseSection>

        <ShowcaseSection>
          <h2>6. Table Component</h2>
          <Table
            columns={[
              { header: "ID", accessor: "id" },
              { header: "Name", accessor: "name" },
            ]}
            data={[
              { id: "1", name: "Lovepreet Singh" },
              { id: "2", name: "WEBD-3012" },
            ]}
          />
        </ShowcaseSection>

        <ShowcaseSection>
          <h2>7. Image Component</h2>
          <Img src="https://via.placeholder.com/200x150" alt="Sample UI" />
        </ShowcaseSection>
      </Container>
    </PageWrapper>
  );
}

export default App;
