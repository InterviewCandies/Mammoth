import styled from "styled-components";
import {lightTheme} from "../../theme";
import {ThemeType} from "../../types/ThemeModel";
import {Brightness1, Brightness2, Brightness5, WbSunny} from "@material-ui/icons";
import {Icon} from "@material-ui/core";

interface Props {
    lightTheme : boolean
}

const ToggleContainer = styled.button<Props>`
  background: ${({ theme }) => theme.gradient};
  border: none;
  box-shadow: ${({theme}) => theme.boxShadowInside };
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 5rem;
  height: 2.5rem;

  span {
    height: auto;
    max-width: 1.6rem;
    transition: all 0.3s linear;
    
    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(50px)'};
      color: ${({theme}) => theme.primary}
    }
    
    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-50px)' : 'translateY(0)'};
      color: ${({theme}) => theme.primary}
    }
  }
`;

function ToggleTheme({theme, toggleTheme} : {theme: ThemeType, toggleTheme: () => void}) {
    const isLight = theme === 'light'
    return   <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
        <Icon><WbSunny/></Icon>
        <Icon><Brightness2/></Icon>
    </ToggleContainer>
}

export default ToggleTheme;
