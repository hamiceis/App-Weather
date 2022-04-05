const formCity = document.querySelector('[data-js="change-location"]')
const cityCard = document.querySelector('[data-js="city-Card"]')
const cityName = document.querySelector('[data-js="city-name"]')
const cityWeather = document.querySelector('[data-js="city-Weather"]')
const cityTemperature = document.querySelector('[data-js="cityTemperature"]')
let timeImg = document.querySelector('[data-js="time"]')
const timeIconContainer = document.querySelector('[data-js="timeIcon"]')


const getCityCardData = async () => {
    const inputValue = formCity.city.value
    const [{ Key, LocalizedName }] = await getCityData(inputValue)
    const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] = await getClimaData(Key)

    const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg">`

    return { LocalizedName, Temperature, IsDayTime, WeatherText, timeIcon }
}

const MostreCardWeather = () => {
    const cardIsNotDisplay = cityCard.classList.contains('d-none')
    if(cardIsNotDisplay){
        cityCard.classList.remove('d-none')
    }
}

const setCityCardData = async () => {
    const cityCardData = await getCityCardData()

    const { LocalizedName, Temperature, IsDayTime, WeatherText, timeIcon } = cityCardData

    cityName.textContent = LocalizedName
    cityTemperature.textContent = Temperature.Metric.Value
    cityWeather.textContent = WeatherText
    timeIconContainer.innerHTML = timeIcon

    timeImg.src = IsDayTime ? './src/day.svg' : './src/night.svg'

}

const scrollPage = () => {
    setTimeout(()=>{
        scrollTo({
            top:180,
            left:0,
            behavior: "smooth"
        })
    },1000)
}


const handleCityCard = event => {
    event.preventDefault()
    MostreCardWeather()
    setCityCardData()
    scrollPage()

    formCity.reset()
} 


formCity.addEventListener('submit', handleCityCard)