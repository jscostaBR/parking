import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme.colors?.rose?.rose_700};
  border-radius: 0.25rem;
  padding: 0.5rem;
  display: flex;
  margin-bottom: 0.75rem;
  > img {
    width: 1rem;
    margin-right: 0.5rem;
    background: transparent;
  }
  > span {
    font-size: 1rem;
    background: transparent;
    color: ${(props) => props.theme.colors?.rose?.rose_600};
  }
`
