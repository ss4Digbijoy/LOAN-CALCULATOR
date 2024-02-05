import React, { Component } from 'react';
import './LoanR.css';
class LoanResult extends Component {
  constructor(props){
    super(props);
}
  render() {
    const { monthlyPayment, totalPayment } = this.props;

    return (
      <div className='result-container'>
        <h2>Loan Result</h2>
        <p>Monthly Payment: Rs.{monthlyPayment}</p>
        <p>Total Payment: Rs.{totalPayment}</p>
      </div>
    );
  }
}

export default LoanResult;
