import React, {useState} from "react"
import {Button, ButtonGroup, FormControl, Grid, makeStyles, MenuItem, Select} from "@material-ui/core";
import logo from "../../assets/logo.png";


const useStyles = makeStyles(theme => ({
    logo: {
        width: "5rem",
        height: "5rem"
    }
}))

function Header() {
    const classes = useStyles();
    const [lang, setLang] = useState<string>("en");

    return <Grid container justify={"space-between"}>
        <Grid item>
            <ButtonGroup>
                <Button>Select</Button>
                <Button>Edit</Button>
            </ButtonGroup>
        </Grid>
        <Grid item>
            <FormControl variant="outlined" >
            <Select value={lang}>
                <MenuItem value={"en"}>English</MenuItem>
                <MenuItem value={"vn"}>Vietnamese</MenuItem>
            </Select>
            </FormControl>
            <img src={logo} className={classes.logo}/>
        </Grid>
    </Grid>
}

export default Header;