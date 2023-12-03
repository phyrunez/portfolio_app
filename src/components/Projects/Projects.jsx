import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Container, Box, Link, Tooltip } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { projectsData } from '../../utils/data'
import { Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Projects() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box style={{ background: '#f4f4f4', marginTop: '65px' }}>
    <Container>
        <Swiper
            modules={[Pagination, Scrollbar, A11y]}
            spaceBetween={5}
            slidesPerView={3}
            
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true, color: 'black' }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            // style={{ marginBottom: '100px'}}
            //Just checking
            className='hei'
        >
            {projectsData.map(project => (
                <SwiperSlide key={project.id} style={{ marginBottom: '150px !important' }}>
                    <Card sx={{ maxWidth: 300, margin: '170px 0 100px 0', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)', }}>
                        <CardHeader
                            avatar={
                                <Avatar style={{ backgroundColor: project.bgcolor  }} aria-label="recipe">
                                    { project.logo }
                                </Avatar>
                            }
                            action={
                                <Tooltip title={project.tooltip_title}>
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                </Tooltip>
                            }
                            title={ project.project_name }
                            subheader={ project.date }
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={ project.img }
                            // image={ project.img }
                            alt="LinkUs Stores"
                        />
                        
                        <CardContent>
                            <Typography variant="body2" color="text.secondary" style={{ fontSize: '12px' }}>
                                { project.description }
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                            <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Link href={ project.more } style={{ cursor: 'pointer', fontSize: '12px', textAlign: 'center' }}>
                                    { project.more }
                                </Link> 
                            </CardContent>
                        </Collapse>
                    </Card>
                </SwiperSlide>
            ))}
        </Swiper>
    </Container>
    </Box> 
  );
}