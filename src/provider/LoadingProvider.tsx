import {createContext, ReactElement, useContext, useState} from "react";
import {Backdrop, CircularProgress, createStyles, makeStyles, Paper, Theme} from "@material-ui/core";
import {ThemeContext} from "styled-components";
import ThemeModel from "../types/ThemeModel";

interface ContextType {
    loading: boolean,
    turnOnLoading: (value : boolean) => void;
}

export const LoadingContext = createContext<ContextType>({loading: false, turnOnLoading: (value: boolean)=>{}});

interface Props {
    theme: ThemeModel
}

const useStyles = makeStyles<Theme, Props>((theme: Theme) =>
    createStyles({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: "#fff",
            opacity: "0.8"
        },
        paper: {
            backgroundColor: props => props.theme.button,
            padding: "0.75rem",
            borderRadius: "4px"
        }
    }),
);

function LoadingProvider({children} : {children: ReactElement}) {
    const theme = useContext(ThemeContext);
    const classes = useStyles({theme});
    const [loading, setLoading] = useState<boolean>(false);
    const turnOnLoading = (value : boolean) => {
        setLoading(value);
    }

    return <LoadingContext.Provider value={{loading, turnOnLoading}}>
        <Backdrop className={classes.backdrop} open={loading}>
            <Paper square={true} className={classes.paper} elevation={5}>
                <CircularProgress size={35} style={{color: theme.buttonText}}/>
            </Paper>
        </Backdrop>
        {children}
    </LoadingContext.Provider>
}

export default LoadingProvider;