import styled from "styled-components";
import { colorTokens } from "../../../context/theme/theme";

export const NavSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => (props.h ? props.h : "unset")};
  background: ${(props) =>
    props.bg ? props.bg : `${colorTokens.drops[800]}`};
  padding: ${(props) => (props.p ? props.p : "unset")};
  margin: ${(props) => props.m ? props.m :'unset'};
`;