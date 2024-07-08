import React from "react";
import {
    NavText,
  SoBox,
  SoCenterContainer,
  SoFlex,
  SoImg,
  SoSubTitle,
  SoTitle,
  SoTypography,
} from "../../components/styledcomponents/globalStyles";
import { colorTokens } from "../../context/theme/theme";
import CoverImg from "../../../public/assets/images/admin/login/cover.jpg";
import SoInput from "../../components/common/SoInput";
import SoButton from "../../components/common/SoButton";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ControlCameraOutlinedIcon from '@mui/icons-material/ControlCameraOutlined';

const AdminLogin = () => {
  const shadow = `inset 0 0 0.5px 1px hsla(0, 0%,  
        100%, 0.075),
        0 0 0 1px hsla(0, 0%, 0%, 0.05),
        0 0.3px 0.4px hsla(0, 0%, 0%, 0.02),
        0 0.9px 1.5px hsla(0, 0%, 0%, 0.045),
        0 3.5px 6px hsla(0, 0%, 0%, 0.09)`;

  return (
    <SoCenterContainer bg={colorTokens.drops[900]}>
      <SoFlex bs={shadow} bg={colorTokens.drops[1000]}>
        <SoBox className="relative" w="500px" h="500px">
          <SoImg style={{transform:'rotateY(180deg)'}} width="100%" src={CoverImg} />
          <SoFlex al='center' className='absolute top-2 left-2' bg='transparent' gap='10px'>
            <ControlCameraOutlinedIcon style={{color:`${colorTokens.drops[400]}`, fontSize:"2.5rem"}} />
            <SoSubTitle fs='22px' ls='1.5px' color={colorTokens.drops[400]}>BLACK CMS</SoSubTitle>
          </SoFlex>
        </SoBox>
        <SoBox w="500px" h="500px">
          <SoFlex bg="transparent" w="100%" dir="column" gap="1rem">
            <SoFlex bg="transparent" w="100%" dir='column'>
            <AdminPanelSettingsIcon style={{color:`${colorTokens.drops[500]}`, fontSize:"4.75rem"}} />
              <SoSubTitle color={colorTokens.drops[300]} ls="10px">
                LOGIN
              </SoSubTitle>
            </SoFlex>
            <SoFlex p='0px 50px' dir="column" bg="transparent" w="100%" gap="1.5rem">
              <SoInput
                bg="transparent"
                placecolor={colorTokens.drops[500]}
                color={colorTokens.drops[200]}
                placeholder="User Id"
              />
              <SoInput
                bg="transparent"
                placecolor={colorTokens.drops[500]}
                color={colorTokens.drops[200]}
                placeholder="Password"
              />
              <SoButton width="100%">Submit</SoButton>
            </SoFlex>
          </SoFlex>
        </SoBox>
      </SoFlex>
    </SoCenterContainer>
  );
};

export default AdminLogin;
