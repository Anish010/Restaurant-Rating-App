import React, { Component } from 'react';
import { Table, Form, Container } from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import {
    Link
} from 'react-router-dom'
import NavBarMenu from "./NavBarMenu"
class RestaurantSearch extends Component {
    constructor() {
        super()
        this.state = {
            searchData: null,
            noData: false,
            lastSearch: "",
        }
    }
    search(key) {
        console.warn(key)
        this.setState({ lastSearch: key })
        fetch("http://localhost:3000/restaurant?q=" + key).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp)
                if (resp.length > 0) {
                    this.setState({ searchData: resp, noData: false })
                }
                else {
                    this.setState({ noData: true, searchData: null })
                }
            })
        })
    }
    delete(id) {
        fetch('http://localhost:3000/restaurant/' + id,
            {
                method: "DELETE",
            }).then((result) => {
                result.json().then((resp) => {
                    alert("Restaurant has heen Delete")
                    this.search(this.state.lastSearch)
                })
            })
    }
    render() {
        return (
            <>
                <NavBarMenu />
                <Container>

                    <br /><h2>Search your restaurant</h2><br />

                    <Form.Control type="text" onChange={(event) => this.search(event.target.value)} placeholder="Search restaurant" />
                    <div>
                        {
                            this.state.searchData ?
                                <div>
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Name</th>
                                                <th>Rating</th>
                                                <th>Location</th>
                                                <th>Operation</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.searchData.map((item) =>
                                                    <tr>
                                                        <td>{item.id}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.rating}</td>
                                                        <td>{item.address}</td>
                                                        <td><Link to={"/update/" + item.id}><FaEdit style={{ color: 'blue' }} /></Link>&nbsp;&nbsp; &nbsp;
                                                            <span onClick={() => this.delete(item.id)}><MdDelete style={{ color: 'red' }} /></span>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </div>
                                : ""
                        }
                        {
                            this.state.noData ? <h3>No Data Found</h3> : null
                        }
                    </div>

                </Container>
            </>
        );
    }
}

export default RestaurantSearch;