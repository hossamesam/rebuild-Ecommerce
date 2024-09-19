"use client"
import { Divider } from '@mui/material';
import React from 'react';

const CarouselProduct: React.FC = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const cards = [
        {
            image: 'https://wallpapers.com/images/hd/3d-metal-skull-hd-vs28d62kpgnyg9eo.jpg',
            title: 'Card 1',
            description: 'تلفزيون 32 بوصة سمارت LED عالي الدقة HD من سامسونج، مع ريسيفر مدمج، اسود،تلفزيون 32 بوصة سمارت LED عالي الدقة HD من سامسونج، مع ريسيفر مدمج، اسود،تلفزيون 32 بوصة سمارت LED عالي الدقة HD من سامسونج، مع ريسيفر مدمج، اسود، تلفزيون 32 بوصة سمارت LED عالي الدقة HD من سامسونج، مع ريسيفر مدمج، اسود،',
        },
        {
            image: 'https://img.freepik.com/free-photo/autumn-leaf-falling-revealing-intricate-leaf-vein-generated-by-ai_188544-9869.jpg',
            title: 'Card 2',
            description: 'يتميز بمحور ذكي وخاصية التحكم عن بُعد بجهاز أحادي (قد تختلف إتاحة الميزة باختلاف المناطق. ولذا، تحقق من الإتاحة قبل الاستخدام). كل ما تحتاج إليه لاكتشاف الآلاف من المحتويات المختلفة في مكان واحد هو جهاز تحكم عن بُعد أحادي يمكنك استخدامه للتحكم في جهاز فك التشفير الرقمي أو وحدة التحكم في الألعاب أو التطبيقات أو حتى البث التلفزيوني المباشر',
        },
        {
            image: 'https://wallpapers.com/images/hd/3d-metal-skull-hd-vs28d62kpgnyg9eo.jpg',
            title: 'Card 3',
            description: 'Info which directs to the other page.',
        },
        {
            image: 'https://e0.pxfuel.com/wallpapers/258/569/desktop-wallpaper-beautiful-stones-coast-stones-iphone-summer-iphone-phone-blue-granite.jpg',
            title: 'Card 4',
            description: 'Info which directs to the other page.',
        },
        {
            image: 'https://www.shutterstock.com/image-photo/dark-moody-green-leafy-background-260nw-2374330595.jpg',
            title: 'Card 5',
            description: 'Info which directs to the other page.',
        },
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };
    if (currentIndex > cards.length - 3) {
        console.log(currentIndex)
        setCurrentIndex(0)
        console.log("hi")
    }
    return (
        <div className='flex flex-col w-full mt-10'>
            <Divider />

            <div className='flex flex-row justify-around items-center gap-4 my-8'>
                <button className="w-24 h-24 rounded-full bg-gray-300  " onClick={handlePrev}>&lt;</button>
                {cards.slice(currentIndex, currentIndex + 4).map((card, index) => (
                    <div className="flex flex-col  w-1/3   rounded-lg  relative" key={index}>
                        <img className="w-full h-56 object-cover mb-4 rounded-lg" src={card.image} alt="Card" />
                        <h3 className="text-lg font-bold ">{card.title}</h3>
                        <p className="text-md h-24  border-2 bg-clip-text  !text-ellipsis !overflow-hidden    font-bold text-zinc-800 ">{card.description}</p>
                    </div>
                ))}
                <button className="w-24 h-24 rounded-full bg-gray-300 " onClick={handleNext}>&gt;</button>
            </div>

            {/* <div className="flex mt-2 items-center justify-between">
                <button className="w-24 h-24 rounded-full bg-gray-300  " onClick={handlePrev}>&lt;</button>
                <div className="flex gap-4 px-8">
                    {cards.slice(currentIndex, currentIndex + 3).map((card, index) => (
                        <div className="flex-none w-1/3 p-2 bg-white rounded-lg shadow-md" key={index}>
                            <img className="w-full h-56 object-cover mb-4 rounded-lg" src={card.image} alt="Card" />
                            <h3 className="text-lg font-bold">{card.title}</h3>
                            <p className="text-gray-500">{card.description}</p>
                        </div>
                    ))}
                </div>
                <button className="w-24 h-24 rounded-full bg-gray-300 " onClick={handleNext}>&gt;</button>
            </div> */}
        </div >

    );
};

export default CarouselProduct;