import React, {useEffect, useState} from "react";
import {Circle, CircleProgress, ProgresWrapper, Rate, RateText, Svg} from "./style";

const CircularProgressBar = ({ rate }) => {
	const circumference = 2 * Math.PI * 13; // r=13: yarı çap bilgisi
	const [offset, setOffset] = useState(0);
	const total = 100;

	useEffect(() => {
		setOffset(circumference - (circumference * rate) / total);
	}, [rate, circumference]);

	return (
		<ProgresWrapper>
			<Rate>
				<Svg>
					<Circle cx="14" cy="14" r="13"/>
					<CircleProgress
						rate={rate}
						cx="14"
						cy="14"
						r="12"
						transform="rotate(-90 14 14)"
						style={{strokeDasharray: circumference, strokeDashoffset: offset}}
					/>
				</Svg>
				<RateText>{rate}%</RateText>
			</Rate>
		</ProgresWrapper>
	);
};

export default CircularProgressBar;
