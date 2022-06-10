import styled from "styled-components";

export const GetUsersCss = styled.div`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: Andale Mono, monospace;
}
.formOrg{
    display:flex;
    flex-direction:column;
    align-items:center;
}
form{
    display:flex;
    flex-direction:column;
    align-items:center;
    width:400px;
}
.submitButton{
    position:relative;
    right: 85px;
}
.cleanButton{
    position:relative;
    left: 85px;
    bottom: 35px;
}

input{
    margin: 20px 0 0 0;
    text-align: center;
    height: 35px;
    width: 300px;
    border-radius: 5px;
    border: 1px solid black;
}

button{
    background-color: white;
    height: 30px;
    width: 130px;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid black;
    margin: 5px 20px 0 20px;
}

button:hover{
    background-color: black;
    color: white;
}
.tableMembers{
    display:flex;
    align-items:center;
    justify-content:center;
}
.tableMembers ul{ 
    margin: 30px 0 0 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 30px;
    height: 750px;
    width:80%;
    overflow-y: scroll;
    overflow-x: hidden;
    border: 1px solid black;
    border-radius:10px;
}

.tableMembers ul li{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border: 1px solid black;
    border-radius: 10px;
    padding: 25px;
    width: 300px;
    height:350px;
    margin: 20px 20px 20px 20px;
}
.tableMembers ul li a{
    color: blue;
}
.tableMembers ul li a:hover{
    color: gray;
}

.tableMembers ul li img{
    margin: 0 0 20px 0;
    border-radius: 25px;
    width: 200px;
}

@media screen and (max-width: 1366px){
    
    .tableMembers ul{
        padding: 20px;
        height: 500px;
    }

    .tableMembers ul li{
        width: 250px;
        height:300px;

    }
    .tableMembers ul li img{
        margin: 0 0 10px 0;
        border-radius: 25px;
        width: 150px;
    }
}

`