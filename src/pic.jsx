import React, {useEffect, useState} from 'react'
import axios from 'axios';

const picOfTheDay = () => {
    const [photo,setPhoto] = useState([]);

    
    const picture = () => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DkWNGZPvXKe4c374vReR3d5IgNzWnxgTJkBIYimJ')
            .then(response => {
            console.log(response);
            //5. update our friends slice of state
            setPhoto(response.data.title)
            })
        .catch(err =>  console.log(err))
    
    }
    useEffect(picture, []) 
    
    
    return (
    <div className= "nasa">
        <h1>Nasa Photo of the day!</h1>
    </div>
    )
    
}

export default picOfTheDay;






