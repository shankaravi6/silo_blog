import React, { useMemo, useState } from "react";
import {
    SoBox,
  SoContainer,
  SoCover,
  SoFlex,
  SoSection,
  SoSubTitle,
} from "../../../components/styledcomponents/globalStyles";
import MasonryLayout from "./MasonryLayout";
import SoButton from "../../../components/common/SoButton";
import axios from "axios";


const ArticleSection = () => {

  const[articleData, setArticleData] = useState();

  useMemo(() => {
    const getArticleData = async () => {
      try {
        const articleDataResponse = await axios.get('http://localhost:5000/getarticle');
        console.log("articleDataResponse", articleDataResponse.data);

        const formattedArticleData = articleDataResponse.data.map(article => {
          const date = new Date(article.date);
          const formattedDate = `${date.getDate()} ${getMonthName(date.getMonth())}`;
          return { ...article, date: formattedDate };
        });

        setArticleData(formattedArticleData);
      } catch (error) {
        console.error("Error fetching article data:", error);
      }
    };
    getArticleData();
  },[])

  const getMonthName = (monthIndex) => {
    const months = [
      'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
      'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
    ];
    return months[monthIndex];
  };

  return (
    <SoSection>
      <SoCover m="100px 0 0 0">
        <SoFlex>
          <SoFlex>
            <SoSubTitle tt='uppercase'>Weekly Articles</SoSubTitle>
          </SoFlex>
        </SoFlex>
        <SoBox display='block'>
        <MasonryLayout articleData={articleData} />
        </SoBox>
        <SoFlex w='100%' p='20px 0 50px 0'>
        <SoButton>Load More</SoButton>
        </SoFlex>
      </SoCover>
    </SoSection>
  );
};

export default ArticleSection;
