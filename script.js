const updateDay = () => {
     const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     const date = new Date();
     let day = date.getDay()
     console.log(daysOfWeek[day])
     console.log(date.getTime())
     document.querySelector('.day').innerHTML = daysOfWeek[day];
     document.querySelector('.time').innerHTML = date.getTime();
     //console.log(dayElement);
}

updateDay();