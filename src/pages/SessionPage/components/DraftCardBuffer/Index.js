import React, { useContext, useState } from 'react';
import RetroCard from '../RetroCard/Index'
import './index.css'

function DraftCardBuffer({ cards }) {

  return (
    <div className='display-flex flex-row'>
      { cards.map(card => {
          return <div key={card} className='draft-card'>
            <RetroCard description={card.caption} style='draft'></RetroCard>
          </div>
        })}
    </div>
  );
}

export default DraftCardBuffer;