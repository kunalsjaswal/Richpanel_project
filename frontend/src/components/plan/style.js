import { styled } from "styled-components";

export const PlanInfoDiv = styled.div`
    background-color: white;
    width: 35%;
    padding: 2%;
    border-radius: 10px;
    margin: auto;
    margin-top: 10%;

    .card-head{
        display: grid;
        grid-template-columns: auto 50% 10%;
        text-align: left;
        align-items:center;
        h3{
            padding: 0;
        }
        .status{
            color: #1881d6;
            width: 25%;
            text-align: center;
            font-size: 0.7vw;
            border-radius: 4px;
            padding: 2%;
            font-weight: bold;
            background-color: #2f9df741;

        }
        .cancel{
            color: #4c589b;
            font-weight: bold;
            background-color: white;
            border: 0;
            cursor: pointer;
        }
    }

    .card-body{
        margin-top: 5%;
        .type{
            color: #4c4c4c;
        }
        .devices{
            color: gray;
            font-size:0.9vw;
            margin-top: 1%;
        }
        .pricing{
            margin-top: 3%;
        }
        .change-plan{
            border: 2px solid #3a6f9a;
            font-weight: bold;
            background-color: white;
            padding: 1% 2%;
            border-radius: 4px;
            margin-top: 2%;
            cursor: pointer;
            a{
                color: #315d81;
                text-decoration: none;
            }
        }
        
    }

    .card-footer{
        background-color: #eaeaeaa9;
        margin-top: 5%;
        border-radius: 4px;
        padding: 1%;
        font-size: 0.9vw;
    }

`