import MUIDataTable, {MUIDataTableColumnDef} from "mui-datatables";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import ThemeModel from "../../types/ThemeModel";
import {useContext} from "react";
import {ThemeContext} from "styled-components";
import ProductModel from "../../types/ProductModel";

const options: any = {
    filterType: 'checkbox',
};

const getMuiTheme = (theme : ThemeModel) =>
    createMuiTheme({
        overrides: {
            MuiSvgIcon: {
                root: {
                    color: theme.text
                }
            },
            MuiPaper: {
                root: {
                    backgroundColor: theme.table,
                    color: theme.text
                },
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
                }
            },
            MUIDataTableHeadCell: {
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
                    color: theme.text
                },
            },
            MuiTableSortLabel: {
                icon: {
                    color: `${theme.text} !important`

                },
            },
            MuiTableCell: {
              root: {
                  borderBottom: "none"
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

export default function CTable({columns, data, title} : {title: string, columns: MUIDataTableColumnDef[], data:  ProductModel[]}) {
    const theme = useContext((ThemeContext));

    return <MuiThemeProvider theme={getMuiTheme(theme)}>
        <MUIDataTable
            title={title ? title : ""}
            data={data}
            columns={columns}
            options={options}
        />
    </MuiThemeProvider>
}
