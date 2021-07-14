type ButtonsType = {
    count: number
    maxNumber: number
    onClickIncrease: () => void
    onClickDecrease: () => void
}

const Buttons = (props: ButtonsType) => {

    return (
        <div className="counter-wrapper">
            <div className="counter">
                <h1 className={props.count === props.maxNumber ? 'active' : ''}>{props.count}</h1>
            </div>
            <div>
                <button
                    disabled={props.count === props.maxNumber ? true : false}
                    className="inc"
                    onClick={props.onClickIncrease}
                >increase
                </button>
                <button
                    disabled={props.count === 0 ? true : false}
                    onClick={props.onClickDecrease}
                    className="reset">reset
                </button>
            </div>

        </div>
    )
}

export default Buttons;
