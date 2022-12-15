const hour = document.getElementById('clock-hour'),
    minute = document.getElementById('clock-minute'),
    second = document.getElementById('clock-second')

const clock = () =>{
    let date = new Date()

    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6

        //Rotation
        hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
        minute.style.transform = `rotateZ(${mm}deg)`
        second.style.transform = `rotateZ(${ss}deg)`
}
setInterval(clock,1000)

//Clock - date text

const textHour = document.getElementById('text-hour'),
textMinute = document.getElementById('text-minute'),
textAmpm = document.getElementById('text-ampm'),
dateDay = document.getElementById('date-day'),
dateMonth = document.getElementById('date-month'),
dateYear = document.getElementById('date-year')

const clockText = () => {
    let date = new Date()

    let hh = date.getHours(),
        ampm,
        mm = date.getMinutes(),
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear()
        // 24 hours to 12 hours
        if(hh >= 12){
            hh = hh - 12
            ampm = 'PM'
        }
        else{
            ampm = 'AM'
        }
        //0 AM to 12 AM
        if(hh == 0){ hh = 12}
        //add zero before hour
        if(hh<10){hh = `0${hh}`}
        
        //add zero before minute
        if(mm<10){mm = `0${mm}`}

        textHour.innerHTML = `${hh}:`
        textMinute.innerHTML = `${mm}`
        textAmpm.innerHTML = `${ampm}`

        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

        dateDay.innerHTML = day
        dateMonth.innerHTML = `${months[month]}`
        dateYear.innerHTML = year
    }
setInterval(clockText,1000)

//Show time
