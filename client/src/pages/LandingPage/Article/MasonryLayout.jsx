import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {
  SoBox,
  SoCover,
  SoFlex,
  SoImg,
  SoSubTitle,
  SoTitle,
} from "../../../components/styledcomponents/globalStyles";
import { useThemeContext } from "../../../context/theme/ThemeContext";
import { Fade } from "react-awesome-reveal";

const MasonryLayout = ({ articleData }) => {
  const { palette } = useThemeContext();

  return (
    <SoCover m="20px 0">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 300: 1, 500: 2, 700: 3, 900: 4, 1200: 5 }}
      >
        <Masonry columnsCount={3} gutter="16px">
          {articleData.map((data, index) => {
            return (
              <SoFlex key={index} dir="column">
                <Fade style={{width:"100%"}}>
                  <SoBox className="relative">
                    <SoImg width="100%" src={`assets/${data.img}`} />
                    <SoSubTitle
                      tt="uppercase"
                      className="absolute bottom-0 right-0"
                      style={{
                        background: "linear-gradient(360deg, black, transparent)",
                        padding: "4px 8px",
                        fontSize: "14px",
                      }}
                      color={palette.text.title}
                    >
                      {data.title}
                    </SoSubTitle>
                  </SoBox>
                  <SoBox w="100%">
                    <SoFlex sjc='space-between' jc="space-between" sw='100%' sm_dir="row" w="100%">
                      <SoTitle tt="uppercase" s_ml='0px' ls='0px' fs="clamp(.5rem, 5vw, .75rem)">
                        {data.author}
                      </SoTitle>
                      <SoTitle tt="uppercase" s_ml='0px' ls='0px' fs="clamp(.5rem, 5vw, .75rem)">
                        {data.date}
                      </SoTitle>
                    </SoFlex>
                  </SoBox>
                </Fade>
              </SoFlex>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </SoCover>
  );
};

export default MasonryLayout;
