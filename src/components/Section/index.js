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
  & .big-premio-img {
    margin-right: 76px;
  }
  & .woman-radio-img {
    transform: translateY(19px);
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    & img {
      max-width: 100%;
    }
    & .big-premio-img,
    & .woman-radio-img {
      max-width: 100%;
      padding: 0;
      margin: 0;
    }
    & .woman-radio-img {
      transform: translateY(39px);
    }
  }
`;

export default Section;
