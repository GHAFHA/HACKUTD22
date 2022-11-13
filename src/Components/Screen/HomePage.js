import React from 'react';
import "./HomePage.css";
import {Container, Row, Col, Button} from "react-bootstrap";
import Example from '../RechartFiles/portfoliochart';


export default function HomePage() {
   
    return (
        <div id="homepage-main">
            <Container>
                <Row>
                    <table id="chart-container">
                        <div className='text-container'>
                            <h1>Portfolio Overview</h1>
                        </div>
                        <Example></Example>
                    </table>
                    <table id="filter-container">
                        <div className='text-container'>
                            <h1>Filter</h1>
                            div
                        </div>
                        <input id="filter-input" placeholder="Enter a filter"></input>
                        <Button id="filter-button">Filter</Button>
                    </table>
                    <table id="trending-container">
                     <h1>Trending</h1>
                        <div className='text-container-pos'>
                            <h1>Ford</h1>
                            <h2>General Sentiment: Positive</h2>
                            <h3 className='value-container'>$$</h3>
                        </div>
                        <div className='text-container-neg'>
                            <h1>3M</h1>
                            <h2>General Sentiment: Negative</h2>
                            <h3 className='value-container'>$$</h3>
                        </div>
                        <div className='text-container-pos'>
                            <h1>Abbott Labs</h1>
                            <h2>General Sentiment: Positive</h2>
                            <h3 className='value-container'>$$</h3>
                        </div>
                        <div className='text-container-neg'>
                            <h1>Accenture</h1>
                            <h2>General Sentiment: Negative</h2>
                            <h3 className='value-container'>$$</h3>
                        </div>
                    </table>
                </Row>
            </Container>
        </div>
    )
}