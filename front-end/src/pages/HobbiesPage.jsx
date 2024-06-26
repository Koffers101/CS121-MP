import {useEffect, useState} from "react";

const HobbiesPage = ({isaId = 1, kofiId = 2, nicoId = 3}) => {

    const [isaHobbies, setIsaHobbies] = useState([]);
    const [kofiHobbies, setKofiHobbies] = useState([]);
    const [nicoHobbies, setNicoHobbies] = useState([]);
    const [isaName, setIsaName] = useState('');
    const [kofiName, setKofiName] = useState('');
    const [nicoName, setNicoName] = useState('');

    useEffect(() => {

        fetch(`http://localhost:8080/api/v1/member/${isaId}`)
            .then(response => response.json())
            .then(data => setIsaName(data.name))
            .catch(error => console.error('Error fetching user details:', error));

        fetch(`http://localhost:8080/api/v1/member/${kofiId}`)
            .then(response => response.json())
            .then(data => setKofiName(data.name))
            .catch(error => console.error('Error fetching user details:', error));

        fetch(`http://localhost:8080/api/v1/member/${nicoId}`)
            .then(response => response.json())
            .then(data => setNicoName(data.name))
            .catch(error => console.error('Error fetching user details:', error));

        fetch(`http://localhost:8080/api/v1/hobbies/member/${isaId}`)
            .then(response => response.json())
            .then(data => setIsaHobbies(data))
            .catch(error => console.error('Error fetching hobbies:', error));

        fetch(`http://localhost:8080/api/v1/hobbies/member/${kofiId}`)
            .then(response => response.json())
            .then(data => setKofiHobbies(data))
            .catch(error => console.error('Error fetching hobbies:', error));

        fetch(`http://localhost:8080/api/v1/hobbies/member/${nicoId}`)
            .then(response => response.json())
            .then(data => setNicoHobbies(data))
            .catch(error => console.error('Error fetching hobbies:', error));
    }, [isaId, kofiId, nicoId]);

    return (
        <>
            <section className="mt-1 mb-1 bg-creamsicle py-4">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-14">
                        {[isaHobbies, kofiHobbies, nicoHobbies].map((hobbies, index) => (
                            <div className="p-6 bg-cream-1 rounded-lg shadow-lg" key={index}>
                                <div className="flex flex-col space-y-4">
                                    <h1 className="text-l mb-4 text-center font-press w-full">
                                        {index === 0 ? isaName : index === 1 ? kofiName : nicoName}'s Hobbies
                                    </h1>
                                    <div className="flex flex-col space-y-4 flex-1">
                                        {hobbies.map((hobby) => (
                                            <div
                                                key={hobby.id}
                                                className="bg-white border border-gray-200 p-4 rounded-lg shadow flex flex-col flex-1"
                                            >
                                                <strong className="m-1 block font-semibold">{hobby.name}</strong>
                                                <p className="m-1 text-gray-600 text-sm flex-1">{hobby.description}</p>
                                                <div
                                                    className="relative w-full overflow-hidden rounded-lg mt-2"
                                                    style={{paddingBottom: '100%'}}
                                                >
                                                    <div
                                                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                                                        {hobby.media ? (
                                                            <img
                                                                src={hobby.media}
                                                                alt={`${hobby.name} media`}
                                                                className="object-cover w-full h-full"
                                                            />
                                                        ) : (
                                                            <div className="text-center text-gray-400">No media
                                                                available</div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
export default HobbiesPage