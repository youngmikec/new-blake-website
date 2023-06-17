import './style.css'
import blake from '../../assets/img/blake.png'
import phone from '../../assets/icons/phone.png'
import message from '../../assets/icons/message.png'

const Founder = () => {
    return (
        <>
            <div className="founder w-full mb-40">
                <div className="mx-auto lg:w-11/12">
                    <div className="blake flex flex-wrap">
                        <img className='mr-28' src={blake} alt="" />

                        <div className="about-blake">
                            <h2 className="heading main-heading font-semibold mb-6">Get to know The Founder</h2>
                            <p className="first essay-body">
                                Joshua Chinonso is the CEO / Lead  of Blake Designs. He is a Tech Enthusiast, Graphics Designer and a Brand identity Designer. He is very creative and love playing with some design tools. He has worked with different Teams and companies in building products as a digital designer . He helped lots of brands achieve their goals by standing out among other businesses 
                            </p>
                            <p className="second essay-body mt-10 mb-12">
                                He works with some of this design tools like; Adobe photoshop, Adobe illustrator, Adobe After Effect, Adobe Ad, Figma to achieve his creative works
                            </p>

                            <div className="founder-footer">
                                <h3 className='font-semibold text-lg mb-6'>Contact him via </h3>
                                <p className="phone contact flex gap-2 mb-4">
                                    <img src={phone} alt="" />
                                    +234 8107 389 617, +234 8132 223 227 
                                </p>
                                <p className="message contact flex content-center gap-2">
                                    <img className='p-1' src={message} alt="" />
                                    blakedesignx@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Founder
