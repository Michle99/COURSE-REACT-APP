import { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import CourseService from '../../services/course.service';
import { useEffect } from 'react/cjs/react.development';


const AddCourse = (props) => {
    const history = useHistory();
    const {id} = useParams();
    const[name, setName] = useState('');
    const[instructor, setInstructor] = useState('');
    const[venue, setVenue] = useState('');

    // Using redux for state managmnt
    // const addCourse = useSelector((state) => state.AddCourse);

   

    const saveCourse = (e) => {
        e.preventDefault();
 

    const course = {id, name, instructor, venue };

        if(id) {
            console.log("id: ", id);
            CourseService.update(course)
                .then(response => {
                    console.log("Response: ", response);
                    console.log("Course: ", course);
                console.log("Updated completed", response.data);
                history.push('/');
            })
            .catch(error => {
                console.log("There's a bug", error);
            })
        } else {
            CourseService.create(course)
                .then(response => {
                console.log("course added", response.data);
                history.push('/');
            })
            .catch(error => {
                console.log("There's a bug in the code", error);
            })
        }
    }

    useEffect(() => {
        if (id) {
            CourseService.get(id)
                .then(course => {
                    setName(course.data.name);
                    setInstructor(course.data.instructor);
                    setVenue(course.data.venue);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])

    return(
        <div className="container">
            <h3>Add Course</h3>
            <hr/>
            <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="instructor"
                        value={instructor}
                        onChange={(e) => setInstructor(e.target.value)}
                        placeholder="Enter Instructor"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="venue"
                        value={venue}
                        onChange={(e) => setVenue(e.target.value)}
                        placeholder="Enter Venue"
                    />
                </div>
                <div >
                    <button onClick={(e) => saveCourse(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/">Back to List</Link>
        </div>
    )
}

export default  AddCourse;

// AddCourse = connect(function(state, props){
//     return{

//     }
// })(AddCourse)
// export default AddCourse;