import React, { useContext, useState } from 'react';

import DraftCardBuffer from '../../components/DraftCardBuffer';
import CardColumn from '../../components/CardColumn';

import './index.css'

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
            <DraftCardBuffer cards={cards}/>
        </div>
    </div>
  );
}

export default SessionPage;