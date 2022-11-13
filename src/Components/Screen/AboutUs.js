import './AboutUs.css';
import {Container} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className= 'App-header'>
        <Container fluid>
    <h1 className =  "header"> About Us </h1>
      <p className='paragraph1'> We are a group of students working on financial sentiment analysis challenge for HackUTD 2022.</p>

      <p className = "paragraph2"> Our product focuses on analyzing current trends of the stock market. The AWS API is used to 
          deliver an assessment of whether the user should invest in a certain stock or not. We use Twitter's 
          API to comb through tweets looking for key-value pairs, each word will have a value associated with it between 
          the ranges of -1 and 1. This will be defined in a CSV file. Using these defined values we will develop an ML algorithm. An average value would be assinged
          to each stock based on the ratio of negative and positive words. 
      </p>
    </Container>

      </header>
 
    </div>
  );
}

export default App;
