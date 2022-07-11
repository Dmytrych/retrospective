import React, { useContext, useState } from 'react';

import CardColumn from './components/CardColumn';
import DraftCardBuffer from './components/DraftCardBuffer/Index';

import './index.css'

function SessionPage() {
    const [cards, setCards] = useState([
        {
            caption: "Caption1"
        },
        {
            caption: "Caption2"
        }
    ])

  return (
    <div className='whole-window display-flex flex-row'>
        <div className='position-fixed position-center-bottom'>
            <DraftCardBuffer cards={cards}/>
        </div>
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
  );
}

export default SessionPage;