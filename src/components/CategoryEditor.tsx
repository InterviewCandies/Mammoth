import {Grid, makeStyles, MenuItem, Typography} from "@material-ui/core";
import CSelect from "./common/CSelect";
import styled from "styled-components";
import CButton from "./common/CButton";

const useStyles = makeStyles(() => ({
    root: {
        paddingLeft: "4rem"
    },
}))

const Label = styled.h6`
    color: ${({theme}) => theme.buttonText};
    font-size: 1rem;
    margin-bottom: 0.5rem;
`

function CategoryEditor() {
    const classes = useStyles();

    return  <Grid container className={classes.root} >
        <Grid item xs={12}>
            <Typography variant={"h6"} style={{textTransform: "uppercase", letterSpacing:"0.15em", fontWeight: 700}}>Category</Typography>
        </Grid>
        <Grid container item xs={12} spacing={3}>
            <Grid item xs={12}>
                <Label>Set all selected products</Label>
                <CSelect onChange={() => {}}>
                        <MenuItem>Hello</MenuItem>
                        <MenuItem>Hello</MenuItem>
                    </CSelect>
            </Grid>
            <Grid item xs={12} style={{display: "flex",justifyContent:"flex-end"}}>
                <CButton>Apply</CButton>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <Label>Selected products</Label>
        </Grid>
    </Grid>
}

export default CategoryEditor