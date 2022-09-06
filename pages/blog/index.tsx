import {
  Box,
  createTheme,
  Grid,
  Tab,
  Tabs,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { NextPage } from 'next';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { SyntheticEvent, useState } from 'react';
import ArticleCard from '../../modules/blog/articlesPage/ArticleCard';

const theme = createTheme({
  palette: {
    primary: {
      main: '#09f',
    },
  },
});

type PropTypes = {
  articles: any;
};
const Index: NextPage<PropTypes> = ({ articles }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ direction: 'rtl', pl: 4, pr: 4 }}>
        <Typography variant="h4" sx={{ p: 3, pl: 0, fontSize: { xs: 20 } }}>
          Welcome in Hysubi{`'`}s Blog
        </Typography>
        <Tabs
          sx={{ mb: 2 }}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          indicatorColor="primary"
          scrollButtons="auto"
          aria-label="scrollable categories tab"
        >
          <Tab label="All" />
          <Tab label="category One" />
          <Tab label="category Two" />
          <Tab label="category Three" />
          <Tab label="category Four" />
          <Tab label="category Five" />
          <Tab label="category Six" />
          <Tab label="category Seven" />
        </Tabs>
        <Grid spacing={2} pb={3} container>
          {articles.map((article: any) => (
            <Grid key={article.slug} xs={12} sm={6} md={3.8} xl={2.4} item>
              <ArticleCard article={article} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};
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
