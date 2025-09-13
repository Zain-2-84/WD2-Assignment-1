import { useState } from "react";
import Input from "./Input";

export default function ValidatedForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name", name)
    console.log("email", email)
    setName("")
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={name}>
        Name:
      </label>  
        <Input id="name" type="text" onChange={(e) => setName(e.target.value)} value={name} />
      
      <br/>

      <label htmlFor={email}>
        Email:
        <Input id="email" type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
      </label>  <br/>

      <button type="submit">Submit</button>
    </form>
  );
}