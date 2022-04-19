import React, { useContext, useState } from 'react';
import EditableField from '../../../../components/EditableField';
import './index.css'

function RetroCard({ description }) {
  const [usedDescription, setDescription] = useState(description)

  return (
    <div className='card'>
        Description: <EditableField value={usedDescription} setValue={setDescription}/>
    </div>
  );
}

export default RetroCard;