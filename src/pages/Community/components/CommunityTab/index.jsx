import React from 'react';
import {Tabs} from 'antd';
import {connect} from "react-redux";
import _ from "lodash";
import communityDistrictMenu from './district';
import ajax from "../../../../utils/ajax";

class CommunityTab extends React.PureComponent {
    async community(district) {
        try {
            return await ajax.community(district);
        } catch (e) {
            console.log(e);
        }
    }

    handleTabClick = key => {
        this.community(key).then(
            res => {
                console.log("123");
                console.log(res);
                // let data = _.get(res, "houseVOList");
                // this.props.handleDataDone(data);
            }
        );
    };

    constructor() {
        super();
        this.tabMenu = communityDistrictMenu.map(
            (item) => {
                return (
                    <Tabs.TabPane
                        tab={item}
                        key={item}
                    />
                );
            }
        );
        // 初始化时获取第一个tab的数据
        this.handleTabClick(communityDistrictMenu[0]);
    }

    render() {
        return (
            <Tabs onChange={this.handleTabClick} defaultActiveKey={communityDistrictMenu[0]}>
                {this.tabMenu}
            </Tabs>
        );
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         handleDataDone: bindActionCreators(houseDataDoneActionCreator, dispatch),
//     };
// };

export default connect(null, null)(CommunityTab);
