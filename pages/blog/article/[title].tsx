import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {
  Avatar,
  Box,
  CardHeader,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { marked } from 'marked';
import { GetStaticPaths, NextPage } from 'next';
import {
  BookmarkAddedOutlined,
  BookmarkAddOutlined,
} from '@mui/icons-material';
import { useState } from 'react';
import ArticleCard from '../../../modules/blog/articlesPage/ArticleCard';
import ArticleActions from '../../../modules/blog/articlesPage/ArticleActions';

const Article: NextPage<any> = ({ frontmatter, content }) => {
  const [isAddedToBookMark, setIsAddedToBookMark] = useState(false);
  const handleToggleAddBookMark = () =>
    isAddedToBookMark
      ? setIsAddedToBookMark(false)
      : setIsAddedToBookMark(true);
  return (
    <Container
      maxWidth="xl"
      sx={{
        borderLeft: '1px solid #bbb',
        borderRight: '1px solid #bbb',
        minHeight: 1000,
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: 4,
          ml: 10,
          mb: 5,
        }}
      >
        <IconButton onClick={handleToggleAddBookMark}>
          {isAddedToBookMark ? (
            <BookmarkAddedOutlined color="primary" />
          ) : (
            <BookmarkAddOutlined />
          )}
        </IconButton>

        <Box
          sx={{
            position: 'absolute',
            right: 100,
          }}
        >
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  bgcolor: '#000',
                  color: '#fff',
                  border: '1px solid #000',
                }}
                aria-label="auhtor"
              >
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
                }}
              >
                {frontmatter.date}
              </Typography>
            }
          />
        </Box>
      </Box>
      <Divider />

      {!frontmatter.noTitle ? (
        <Typography sx={{ mt: 2, direction: 'rtl' }} variant="h2">
          {frontmatter.title}
        </Typography>
      ) : null}

      <Container
        sx={{ direction: 'rtl' }}
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      ></Container>
      <Box sx={{ position: 'fixed', bottom: 0, right: 0 }}>
        <ArticleActions />
      </Box>
      <Box sx={{ direction: 'rtl' }}>
        <Typography>Bibliographie:</Typography>
        <List>
          <ListItem>
            <Link href="#">1-ressource one</Link>
          </ListItem>
          <ListItem>
            <Link>2-ressource two</Link>
          </ListItem>
          <ListItem>
            {' '}
            <Link>3-ressource three</Link>
          </ListItem>
        </List>
      </Box>

      <Divider />
      <Box sx={{ m: 3, direction: 'rtl' }}>
        <Typography sx={{ mb: 1 }}>related articles</Typography>
        <Grid spacing={2} pb={3} container>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(article => (
            <Grid key={article} md={2.4} item>
              <ArticleCard
                article={{
                  frontmatter: {
                    title: 'related article',
                    date: '28 August 2022',
                    description:
                      'this another article related to the one above',
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

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
