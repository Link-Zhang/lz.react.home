import React from "react";
import PropTypes from 'prop-types';
import NumberCard from "../Numbercard";

class AvgUnitPrice extends React.PureComponent {
    render() {
        return (
            <NumberCard icon={"transaction"} color={"#EE82EE"} title={"平均单价(元/平)"}
                        number={this.props.number}/>
        );
    }
}

AvgUnitPrice.propTypes = {
    number: PropTypes.number,
};

export default AvgUnitPrice;
