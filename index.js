let now = new Date()
console.log(now)

//________________EXERCICE 1

//Anchorage USA : UTC−8
//Reykjavik Iceland: UTC
//Saint-Petersburg: UTC+3

anchoUtcOffeset = -8 * 60
reyUtcOffeset = 0
stPetUtcOffeset = 3*60

let nowBru = new Date()
let bruOptions = { timeZone: 'Europe/Brussels' };
let bruFormatted = nowBru.toLocaleString("fr-BE", bruOptions)

let anchoDate = new Date(nowBru.getTime() + anchoUtcOffeset * 60 * 1000)
let anchoOptions = { timeZone: 'America/Anchorage' };
let anchoFormatted = anchoDate.toLocaleString("fr-BE", anchoOptions)

let reyDate = new Date(nowBru.getTime() + reyUtcOffeset * 60 * 1000)
let reyOptions = { timeZone: 'Atlantic/Reykjavik' };
let reyFormatted = reyDate.toLocaleString("fr-BE", reyOptions)

let stPetDate = new Date(nowBru.getTime() + stPetUtcOffeset * 60 * 1000)
let stPetOptions = { timeZone: 'Europe/Moscow' };
let stPetFormatted = stPetDate.toLocaleString("fr-BE", stPetOptions)

bru = document.querySelector(".BelgiumTime")
bruTime = document.createTextNode(bruFormatted)
bru.appendChild(bruTime)

ancho = document.querySelector(".USATime")
anchoTime = document.createTextNode(anchoFormatted)
ancho.appendChild(anchoTime)

rey = document.querySelector(".IcelandTime")
reyTime = document.createTextNode(reyFormatted)
rey.appendChild(reyTime)

stPet = document.querySelector(".RussiaTime")
stPetTime = document.createTextNode(stPetFormatted)
stPet.appendChild(stPetTime)

//________________________Exercise 2

let myBD = new Date(1993, 7, 4)
let myBDFormatted = myBD.toLocaleString("fr-BE", bruOptions)
console.log(myBDFormatted)

let timeMyBD = myBD.getTime()
let timeNowBru = nowBru.getTime()

difference = timeNowBru - timeMyBD
millisecInDay = 1000 * 60 * 60 * 24

difference.toString()

let numberDays = document.querySelector(".numberDays")
let numberDaysValue = document.createTextNode(Math.floor((difference.toString())/millisecInDay))

numberDays.appendChild(numberDaysValue)

//function to calculate the number of days sice a specific date.

let anyTime = new Date(1992,4,29)

const calculateNumberDays = (date) => {
    timeDate = date.getTime()
    differenceWToday = (timeNowBru - timeDate)/millisecInDay
    return Math.floor(differenceWToday.toString())
}

//________________________Exercise 3

let numberHours = document.querySelector(".numberHours")
let numberHoursValue

let numberHoursValueText = document.querySelector(".numberHoursValueText")
let numberHoursValueTextTyped = document.createTextNode("0")
numberHoursValueText.appendChild(numberHoursValueTextTyped)

let numberDaysValueCalculated = document.querySelector(".numberDaysValue")
let numberDaysValueCalculatedTotal = document.createTextNode("today")
numberDaysValueCalculated.appendChild(numberDaysValueCalculatedTotal)

const calculateDayNumberHours = (number) => {
    // x hours in ms = 
    // x / 60 / 60 / 1000
    let numberMS = number * (60 * 60 * 1000)

    let timeFromNowMS = Date.now() + numberMS
    let timeFromNowDays = new Date (timeFromNowMS)
    timeFromNowDaysFormatted = timeFromNowDays.toLocaleString("fr-BE", bruOptions)


    return timeFromNowDaysFormatted

}

numberHours.addEventListener("keyup", (event) =>{
    numberHoursValue = event.target.value
    console.log(numberHoursValue)
    numberHoursValueText.innerText = numberHoursValue
    totalDate = calculateDayNumberHours(numberHoursValue)
    numberDaysValueCalculated.innerText = totalDate

})


//______________________Exercise 4

let weekdayValue = document.querySelector(".weekdayValue")
let weekdayValueText = document.createTextNode("")
weekdayValue.appendChild(weekdayValueText)

let dayValue = document.querySelector(".dayValue")
let dayValueText = document.createTextNode("")
dayValue.appendChild(dayValueText)

let monthValue = document.querySelector(".monthValue")
let monthValueText = document.createTextNode("")
monthValue.appendChild(monthValueText)

let yearValue = document.querySelector(".yearValue")
let yearValueText = document.createTextNode("")
yearValue.appendChild(yearValueText)

let timeValue = document.querySelector(".timeValue")
let timeValueText = document.createTextNode("")
timeValue.appendChild(timeValueText)

let bruOptions2 = { weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric', 
  hour: 'numeric', 
  minute: 'numeric', 
  second: 'numeric', 
  hourCycle: 'h23',
  hour12: false,
  timeZoneName: 'short' 
}

let bruOptions3 = { weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric', 
  hour: 'numeric', 
  minute: 'numeric', 
  second: 'numeric', 
  hourCycle: 'h23',
  hour12: true,
  timeZoneName: 'short' 
}

let bruOptionsChoice = bruOptions2

const changeOptions = () => {
    if (bruOptionsChoice == bruOptions2) {
        bruOptionsChoice = bruOptions3
    } else if (bruOptionsChoice == bruOptions3) {
        bruOptionsChoice = bruOptions2
    }
}

const refreshTime = () => {
    nowBru = new Date() 

    let bruFormatted2 = nowBru.toLocaleString("en-GB", bruOptionsChoice)

    let cut = bruFormatted2.split(" ")

    let weekdayToday = cut[0]
    let dayToday = cut[1]
    let monthToday = cut[2]
    let yearToday = cut[3]
    let timeToday = cut[5]

    weekdayValue.innerHTML = weekdayToday
    dayValue.innerHTML = dayToday
    monthValue.innerHTML = monthToday
    yearValue.innerHTML = yearToday
    timeValue.innerHTML = timeToday
}

interval = setInterval(refreshTime, 1000)


let time = document.querySelector(".time")
time.addEventListener("click", (event) => {
    changeOptions()
    clearInterval(interval)
    interval = setInterval(refreshTime, 1000)

})