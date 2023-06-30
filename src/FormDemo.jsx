import { TextField, Slider, Box } from "@mui/material";
import { useState } from "react";

function FormDemo() {
    const [name, setName] = useState("")
    const [volume, setVolume] = useState(0)

    const changeVolume = (e, newVal) => {
        setVolume(vlm => newVal)
    }
    return ( 
        <Box sx={{border: "1px solid red", p: 6, width: 300, height: 300, margin: " 0 auto"}}>
            <h1>Name is {name}</h1>
            <TextField 
                id="outlined-basic" 
                label="Puppy name" 
                variant="outlined" 
                placeholder="puppy name"
                value={name}
                onChange={(e) => setName(name => e.target.value)}
            />
            <h2>volume: {volume}</h2>
            <Slider 
                defaultValue={volume} 
                aria-label="Default" 
                valueLabelDisplay="auto"
                onChange={changeVolume} 
            />
        </Box>
     );
}

export default FormDemo;