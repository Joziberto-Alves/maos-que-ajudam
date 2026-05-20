export default function HowWorks() {
    return (
        <section
            className=" flex flex-col items-center mt-[15vh] px-6"
            id="function"
        >
            <h1 className="text-[#3B821D] text-4xl md:text-5xl font-medium text-center">
                Como funciona
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-7xl w-full">

                {/* Card 1 */}
                <div
                    className="
                        bg-white
                        rounded-3xl
                        p-8
                        shadow-md
                        hover:shadow-xl
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        flex
                        flex-col
                        items-center
                        text-center
                        gap-6
                    "
                >
                    <div
                        className="
                            w-16
                            h-16
                            rounded-full
                            bg-[#3B821D]
                            text-white
                            flex
                            items-center
                            justify-center
                            text-2xl
                            font-bold
                        "
                    >
                        1
                    </div>

                    <h2 className="text-2xl font-semibold text-[#3B821D]">
                        Capacitação
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                        Os jovens participantes recebem formação em áreas como
                        marketing digital, tecnologia e desenvolvimento pessoal.
                    </p>
                </div>

                {/* Card 2 */}
                <div
                    className="
                        bg-white
                        rounded-3xl
                        p-8
                        shadow-md
                        hover:shadow-xl
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        flex
                        flex-col
                        items-center
                        text-center
                        gap-6
                    "
                >
                    <div
                        className="
                            w-16
                            h-16
                            rounded-full
                            bg-[#3B821D]
                            text-white
                            flex
                            items-center
                            justify-center
                            text-2xl
                            font-bold
                        "
                    >
                        2
                    </div>

                    <h2 className="text-2xl font-semibold text-[#3B821D]">
                        Desenvolvimento
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                        Durante o projeto, os estudantes desenvolvem habilidades
                        práticas para o mercado de trabalho e para a vida.
                    </p>
                </div>

                {/* Card 3 */}
                <div
                    className="
                        bg-white
                        rounded-3xl
                        p-8
                        shadow-md
                        hover:shadow-xl
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        flex
                        flex-col
                        items-center
                        text-center
                        gap-6
                    "
                >
                    <div
                        className="
                            w-16
                            h-16
                            rounded-full
                            bg-[#3B821D]
                            text-white
                            flex
                            items-center
                            justify-center
                            text-2xl
                            font-bold
                        "
                    >
                        3
                    </div>

                    <h2 className="text-2xl font-semibold text-[#3B821D]">
                        Aplicação Social
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                        O conhecimento adquirido é aplicado em ações que ajudam
                        a fortalecer e transformar a comunidade local.
                    </p>
                </div>

            </div>
        </section>
    )
}