import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';

type ListItemType = {
  title: string;
  subTitles: [string, string][];
};

type ListType = ListItemType[];

const ListContent: ListType = [
  {
    title: 'categories',
    subTitles: [
      ['/', 'laptop'],
      ['/', 'bags'],
      ['/', 'mouse'],
      ['/', 'router'],
    ],
  },
  {
    title: 'services',
    subTitles: [
      ['/', 'upgrade and repair'],
      ['/', 'simulator'],
      ['/', 'consulting'],
    ],
  },
  {
    title: 'content',
    subTitles: [
      ['/', 'how to ...'],
      ['/', 'how to '],
      ['/', 'what is'],
    ],
  },
];

function DrawerList() {
  return (
    <Box>
      {ListContent.map(({ title, subTitles }: ListItemType) => (
        <Box key={title}>
          <Typography
            sx={{
              fontWeight: 'bold',
              fontSize: 25,
              backgroundColor: '#F3F9FF',
              color: '#000',
              p: 1,
              textTransform: 'capitalize',
            }}
            variant="h5"
          >
            {title}
          </Typography>
          <List>
            {subTitles.map(subTitle => (
              <ListItem
                key={subTitle[0]}
                sx={{ backgroundColor: '#sss', border: '1px solid #eee' }}
                disablePadding
              >
                <NextLink href={subTitle[0]}>
                  <>
                    <ListItemButton>
                      <ListItemText
                        sx={{ pl: 3 }}
                        primary={<a>{subTitle[1]}</a>}
                      />
                    </ListItemButton>
                  </>
                </NextLink>
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
}

export default DrawerList;
