import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: fixed;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  max-width: auto;
  top: 0;
  left: 0;
  .modal-content {
    background-color: ${(props) => props.theme.colors.neutrals.neutral_900};
    margin: auto;
    border: 1px solid ${(props) => props.theme.colors.neutrals.neutral_900};
    min-width: 10rem;
    min-height: 10rem;
    position: relative;
    display: flex;
    overflow: auto;
  }
  .modal-close {
    background-color: ${(props) => props.theme.colors.neutrals.neutral_50};
    color: black;
    font-size: 1.5rem;
    font-weight: bold;
    margin-right: 1rem;
    position: absolute;
    right: 0;
    z-index: 999;
    &:hover {
      cursor: pointer;
      text-decoration: none;
      color: ${(props) => props.theme.colors.neutrals.neutral_50};
    }
  }
`
