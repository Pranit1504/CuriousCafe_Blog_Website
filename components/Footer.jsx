const Footer = () => {

  const isBrowser = () => typeof window !== 'undefined';

  function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <section className="footer">
        <div className="footer_content">
            <button className="footer_logo" onClick={scrollToTop}>
                    <img 
                            className="bg-transparent scale-150"
                            src="/assets/images/CuriousCafe/updated_logo.png"
                            alt="Curious Cafe Logo"
                            style={{width:100}}
                    />
            </button>
            <div className="footer_copyright mt-6">
               <span>@2023 CuriousCafe</span>
               <span>All Rights Reserved</span> 
            </div>
            <div>
                <h1 className="dev">Developer: Pranit Lonkar</h1>
            </div>
        </div>
    </section>
  )
}

export default Footer