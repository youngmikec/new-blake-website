
import designerThoughtImg from '../../assets/img/design-expert.png'
import './style.css'

const ReachOutComp = () => {
    return(
        <>
            <div className='reach-out w-full bg-white mt-40 mb-20'>
                <div className="mx-auto lg:w-11/12">
                    <div className="flex gap-32 flex-wrap content-between">
                        <div className="designer-thoughts lg:w-2/5">
                            <img className='mb-10' src={designerThoughtImg} alt="" />

                            <h2 className="heading mb-10 font-semibold text-5xl">Talk to a Design Expert</h2>
                            <p className="paragragh paragraph1 mb-4 text-base">
                                Design is not just about making things look good; 
                                it's about creating impactful solutions that communicate messages, 
                                evoke emotions, and inspire action. At Blake’s Design Studio, 
                                We strive to bring your ideas to life, breathing beauty and functionality into every project.
                            </p>
                            <p className="paragragh paragraph2">
                                What sets us apart is our unwavering commitment to delivering exceptional results. 
                                With a blend of creativity and technical expertise, we approach each design challenge 
                                as an opportunity to push boundaries and surpass expectations.
                            </p>
                        </div>

                        <div className="form lg:w-2/5 ">
                            <div className="formcontrol mb-5">
                                <label className='mb-5 block text-base' htmlFor="">Full Name or company name</label>
                                <input className='py-3 px-8 border border-gray-400 rounded-md w-full focus:outline-none' type="text" placeholder='enter your full name' />
                            </div>

                            <div className="formcontrol mb-5">
                                <label className='mb-5 block text-base' htmlFor="">Email Address</label>
                                <input className='py-3 px-8 border border-gray-400 rounded-md w-full focus:outline-none' type="text" placeholder='enter your email' />
                            </div>

                            <div className="formcontrol mb-5">
                                <label className='mb-5 block text-base' htmlFor="">Phone Number (whatsapp Number preferably)</label>
                                <input className='py-3 px-8 border border-gray-400 rounded-md w-full focus:outline-none' type="text" placeholder='whatsapp number' />
                            </div>

                            <div className="formcontrol mb-5">
                                <label className='mb-5 block text-base' htmlFor="">what do you want?</label>
                                <textarea rows={6} className='block py-3 px-8 border border-gray-400 rounded-md w-full focus:outline-none' placeholder='text' />
                            </div>

                            <button className='bg-blue-900 text-white font-semibold text-xl py-2 mt-7 px-12 rounded-md float-right'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReachOutComp
