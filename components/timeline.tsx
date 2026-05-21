import Image from "next/image"

export default function TimeLine() {
    return (
        <section
            className="my-[10vh] flex flex-col items-center gap-10 px-4"
            id="fellows"
        >
            <h1 className="text-[#3B821D] text-center text-3xl md:text-5xl font-semibold">
                Parceiros
            </h1>

            <div className="grid grid-cols-5 gap-2 md:gap-4 lg:gap-6 w-full max-w-7xl">

                <div
                    className="
                        bg-white
                        rounded-2xl
                        p-2 md:p-4 lg:p-6
                        shadow-md
                        hover:shadow-xl
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        flex
                        items-center
                        justify-center
                    "
                >
                    <Image
                        src="/Prefeitura.jpg"
                        alt="Prefeitura"
                        width={80}
                        height={80}
                        className="w-14 md:w-20 lg:w-30 h-auto object-contain"
                    />
                </div>

                <div
                    className="
                        bg-white
                        rounded-2xl
                        p-2 md:p-4 lg:p-6
                        shadow-md
                        hover:shadow-xl
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        flex
                        items-center
                        justify-center
                    "
                >
                    <Image
                        src="/escola.png"
                        alt="Escola"
                        width={80}
                        height={80}
                        className="w-10 md:w-16 lg:w-24 h-auto object-contain"
                    />
                </div>
                <div
                    className="
                        bg-white
                        rounded-2xl
                        p-2 md:p-4 lg:p-6
                        shadow-md
                        hover:shadow-xl
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        flex
                        items-center
                        justify-center
                    "
                >
                    <Image
                        src="/cras.jpeg"
                        alt="CRAS"
                        width={80}
                        height={80}
                        className="w-10 md:w-16 lg:w-24 h-auto object-contain"
                    />
                </div>
                
                <div
                    className="
                        bg-white
                        rounded-2xl
                        p-2 md:p-4 lg:p-6
                        shadow-md
                        hover:shadow-xl
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        flex
                        items-center
                        justify-center
                    "
                >
                    <Image
                        src="/informatica.png"
                        alt="Informática"
                        width={80}
                        height={80}
                        className="w-10 md:w-16 lg:w-24 h-auto object-contain"
                    />
                </div>

                <div
                    className="
                        bg-white
                        rounded-2xl
                        p-2 md:p-4 lg:p-6
                        shadow-md
                        hover:shadow-xl
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        flex
                        items-center
                        justify-center
                    "
                >
                    <Image
                        src="/Administração.png"
                        alt="Administração"
                        width={80}
                        height={80}
                        className="w-12 md:w-20 lg:w-30 h-auto object-contain"
                    />
                </div>

            </div>
        </section>
    )
}