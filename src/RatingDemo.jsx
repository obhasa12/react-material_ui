import Rating from '@mui/material/Rating';
import { useState } from 'react';

const RatingDemo = () => {
    const [score, setScore] = useState(3)
    return ( 
        <div>
            <h1>Rating Demo, Current Rating: {score}</h1>
            <Rating
                name="simple-controlled"
                value={score}
                size='large'
                onChange={(event, newValue) => {
                    setScore(newValue);
                }}
            />
        </div>
     );
}
 
export default RatingDemo;