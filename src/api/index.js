import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    let newUrl = url;
     
    if (country) {
        newUrl = `${url}/countries/${country}`
    }

    try {
        const {data: { confirmed, recovered, deaths, lastUpdate}} = await axios.get(newUrl);

        const selectedData = { confirmed, recovered, deaths, lastUpdate};

        return selectedData;
    }
    catch (error) {
        console.log(error);
    }
}

const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`);

        const selectedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        return selectedData;
    }
    catch (error) {

    }
}

export default fetchDailyData;

export const getCountries = async () => {
    try {
        const {data: { countries }} = await axios.get(`${url}/countries`);

        return countries.map((item) => item.name)
    }
    catch(error) {
        console.log(error);
    }
}