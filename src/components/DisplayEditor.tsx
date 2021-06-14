import {Grid} from "@material-ui/core";
import CHeading from "./common/CHeading";
import CLabel from "./common/CLabel";
import CCheckbox from "./common/CCheckbox";
import {useState} from "react";
import CButton from "./common/CButton";

function DisplayEditor() {
    const [displayItems, setDisplayItems] = useState<boolean>(true)

    return <Grid container spacing={5}>
        <Grid item xs={12}>
            <CHeading>Display</CHeading>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <CLabel>Show product(s) on your store</CLabel>
            </Grid>
            <Grid container item xs={12} alignItems={"center"}>
                <CCheckbox checked={displayItems === true} onChange={()=> setDisplayItems(true)}></CCheckbox>
                <CLabel style={{marginLeft: "0.75rem"}}>Yes</CLabel>
            </Grid>
            <Grid container item xs={12} alignItems={"center"}>
                <CCheckbox checked={displayItems === false} onChange={()=> setDisplayItems(false)}></CCheckbox>
                <CLabel style={{marginLeft: "0.75rem"}}>No</CLabel>
            </Grid>
            <Grid item xs={12}>
                <CButton>Apply</CButton>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <CLabel>Selected products</CLabel>
        </Grid>
    </Grid>
}

export default DisplayEditor;