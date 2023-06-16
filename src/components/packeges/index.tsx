import './style.css'
import happy_customer from '../../assets/img/Rectangle 4553happy-user.png'

const Packages = () => {
    return (
        <>
            <div className="packages w-full mb-24">
                <div className="mx-auto lg:w-11/12">
                    <div className="customer-packages gap-24 flex flex-wrap">
                        <div className="customer">
                            <img src={happy_customer} alt="" />
                        </div>
                        <div className="all-packages pt-12 pb-14 lg:w-2/5">
                            <span className="heading small-heading text-base font-medium">Packages</span>
                            <h2 className="heading main-heading font-semibold mt-4 pb-24">Choose a package to begin with</h2>

                            <div className="package pb-10 flex flex-wrap content-center justify-center">
                                <div className="gold plan px-5 py-6 bg-blue-900 text-white">
                                    <div className="package-head">
                                        <h3 className='font-semibold text-xl pb-6'>Gold</h3>
                                    </div>
                                    <div className="package-body">
                                        <ul>
                                            <li>Logo</li>
                                            <li>Business card</li>
                                            <li>Letter Head</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="diamond plan px-5 py-6 bg-yellow-400">
                                    <div className="package-head">
                                        <h3 className='font-semibold text-xl pb-6'>Diamond</h3>
                                    </div>
                                    <div className="package-body">
                                        <ul>
                                            <li>Logo</li>
                                            <li>Business card</li>
                                            <li>Letter Head</li>
                                            <li>Brand Guide</li>
                                            <li>UI/UX</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="silver plan px-5 py-6 bg-green-400">
                                    <div className="package-head">
                                        <h3 className='font-semibold text-xl pb-6'>Silver</h3>
                                    </div>
                                    <div className="package-body">
                                        <ul>
                                            <li>Logo</li>
                                            <li>Brand Guide</li>
                                            <li>UX Research</li>
                                            <li>UI/UX Design</li>
                                            <li>Web Development</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <span className="note text-xl font-medium">get up to 20% discount when you try any of the packages listed above</span>
                            <button className='bg-blue-900 text-white font-semibold text-xl py-2 mt-7 px-12 rounded-md float-right'>Try now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Packages
