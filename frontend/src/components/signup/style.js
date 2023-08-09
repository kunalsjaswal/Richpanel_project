import { styled } from "styled-components";

export const SignupDiv = styled.div`
    border-radius: 10px;
    width: 25%;
    margin: auto;
    padding: 3% 3% 2% 3%;
    margin-top: 10%;
    background-color: white;

    h3{
        text-align: center;
        margin-bottom: 8%;
    }
    .labels{
        font-size: 0.9vw;
    }
    .fields{
        width: 100%;
        border-radius: 4px;
        padding: 3%;
        border: 2px solid #bab9b9;
        margin-bottom: 6%;
        margin-top: 2%;
        color: #2f2e2e;
    }

    .remember{
        margin-left: 1.5%;
        input{
            margin-right: 4%;
            scale: 1.4;
        }
        span{
            font-size: 0.9em;
        }
    }

    button{
        margin-top: 8%;
        width: 100%;
        padding: 4%;
        background: rgb(27, 93, 169);
        color: white;
        border-radius: 4px;
        border: 0;
        cursor: pointer;
        transition: 0.3s;
    }
    button:hover{
        box-shadow: 0px 0px 5px rgb(27, 93, 169);
    }
    p{
        margin-top: 8%;
        text-align: center;
        font-size: 0.8vw;
        a{
            text-decoration: none;
        }
    }

`