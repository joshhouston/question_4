import React, { Component } from 'react';
import './App.css';
import { Line, Bar } from 'react-chartjs-2';
import { Container, Row, Col } from 'reactstrap';

const oilReserves = {
  labels: ['Route 66 Alpha', 'Route 66 Bravo', 'Route 66 Charlie', 'Hanamura Alpha', 'Hanamura Bravo', 'Numbani Alpha', 'Numbani Bravo'],
  datasets: [{
    label: 'Oil reserves',
    data: [15000, 25000, 8000, 5000, 30000, 1000, 15000]
  }]
}

const gasReserves = {
  labels: ['Route 66 Alpha', 'Route 66 Bravo', 'Route 66 Charlie', 'Hanamura Alpha', 'Hanamura Bravo', 'Numbani Alpha', 'Numbani Bravo'],
  datasets: [{
    label: 'Gas reserves',
    data: [0, 5000, 15000, 5000, 20000, 2500, 10000],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1

  }]
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      date: '',
      data: {}
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });

    //Send data to chart depending on date selected
    if (e.target.value === '2019-08-01') {
      this.setState({
        data: {
          labels: ['Route 66 Alpha', 'Route 66 Bravo', 'Route 66 Charlie', 'Hanamura Alpha', 'Hanamura Bravo', 'Numbani Alpha', 'Numbani Bravo'],
          datasets: [{
            label: 'Extraction',
            data: [20000, 30000, 15000, 15000, 30000, 25000, 20000],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        }
      })
    } else if (e.target.value === '2019-08-02') {
      this.setState({
        data: {
          labels: ['Route 66 Alpha', 'Route 66 Bravo', 'Route 66 Charlie', 'Hanamura Alpha', 'Hanamura Bravo', 'Numbani Alpha', 'Numbani Bravo'],
          datasets: [{
            label: 'Oil reserves',
            data: [15000, 25000, 10000, 5000, 20000, 10000, 15000],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        }
      })
    }else if (e.target.value === '2019-08-03') {
      this.setState({
        data: {
          labels: ['Route 66 Alpha', 'Route 66 Bravo', 'Route 66 Charlie', 'Hanamura Alpha', 'Hanamura Bravo', 'Numbani Alpha', 'Numbani Bravo'],
          datasets: [{
            label: 'Extraction',
            data: [10000, 15000, 5000, 4000, 15000, 9000, 10000],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        }
      })
    }else if (e.target.value === '2019-08-04') {
      this.setState({
        data: {
          labels: ['Route 66 Alpha', 'Route 66 Bravo', 'Route 66 Charlie', 'Hanamura Alpha', 'Hanamura Bravo', 'Numbani Alpha', 'Numbani Bravo'],
          datasets: [{
            label: 'Extraction',
            data: [5000, 5000, 3000, 2000, 7000, 4000, 5000],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        }
      })
    }else if (e.target.value === '2019-08-05') {
      this.setState({
        data: {
          labels: ['Route 66 Alpha', 'Route 66 Bravo', 'Route 66 Charlie', 'Hanamura Alpha', 'Hanamura Bravo', 'Numbani Alpha', 'Numbani Bravo'],
          datasets: [{
            label: 'Extraction',
            data: [2000, 2000, 1000, 500, 3000, 1000, 1500],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        }
      })
    }else if (e.target.value === '2019-08-06') {
      this.setState({
        data: {
          labels: ['Route 66 Alpha', 'Route 66 Bravo', 'Route 66 Charlie', 'Hanamura Alpha', 'Hanamura Bravo', 'Numbani Alpha', 'Numbani Bravo'],
          datasets: [{
            label: 'Extraction',
            data: [0, 0, 0, 0, 0, 0, 0],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        }
      })
    }
  };


  render() {
    return (
      <Container>
        <Row>
          <Col xs='3'>
            <h1 className='header'>Oil Reserves</h1>
            <Line 
            width={100}
            height={200}
            options={{ maintainAspectRatio: false }}
            data={oilReserves} />
          </Col>
        </Row>
        <Row className="row">
          <Col xs='3'>
            <h1 className="header">Gas Reserves</h1>
            <Line 
            data={gasReserves}
            width={100}
                height={200}
                options={{ maintainAspectRatio: false }}
            />
          </Col>
        </Row>

        <Row>
          <Col xs='6'>
            <h1 className='header'>Extraction from 08/01/2019 - 08/06/2019</h1>
          </Col>
          <Col md='3'>
            <h3>Choose Extraction Date</h3>
            <input
              onChange={this.handleChange}
              type="date"
              name="date"
              min="2019-08-01"
              max="2019-08-06"
            />
          </Col>
          <Row>
            <Col md='6'>
              <Bar 
                data={this.state.data}
                width={200}
                height={300}
                options={{ maintainAspectRatio: false }}
                />
            </Col>
          </Row>
        </Row>
      </Container>
    );
  }
}

export default App;
