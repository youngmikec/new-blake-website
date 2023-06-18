import './style.css'
import rectangle from '../../assets/icons/rectangle.png'

const CoreValues = () => {
    return (
        <>
            <div className="values text-center w-full bg-white mt-40 mb-36">
                <div className="mx-auto lg:w-11/12">
                    <span className="heading small-heading mb-4 text-base font-medium">About</span>
                    <h2 className="heading main-heading text-4xl font-semibold mt-4 mb-12">Giving your brand the taste it deserved</h2>

                    <div className="our-values">
                        <div className="values-proper">
                            <img src={rectangle} alt="" />
                            <div className="essay mx-40">
                                <h2 className='text-white head text-4xl font-semibold mb-9'>Brief</h2>
                                <p className="first text-white text-xl font-semibold mb-7">
                                    Blakedesignx is a top notch company in the design world that delivers the best of quality designs to clients, bringing creativity to reality. we also help our client to maintain its identity to their audience.
                                </p>
                                <p className="second text-white text-xl font-semibold mb-7">
                                    When it comes to design, we define your unique value proposition: Clearly articulate what sets you apart from other designers. Identify your strengths, areas of expertise, and the value you can provide to clients. Highlight your unique style, approach, or specializations that make you stand out
                                </p>

                                <h2 className='text-white head text-4xl font-semibold mb-2'>Mission</h2>
                                <p className="third text-white text-xl font-semibold mb-24">
                                    We aspire to be the number one African innovation and technology brand, emerging from the South East.
                                    To connect people and technology, help people to access the best technology at a click of button and also delivering business solutions for the web and mobile world with digital strategies.
                                </p>
                            </div>
                            <img className='rectangle' src={rectangle} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoreValues
