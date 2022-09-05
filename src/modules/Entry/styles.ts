import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors?.neutrals?.neutral_50};
  padding: 0 1rem;
  min-height: 16rem;
  justify-content: space-around;
  > form {
    background-color: transparent;
  }
`
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  background-color: transparent;
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
export const Button = styled.button.attrs(
  (props: { isValid: boolean }) => props
)`
  display: flex;
  background-color: ${(props) =>
    props.isValid
      ? props.theme.colors?.green?.green_400
      : props.theme.colors?.neutrals?.neutral_600};
  border: 1px solid ${(props) => props.theme.colors?.neutrals?.neutral_400};
  padding: 1.25rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  margin-bottom: 0.75rem;
  width: 100%;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
    transition: all 0.4s;
  }
`
