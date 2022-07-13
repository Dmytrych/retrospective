import React, { useContext, useState, useEffect } from 'react';

import DraftCardBuffer from '../../components/DraftCardBuffer';
import CardColumn from '../../components/CardColumn';

import './index.css'
import useWindowSize from '../../hooks/useWindowSize';

function SessionPage() {
    const [cards, setCards] = useState([
        {
            caption: "Caption1"
        },
        {
            caption: "Caption2"
        },
        {
            caption: "Caption1"
        },
        {
            caption: "Caption2"
        },
        {
            caption: "Caption1"
        },
        {
            caption: "Caption2"
        }
    ])
    const windowSize = useWindowSize()

    useEffect(() => {

        console.log(windowSize)
      }, [windowSize]);

    return (
        <div className='whole-window'>
            <div className='display-flex flex-row space-around'>
                <div className='session-column'>
                    <CardColumn cards={cards}/>
                </div>
                <div className='session-column'>
                    <CardColumn cards={cards}/>
                </div>
                <div className='session-column'>
                    <CardColumn cards={cards}/>
                </div>
            </div>
            <div className='position-fixed position-center-bottom'>
                <DraftCardBuffer cards={cards} cardsDisplayLimit={5}/>
            </div>
        </div>
    );
}

export default SessionPage;