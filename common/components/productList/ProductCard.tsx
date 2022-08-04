import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FC, useState } from 'react';
import NextLink from 'next/link';
import { StarOutlineOutlined } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';
import { Product } from '../../types/@appTypes';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
type Props={product:Product}
const ProductCard:FC<Props>=({product})=> {
  const [expanded, setExpanded] = useState<boolean>(false);
  const {id}=product||{id:''};
  const {image}=product||{image:['','','']};
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <NextLink href={`/product/${id}`} passHref>
      <Card
        elevation={2}
        sx={{
          backgroundColor: 'rgba(255,255,255,1)',
          p: 2,
          pb:0,
          height:'100%'
        }}
      >
        <CardMedia
          component="img"
          height="194"
          image={`${image[0]}`}
          alt="Paella dish"
        />
      
          <Typography variant="h6" color="text.secondary">
            {product?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product?.description}
          </Typography>

           <Typography paragraph>
             {product?.categories}
           </Typography>
          <Grid sx={{alignItems:'center',gap:5}} container>
           <Grid item> 
           <Typography paragraph>
                {product?.price}
           </Typography>
          </Grid>
          <Grid item >
         <Grid container>
         <Grid item>
           <Typography paragraph>
                {product?.rating}
           </Typography>
           </Grid>
           
           <Grid item>
           <StarOutlineOutlined/>
           </Grid>
         </Grid>
          </Grid>
          </Grid>
         
        
          
      </Card>
    </NextLink>
  );
}

export default ProductCard;
