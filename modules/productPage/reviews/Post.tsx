import { Grid, Typography } from '@mui/material';

function Post({ postText }: { postText: string }) {
  return (
    <Grid container sx={{ p: 2 }}>
      <Grid item>
        <Typography variant="body1">{postText}</Typography>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
}

export default Post;
