import * as React from 'react'
import { Loading } from '.'
import renderer from 'react-test-renderer'

describe('render Loading', () => {
  it('render correctly with type: registry', () => {
    const tree = renderer.create(
      <Loading type='registry' />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render correctly with type: confirmation', () => {
    const tree = renderer.create(
      <Loading type='confirmation' />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
