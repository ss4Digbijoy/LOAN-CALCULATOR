import React, { Component } from 'react';
import './Loanf.css';
class LoanForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loanAmount: '',
      interestRate: '',
      loanTerm: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { loanAmount, interestRate, loanTerm } = this.state;
    this.props.onCalculate(parseFloat(loanAmount), parseFloat(interestRate), parseInt(loanTerm));
  };

  render() {
    const { loanAmount, interestRate, loanTerm } = this.state;

    return (
        <div className='form-container'>
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Loan Amount (Rs.):</label>
          <input type="number" name="loanAmount" value={loanAmount} onChange={this.handleChange} required />
        </div>
        <div>
          <label>Interest Rate (%):</label>
          <input type="number" name="interestRate" value={interestRate} onChange={this.handleChange} required />
        </div>
        <div>
          <label>Loan Term (years):</label>
          <input type="number" name="loanTerm" value={loanTerm} onChange={this.handleChange} required />
        </div>
        <button type="submit">Calculate</button>
      </form>
      </div>
    );
  }
}
export  default LoanForm;