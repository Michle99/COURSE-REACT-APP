const faker = require('faker');

function generateCourse() {
    const courses = [];

    for (let id = 0; id < 50; id++){
        const name = faker.name.firstName();
        const instructor = faker.name.jobArea();
        const venue = faker.name.jobDescriptor();

        courses.push({
            "id": id,
            "instructor": instructor,
            "venue": venue
        })
    }

    return { "courses": courses }
}
module.exports = generateCourse;