import { useEffect } from 'react';
import { Box } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { infoToastMessage } from '../utils/utility'
import 'react-toastify/dist/ReactToastify.css';
import TheHeader from './TheHeader/TheHeader'
import TheFooter from './TheFooter/TheFooter'
import Skills from './skills/Skills'
import Experience from './Experience/Experience'
import Projects from './Projects/Projects'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
 
const steps = [
    {
        id: '0',
        message: 'Hey, Welcome',
        trigger: '1',
    }, {
        id: '1',
        message: 'Please what is your name',
        trigger: '2'
    }, {
        id: '2',
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: " hi {previousValue}, how can I help you?",
        trigger: 4
    }, {
        id: '4',
        user: true,
        trigger: 5
    }, {
        id: '5',
        message: "Thank you for reaching out, please send me a message using the form field provided at the footer",
        end: true
    }
];
 
// Creating our own theme
const theme = {
    background: 'tan',
    headerBgColor: 'rgba(0, 34, 25, 0.824)',
    headerFontSize: '20px',
    botBubbleColor: 'rgba(0, 34, 25, 0.824)',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
};
 
// Set some properties of the bot
const config = {
    floating: true,
};

const Backgroundcomp = () => {
    useEffect(() => {
        infoToastMessage()
    }, [ToastContainer])

    return (
        <Box
            sx={{
                width: '100% !important'
            }}
        >
            <TheHeader />
            <Skills />
            <Experience />
            <Projects />
            <TheFooter />
            <ThemeProvider theme={theme}>
                <ChatBot
 
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="JudeBot"
                    speechSynthesis={{ enable: true, lang: 'en' }}
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider>
            <ToastContainer />
        </Box>
    )
}

export default Backgroundcomp