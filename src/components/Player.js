import './Player.css';
import Logo from './public/avatar/user-solid.svg'
import bB from './public/piezas/bB.png'
import bN from './public/piezas/bN.png'
import bP from './public/piezas/bP.png'
import bQ from './public/piezas/bQ.png'
import bR from './public/piezas/bR.png'
import wB from './public/piezas/wB.png'
import wN from './public/piezas/wN.png'
import wP from './public/piezas/wP.png'
import wQ from './public/piezas/wQ.png'
import wR from './public/piezas/wR.png'
import Clock from "./Clock";

import { useEffect, useState } from 'react';

const Player = ({ nombre, color, turnInfo }) => {

    const [piecesList, setPiecesList] = useState([])

    const pieces = {
        bB: bB,
        bN: bN,
        bP: bP,
        bQ: bQ,
        bR: bR,
        wB: wB,
        wN: wN,
        wP: wP,
        wQ: wQ,
        wR: wR
    }

    const addCapturedPiece = (capturedPiece) => {
        const lastId = piecesList.length > 0 ? piecesList[piecesList.length - 1].id : 0;
        const claveDeseada = capturedPiece;
        const valorDeseado = pieces[claveDeseada];
        const newCapturedPiece = {
            id: lastId + 1,
            piece: valorDeseado
        }
        const newPiecesList = [...piecesList]
        newPiecesList.push(newCapturedPiece);
        setPiecesList(newPiecesList);
    }

    useEffect(() => {
        let capturedPiece = '';
        if (turnInfo != null && turnInfo.captured != undefined) {
            capturedPiece = turnInfo.captured;
            if (turnInfo.color === color) {
                let color = turnInfo.color === "w" ? "b" : "w";
                capturedPiece = color + capturedPiece.toUpperCase();
                addCapturedPiece(capturedPiece);
            }
        }
    }, [turnInfo]);

    return (
        <>
            <div className="container">
                <img className="img" src={Logo} width={30} />
                <div className='container2'>
                    <span className='name'><h2>{nombre}</h2></span>
                    <div>
                        <p>
                            {piecesList.map(imagen => {
                                return (
                                    <img key={imagen.id} src={imagen.piece} width={14} />
                                )
                            })}
                        </p>
                    </div>
                </div>
            </div>
            <Clock turnInfo={turnInfo} black={color === "b" ? true : false} />

        </>
    );
}

export default Player;