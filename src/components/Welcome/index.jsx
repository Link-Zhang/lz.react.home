import React from 'react';
import globalConfig from '../../config';
import './index.css';

const Welcome = () =>
    <div>
        <h1 className="welcome-text">
            Welcome, 欢迎使用<a target="_blank"
                            href={globalConfig.github}
                            rel="nofollow me noopener noreferrer">LZ.React.Home</a>！
        </h1>
    </div>
;

export default Welcome;
