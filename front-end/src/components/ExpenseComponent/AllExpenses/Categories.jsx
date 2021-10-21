import React, { useEffect } from 'react';
import { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

import API from '../../../api';

export default function Categories(props) {

    const [categories, setCategories] = useState([]);

    const getData = async () => {
        await API.get('getallcategories')
            .then(res => {
                const result = res.data;
                setCategories(result);
            });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <select
            onChange={props.onChange}
            name={props.name}
        >
            <option
                value={null}
            >
                Name Category
            </option>

            {categories.map(category =>
                <option
                    selected={props.value == category.categories_id}
                    value={category.categories_id}
                >
                    {category.categories_name}
                </option>
            )}

        </select>
    )
}