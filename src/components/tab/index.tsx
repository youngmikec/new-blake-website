import { useState } from 'react'
import TabNavItem from '../tab-nav-item'
import './style.css'
import TabContent from '../tab-content'
import GraphicsContent from '../tab-contents/graphics'
import LogosContent from '../tab-contents/logos'
import UIUXContent from '../tab-contents/uiux'

const Tab = () => {

    const [activeTab, setActiveTab] = useState('graphics')

    return (
        <>
            <div className="tab-nav">
                <ul className='flex content-center justify-start gap-7'>
                    <TabNavItem title='Graphics' id='graphics' activeTab={activeTab} setActiveTab={setActiveTab} />
                    <TabNavItem title='Logos' id='logos' activeTab={activeTab} setActiveTab={setActiveTab} />
                    <TabNavItem title='UI/UX' id='uiux' activeTab={activeTab} setActiveTab={setActiveTab} />
                </ul>
            </div>

            <div className="tab-content mt-9 mb-32">
                <TabContent id='graphics' activeTab={activeTab}>
                    <GraphicsContent />
                </TabContent>
                <TabContent id='logos' activeTab={activeTab}>
                    <LogosContent />
                </TabContent>
                <TabContent id='uiux' activeTab={activeTab}>
                    <UIUXContent />
                </TabContent>
            </div>
        </>
    )
}

export default Tab
