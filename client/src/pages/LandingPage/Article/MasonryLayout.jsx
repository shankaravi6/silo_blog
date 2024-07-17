import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {
  SoBox,
  SoCover,
  SoFlex,
  SoImg,
  SoSubTitle,
  SoTitle,
  SoTypography,
} from "../../../components/styledcomponents/globalStyles";
import { useThemeContext } from "../../../context/theme/ThemeContext";
import { articleDataList } from "../../../datas/ArticleData";
import { Fade, Hinge, Slide } from "react-awesome-reveal";

const MasonryLayout = ({articleData}) => {
  const { palette } = useThemeContext();

  return (
    <SoCover m="20px 0">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 300: 2, 500: 3, 700: 4, 900: 5 }}
      >
        
        <Masonry columnsCount={3} gutter="20px">
        {articleData.map((data, index) => {
            return <SoFlex key={index} dir='column'>
            <Fade>
              <SoBox className="relative">
                {/* <SoImg width="100%" src={`http://localhost:5000/${data.imgPath}`} /> */}
                <SoImg width="100%" src={`assets/${data.img}`} />
                <SoSubTitle tt='uppercase' className='absolute bottom-0 right-0' style={{background:"linear-gradient(360deg, black, transparent)"}} color={palette.text.title}>{data.title}</SoSubTitle>
              </SoBox>
              <SoBox w='100%'>
              <SoFlex jc='space-between' w='100%'>
                <SoTitle tt='uppercase' fs="12px">
                  {data.author}
                </SoTitle>
                <SoTitle tt='uppercase' fs='12px'>{data.date}</SoTitle>
              </SoFlex>
              </SoBox>
              </Fade>
            </SoFlex>
        })}
            
        </Masonry>
      </ResponsiveMasonry>
    </SoCover>
  );
};

export default MasonryLayout;
