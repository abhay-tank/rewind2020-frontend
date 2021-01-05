import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class Chart extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="chart">
        <Bar
          data={this.props.chartData}
          height={500}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            offsetGridLines: true,
            scales: {
              xAxes: [
                {
                  maxBarThickness: 30,
                },
              ],
            },
          }}
        />
      </div>
    );
  }
}

export default Chart;
