import 'app/i18n';
import ReactCountryFlag from "react-country-flag"

const availabeLangs = [
    {name: "Français", code: "fr", icon: <ReactCountryFlag countryCode="FR"/>},
    {name: "English", code: "en", icon: <ReactCountryFlag countryCode="US"/>},
]

export default function Lang() {
    /*const {t, i18n} = useTranslation();

    const handleTrans = (code: string) => {
        i18n.changeLanguage(code);
    };

    return (
        <div className="relative inline-block text-left animate-fade-in">
            <div>
                <button type="button"
                        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-zinc-900 border border-transparent rounded-md hover:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        id="options-menu" aria-haspopup="true" aria-expanded="true" onClick={() => {
                    const dropdownElement = document.getElementById("dropdown");
                    if (dropdownElement) {
                        dropdownElement.classList.toggle("hidden");
                    }
                }}>
                    {availabeLangs.find((l) => l.code === i18n.language)?.icon}
                </button>
            </div>
            <div
                className="absolute right-0 z-10 hidden w-12 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                id="dropdown">
                <div role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {availabeLangs.map((l) => (
                        <button key={l.code} onClick={() => {
                            handleTrans(l.code);
                            const dropdownElement = document.getElementById("dropdown");
                            if (dropdownElement) {
                                dropdownElement.classList.toggle("hidden");
                            }
                        }}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-gray-900 rounded-md w-full text-left"
                                role="menuitem">{l.icon}</button>
                    ))}
                </div>
            </div>
        </div>
    );*/
    return <></>
}