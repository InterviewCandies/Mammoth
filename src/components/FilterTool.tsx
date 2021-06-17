import {ButtonGroup, Collapse, Grid, Icon, makeStyles, MenuItem, Switch} from "@material-ui/core";
import CHeading from "./common/CHeading";
import CButton from "./common/CButton";
import CCheckbox from "./common/CCheckbox";
import CInput from "./common/CInput";
import CSelect from "./common/CSelect";
import CLabel from "./common/CLabel";
import useDarkMode from "../hooks/useDarkMode";
import {useContext, useState} from "react";
import styled from "styled-components";
import CSwitcher from "./common/CSwitcher";
import {Filter, FilterList, Search, SearchOutlined, Subject} from "@material-ui/icons";
import CBox from "./common/CBox";
import {darkTheme, lightTheme} from "../theme";
import {useTranslation} from "react-i18next";
import DataTable from "./common/CTable";
import CTable from "./common/CTable";
import {LoadingContext} from "../provider/LoadingProvider";

const useStyles = makeStyles((theme)=>({
    root: {
        "& > *" : {
            marginBottom: theme.spacing(5)
        },
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


const columns = [
    {
        name: "name",
        label: "Name",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "company",
        label: "Company",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "city",
        label: "City",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "state",
        label: "State",
        options: {
            filter: true,
            sort: false,
        }
    },
];

const data = [
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
];


function FilterTool() {
    const classes = useStyles();
    const [theme, toggleTheme] = useDarkMode();
    const [filters, setFilters] = useState<boolean[]>([]);
    const [filterType, setFilterType] = useState<number>(0);
    const currentMode = theme === 'light' ? lightTheme : darkTheme;
    const {t} = useTranslation();
    const {turnOnLoading} = useContext(LoadingContext);

    const handleChange = async (index: number) => {
        await setFilters(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        })
    }
    return  <div className={classes.root}>
        <Grid container justify={"space-between"}>
               <CBox>
                   <Icon style={{color: currentMode.primary}}>
                       <Subject/>
                   </Icon>
                   <CHeading>{t('filters')}</CHeading>
               </CBox>
                <ButtonGroup>
                    <CButton active={filterType === 0} onClick={() => setFilterType(0)}>{t('exact')}</CButton>
                    <CButton active={filterType === 1} onClick={() =>  setFilterType(1)}>{t('include')}</CButton>
                </ButtonGroup>
        </Grid>
        <Grid container spacing={2}>
            <Grid container item xs={12} justify={"space-between"}>
                <Text>{t('productName')}</Text>
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
                <Text>{t('category')}</Text>
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
                <Text>{t('brand')}</Text>
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
                <Text>{t('supplier')}</Text>
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
                <Text>{t('tags')}</Text>
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
        <Grid container spacing={3}>
            <Grid container item xs={12} justify={"space-between"}>
                <Text>{t('price')}</Text>
                <CCheckbox checked={filters[5]} onChange={()=> handleChange(5)}></CCheckbox>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={filters[5]}>
                    <Grid container item xs={12}  alignItems={"center"} className={classes.price}>
                        <Grid item>
                            <CLabel>{t('from')}</CLabel>
                        </Grid>
                        <Grid item>
                            <CInput type={"number"}></CInput>
                        </Grid>
                        <Grid item>
                            <CLabel>{t('to')}</CLabel>
                        </Grid>
                        <Grid>
                            <CInput type={"number"}></CInput>
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </Grid>
        <Grid container spacing={3}>
            <Grid container item xs={12} justify={"space-between"}>
                <Text>{t('quantity')}</Text>
                <CCheckbox checked={filters[6]} onChange={()=> handleChange(6)}></CCheckbox>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={filters[6]}>
                    <Grid container item xs={12}  alignItems={"center"} className={classes.price}>
                        <Grid item>
                            <CLabel>{t('from')}</CLabel>
                        </Grid>
                        <Grid item>
                            <CInput type={"number"}></CInput>
                        </Grid>
                        <Grid item>
                            <CLabel>{t('to')}</CLabel>
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
                <Text>{t('discount')}</Text>
                <CCheckbox checked={filters[7]} onChange={()=> handleChange(7)}></CCheckbox>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={filters[7]}>
                    <Grid container item xs={12}  alignItems={"center"} className={classes.price}>
                        <Grid item>
                            <CLabel>{t('haveADiscount')}</CLabel>
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
                <Text>{t('image')}</Text>
                <CCheckbox checked={filters[8]} onChange={()=> handleChange(8)}></CCheckbox>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={filters[8]}>
                    <Grid container item xs={12}  alignItems={"center"} className={classes.price}>
                        <Grid item>
                            <CLabel>{t('haveAnImage')}</CLabel>
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
                <Text>{t("uploadDate")}</Text>
                <CCheckbox checked={filters[9]} onChange={()=> handleChange(9)}></CCheckbox>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={filters[9]}>
                    <Grid container item xs={12}  alignItems={"center"} className={classes.price}>
                        <Grid item>
                            <CLabel>{t('from')}</CLabel>
                        </Grid>
                        <Grid item>
                            <CInput type={"date"}></CInput>
                        </Grid>
                        <Grid item>
                            <CLabel>{t('to')}</CLabel>
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
                <Text>{t('options')}</Text>
                <CCheckbox checked={filters[10]} onChange={()=> handleChange(10)}></CCheckbox>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={filters[10]}>
                    <Grid container item xs={12}  spacing={5}>
                        <Grid item className={classes.checkbox}>
                            <CCheckbox></CCheckbox>
                            <CLabel>{t('red')}</CLabel>
                        </Grid>
                        <Grid item className={classes.checkbox}>
                            <CCheckbox></CCheckbox>
                            <CLabel>{t('blue')}</CLabel>
                        </Grid>
                        <Grid item className={classes.checkbox}>
                            <CCheckbox></CCheckbox>
                            <CLabel>{t('green')}</CLabel>
                        </Grid>
                        <Grid item className={classes.checkbox}>
                            <CCheckbox></CCheckbox>
                            <CLabel>{t('yellow')}</CLabel>
                        </Grid>
                        <Grid item className={classes.checkbox}>
                            <CCheckbox></CCheckbox>
                            <CLabel>{t('black')}</CLabel>
                        </Grid>
                        <Grid item className={classes.checkbox}>
                            <CCheckbox></CCheckbox>
                            <CLabel>{t('white')}</CLabel>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12}  spacing={5}>
                        <Grid item className={classes.checkbox}>
                            <CCheckbox></CCheckbox>
                            <CLabel>{t('cotton')}</CLabel>
                        </Grid>
                        <Grid item className={classes.checkbox}>
                            <CCheckbox></CCheckbox>
                            <CLabel>{t('jean')}</CLabel>
                        </Grid>
                        <Grid item className={classes.checkbox}>
                            <CCheckbox></CCheckbox>
                            <CLabel>{t('leather')}</CLabel>
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <CButton style={{marginRight: "1rem", padding: "1rem 3rem"}} onClick={()=> turnOnLoading(true)}>{t('applyFilters')}</CButton>
                <CButton style={{padding: "1rem 3rem"}}>{t('resetFilters')}</CButton>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <CTable columns={columns} data={data} title={"Result"}></CTable>
        </Grid>
    </div>
}

export default FilterTool;