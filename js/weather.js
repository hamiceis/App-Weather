const APIKey = 'lpSsA1HLh1uSkWAJOGIeQaxoGyxj3ehs'
const baseUrl = 'http://dataservice.accuweather.com/'

const getCity = city=> `${baseUrl}locations/v1/cities/search?apikey=${APIKey}&q=${city}`

const getClima = keyCity => `${baseUrl}currentconditions/v1/${keyCity}?apikey=${APIKey}&language=pt-br`

const fetchData = async url => {
    try {
        const response = await fetch(url)

        if(!response.ok){
            throw new Error('Não foi possivel receber os dados')
        }

        return response.json()
    } catch({name, message}){
        alert(`${name}: ${message}`)
    }
}


const getCityData = city => fetchData(getCity(city))
const getClimaData = key => fetchData(getClima(key))