import ui1 from '../../../assets/img/uiux-works/ui1.png'
import ui2 from '../../../assets/img/uiux-works/ui2.png'
import ui3 from '../../../assets/img/uiux-works/ui3.png'
import ui4 from '../../../assets/img/uiux-works/dashboard.png'
import ui5 from '../../../assets/img/uiux-works/Desktop-1.png'
import ui6 from '../../../assets/img/uiux-works/Desktop-3.png'
import ui7 from '../../../assets/img/uiux-works/Desktop-5.png'
import ui8 from '../../../assets/img/uiux-works/Desktop-15.jpg'
import ui9 from '../../../assets/img/uiux-works/Desktop-17.png'
import ui10 from '../../../assets/img/uiux-works/Desktop-23.png'
import ui11 from '../../../assets/img/uiux-works/Desktop-25.png'

import '../../tab/style.css'

const UIUXContent = () => {
    return (
        <>
            <div className="w-full bg-white mb-12">
                <div className="grid projects
                    grid-cols-1 
                    sm:grid-cols-2 
                    md:grid-cols-2 
                    lg:grid-cols-4 gap-6">
                    <div className='work-done'>
                        <img src={ui1} alt="" width="283px" height="252px" className="object-scale-down" />
                    </div>
                    <div className='work-done'>
                        <img src={ui3} alt="" width="283px" height="252px" className="object-scale-down" />
                    </div>
                    <div className='work-done'>
                        <img src={ui4} alt="" width="283px" height="252px" className="object-scale-down" />
                    </div>
                    <div className='work-done'>
                        <img src={ui5} alt="" width="283px" height="252px" className="object-scale-down" />
                    </div>
                    <div className='work-done'>
                        <img src={ui6} alt="" width="283px" height="252px" className="object-scale-down" />
                    </div>
                    <div className='work-done'>
                        <img src={ui7} alt="" width="283px" height="252px" className="object-scale-down" />
                    </div>
                    <div className='work-done'>
                        <img src={ui8} alt="" width="283px" height="252px" className="object-scale-down" />
                    </div>
                    <div className='work-done'>
                        <img src={ui9} alt="" width="283px" height="252px" className="object-scale-down" />
                    </div>
                    <div className='work-done'>
                        <img src={ui10} alt="" width="283px" height="252px" className="object-scale-down" />
                    </div>
                    <div className='work-done'>
                        <img src={ui11} alt="" width="283px" height="252px" className="object-scale-down" />
                    </div>

                    <div className='work-done'>
                        <img src={ui2} alt="" width="283px" height="252px" className="object-scale-down" />
                    </div>
                </div>
                {/* <div className="flex flex-wrap">
                </div> */}
            </div>
        </>
    )
}

export default UIUXContent