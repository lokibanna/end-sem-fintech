
import { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, LinearProgress, Box, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import PlusCircle from '../../components/common/PlusCircle';
import DollarSign from '../../components/common/DollarSign';
import TrendingUp from '../../components/common/TrendingUp';
import AlertTriangle from '../../components/common/AlertTriangle';
import Target from '../../components/common/Target';
import Calendar from '../../components/common/Calendar';
import PieChart from '../../components/common/PieChart';

const SmartBudgetingApp = () => {
  const [budgets, setBudgets] = useState([
    { id: 1, category: 'Food & Dining', limit: 800, spent: 620 },
    { id: 2, category: 'Transportation', limit: 400, spent: 280 },
    { id: 3, category: 'Entertainment', limit: 300, spent: 350 },
    { id: 4, category: 'Shopping', limit: 500, spent: 200 },
    { id: 5, category: 'Bills & Utilities', limit: 1200, spent: 1150 },
  ]);
  const [open, setOpen] = useState(false);
  const [newBudget, setNewBudget] = useState({ category: '', limit: '' });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddBudget = () => {
    if (newBudget.category && newBudget.limit) {
      setBudgets([
        ...budgets,
        {
          id: Date.now(),
          category: newBudget.category,
          limit: parseFloat(newBudget.limit),
          spent: 0,
        },
      ]);
      setNewBudget({ category: '', limit: '' });
      handleClose();
    }
  };

  const getProgressPercentage = (spent, limit) => Math.min((spent / limit) * 100, 100);

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4">Smart Budgeting</Typography>
        <Button variant="contained" onClick={handleClickOpen}>
          Add Budget
        </Button>
      </Box>
      <Grid container spacing={4}>
        {budgets.map((budget) => {
          const percentage = getProgressPercentage(budget.spent, budget.limit);
          const isOverspend = budget.spent > budget.limit;

          return (
            <Grid item xs={12} sm={6} md={4} key={budget.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{budget.category}</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                    <Box sx={{ width: '100%', mr: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={percentage}
                        color={isOverspend ? 'error' : 'primary'}
                      />
                    </Box>
                    <Box sx={{ minWidth: 35 }}>
                      <Typography variant="body2" color="text.secondary">{`${Math.round(
                        percentage
                      )}%`}</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Typography>
                      Spent: ${budget.spent} / ${budget.limit}
                    </Typography>
                    {isOverspend && (
                      <Typography color="error">
                        Overspent by ${budget.spent - budget.limit}
                      </Typography>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a New Budget</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Category"
            fullWidth
            value={newBudget.category}
            onChange={(e) => setNewBudget({ ...newBudget, category: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Limit"
            type="number"
            fullWidth
            value={newBudget.limit}
            onChange={(e) => setNewBudget({ ...newBudget, limit: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddBudget}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default SmartBudgetingApp;
