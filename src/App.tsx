import React, {useState} from 'react';
import './App.css';
import Buttons from './counter/buttons';



function App() {

    const [count, setCount] = useState<number>(0);

    const onClickIncrease = () => {
        if (count < 5) {
            setCount(count + 1)
        }
    };
    const onClickDecrease = () =>
        setCount(0);

    let maxNumber = 5;

    return (
        <div className="app-wrapper">
            <Buttons
                count={count}
                onClickIncrease={onClickIncrease}
                onClickDecrease={onClickDecrease}
                maxNumber={maxNumber}
            />
        </div>
    );
}

export default App;
