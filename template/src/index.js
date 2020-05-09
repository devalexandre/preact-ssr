import { h } from 'preact';

import './style.css';

const App = () => {

    const onHandleClick = () =>{
        alert('click')
    }

    return (
        <button onClick={onHandleClick}>Teste</button>
    )
};

export default App;
