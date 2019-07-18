import React from "react";
import NumberCard from "../Numbercard";

// todo: change the data from server
class TotalHouse extends React.PureComponent {
    render() {
        return (
            <NumberCard icon={"home"} color={"#64EA91"} title={"房屋总数"}
                        number={37743}/>
        );
    }
}

export default TotalHouse;
