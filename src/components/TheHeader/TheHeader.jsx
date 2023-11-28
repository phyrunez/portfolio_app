import { useState } from 'react'
import { Box, Container, Typography, Tabs, Tab } from '@mui/material'
import { motion, animatePresence } from "framer-motion"
import { PropTypes } from '@mui/material'
import Logo from '../../assets/LogoMakr-2nUsGY.png'
import Jude from '../../assets/jude.png'
import ReactTypingEffect from 'react-typing-effect';

import styles from '../../styles/header.module.css'

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const TheHeader = () => {
    const [active, setActive] = useState(false);
    const [activePage, setActivePage] = useState('');
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <div>
    <Box
        className={styles.wrapper}
        sx={{
            // position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            background: { xs: 'rgba(0, 34, 25, 0.824)' },
            color: 'white'
        }}
    >
        <Box
            sx={{
                display: 'flex'
            }}
        >
            <img src={Logo} alt='logo' width='50' height='50' />
            <span style={{ textTransform: 'uppercase', margin: "30px 0 10px 10px"}}>Portfolio</span>
        </Box>
        <Box
            sx={{
                float: 'right',
                marginTop: '10px'
            }}
        >
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons={false}
                sx={{
                    '& .MuiTabs-indicator': { backgroundColor: 'tan' },
                    '& .MuiTab-root': { color: 'white', textTransform: 'uppercase' },
                    '& .Mui-selected': { color: 'tan' },
                }}
                aria-label="scrollable prevent tabs example"
            >
                <Tab label="Home" {...a11yProps(0)} />
                <Tab label="Skills" {...a11yProps(1)} />
                <Tab label="Experience" {...a11yProps(2)} />
                <Tab label="Projects" {...a11yProps(3)} />
            </Tabs>
        </Box>
        
    </Box>
    <Box
        sx={{
            // background: { xs: 'rgba(0, 34, 25, 0.824)' },
            background: { xs: 'tan' },
            // opacity: '.5'
        }}
    >
    <Container 
    className={styles.wrapper_container}
    sx={{
        display: 'flex',    
    }}
>
    <Box
        sx={{
           position: 'relative',
           display: 'flex',
           flexDirection: 'column',
           width: '100%',
           marginTop: '59px'
        }}
    >  
        <ReactTypingEffect
            text={[
            "   Hi, I'm Jude",
            'Software Frontend Developer',
            ]}
            cursorRenderer={(cursor) => <h1>{cursor}</h1>}
            className={styles.typing_text}
            speed={50}
            eraseSpeed={40}
            eraseDelay={1200}
            typingDelay={500}
            displayTextRenderer={(text, i) => {
                return (
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: '600',
                            fontSize: { xs: '20px', md: '38px' },
                            lineHeight: { xs: '37px', md: '45px' },
                            textAlign: { xs: 'center', md: 'justify' },
                            color: ' #FFFFFF',

                            alignItems: { xs: 'center', md: 'flex-start' },
                            justifyContent: 'center',
                            width: { xs: '100%', md: '445px', lg: '632px' },
                            height: { xs: '100%', md: 'auto' },
                           
                            padding: { xs: '2rem', md: '0rem' },
                        }}
                    >
                        {text.split('').map((char, i) => {
                            const key = `${i}`;
                            return (
                            <span
                                key={key}
                            >
                                {char}
                            </span>
                            );
                        })}
                    </Typography>
                );
            }}
        />
        <Typography
            //   className={styles.shop__header__text}
            variant="h3"
            sx={{
            fontWeight: '600',
            fontSize: { xs: '20px', md: '38px' },
            lineHeight: { xs: '37px', md: '45px' },
            textAlign: { xs: 'center', md: 'justify' },
            color: { xs: ' white', md: 'grey' },
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            justifyContent: 'center',
            width: { xs: '100%', md: '445px', lg: '632px' },
            height: { xs: '100%', md: 'auto' },
            background: { xs: ' rgba(0, 34, 25, 0.824)', md: 'none' },
            padding: { xs: '2rem', md: '0rem' },
            }}
        >
            Hi, I'm Jude
        </Typography>
        <Typography
            variant="p"
            className='animated__animated animated__hinge'
            sx={{
            fontWeight: '400',
            fontSize: { xs: '16px', md: '24px' },
            lineHeight: { xs: '33px' },
            textAlign: { xs: 'center', md: 'justify' },
            color: { xs: ' white', md: 'grey' },
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            justifyContent: 'center',
            width: { xs: '100%', md: '445px', lg: '632px' },
            height: { xs: '100%', md: 'auto' },
            background: { xs: ' rgba(0, 34, 25, 0.824)', md: 'none' },
            padding: { xs: '5rem', md: '0rem' },
            }}
        >
            {' '}
            Software Frontend Developer 
        </Typography><br />
        <Typography
            variant="p"
            sx={{
                fontWeight: '400',
                fontSize: { xs: '12px', md: '19px' },
                lineHeight: { xs: '33px' },
                textAlign: { xs: 'center', md: 'justify' },
                color: { xs: ' white', md: 'grey' },
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' },
                justifyContent: 'center',
                width: { xs: '100%', md: '400px', lg: '632px' },
                height: { xs: '100%', md: 'auto' },
                background: { xs: ' rgba(0, 34, 25, 0.824)', md: 'none' },
                padding: { xs: '5rem', md: '0rem' },
                marginBottom: '20px'
            }}
        >
            Result driven, motivated and self-taught JavaScript developer with demonstrated skills in building, 
            maintaining and improving web applications that are efficient and scalable.
        </Typography>
    </Box>
    <Box 
        className={styles.header_img}
        sx={{ 
            marginTop: '30px',
            marginBottom: '10px',
        }}
    >
        <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            
            transition={{
                duration: 0.8,
                delay: 0.9,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        ><img src={Jude} alt="jude" width='400' height='380' /></motion.div>
        
    </Box>
</Container>
</Box>
    </div>
  )
}

export default TheHeader