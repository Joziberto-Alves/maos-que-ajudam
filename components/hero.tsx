
export default function Hero () {
    return (
    <div className="min-h-screen gap-6 flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl font-semibold  text-[#3B821D]">Maõs que ajudam, vidas que mudam!</h1>
        <p className="text-2xl text-[#3B821D]">Um projeto social que une educação, solidariedade e desenvolvimento para transformar a realidade de Amontada.</p>
        <div className="mt-2 text-lg font-medium flex gap-4">
            <button className="p-3 px-8 bg-[#E7C94C] text-[#3B821D] rounded-lg transition-all duration-300 hover:bg-yellow-300 hover:scale-105  hover:shadow-2xl">
                Saiba mais
            </button>
            <button className="p-3 px-8 text-[#E7C94C] border-1 border-yellow-500 rounded-lg trasition-all duration-300 hover:scale-105  hover:shadow-2xl">
                Ver Ações
            </button>
        </div>
    </div>
    )
}