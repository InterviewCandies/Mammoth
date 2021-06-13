import React, {useContext, useState} from "react"
import {Button, ButtonGroup, FormControl, Grid, makeStyles, MenuItem, Select} from "@material-ui/core";
import logo from "../../assets/logo.png";
import {AppContext, AppContextModel} from "../../providers/AppProvider";
import {Link} from "react-router-dom"

const useStyles = makeStyles(theme => ({
    logo: {
        width: "5rem",
        height: "5rem"
    }
}))

function Header() {
    const classes = useStyles();
    const {theme, setTheme, lang, setLang} = useContext<AppContextModel>(AppContext)

    return <Grid container justify={"space-between"}>
        <Grid item>
            <ButtonGroup>
                <Button>
                    <Link to={'/select'}>Select</Link>
                </Button>
                <Button>
                    <Link to={'/edit'}>Edit</Link>
                </Button>
            </ButtonGroup>
        </Grid>
        <Grid item>
            <FormControl variant={'outlined'}>
                <Select value={theme} onChange={()=>setTheme()}>
                    <MenuItem value={'light'}>Light</MenuItem>
                    <MenuItem value={'dark'}>Dark</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="outlined">
                <Select value={lang} onChange={()=>setLang()}>
                    <MenuItem value={"en"}>English</MenuItem>
                    <MenuItem value={"vn"}>Vietnamese</MenuItem>
                </Select>
            </FormControl>
            <img src={logo} className={classes.logo}/>
        </Grid>
    </Grid>
}

export default Header;