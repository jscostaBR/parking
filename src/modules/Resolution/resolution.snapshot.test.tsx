import * as React from 'react'
import { Resolutions } from '.'
import renderer from 'react-test-renderer'

describe('render Resolutions', () => {
  it('render correctly with type: registry', () => {
    const tree = renderer.create(
      <Resolutions type='registry' />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render correctly with type: payment', () => {
    const tree = renderer.create(
      <Resolutions type='payment' />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render correctly with type: getOut', () => {
    const tree = renderer.create(
      <Resolutions type='getOut' />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
