import {Grid, makeStyles, MenuItem, Typography} from "@material-ui/core";
import CSelect from "./common/CSelect";
import styled from "styled-components";
import CButton from "./common/CButton";
import CHeading from "./common/CHeading";
import CLabel from "./common/CLabel";

const useStyles = makeStyles(() => ({
    root: {
        paddingLeft: "4rem"
    },
    heading: {
        textTransform: "uppercase", letterSpacing:"0.15em", fontWeight: 700
    }
}))

const Label = styled.h6`
    color: ${({theme}) => theme.buttonText};
    font-size: 1rem;
    margin-bottom: 0.5rem;
`

function CategoryEditor() {
    const classes = useStyles();

    return  <Grid container spacing={5} >
        <Grid item xs={12}>
           <CHeading>Category</CHeading>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <CLabel>Set all selected products</CLabel>
            </Grid>
            <Grid item xs={12}>
                <CSelect onChange={() => {}} style={{width: "100%"}}>
                        <MenuItem>Hello</MenuItem>
                        <MenuItem>Hello</MenuItem>
                    </CSelect>
            </Grid>
            <Grid item xs={12} style={{display: "flex",justifyContent:"flex-end"}}>
                <CButton>Apply</CButton>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <CLabel>Selected products</CLabel>
        </Grid>
    </Grid>
}

export default CategoryEditor