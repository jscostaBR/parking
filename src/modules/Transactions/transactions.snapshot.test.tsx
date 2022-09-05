import * as React from 'react'
import { Transactions } from '.'
import renderer from 'react-test-renderer'

describe('render Resolutions', () => {
  it('render correctly with plate: AAA-1234 and type: payment', () => {
    const tree = renderer.create(
      <Transactions plate='AAA-1234' type='payment' />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render correctly with plate: AAA-1234 and type: getOut', () => {
    const tree = renderer.create(
      <Transactions plate='AAA-1234' type='getOut' />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
