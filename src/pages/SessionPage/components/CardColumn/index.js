import React, { useContext } from 'react';
import RetroCard from '../RetroCard/Index';
import './index.css'

function CardColumn({ cards }) {
  return (
    <div className='retro-column'>
        <RetroCard description={cards[0].caption}></RetroCard>
    </div>
  );
}

export default CardColumn;