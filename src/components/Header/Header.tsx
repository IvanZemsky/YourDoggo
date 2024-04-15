import { AppBar, Container, Toolbar, Box } from "@mui/material"
import styles from './Header.module.scss'
import Logo from "../UI/Logo/Logo"
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Logo />
          <Box ml="auto" className={styles.links}>
            <Link to="/articles" className={styles.link}>Статьи</Link>
            <Link to="/articles" className={styles.link}>Товары</Link>
            <Link to="/articles" className={styles.link}>Форум</Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
