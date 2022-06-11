import React, { Component } from "react";
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import NavBarMenu from "./NavBarMenu"
export default class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }

  componentDidMount() {
    this.getData()
  }
  getData() {
    fetch("http://localhost:3000/restaurant").then((response) => {
      response.json().then((result) => {
        this.setState({ list: result })
      })
    })
  }

  delete(id) {
    fetch("http://localhost:3000/restaurant/" + id,
      {
        method: "DELETE",
      }).then((result) => {
        result.json().then((resp) => {
          alert("Restaurant has heen Delete")
          this.getData()
        })
      })
  }
  render() {
    return (
      <div>
        <NavBarMenu />
        <br /><h2>Details of the Restaurant</h2><br />
        {
          this.state.list ?
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Restaurant Name</th>
                    <th>Email</th>
                    <th>Rating</th>
                    <th>City</th>
                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.list.map((item, i) =>
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.rating}</td>
                        <td>{item.address}</td>
                        <td><Link to={"/update/" + item.id} ><FaEdit style={{ color: 'blue', 'font-size': '25px' }} /></Link>&nbsp;&nbsp; &nbsp;
                          <span className="span-delete" onClick={() => this.delete(item.id)}><MdDelete style={{ color: 'red', 'font-size': '25px' }} /></span></td>
                      </tr>)
                  }
                </tbody>
              </Table>
            </div>
            :
            <p>Please Wait...</p>
        }
      </div>
    );
  }
}
