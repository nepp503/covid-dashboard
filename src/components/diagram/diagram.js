import './diagram.css';
import React from 'react';
import Chart from 'chart.js';


export default class Diagram extends React.Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    render() {
        return (
            <canvas className="diagram" ref={this.chartRef} />
        );
    }

    componentDidMount() {
        this.myChart = new Chart(this.chartRef.current, {
            type: 'bar',
            data: {
                datasets: [{
                    label: this.props.cases,
                    data: this.props.data,
                    backgroundColor: 'red',
                    barPercentage: 1,
                    categoryPercentage: 1,
                    borderWidth: 0
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        type: 'time',
                        time: {
                            unit: 'quarter'
                        }
                    }]
                }
            }
        });
    }

    componentDidUpdate(){
        if(this.props.data){
            this.myChart.data.datasets[0].data = this.props.data;
            this.myChart.data.datasets[0].backgroundColor = Array(this.props.data.length).fill('red');
        }
        this.myChart.data.datasets[0].label = this.props.cases;
        this.myChart.update();
    }
}
