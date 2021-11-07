import { IRarity, RareItem } from "../types";

import React from "react";

interface IChart {
  height: number;
  width: number;
}

interface IBar {
  x: number;
  y: number;
  height: number;
  width: number;
  key: number;
  id: number;
  color: string;
  title: string;
  quantity: number;
}

const Chart: React.FC<IChart> = (props) => {
  return (
    <svg viewBox={`0 0 ${props.width} ${props.height}`}>{props.children}</svg>
  );
};

const marginCalc = (title: string, barlength: number = 15) => {
  if (title.length === 3) {
    return 8;
  } else if (title.length === 4) {
    return 7;
  } else if (title.length === 10) { 
    return 1.5
  }

  return (barlength - title.length) / 2;
};

const Bar: React.FC<IBar> = (props) => {
  return (
    <g>
      <rect
        {...props}
        className={"eachBar"}
        fill={props.color}
        rx="2"
        id={`${props.id}`}
      />
      <text
        y={props.y + props.height - 2}
        x={props.x + marginCalc(props.title)}
        fontSize={3}
        fontFamily="Fredoka One"
        fontWeight={200}
        className={"attributeText"}
      >
        {props.title}
      </text>

      <text
        y={props.y + props.height - 2}
        x={props.x + 7.5}
        fontSize={5}
        fontFamily="Fredoka One"
        fontWeight={200}
        className={"numberText"}
      >
        {props.quantity}
      </text>
    </g>
  );
};

const greatesValue = (values: RareItem[]) =>
  values
    .map((values: RareItem) => values.quantity)
    .reduce((max: any, cur: any) => {
      return Math.max(max, cur);
    });

const Barchart: React.FC<IRarity> = (props) => {
  const barWidth = 20;
  const barMargin = 5;
  const width = props.elements.length * (barWidth + barMargin);
  const height = greatesValue(props.elements);

  return (
    <div className={"barChart"}>
      <Chart height={height + 10} width={width}>
        {props.elements.map((value: RareItem, index) => (
          <Bar
            key={index}
            x={index * (barWidth + barMargin)}
            y={height - value.quantity + 5}
            width={barWidth}
            height={value.quantity}
            id={value.id}
            color={value.color}
            title={value.title}
            quantity={value.quantity}
          />
        ))}
      </Chart>
    </div>
  );
};

export default Barchart;
