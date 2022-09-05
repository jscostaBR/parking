import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors?.neutrals?.neutral_50};
  padding: 0 1rem;
  min-height: 22rem;
  justify-content: center;
  > form {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    .go-to-historic {
      color: ${(props) => props.theme.colors?.blue?.blue_400};
      font-size: 1rem;
      line-height: 1.125rem;
      background-color: transparent;
      cursor: pointer;
      align-self: center;
      margin: 1rem;
    }
  }
`
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors?.neutrals?.neutral_50};
  > span {
    background-color: transparent;
    margin-bottom: 0.5rem;
  }
  > input {
    background: ${(props) => props.theme.colors?.neutrals?.neutral_100};
    border: 1px solid ${(props) => props.theme.colors?.neutrals?.neutral_400};
    padding: 1rem;
    font-size: 1.5rem;
    text-align: center;
    border-radius: 0.25rem;
    margin-bottom: 0.75rem;
  }
`
