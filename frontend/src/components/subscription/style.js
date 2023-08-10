import { styled } from "styled-components";

export const PlanDiv = styled.div`
    background-color: white;
    position: fixed;
    width: 100%;
    height: 100%;
    user-select: none;

    .logout{
        border: 2px solid rgb(27, 93, 169);
        border-radius: 5px;
        padding: 0.5% 1%;
        position: absolute;
        background-color: #ffffff;
        color: rgb(27, 93, 169);
        right: 1%;
        top: 1%;
        cursor:pointer;
        font-weight: bold;
        
    }
    h1{
        text-align: center;
        margin-top: 3%;
        color: rgb(17, 70, 131);
    }

    .grid-box{
        position: relative;
        display: grid;
        grid-template-columns: 36% 16% 16% 16% 16%;
        width:65%;
        margin: auto;
        margin-top: 2%;

        .details{

            .time-period{
                margin-top: 7%;
                background-color:rgb(27, 93, 169);
                color: white;
                width: 50%;
                padding: 3%;
                border-radius: 50px;
                margin-bottom: 13.3%;
                button{
                    border: 0;
                    background-color: white;
                    border-radius: 55px;
                    padding: 6% 10%;
                    cursor: pointer;
                    transition: 0.2s;
                    font-weight: bold;
                }
            }
            .subs{
                margin-top: 8.5%;
                padding: 3%;
                margin-left: 2%;
                color: #353535;
                font-size: 0.9em;
            }
            .quality{
                margin-bottom: 8.3%;
            }
            .res{
                margin-bottom: 8.2%;
            }
        }

        .plan-type{
            text-align: center;
            opacity: 0.6;
            color: #272626;
            cursor: pointer;
            transition: 0.3s;
            font-weight: bold;

            .name{
                padding: 25% 0%;
                background-color: rgb(27, 93, 169);
                color: white;
                width: 80%;
                margin: auto;

            }
            .triangle{
                visibility: hidden;
                width: 0;
                height: 0;
                margin: auto;
                border-top: 10px solid rgb(27, 93, 169);
                border-left: 8px solid white;
                border-right: 8px solid white;
                transition: 0.1s;
            }
            .price{
                margin-top: 13%;
                padding: 8%;

            }
            .quality,.res,.devices{
                margin-top: 16%;
                padding: 8%;
                .d-type{
                    margin-bottom: 20%;
                    font-size: 0.9vw;
                }
            }
        }

    }

    .grid-box::after{
        content: "";
        width: 100%;
        position: absolute;
        height: 0.9px;
        background-color: #a8a6a6;
        margin-top: 27%;
    }
    .grid-box::before{
        content: "";
        width: 100%;
        position: absolute;
        height: 1px;
        background-color: #a8a6a6;
        margin-top: 34%;
    }

    .error{
        text-align: center;
        color: red;
    }
    .next-btn{
        width: 20%;
        margin-top: 2%;
        margin-left: 40%;
        padding: 1%;
        background: rgb(27, 93, 169);
        color: white;
        border-radius: 4px;
        border: 0;
        cursor: pointer;
        transition: 0.3s;
    }
    .next-btn:hover{
        box-shadow: 0px 0px 5px rgb(27, 93, 169);
    }
` 