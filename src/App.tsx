import React  from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AppRoutes from './routes/AppRoutes';


function App() {
  return (
    <>
      {/* <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        TaskFlow
      </Typography>

      <Button variant="contained">
        Get Started
      </Button>
    </Container> */}
    <AppRoutes/>
    </>
  )
}

export default App
