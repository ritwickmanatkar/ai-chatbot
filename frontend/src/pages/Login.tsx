import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import CustomizedInput from '../components/shared/CustomizedInput';
import { IoIosLogIn } from 'react-icons/io';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

// This function handles the 'onClick' of the submit button. The information is extracted for later use in the backend. 
const Login = () => {
  const auth = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    
    // console.log(email, password)

    try {
      toast.loading("Signing In ", {id: 'login'});
      await auth?.login(email, password);
      toast.success("Signed In Successfully", {id: 'login'});
    } catch (error) {
      console.log(error);
      toast.error("Sign in Fail", {id: 'login'});
    }
  };

  return (
    <Box width={'100%'} height={'100%'} display='flex' flex={1}>
      <Box padding={8} mt={8} justifyContent={'center'} display={{md:'flex', sm: "none", xs: "none"}}>
        <img src='logic_pic.png' alt='By: StarryAI' style={{width: "400px"}} />
      </Box>
      <Box display={'flex'} flex={{ xs: 1, md: 0.5 }} justifyContent={'center'} alignItems={'center'} padding={2} ml={'auto'} mt={16}>

        <form style={{margin: 'auto', padding: "30px", boxShadow: "10px 10px 20px #000", borderRadius: "10px", border: "none"}} onSubmit={handleSubmit}>
          <Box sx={{display: 'flex', flexDirection: " column", justifyContent: "center"}}>
            <Typography variant='h4' textAlign={'center'} padding={2} fontWeight={600}>
              Login
            </Typography>
            <CustomizedInput type="email" name="email" label='Email' ></CustomizedInput>
            {' \n '}
            <CustomizedInput type="password" name="password" label='Password'></CustomizedInput>
            <Button type='submit' sx={{px: 2, py: 1, mt: 2, width: "400px", borderRadius: 2, bgcolor: "#00fffc", ":hover": {bgcolor: "white", color: "black"}}} endIcon={<IoIosLogIn></IoIosLogIn>}>
              Login 
            </Button>
          </Box>
        </form>

      </Box>
    </Box>
  )
};

export default Login;
