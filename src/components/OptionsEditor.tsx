import {Grid, MenuItem} from "@material-ui/core";
import CHeading from "./common/CHeading";
import CLabel from "./common/CLabel";
import CSelect from "./common/CSelect";
import CButton from "./common/CButton";

function OptionsEditor() {
    return <Grid container spacing={5}>
        <Grid item xs={12}>
            <CHeading>Options</CHeading>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <CLabel>Color</CLabel>
            </Grid>
            <Grid container item xs={12} spacing={3}>
                <Grid item xs={9}>
                    <CSelect onChange={()=>{}} style={{width: '100%'}}>
                        <MenuItem>A</MenuItem>
                        <MenuItem>B</MenuItem>
                    </CSelect>
                </Grid>
                <Grid item xs={3}>
                    <CSelect onChange={()=>{}} style={{width: '100%'}}>
                        <MenuItem>Replace</MenuItem>
                        <MenuItem>Add</MenuItem>
                    </CSelect>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <CButton>Apply</CButton>
            </Grid>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <CLabel>Material</CLabel>
            </Grid>
            <Grid container item xs={12} spacing={3}>
                <Grid item xs={9}>
                    <CSelect onChange={()=>{}} style={{width: '100%'}}>
                        <MenuItem>A</MenuItem>
                        <MenuItem>B</MenuItem>
                    </CSelect>
                </Grid>
                <Grid item xs={3}>
                    <CSelect onChange={()=>{}} style={{width: '100%'}}>
                        <MenuItem>Replace</MenuItem>
                        <MenuItem>Add</MenuItem>
                    </CSelect>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <CButton>Apply</CButton>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <CLabel>Selected products</CLabel>
        </Grid>
    </Grid>;
}

export default OptionsEditor;