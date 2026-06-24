import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "./ui/checkbox"
import { Button } from "./ui/button"
const FieldCard = ({ field, index, updateField, deleteField, moveUp, moveDown, total }) => {
  return (
    <Card className="p-4">

<div className="flex justify-between">
    <h3 className="font-bold">Field {index + 1}</h3>
  <div className="flex gap-2">
    <button
    variant="outline"
    onClick={() => moveUp(index)}
    >up</button>
    <button 
    variant="outline"
    onClick={() => moveDown(index)}
    >Down</button>

  <button 
    variant="destructive"
    onClick={() => deleteField(field?.id)}
    >Delete</button>
    
  </div>
</div>

<div className="grid md:grid-cols-2 gap-4 mt-4">
    <div>
  <label>Label</label>
  <Input 
  value={field.label ?? ""} 
  onChange={(e) => updateField(field.id, { label: e.target.value })} 
  />
  </div>

<div>   

<label>Type</label>
  <select 
  className="w-full border rounded-md px-3 h-10"
  value={field.type ?? "text"}
    onChange={(e) => updateField(field.id, { type: e.target.value, Options: [] })}
    >
<option value="text">Text</option>
<option value="number">Number</option>
<option value="dropdown">Dropdown</option>
<option value="checkbox">Checkbox</option>

 </select>
</div>

</div>

<div className="flex gap-2 mt-4">
    <Checkbox
    checked={!!field.required}
    onCheckedChange={(val) => updateField(field.id, { required: val })}
    />
  <span>Required</span>
</div>

{ field.type === "dropdown" && (

<div className="mt-5">
  <label>Options</label>
{(field?.Options ?? []).map((option, i) => (
<div
key={i}
    className="flex gap-2 mt-2"
    >
<Input
value={option ?? ""}
onChange={(e) => {
const copy = [...(field.Options ?? [])];
copy[i] = e.target.value;
updateField(field.id, { Options: copy });
}      
}
/>

<Button
  variant="outline"
  onClick={() => {
    const copy = (field.Options ?? []).filter((_, index) => index !== i);
    updateField(field.id, { Options: copy });
    }}
>
  X
</Button>

</div>

))} 

<Button
variant="outline"
className="mt-3"
onClick={() => {
  updateField(field.id, { Options: [...(field.Options ?? []), ""] });
}}
>
Add Option
 </Button>
</div>
)}


    </Card>
  )
}

export default FieldCard
