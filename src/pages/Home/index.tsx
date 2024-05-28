import { Fragment } from "react/jsx-runtime"
import About from "./components/About/About"
import Intro from "./components/Intro/Intro"
import Offers from "./components/Offers/Offers"

const Home = () => {
  return (
    <Fragment>
      <Intro />
      <About />
      <Offers />
    </Fragment>
  )
}

export default Home
