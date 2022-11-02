import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CourseList from './components/course/CourseList';
import NotFound from './components/course/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddCourse from './components/course/AddCourse';
import DisplayCourses from './components/course/DisplayCourses';
import './App.css';
import NavBar from './components/course/NavBar';
import UserForm from './components/course/UserForm';
import Footer from './components/course/Footer';



function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <NavBar /><br />
          <Switch>  
            {/* <Route exact path="/" component={CourseList} /> */}
            {/* <Route path="/add" component={AddCourse} /> */}
            {/* <Route path="/courses/edit/:id" component={AddCourse} /> */}
            {/* <Route path="*" component={NotFound} /> */}
            <Route exact path="/" component={DisplayCourses} />
            <Route path="/enquiries"  component={UserForm}/>
          </Switch>
          <Footer />  
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
