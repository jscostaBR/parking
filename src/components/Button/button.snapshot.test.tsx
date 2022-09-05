import * as React from 'react'
import { Button } from '.'
import renderer from 'react-test-renderer'

describe('render Button and yours variations', () => {
  it('render correctly with type: primary and isValid: true', () => {
    const tree = renderer.create(<Button type='primary' isValid>Primary</Button>).toJSON();
    expect(tree).toMatchSnapshot()
  });
  it('render correctly with type: primary, isValid: false and disabled: true', () => {
    const tree = renderer.create(<Button type='primary' isValid={false}>Primary</Button>).toJSON();
    expect(tree).toMatchSnapshot()
  });
  it('render correctly with type: secondary, isValid: true', () => {
    const tree = renderer.create(<Button type='secondary' isValid>Secondary</Button>).toJSON();
    expect(tree).toMatchSnapshot()
  });
  it('render correctly with type: outlined, isValid: true', () => {
    const tree = renderer.create(<Button type='outlined' isValid>Outlined</Button>).toJSON();
    expect(tree).toMatchSnapshot()
  });
})
