import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import TimeTable from './components/Timetable/TimeTable';
// import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import StudentInformation from './pages/Student Information/StudentInformation';
import ExamResults from './pages/Exam Results/ExamResults';
import Attendance from './pages/Attendance/Attendance';

function App() {
  return (
    <div className="App">
      <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
  

        <div style={{ flex: 1 }}>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/student-info" element={<StudentInformation/>} />
            <Route path="/results" element={<ExamResults/>} />
            <Route path="/attendance" element={<Attendance/>} />
            <Route path="/timetable" element={<TimeTable/>} />
          </Routes>
        </div>
      </div>
    </Router>
    </div>
  );
}

export default App;
