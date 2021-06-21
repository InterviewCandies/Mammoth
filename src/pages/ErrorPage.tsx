import {Button, Grid, makeStyles, Typography} from "@material-ui/core";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles(() => ({
    root: {
        width: '100vw',
        height: '100vh',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#8b9dc3",
        flexDirection: "column",
        color: "#fff"
    },

}))

function ErrorPage() {
    const history = useHistory();
    const classes = useStyles();

    return <div className={classes.root}>
        <Typography variant={"h1"} style={{fontWeight: 600}}>505</Typography>
        <Typography variant={"h2"}>Opps! Internal error</Typography>
        <Button onClick={() => history.push("/select")}  variant={"contained"} style={{marginTop: '1.5rem', textTransform: "none"}}>Back to main page</Button>
    </div>;
}

export default ErrorPage;