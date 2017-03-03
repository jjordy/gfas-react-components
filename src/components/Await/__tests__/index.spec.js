import React from 'react'
import Await from '../'
import { shallow } from 'enzyme'

describe('(Component) <Await />', function () {
  let _props
  let _wrapper

  beforeEach(() => {
    _props = {
      data: null,
      evaluate: jest.fn(),
      loading: false
    }
    _wrapper = shallow(
      <Await {..._props}>
        {(data) => (
          <div className='test-harness'>{data}</div>
        )}
      </Await>
    )
  })

  it('Should render <Await /> container.', () => {
    expect(_wrapper.find('.await')).toHaveLength(1)
  })
})

