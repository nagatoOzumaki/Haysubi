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
    title: 'services',
    subTitles: [
      ['/', 'maintenance'],
      ['/', 'upgrade'],
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
  {
    title: 'categories',
    subTitles: [
      ['/', 'laptop'],
      ['/', 'bags'],
      ['/', 'mouse'],
      ['/', 'router'],
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
