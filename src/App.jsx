import { useEffect } from "react"
import Alert from "./components/Alert"
import Badge from "./components/Badge"
import FAQ from "./components/FAQ"
import Hero from "./components/Hero"
import { greet, faqSlideIn, popUpAlert, showContentHero } from "./helpers"

function App() {

  useEffect(() => {
    faqSlideIn()
    popUpAlert()

    if (window.matchMedia("(max-width: 1280px)").matches) {
      // Viewport is less or equal to 700 pixels wide
  } else {
      showContentHero()
      // Viewport is greater than 700 pixels wide
  }

  }, [])

  return (
    <>
      <section >
        <div className="flex justify-center h-screen lg:hidden relative">
          <div className="absolute max-w-80 top-20">
            <img onLoad={greet} className="" src="https://blush.design/api/download?shareUri=onI-T_2t7&w=800&h=800&fm=png" alt="" />
            <h1 className="text-center text-xl font-light tracking-wide">Please access the page on 1024px screen size</h1>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <Alert />
          <Hero />
          <FAQ />
          <Badge />
        </div>

      </section>
    </>
  )
}

export default App
