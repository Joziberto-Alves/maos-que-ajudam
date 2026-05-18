import Image from "next/image"
export default function Impacts() {
    return (
        <div className="min-h-screen flex flex-col text-[#3B821D] justify-center my-30 gap-10">
            <section className="flex items-center  md:flex-row flex-col ">
                
                <div className="md:w-1/2 flex-col p-9 text-lg md:text-2xl leading-relaxed ">
                    <h1 className="text-4xl md:text-5xl font-medium text-center mb-[10vh]">Impacto</h1>
                    {/* texto */}
                    <p className="mb-6 text-justify ">
                    O projeto gera impacto tanto na formação dos estudantes quanto na comunidade local.
                    </p>
                    <p className="text-justify">Empresas ganham visibilidade, alunos desenvolvem visão estratégica e famílias recebem apoio através das ações solidárias.
                    </p>
                </div>

                <div className="md:w-1/2 flex flex-col items-center justufy-center ">
                    {/* imagem */}
                    <Image 
                    src="/logo.svg"
                    alt="impacto"
                    width={200}
                    height={200}
                    className=""
                    ></Image>
                </div>
            </section>
        </div>
    )
}