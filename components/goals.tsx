import Image from "next/image"

export default function Goals() {
    return (
        <div className="mt-[15vh]">
            <h1 className="text-[#3B821D] text-center text-5xl font-medium ">Objetivos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[10vh] items-center text-center text-[#3B821D] text-lg md:text-2xl font-medium m-5">
                <div className=" flex flex-col items-center justify-center ">
                    {/* imagem */}
                    <Image 
                    src="/megafone.svg"
                    alt="megafone"
                    width={150}
                    height={150}
                    className="height-50"
                    ></Image>
                    {/* texto */}
                    <p className="m-6">
                        Incentivar o uso do marketing digital
                    </p>
                </div>
                <div className=" flex flex-col items-center justify-center ">
                    {/* imagem */}
                    <Image 
                    src="/case.svg"
                    alt="casework"
                    width={150}
                    height={150}
                    className=""
                    ></Image>
                    {/* texto */}
                    <p className="m-6">
                        Capacitar jovens para o mercado de trabalho
                    </p>
                </div>
                <div className=" flex flex-col items-center justify-center ">
                    {/* imagem */}
                    <Image 
                    src="/hands.svg"
                    alt="handsshake"
                    width={150}
                    height={150}
                    className=""
                    ></Image>
                    {/* texto */}
                    <p className="m-6">
                        Fortalecer vínculos com a comunidade
                    </p>
                </div>
                <div className=" flex flex-col items-center justify-center ">
                    {/* imagem */}
                    <Image 
                    src="/config.svg"
                    alt=""
                    width={150}
                    height={150}
                    className=""
                    ></Image>
                    {/* texto */}
                    <p className="m-6">
                        Contribuir com o desenvolvimento local
                    </p>
                </div>
            </div>
        </div>
    )
}