import {useEffect, useState} from 'react';

export function FetchData(uri){
    const [data, setData] = useState();
    const getData = () => {
        fetch('http://localhost:3001' + uri)
        .then(response => {
            return response.json();
        })
        .then(data =>{
            setData(data.data);
        })
    }
    useEffect(() => {
        getData();
    },[])
    return data;
}