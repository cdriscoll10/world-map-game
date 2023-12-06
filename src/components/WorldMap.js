import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import fetchCountries from '../services/countryService';

const WorldMap = () => {
    // State to store countries data
    const [countries, setCountries] = useState([]);

    // Fetch countries on component mount
    useEffect(() => {
        const getCountries = async () => {
            const data = await fetchCountries();
            setCountries(data.features); // Assuming the GeoJSON has a features array
        };
        getCountries();
    }, []);

    const handleCountryClick = (country) => {
        // Implement your logic to check if the clicked country is the correct answer
        console.log('Country clicked:', country.properties.name);
    };

    return (
        <ComposableMap>
            <Geographies geography={countries}>
                {({ geographies }) =>
                    geographies.map(geo => (
                        <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            onClick={() => handleCountryClick(geo)}
                            style={{
                                default: { fill: "#D6D6DA", outline: "none" },
                                hover: { fill: "#F53", outline: "none" },
                                pressed: { fill: "#E42", outline: "none" },
                            }}
                        />
                    ))
                }
            </Geographies>
        </ComposableMap>
    );
};

export default WorldMap;


