import MUIDataTable, {MUIDataTableColumnDef, MUIDataTableOptions} from "mui-datatables";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import ThemeModel from "../../types/ThemeModel";
import {useContext} from "react";
import {ThemeContext} from "styled-components";
import ProductModel from "../../types/ProductModel";
import CCustomToolbarSelect from "./CCustomToolbarSelect";
import {useTranslation} from "react-i18next";

const getMuiTheme = (theme : ThemeModel) =>
    createMuiTheme({
        overrides: {
            MuiIconButton: {
                root: {
                    color: `${theme.text} !important`
                }
            },
            MuiSelect: {
                icon: {
                    color: theme.text
                }
            },
            MuiPaper: {
                root: {
                    backgroundColor: theme.table,
                    color: theme.text
                },
            },
            MUIDataTableSearch: {
              searchIcon: {
                  color: theme.text
              },
                searchText:{
                  color: theme.text
                }
            },
            MUIDataTable: {
                root: {
                    backgroundColor: theme.table,
                    color: theme.text
                }
            },
            MUIDataTableBodyCell: {
                root: {
                    backgroundColor: theme.table,
                    color: theme.text,
                    border: "none",
                },
            },
            MUIDataTableHeadCell: {
                root: {
                    color: `${theme.text} !important`
                },
              fixedHeader: {
                  backgroundColor: theme.table,
                  color: `${theme.text} !important`
              },
                sortActive: {
                    color:  theme.text
                },
            },
            MuiButton: {
              root: {
                  color: theme.text
              },
              textPrimary: {
                  color: theme.primary,
                  fontWeight: 700
              }
            },
           MUIDataTableSelectCell: {
             headerCell: {
                 backgroundColor: theme.table,
             }
           },
            MUIDataTableToolbarSelect: {
                root: {
                    backgroundColor: theme.button,
                    color: theme.buttonText
                },
                iconButton: {
                    color: theme.buttonText
                }
            },
            MuiTableSortLabel: {
                icon: {
                    color: `${theme.text} !important`

                },
            },
            MUIDataTableHeadRow: {
                root: {
                    color: theme.text
                }
            },
            MuiTableCell: {
              root: {
                  borderBottom: "none",
                  color: theme.text
              },
                head: {
                    borderBottom: "none",
                    color: theme.text
                },
            },
            MuiTableRow: {
                root: {
                    color: theme.text
                }
            },
            MuiTablePagination: {
                toolbar: {
                    color: theme.text
                }
            },
            MUIDataTableViewCol: {
                label: {
                    color: theme.text
                },
                title: {
                    color: theme.text
                }
            },
            MUIDataTableFilter: {
                title: {
                    color: theme.text
                },
                root: {
                    backgroundColor: theme.body
                },
                checkboxFormControlLabel: {
                    color: theme.text
                },
                checkboxListTitle: {
                    color: theme.text
                }
            },
            MuiInputBase: {
                root: {
                    color: theme.text
                }
            }
        }
    });

export default function CTable({columns, data, title, selectable} : {selectable?: boolean, title: string, columns: MUIDataTableColumnDef[], data:  ProductModel[]}) {
    const theme = useContext((ThemeContext));
    const {t} = useTranslation();

    const options: MUIDataTableOptions = {
        filterType:  'checkbox',
        selectableRows: selectable ? 'multiple' : 'none',
        elevation: 2,
        customToolbarSelect: (selectedRows) => <CCustomToolbarSelect selectedRows={selectedRows} data={data}/>,
        textLabels: {
            body: {
                noMatch: t('noMatch'),
                toolTip: t('toolTip'),
            },
            pagination: {
                rowsPerPage: t('rowsPerPage'),
                displayRows: t('displayRows'),
            },
            toolbar: {
                search: t('search'),
                downloadCsv: t('downloadCsv'),
                print: t('print'),
                viewColumns: t('viewColumns'),
                filterTable: t('filterTable'),
            },
            filter: {
                all: t('all'),
                title: t('title'),
                reset: t('reset'),
            },
            viewColumns: {
                title:  t('titleColumns'),
                titleAria: t('titleAria'),
            },
            selectedRows: {
                text: t('text'),
            },
        }
    };
    return <MuiThemeProvider theme={getMuiTheme(theme)}>
        <MUIDataTable
            title={title ? title : ""}
            data={data}
            columns={columns}
            options={options}
        />
    </MuiThemeProvider>
}
