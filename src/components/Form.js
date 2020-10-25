import React from 'react'

const Form = () => {
    const handleSubmitWeather = (event)=>{
        event.preventDefault();
        const baseLink = 'http://api.openweathermap.org/data';
        const city = event.currentTarget.city.value.trim();
        const apiKey = 'fcb01a98ab35b2eec6d62d58773363b1';
        fetch(`${baseLink}/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(res => {console.log(res.main);});
    }

    return (
        
        <form onSubmit={handleSubmitWeather}>
            <input type='text' name='city' placeholder='City'></input>
            <button type='submit'>Get weather</button>
        </form>
    )
}

export default Form
