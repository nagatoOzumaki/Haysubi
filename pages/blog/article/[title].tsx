import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {
  Avatar,
  Box,
  CardHeader,
  Container,
  Divider,
  Typography,
} from '@mui/material';
import { marked } from 'marked';
import { GetStaticPaths, NextPage } from 'next';

const Article: NextPage<any> = ({ frontmatter, content }) => (
  <Container
    maxWidth="xl"
    sx={{
      borderLeft: '1px solid #bbb',
      borderRight: '1px solid #bbb',
      minHeight: 1000,
    }}
  >
    <Box
      sx={{ display: 'flex', justifyContent: 'space-between', pt: 4, mb: 2 }}
    >
      <div />
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#000', color: '#fff' }} aria-label="auhtor">
            <Typography>{frontmatter.author[0].toUpperCase()}</Typography>
          </Avatar>
        }
        title={
          <Typography sx={{ fontSize: 15, color: '#03f' }}>
            {frontmatter.author.toUpperCase()}
          </Typography>
        }
        subheader={
          <Typography
            sx={{
              fontWeight: 'bold',
              fontSize: 12,
              backgroundColor: '#bbb',
              p: '3px',
            }}
          >
            {frontmatter.date}
          </Typography>
        }
      />
    </Box>
    <Divider />

    <Typography sx={{ mt: 2 }} variant="h2">
      {frontmatter.title}
    </Typography>

    <Container
      dangerouslySetInnerHTML={{ __html: marked(content) }}
    ></Container>
  </Container>
);

export default Article;

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join('blog/articles'));
  const paths = files.map(filename => ({
    params: {
      title: filename.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
};
export const getStaticProps = async ({ params }: any) => {
  const { title } = params;
  // read markdown file with meta data
  const markdownWithMeta = fs.readFileSync(
    path.join('blog/articles', `${title}.md`),
    'utf-8'
  );
  // desctructering metadat(in frontmatter) and the article content (content)
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      content: content.toString(),
    },
  };
};
