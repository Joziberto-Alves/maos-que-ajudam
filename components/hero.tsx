'use client';

export default function Hero () {
    const handleAboutClick = () => {
        const aboutSection = document.getElementById('about');
        aboutSection?.scrollIntoView({ behavior: 'smooth' });
    }
    return (
    <div className="min-h-screen gap-6 flex flex-col justify-center items-center text-center mx-4 mb-[20vh]" data-aos="fade-up">
        <h1 className="md:text-6xl text-4xl font-semibold  text-[#3B821D]"  data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" aos-duration="200">Mãos que ajudam, vidas que mudam!</h1>
        <p className="md:text-2xl text-xl  text-[#3B821D]">Um projeto social que une educação, solidariedade e desenvolvimento para transformar a realidade de Amontada.</p>
        <div className="mt-2 text-lg font-medium flex flex-col gap-4 md:flex-row">
            <button
            onClick={handleAboutClick}
            className="p-3 px-8 bg-[#E7C94C] text-[#3B821D] rounded-lg transition-all duration-300 hover:bg-yellow-300 hover:scale-105  hover:shadow-2xl">
                Saiba mais
            </button>
            <button 
            onClick={() => {
                const aboutSection = document.getElementById('impact');
                aboutSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="p-3 px-8 text-[#E7C94C] border border-yellow-500 rounded-lg trasition-all duration-300 hover:scale-105  hover:shadow-2xl"
            >
                Ver Ações
            </button>
        </div>
    </div>
    )
}