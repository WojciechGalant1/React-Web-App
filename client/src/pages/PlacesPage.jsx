import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import PerksForPlace from "../PerksForPlace";


export default function PlacesPage() {
    const { action } = useParams();
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [photoLink, setPhotoLink] = useState('');
    const [description, setDescription] = useState('');
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [maxGuests, setMaxGuests] = useState(1);
    
    function inputHeader(text) {
        return (
            <h2 className="text-2xl mt-4">{text}</h2>
        );
    }

    function inputDescription (text) {
        return (
            <p className="text-gray-500 text-sm mb-1">{text}</p>

        );
    }

    function preInput(header, description) {
        return (
            <>
                {inputHeader(header)}
                {inputDescription(description)}
            </>
        );
    }

    async function addPhotoByLink(ev) {
        ev.preventDefault();
        const { data:filename } = await axios.post('/upload-by-link', { link: photoLink })
        setAddedPhotos(prev => {
            return [...prev, filename];
        });
        setPhotoLink('');
    }

    function uploadPhoto(ev) {
        const files = ev.target.files;
        const data = new FormData();
        for (let i=0; i<files.length; i++) {
            data.append('photos', files[i]);
        }

        axios.post('/upload', data, {
            headers: {'Content-Type':'multipart/form-data'}
        }).then(response => {
            const {data:filenames} = response;
            setAddedPhotos(prev => {
                return [...prev, ...filenames];
            });
        })

    }

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
                    <form>
                        {preInput('Title','title for your place')}
                        <input value={title} onChange={ev =>setTitle(ev.target.value)} className="custom-input" type="text" placeholder="tittle" />
                        
                        {preInput('Address','address to this place')}
                        <input value={address} onChange={ev =>setAddress(ev.target.value)} className="custom-input" type="text" placeholder="address" />

                        {preInput('Photos','Photos of your place')}
                        <div className="">
                            <input value={photoLink} onChange={ev => setPhotoLink(ev.target.value)} type="text" className="custom-input" placeholder="Add using a link" />
                            <button onClick={addPhotoByLink} className="primary-btn">Add photo</button>
                        </div>
                        
                        <div className="items-center mt-2 gap-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ">

                            {addedPhotos.length > 0 && addedPhotos.map(link => (
                                <div className="">
                                    <img className="rounded-2xl" src={'http://localhost:4000/uploads/' + link} alt="image" />

                                </div>
                            ))}

                            <label className="cursor-pointer shadow focus:shadow-lg flex items-center justify-center gap-1 border bg-transparent rounded-2xl p-3 text-2xl text-gray-600">
                                <input type="file" multiple className="hidden" onChange={uploadPhoto}/>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                                Upload
                            </label>
                        </div>

                        {preInput('Description','Description of the place')}
                        <textarea value={description} onChange={ev =>setDescription(ev.target.value)} className="w-full shadow focus:shadow-lg border my-1 py-2 px-3 rounded-2xl" />

                        {preInput('Perks','Select all the perks of your place')}
                        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6">
                            <PerksForPlace selected={perks} onChange={setPerks}/>
                        </div>

                        {preInput('Extra info','place rules etc')}
                        <textarea value={extraInfo} onChange={ev =>setExtraInfo(ev.target.value)} className="w-full shadow focus:shadow-lg border my-1 py-2 px-3 rounded-2xl" />
                        
                        {preInput('check in & out times','add check in and out times')}
                        <div className=" grid gap-2 sm:grid-cols-3">
                            <div>
                                <h3 className="mt-2 mb-1">Check in</h3>
                                <input value={checkIn} onChange={ev =>setCheckIn(ev.target.value)}  className="custom-input" type="text" placeholder="15:00" />
                            </div>
                            <div>
                                <h3 className="mt-2 mb-1">Check out</h3>
                                <input value={checkOut} onChange={ev =>setCheckOut(ev.target.value)} className="custom-input" type="text" placeholder="7:00" />
                            </div>
                            <div>
                                <h3 className="mt-2 mb-1">Max guests</h3>
                                <input value={maxGuests} onChange={ev =>setMaxGuests(ev.target.value)} className="custom-input" type="number" placeholder="1"/>
                            </div>
                        </div>
                        <div className="text-center mt-10">
                            <button className="bg-primary rounded-full py-2 text-white mt-5 w-5/12 max-w-full text-xl">Save</button>
                        </div>

                    </form>
                </div>
            )}


        </div>


    )

}