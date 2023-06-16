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
            <div className="offers mx-auto lg:w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                {
                    offers?.map(offer => {
                        return (
                            <div key={offer.id} className="offer">
                                <img src={offer.img} alt="" />
                                <div className="text pb-4">
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
