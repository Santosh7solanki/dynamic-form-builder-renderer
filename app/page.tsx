"use client"
import FormBuilder from "@/components/FormBuilder";
import FormRenderer from "@/components/FormRenderer";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react";
export default function Home() {
  const [activeTab, setActiveTab] = useState('builder');
  console.log(activeTab);
  return (
  <main className="max-w-7xl mx-auto py-10">
  <h1 className="text-5xl font-bold">Dynamic Form Builder</h1>
  <p className="text-muted-foreground mt-2" > Design a form, then switch to renderer to fill it.</p>
  <div className="flex gap-2 mt-4">
    <Tabs defaultValue="builder" onValueChange={(value) => setActiveTab(value)}>
      <TabsList variant="line">
        <TabsTrigger value="builder">Form Builder</TabsTrigger>
        <TabsTrigger value="Renderer">Form Renderer</TabsTrigger>
      </TabsList>
    </Tabs>
    </div>
    { activeTab === 'builder' ?  <FormBuilder /> : <FormRenderer /> }
    </main>
  );
}
