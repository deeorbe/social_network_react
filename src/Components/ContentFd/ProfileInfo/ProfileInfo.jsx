import React from 'react';
import pi from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://www.wpclipart.com/recreation/beach_pool/beach_2/beach_header.png" />
            </div>
            <div className = {pi.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;