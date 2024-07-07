import React from "react";
import {
  SoBackImg,
  SoBox,
  SoImg,
} from "../../components/styledcomponents/globalStyles";
import Article from "../../../public/assets/images/info/article_new.jpg";

const InfoImage = () => {
  return (
    <SoBox w="100%" p="5px 0 5px 0">
      <SoImg width="100%" src={Article}></SoImg>
    </SoBox>
  );
};

export default InfoImage;
