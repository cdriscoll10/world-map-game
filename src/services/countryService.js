import axios from "axios";

const fetchCountries = async () => {
    try {
        const url = process.env.PUBLIC_URL + '../geoJson/countries.geojson';
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching countries:', error);
        return null;
    }
};


