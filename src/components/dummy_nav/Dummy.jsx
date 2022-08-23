import { Navbar } from "../header/Navbar"

export const Dummy = ({ props }) => {
    return (
        <div>
            <Navbar />

            <div class="flex justify-center">
                <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">{props.data}</h5>
                </div>
            </div>
        </div>
    )
}
