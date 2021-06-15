import {ButtonGroup, Collapse, Grid, makeStyles, MenuItem, Switch} from "@material-ui/core";
import CHeading from "./common/CHeading";
import CButton from "./common/CButton";
import CCheckbox from "./common/CCheckbox";
import CInput from "./common/CInput";
import CSelect from "./common/CSelect";
import CLabel from "./common/CLabel";
import useDarkMode from "../hooks/useDarkMode";
import {useState} from "react";
import styled from "styled-components";
import CSwitcher from "./common/CSwitcher";

const useStyles = makeStyles((theme)=>({
    root: {
        "& > *" : {
            marginBottom: theme.spacing(5)
        }
    },
    price: {
        "& > *" : {
            marginRight: "0.75rem"
        }
    },
    checkbox: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem"
    },
}))

const Text = styled.h4`
   color: ${({theme}) => theme.text };
   margin: 0;
`

function FilterTool() {
    const classes = useStyles();
    const [theme, toggleTheme] = useDarkMode();
    const [filters, setFilters] = useState<boolean[]>([]);
    const [filterType, setFilterType] = useState<number>(0);
    const handleChange = async (index: number) => {
        await setFilters(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        })
    }
    return  <div className={classes.root}>
        <Grid container justify={"space-between"}>
        <CHeading>Filter</CHeading>
        <ButtonGroup>
            <CButton active={filterType === 0} onClick={() => setFilterType(0)}>Exact</CButton>
            <CButton active={filterType === 1} onClick={() =>  setFilterType(1)}>Include</CButton>
        </ButtonGroup>
        </Grid>
        <Grid container spacing={2}>
            <Grid container item xs={12} justify={"space-between"}>
                <Text>Product name</Text>
                <CCheckbox checked={filters[0]} onChange={()=> handleChange(0)}></CCheckbox>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={filters[0]}>
                    <CInput style={{width: "100%"}}></CInput>
                </Collapse>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid container item xs={12} justify={"space-between"}>
                <Text>Category</Text>
                <CCheckbox checked={filters[1]} onChange={()=> handleChange(1)}></CCheckbox>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={filters[1]}>
                    <CSelect onChange={()=>{}} style={{width: "100%"}}>
                        <MenuItem>A</MenuItem>
                        <MenuItem>B</MenuItem>
                    </CSelect>
                </Collapse>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid container item xs={12} justify={"space-between"}>
                <Text>Brand</Text>
                <CCheckbox checked={filters[2]} onChange={()=> handleChange(2)}></CCheckbox>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={filters[2]}>
                    <CSelect onChange={()=>{}} style={{width: "100%"}}>
                        <MenuItem>A</MenuItem>
                        <MenuItem>B</MenuItem>
                    </CSelect>
                </Collapse>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid container item xs={12} justify={"space-between"}>
                <Text>Supplier</Text>
                <CCheckbox checked={filters[3]} onChange={()=> handleChange(3)}></CCheckbox>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={filters[3]}>
                    <CSelect onChange={()=>{}} style={{width: "100%"}}>
                        <MenuItem>A</MenuItem>
                        <MenuItem>B</MenuItem>
                    </CSelect>
                </Collapse>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid container item xs={12} justify={"space-between"}>
                <Text>Tags</Text>
                <CCheckbox checked={filters[4]} onChange={()=> handleChange(4)}></CCheckbox>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={filters[4]}>
                    <CSelect onChange={()=>{}} style={{width: "100%"}}>
                        <MenuItem>A</MenuItem>
                        <MenuItem>B</MenuItem>
                    </CSelect>
                </Collapse>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid container item xs={12} justify={"space-between"}>
                <Text>Price</Text>
                <CCheckbox checked={filters[5]} onChange={()=> handleChange(5)}></CCheckbox>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={filters[5]}>
                    <Grid container item xs={12}  alignItems={"center"} className={classes.price}>
                        <Grid item>
                            <CLabel>From</CLabel>
                        </Grid>
                        <Grid item>
                            <CInput type={"number"}></CInput>
                        </Grid>
                        <Grid item>
                            <CLabel>To</CLabel>
                        </Grid>
                        <Grid>
                            <CInput type={"number"}></CInput>
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid container item xs={12} justify={"space-between"}>
                <Text>Quantity</Text>
                <CCheckbox checked={filters[6]} onChange={()=> handleChange(6)}></CCheckbox>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={filters[6]}>
                    <Grid container item xs={12}  alignItems={"center"} className={classes.price}>
                        <Grid item>
                            <CLabel>From</CLabel>
                        </Grid>
                        <Grid item>
                            <CInput type={"number"}></CInput>
                        </Grid>
                        <Grid item>
                            <CLabel>To</CLabel>
                        </Grid>
                        <Grid>
                            <CInput type={"number"}></CInput>
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid container item xs={12} justify={"space-between"}>
                <Text>Discount</Text>
                <CCheckbox checked={filters[7]} onChange={()=> handleChange(7)}></CCheckbox>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={filters[7]}>
                    <Grid container item xs={12}  alignItems={"center"} className={classes.price}>
                        <Grid item>
                            <CLabel>Have a discount ?</CLabel>
                        </Grid>
                        <Grid item>
                            <CSwitcher></CSwitcher>
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid container item xs={12} justify={"space-between"}>
                <Text>Image</Text>
                <CCheckbox checked={filters[8]} onChange={()=> handleChange(8)}></CCheckbox>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={filters[8]}>
                    <Grid container item xs={12}  alignItems={"center"} className={classes.price}>
                        <Grid item>
                            <CLabel>Have a image ?</CLabel>
                        </Grid>
                        <Grid item>
                            <CSwitcher></CSwitcher>
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid container item xs={12} justify={"space-between"}>
                <Text>Upload date</Text>
                <CCheckbox checked={filters[9]} onChange={()=> handleChange(9)}></CCheckbox>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={filters[9]}>
                    <Grid container item xs={12}  alignItems={"center"} className={classes.price}>
                        <Grid item>
                            <CLabel>From</CLabel>
                        </Grid>
                        <Grid item>
                            <CInput type={"date"}></CInput>
                        </Grid>
                        <Grid item>
                            <CLabel>To</CLabel>
                        </Grid>
                        <Grid>
                            <CInput type={"date"}></CInput>
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid container item xs={12} justify={"space-between"}>
                <Text>Options</Text>
                <CCheckbox checked={filters[10]} onChange={()=> handleChange(10)}></CCheckbox>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={filters[10]}>
                    <Grid container item xs={12}  spacing={5}>
                        <Grid item className={classes.checkbox}>
                            <CCheckbox></CCheckbox>
                            <CLabel >Red</CLabel>
                        </Grid>
                        <Grid item className={classes.checkbox}>
                            <CCheckbox></CCheckbox>
                            <CLabel>Blue</CLabel>
                        </Grid>
                        <Grid item className={classes.checkbox}>
                            <CCheckbox></CCheckbox>
                            <CLabel>Green</CLabel>
                        </Grid>
                        <Grid item className={classes.checkbox}>
                            <CCheckbox></CCheckbox>
                            <CLabel>Yellow</CLabel>
                        </Grid>
                        <Grid item className={classes.checkbox}>
                            <CCheckbox></CCheckbox>
                            <CLabel>Black</CLabel>
                        </Grid>
                        <Grid item className={classes.checkbox}>
                            <CCheckbox></CCheckbox>
                            <CLabel>White</CLabel>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12}  spacing={5}>
                        <Grid item className={classes.checkbox}>
                            <CCheckbox></CCheckbox>
                            <CLabel>Cotton</CLabel>
                        </Grid>
                        <Grid item className={classes.checkbox}>
                            <CCheckbox></CCheckbox>
                            <CLabel>Jean</CLabel>
                        </Grid>
                        <Grid item className={classes.checkbox}>
                            <CCheckbox></CCheckbox>
                            <CLabel>Leather</CLabel>
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <CButton style={{marginRight: "1rem", padding: "1rem 3rem"}}>Apply filters</CButton>
                <CButton style={{padding: "1rem 3rem"}}>Reset filters</CButton>
            </Grid>
        </Grid>
    </div>
}

export default FilterTool;