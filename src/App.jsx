import { useEffect, useState } from "react"
import Alert from "./components/Alert"
import Badge from "./components/Badge"
import FAQ from "./components/FAQ"
import Hero from "./components/Hero"
import { greet, faqSlideIn, popUpAlert, showContentHero, badgesSlideIn } from "./helpers"
import Loading from "./components/Loading"

function App() {

  let index = Math.floor(Math.random() * 3)
  const [ videoIndex, setVideoIndex ] = useState(index)
  

  useEffect(() => {
    setVideoIndex(index)
    
    faqSlideIn()
    popUpAlert()
    showContentHero()
    badgesSlideIn()
  

  if (window.matchMedia("(min-width: 1024px)").matches) {
  } 

  }, [])

  function handleLoad() {
    let loadingLayer = document.getElementById('loading-layer');

    setTimeout(() => {
      loadingLayer.classList.add('opacity-0')
    }, 700);
    setTimeout(() => {
      loadingLayer.classList.add('hidden')
    }, 1000);

    // console.log('its loaded!');
  }

  return (
    <>
      <section className="relative h-screen overflow-hidden" onLoad={handleLoad}>

        {/* <div className="flex justify-center">
          <Loading />
        </div> */}

        <div className="flex justify-center h-screen lg:hidden relative">
          <div className="absolute max-w-80 top-20">
            <img onLoad={greet} className="" src="https://blush.design/api/download?shareUri=onI-T_2t7&w=800&h=800&fm=png" alt="" />
            <h1 className="text-center text-xl font-light tracking-wide">Please access the website on 1024px screen size or bigger</h1>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <Alert videoIndex={videoIndex} />
          <Hero videoIndex={videoIndex} />
          <FAQ videoIndex={videoIndex} />
          <Badge videoIndex={videoIndex} />
        </div>

      </section>
    </>
  )
}

export default App
