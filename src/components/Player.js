import './Player.css';
import Logo from './public/avatar/user-solid.svg'
import bB from './public/piezas/bB.png'

const Player = ({ nombre }) => {
    return (
        <>
            <div className="container">
                <img className="img" src={Logo} width={30} />
                <div className='container2'>
                    <span className='name'><h2>{nombre}</h2></span>
                    <div>
                        <img className="piezas" src={bB} />
                    </div>
                </div>
            </div>

        </>
    );
}

export default Player;