'use client'
import {useState, React} from 'react'

export const Services = () => {

    const [secState, setSecState] = useState(false);
    const [devState, setDevState] = useState(false);
    const [aiState, setAiState] = useState(false);
    
    const [secContent, setSecContent] = useState("La sécurité est un enjeu majeur pour toute entreprise moderne. Chez Lynaat, Nous offrons à nos clients des services en cybersécurité, incluant l'évaluation des risques, la mise en place de systèmes de protection, la surveillance continue des menaces, et des audits de sécurité réguliers. Notre objectif est de protéger vos données sensibles contre les cyberattaques, les violations de données et autres menaces numériques.");
    const [devContent, setDevContent] = useState("Nous offrons des services de développement couvrant le web, le mobile et le logiciel. Qu’il s’agisse de créer des sites, des applications mobiles ou des logiciels, nous proposons des solutions personnalisées adaptées aux besoins de chaque client, en mettant l'accent sur la performance, la sécurité et l'expérience utilisateur");
    const [aiContent, setAiContent] = useState("Chez Lynaat, nous utilisons l’intelligence artificielle, l’analyse de données, et des solutions de Business Intelligence pour optimiser vos processus, automatiser vos tâches, et améliorer la prise de décision. Nous développons des solutions d’apprentissage automatique, fournissons des analyses prédictives, et créons des chatbots et des assistants virtuels pour enrichir l'interaction client. Ces technologies vous permettent de prendre des décisions éclairées et de maintenir votre compétitivité dans ce contexte digital.");
    
    function truncateText(text) {
        const maxLength = 50;
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    }

    return (
        <section id='services' className='p-28 flex flex-col gap-16 max-md:p-16 max-sm:px-0 max-sm:8'>
            <h1 className='text-center max-md:text-3xl text-transparent bg-clip-text font-bold  text-4xl tracking-[0.25rem] uppercase bg-gradient-to-r from-mainGreen to-secondGreen'>Services</h1>
            <div className='flex flex-row max-md:flex-col flex-wrap gap-16  items-center justify-center  w-full '>

                {/* Service Card */}
                <div className=' w-[300px] relative'>
                    {(!secState) && <div className='w-full h-full  z-10 absolute bg-gradient-to-b from-transparent to-white'></div> }
                    <div className=' bg-cardGrey rounded-lg p-4  flex flex-col gap-2'>
                        <h4 className='text-blackColor font-semibold text-md'>Cybersecurity</h4>
                        <p className='text-sm  transition-all duration-500'> {secState ? secContent : secContent.slice(0, 200) } </p>
                    </div>
                    <div className='w-full absolute z-20 flex justify-center '>
                        <button onClick={() => setSecState(!secState)}>
                            <img src="arrow_down.png" className={secState ? 'rotate-180' : ''}   height={30} width={30} alt="" />
                        </button>
                    </div>
                </div>

                {/* Service Card */}
                <div className=' w-[300px] relative'>
                    {(!devState) && <div className='w-full h-full  z-10 absolute bg-gradient-to-b from-transparent to-white'></div> }
                    <div className=' bg-cardGrey rounded-lg p-4  flex flex-col gap-2'>
                        <h4 className='text-blackColor font-semibold text-md'>Development</h4>
                        <p className='text-sm  transition-all duration-500'> {devState ? devContent : devContent.slice(0, 200) } </p>
                    </div>
                    <div className='w-full absolute z-20 flex justify-center '>
                        <button onClick={() => setDevState(!devState)}>
                            <img src="arrow_down.png" className={devState ? 'rotate-180' : ''}   height={30} width={30} alt="" />
                        </button>
                    </div>
                </div>

                {/* Service Card */}
                <div className=' w-[300px] relative'>
                    {(!aiState) && <div className='w-full h-full  z-10 absolute bg-gradient-to-b from-transparent to-white'></div> }
                    <div className=' bg-cardGrey rounded-lg p-4  flex flex-col gap-2'>
                        <h4 className='text-blackColor font-semibold text-md'>AI & BI</h4>
                        <p className='text-sm  transition-all duration-500'> {aiState ? aiContent : aiContent.slice(0, 200) } </p>
                    </div>
                    <div className='w-full absolute z-20 flex justify-center '>
                        <button onClick={() => setAiState(!aiState)}>
                            <img src="arrow_down.png" className={aiState ? 'rotate-180' : ''}   height={30} width={30} alt="" />
                        </button>
                    </div>
                </div>

                
            </div>
        </section>
    )
}
