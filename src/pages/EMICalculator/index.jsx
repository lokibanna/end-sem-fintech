
import { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Slider, Box } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);
  const [emi, setEmi] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 12 / 100;
    const tenure = parseFloat(loanTenure) * 12;

    if (principal > 0 && rate > 0 && tenure > 0) {
      const emiAmount = (principal * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
      const totalPayment = emiAmount * tenure;
      const totalInterestAmount = totalPayment - principal;

      setEmi(Math.round(emiAmount));
      setTotalAmount(Math.round(totalPayment));
      setTotalInterest(Math.round(totalInterestAmount));
    }
  };

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTenure]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const pieData = [
    { name: 'Principal', value: loanAmount },
    { name: 'Interest', value: totalInterest },
  ];

  const COLORS = ['#1976d2', '#dc004e'];

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              EMI Calculator
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography gutterBottom>Loan Amount</Typography>
              <Slider
                value={loanAmount}
                onChange={(e, newValue) => setLoanAmount(newValue)}
                aria-labelledby="loan-amount-slider"
                valueLabelDisplay="auto"
                min={100000}
                max={10000000}
                step={100000}
              />
              <Typography align="right">{formatCurrency(loanAmount)}</Typography>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Typography gutterBottom>Interest Rate (% p.a.)</Typography>
              <Slider
                value={interestRate}
                onChange={(e, newValue) => setInterestRate(newValue)}
                aria-labelledby="interest-rate-slider"
                valueLabelDisplay="auto"
                min={5}
                max={20}
                step={0.1}
              />
              <Typography align="right">{interestRate}%</Typography>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Typography gutterBottom>Loan Tenure (Years)</Typography>
              <Slider
                value={loanTenure}
                onChange={(e, newValue) => setLoanTenure(newValue)}
                aria-labelledby="loan-tenure-slider"
                valueLabelDisplay="auto"
                min={1}
                max={30}
                step={1}
              />
              <Typography align="right">{loanTenure} years</Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Loan Breakdown
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
              <PieChart width={300} height={300}>
                <Pie
                  data={pieData}
                  cx={150}
                  cy={150}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => formatCurrency(value)} />
                <Legend />
              </PieChart>
            </Box>
            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Typography variant="h6">Monthly EMI: {formatCurrency(emi)}</Typography>
              <Typography>Total Amount Payable: {formatCurrency(totalAmount)}</Typography>
              <Typography>Total Interest Payable: {formatCurrency(totalInterest)}</Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default EMICalculator;
