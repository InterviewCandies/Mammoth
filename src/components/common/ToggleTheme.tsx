import styled from "styled-components";
import {lightTheme} from "../../theme";
import {ThemeType} from "../../types/ThemeModel";

interface Props {
    lightTheme : boolean
}

const ToggleContainer = styled.button<Props>`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
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

  img {
    height: auto;
    max-width: 1.6rem;
    transition: all 0.3s linear;
    
    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }
    
    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;

function ToggleTheme({theme, toggleTheme} : {theme: ThemeType, toggleTheme: () => void}) {
    const isLight = theme === 'light'
    return   <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
        <img src="https://image.flaticon.com/icons/svg/1164/1164954.svg" width="25" height="25" alt="Sun free icon" title="Sun free icon"/>
        <img src="https://image.flaticon.com/icons/svg/2033/2033921.svg" width="25" height="25" alt="Moon free icon" title="Moon free icon"/>
    </ToggleContainer>
}

export default ToggleTheme;
