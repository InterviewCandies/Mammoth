import Layout from "../components/common/Layout";
import {useContext} from "react";
import CButton from "../components/common/CButton";
import CInput from "../components/common/CInput";
import CSelect from "../components/common/CSelect";
import {FormControl, makeStyles, MenuItem, Select} from "@material-ui/core";
import useDarkMode from "../hooks/useDarkMode";

const useStyles = makeStyles(()=>({
     root: {
         "& > *": {
            marginBottom: '1rem'
         }
     }
}))

function SelectMode() {
    const classes = useStyles();
    const [theme, toggleTheme] = useDarkMode();

    return <div className={classes.root}>
        <CButton>Select</CButton>
        <CInput></CInput>
         <CSelect value={theme} onChange={() => toggleTheme()}>
             <MenuItem value={"light"}>light</MenuItem>
             <MenuItem value={"dark"}>dark</MenuItem>
         </CSelect>
    </div>
}

export default SelectMode