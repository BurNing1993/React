import React, { Component } from 'react';
import './App.css';
import { SectionsContainer, Section } from 'react-fullpage';
import Page1 from './views/Page1'
import Page2 from './views/Page2'
import Page3 from './views/Page3'
import Page4 from './views/Page4'
import Page5 from './views/Page5'
import Page6 from './views/Page6'

class App extends Component {
  render() {
    let options = {
      sectionClassName:     'section',
      anchors:              ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7'],
      scrollBar:            false,
      navigation:           true,
      verticalAlign:        false,
      sectionPaddingTop:    '50px',
      sectionPaddingBottom: '50px',
      arrowNavigation:      true
    };
    return (
      <SectionsContainer {...options}>
        <Section>
          <Page1/>
        </Section>
        <Section>
          <Page2/> 
        </Section>
        <Section>
        <Page3/> 
        </Section>
        <Section>
        <Page4/> 
        </Section>
        <Section>
        <Page5/> 
        </Section>
        <Section>
        <Page6/> 
        </Section>
        <Section>
        <Page5/> 
        </Section>
        <Section>
        <Page5/> 
        </Section>
      </SectionsContainer>
    );
  }
}

export default App;
