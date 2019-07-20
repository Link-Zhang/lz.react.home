import React from "react";
import PropTypes from 'prop-types';
import NumberCard from "../Numbercard";

class TotalHouse extends React.PureComponent {
    render() {
        return (
            <NumberCard icon={"home"} color={"#64EA91"} title={"房屋总数"}
                        number={this.props.number}/>
        );
    }
}

TotalHouse.propTypes = {
    number: PropTypes.number,
};

export default TotalHouse;
