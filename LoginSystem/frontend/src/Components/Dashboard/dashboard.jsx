import React from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';
import { clearSession, getEmail } from '../../auth';


const courses = [
    { id: 1, title: 'Course 1', description: 'Add your first course here.', pdf: '', html: '' },
    { id: 2, title: 'Course 2', description: 'Add your second course here.', pdf: '', html: '' },
    { id: 3, title: 'Course 3', description: 'Add your third course here.', pdf: '', html: '' },
];

const Dashboard = () => {
    const navigate = useNavigate();

    const email = getEmail();

    const handleLogout = () => {
        clearSession();
        navigate('/login');
    };

    return (
        <div className='dashboard-wrapper'>
            <header className='dashboard-header'>
                <h2>Welcome{email ? `, ${email}` : ''}!</h2>
                <button type="button" className='logout-btn' onClick={handleLogout}>
                    Logout
                </button>
            </header>

            <p className='dashboard-subtitle'>Your courses</p>

            <div className='course-grid'>
                {courses.map((course) => (
                    <div className='form-box course-card' key={course.id}>
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>

                        <div className='course-content'>
                            {course.pdf ? (
                                <embed src={course.pdf} type="application/pdf" width="100%" height="300px" />
                            ) : course.html ? (
                                <iframe src={course.html} title={course.title} width="100%" height="300px" />
                            ) : (
                                <p className='placeholder'>Coming soon</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
