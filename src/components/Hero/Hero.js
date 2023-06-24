import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          I am <br />
          Sahil Chalke
        </SectionTitle>
        <SectionText>
          I am a  full-stack developer, with a strong focus on backend development. I specialize in developing MERN applications and I'm currently a second-year ID student at VCET Vasai. I am passionate about continuous learning and always strive to improve my skills in order to deliver high-quality software solutions.
        </SectionText>

      </LeftSection>
    </Section>
  </>
);

export default Hero;