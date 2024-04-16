import { Link } from "@mui/material"
import {Link as RouterLink} from 'react-router-dom'
import  { PropsWithChildren } from 'react'

interface PageLinkProps {
   to: string
   color?: string
}

const PageLink = (props: PropsWithChildren<PageLinkProps>) => {
   const {color = '#fff', to, children} = props;

  return (
   <Link component={RouterLink} to={to} underline="hover" sx={{color: color}}>
      {children}
   </Link>
  )
}

export default PageLink
