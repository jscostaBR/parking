import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.neutrals.neutral_50};
  min-height: 16rem;
  min-width: 21.25rem;
  > span {
    padding: 1rem;
    background-color: transparent;
  }
  > img {
    background-color: transparent;
  }
`
