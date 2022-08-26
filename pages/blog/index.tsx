import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { NextPage } from 'next';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import ArticleCard from '../../modules/blog/articlesPage/ArticleCard';

type PropTypes = {
  articles: any;
};
const Index: NextPage<PropTypes> = ({ articles }) => (
  <Container>
    <Typography variant="h4" sx={{ p: 4, pl: 0 }}>
      Welcome in Hysubi{`'`}s Blog
    </Typography>
    <Grid container>
      {articles.map((article: any) => (
        <Grid key={article.slug} md={3} m={2} item>
          <ArticleCard article={article} />
        </Grid>
      ))}
    </Grid>
  </Container>
);
export default Index;

export async function getStaticProps() {
  //  get articles from blg directory
  const files = fs.readdirSync(path.join('blog/articles'));

  const articles = files.map(filename => {
    const slug = filename.replace('.md', '');
    // get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('blog/articles', filename),
      'utf-8'
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      articles,
    },
  };
}
