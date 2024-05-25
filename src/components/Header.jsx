import PlusIcon from '../assets/icons/plus.png'

export default function Header() {
    return (
        <header className={`w-full bg-[#D9D9D9] h-12 flex items-center py-3 px-4 gap-2`}>
            <img src={PlusIcon} width="44px" alt="" />
            <h2 className='font-semibold text-2xl'>SaludTotal</h2>
        </header>
    )
}