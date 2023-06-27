import './style.css'

interface IOffer {
    id?: number;
    img: string;
    title: string;
    desc: string;
}

type Props = {
    offers: IOffer[];
}

const Offer = ({ offers }: Partial<Props>) => {
    return (
        <>
            <div className="lg:w-11/12 md:w-10/12 sm:w-9/12 grid grid-cols-1 content-center sm:grid-cols-2 sm:gap-10 md:grid-cols-3 md:gap-10 lg:grid-cols-4 lg:gap-10">
                {
                    offers?.map(offer => {
                        return (
                            <div key={offer.id} className="offer">
                                <img src={offer.img} className='w-full' alt="" />
                                <div className="-mt-10 pb-4">
                                    <p className="title font-bold text-xl text-blue-900 mb-2">{offer.title}</p>
                                    <p className="desc font-normal text-lg">{offer.desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Offer
