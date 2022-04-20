import React, { useContext } from 'react';
import RetroCard from '../RetroCard/Index';
import './index.css'

function CardColumn({ cards }) {
  return (
    <div className='retro-column'>
        <div className='retro-column-card'>
          <RetroCard description={cards[0].caption}></RetroCard>
        </div>
        <div className='retro-column-card'>
          <RetroCard description={cards[0].caption}></RetroCard>
        </div>
        <div className='retro-column-card'>
          <RetroCard description={cards[0].caption}></RetroCard>
        </div>
    </div>
  );
}

export default CardColumn;