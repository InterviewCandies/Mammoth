import {Collapse, Grid, MenuItem, Typography} from "@material-ui/core";
import CSelect from "./common/CSelect";
import CButton from "./common/CButton";
import styled from "styled-components";
import CCheckbox from "./common/CCheckbox";
import {useState} from "react";
import CLabel from "./common/CLabel";
import CHeading from "./common/CHeading";
import {useTranslation} from "react-i18next";

function TagsEditor() {
    const [showAdd, setShowAdd] = useState<boolean>(true);
    const [showReplace, setShowReplace] = useState<boolean>(false);
    const {t} = useTranslation();

    return  <Grid container spacing={5}>
        <Grid item xs={12}>
            <CHeading>{t('tags')}</CHeading>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <Grid container item xs={12} alignItems={"center"} justify={"space-between"}>
                    <CLabel>{t('addAll')}</CLabel>
                    <CCheckbox checked={showAdd} onChange={() => setShowAdd(show => !show)}></CCheckbox>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={showAdd}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <CSelect onChange={() => {}} style={{width: '100%'}}>
                                <MenuItem>Hello</MenuItem>
                                <MenuItem>Hello</MenuItem>
                            </CSelect>
                        </Grid>
                        <Grid item xs={12} style={{display: "flex",justifyContent:"flex-end"}}>
                            <CButton>{t('apply')}</CButton>
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <Grid container item xs={12} alignItems={"center"} justify={"space-between"}>
                    <CLabel>{t('setAll')}</CLabel>
                    <CCheckbox checked={showReplace} onChange={() => setShowReplace(show => !show)}></CCheckbox>
                </Grid>
            </Grid>
            <Grid item xs={12} spacing={2}>
                <Collapse in={showReplace}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <CSelect onChange={() => {}} style={{width: '100%'}}>
                                <MenuItem>Hello</MenuItem>
                                <MenuItem>Hello</MenuItem>
                            </CSelect>
                        </Grid>
                        <Grid item xs={12} style={{display: "flex",justifyContent:"flex-end"}}>
                            <CButton>{t('apply')}</CButton>
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <CLabel>{t('selectedProducts')}</CLabel>
        </Grid>
    </Grid>
}

export default TagsEditor;