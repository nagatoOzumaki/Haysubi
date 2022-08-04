import { Box, Typography } from '@mui/material'
import React from 'react'

function Post({postText}:{postText:string}) {
  return (
    <Box sx={{p:2}}>
      <Typography variant='body1'>
        {postText}
      </Typography>
    </Box>
  )
}

export default Post
