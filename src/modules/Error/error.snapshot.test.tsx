import * as React from 'react'
import { Error } from '.'
import renderer from 'react-test-renderer'

describe('render Error', () => {
  it('render correctly', () => {
    const tree = renderer.create(<Error errorMessage='error'/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
