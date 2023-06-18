import Offer from '../offer'
import './style.css'
import graphics_design  from '../../assets/img/graphics-design.png'
import full_branding  from '../../assets/img/full-branding.png'
import ui_ux  from '../../assets/img/ui-ux.png'
import training_guide  from '../../assets/img/training-guide.png'

const offers = [
    {
        id: 1,
        img: graphics_design,
        title: 'Graphics Design',
        desc: 'Fliers, complementary cards,jotters,posters etc'
    },
    {
        id: 2,
        img: full_branding,
        title: 'Full Branding',
        desc: 'Logo,brand guide,complementary card,'
    },
    {
        id: 3,
        img: ui_ux,
        title: 'UI/UX and Development',
        desc: 'Mobile apps,website,prototype,user guide'
    },
    {
        id: 4,
        img: training_guide,
        title: 'Traning and Guide',
        desc: 'Free courses, one and one training'
    },
]

const Offers = () => {
    return (
        <>
            <div className="offers w-full bg-white mb-20">
                <div className="mx-auto lg:w-11/12">
                    <span className="heading small-heading text-base font-medium">offer</span>
                    <h2 className="heading main-heading text-4xl font-semibold mt-4 mb-9">What we can offer</h2>
                </div>
                <Offer offers={offers} />
            </div>
        </>
    )
}

export default Offers
