import { useState } from "react"

export default function EditableField({value, setValue, placeholder = ""}) {
    const [editedValue, setEditedValue] = useState(value)
    const [underEdit, setUnderEdit] = useState(false)
    const onDoubleClick = () => {
        setUnderEdit(true)
    }

    const onBlur = () => {
        if(editedValue !== value){
            setValue(editedValue)
        }
        setUnderEdit(false)
    }

    const onChange = (event) => {
        setEditedValue(event.target.value)
    }

    return <div onDoubleClick={onDoubleClick} onBlur={onBlur}>
        {underEdit 
        ? <input type="text" value={editedValue} onChange={onChange}/>
        : value || placeholder}
    </div>
}