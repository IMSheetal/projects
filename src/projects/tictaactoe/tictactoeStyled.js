import styled from "styled-components";

export const CounterWrapper = styled.div`
  background-color: #3876bf;
  max-width: 500px;
  width: 100%;
  padding: 1rem;
  text-align: center;
  border-radius: 20px;
  user-select: none;
  overflow: hidden;
  @media (max-width: 400px) {
    padding: 3rem;
  }
  .playboard {
    margin: 1rem;
    align-items: center;
  }
  .board-row {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 225px;
  }

  .reset_btn {
    background-color: var(--color-3);
    color: #000;
    font-size: 1.4rem;
    padding: 1rem 4rem;
    border-radius: 100px;
    transition: transform 0.3s ease, opacity 0.2s ease;

    @media (max-width: 768px) {
      transform: scale(0.8);
    }

    &:hover {
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }

    &[disabled] {
      opacity: 0.7;
      pointer-events: none;
    }
  }
`;
