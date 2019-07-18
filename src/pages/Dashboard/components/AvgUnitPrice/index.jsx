import React from "react";
import NumberCard from "../Numbercard";

// todo: change the data from server
class AvgUnitPrice extends React.PureComponent {
    render() {
        return (
            <NumberCard icon={"transaction"} color={"#EE82EE"} title={"平均单价（元/平）"}
                        number={43974}/>
        );
    }
}

export default AvgUnitPrice;
