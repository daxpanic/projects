import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/login.jsx';
import Register from './Components/Register/register.jsx';
import Success from './Components/Success/success.jsx';
import Recovery from './Components/Recovery/recovery.jsx';
import RecoverySent from './Components/RecoverySent/recoverySent.jsx';
import NewPassword from './Components/NewPassword/newPassword.jsx';
import ChangePassword from './Components/ChangePassword/changePassword.jsx';
import Showcase from './Components/Showcase/showcase.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Showcase />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} />
        <Route path="/forgot-password" element={<Recovery mode="password" />} />
        <Route path="/forgot-username" element={<Recovery mode="username" />} />
        <Route path="/recovery-sent" element={<RecoverySent />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/showcase" element={<Showcase />} />
      </Routes>
    </Router>
  );
}

export default App;