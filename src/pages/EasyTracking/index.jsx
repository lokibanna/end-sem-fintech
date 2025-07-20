
import { useState } from 'react';
import { Grid, Card, CardContent, Typography, TextField, Button, Box, ToggleButtonGroup, ToggleButton } from '@mui/material';

const EasyTracking = () => {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('expense');

  const addTransaction = () => {
    if (!amount || !description) {
      alert('Please fill in all fields!');
      return;
    }

    const newTransaction = {
      id: Date.now(),
      amount: parseFloat(amount),
      description: description,
      type: type,
      date: new Date().toLocaleDateString(),
    };

    setTransactions([newTransaction, ...transactions]);
    setAmount('');
    setDescription('');
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)
    .toFixed(2);

  const totalExpenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)
    .toFixed(2);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Add New Transaction
            </Typography>
            <Box sx={{ mt: 3 }}>
              <ToggleButtonGroup
                value={type}
                exclusive
                onChange={(e, newType) => setType(newType)}
                fullWidth
              >
                <ToggleButton value="expense">Expense</ToggleButton>
                <ToggleButton value="income">Income</ToggleButton>
              </ToggleButtonGroup>
            </Box>
            <Box sx={{ mt: 3 }}>
              <TextField
                label="Amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                fullWidth
              />
            </Box>
            <Box sx={{ mt: 3 }}>
              <TextField
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
              />
            </Box>
            <Box sx={{ mt: 3 }}>
              <Button variant="contained" color="primary" onClick={addTransaction} fullWidth>
                Add Transaction
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Transactions
            </Typography>
            <Box sx={{ mt: 3 }}>
              {transactions.length === 0 ? (
                <Typography>No transactions yet.</Typography>
              ) : (
                transactions.map((transaction) => (
                  <Card key={transaction.id} sx={{ mb: 2 }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h6">{transaction.description}</Typography>
                        <Typography
                          variant="h6"
                          color={transaction.type === 'income' ? 'success.main' : 'error.main'}
                        >
                          {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                        <Typography variant="caption">{transaction.date}</Typography>
                        <Button size="small" onClick={() => deleteTransaction(transaction.id)}>
                          Delete
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                ))
              )}
            </Box>
            <Box sx={{ mt: 3, p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
              <Typography variant="h6">Summary</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                <Typography>Total Income:</Typography>
                <Typography color="success.main">+${totalIncome}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>Total Expenses:</Typography>
                <Typography color="error.main">-${totalExpenses}</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default EasyTracking;
