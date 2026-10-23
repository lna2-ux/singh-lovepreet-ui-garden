import React from 'react';
import { Button } from './components/Button';
import { Label } from './components/Label';
import { Text } from './components/Text';
import { Card } from './components/Card';
import { Dropdown } from './components/Dropdown';
import { RadioButton } from './components/RadioButton';
import { Table } from './components/Table';
import { Img } from './components/Img';
import { HeroImage } from './components/HeroImage';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '1000px', margin: '0 auto' }}>
      <h1>Singh Lovepreet UI Garden Showcase</h1>
      <hr />

      <section style={{ margin: '20px 0' }}>
        <h2>1. Hero Image</h2>
        <HeroImage 
          src="https://via.placeholder.com/1000x300" 
          alt="Hero Banner" 
          title="Component Library Showcase" 
          subtitle="Built with React, TypeScript, and Styled Components" 
        />
      </section>

      <section style={{ margin: '20px 0' }}>
        <h2>2. Buttons</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button label="Active Button" />
          <Button label="Disabled Button" disabled={true} />
        </div>
      </section>

      <section style={{ margin: '20px 0' }}>
        <h2>3. Labels & Text</h2>
        <Label text="This is a Label Component" />
        <Text content="This is a body text rendered using the Text component." size="medium" />
      </section>

      <section style={{ margin: '20px 0' }}>
        <h2>4. Card Component</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Card title="Active Card" description="This is an active UI card." />
          <Card title="Disabled Card" description="This card is currently disabled." disabled={true} />
        </div>
      </section>

      <section style={{ margin: '20px 0' }}>
        <h2>5. Dropdown & Radio Button</h2>
        <Dropdown options={[{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }]} placeholder="Select..." />
        <div style={{ marginTop: '10px' }}>
          <RadioButton label="Radio Option 1" name="group1" value="1" />
          <RadioButton label="Disabled Radio" name="group1" value="2" disabled={true} />
        </div>
      </section>

      <section style={{ margin: '20px 0' }}>
        <h2>6. Table Component</h2>
        <Table 
          columns={[{ header: 'ID', accessor: 'id' }, { header: 'Name', accessor: 'name' }]} 
          data={[{ id: '1', name: 'Lovepreet Singh' }, { id: '2', name: 'WEBD-3012' }]} 
        />
      </section>

      <section style={{ margin: '20px 0' }}>
        <h2>7. Image Component</h2>
        <Img src="https://via.placeholder.com/200x150" alt="Sample UI" />
      </section>
    </div>
  );
}

export default App;