import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  &.formSection {
    padding-top: 16px;
    padding-bottom: 40px;
  }
  &.videoSection {
    background: #00c1e3;
  }
`;

export default Section;
