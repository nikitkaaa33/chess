import { Figure, FiguresNames } from "./Figure";
import blackLogo from "../../assets/images/black-king.png";
import whiteLogo from "../../assets/images/white-king.png";
import { Colors } from "../Colors";
import { Cell } from "../Cell";

export class King extends Figure {
	x!: number;
	y!: number;
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
		this.name = FiguresNames.BISHOP;
	}
	canMove(target: Cell): boolean {
		if (!super.canMove(target)) return false;

		// Розрахунок відстані від поточного положення до цільового
		const deltaX = Math.abs(target.x - this.cell.x);
		const deltaY = Math.abs(target.y - this.cell.y);

		// Перевірка, чи рух на одну клітинку у будь-якому напрямку
		const isOneStepMove =
			(deltaX === 1 && deltaY === 0) || // Горизонтальний рух
			(deltaX === 0 && deltaY === 1) || // Вертикальний рух
			(deltaX === 1 && deltaY === 1); // Діагональний рух

		if (
			isOneStepMove &&
			this.cell.board.getCell(target.x, target.y).isEmpty()
		) {
			return true;
		}

		// Перевірка на ворожу фігуру (якщо король рухається на клітинку з ворожою фігурою)
		if (isOneStepMove && this.cell.isEnemy(target)) {
			return true;
		}

		return false;
	}
}
