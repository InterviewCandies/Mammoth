import {Collapse, Grid, MenuItem, Typography} from "@material-ui/core";
import CSelect from "./common/CSelect";
import CButton from "./common/CButton";
import styled from "styled-components";
import CCheckbox from "./common/CCheckbox";
import {useState} from "react";

const Label = styled.h6`
    color: ${({theme}) => theme.buttonText};
    font-size: 1rem;
    margin: 0.5rem;
`

function TagsEditor() {
    const [showAdd, setShowAdd] = useState<boolean>(true);
    const [showReplace, setShowReplace] = useState<boolean>(false);

    return  <Grid container spacing={5}>
        <Grid item xs={12}>
            <Typography variant={"h6"} style={{textTransform: "uppercase", letterSpacing:"0.15em", fontWeight: 700}}>Tags</Typography>
        </Grid>
        <Grid container item xs={12}>
            <Grid item xs={12}>
                <Grid container item xs={12} alignItems={"center"} justify={"space-between"}>
                    <Label>Add to all selected products</Label>
                    <CCheckbox onChange={() => setShowAdd(show => !show)}></CCheckbox>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={showAdd}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <CSelect onChange={() => {}}>
                                <MenuItem>Hello</MenuItem>
                                <MenuItem>Hello</MenuItem>
                            </CSelect>
                        </Grid>
                        <Grid item xs={12} style={{display: "flex",justifyContent:"flex-end"}}>
                            <CButton>Apply</CButton>
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </Grid>
        <Grid container item xs={12}>
            <Grid item xs={12}>
                <Grid container item xs={12} alignItems={"center"} justify={"space-between"}>
                    <Label>Replace in all selected products</Label>
                    <CCheckbox onChange={() => setShowReplace(show => !show)}></CCheckbox>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={showReplace}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <CSelect onChange={() => {}}>
                                <MenuItem>Hello</MenuItem>
                                <MenuItem>Hello</MenuItem>
                            </CSelect>
                        </Grid>
                        <Grid item xs={12} style={{display: "flex",justifyContent:"flex-end"}}>
                            <CButton>Apply</CButton>
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <Label>Selected products</Label>
        </Grid>
    </Grid>
}

export default TagsEditor;