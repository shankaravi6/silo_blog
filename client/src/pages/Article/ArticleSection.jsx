import React from "react";
import {
    SoBox,
  SoContainer,
  SoCover,
  SoFlex,
  SoSection,
  SoSubTitle,
} from "../../components/styledcomponents/globalStyles";
import MasonryLayout from "./MasonryLayout";
import SoButton from "../../components/common/SoButton";

const ArticleSection = () => {
  return (
    <SoSection>
      <SoCover m="100px 0 0 0">
        <SoFlex>
          <SoFlex>
            <SoSubTitle tt='uppercase'>Weekly Articles</SoSubTitle>
          </SoFlex>
        </SoFlex>
        <SoBox display='block'>
        <MasonryLayout />
        </SoBox>
        <SoFlex w='100%' p='20px 0 50px 0'>
        <SoButton>Load More</SoButton>
        </SoFlex>
      </SoCover>
    </SoSection>
  );
};

export default ArticleSection;
