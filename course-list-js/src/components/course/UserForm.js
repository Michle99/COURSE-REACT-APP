import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

const url = "http://localhost:5000/enquiries";
export default class UserForm extends Component {

    constructor(){
        super();
        
        this.state = {
            id: '',
            name: '',
            email: '',
            phoneNo: '',
            course: ''
        } //End of state

    } //End of constructor
    
    /**
     * 
     * @returns 
     * Below are the event handlers
     */
    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    }
    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    }
    handlePhoneNoChange = (e) => {
        this.setState({ phoneNo: e.target.value });
    }
    handleCourseChange = (e) => {
        this.setState({ course: e.target.value });
    }
    handleSubmit = (e) => {
        const random = Math.floor(Math.random() * 100);
        const userData = {
            id: random,
            name: this.state.name,
            email: this.state.email,
            phoneNo: this.state.phoneNo,
            course: this.state.course
        }

        //posting user data using axios
        axios({
            url,
            method: "post",
            data: userData
        }).then((response) => {
            console.log("User form data: ", response.data);
        }, (error) => {
            console.log("User data not entered: ", error);
        })
        alert('User data is submitted');
        console.log("User data: ", userData);

        this.redirectToCoursePage();
    }
    redirectToCoursePage = () => {
        const { history } = this.props;
        if(history) history.push('/');
    }

    render() {
        const { history } = this.props;
        return(
            <div className="container">
                <form >
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.handleNameChange}
                            id="name"/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                            id="email"/>
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.phoneNo}
                            onChange={this.handlePhoneNoChange}
                            id="phoneNo"/>
                    </div>
                    <div className="form-group">
                        <label>Course</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.course}
                            onChange={this.handleCourseChange}
                            id="course"/>
                    </div><br />
                    <button type="submit" className="btn btn-success"
                        onClick={this.handleSubmit}>
                        Submit
                    </button>
                </form>

            </div>
        );
    }
}

const RouteToCoursePage = withRouter(UserForm);