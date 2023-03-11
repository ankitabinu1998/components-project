import propTypes from 'prop-types';
import classNames from 'classnames';


function Button ({children, rounded, variant, outline,...rest}) {
    let className = classNames(rest.className,'m-2 p-2', {
        'border border-cyan-400 text-cyan-400': variant === 'primary' && outline,
        'border border-black text-black': variant === 'secondary' && outline,
        'border border-green-500 text-green-500': variant === 'success' && outline,
        'border border-yellow-300 text-yellow-600': variant === 'warning' && outline,
        'border border-rose-500 text-rose-500': variant === 'danger' && outline,
        'rounded-lg': rounded,
        'bg-cyan-400': variant === 'primary' && !outline,
        'bg-black text-white': variant === 'secondary' && !outline,
        'bg-green-500': variant === 'success' && !outline,
        'bg-yellow-300': variant === 'warning' && !outline,
        'bg-rose-500': variant === 'danger' && !outline,
    })
    return (
        <button {...rest} className={className} >{children}</button>
    )
}

Button.propTypes = {
    checkVariationValue: (props => {
        const allowedVariants = ['primary','secondary','success','warning','danger'];
        if (!allowedVariants.includes(props.variant)) {
            return new Error(`Entered variant: ${props.variant} \n Allowed variants: primary, secondary, success, warning, danger`);
        }
    }),
    rounded: propTypes.bool,
    outline: propTypes.bool

}

export default Button;