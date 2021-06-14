import {Grid, makeStyles, MenuItem} from "@material-ui/core";
import CSelect from "./common/CSelect";
import styled from "styled-components";
import CTextarea from "./common/CTextarea";
import CButton from "./common/CButton";

const Label = styled.h6`
    color: ${({theme}) => theme.buttonText};
    font-size: 1rem;
    margin: 0.5rem 0;
`
const Heading = styled.h2`
    text-transform: uppercase;
    letter-spacing: 0.15em;
    fontWeight: 700;
    margin: 0;
`
const useStyles = makeStyles(() => ({
    right: {
        display: "flex",
        justifyContent: "flex-end"
    },
}))

function DescriptionEditor() {
    const classes = useStyles();

    return <Grid container spacing={5}>
        <Grid item xs={12}>
            <Heading>Description</Heading>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid container item xs={12} justify={"space-between"}>
                <Label>Summary</Label>
                <CSelect onChange={()=>{}}>
                    <MenuItem>Add Before</MenuItem>
                    <MenuItem>Add After</MenuItem>
                    <MenuItem>Replace</MenuItem>
                </CSelect>
            </Grid>
            <Grid item xs={12}>
               <CTextarea rows={5}></CTextarea>
            </Grid>
            <Grid item xs={12} className={classes.right}>
                <CButton>Apply</CButton>
            </Grid>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid container item xs={12} justify={"space-between"}>
                <Label>Details</Label>
                <CSelect onChange={()=>{}}>
                    <MenuItem>Add Before</MenuItem>
                    <MenuItem>Add After</MenuItem>
                    <MenuItem>Replace</MenuItem>
                </CSelect>
            </Grid>
            <Grid item xs={12}>
                <CTextarea rows={5}></CTextarea>
            </Grid>
            <Grid item xs={12} className={classes.right}>
                <CButton>Apply</CButton>
            </Grid>
        </Grid>
        <Grid container item xs={12}>
            <Label>Selected products</Label>
        </Grid>
    </Grid>
}

export default DescriptionEditor;