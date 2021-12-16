import React, { useEffect, useState } from 'react'
import { Flex, CardContent, Text, Spacer } from 'vcc-ui';
import axios from 'axios';

import CardComponent from '../components/Card';

const Home = () => {
    const [carsList, setCarsList] = useState([]);



    useEffect(() => {
        async function fetchData() {
            const url = 'api/cars.json';
            axios.get(url).then(res => {
                setCarsList(res.data);
            });
        }
        fetchData();
    }, [])



    return (
        <div className="container">
            <Flex extend={{
                display: 'flex',
                flexDirection: 'row',
                gap: '20px'
            }}>
                {carsList.map((car) => {
                    return (<CardComponent id={car.id} modelName={car.modelName} bodyType={car.bodyType} modelType={car.modelType} imageUrl={car.imageUrl} />)
                })}
            </Flex>
        </div>
    )
}

export default Home
