import React, {ReactElement, useContext} from "react"
import Header from "./Header";
import {ThemeType} from "../../types/ThemeModel";

function Layout(props: {children: ReactElement, theme: ThemeType, toggleTheme: ()=> void}) {

    return <div>
        <Header theme={props.theme} toggleTheme={props.toggleTheme}></Header>
        {props.children}
    </div>
}

export default Layout;