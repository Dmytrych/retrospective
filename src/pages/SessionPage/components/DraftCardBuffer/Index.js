import { AiOutlinePlusCircle } from "react-icons/ai" 
import React, { useContext, useState } from 'react';
import RetroCard from '../RetroCard/Index'
import Card from '../Card/Index'
import './index.css'

function DraftCardBuffer({ cards }) {

  return (
    <div className='display-flex flex-row'>
      <div className='draft-card'>
        <Card style='draft'>
          <div className="display-flex max-height align-center">
            <AiOutlinePlusCircle className="card-inner-icon"/>
          </div>
        </Card>
      </div>
      { cards.map(card => {
          return <div key={card} className='draft-card'>
            <RetroCard description={card.caption} style='draft'></RetroCard>
          </div>
        })}
    </div>
  );
}

export default DraftCardBuffer;