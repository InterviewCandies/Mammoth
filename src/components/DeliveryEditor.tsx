import {Grid, makeStyles, MenuItem} from "@material-ui/core";
import CHeading from "./common/CHeading";
import CSelect from "./common/CSelect";
import CLabel from "./common/CLabel";
import CButton from "./common/CButton";

const useStyles = makeStyles(() => ({
    right: {
        display: "flex",
        justifyContent: "flex-end"
    }
}))

function DeliveryEditor() {
    const classes = useStyles();

    return <Grid container spacing={5}>
        <Grid item xs={12}>
            <CHeading>Delivery</CHeading>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <CLabel>Shipping method</CLabel>
            </Grid>
            <Grid item xs={12}>
                <CSelect onChange={()=>{}} style={{width:"100%"}}>
                    <MenuItem>A</MenuItem>
                    <MenuItem>B</MenuItem>
                </CSelect>
            </Grid>
            <Grid item xs={12} className={classes.right} >
                <CButton>Apply</CButton>
            </Grid>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <CLabel>Shipping scope</CLabel>
            </Grid>
            <Grid item xs={12}>
                <CSelect onChange={()=>{}} style={{width:"100%"}}>
                    <MenuItem>A</MenuItem>
                    <MenuItem>B</MenuItem>
                </CSelect>
            </Grid>
            <Grid item xs={12} className={classes.right} >
                <CButton>Apply</CButton>
            </Grid>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <CLabel>Shipping fee type</CLabel>
            </Grid>
            <Grid item xs={12}>
                <CSelect onChange={()=>{}} style={{width:"100%"}}>
                    <MenuItem>A</MenuItem>
                    <MenuItem>B</MenuItem>
                </CSelect>
            </Grid>
            <Grid item xs={12} className={classes.right} >
                <CButton>Apply</CButton>
            </Grid>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <CLabel>Prepaid shipping fee</CLabel>
            </Grid>
            <Grid item xs={12}>
                <CSelect onChange={()=>{}} style={{width:"100%"}}>
                    <MenuItem>A</MenuItem>
                    <MenuItem>B</MenuItem>
                </CSelect>
            </Grid>
            <Grid item xs={12} className={classes.right} >
                <CButton>Apply</CButton>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <CLabel>Selected products</CLabel>
        </Grid>
    </Grid>
}
export default DeliveryEditor;