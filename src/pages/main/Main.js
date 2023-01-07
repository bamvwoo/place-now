import React from 'react';
import Header from 'components/main/Header';
import Content from 'components/main/Content';
import GlobeBackground from 'components/main/GlobeBackground';
import * as COMMON from 'assets/common';
import './Main.scss';

function Main() {
    const id = COMMON.createUniqueId();
    const globeId = COMMON.createUniqueId();

    return (
        <div id={ id } className='ctn-main'>
            <Header />
            <Content />
            <GlobeBackground id={ globeId } pageId={ id }/>
        </div>
    );
}

export default Main;