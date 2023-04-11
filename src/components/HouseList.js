import React from 'react';
import {House} from './House.js';
import { housesApi } from '../rest/HousesAPI.js';
import { NewHouse } from './NewHouse.js';

export class HouseList extends React.Component {
    state = {
        houses: []
    };
    componentDidMount(){
        this.fetchHouses();
    };
    fetchHouses = async () => {
        const houses = await housesApi.get();
        this.setState({houses});
    };
    updateHouse = async (updatedHouse) => {
        await housesApi.put(updatedHouse);
        this.fetchHouses();
    };
    // newHouse = async () => {
    //     this.fetchHouses({
    //        method: 'POST',
    //        headers: {
    //         'Content-Type': 'application/json'
    //        },
    //        body: JSON.stringify()

    //     })
    // }
     render() {
        return(
            <div className ='house-list'>
                {this.state.houses.map((house) =>(
                    <House 
                    house={house}
                    key={house._id} 
                    updateHouse={this.updateHouse}
                    />
                ))}
            </div>
        )
    }
}

