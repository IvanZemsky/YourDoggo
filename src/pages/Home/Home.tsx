import { Fragment } from "react/jsx-runtime"
import About from "./components/About/About"
import Intro from "./components/Intro/Intro"

const Home = () => {
  return (
    <Fragment>
      <Intro />
      <About/>
    </Fragment>
  )
}

export default Home
