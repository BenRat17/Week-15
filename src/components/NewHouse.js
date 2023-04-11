import React from "react";
import { housesApi } from "../rest/HousesAPI";
import { useState } from "react";
import { HouseList } from "./HouseList";

export function NewHouse(props) {
    const [name, setName] = useState('');
    // const [area, setArea] = useState('');

    const {house,updateHouse} = props;

    // updateHouse = async (house) => {
    //    await housesApi.put(house);
    //     this.fetchHouses();
    // };

    const onSubmit = (e) => {
        e.preventDefault();
        housesApi.addHouse(name);
        setName("");
        housesApi.put(house);
        housesApi.get(house);
        //add update method.
    };

    return (
        <div>
            <h2>Add a new house!</h2>
            <form onSubmit={onSubmit}>
                <input 
                type='text'
                placeholder="name"
                onChange={(e)=> setName(e.target.value)}
                value={name}>
                </input>
                {/* <input 
                type='text'
                placeholder="area"
                onChange={(e)=> setArea(e.target.value)}
                value={area}>
                </input> */}
                <button type="submit">Add House</button>
            </form>
        </div>
    )
};