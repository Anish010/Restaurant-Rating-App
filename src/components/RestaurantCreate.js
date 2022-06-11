import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import NavBarMenu from "./NavBarMenu"
class RestaurantCreate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            email: null,
            address: null,
            rating: null,
        };
    }
    create() {
        fetch("http://localhost:3000/restaurant",
            {
                method: "Post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            }).then((result) => {
                result.json().then((resp) => {
                    alert("Restaurant created");
                })
            })
    }
    render() {
        return (
            <div>
                <NavBarMenu />
                <br /><h2>Add Details and Ratings of a restaurant</h2><br />
                <br />
                <div>
                    <input className="input-create" onChange={(event) => { this.setState({ name: event.target.value }) }}
                        placeholder="Restaurant Name" /> <br /><br />
                    <input className="input-create" onChange={(event) => { this.setState({ email: event.target.value }) }}
                        placeholder="Restaurant Email" /> <br /><br />
                    <input className="input-create" onChange={(event) => { this.setState({ rating: event.target.value }) }}
                        placeholder="Restaurant Rating" /> <br /><br />
                    <input className="input-create" onChange={(event) => { this.setState({ address: event.target.value }) }}
                        placeholder="Restaurant Address" /> <br /><br />
                    <Button variant="success" className="button-create" onClick={() => { this.create() }}>Add Restaurant</Button>{' '}
                </div>
            </div>
        );
    }
}

export default RestaurantCreate;