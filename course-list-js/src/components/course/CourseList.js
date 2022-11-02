import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CourseService from '../../services/course.service';


const CourseList = (props) => {
    const [courses, setCourses] = useState([]);

    const init = () => {
      CourseService.getAll()
            .then(response => {
                console.log("Printing course data", response.data);
                props.dispatch({
                  type: "STORE_COURSES",
                  payload: response.data.data
                })
                setCourses(response.data);
            })
            .catch(error => {
                console.log("There's a bug preventing the courses from showing", error);
            })
    }

    useEffect(() => {
        init();
    }, []);


    const handleDelete = (id) => {
        console.log("Deleting course", id);
        CourseService.remove(id)
            .then(response => {
                console.log("Course deleted", response.data);
                init();
            })
            .catch(error => {
                console.log("There's another bug", error);
            })
    }


    return (
        <div className="container">
          <h3>Course Table</h3>
          <hr/>
          <div>
            <Link to="/add" className="btn btn-primary mb-2">Add Course</Link>
            <table className="table table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th>Name</th>
                  <th>Instructor</th>
                  <th>Venue</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              {
                courses.map(course => (
                  <tr key={course.id}>
                    <td>{course.name}</td>
                    <td>{course.instructor}</td>
                    <td>{course.venue}</td>
                    <td>
                      <Link className="btn btn-info" to={`/courses/edit/${course.id}`}>Update</Link>&nbsp;
                      
                      <button className="btn btn-danger ml-2" onClick={() => {
                        handleDelete(course.id);
                      }}>Delete</button>
                    </td>
                  </tr>
                ))
              }
              </tbody>
            </table>
            
          </div>
        </div>
      );
}

export default connect(function(state, props){
  return {
    courses: state["courses"] || []
  }
})(CourseList);
