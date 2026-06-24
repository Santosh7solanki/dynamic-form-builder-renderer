"use client"
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
const FormRenderer = () => {
    const [schema, setSchema] = useState([]);

const [formData, setFormData] = useState({});

const [errors, setErrors] = useState({});

const [submittedData, setSubmittedData] = useState(null);


console.log("Form Data:", formData); // Log the current state of formData
console.log("Schema:", schema); // Log the current state of schema

    useEffect(() => {
        const saved = localStorage.getItem("form-schema");
        if (saved) {
            setSchema(JSON.parse(saved));
        }
    }, []);

const handleSubmit  = (e) => {
   
e.preventDefault();

const newErrors = {};

schema.forEach((field) => {
    if (field.required && !formData[field.label]) {
        newErrors[field.label] = `${field.label} is required`;
    }
});

setErrors(newErrors);

if (Object.keys(newErrors).length === 0) {
    setSubmittedData(formData); 
}
}   

  return (
    <form
    onSubmit={handleSubmit }
    className="space-y-4 mt-8"
    >
        { schema.map((field)=>(

             <div
             key={field.id}
             >
<label>{field?.label}
{field?.required && <span className="text-red-500">*</span>}
</label>

{ field.type === "text" && (
    <Input
value={formData[field.label] || ""}
onChange={(e) => setFormData({ ...formData, [field.label]: e.target.value })}
></Input>

)}


{ field.type === "number" && (

<Input
type="number"
value={formData[field.label] || ""}
onChange={(e) => setFormData({ ...formData, [field.label]: e.target.value })}
></Input>
)

}



{ field.type === "dropdown" && (

<select 
  className="W-full border rounded-md px-3 h-10"
  value={field.type}
    onChange={(e) => setFormData({ ...formData, [field.label]: e.target.value })}
    >
<option >Select</option>
{ field?.Options?.map((option, i) => (
<option key={i} value={option}>{option}</option>
))} 
 </select>

)

}

{ errors[field.label] && ( 

<p className="text-red-500 text-sm" >{errors[field.label]}</p>
 )
}
      </div>
        ))}
 

<Button type="submit" > Submit </Button>

{
    submittedData && (

<Card>

    <h3>Submitted Data</h3>
    <pre>
{

JSON.stringify(submittedData, null, 2)
}
    </pre>
</Card>
    )
}

    
    </form>
  )
}

export default FormRenderer
