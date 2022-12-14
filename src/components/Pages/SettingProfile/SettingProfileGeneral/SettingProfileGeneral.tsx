import * as React from "react";
import {
	arr_alcohol,
	arr_children,
	arr_education,
	arr_fieldOfActivity,
	arr_gender,
	arr_genderVapor,
	arr_growth,
	arr_location,
	arr_maritalStatus,
	arr_profit,
	arr_religion,
	arr_smoke,
	arr_weight,
} from "../../../../arrdata/profiles";
import { userMyProfileAction } from "../../../../utils/reducers";
import { store } from "../../../../utils/store";
import {
	SelectFromArr,
	SelectFromArrValue,
} from "../../../Utils/SelectFromArr/SelectFromArr";
import { onChangeValueProfile } from "../utils";

export function SettingProfileGeneral() {
	const { userMyProfile } = store.getState();

	let date = new Date();

	date.setFullYear(date.getFullYear() - 18);

	let minDateBirth = date.toISOString().split("T")[0];

	const locationOnChangeHandler = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		onChangeValueProfile(e, "location");
	};
	const genderOnChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChangeValueProfile(e, "gender");
	};
	const genderVaporOnChangeHandler = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		onChangeValueProfile(e, "gendervapor");
	};
	const birhdayOnChangeHandler = (e: { target: { value: string } }) => {
		const newProfile = { ...userMyProfile };
		const date: string = e.target.value;
		const arrDate = date.split("-");

		if (arrDate.length !== 3) return;

		newProfile.yearofbirth = Number(arrDate[0]);
		newProfile.monthofbirth = Number(arrDate[1]);
		newProfile.birthday = Number(arrDate[2]);
		store.dispatch(userMyProfileAction(newProfile));
	};

	const growthOnChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChangeValueProfile(e, "growth");
	};
	const weightOnChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChangeValueProfile(e, "weight");
	};
	const educationOnChangeHandler = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		onChangeValueProfile(e, "education");
	};
	const fieldofactivityOnChangeHandler = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		onChangeValueProfile(e, "fieldofactivity");
	};
	const maritalstatusOnChangeHandler = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		onChangeValueProfile(e, "maritalstatus");
	};
	const childrenOnChangeHandler = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		onChangeValueProfile(e, "children");
	};
	const religionOnChangeHandler = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		onChangeValueProfile(e, "religion");
	};
	const smokeOnChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChangeValueProfile(e, "smoke");
	};
	const alcoholOnChangeHandler = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		onChangeValueProfile(e, "alcohol");
	};
	const profitOnChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChangeValueProfile(e, "profit");
	};

	return (
		<div className="flex flex-wrap shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl relative items-center justify-center p-1 my-2 w-full">
			<SelectFromArrValue
				keyOpt={"location"}
				value={userMyProfile.location}
				onChangeHandler={locationOnChangeHandler}
				arr={arr_location}
				title={"??????????????:"}
			/>

			<SelectFromArr
				keyOpt={"gender"}
				value={userMyProfile.gender}
				onChangeHandler={genderOnChangeHandler}
				arr={arr_gender}
				title={"?????? ???"}
			/>

			<SelectFromArr
				keyOpt={"gendervapor"}
				value={userMyProfile.gendervapor}
				onChangeHandler={genderVaporOnChangeHandler}
				arr={arr_genderVapor}
				title={"???????? ???????"}
			/>

			<div className="flex shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl items-center relative p-0.5 py-2 px-1 m-1.5 ">
				<label htmlFor="date" className="text-white">
					{`???????? ????????????????: `}
				</label>
				&nbsp;
				<input
					value={
						"" +
						userMyProfile.yearofbirth +
						"-" +
						(userMyProfile.monthofbirth < 10
							? "0" + userMyProfile.monthofbirth
							: userMyProfile.monthofbirth) +
						"-" +
						(userMyProfile.birthday < 10
							? "0" + userMyProfile.birthday
							: userMyProfile.birthday)
					}
					className="border rounded bg-slate-300 text-black h-6 "
					type="date"
					max={minDateBirth}
					name="date"
					onChange={birhdayOnChangeHandler}
				/>
			</div>

			<SelectFromArrValue
				keyOpt={"growth"}
				value={userMyProfile.growth}
				onChangeHandler={growthOnChangeHandler}
				arr={arr_growth}
				title={"????????:"}
			/>

			<SelectFromArrValue
				keyOpt={"weight"}
				value={userMyProfile.weight}
				onChangeHandler={weightOnChangeHandler}
				arr={arr_weight}
				title={"????????????????????????:"}
			/>

			<SelectFromArr
				keyOpt={"education"}
				value={userMyProfile.education}
				onChangeHandler={educationOnChangeHandler}
				arr={arr_education}
				title={"??????????????????????:"}
			/>

			<SelectFromArr
				keyOpt={"fieldofactivity"}
				value={userMyProfile.fieldofactivity}
				onChangeHandler={fieldofactivityOnChangeHandler}
				arr={arr_fieldOfActivity}
				title={"?????????? ????????????????????????:"}
			/>

			<SelectFromArr
				keyOpt={"maritalstatus"}
				value={userMyProfile.maritalstatus}
				onChangeHandler={maritalstatusOnChangeHandler}
				arr={arr_maritalStatus}
				title={"???????????????? ??????????????????:"}
			/>

			<SelectFromArr
				keyOpt={"children"}
				value={userMyProfile.children}
				onChangeHandler={childrenOnChangeHandler}
				arr={arr_children}
				title={"????????:"}
			/>

			<SelectFromArr
				keyOpt={"religion"}
				value={userMyProfile.religion}
				onChangeHandler={religionOnChangeHandler}
				arr={arr_religion}
				title={"??????????????:"}
			/>

			<SelectFromArr
				keyOpt={"smoke"}
				value={userMyProfile.smoke}
				onChangeHandler={smokeOnChangeHandler}
				arr={arr_smoke}
				title={"??????????????:"}
			/>

			<SelectFromArr
				keyOpt={"alcohol"}
				value={userMyProfile.alcohol}
				onChangeHandler={alcoholOnChangeHandler}
				arr={arr_alcohol}
				title={"????????????????:"}
			/>

			<SelectFromArr
				keyOpt={"profit"}
				value={userMyProfile.profit}
				onChangeHandler={profitOnChangeHandler}
				arr={arr_profit}
				title={"?????????????????? ?? ??????????:"}
			/>
		</div>
	);
}
