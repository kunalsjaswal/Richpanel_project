import { styled } from "styled-components";

export const PaymentDiv = styled.div`
     .logout{
        border: 0;
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
`

export const FormDiv = styled.div`
    margin: auto;
    margin-top: 10%;
    width: 60%;
    background-color: white;
    border-radius: 16px;
    display: grid;
    grid-template-columns: 58% 42%;

    form{
        padding: 6%;
        h5{
            color  : #535353;
            font-weight: normal;
            margin-top: 2%;
        }
        fieldset{
            width: 90%;
            border-radius: 4px;
            padding: 2%;
            margin-top: 4%;
            color: black;
        }
        button{
            background-color: rgb(27, 93, 169);
            color: white;
            padding: 2%;
            width: 34%;
            margin-top: 5%;
            font-weight: bold;
            border: 0;
            cursor: pointer;
            border-radius: 5px;
        }
    }

    .plan-info{
        background-color: #f6f6f6;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
        padding: 10%;
        .types{
            font-size: 0.9vw;
            margin-top: 2%;
            padding: 2%;
            display: grid;
            grid-template-columns: 60% 40%;
            .adj-right{
                text-align: right;
            }
        }

    }
` 