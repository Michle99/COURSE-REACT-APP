import httpClient from "../www/htt-common";

class CourseService {
    getAll = () => {
        return httpClient.get('/courses');
    }

    create = data => {
        return httpClient.post("/courses", data);
    }

    get = id => {
        return httpClient.get(`/courses/${id}`);
    }

    update = (data, id) => {
        return httpClient.put('/courses' + '/' + data.id, data);    
    }

    remove = id => {
        return httpClient.delete(`/courses/${id}`);
    }

}

export default new CourseService();

// export default  { getAll, create, get, update, remove };