import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  padding: 1rem;
  width: 21.25rem;
  height: 18.375rem;
  background-color: ${(props) => props.theme.colors?.neutrals?.neutral_50};
  .transaction-question {
    color: ${(props) => props.theme.colors?.neutrals?.neutral_700};
    font-size: 1rem;
    line-height: 1.25rem;
    background-color: transparent;
  }
  .plate {
    color: ${(props) => props.theme.colors?.blue?.blue_400};
    font-size: 2.375rem;
    line-height: 2.875rem;
    background-color: transparent;
  }
  .go-back {
    color: ${(props) => props.theme.colors?.blue?.blue_400};
    font-size: 1rem;
    line-height: 1.125rem;
    background-color: transparent;
    cursor: pointer;
  }
`
