import {Grid, MenuItem} from "@material-ui/core";
import CHeading from "./common/CHeading";
import CLabel from "./common/CLabel";
import CSelect from "./common/CSelect";
import CButton from "./common/CButton";
import CInput from "./common/CInput";

function TaxEditor() {
    return <Grid container spacing={5}>
        <Grid item xs={12}>
            <CHeading>Tax</CHeading>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <CLabel>Tax type</CLabel>
            </Grid>
            <Grid item xs={12}>
                <CSelect onChange={()=> {}} style={{minWidth: '500px'}}>
                    <MenuItem>A</MenuItem>
                    <MenuItem>B</MenuItem>
                </CSelect>
                <CButton style={{marginLeft: "0.5rem"}}>Apply</CButton>
            </Grid>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <CLabel>Tax amount</CLabel>
            </Grid>
            <Grid item xs={12}>
                <CInput type={"number"} style={{minWidth: '500px'}}></CInput>
                <CButton style={{marginLeft: "0.5rem"}}>Apply</CButton>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <CLabel>Selected product</CLabel>
        </Grid>
    </Grid>
}

export default TaxEditor;