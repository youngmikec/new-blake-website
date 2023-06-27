import React, { useState } from 'react';
import './style.css'
import circle from '../../assets/icons/circle.png'
import triangle from '../../assets/icons/triangle.png'

type Props = {
    isWhite: boolean;
    isBlue: boolean;
}

type Question = { question: string, answer: string}

type ItemProps = {
    data: Question
}

const FaqItem = ({ data }: ItemProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () => setIsOpen(prev => !prev);

    return (
        <>
            <div className=" mb-5 mx-60 py-4 px-6 border border-white rounded-md cursor-pointer" onClick={()=> toggle()}>
                <div className="question mb-4">
                    <img src={circle} alt="" />
                    <span className='text-white font-semibold text-base'>{data.question}</span>
                    <img className={`triangle ${isOpen && 'rotate-180 delay-100 ease-in-out'}`} src={triangle} alt="" />
                </div>
                {
                    isOpen &&
                    <div className="p-4">
                        <p className="text-center text-white">{ data.answer }</p>
                    </div>
                }
            </div>
        </>
    )
}

const FAQ = ({isWhite, isBlue}: Partial<Props>) => {
    const questions: Array<Question> = [
        {
            question: "How do you go about your training and how long?",
            answer: "We run an online training for individuals based on thier area of interest. Some training normally last for the period of 2,4, or 6 months"
        },
        {
            question: "What is your client expectation?",
            answer: "Intensive knowledge when it comes to training , experience mind blowing designs when we do your job,"
        },
        {
            question: "Can a client communicate you directly to WhatsApp?",
            answer: "Yes of course, click on the fixed  WhatsApp icon and chat with us directly. We will give you instant reply to your request."
        },
        {
            question: "How long to get a UI design done?",
            answer: "Good. Depend on the nature of the project. Some project that has much features can  take up to 6 weeks for completion"
        },
    ]
    return (
        <>
            <div className="faq pt-9 w-full mb-24">
                <div className="mx-auto faq-proper lg:w-11/12">
                    <h2 className="faq-main-header text-4xl text-center text-white font-semibold mb-7">Frequently Asked Questions</h2>

                    <div className="questions flex flex-col content-center justify-center">
                        {
                            questions.map((item: Question, idx: number) => {
                                return <FaqItem key={idx} data={item} />
                            })
                        }

                        <div className="faq-footer text-right mr-60 mb-6">
                            <span className='text-white mr-8 font-normal text-base text-right'>Didn't see any related question?</span>
                            {
                                isBlue && <button className='button bg-blue-900 text-white font-semibold text-xl py-2 mt-7 px-12 rounded-md'>
                                    <a className='' href='https://wa.me/+2348107389617' target='_blank'>
                                        Ask me
                                    </a>
                                </button>
                            }
                            {
                                isWhite && <button className='button bg-white text-blue-900 font-semibold text-xl py-2 mt-7 px-12 rounded-md'>
                                    <a className='' href='https://wa.me/+2348107389617' target='_blank'>
                                        Ask me
                                    </a>
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FAQ
