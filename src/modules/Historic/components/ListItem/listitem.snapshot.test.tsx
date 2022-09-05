import * as React from 'react'
import { ListItem } from '.'
import renderer from 'react-test-renderer'

describe('render ListItem', () => {
  it('render correctly', () => {
    const tree = renderer.create(<ListItem time="1 hora 12 min" payment={true} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
