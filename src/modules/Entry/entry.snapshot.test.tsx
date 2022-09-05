import * as React from 'react'
import { Entry } from '.'
import renderer from 'react-test-renderer'

describe('render Entry', () => {
  it('render correctly', () => {
    const tree = renderer.create(<Entry/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

export = {}
