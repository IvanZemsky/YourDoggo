import { AppBar, Container, Toolbar, Box, Button, IconButton} from "@mui/material"
import styles from './Header.module.scss'
import Logo from "../UI/Logo/Logo"
import { Link as RouterLink } from 'react-router-dom';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PageLink from "../UI/PageLink/PageLink";


const Header = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Logo />

          <Box ml="auto" className={styles.links}>
            <PageLink to="/articles">
              Статьи
            </PageLink>
            <PageLink to="/shop">
              Магазин
            </PageLink>
            <PageLink to="/forum">
              Форум
            </PageLink>
            <IconButton>
              <NotificationsNoneIcon sx={{fill: "#fff"}}/>
            </IconButton>
            <Button variant="contained" color="secondary" sx={{ border: '2px solid #fff'}}>Войти</Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
