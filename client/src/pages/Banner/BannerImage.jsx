import React from "react";
import {
  SoBox,
  SoFlex,
  SoImg,
  SoTypography,
} from "../../components/styledcomponents/globalStyles";
import { useThemeContext } from "../../context/theme/ThemeContext";
import Hinston from "../../../public/assets/images/banner/hinston.jpg";

const BannerImage = () => {
  const { palette } = useThemeContext();

  return (
    <SoBox className="relative" m="-200px 0 0 0">
      <SoFlex dir="column" gap="5px">
        <SoTypography
          color={palette.text.mid}
          className="absolute -bottom-0"
          fs="18px"
        >
          John Hinston
        </SoTypography>
        <SoBox w="325px">
          <SoImg src={Hinston} width="100%" className="absolute"></SoImg>
        </SoBox>
      </SoFlex>
    </SoBox>
  );
};

export default BannerImage;
