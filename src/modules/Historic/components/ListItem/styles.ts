import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: ${(props) => props.theme.colors?.neutrals?.neutral_50};
  border: 1px solid ${(props) => props.theme.colors?.neutrals?.neutral_300};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  > section {
    flex: 1;
    background-color: ${(props) => props.theme.colors?.neutrals?.neutral_50};
    > p {
      color: ${(props) => props.theme.colors?.neutrals?.neutral_500};
      font-size: 0.75rem;
      line-height: 0.875rem;
      background-color: ${(props) => props.theme.colors?.neutrals?.neutral_50};
    }
    > strong {
      color: #0a261d;
      font-size: 1.5rem;
      line-height: 1.75rem;
      background-color: ${(props) => props.theme.colors?.neutrals?.neutral_50};
    }
  }
`
