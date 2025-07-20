import React, { useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, ResponsiveContainer } from 'recharts';
import { DollarSign, TrendingUp, TrendingDown, Calendar, CreditCard, Wallet } from 'lucide-react';
import './FinancialDashboard.css';

const FinancialDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  
  // Sample data
  const balance = {
    checking: 5240.50,
    savings: 12800.75,
    credit: -1250.30
  };
  
  const spendingData = [
    { name: 'Food', value: 850, color: '#8884d8' },
    { name: 'Transport', value: 420, color: '#82ca9d' },
    { name: 'Entertainment', value: 320, color: '#ffc658' },
    { name: 'Utilities', value: 280, color: '#ff7300' },
    { name: 'Shopping', value: 540, color: '#8dd1e1' }
  ];
  
  const monthlyData = [
    { month: 'Jan', income: 4500, expenses: 3200 },
    { month: 'Feb', income: 4800, expenses: 3400 },
    { month: 'Mar', income: 4600, expenses: 3100 },
    { month: 'Apr', income: 5000, expenses: 3800 },
    { month: 'May', income: 4900, expenses: 3600 },
    { month: 'Jun', income: 5200, expenses: 3900 }
  ];
  
  const trendData = [
    { day: '1', amount: 2400 },
    { day: '5', amount: 2210 },
    { day: '10', amount: 2290 },
    { day: '15', amount: 2000 },
    { day: '20', amount: 2181 },
    { day: '25', amount: 2500 },
    { day: '30', amount: 2100 }
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        {/* Header */}
        <div className="dashboard-header">
          <h1 className="dashboard-title">Financial Insights</h1>
          <p className="dashboard-subtitle">See your financial health at a glance with our intuitive dashboard</p>
        </div>

        {/* Period Selector */}
        <div className="period-selector">
          <div className="period-buttons">
            <button
              onClick={() => setSelectedPeriod('monthly')}
              className={`period-btn ${selectedPeriod === 'monthly' ? 'period-btn-active' : 'period-btn-inactive'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setSelectedPeriod('yearly')}
              className={`period-btn ${selectedPeriod === 'yearly' ? 'period-btn-active' : 'period-btn-inactive'}`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Balance Cards */}
        <div className="balance-cards">
          <div className="balance-card">
            <div className="balance-card-content">
              <div className="balance-info">
                <p className="balance-label">Checking Account</p>
                <p className="balance-amount">${balance.checking.toLocaleString()}</p>
              </div>
              <div className="balance-icon blue-icon">
                <Wallet className="icon" />
              </div>
            </div>
          </div>
          
          <div className="balance-card">
            <div className="balance-card-content">
              <div className="balance-info">
                <p className="balance-label">Savings Account</p>
                <p className="balance-amount green-text">${balance.savings.toLocaleString()}</p>
              </div>
              <div className="balance-icon green-icon">
                <TrendingUp className="icon" />
              </div>
            </div>
          </div>
          
          <div className="balance-card">
            <div className="balance-card-content">
              <div className="balance-info">
                <p className="balance-label">Credit Card</p>
                <p className="balance-amount red-text">${Math.abs(balance.credit).toLocaleString()}</p>
              </div>
              <div className="balance-icon red-icon">
                <CreditCard className="icon" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="charts-grid">
          {/* Spending Patterns */}
          <div className="chart-card">
            <h2 className="chart-title">Visual Spending Patterns</h2>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={spendingData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {spendingData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}`, 'Amount']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="legend-grid">
              {spendingData.map((item, index) => (
                <div key={index} className="legend-item">
                  <div 
                    className="legend-color" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="legend-text">{item.name}: ${item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Income vs Expenses */}
          <div className="chart-card">
            <h2 className="chart-title">Income vs Expenses</h2>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="income" fill="#10b981" name="Income" />
                  <Bar dataKey="expenses" fill="#ef4444" name="Expenses" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Balance Trend and Summary */}
        <div className="bottom-grid">
          {/* Balance Tracking */}
          <div className="balance-tracking-card">
            <h2 className="chart-title">Balance Tracking</h2>
            <div className="balance-chart">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value}`, 'Balance']} />
                  <Line 
                    type="monotone" 
                    dataKey="amount" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="stats-card">
            <h2 className="chart-title">Quick Stats</h2>
            <div className="stats-list">
              <div className="stat-item gray-bg">
                <span className="stat-label">Total Income</span>
                <span className="stat-value green-text">$29,000</span>
              </div>
              <div className="stat-item gray-bg">
                <span className="stat-label">Total Expenses</span>
                <span className="stat-value red-text">$21,100</span>
              </div>
              <div className="stat-item blue-bg">
                <span className="stat-label">Net Savings</span>
                <span className="stat-value blue-text">$7,900</span>
              </div>
              <div className="stat-item gray-bg">
                <span className="stat-label">Avg. Monthly</span>
                <span className="stat-value">$1,317</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="features-section">
          <h2 className="features-title">Dashboard Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon blue-icon">
                <DollarSign className="feature-icon-svg" />
              </div>
              <h3 className="feature-title">Interactive Dashboard</h3>
              <p className="feature-description">Real-time financial overview with interactive charts</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon green-icon">
                <TrendingUp className="feature-icon-svg" />
              </div>
              <h3 className="feature-title">Visual Spending Patterns</h3>
              <p className="feature-description">See where your money goes with colorful charts</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon purple-icon">
                <Calendar className="feature-icon-svg" />
              </div>
              <h3 className="feature-title">Monthly/Yearly Reports</h3>
              <p className="feature-description">Detailed financial reports for any period</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon orange-icon">
                <Wallet className="feature-icon-svg" />
              </div>
              <h3 className="feature-title">Balance Tracking</h3>
              <p className="feature-description">Monitor all your accounts in one place</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialDashboard;