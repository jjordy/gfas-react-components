import React, { PropTypes } from 'react'
import Flex from '../Layout/Flex'
import Loading from '../Loading'

const AsyncComponent = ({data, evaluate, children, showLoader, loading, noData}) => (
  <div className='await'>
    {!loading && data && evaluate() && children(data)}
    {showLoader && loading && evaluate() && <Loading bgColor='warning'/>}
    {!loading && !data && <Flex align='center' justify='center'>
      {noData}
    </Flex>}
  </div>
)

AsyncComponent.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.array.isRequired,
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
    PropTypes.node.isRequired
  ]),
  evaluate: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
  noData: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ]),
  showLoader: PropTypes.bool,
  loading: PropTypes.bool
}

AsyncComponent.defaultProps = {
  evaluate: () => true,
  showLoader: true,
  noData: 'No Data Available'
}

export default AsyncComponent
