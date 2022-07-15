import React from 'react'
import Index from './pages/Index';
import Login from './pages/Login';
import Collection from './pages/Sub/Collection';
import Course from './pages/Sub/Course';
import Crawler from './pages/Sub/Crawler';
import RecomCourse from './pages/Sub/RecomCourse';
import Slider from './pages/Sub/Slider';
import Student from './pages/Sub/Student';
import Teacher from './pages/Sub/Teacher';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import Error from './pages/Sub/Error';

function App() {
  return (
    <Router>
      <Routes>

        <Route path={'/'} element={<Index />}>
          <Route index element={<Course />} />
          <Route path={'/course'} element={<Course />} />
          <Route path={'/collection'} element={<Collection />} />
          <Route path={'/crawler'} element={<Crawler />} />
          <Route path={'/recom_course'} element={<RecomCourse />} />
          <Route path={'/slider'} element={<Slider />} />
          <Route path={'/student'} element={<Student />} />
          <Route path={'/teacher'} element={<Teacher />} />
          <Route path={'*'} element={<Error />} />
        </Route>

        <Route path={'/login'} element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;
