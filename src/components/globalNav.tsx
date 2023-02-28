import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby-theme-material-ui';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import ListIcon from '@material-ui/icons/List';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  titleLink: {
    flexGrow: 1,
    color: '#000',
    textDecoration: 'none',
  },
  title: {
    color: '#000',
    textDecoration: 'none',
  },
  link: { color: '#000', textDecoration: 'none' },
}));

interface Props {
  children?: React.ReactElement;
}

const HideOnScroll: React.FC<Props> = props => {
  const { children } = props;
  const target = typeof window !== `undefined` ? window : undefined;
  const trigger = useScrollTrigger({ target });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const GlobalNav: React.FC<Props> = props => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <div className={classes.root}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <Link to={`/`} className={classes.titleLink}>
                <Typography
                  variant="h6"
                  component="div"
                  className={classes.title}
                >
                  blogs
                </Typography>
              </Link>
              <Link to={`/blogs/`} className={classes.link}>
                <ListIcon />
              </Link>
            </Toolbar>
          </AppBar>
        </div>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};

export default GlobalNav;
