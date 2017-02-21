import React, { PropTypes } from 'react'
import styled from 'styled-components'
import Base from '../Base'

const Table = styled(Base('table'))`
  width: 100%;

`

const Thead = styled(Base('thead'))`
  text-transform: uppercase;
  color: #FFF;
`
Thead.defaultProps = {
  bgColor: 'primary'
}

const Th = styled(Base('th'))`

`

const Tr = styled(Base('tr'))`
  text-align: center;
`

const Td = styled(Base('td'))`
  font-weight: 700;
  border-bottom: 1px solid ${props => props.theme.colors.gray}
  border-right: 1px solid ${props => props.theme.colors.gray}
`

const renderHeadings = (head) => (
  <Thead>
    <Tr>
      {Object.keys(head[0]).map((item, key) => {
        return <Th key={key}>{item}</Th>
      })}
    </Tr>
  </Thead>
)

const renderBody = (data) => (
  <tbody>
    {data.map((item, key) => {
      return (
        <Tr key={key}>
          {Object.keys(item).map((ite, id) => {
            return <Td key={id}>{item[ite]}</Td>
          })}
        </Tr>
      )
    })}
  </tbody>
)

const PrintTable = ({data}) => {
  return (
    <Table>
      {renderHeadings(data)}
      {renderBody(data)}
    </Table>
  )
}

PrintTable.displayName = 'PrintTable'

PrintTable.propTypes = {
  data: PropTypes.array
}

export default PrintTable
