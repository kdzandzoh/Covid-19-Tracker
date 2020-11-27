import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import '../App.css'
import { getCountries, fetchData} from '../api'

const Select = ({ handleChange }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await getCountries());
        };

        fetchAPI();
    }, []);

    return (
        <FormControl className="formContainer">
            <NativeSelect defaultValue="" onChange={(e) => handleChange(e.target.value)}>
                <option value="global" ></option>
                {countries.map((item, i) => <option key={i} value={item}>{item}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default Select;

