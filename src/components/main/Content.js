import React, {useState} from 'react';
import ForwardButton from '../../components/common/ForwardButton.js';

function MainContent(prop) {
    let [login, setLogin] = useState(false);

    return (
        <div className='ctn-ctt'>
            <div className='ctt-mid'>
                <div className='lg-main'></div>
                <div className='ctn-lgn'>
                    {
                        login
                        ? null
                        : <ForwardButton waveId={ prop.waveId } moveTo={ '/login' }/>
                    }
                </div>
            </div>
        </div>
    );
}

export default MainContent;