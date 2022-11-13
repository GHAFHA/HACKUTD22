import React from 'react';
import { Container } from 'react-bootstrap';
import './MyProfile.css';
import PieRechartComponent from './TestChart';
export default function MyProfile() {
   
    return (
   
   <div id='ProfileWrapper' >
        <Container>
        <div id="Profile">
        <h1 id="pageTitle"> My Investment Profile </h1>
             
        <div id="chartDiv"> <PieRechartComponent></PieRechartComponent> </div>
        </div>

        <div id="rec-holder">
            <div id="recomendation"> 
            <div className='Recs'>
            <h1 id="rec-header">Recomendations</h1>
            </div>
            </div>
        </div>
        </Container>
    </div>
    
    )
}