import "./diagram.css";
import React from 'react';
import Chart from 'chart.js';


export default class Diagram extends React.Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    render() {
        return (
            <canvas ref={this.chartRef} />
        );
    }

    componentDidMount() {
        this.myChart = new Chart(this.chartRef.current, {
          type: 'bar',
          data: {
              datasets: [{
                  data: [{x:'2016-10-25', y:20}, {x:'2016-11-25', y:15}, {x:'2016-12-26', y:10}],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                  ],
                  borderWidth: 1,
                  barPercentage: 1,
                  categoryPercentage: 1.0
              }]
          },
          options: {
            scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                        unit: 'day'
                    }
                }]
            }
        }
        });
      }
}
