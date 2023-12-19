import styled from "styled-components";

export const CounterWrapper = styled.div`
    background-color: #3876bf;
    max-width: 800px;
    width: 100%;
    padding: 1rem;
    text-align: center;
    border-radius: 15px;
    user-select: none;
    overflow: hidden;
    @media (max-width: 576px) {
      padding:3rem
      font-size: 1rem;
    }


  h2{
    color:#fff;
  }
  .reset_btn {
  
    padding: 1rem;
    color:#fff;
    @media (max-width: 576px) {
      font-size: 0.7rem;
    }
  }
  .datepicker{
    display: inline-block;
    font-weight: 500;
    
  }
  .container {
    @media (max-width: 800px) {
      margin: 0.5rem;
    }
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    background-color: var(--color-3);
    border-radius: 10px;
    max-width: 700px;
    width: 100%;
    padding: 3rem;
    color: #000;
    @media (max-width: 576px) {
      padding: 1.2rem;
    }
  }
    .innerContainer {
      margin: 0.5rem;
      background-color: #fff;
      text-align: center;
      max-width: 800px;
      width: 100%;
      color: #000000;
      font-weight: 500;
      border-radius: 20px;
      font-size: 1.4rem;
      padding: 0.5rem;
      
      @media (max-width: 576px) {
        transform: scale(0.8);
        font-size: 1.1rem;
        max-width: 600px;
        border-radius: 10px;
      }
    }
  
`;
