import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import '../App.css';


interface IState {
    courses: any[];
}

export default class Home extends React.Component<RouteComponentProps, IState> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = { courses: [] }
    }

    public componentDidMount(): void {
        axios.get(`http://localhost:5000/courses`).then(data => {
            this.setState({ courses: data.data })
        })
    }

    public deleteCourse(id: number) {
        axios.delete(`http://localhost:5000/courses/${id}`).then(data => {
            const index = this.state.courses.findIndex(course => course.id === id);
            this.state.courses.splice(index, 1);
            this.props.history.push('/');
        })
    }

    public render() {
        const courses = this.state.courses;
        return (
            <div>
                {courses.length === 0 && (
                    <div className="text-center">
                        <h2>No courses found at the moment</h2>
                    </div>
                )}

                <div className="container">
                    <div className="row">
                        <table className="table table-bordered">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Instructor</th>
                                    <th scope="col">Period</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses && courses.map(course =>
                                    <tr key={course.id}>
                                        <td className='txtColor'>{course.title}</td>
                                        <td className='txtColor'>{course.instructor}</td>
                                        <td className='txtColor'>{course.period}</td>
                                        
                                        <td>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group" style={{ marginBottom: "20px" }}>
                                                    <Link to={`edit/${course.id}`}  className="btn btn-sm btn-outline-secondary txtColor">Edit Course </Link>
                                                    <button className="btn btn-sm btn-outline-secondary txtColor" onClick={() => this.deleteCourse(course.id)}>Delete Course</button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        )
    }
}
