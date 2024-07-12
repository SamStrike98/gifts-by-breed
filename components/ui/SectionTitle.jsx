
// REACT ICONS
import { FaPaw } from "react-icons/fa";

const SectionTitle = ({ text, color }) => {
    const colorList = {
        primary: 'text-primary',
        secondary: 'text-secondary'
    }
    return (
        <div className="flex flex-row items-center pt-10 px-3 gap-6 sm:gap-8">
            <span className={`${colorList[color]}`}><FaPaw size={25} /></span>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold ${colorList[color]}`}>{text}</h2>
            <span className={`${colorList[color]}`}><FaPaw size={25} /></span>
        </div>

    )
}

export default SectionTitle