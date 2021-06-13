import Layout from "../components/common/Layout";
import {useContext} from "react";
import {AppContext, AppContextModel} from "../providers/AppProvider";

function SelectMode() {
    const {theme} = useContext<AppContextModel>(AppContext)

    return <div>
    </div>
}

export default SelectMode