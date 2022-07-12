import React, { useContext, useState } from 'react';
import './index.css'

function Card({ style = 'default', children }) {
  let usedStyle = style === 'draft' ? 'style-draft' : 'style-default'

  return (
    <div className={`card + ${usedStyle}`}>
        {children}
    </div>
  );
}

export default Card;