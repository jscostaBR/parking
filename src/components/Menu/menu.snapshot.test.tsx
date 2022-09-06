import * as React from 'react'
import { Menu } from '.'
import renderer from 'react-test-renderer'

describe('render Menu', () => {
  it('render correctly', () => {
    const tree = renderer.create(<Menu />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
