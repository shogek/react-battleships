import { Coordinate } from '../types/coordinate.type';
import './GridSquare.scss';

interface IGridSquare {
    isPlaceholder: boolean
    coordinate: Coordinate
    onMouseEnter: (coordinate: Coordinate) => void
    onMouseLeave: () => void
}

function GridSquare({
    isPlaceholder,
    coordinate,
    onMouseEnter,
    onMouseLeave,
}: IGridSquare) {
    const handleMouseEnter = () => onMouseEnter(coordinate)
    const handleMouseLeave = () => onMouseLeave()

    return (
        <div
            className={`grid-square ${isPlaceholder && 'placeholder'}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        ></div>
    )
}

export default GridSquare
