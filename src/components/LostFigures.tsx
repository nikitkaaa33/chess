/* eslint-disable array-callback-return */
import React, { FC } from "react";
import { Figure } from "../models/figures/Figure";

interface LostFiguresProps {
	title: string;
	figures: Figure[];
}

const LostFigures: FC<LostFiguresProps> = ({ title, figures }) => {
	return (
		<>
			<div className="lost">
				<h2 className="lost_header">Втрачені</h2>
				<h3>{title}</h3>
				{figures.map((figure) => (
					<div key={figure.id}>
						{figure.name}{" "}
						{figure.logo && (
							<img width={20} height={20} src={figure.logo} />
						)}
					</div>
				))}
			</div>
		</>
	);
};

export default LostFigures;
