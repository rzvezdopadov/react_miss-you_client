import * as React from "react";
import { getDateTimeFromTimeCode } from "../../../Utils/VisitDateTime/VisitDateTime";

export function DialogMessage(payload: {
	keyopt: string;
	name: string;
	timecode: number;
	message: string;
	photolink: string;
}) {
	return (
		<div
			key={payload.keyopt}
			className="flex items-start my-1 w-auto h-fit"
		>
			<div className="flex m-1">
				<div
					style={{
						backgroundImage: `URL(${payload.photolink})`,
					}}
					className="flex bg-center bg-cover bg-no-repeat justify-center shadow-[0px_0px_2px_2px] shadow-lime-300 text-neutral-50 rounded-full m-1 h-10 w-10"
				></div>
			</div>
			<div className="flex flex-col m-1">
				<div className="flex justify-start text-lime-400 items-center w-full select-none">
					{`${payload.name}, ${getDateTimeFromTimeCode(
						payload.timecode
					)}`}
				</div>
				<div className="flex text-left overflow-hidden justify-start items-center w-80 select-none">
					<div className="break-words">{payload.message}</div>
				</div>
			</div>
		</div>
	);
}
