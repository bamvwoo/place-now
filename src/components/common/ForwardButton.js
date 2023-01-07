import React, {useState} from 'react';
import { createUniqueId } from '../../assets/common';

function ForwardButton(prop) {
    const moveTo = (url) => {
        const waveId = prop.waveId;
        const waveDiv = document.getElementById(waveId);

        waveDiv.style.top = '-200px';
        setTimeout(() => {
            waveDiv.style.display = 'none';
        }, 2000);
    };

    return (
        <div className='ctn-btn-fwd'>
            <button id={ createUniqueId() } className='btn-prm-m' onClick={() => { moveTo('/') }}>시작하기</button>
        </div>
    );
}

export default ForwardButton;