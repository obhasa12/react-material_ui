import './App.css';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import RatingDemo from './RatingDemo';
import FormDemo from './FormDemo';
import Navbar from './Navbar';

function App() {
  
  return (
    <div>
      {/* <Button variant="text" color="success">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button 
        size="large" 
        variant="contained" 
        color="error"
        onClick={() => alert("hi")}
      >
        Contained
      </Button>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton> */}
      {/* <RatingDemo /> */}
      <Navbar />
      <FormDemo />
    </div>
  )
}

export default App
