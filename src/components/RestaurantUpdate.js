import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import NavBarMenu from "./NavBarMenu"
const RestaurantUpdate = () => {
    //const [data, setData] = useState({ id: null, name: null, email: null, address: null, rating: null })
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [address, setAddress] = useState(null);
    const [rating, setRating] = useState(null);
    const { id } = useParams();




    //Want to use it like CompoundDidMount
    useEffect(() => {
        fetch('http://localhost:3000/restaurant/' + id).then((response) => {
            response.json().then((result) => {
                console.warn(result);
                //setData({ ...data, id: result.id, name: result.name, email: result.email, address: result.address, rating: result.rating });
                setName(result.name);
                setEmail(result.email);
                setAddress(result.address);
                setRating(result.rating);
            })
        })
    }, []);

    function update() {
        fetch("http://localhost:3000/restaurant/" + id,
            {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, address, rating })
            }).then((result) => {
                result.json().then((resp) => {
                    alert("Restaurant has been updated");
                })
            })
    }
    return (
        <div>
            <NavBarMenu />
            <br /><h2>Update Restaurant Details</h2><br /><br />
            <div>
                <input className="input-update" onChange={(event) => setName(event.target.value)}
                    placeholder="Restaurant Name" value={name} /> <br /><br />
                <input className="input-update" onChange={(event) => setEmail(event.target.value)}
                    placeholder="Restaurant Email" value={email} /> <br /><br />
                <input className="input-update" onChange={(event) => setRating(event.target.value)}
                    placeholder="Restaurant Rating" value={rating} /> <br /><br />
                <input className="input-update" onChange={(event) => setAddress(event.target.value)}
                    placeholder="Restaurant Address" value={address} /> <br /><br />
                <Button variant="info" className="update-button" onClick={() => { update() }}>Update Restaurant</Button>{' '}
            </div>
        </div >
    );
};

export default RestaurantUpdate;