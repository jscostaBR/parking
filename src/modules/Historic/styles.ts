import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme.colors?.neutrals?.neutral_50};
  > section {
    min-height: 20rem;
    background-color: transparent;
    .header {
      color: ${(props) => props.theme.colors?.blue?.blue_600};
      font-size: 1.5rem;
      line-height: 1.75rem;
      display: flex;
      align-items: center;
      background-color: transparent;
      > img {
        width: 2rem;
        height: 1.25rem;
        margin-right: 0.75rem;
        background-color: transparent;
        &:hover {
          opacity: 0.5;
          cursor: pointer;
        }
      }
    }
    .data-container {
      min-height: 20rem;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      background-color: transparent;
      > div {
        background-color: transparent;
      }
      .title {
        font-size: 0.75rem;
        line-height: 0.875rem;
        color: ${(props) => props.theme.colors?.neutrals?.neutral_500};
        background-color: transparent;
      }
      .plate {
        font-size: 2.25rem;
        line-height: 3.25rem;
        color: ${(props) => props.theme.colors?.blue?.blue_400};
        background-color: transparent;
      }
      .status,
      .time,
      .payment {
        font-size: 1.5rem;
        line-height: 1.75rem;
        color: ${(props) => props.theme.colors?.neutrals?.neutral_800};
        background-color: transparent;
      }
    }
  }
`
