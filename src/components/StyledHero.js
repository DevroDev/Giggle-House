import styled from "styled-components";
import defaultImg from "../images/hero1.jpg";
const StyledHero = styled.header`
  min-height: 80vh;
  /* background: url(${defaultImg}); */
  background: url(${(props) => (props.img ? props.img : defaultImg)});
  display:flex;
  background-size:contain;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
