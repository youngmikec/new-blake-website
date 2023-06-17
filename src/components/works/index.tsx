import './style.css'
import work1 from '../../assets/img/work1.png'
import work2 from '../../assets/img/work2.png'
import work3 from '../../assets/img/work3.png'

const Works = () => {
    return (
        <>
            <div className="works w-full bg-white mb-20">
                <div className="mx-auto lg:w-11/12">
                    <span className="heading small-heading text-base font-medium">works</span>
                    <h2 className="heading main-heading text-4xl font-semibold mt-4 pb-9">Our recent works</h2>

                    <div className="works-display flex flex-wrap">
                        <div className="img lg:w-1/3">
                            <img src={work1} alt="" />
                        </div>
                        <div className="img lg:w-1/3">
                            <img src={work2} alt="" />
                        </div>
                        <div className="img lg:w-1/3">
                            <img src={work3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Works
