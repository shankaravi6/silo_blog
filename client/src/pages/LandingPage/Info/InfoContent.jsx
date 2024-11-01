import React from "react";
import {
  SoBox,
  SoFlex,
  SoHeadLineText,
  SoSubTitle,
  SoTitle,
  SoTypography,
} from "../../../components/styledcomponents/globalStyles";
import { useThemeContext } from "../../../context/theme/ThemeContext";
import NavButtons from "../../../components/layout/Navigation/NavButtons";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SoPlainButton from "../../../components/common/SoPlainButton";


const InfoContent = () => {

    const {palette} = useThemeContext();

  return (
    <SoBox w="100%">
      <SoFlex w="100%" h='unset' jc="center" gap='20px' dir='column'>
        <SoFlex dir='column' al='flex-end'>
          <SoSubTitle ta='left' fs="clamp(1.5rem,5vw,4rem)">ELIZABET WAREEN'S PLAN</SoSubTitle>
          <SoHeadLineText fs="clamp(1.25rem,5vw,3.8rem)">from</SoHeadLineText>
          <SoSubTitle fs="clamp(1.15rem,5vw,3.7rem)">UK PASSIONATE</SoSubTitle>
        </SoFlex>
        <SoBox>
            <SoTypography fs="clamp(.25rem, 5vw, 1.5rem)" ls='0px' color={palette.text.low}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit, non vitae nunc congue erat in, pharetra facilisis ridiculus porta augue nam.
            </SoTypography>
        </SoBox>
        <SoFlex w='100%' jc='start'>
        <SoPlainButton>Discover more about me</SoPlainButton>
        </SoFlex>
      </SoFlex>
    </SoBox>
  );
};

export default InfoContent;
