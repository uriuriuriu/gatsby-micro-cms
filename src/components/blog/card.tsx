import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby-theme-material-ui';
import { default as MuiCard } from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    boxShadow: 'none',
    '&:hover': {
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.08)',
    },
  },
  publishedAt: {
    fontSize: 12,
  },
  content: { maxHeight: '200px', overflowY: 'hidden', opacity: 0.4 },
  pos: {
    marginBottom: 12,
  },
});

interface Props {
  blogsId: string | null;
  title: string | null;
  publishedAt: string | null;
  content: string | null;
  writer: { name: string | null } | null;
}

const Card: React.FC<Props> = props => {
  const { blogsId, title, writer, content, publishedAt } = props;
  const classes = useStyles();

  return (
    <MuiCard className={classes.root}>
      <CardContent>
        <Typography
          className={classes.publishedAt}
          color="textSecondary"
          gutterBottom
        >
          {publishedAt}
        </Typography>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography color="textSecondary">{writer?.name}</Typography>
        <Typography
          variant="body2"
          component="p"
          className={classes.content}
          dangerouslySetInnerHTML={{ __html: content ?? '' }}
        ></Typography>
      </CardContent>
      <CardActions>
        <Link to={`/blog/${blogsId}/`}>Learn More</Link>
      </CardActions>
    </MuiCard>
  );
};

export default Card;
