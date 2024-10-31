import React from "react";
import {
  SoBox,
  SoFlex,
  SoHeadLineText,
  SoTitle,
  SoTypography,
} from "../../../components/styledcomponents/globalStyles";
import SoButton from "../../../components/common/SoButton";

const BannerContent = () => {
  return (
    <SoBox>
      <SoFlex al="flex-start" dir="column">
        <SoTitle>SATELLITE*</SoTitle>
        <SoFlex m="5px 0 0 0" sm_dir="row" jc="space-between" w="100%">
          <SoTypography>07</SoTypography>
          <SoTypography>JULY</SoTypography>
          <SoTypography>2024</SoTypography>
        </SoFlex>
        <SoHeadLineText fs="clamp(.25rem, 5vw, 1.5rem)">
          Lorem ipsum dolor sit amet consectetur adipiscing elit, nisl semper
          vestibulum facilisi eu primis, velit dictum dis nam convallis
          praesent. Lorem ipsum dolor sit amet consectetur adipiscing elit, nisl
          semper vestibulum facilisi eu primis, velit dictum dis nam convallis
          praesent.
        </SoHeadLineText>
        <SoBox p="25px 0 0 0">
          <SoButton>Read More</SoButton>
        </SoBox>
      </SoFlex>
    </SoBox>
  );
};

export default BannerContent;
