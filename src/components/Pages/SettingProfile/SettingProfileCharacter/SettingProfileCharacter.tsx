import * as React from "react";

export function SettingProfileCharacter(payload: {
	id: number;
	value: string;
	title: string;
	color: string;
	check: boolean;
	changeClbk: (id: number) => {};
}) {
	return (
		<>
			<div
				className={`flex flex-col  shadow-[0px_0px_3px_3px] rounded-xl p-3 relative items-center min-h-12 m-2 ${payload.color}`}
				title={payload.title}
			>
				<div className="flex items-center">
					<input
						className="cursor-pointer shadow-[0px_0px_2px_2px] shadow-lime-300 rounded-lg m-2"
						onChange={() => {
							payload.changeClbk(payload.id);
						}}
						type={"checkbox"}
						checked={payload.check}
					></input>
					<label className="flex select-none">{payload.value}</label>
				</div>
				<div className="flex select-none">{payload.title}</div>
			</div>
		</>
	);
}
