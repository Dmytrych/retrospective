import React, { useContext, useState } from 'react';
import EditableField from '../EditableField';
import Card from '../Card';
import './index.css'

function RetroCard({ description, style = 'default' }) {
  const [usedDescription, setDescription] = useState(description)

  return (
    <Card style={style}>
      <EditableField value={usedDescription} setValue={setDescription}/>
    </Card>
  );
}

export default RetroCard;