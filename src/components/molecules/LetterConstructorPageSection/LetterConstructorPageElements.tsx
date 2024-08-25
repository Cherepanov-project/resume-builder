import { Box, useMediaQuery, createTheme } from "@mui/material"
import React from "react"

export const createLetterConstructorSectionTheme = () => {
  const sm = useMediaQuery('(min-width: 576px)')
  const md = useMediaQuery('(min-width: 768px)')
  const lg = useMediaQuery('(min-width: 992px)')
  const xl = useMediaQuery('(min-width: 1200px)')
  const xxl = useMediaQuery('(min-width: 1400px)')
  const xxxl = useMediaQuery('(min-width: 1600px)')
  const xxxxl = useMediaQuery('(min-width: 1800px)')

  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            boxSizing: 'border-box',
            marginTop: '40px',
            textDecoration: 'none',
            textTransform: 'none',
            padding: xl ? '7px 30px 7px 30px' : md ? '15px 40px' : '13px 20px',
            fontWeight: '600',
            fontSize: xl ? '22px' : '16px',
            backgroundColor: '#852876',
            border: '1px solid #852876',
            color: '#fff',
            borderRadius: '16px',
            transition: 'background-color .3s',
            textAlign: 'center',
            width: md ? 'auto' : '100%',
        
            '&:hover': {
                backgroundColor: '#5d145f',
                color: '#fff',
            }
          },
        },
      },
    },
  });

  return theme
}

export const Container = ({children}) => {
  return (
    <Box sx={{
      boxSizing: 'border-box',
      margin: '0',
      width: '100%',
      padding: '40px 0',
      paddingLeft: '15px',
      paddingRight: '15px',
      marginBottom: '0',
    }}>
      {children}
    </Box>
  )
}

export const ImageWrapper = ({breakpoints, children}) => {
  
  return (
    <Box sx={{
      boxSizing: 'border-box',
      paddingRight: '15px',
      paddingLeft: '15px',
      margin: 'auto',
      width: 'auto',
      overflow: 'clip',
      order: breakpoints.lg ? '2' : '-1',
      flex: breakpoints.lg ? '0 0 50%' : '',
    }}>
      {children}
    </Box>
  )
}

export const TextWrapper = ({children}) => {  
  return (
    <Box sx={{
      margin: 'auto',
      maxWidth: '526px',
    }}>
      {children}
    </Box>
  )
}