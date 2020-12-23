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
                    label: this.props.cases,
                    data: this.props.data,
                    backgroundColor: 'white',
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
<<<<<<< HEAD
        this.myChart.data.datasets[0].data = this.props.data;
        this.myChart.data.datasets[0].backgroundColor = Array(this.props.data.length).fill('white');
=======
        if(this.props.data){
            this.myChart.data.datasets[0].data = this.props.data;
            this.myChart.data.datasets[0].backgroundColor = Array(this.props.data.length).fill('white');
        }
>>>>>>> f2230823e1acbe36d07d109a86ff735fec6a07e1
        this.myChart.data.datasets[0].label = this.props.cases;
        this.myChart.update();
    }
}
