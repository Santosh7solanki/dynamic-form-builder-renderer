import FieldCard from "./FieldCard";
import { Button } from "./ui/button"
import { useEffect, useState } from "react";

const FormBuilder = () => {
const [fields, setFields] = useState([]);

console.log("Fields:", fields); // Log the current state of fields


useEffect(() => {
  const saved = localStorage.getItem("form-schema");
  if (saved) {
    setFields(JSON.parse(saved));
  } 
}, []);

useEffect(() => {
 localStorage.setItem("form-schema", JSON.stringify(fields));
}, [fields]);



/**
 * This function is for add fild button click event. 
 */
    const addField = () => {
    
    console.log("Add Field button clicked");
setFields([...fields, {
     id: Date.now(), 
    lable: "Untitled",
type: "text",
required: false,
Options: []
 }]);

    }


const updateField = (id, updated) => {
  setFields(fields?.map((field) => field.id === id ? { ...field, ...updated } : field));
}


const deleteField = (id) => {
  setFields(fields?.filter((field) => field.id !== id));
}


const moveUp = (index) => {
  if (index === 0) return;
    const copy = [...fields];
    [copy[index], copy[index-1]] = [copy[index - 1], copy[index]];
    setFields(copy);
  };


const moveDown = (index) => {
  if (index === fields.length - 1) return;
    const copy = [...fields];
    [copy[index], copy[index + 1]] = [copy[index + 1], copy[index]];
    setFields(copy);
  } 



  return (
    <div className="mt-8">
      <Button onClick={addField} > + Add Field</Button>
      <div className=" space-y-4 mt-4">
       {fields?.map((field, index) => (
            <FieldCard key={field.id}
            field={field}
            index={index}
            updateField={updateField}
            deleteField={deleteField}
            moveUp={moveUp}
            moveDown={moveDown}
            total={fields.length}
            />
        ))}
      </div>
    </div>
  )
}

export default FormBuilder
