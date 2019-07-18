import React from "react";
import NumberCard from "../Numbercard";

// todo: change the data from server
class TotalCommunity extends React.PureComponent {
    render() {
        return (
            <NumberCard icon={"deployment-unit"} color={"#C71585"} title={"社区总数"}
                        number={5674}/>
        );
    }
}

export default TotalCommunity;
