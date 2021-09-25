import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Programmer from '../Programmer/Programmer';
import './Main.css'

const Main = () => {
    const [programmers, setProgrammers] = useState([])
    const [card, setCard] = useState([])
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setProgrammers(data))
    }, [])

    const handleButton = (programmer) => {
        const newCard = [...card, programmer];
        setCard(newCard);
        // console.log(newCard)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9 row">
                    {
                        programmers.map(programmer => <Programmer
                            key={programmer.id}
                            programmer={programmer}
                            handleButton={handleButton}
                        ></Programmer>)
                    }
                </div>
                <div className="col-md-3">
                    <Card card={card}></Card>
                </div>
            </div>
        </div>
    );
};

export default Main;