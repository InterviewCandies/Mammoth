import React from "react"
import {List, ListItem} from "@material-ui/core";
import EDIT_TYPES from "../../constants/editTypes";

function EditMenu() {
    const items = Object.values(EDIT_TYPES);

    return<List component={"nav"}>
        {items.map((item : string) => <ListItem button key={item}>{item}</ListItem>)}
    </List>
}

export default EditMenu;