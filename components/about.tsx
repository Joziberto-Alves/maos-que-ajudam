export default function About() {
    return (
        <div className="min-h-screen flex flex-col text-[#3B821D] justify-center mt-30">
            <h1 className="text-5xl font-semibold text-center">Sobre o Projeto</h1>
            <section className="flex items-center mt-10  md:flex-row flex-col ">
                <div className="md:w-1/2 flex-col justify-center p-9 text-2xl leading-relaxed">
                    {/* texto */}
                    <p className="mb-6 text-justify ">
                    O projeto “Mãos que ajudam” nasceu com o 
                    propósito de desenvolver jovens estudantes e, 
                    ao mesmo tempo, contribuir com a 
                    comunidade de Amontada.
                    </p>
                    <p className="text-justify">O projeto “Mãos que ajudam” nasceu com o 
                    propósito de desenvolver jovens estudantes e, 
                    ao mesmo tempo, contribuir com a 
                    comunidade de Amontada.
                    </p>
                </div>

                <div className="md:w-1/2 flex flex-col items-center justufy-center ">
                    {/* imagem */}
                    <div className="bg-gray-200 p-50 rounded-xl"></div>
                </div>
            </section>
        </div>
    )
}