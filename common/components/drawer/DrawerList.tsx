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
      ['/', 'consulting'],
      ['/', 'simulator'],
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
          <Typography sx={{ ml: -4 }} variant="h5">
            {title}
          </Typography>
          <List>
            {subTitles.map(subTitle => (
              <ListItem key={subTitle[0]} disablePadding>
                <NextLink href={subTitle[0]}>
                  <>
                    <ListItemButton>
                      <ListItemText primary={<a>{subTitle[1]}</a>} />
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
