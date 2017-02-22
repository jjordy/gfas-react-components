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

const Highlight = styled('td')`
  color: #FFF;
  font-weight: 900;
  background-color:${props => props.color || props.theme.colors.warning}
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

const renderBody = (data, highlightRow = null) => (
  <tbody>
    {data.map((item, key) => {
      return (
        <Tr key={key}>
          {Object.keys(item).map((ite, id) => {
            let shouldHighlight = highlightRow && highlightRow === key + 1
            let row = shouldHighlight
              ? (<Highlight key={id}>{item[ite]}</Highlight>)
              : (<Td key={id}>{item[ite]}</Td>)
            return row
          })}
        </Tr>
      )
    })}
  </tbody>
)

const PrintTable = ({data, highlightRow}) => {
  return (
    <Table>
      {renderHeadings(data)}
      {renderBody(data, highlightRow)}
    </Table>
  )
}

PrintTable.displayName = 'PrintTable'

PrintTable.propTypes = {
  data: PropTypes.array,
  highlightRow: PropTypes.number
}

export default PrintTable
