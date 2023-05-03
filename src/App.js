
import './App.css';
import Header from './components/Header'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from 'react';

import RemoveIcon from '@mui/icons-material/Remove';
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data,setData]=useState([]);
  const addData=()=>{
      //for storing data we use spread
     
        setData([...data, {name,email}])
         setName("");
         setEmail("");
    
   }
   const removeItem=(index)=>{
    let arr=data;
    arr.splice(index,1);
    setData([...arr]);
   }


  return (
    // form segment
    <div className="App">
       <Header />
      <div className="form">
        <Stack spacing={2} direction="row">
        <TextField  value={name} onChange={(event)=> setName(event.target.value)} id="filled-basic" label="name" variant="filled" />
          <TextField value={email} onChange={(event)=> setEmail(event.target.value)} id="filled-basic" label="email" variant="filled"/>
          <Button onClick={addData}variant="contained">
            <AddCircleIcon />
          </Button>
        </Stack>
      </div>
      {/* Data*/}
      <div className="data"> 
       <div className="data_val">
        <h4>Name</h4>
        <h4>Email</h4>
        <h4>Remove</h4>
       </div>
       {
        data.map((element,index)=>{
          return(
            <div key={index} className="data_val">
            <h4>{element.name}</h4>
            <h4>{element.email}</h4>
            <Stack>
            <Button onClick={()=> removeItem(index)} variant="contained" color="error">
                <RemoveIcon/>
            </Button>
            </Stack>
           </div>
          );
        })
       }
    </div>
    </div>
    
  );
}

export default App;
