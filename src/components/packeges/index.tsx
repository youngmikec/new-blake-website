import './style.css'
import happy_customer from '../../assets/img/Rectangle 4553happy-user.png'

const Packages = () => {
    return (
        <>
            <div className="packages w-full mb-24">
                <div className="mx-auto lg:w-11/12">
                    <div className="customer-packages gap-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                        <div className="customer">
                            <img src={happy_customer} alt="" />
                        </div>
                        <div className="all-packages pt-12 pb-14 w-full">
                            <span className="heading small-heading text-base font-medium">Packages</span>
                            <h2 className="heading main-heading font-semibold mt-4 mb-24">Choose a package to begin with</h2>

                            <div className="package mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                                <div className="gold plan px-5 py-6 bg-blue-900 text-white">
                                    <div className="package-head">
                                        <h3 className='font-semibold text-xl text-white pb-6'>Gold</h3>
                                    </div>
                                    <div className="package-body">
                                        <ul>
                                            <li className='text-base font-normal text-white'>Logo</li>
                                            <li className='text-base font-normal text-white'>Business card</li>
                                            <li className='text-base font-normal text-white'>Letter Head</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="diamond plan px-5 py-6 bg-yellow-400">
                                    <div className="package-head">
                                        <h3 className='font-semibold text-xl pb-6'>Diamond</h3>
                                    </div>
                                    <div className="package-body">
                                        <ul>
                                            <li className='text-base font-normal'>Logo</li>
                                            <li className='text-base font-normal'>Business card</li>
                                            <li className='text-base font-normal'>Letter Head</li>
                                            <li className='text-base font-normal'>Brand Guide</li>
                                            <li className='text-base font-normal'>UI/UX</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="silver plan px-5 py-6 bg-green-400">
                                    <div className="package-head">
                                        <h3 className='font-semibold text-xl pb-6'>Silver</h3>
                                    </div>
                                    <div className="package-body">
                                        <ul>
                                            <li className='text-base font-normal'>Logo</li>
                                            <li className='text-base font-normal'>Brand Guide</li>
                                            <li className='text-lgbase font-normal'>UX Research</li>
                                            <li className='text-base font-normal'>UI/UX Design</li>
                                            <li className='text-base font-normal'>Web Development</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <span className="note text-xl font-medium">get up to 20% discount when you try any of the packages listed above</span>
                            <button className='button bg-blue-900 text-white font-semibold text-xl py-2 mt-7 px-12 rounded-md float-right'>Try now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Packages
