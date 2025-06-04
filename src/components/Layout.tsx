import { Box, Container, styled } from '@mui/material'
import imagenFondo from '/images/padel-en-linea-blanca.jpg'

const LayoutRoot = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  width: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  backgroundImage: `url(${imagenFondo})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  zIndex: -1,
  backgroundColor: theme.palette.background.default,
}))

const LayoutContainer = styled(Container)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  color: theme.palette.primary.main,
  backdropFilter: 'blur(5px)',
  borderRadius: theme.spacing(1),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  padding: theme.spacing(4),
  minHeight: '100vh',
  position: 'relative',
  zIndex: 1,
}))

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LayoutRoot />
      <LayoutContainer maxWidth="lg">{children}</LayoutContainer>
    </>
  )
}

export default Layout
