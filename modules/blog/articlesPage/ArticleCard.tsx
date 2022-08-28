import { Button, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

function ArticleCard({ article }: { article: any }) {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        '&:hover': {
          backgroundColor: '#111',
          color: '#fff',
          padding: 1,
          p: 2,
        },
      }}
    >
      <Typography variant="h6">{article.frontmatter.title}</Typography>
      <Image
        loader={() => article.frontmatter.cover_image}
        alt={article.frontmatter.title}
        src={article.frontmatter.cover_image}
        width={250}
        height={200}
      />
      <Typography variant="body1">{article.frontmatter.description}</Typography>
      <Typography variant="body2" color="green">
        {`${article.frontmatter.author}    ${article.frontmatter.date}`}
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
