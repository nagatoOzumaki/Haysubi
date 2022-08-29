import {
  Button,
  createTheme,
  Paper,
  ThemeProvider,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const theme = createTheme({
  palette: {
    primary: {
      main: '#09f',
    },
  },
});
function ArticleCard({ article }: { article: any }) {
  return (
    <ThemeProvider theme={theme}>
      {' '}
      <Paper
        elevation={3}
        sx={{
          direction: 'rtl',
          p: 2,
          '&:hover': {
            backgroundColor: '#111',
            color: '#fff',
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: {
              md: 19,
            },
            width: '290px',
            height: { md: 50, xs: 40 },
            whiteSpace: 'wrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {article.frontmatter.title}
        </Typography>
        <Image
          loader={() => article.frontmatter.cover_image}
          alt={article.frontmatter.title}
          src={article.frontmatter.cover_image}
          width={250}
          height={200}
        />
        <Typography
          variant="body1"
          sx={{
            mb: 1,
            width: '250px',
            height: 60,
            whiteSpace: 'wrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {article.frontmatter.description}
        </Typography>
        <Typography variant="body2" color="green">
          {`${article.frontmatter.author}    ${article.frontmatter.date}`}
        </Typography>{' '}
        <Link href={`/blog/article/${article.frontmatter.title}`}>
          <a>
            <Button sx={{ mt: 1 }} variant="contained" color="primary">
              read more
            </Button>
          </a>
        </Link>
      </Paper>
    </ThemeProvider>
  );
}

export default ArticleCard;
