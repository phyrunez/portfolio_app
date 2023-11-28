import React from 'react'
import { Box, Container, Link, Typography, Tab } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import backgroundVideo from '../../assets/vid.mp4';
import styles from '../../styles/header.module.css';
import { experiData } from '../../utils/data'

const Experience = () => {
  return (
    <div>
        <Box
            sx={{
                marginTop: '65px',
                height: '300px'
            }}
        >
            <video autoPlay loop muted id={styles.background_video}>
                <source src={backgroundVideo} type='video/mp4' />
            </video>

            <Container
                sx={{
                    
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 'bold',
                        margin: '20px 0',
                        color: 'orange',
                        marginTop: '30px',
                        opacity: '.5'
                    }}
                >
                    Experience
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
            
                    {experiData.map(d => (
                        <Box
                            sx={{
                                // background: '#54626F',
                                background: 'white',
                                borderRadius: '0 15px 0 15px',
                                height: '200px',
                                width: '520px',
                                margin: '30px 0 10px 0',
                                opacity: '.5',
                                display: 'flex',
                                justifyContent: 'space-around'
                            }}
                        >
                            <Typography
                                variant="p"
                                sx={{
                                    color: 'black',
                                    fontWeight: 'bold',
                                    padding: '10px 0 0 10px'
                                }}
                            >
                                { d.duration }
                            </Typography>
                            
                            <Box
                                sx={{
                                    width: '100%',
                                    paddingTop: '10px'
                                }}
                            >
                                <Typography
                                    variant="p"
                                    sx={{
                                        color: 'black',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    { d.job_title }, { d.company }.
                                </Typography><br />
                                <Typography
                                    variant="h3"
                                    sx={{
                                        marginTop: '15px',
                                        fontSize: '13px',
                                        lineHeight: '22px',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    { d.description }
                                </Typography>
                                <Stack direction="row" spacing={1} style={{ marginTop: '13px',  width: "62px" }}>
                                    {d.stack.map(s => (
                                        <Tooltip title={s}>
                                            <Chip label={s} style={{ cursor: 'pointer', background: "orange", color: "white", fontWeight: "bold" }} />
                                        </Tooltip>
                                    ))}
                                </Stack>
                            </Box>
                        </Box> 
                    ))}
                    
                </Box>
                
                <Box 
                    sx={{
                        justifyContent: 'center',
                        padding: '25px 0',
                        display: 'flex',
                        opacity: '.5',
                        paddingTop: '40px'
                    }}
                >
                    <Link
                        sx={{
                            cursor: 'pointer',
                            textDecoration: 'none',
                            color: 'black',
                            fontWeight: 'bold',
                            background: 'white',
                            padding: '10px',
                            paddingTop: '15px',
                            borderRadius: '20px 0 0 20px'
                        }}
                        href="https://docs.google.com/document/d/1vj5DGQw_dPHm44YJ-nmLtS_3fFxuCVdzWGxZdm9p6v8/edit#heading=h.4prkjmzco10w"
                    >
                        View Full Resume
                    </Link>
                    <Link
                        sx={{
                            cursor: 'pointer',
                            // paddingLeft: '10px',
                            color: 'black',
                            fontWeight: 'bold',
                            background: 'white',
                            padding: '10px 10px 10px 5px',
                            borderRadius: '0 20px 20px 0'
                        }}
                        href="https://docs.google.com/document/d/1vj5DGQw_dPHm44YJ-nmLtS_3fFxuCVdzWGxZdm9p6v8/edit#heading=h.4prkjmzco10w"
                    ><ArrowForwardIcon /></Link>
                </Box>
                
            </Container>
            
        </Box>
    </div>
  )
}

export default Experience