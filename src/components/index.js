import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import api from '../services/api';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Divider = () => <hr></hr>

const Evaluation = ({ evaluation }) => {

  const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(1),
      background: theme.palette.secondary.light
    },
    primaryPaper: {
      background: theme.palette.primary.light,
      padding: theme.spacing(2),
      borderRadius: theme.spacing(0, 0, 5, 0)
    },
    secondaryPaper: {
      background: theme.palette.secondary.light,
      padding: theme.spacing(2)
    },
    primary: {
      color: theme.palette.primary.contrastText
    },
    secondary: {
      color: theme.palette.secondary.contrastText 
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.primaryPaper} square elevation={0}>
        <Typography className={classes.primary}>
          {evaluation.name}
        </Typography>
      </Paper>
      <Paper className={classes.secondaryPaper}>
        <Typography className={classes.secondary} variant="subtitle1">
          {evaluation.detail}
        </Typography>
      </Paper>
    </div>
  );
}

export default function EvaluationView() {

  const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(2),
      padding: theme.spacing(1), 
    },
    header: {
      margin: theme.spacing(3, 0, 0, 2),
      color: '#777'
    },
  }));

  const [evaluations, setEvaluations] = useState([]);

  const loadEvaluations = async () => {
    const response = await api.post('/assessments/index.php');
    const { data } = response;
    if(data.status === 'success') {
      setEvaluations(data.docs);
    } else {
      alert('Error on load evaluation');
    }
  }

  useEffect(() => {
    loadEvaluations();
  }, []);

  console.log(evaluations)

  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" className={classes.header}>
        Evaluations
      </Typography>
      <Divider />
      <div className={classes.root}>
        <Grid container>
          {evaluations.map(evaluation => (
            <Grid key={evaluation.id} item sm={4}>
              <Evaluation evaluation={evaluation} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}