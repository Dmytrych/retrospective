import React, { useContext } from 'react';

import CardColumn from './components/CardColumn';

import './index.css'

function SessionPage() {
    const cards = [
        {
            caption: "Caption1"
        },
        {
            caption: "Caption2"
        }
    ]

  return (
    <div className='whole-window display-flex flex-row'>
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