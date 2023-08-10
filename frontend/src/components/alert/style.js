import { styled } from "styled-components";

export const AlertCardDiv = styled.div`
    .alert{
        span{
            position: absolute;
            right: 1%;
            top: 5%;
            cursor: pointer;
            font-size: 1.5vw;
            padding: 0% 2%;
        }
        position: fixed;
        width: 20%;
        padding: 1.5%;
        border: 3px solid white;
        text-align: center;
        border-radius: 10px;
        background-color: white;
        right: 40%;
        top: 2%;
        color: white;
        transition: 0.2s;
        font-weight: bold;
        animation: alert-anim 0.3s linear 0s 1;
    }
    @keyframes alert-anim {
        0%{
            top: -10%;
        }
        100%{
            top: 2%;
        }
    }

`