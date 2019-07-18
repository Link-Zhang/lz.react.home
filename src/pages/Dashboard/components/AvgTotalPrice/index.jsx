import React from "react";
import NumberCard from "../Numbercard";

// todo: change the data from server
class AvgTotalPrice extends React.PureComponent {
    render() {
        return (
            <NumberCard icon={"dollar"} color={"#FFD700"} title={"平均总价(万元)"}
                        number={263.29}/>
        );
    }
}

export default AvgTotalPrice;
