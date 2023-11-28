import React from 'react'
import { Box, Container, Grid } from '@mui/material'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { FormControl, FormLabel, Stack } from '@mui/material';

const handleSubmit = () => {
  console.log('I am available')
}

const TheFooter = () => {
  return (
    <Box style={{ marginTop: '16px', opacity: '.7', backgroundColor: "tan" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={5}>
          <h2>Drop a Message</h2>
          <form onSubmit={handleSubmit} style={{ margin: '10px 0', padding: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.2)', border: 'white', borderRadius: '10px'}}>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                  <TextField
                    type="text"
                    variant='outlined'
                    color='success'
                    label="Full Name"
                    // onChange={e => setFirstName(e.target.value)}
                    // value={firstName}
                    fullWidth
                    required
                  />
                  <TextField
                    type="email"
                    variant='outlined'
                    color='success'
                    label="Email"
                    // onChange={e => setEmail(e.target.value)}
                    // value={email}
                    fullWidth
                    required
                />
                </Stack>
                <TextField
                    type="email"
                    variant='outlined'
                    color='secondary'
                    label="Send a message"
                    multiline
                    rows={4}
                    // onChange={e => setEmail(e.target.value)}
                    // value={email}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                
                <Button 
                  sx={{
                    
                  }}
                  variant="contained" 
                  color="secondary" 
                  type="submit" 
                  endIcon={<SendIcon />}
                >
                  Send
                </Button>
            </form>
          </Grid>
          <Grid item xs={4}>
            <h2>Education</h2>
            
          </Grid>
          <Grid item xs={2}>ssssssss</Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          backgroundColor: 'grey',
          opacity: '.7',
          padding: '15px',
          marginTop: '10px',
          textAlign: 'center',
          // color: 'white',
          fontWeight: 'bold'
        }}
      >
        Developed By Jude - 2023
      </Box>
    </Box>
  )
}

export default TheFooter