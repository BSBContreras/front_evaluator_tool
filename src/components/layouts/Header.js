import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

export default function Header() {
	const useStyles = makeStyles(theme => ({
		root: {
			flexGrow: 1,
		},
		title: {
			flexGrow: 1,
			color: '#FFF'
		},
		AppBar: {
			background: theme.palette.primary
		}
	}));

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.AppBar}>
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						Co-Inspect Tool
					</Typography>
					<Button color="inherit" onClick={() => alert('alert')}>alert</Button>
				</Toolbar>
			</AppBar>
		</div>
	)
}

		
