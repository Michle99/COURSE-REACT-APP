import {Link } from 'react-router-dom';
import '../../App.css';
function Course(props) {
    return(
        <div className="card col-md-2 center" >
         <div className="card-body">
            <div className="row">
                <h5 className="card-title">{props.data.name}</h5>
            </div>
            <div className="card-text">
            <p className="max">{props.data.details}</p>
            </div>
            <div>
                <p className="card-title">${props.data.fee}</p>
            </div>
            <div className="card-text">
                <Link to="/enquiries" className="btn btn-primary">Enquires</Link>
            </div>

         </div>
        </div>
        
    );
}

export default Course;