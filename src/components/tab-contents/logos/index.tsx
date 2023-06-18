import logo1 from '../../../assets/img/logo-works/logo1.png'
import logo2 from '../../../assets/img/logo-works/logo2.png'
import logo3 from '../../../assets/img/logo-works/logo3.png'
import logo4 from '../../../assets/img/logo-works/logo4.png'
import logo5 from '../../../assets/img/logo-works/logo5.png'
import logo6 from '../../../assets/img/logo-works/logo6.png'
import logo7 from '../../../assets/img/logo-works/logo7.png'
import logo8 from '../../../assets/img/logo-works/logo8.png'
import logo9 from '../../../assets/img/logo-works/logo9.png'
import logo10 from '../../../assets/img/logo-works/logo10.png'
import logo11 from '../../../assets/img/logo-works/logo11.png'
import logo12 from '../../../assets/img/logo-works/logo12.png'

import '../../tab/style.css'

const LogosContent = () => {
    return (
        <>
            <div className="w-full bg-white mb-12">
                <div className="">
                    <div className="grid 
                        grid-cols-1 
                        sm:grid-cols-2 
                        md:grid-cols-2 
                        lg:grid-cols-4 gap-6">

                        <div className='work-done'>
                            <img src={logo1} alt="" />
                        </div>
                        <div className='work-done'>
                            <img src={logo2} alt="" />
                        </div>
                        <div className='work-done'>
                            <img src={logo3} alt="" />
                        </div>
                        <div className='work-done'>
                            <img src={logo4} alt="" />
                        </div>
                        <div className='work-done'>
                            <img src={logo5} alt="" />
                        </div>
                        <div className='work-done'>
                            <img src={logo6} alt="" />
                        </div>
                        <div className='work-done'>
                            <img src={logo7} alt="" />
                        </div>
                        <div className='work-done'>
                            <img src={logo8} alt="" />
                        </div>
                        <div className='work-done'>
                            <img src={logo9} alt="" />
                        </div>
                        <div className='work-done'>
                            <img src={logo10} alt="" />
                        </div>
                        <div className='work-done'>
                            <img src={logo11} alt="" />
                        </div>
                        <div className='work-done'>
                            <img src={logo12} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogosContent