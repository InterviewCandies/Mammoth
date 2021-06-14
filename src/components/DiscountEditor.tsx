import {useState} from "react";
import {Collapse, Grid, MenuItem} from "@material-ui/core";
import CHeading from "./common/CHeading";
import CLabel from "./common/CLabel";
import CCheckbox from "./common/CCheckbox";
import CInput from "./common/CInput";
import CSelect from "./common/CSelect";
import CButton from "./common/CButton";

function DiscountEditor() {
    const [showAction, setShowAction] = useState<number>(1);

    return <Grid container spacing={5}>
        <Grid item xs={12}>
            <CHeading>Discount</CHeading>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <Grid container item xs={12} alignItems={"center"} justify={"space-between"}>
                    <CLabel>Increased by</CLabel>
                    <CCheckbox checked={showAction === 1} disabled={showAction !== 1 && showAction !== 0} onChange={() => setShowAction(show => show == 1 ? 0 : 1)}></CCheckbox>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={showAction === 1}>
                    <Grid container item xs={12} alignItems={"center"}>
                        <CInput type={"number"}></CInput>
                        <Grid item style={{margin: '0.5rem'}}>
                            <CSelect onChange={() => {}}>
                                <MenuItem>%</MenuItem>
                                <MenuItem>VND</MenuItem>
                            </CSelect>
                        </Grid>
                        <Grid item>
                            <CButton>Apply</CButton>
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <Grid container item xs={12} alignItems={"center"} justify={"space-between"}>
                    <CLabel>Decreased by</CLabel>
                    <CCheckbox checked={showAction === 2} disabled={showAction !== 2 && showAction !== 0} onChange={() => setShowAction(show => show == 2 ? 0 : 2)}></CCheckbox>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={showAction === 2}>
                    <Grid container item xs={12} alignItems={"center"}>
                        <CInput type={"number"}></CInput>
                        <Grid item style={{margin: '0.5rem'}}>
                            <CSelect onChange={() => {}}>
                                <MenuItem>%</MenuItem>
                                <MenuItem>VND</MenuItem>
                            </CSelect>
                        </Grid>
                        <Grid item>
                            <CButton>Apply</CButton>
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <Grid container item xs={12} alignItems={"center"} justify={"space-between"}>
                    <CLabel>Replaced by</CLabel>
                    <CCheckbox checked={showAction === 3} disabled={showAction !== 3 && showAction !== 0} onChange={() => setShowAction(show => show == 3 ? 0 : 3)}></CCheckbox>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={showAction === 3}>
                    <Grid container item xs={12} alignItems={"center"}>
                        <CInput type={"number"}></CInput>
                        <Grid item style={{margin: '0.5rem'}}>
                            <CSelect onChange={() => {}}>
                                <MenuItem>%</MenuItem>
                                <MenuItem>VND</MenuItem>
                            </CSelect>
                        </Grid>
                        <Grid item>
                            <CButton>Apply</CButton>
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
            <Grid item xs={12}>
                <CLabel>Selected products</CLabel>
            </Grid>
        </Grid>
    </Grid>
}

export default DiscountEditor;