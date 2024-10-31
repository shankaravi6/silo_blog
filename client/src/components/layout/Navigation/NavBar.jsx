import React from 'react';
import { SoContainer, SoCover, SoFlex, SoSection, SoSubTitle, SoTitle } from '../../styledcomponents/globalStyles';
import { colorTokens } from '../../../context/theme/theme';
import { NavSection } from '../../styledcomponents/Navigation/NavStyles';
import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import NavButtons from './NavButtons';
import { useThemeContext } from '../../../context/theme/ThemeContext';

const NavBar = () => {

  const { palette } = useThemeContext();
  

  return (
    <SoCover>
        <NavSection h='70px' bg={palette.background.high}>
            <SoSection>
                <SoFlex p='15px 0px' jc='space-between'>
                    <NavLogo/>
                    <NavLinks/>
                    <NavButtons/>
                </SoFlex>
            </SoSection>
        </NavSection>
    </SoCover>
  );
}

export default NavBar;
