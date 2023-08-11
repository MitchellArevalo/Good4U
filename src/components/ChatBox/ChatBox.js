import React, { useState } from 'react';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { faqData } from './FaqData';

const FaqChatbox = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [openChat, setOpenChat] = useState(false)
    const handleQuestionClick = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };
    const handleOpenChat = () => {
        setOpenChat(!openChat)
    }

    return (
        <div className='fixed  z-50 right-5 bottom-5'>
            <button onClick={handleOpenChat} className=': bg-greyDarkOpra  rounded-3xl p-2  hover:bg-greyLightOpra'>
                <QuestionMarkIcon style={{ color: "white" }} />
            </button>
            {
                openChat && (
                    <div className="max-w-md mx-auto p-4 border rounded shadow bg-whiteLight">
                        <div className="border-b pb-2 mb-4">
                            <h2 className="text-lg font-semibold">Preguntas Frecuentes</h2>
                        </div>
                        <div className="space-y-4">
                            {faqData.map((faq, index) => (
                                <div key={index}>
                                    <div
                                        className={`p-2 cursor-pointer rounded ${openIndex === index ? 'bg-blue-200' : 'bg-gray-200'
                                            }`}
                                        onClick={() => handleQuestionClick(index)}
                                    >
                                        <div className="flex justify-between">
                                            <div className="font-semibold">{faq.question}</div>
                                            <div>{openIndex === index ? '-' : '+'}</div>
                                        </div>
                                    </div>
                                    {openIndex === index && (
                                        <div className="p-2 bg-gray-100">{faq.answer}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )
            }
        </div>

    );
};

export default FaqChatbox;
