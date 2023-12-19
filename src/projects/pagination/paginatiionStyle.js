import styled from "styled-components";

export const PaginationWrapper = styled.div`
    background-color: #fff;
    //max-width: 800px;
    width: 100%;
    height:100%;
    padding: 1rem;
    text-align: center;
    border-radius: 15px;
    user-select: none;
    overflow: hidden;
    // @media (max-width: 576px) {
    //   padding:3rem
    //   font-size: 1rem;
    // }
    .header{
        background-color: #fff;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding:0.5rem;
      }
    .container{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        text-align: center;
      }
      .card-layout{
        margin: 0.2rem;
        width:300px;
        border:1px solid #000;
      }
      .card{
        background-color: #31304D;
        color: #EEF5FF !important;
        width: 100%;
        height: 20%;
        display: grid;
        place-items: center;
          border-top: 1px solid #333;
        letter-spacing: 1px;  
      }
    }
 .footer{
  color:#000
 }

`;
