import react from 'react';
import { useState } from 'react';
import API from '../../../api';

export default function reecurring(props){


    const [recurring, setRecurring] = useState([]);

    const getData = async () => {
        await API.get('getallcategories')
            .then(res => {
                const result = res.data;
                setCategories(result);
            });
    }


}