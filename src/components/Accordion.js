import { useState} from "react";
import { IoIosArrowDropdownCircle, IoIosArrowDropleftCircle} from "react-icons/io";

function Accordion ({accordionContents}) {
    const [indexOfOpen, setIndexOfOpen] = useState();
    const handleClick = (index) => {
        setIndexOfOpen(indexOfOpen === index ? null : index); // collapse the accordion if the same accordion is clicked again
        // setIndexOfOpen((current)=>{
        //     if (current=== index) return null;
        //     return index;
        // })
    }

    const renderedAccordions = accordionContents.map((accordionContent,index) => {
        return(
            <div className="mx-3 my-1" key={index}>
                <div className="flex items-center justify-between bg-gray-400 py-1 px-0.5 capitalize" onClick={()=>{handleClick(index)}}>
                    <h1 className="font-bold text-lg">{accordionContent.heading}</h1>
                    {indexOfOpen===index ? <IoIosArrowDropdownCircle/> : <IoIosArrowDropleftCircle/> }
                </div>
                {indexOfOpen===index && <p className="py-2 px-0.5 border border-gray-500">{accordionContent.description}</p>}
            </div>
        )
    });

    return (
        <div>
            {renderedAccordions}
        </div>
    )
}

export default Accordion;