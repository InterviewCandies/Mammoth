import React, {ReactElement, useContext} from "react"
import Header from "./Header";

function Layout(props: {children: ReactElement}) {

    return <div>
        <Header></Header>
        {props.children}
    </div>
}

export default Layout;