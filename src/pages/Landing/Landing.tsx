import { Fragment } from "react/jsx-runtime"
import About from "./components/About/About"
import Intro from "./components/Intro/Intro"

const Landing = () => {
  return (
    <Fragment>
      <Intro />
      <About/>
    </Fragment>
  )
}

export default Landing
