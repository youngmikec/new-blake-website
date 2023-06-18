import './style.css'
import profile_pic1 from '../../assets/img/profile-pic1.png'
import profile_pic2 from '../../assets/img/profile-pic2.png'
import quotes from '../../assets/icons/quotes.png'

const Testimonial = () => {
    return (
        <>
            <div className="testimonials w-full bg-white mb-36">
                <div className="mx-auto lg:w-11/12">
                    <span className="heading small-heading text-base font-medium">Testimonials</span>
                    <h2 className="heading main-heading text-4xl font-semibold mt-4 mb-16">Some of our student’s feedback</h2>

                    <div className="testimonial-list flex flex-wrap">
                        <div className="testimonial pl-14 pr-12 pb-10 lg:w-1/2 border border-slate-400">
                            <img className='pic' src={profile_pic1} alt="" />
                            <p className="comment">Thank you so much .I attended your last online training and I was filled with so much values. guys i would like you to try them out too. trust me you wont regret it</p>
                            <div className="testimonial-footer flex justify-between">
                                <span className="name font-semibold text-2xl">Arith tina</span>
                                <img src={quotes} alt="" />
                            </div>
                        </div>
                        <div className="testimonial pl-14 pr-12 pb-10 lg:w-1/2 border border-slate-400">
                            <img className='pic' src={profile_pic2} alt="" />
                            <p className="comment">Blake designs has been really amazing, filled with lots of inspirations and motivations .His designs has turned my business around for good and i recommend people to try it.</p>
                            <div className="testimonial-footer flex justify-between">
                                <span className="name font-semibold text-2xl">Princess  Hibiscus</span>
                                <img src={quotes} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial
