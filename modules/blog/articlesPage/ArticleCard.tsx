import { Button, Paper, Typography } from '@mui/material';
import Link from 'next/link';

function ArticleCard({ article }: { article: any }) {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6">{article.frontmatter.title}</Typography>
      <Typography variant="body1">{article.frontmatter.description}</Typography>
      <Typography variant="body2" color="green">
        {article.frontmatter.author} {`        `}
        {article.frontmatter.date}
      </Typography>{' '}
      <Link href={`/blog/article/${article.frontmatter.title}`}>
        <a>
          <Button sx={{ mt: 3 }} variant="contained" color="primary">
            read more
          </Button>
        </a>
      </Link>
    </Paper>
  );
}

export default ArticleCard;
