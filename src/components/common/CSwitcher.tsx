import {createStyles, Switch, SwitchClassKey, SwitchProps, Theme, withStyles} from "@material-ui/core";
import ThemeModel from "../../types/ThemeModel";

interface Styles extends Partial<Record<SwitchClassKey, string>> {
    focusVisible?: string;
}

interface Props extends SwitchProps {
    classes: Styles;
}

const CSwitch = withStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 60,
            height: 26,
            padding: 0,
            margin: theme.spacing(1),
        },
        switchBase: {
            padding: 1,
            '&$checked': {
                transform: 'translateX(35px)',
                color: theme.palette.common.white,
                '& + $track': {
                    backgroundColor: '#8b9dc3',
                    opacity: 1,
                    border: 'none',
                    boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)'
                },
            },
            '&$focusVisible $thumb': {
                color: '#8b9dc3 !important',
                border: '6px solid #fff',
            },
        },
        thumb: {
            width: 24,
            height: 24,
            color: '#fff !important',
        },
        track: {
            borderRadius: 26 / 2,
            border: `1px solid ${theme.palette.grey[400]}`,
            backgroundColor: theme.palette.grey[300],
            boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
            opacity: 1,
            transition: theme.transitions.create(['background-color', 'border']),
        },
        checked: {},
        focusVisible: {},
    }),
)(({ classes, ...props }: Props) => {
    return (
        <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
            }}
            {...props}
        />
    );
});

export default CSwitch;