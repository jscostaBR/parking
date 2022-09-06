import styled from 'styled-components'

export const Container = styled.div.attrs(
  (props: { isOpen: boolean }) => props
)`
  max-width: 1920px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors?.blue?.blue_600};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.75rem;
  padding: 0 0.5rem;
  margin-bottom: 2.5rem;
  margin-right: ${(props) => (props.isOpen ? '100vw' : 0)};
  transition: margin-right 0.5s;
  > img {
    background-color: transparent;
  }
  .hamburger {
    &:hover {
      opacity: 0.5;
      cursor: pointer;
      transition: all 0.4s;
    }
    &:not(:hover) {
      transition: all 0.4s;
    }
  }
`
export const MenuOffCanvas = styled.div.attrs(
  (props: { isOpen: boolean; shiftedRight: number }) => props
)`
  max-width: 1920px;
  height: 100vh;
  width: ${(props) => (props.isOpen ? '100vw' : 0)};
  position: absolute;
  z-index: 1;
  top: 0;
  right: ${(props) => (props.shiftedRight > 0 ? `${props.shiftedRight}px` : 0)};
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors?.blue?.blue_600};
  overflow-x: hidden;
  transition: width 0.5s;
  .header {
    background-color: ${(props) => props.theme.colors?.blue?.blue_600};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 3.75rem;
    padding: 0 0.5rem;
    margin-bottom: 2.5rem;
    .logo {
      background-color: ${(props) => props.theme.colors?.blue?.blue_600};
    }
    .close {
      width: 1.5rem;
      height: 1.5rem;
      background-color: ${(props) => props.theme.colors?.blue?.blue_600};
      &:hover {
        opacity: 0.5;
        cursor: pointer;
        transition: all 0.4s;
      }
      &:not(:hover) {
        transition: all 0.4s;
      }
    }
  }
  > div {
    display: flex;
    flex-direction: column;
    > span {
      padding: 1.5rem 0;
      padding-left: 1rem;
      background-color: ${(props) => props.theme.colors?.blue?.blue_600};
      color: ${(props) => props.theme.colors?.neutrals?.neutral_50};
      font-size: 1rem;
      line-height: 1.125rem;
      &:hover {
        cursor: pointer;
        opacity: 0.5;
        transition: all 0.4s;
      }
      &:not(:hover) {
        transition: all 0.4s;
      }
    }
  }
`
