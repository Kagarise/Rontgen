import React from "react";

import Options from './Options'
import Edit from "./Edit";
import Save from "./Save";

class IndexContent extends React.Component {
    render() {
        return (
            <>
                <Options/>
                <Edit/>
                <Save/>
            </>
        )
    }
}

export default IndexContent;