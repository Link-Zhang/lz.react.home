import React from "react";
import PropTypes from 'prop-types';
import NumberCard from "../Numbercard";

class AvgTotalPrice extends React.PureComponent {
    render() {
        return (
            <NumberCard icon={"dollar"} color={"#f69899"} title={"平均总价(万元/间)"}
                        number={this.props.number}/>
        );
    }
}

AvgTotalPrice.propTypes = {
    number: PropTypes.number,
};

export default AvgTotalPrice;
