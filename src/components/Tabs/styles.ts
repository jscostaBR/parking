import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`
export const ButtonsTabs = styled.nav`
  width: 100%;
`
export const ButtonTab = styled.button.attrs(
  (props: { isActiveTab: boolean }) => props
)`
  font-size: 1rem;
  width: 50%;
  height: 3rem;
  border-radius: 0.25rem 0.25rem 0 0;
  padding: 0.375rem 0;
  border-bottom: ${(props) =>
    props.isActiveTab ? `3px solid ${props.theme.colors.blue.blue_600}` : 0};
  background-color: ${(props) =>
    props.isActiveTab ? props.theme.colors.neutrals.neutral_50 : 'transparent'};
  color: ${(props) =>
    props.isActiveTab
      ? props.theme.colors.blue.blue_600
      : props.theme.colors.neutrals.neutral_500};
  transition: all 0.4s;
  &:hover {
    cursor: pointer;
  }
`
export const Content = styled.main``
