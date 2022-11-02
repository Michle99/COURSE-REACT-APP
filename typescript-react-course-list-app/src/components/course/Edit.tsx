import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import axios from 'axios';

export interface IValues {
    [key: string]: any;
}

export interface IFormState {
    id: number,
    course: any;
    values: IValues[];
    submitSuccess: boolean;
    loading: boolean;
}

class EditCourse extends React.Component<RouteComponentProps<any>, IFormState> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            course: {},
            values: [],
            loading: false,
            submitSuccess: false,
        }
    }

    public componentDidMount(): void {
        axios.get(`http://localhost:5000/courses/${this.state.id}`).then(data => {
            this.setState({ course: data.data });
        })
    }

    private processFormSubmission = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        this.setState({ loading: true });
        axios.patch(`http://localhost:5000/courses/${this.state.id}`, this.state.values).then(data => {
            this.setState({ submitSuccess: true, loading: false })
            setTimeout(() => {
                this.props.history.push('/');
            }, 1500)
        })
    }


    private setValues = (values: IValues) => {
        this.setState({ values: { ...this.state.values, ...values } });
    }

    private handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        this.setValues({ [e.currentTarget.id]: e.currentTarget.value })
    }

    public render() {
        const { submitSuccess, loading } = this.state;
        return (
            <div className="App">
                {this.state.course &&
                    <div>
                        < h1 > Course List App</h1>
                        <p> Built with React.js and TypeScript </p>

                        <div>
                            <div className={"col-md-12 form-wrapper"}>
                                <h2> Edit Course </h2>

                                {submitSuccess && (
                                    <div className="alert alert-info" role="alert">
                                        Course details has been edited successfully </div>
                                )}

                                <form id={"create-post-form"} onSubmit={this.processFormSubmission} noValidate={true}>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="title"> Title </label>
                                        <input type="text" id="title" defaultValue={this.state.course.title} onChange={(e) => this.handleInputChanges(e)} name="title" className="form-control" placeholder="Enter title" />
                                    </div>

                                    <div className="form-group col-md-12">
                                        <label htmlFor="instructor"> Instructor </label>
                                        <input type="text" id="instructor" defaultValue={this.state.course.instructor} onChange={(e) => this.handleInputChanges(e)} name="instructor" className="form-control" placeholder="Enter instructor" />
                                    </div>

                                    <div className="form-group col-md-12">
                                        <label htmlFor="period"> Period </label>
                                        <input type="text" id="period" defaultValue={this.state.course.period} onChange={(e) => this.handleInputChanges(e)} name="period" className="form-control" placeholder="Enter period" />
                                    </div>

                                    <div className="form-group col-md-4 pull-right">
                                        <button className="btn btn-success" type="submit">
                                            Edit Course </button>
                                        {loading &&
                                            <span className="fa fa-circle-o-notch fa-spin" />
                                        }
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default withRouter(EditCourse);
