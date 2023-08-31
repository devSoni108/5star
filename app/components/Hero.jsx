import Slider from "./Slider";
import { SliderData } from './SliderData';

const Hero = () => {
    return (
        <div className="bg-gray-100">
            <Slider slides={SliderData} />
        </div>
    )
}

export default Hero