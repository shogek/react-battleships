import { useState } from 'react'
import GridSquare from './grid-square/GridSquare'
import './App.scss'
import { Coordinate } from './types/coordinate.type'
import { BASE_SETTINGS } from './config/base.config'

const ROWS: number[] = Array.from(Array(BASE_SETTINGS.rowCount), (_, i) => i + 1)
const COLUMNS: number[] = Array.from(Array(BASE_SETTINGS.columnCount), (_, i) => i + 1)

const EMPTY_COORDINATE: Coordinate = {
  row: -1,
  column: -1,
}

function App() {
  const [hoveredCoordinate, setHooveredCoordinate] = useState<Coordinate>(EMPTY_COORDINATE);

  return (
    <div className="app">
      {ROWS.map((row) => (
        <div key={row} className="row">
          {COLUMNS.map((column) => (
            <GridSquare
              key={`${row}-${column}`}
              isPlaceholder={hoveredCoordinate.row === row && hoveredCoordinate.column === column}
              coordinate={({row, column})}
              onMouseEnter={(coordinate: Coordinate) => setHooveredCoordinate(coordinate)}
              onMouseLeave={() => setHooveredCoordinate(EMPTY_COORDINATE)}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default App;
