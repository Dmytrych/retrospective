import React, { useContext, useState } from 'react';
import EditableField from '../../../../components/EditableField';
import Card from '../Card/Index';
import './index.css'

function RetroCard({ description, style = 'default' }) {
  const [usedDescription, setDescription] = useState(description)
  let usedStyle = style === 'draft' ? 'style-draft' : 'style-default'

  return (
    <Card style={style}>
      <EditableField value={usedDescription} setValue={setDescription}/>
    </Card>
  );
}

export default RetroCard;