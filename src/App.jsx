import { useState } from 'react';
import './App.css';

const courses = [
  { id: 1, name: "Introduction to Computer Science", code: "CPSC 201", credits: 4 },
  { id: 2, name: "Data Structures and Programming Techniques", code: "CPSC 223", credits: 4 },
  { id: 3, name: "Mathematical Tools for Computer Science", code: "CPSC 202", credits: 3 },
  { id: 4, name: "Introduction to Systems Programming and Computer Organization", code: "CPSC 323", credits: 4 },
  { id: 5, name: "Artificial Intelligence", code: "CPSC 470", credits: 3 },
];

function App() {
  // TODO: Implement state for selectedCourses
   const [selectedCourses, setselectedCourses] = useState([]);

  // TODO: Implement addCourse function

  const addCourse = (course) => {
    setselectedCourses([...selectedCourses, course]);
  };

  // TODO: Implement removeCourse function

  const removeCourse = (courseId) => {
   setselectedCourses([selectedCourses.filter(course => course.id !== courseId)]);
  };

  const totCredits = selectedCourses.reduce((sum, course) => sum + course.credit, 0);

  return (
    <div className="App">
      <h1>Yale Course Scheduler</h1>
      
      <div className="course-list">
        <h2>Available Courses</h2>
        {/* TODO: Display the list of available courses */}
        <ul>
         {courses.map(courses => {
          return <li key={course.id}>
            <span> {course.name} {course.code} {course.credits} </span></li>
        })}
        <button onClick = {() => addCourse(course)}>Add Course</button>
        </ul>
      </div>
      
      <div className="schedule">
        <h2>My Schedule</h2>
        {/* TODO: Display the selected courses */}
        <ul>
         {selectedCourses.map(selectedCourses => {
          return <li key={selectedCourses}>{selectedCourses}</li>
        })}
         <button onClick = {() => removeCourse(course.id)}>Remove Course</button>
        </ul>
        {/* TODO: Display the total credit hours */}
        <h3> Total Credit Hours: {totalCredits}</h3>
      </div>
    </div>
  );
}

export default App;
