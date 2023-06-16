import './style.css'
import circle from '../../assets/icons/circle.png'
import triangle from '../../assets/icons/triangle.png'

const FAQ = () => {
    return (
        <>
            <div className="faq pt-9 w-full mb-24">
                <div className="mx-auto faq-proper lg:w-11/12">
                    <h2 className="text-4xl text-center text-white font-semibold pb-7">Frequently Asked Questions</h2>

                    <div className="questions flex flex-col content-center justify-center">
                        <div className="question mb-5 mx-60 py-4 px-6 border border-white rounded-md">
                            <img src={circle} alt="" />
                            <span className='text-white font-semibold text-base'>How do you go about your training and how long?</span>
                            <img src={triangle} alt="" />
                        </div>

                        <div className="question mb-5 mx-60 py-4 px-6 border border-white rounded-md">
                            <img src={circle} alt="" />
                            <span className='text-white font-semibold text-base'>What is your clients’ expectation?</span>
                            <img src={triangle} alt="" />
                        </div>

                        <div className="question mb-5 mx-60 py-4 px-6 border border-white rounded-md">
                            <img src={circle} alt="" />
                            <span className='text-white font-semibold text-base'>Can client communicate  you directly to your whatsapp?</span>
                            <img src={triangle} alt="" />
                        </div>

                        <div className="question mb-16 mx-60 py-4 px-6 border border-white rounded-md">
                            <img src={circle} alt="" />
                            <span className='text-white font-semibold text-base'>How long to get  a UI design done?</span>
                            <img src={triangle} alt="" />
                        </div>

                        <div className="faq-footer text-right mr-60 mb-6">
                            <span className='text-white mr-8 font-normal text-base text-right'>Didn't see any related question?</span>
                            <button className='bg-blue-900 text-white font-semibold text-xl py-2 mt-7 px-12 rounded-md'>Ask me</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FAQ