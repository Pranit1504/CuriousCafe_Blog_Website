import { useInView } from "react-intersection-observer";

const HomeQuote_1 = () => {

  const {ref , inView} = useInView(); 

  return (
    <section className="flex justify-center items-center py-48">
        <div  ref={ref} className="HomeQuote" >
            <div className={`Quote relative ${inView ? 'show' : 'hiddenEl' }`}>
                <p>Journey through the realms of</p>
                <p><span className="text-4xl md:text-6xl font-bold text-cs_pink">Knowledge</span> and <span className="text-4xl md:text-6xl font-bold text-cs_pink">Inspiration</span>,</p>
                <p>where words weave the tapestry of</p> 
                <p><span className="text-4xl md:text-6xl font-bold text-cs_pink">Endless Possibilities</span>.</p>
                <img className="quote_bg absolute" src="assets/images/quote_bg.png" alt="quote bg"></img>
            </div>
            <img className={`quote_img ${inView ? 'show' : 'hiddenEl' }`} src="assets/images/endless.jpeg" alt="Quote about blog website"></img>
        </div>
    </section>
  )
}

export default HomeQuote_1