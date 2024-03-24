
import carIcon from './assets/car.svg'
import kitchenIcon from './assets/kitchen.svg'
import washerIcon from './assets/washer.svg'


export default function PerksForPlace({selected, onChange}) {
    return (
        <>
            <label className="border flex justify-center items-center gap-4 py-3 rounded-full shadow">
                <input type="checkbox" />
                <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
                    </svg>
                    <span>Wifi</span>
                </div>
            </label>
            <label className="border flex justify-center items-center gap-4 py-3 rounded-full shadow">
                <input type="checkbox" />
                <div className="flex items-center gap-1">
                    <img src={carIcon} alt="carIcon" />
                    <span>Parking spot</span>
                </div>
            </label>
            <label className="border flex justify-center items-center gap-4 py-3 rounded-full shadow">
                <input type="checkbox" />
                <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
                    </svg>
                    <span>TV</span>
                </div>

            </label>
            <label className="border flex justify-center items-center gap-4 py-3 rounded-full shadow">
                <input type="checkbox" />
                <div className="flex items-center gap-1">
                    <img src={kitchenIcon} alt="kitchenIcon" />
                    <span>Kitchen</span>
                </div>
            </label>
            <label className="border flex justify-center items-center gap-4 py-3 rounded-full shadow">
                <input type="checkbox" />
                <div className="flex items-center gap-1">
                    <img src={washerIcon} alt="washerIcon" />
                    <span>Washer</span>
                </div>
            </label>



        </>
    )
}