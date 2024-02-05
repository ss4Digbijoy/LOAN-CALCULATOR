import './App.css';
import LoanForm from './Loanf';
import LoanResult from './LoanR';
import React,{Component} from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthlyPayment: null,
      totalPayment: null,
    };
  }

  calculateLoan = (loanAmount, interestRate, loanTerm) => {
    const monthlyInterestRate = interestRate / 100 / 12;
    const totalPayments = loanTerm * 12;
    const factor = Math.pow(1 + monthlyInterestRate, totalPayments);
    const monthly = (loanAmount * monthlyInterestRate * factor) / (factor - 1);
    this.setState({
      monthlyPayment: monthly.toFixed(2),
      totalPayment: (monthly * totalPayments).toFixed(2),
    });
  };

  render() {
    const { monthlyPayment, totalPayment } = this.state;

    return (
      <div>
      <header className="app-header">
      <div className="container">
        <center><h1>Loan Calculator</h1></center>
      </div>
    </header>
      <div className='app-container'>
        <h1>Loan Calculator</h1>
        <LoanForm onCalculate={this.calculateLoan} />
        {monthlyPayment && totalPayment && <LoanResult monthlyPayment={monthlyPayment} totalPayment={totalPayment} />}
      </div>
      <footer className="app-footer">
        <div className="container">
          <p>&copy; 2024 Loan Calculator App. All rights reserved.</p>
        </div>
      </footer>
      </div>
    );
  }
}

export default App;