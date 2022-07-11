import React, { useContext } from 'react';
import RetroCard from '../RetroCard/Index';
import './index.css'

function CardColumn({ cards }) {
  console.log(cards)
  return (
    <div className='retro-column'>
        { cards.map(card => {
          return <div key={card} className='retro-column-card'>
            <RetroCard description={card.caption}></RetroCard>
          </div>
        })}
    </div>
  );
}

export default CardColumn;