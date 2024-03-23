import { Link, useParams } from "react-router-dom";

export default function PlacesPage() {
    const { action } = useParams();

    return (
        <div>
            {action !== 'new' && (
                <div className="text-center">
                    <Link className="inline-flex gap-1 bg-primary rounded-full px-3 py-2 pr-4 text-white mt-5" to={'/account/places/new'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Add new place
                    </Link>

                </div>
            )}
            {action === 'new' && (
                <div>
                    <form action="">
                        <h2 className="text-2xl">Title</h2>
                        <p className="text-gray-500 text-sm">title for your place</p>
                        <input type="text" placeholder="tittle" />
                        <h2 className="text-xl">Address</h2>
                        <p className="text-gray-500 text-sm">addres to this place</p>
                        <input type="text" placeholder="address" />
                        <h2 className="text-xl">Photos</h2>
                        <p className="text-gray-500 text-sm">Photos of your place</p>
                        <div className="">
                            <input type="text" className="shadow  border rounded py-2 px-3 mr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Add using a link" />
                            <button className=" bg-primary rounded-full px-3 py-2 pr-4 text-white mt-5">Add photo</button>
                        </div>
                        <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                            <button className="flex items-center justify-center gap-1 border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>

                                Upload</button>
                        </div>

                        <h2 className="text-xl">Description</h2>
                        <p className="text-gray-500 text-sm">description of the place</p>


                    </form>
                </div>
            )}


        </div>
    )

}