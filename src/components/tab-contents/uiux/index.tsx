import ui1 from '../../../assets/img/uiux-works/ui1.png'
import ui2 from '../../../assets/img/uiux-works/ui2.png'
import ui3 from '../../../assets/img/uiux-works/ui3.png'

import '../../tab/style.css'

const UIUXContent = () => {
    return (
        <>
            <div className="w-full bg-white mb-12">
                <div className="flex flex-wrap">
                    <div className="flex flex-col">
                        <div className='work-done'>
                            <img src={ui1} alt="" />
                        </div>
                        <div className='work-done'>
                            <img src={ui3} alt="" />
                        </div>
                    </div>
                    <div className='work-done'>
                            <img src={ui2} alt="" />
                        </div>
                </div>
            </div>
        </>
    )
}

export default UIUXContent