import { Component } from 'react';
import Course from './Course';
import axios from 'axios';
import { connect } from 'react-redux';


class DisplayCourses extends Component {
    constructor(){
        super();
        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        axios({
            url: "http://localhost:5005/courses",
            method: "get"
        })
        .then((response) => {
            console.log("responses from courses api: ", response);
            this.props.dispatch({
                type:"STORE_COURSES",
                payload:response.data //the data is an array otherwise 
                //we use response.data.data for an object
              })
            // this.setState({ //have to remove this for dispatch
            //     courses:response.data
            // })
        },
         (error) => {
             console.log("You're not accessing the courses data properly: ", error);
         })
    }

    render() {
        return(
            <div>
                <div className="row" >
                    {this.props.courses.map((each, index) => {
                    return <Course key={index} data={each} />
                    })}
                </div>
            </div>
           
        )
    }
}

// export default DisplayCourses;

export default connect(function(state, props){
    return {
        courses: state["courses"] || []
    }
})(DisplayCourses)