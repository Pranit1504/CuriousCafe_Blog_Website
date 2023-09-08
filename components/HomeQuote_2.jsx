import { useInView } from "react-intersection-observer";

const HomeQuote_2 = () => {

  const {ref , inView} = useInView(); 

  return (
    <section className="flex justify-center items-center py-48">
        <div ref={ref} className="HomeQuote gap-24">
            <img className={`quote_img ${inView ? 'show' : 'hiddenEl'} mb-24`} src="assets/images/curiosity.jpeg" alt="Quote about blog website"></img>
            <div className={`Quote relative ${inView ? 'show' : 'hiddenEl' }`}>
                <p>Navigating the corridors of</p>
                <p><span className="text-4xl md:text-6xl font-bold text-cs_pink">Curiosity</span>,our blog opens doors to </p>
                <p>insight, imagination, and</p>
                <p>endless discovery.</p>
                <img className="quote_bg absolute -left-4" src="assets/images/quote_bg.png" alt="quote bg"></img>
            </div>
            
        </div>
    </section>
  )
}

export default HomeQuote_2