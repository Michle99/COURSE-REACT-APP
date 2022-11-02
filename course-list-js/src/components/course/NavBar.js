import { Link } from "react-router-dom"
import { Component } from "react"
import { connect } from "react-redux"

export default class NavBar extends Component {
    
    constructor(){
        super()
      
    }
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div  className="container-fluid .navbar-text">
                    <Link className="navbar-brand" to="/">Course</Link>
                    <h5 className="navbar-brand">Course List</h5>
                    <Link to="/enquiries"> <button className="btn btn-outline-success" type="button">Course Registration</button></Link>
                </div>
            </nav>
        );
    }

}

