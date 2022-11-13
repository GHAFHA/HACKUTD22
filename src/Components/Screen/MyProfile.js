import React from 'react';
<<<<<<< Updated upstream
import { Container } from 'react-bootstrap';
import './MyProfile.css';
import PieRechartComponent from './TestChart';
=======
import { PieChart } from 'recharts';
import Example from './PieChart';

>>>>>>> Stashed changes
export default function MyProfile() {
   
    return (
   <div className = "AboutUs">
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        <h1> My Profile </h1>
        <p> We are a group of students practicing ReactJS to prepare for the upcoming UTD Hackathon</p>
=======
        <h1> My Profile</h1>
        
        <div id="chartDiv"> <PieRechartComponent></PieRechartComponent> </div>
        
        
        
>>>>>>> Stashed changes
=======
        <div>
        <h1> My Investments </h1>
            
        </div>
        <Example></Example>
>>>>>>> Stashed changes
    </div>
    
    )
}