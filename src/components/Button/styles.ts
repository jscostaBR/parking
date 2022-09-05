import styled from 'styled-components'

export const Default = styled.button`
  display: flex;
  background-color: ${(props) => props.theme.colors.neutrals.neutral_600};
  padding: 1.25rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  margin-bottom: 0.75rem;
  width: 100%;
  justify-content: center;
  color: ${(props) => props.theme.colors.neutrals.neutral_900};
  background-color: red;
  &:hover {
    opacity: 0.5;
    transition: all 0.4s;
    cursor: pointer;
    color: ${(props) => props.theme.colors.neutrals.neutral_500};
  }
  &:disabled {
    cursor: default;
    color: ${(props) => props.theme.colors.neutrals.neutral_500};
  }
`
export const Primary = styled(Default).attrs(
  (props: { isValid: boolean }) => props
)`
  background-color: ${(props) =>
    props.isValid
      ? props.theme.colors.green.green_400
      : props.theme.colors.neutrals.neutral_600};
`
export const Secondary = styled(Default).attrs(
  (props: { isValid: boolean }) => props
)`
  background-color: ${(props) =>
    props.isValid
      ? props.theme.colors.main.purple
      : props.theme.colors.neutrals.neutral_600};
  color: ${(props) =>
    props.isValid
      ? props.theme.colors.neutrals.neutral_50
      : props.theme.colors.neutrals.neutral_900};
`
export const SecondaryOutlined = styled(Default).attrs(
  (props: { isValid: boolean }) => props
)`
  background-color: ${(props) =>
    props.isValid
      ? props.theme.colors.neutrals.neutral_50
      : props.theme.colors.neutrals.neutral_600};
  color: ${(props) =>
    props.isValid
      ? props.theme.colors.rose.rose_300
      : props.theme.colors.neutrals.neutral_900};
  border: 1px solid
    ${(props) =>
      props.isValid ? props.theme.colors.rose.rose_300 : 'transparent'};
`
