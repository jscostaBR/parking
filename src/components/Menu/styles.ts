import styled from 'styled-components'

export const Container = styled.nav`
  background-color: ${(props) => props.theme.colors?.blue?.blue_600};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.75rem;
  padding: 0 0.5rem;
  margin-bottom: 2.5rem;
  overflow: hidden;
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
export const MenuMobile = styled.div.attrs(
  (props: { active: boolean }) => props
)`
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors?.blue?.blue_600};
  height: calc(100vh);
  width: 100vw;
  transform: ${(props) =>
    props.active ? 'translateX(0%)' : 'translateX(150%)'};
  position: absolute;
  top: 0;
  transition: transform 0.4s;
  overflow: hidden;
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
