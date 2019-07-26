import React from 'react';
import CommunityTab from './components/CommunityTab'

// import HouseList from "./components/HouseList";

class Community extends React.PureComponent {

    render() {
        return (
            <div>
                <CommunityTab/>
                {/*<HouseList/>*/}
            </div>
        );
    }
}

export default Community;
