import React from 'react';
import './index.css';
import Loader from '../Loader';

/**
 * 测试用
 */
class Hello extends React.PureComponent {

    render() {
        return <div>
            <h1 className="testStyle">Hello, React!</h1>
            <Loader/>
        </div>;
    }

}

export default Hello;
