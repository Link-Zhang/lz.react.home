import React from 'react';
import {connect} from "react-redux";
import {Breadcrumb, Icon} from 'antd';
import sidebarMenu from '../../menu';

class Bread extends React.PureComponent {
    constructor() {
        super();
        const iconMap = new Map();
        const nameMap = new Map();

        const browseMenu = (item) => {
            nameMap.set(item.key, item.name);
            iconMap.set(item.key, item.icon);
            if (item.child) {
                item.child.forEach(browseMenu);
            }
        };
        sidebarMenu.forEach(browseMenu);
        this.iconMap = iconMap;
        this.nameMap = nameMap;
    }

    render() {
        const breadItemArray = [];

        breadItemArray.push(
            <Breadcrumb.Item key="systemHome" href="/#"><Icon type="home"/>首页</Breadcrumb.Item>
        );

        for (const path of this.props.pathname.split("/")) {
            const name = this.nameMap.get(path);
            if (name) {
                console.log(name);
                const icon = this.iconMap.get(path);
                if (icon) {
                    breadItemArray.push(
                        <Breadcrumb.Item key={name} href={this.props.pathname}><Icon type={icon}/> {name}
                        </Breadcrumb.Item>
                    );
                } else {
                    breadItemArray.push(
                        <Breadcrumb.Item key={name} href={this.props.pathname}>{name}</Breadcrumb.Item>
                    );
                }
            }
        }

        return (
            <Breadcrumb style={{margin: '16px 0'}}>{breadItemArray}</Breadcrumb>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pathname: state.router.location.pathname,
    }
};

export default connect(mapStateToProps, null)(Bread);
