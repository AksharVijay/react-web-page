import React from 'react';
import './Cards.css';
import CardItem from '../CardItem/CardItem';

const Cards = () => {
    return(
        <div className="cards">
            <h1>Check out the EPIC desitnations of New Zealand</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="images/img-3.jpg"
                        text="Explore Mt Cook"
                        label="Adventure"
                        path="/Services">
                        </CardItem>
                        <CardItem
                        src="images/img-7.jpg"
                        text="Explore Wellington"
                        label="Adventure"
                        path="/Services">
                        </CardItem>
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src="images/img-4.jpg"
                        text="Explore Queenstown"
                        label="Adventure"
                        path="/Services">
                        </CardItem>
                        <CardItem
                        src="images/img-6.jpg"
                        text="Explore Dunedin"
                        label="Adventure"
                        path="/Services">
                        </CardItem>
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src="images/img-44.jpg"
                        text="Explore Hobbiton"
                        label="Adventure"
                        path="/Services">
                        </CardItem>
                        <CardItem
                        src="images/img-99.jpg"
                        text="Explore Auckland"
                        label="Adventure"
                        path="/Services">
                        </CardItem>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;