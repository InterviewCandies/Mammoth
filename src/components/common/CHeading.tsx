import styled from "styled-components";

const CHeading = styled.h2`
    text-transform: uppercase;
    fontWeight: 700;
    margin: 0;
    color: ${({theme}) => theme.primary}
`

export default CHeading;