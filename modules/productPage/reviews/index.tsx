import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserInfo } from '../../../common/types/@appTypes';
import Post from './Post';
import HoverRating from '../Rating';
import { useCurrentProduct } from '../../../common/store/Store';
import { addReview } from '../../../common/store/actions';

type Props = { reviews: string[] };

const Reviews: FC<Props> = ({ reviews }) => {
  const [reviewText, setReviewText] = useState('');
  const dispatch = useDispatch<any>();
  const currentProduct = useCurrentProduct();

  const handleAddReview = (newReview: string) => {
    dispatch(addReview(currentProduct, newReview));
  };

  return (
    <Grid container spacing={4}>
      <Grid item sx={{ mr: 3 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Give your feedback
        </Typography>

        <HoverRating />

        <TextField
          fullWidth
          onChange={e => setReviewText(e.target.value)}
          sx={{ mb: 2, mt: 2, wordWrap: 'wrap' }}
        />
        <Button
          type="submit"
          variant="outlined"
          onClick={() => handleAddReview(reviewText)}
        >
          Submit
        </Button>
      </Grid>
      <Grid item>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          {reviews.map(review => (
            <Box key={review}>
              <Post
                review={review}
                user={{ name: 'riad', username: 'riad@gmail.com' } as UserInfo}
              />
              <Divider variant="inset" component="li" sx={{ mb: 2, mt: 2 }} />
            </Box>
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
