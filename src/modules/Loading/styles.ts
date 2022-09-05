import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.neutrals.neutral_50};
  min-height: 16rem;
  min-width: 21.25rem;
  > img {
    width: 5rem;
    background-color: transparent;
  }
  > span {
    display: flex;
    justify-content: center;
    background-color: transparent;
    z-index: 1;
    color: ${(props) => props.theme.colors.neutrals.neutral_700};
    font-size: 1rem;
    line-height: 1.125rem;
    padding: 1rem 0;
  }
`
