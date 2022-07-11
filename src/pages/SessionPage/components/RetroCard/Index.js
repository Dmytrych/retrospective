import React, { useContext, useState } from 'react';
import EditableField from '../../../../components/EditableField';
import './index.css'

function RetroCard({ description, style = 'default' }) {
  const [usedDescription, setDescription] = useState(description)
  let usedStyle = style === 'draft' ? 'style-draft' : 'style-default'

  return (
    <div className={`card + ${usedStyle}`}>
        <EditableField value={usedDescription} setValue={setDescription}/>
    </div>
  );
}

export default RetroCard;