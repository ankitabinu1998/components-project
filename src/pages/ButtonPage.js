import Button from "../components/Button";
import { createElement } from 'react';
function ButtonPage() {
    const variantTypes = ['primary','secondary','success','warning','danger'];
    const rounded = [false, true];
    const outline = [false, true];
    const renderedButtons = [];
    const handleClick= () => {
        console.log('Button was clicked');
    }
    const handleMouseOver = () => {
        console.log('Hovered over mouse');
    }
    const renderButtons = () => {
        let variantFlexWrap ;
        let count = 0;
        for (let i=0; i<variantTypes.length; i++) {
            let buttonChildren = [];
            for (let j=0; j<rounded.length; j++) {
                for (let k=0; k<outline.length; k++) {
                    buttonChildren.push(
                        <div key={`${i}${j}${k}`}>
                            <Button className='capitalize' variant={variantTypes[i]} rounded={rounded[j]} outline={outline[k]} onClick={handleClick} onMouseOver={handleMouseOver}>{variantTypes[i]}</Button>
                        </div>
                    );
                }
            }
            variantFlexWrap = createElement('div',{className:'grid grid-cols-4',key:count++},buttonChildren);
            renderedButtons.push(variantFlexWrap);
        }
    }
    renderButtons();
    return (
    <div >
        {renderedButtons.map(button => {
            return button;
        })}
    </div>
    )
}

export default ButtonPage;