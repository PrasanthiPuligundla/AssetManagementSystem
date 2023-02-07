import './Button.css';

function Button(props) {
    return(
        <div>
            <button className="button">
            <span>
            {props.operation}
          </span>
            </button>     
        </div>
    )
}

export default Button;