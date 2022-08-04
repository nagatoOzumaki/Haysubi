import { Box, Container, Grid } from '@mui/material'
import { FC } from 'react'
import Post from './Post'

type Props={review:string[]}

const FeedBack:FC <Props>=({review})=>
      <Container>
        {
        review.map((postText,index)=><Post key={index} postText={postText}/>)
        }
     
    </Container>


export default FeedBack
