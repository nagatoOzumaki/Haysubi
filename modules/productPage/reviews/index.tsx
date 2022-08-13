import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import { Button, Grid, TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { UserInfo } from '../../../common/types/@appTypes';
import Post from './Post';
import HoverRating from '../Rating';

type Props = { reviews: string[] };

const Reviews: FC<Props> = ({ reviews }) => {
  const dispatch = useDispatch();

  // const handleAddReview = () => {
  //   dispatch(addReview({ review }));
  // };

  return (
    <Grid container spacing={4}>
      <Grid item sx={{ mr: 3 }}>
        <form>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Give your feedback
          </Typography>

          <HoverRating />

          <TextField fullWidth sx={{ mb: 2, mt: 2, wordWrap: 'wrap' }} />
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </form>
      </Grid>
      <Grid item>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          {reviews.map(review => (
            <>
              <Post
                review={review}
                user={{ name: 'riad', username: 'riad@gmail.com' } as UserInfo}
              />
              <Divider variant="inset" component="li" sx={{ mb: 2, mt: 2 }} />
            </>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default Reviews;

// import InputEmoji from 'react-input-emoji'

// export default function Example () {
//   const [ text, setText ] = useState('')

//   function handleOnEnter (text) {
//     console.log('enter', text)
//   }

//   return (
//     <InputEmoji
//       value={text}
//       onChange={setText}
//       cleanOnEnter
//       onEnter={handleOnEnter}
//       placeholder="Type a message"
//     />
//   )
// }
