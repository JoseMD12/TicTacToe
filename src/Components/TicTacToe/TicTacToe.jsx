import React, { useRef, useState } from "react";
import "./TicTacToe.css";
import circle_icon from "../Assets/circle.png";
import cross_icon from "../Assets/cross.png";

let data = Array(9).fill(null);

const TicTacToe = () => {
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const containerRef = useRef(null);
    const titleRef = useRef("");

    const toggle = (e, index) => {
        if (lock) return 0;

        if (count % 2 === 0) {
            e.target.innerHTML = `<img src=${cross_icon} alt='cross' />`;
            containerRef.current.style.cursor = `url(${circle_icon}), auto`;

            data[index] = "X";
        } else {
            e.target.innerHTML = `<img src=${circle_icon} alt='circle' />`;
            containerRef.current.style.cursor = `url(${cross_icon}), auto`;

            data[index] = "O";
        }

        setCount(++count);
        checkWinner();
    };

    const checkWinner = () => {
        // > Add IA here
        // > Verify the winner
        // let winner = "X";
        // if (winner === "X") {
        //     setLock(true);
        //     titleRef.current.innerHTML = `Jogador <img src=${cross_icon} alt='cross' /> ganhou!`;
        // } else if (winner === "O") {
        //     setLock(true);
        //     titleRef.current.innerHTML = `Jogador <img src=${circle_icon} alt='circle' /> ganhou!`;
        // }

        if (count === 9) {
            setLock(true);
            titleRef.current.innerHTML = `Empate!`;
            console.log(data);
        }
    };

    const reset = () => {
        data = Array(9).fill(null);
        titleRef.current.innerHTML = "Jogo da Velha";
        setCount(0);
        setLock(false);
        document.querySelectorAll(".boxes").forEach((box) => {
            box.innerHTML = "";
        });
    };

    return (
        <div className='container' ref={containerRef}>
            <h1 className='title' ref={titleRef}>
                Jogo da Velha
            </h1>
            <div className='board'>
                <div className='row1'>
                    <div className='boxes' onClick={(e) => toggle(e, 0)}></div>
                    <div className='boxes' onClick={(e) => toggle(e, 1)}></div>
                    <div className='boxes' onClick={(e) => toggle(e, 2)}></div>
                </div>
                <div className='row2'>
                    <div className='boxes' onClick={(e) => toggle(e, 3)}></div>
                    <div className='boxes' onClick={(e) => toggle(e, 4)}></div>
                    <div className='boxes' onClick={(e) => toggle(e, 5)}></div>
                </div>
                <div className='row3'>
                    <div className='boxes' onClick={(e) => toggle(e, 6)}></div>
                    <div className='boxes' onClick={(e) => toggle(e, 7)}></div>
                    <div className='boxes' onClick={(e) => toggle(e, 8)}></div>
                </div>
            </div>
            <button className='reset' onClick={() => reset()}>
                Reset
            </button>
        </div>
    );
};

export default TicTacToe;
