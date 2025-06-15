const Button = ({ children, onClick, className, outLined }) => {
    return <button onClick={onClick} className={`${className} ${outLined === true? "outline-1" : "outline-none"} outline-primary rounded-sm px-2`} >
        {children}
    </button>

}
export default Button