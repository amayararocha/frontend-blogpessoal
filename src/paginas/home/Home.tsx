import './Home.css';
import { useState } from 'react';

function Home() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div>
            {loggedIn ? (
                <>
                    <h1 className="titulo" >Bem-vindo de volta!</h1>
                    <h1 className="titulo">Home</h1>
                    <img src="https://i.imgur.com/p5iXQGv.jpg" alt="Imagem Tela Inicial" className="img" />
                </>
            ) : (
                <button onClick={() => setLoggedIn(true)}>Entrar</button>
            )}
        </div>
    );
}

export default Home;