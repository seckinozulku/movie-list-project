import styled, { css } from "styled-components";

export const ProgresWrapper = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
`;

export const Rate = styled.div`
	align-items: center;
	border-radius: 50%;
	display: flex;
	height: 28px;
	justify-content: center;
	position: relative;
	width: 28px;
`;

export const Svg = styled.svg`
	background-color: black;
	border-radius: 50%;
	height: 28px;
	transform: scale(1.2);
	width: 28px;
`;

export const Circle = styled.circle`
	fill: none;
	stroke: transparent;
	stroke-width: 2px;
`;

export const CircleProgress = styled(Circle)`
	fill: none;

	${({ rate }) =>
		rate < 45 &&
    css`
			stroke: red;
		`};
	${({ rate }) =>
		rate >= 45 &&
    css`
			stroke: yellow;
		`};
	${({ rate }) =>
		rate >= 70 &&
    css`
			stroke: green;
		`};
`;

export const RateText = styled.span`
	color: white;
	font-size: 10px;
	font-weight: 700;
	position: absolute;
`;
