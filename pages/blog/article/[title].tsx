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

function Article({ frontmatter, content }: any) {
  return (
    <Container
      maxWidth="xl"
      sx={{ borderLeft: '1px solid #bbb', borderRight: '1px solid #bbb' }}
    >
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', pt: 4, mb: 2 }}
      >
        <div />
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: '#000', color: '#fff' }} aria-label="auhtor">
              {frontmatter.author[0].toUpperCase()}
            </Avatar>
          }
          title={frontmatter.author}
          subheader={<Typography>{frontmatter.date}</Typography>}
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
}

export default Article;

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('blog/articles'));
  const paths = files.map(filename => ({
    params: {
      title: filename.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params }: any) => {
  const { title } = params;
  const markdownWithMeta = fs.readFileSync(
    path.join('blog/articles', `${title}.md`),
    'utf-8'
  );
  // const content = await remark()
  //   .use(html)
  //   .process(fs.readFileSync(`blog/articles/${title}.md`));

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      content: content.toString(),
    },
  };
};
