import * as React from 'react'
import { Leave } from '.'
import renderer from 'react-test-renderer'

describe('render Leave', () => {
  it('render correctly', () => {
    const tree = renderer.create(
      <Leave />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
