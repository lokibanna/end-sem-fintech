import React, { useState } from 'react';
import './EasyTracking.css';

const EasyTracking = () => {
  // State to store all transactions
  const [transactions, setTransactions] = useState([]);
  
  // State for the form inputs
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('expense'); // 'income' or 'expense'
  
  // Function to add a new transaction
  const addTransaction = () => {
    // Check if fields are filled
    if (!amount || !description) {
      alert('Please fill in all fields!');
      return;
    }

    // Create new transaction object
    const newTransaction = {
      id: Date.now(), // Simple ID using timestamp
      amount: parseFloat(amount),
      description: description,
      type: type,
      date: new Date().toLocaleDateString()
    };

    // Add new transaction to the beginning of the list
    setTransactions([newTransaction, ...transactions]);
    
    // Clear the form after adding
    setAmount('');
    setDescription('');
  };

  // Function to delete a transaction
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  return (
    <div className="easy-tracking">
      <div className="container">
        {/* Header */}
        <div className="header">
          <h1>💰 Easy Tracking</h1>
          <p>Quickly add your income and expenses with our simple interface</p>
        </div>

        {/* Add Transaction Form */}
        <div className="form-container">
          <h2>Add New Transaction</h2>
          
          {/* Transaction Type Toggle */}
          <div className="type-toggle">
            <button
              className={`toggle-btn ${type === 'expense' ? 'active expense' : ''}`}
              onClick={() => setType('expense')}
            >
              💸 Expense
            </button>
            <button
              className={`toggle-btn ${type === 'income' ? 'active income' : ''}`}
              onClick={() => setType('income')}
            >
              💰 Income
            </button>
          </div>

          {/* Amount Input */}
          <div className="input-group">
            <label>Amount ($)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="input-field"
            />
          </div>

          {/* Description Input */}
          <div className="input-group">
            <label>Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What was this for?"
              className="input-field"
            />
          </div>

          {/* Add Button */}
          <button onClick={addTransaction} className="add-btn">
            ➕ Add Transaction
          </button>
        </div>

        {/* Transactions List */}
        <div className="transactions-container">
          <h2>Your Transactions</h2>
          
          {transactions.length === 0 ? (
            <div className="no-transactions">
              <p>📝 No transactions yet!</p>
              <p>Add your first transaction above to get started.</p>
            </div>
          ) : (
            <div className="transactions-list">
              {transactions.map(transaction => (
                <div key={transaction.id} className={`transaction-item ${transaction.type}`}>
                  <div className="transaction-info">
                    <div className="transaction-header">
                      <span className="transaction-description">
                        {transaction.description}
                      </span>
                      <span className="transaction-amount">
                        {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
                      </span>
                    </div>
                    <div className="transaction-details">
                      <span className="transaction-type">
                        {transaction.type === 'income' ? '💰 Income' : '💸 Expense'}
                      </span>
                      <span className="transaction-date">{transaction.date}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => deleteTransaction(transaction.id)}
                    className="delete-btn"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Summary */}
        {transactions.length > 0 && (
          <div className="summary">
            <div className="summary-item">
              <span className="summary-label">Total Transactions:</span>
              <span className="summary-value">{transactions.length}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Total Income:</span>
              <span className="summary-value income">
                +${transactions
                  .filter(t => t.type === 'income')
                  .reduce((sum, t) => sum + t.amount, 0)
                  .toFixed(2)}
              </span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Total Expenses:</span>
              <span className="summary-value expense">
                -${transactions
                  .filter(t => t.type === 'expense')
                  .reduce((sum, t) => sum + t.amount, 0)
                  .toFixed(2)}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EasyTracking;