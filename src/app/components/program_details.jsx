
export default function ProgramDetails({ title, image, date, script}) {

    return (
        <div className="max-w-3xl mx-auto px-4  border-2 rounded-xl my-10">
            <img 
                src={image} 
                alt="title" 
                className="w-full h-80 object-cover rounded-lg mt-4" 
            />
            <br />
            <h1 className="text-3xl font-bold text-blackColor mb-4">
                {title}
            </h1>
            <p className="text-gray-500">{date}</p>
            <p className="mt-6 text-lg">
            {script}
            </p>
            <br />
            <br />
        </div>
    );
}
