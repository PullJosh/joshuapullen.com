import classNames from "classnames";
import { Fragment, useEffect, useReducer, useState } from "react";
import Layout from "../../components/Layout";

const defaultMatrixA = [
  [1, 2],
  [3, 4],
];

const defaultMatrixB = [
  [1, 2],
  [3, 4],
];

function matrixReducer(matrix, action) {
  switch (action.type) {
    case "setCell": {
      let newMatrix = [];
      for (let y = 0; y < matrix.length; y++) {
        let newRow = [];
        for (let x = 0; x < matrix[y].length; x++) {
          if (x === action.x && y === action.y) {
            newRow.push(action.value);
          } else {
            newRow.push(matrix[y][x]);
          }
        }
        newMatrix.push(newRow);
      }
      return newMatrix;
    }
    case "setRowCount": {
      let newMatrix = [];
      for (let y = 0; y < action.value; y++) {
        newMatrix.push(matrix[y] ?? new Array(matrix[0].length).fill(0));
      }
      return newMatrix;
    }
    case "setColumnCount": {
      let newMatrix = [];
      for (let y = 0; y < matrix.length; y++) {
        let newRow = [];
        for (let x = 0; x < action.value; x++) {
          newRow.push(matrix[y][x] ?? 0);
        }
        newMatrix.push(newRow);
      }
      return newMatrix;
    }
  }
}

function multiplyMatrices(matrixA, matrixB) {
  let result = [];
  for (let y = 0; y < matrixA.length; y++) {
    let newRow = [];
    for (let x = 0; x < matrixB[0].length; x++) {
      let sum = 0;
      for (let i = 0; i < matrixA[0].length; i++) {
        sum += matrixA[y][i] * matrixB[i][x];
      }
      newRow.push(sum);
    }
    result.push(newRow);
  }
  return result;
}

export default function MatrixMultiplication() {
  const [matrixA, dispatchA] = useReducer(matrixReducer, defaultMatrixA);
  const [matrixB, dispatchB] = useReducer(matrixReducer, defaultMatrixB);

  let result;
  if (matrixA[0].length === matrixB.length) {
    result = multiplyMatrices(matrixA, matrixB);
  } else {
    result = new Array(matrixA.length)
      .fill(null)
      .map(() => new Array(matrixB[0].length).fill("?"));
  }

  const [hoveredPoint, setHoveredPoint] = useState(null);

  const getHoverStyle = (n) => {
    const list = [
      "bg-red-200 text-red-800",
      "bg-orange-200 text-orange-800",
      // "bg-amber-200 text-amber-800",
      "bg-yellow-200 text-yellow-800",
      "bg-lime-200 text-lime-800",
      "bg-green-200 text-green-800",
      "bg-teal-200 text-teal-800",
      "bg-blue-200 text-blue-800",
      "bg-indigo-200 text-indigo-800",
      "bg-purple-200 text-purple-800",
      "bg-pink-200 text-pink-800",
    ];

    return list[n % list.length];
  };

  return (
    <Layout current="learn">
      <h1 className="text-center font-bold text-3xl mb-8">
        Matrix Multiplication Calculator
      </h1>
      <div className="grid grid-cols-[auto,auto,auto,auto,auto] gap-y-6 items-center justify-items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div
            className="inline-grid gap-1 mx-2 relative"
            style={{
              gridTemplateColumns: `repeat(${matrixA[0].length}, auto)`,
            }}
          >
            <div className="absolute -left-2 -top-2 -bottom-2 border-t-2 border-l-2 border-b-2 border-black w-2" />
            {matrixA.flatMap((row, y) =>
              row.map((column, x) => (
                <NumberInput
                  key={`${y}-${x}`}
                  value={matrixA[y][x]}
                  setValue={(newValue) =>
                    dispatchA({ type: "setCell", x, y, value: newValue })
                  }
                  className={classNames(
                    hoveredPoint?.y === y ? getHoverStyle(x) : null
                  )}
                />
              ))
            )}
            <div className="absolute -right-2 -top-2 -bottom-2 border-t-2 border-r-2 border-b-2 border-black w-2" />
          </div>
        </div>
        <span className="mx-2 text-2xl">&times;</span>
        <div className="flex flex-col items-center space-y-4">
          <div
            className="inline-grid gap-1 mx-2 relative"
            style={{
              gridTemplateColumns: `repeat(${matrixB[0].length}, auto)`,
            }}
          >
            <div className="absolute -left-2 -top-2 -bottom-2 border-t-2 border-l-2 border-b-2 border-black w-2" />
            {matrixB.flatMap((row, y) =>
              row.map((column, x) => (
                <NumberInput
                  key={`${y}-${x}`}
                  value={matrixB[y][x]}
                  setValue={(newValue) =>
                    dispatchB({ type: "setCell", x, y, value: newValue })
                  }
                  className={classNames(
                    hoveredPoint?.x === x ? getHoverStyle(y) : null
                  )}
                />
              ))
            )}
            <div className="absolute -right-2 -top-2 -bottom-2 border-t-2 border-r-2 border-b-2 border-black w-2" />
          </div>
        </div>
        <span className="mx-2 text-2xl">=</span>
        {result && (
          <div
            className="inline-grid gap-1 mx-2 relative"
            style={{ gridTemplateColumns: `repeat(${result[0].length}, auto)` }}
            onMouseLeave={() => setHoveredPoint(null)}
          >
            <div className="absolute -left-2 -top-2 -bottom-2 border-t-2 border-l-2 border-b-2 border-black w-2" />
            {result.flatMap((row, y) =>
              row.map((column, x) => (
                <NumberInput
                  key={`${y}-${x}`}
                  value={result[y][x]}
                  disabled={true}
                  onMouseEnter={() => setHoveredPoint({ x, y })}
                  className={
                    hoveredPoint?.x === x && hoveredPoint?.y === y
                      ? "bg-gray-300"
                      : ""
                  }
                />
              ))
            )}
            <div className="absolute -right-2 -top-2 -bottom-2 border-t-2 border-r-2 border-b-2 border-black w-2" />
          </div>
        )}
        <div className="flex self-start">
          <NumberInput
            size="small"
            value={matrixA.length}
            setValue={(newValue) => {
              dispatchA({ type: "setRowCount", value: Number(newValue) });
            }}
            min={1}
            max={6}
          />
          &times;
          <NumberInput
            size="small"
            value={matrixA[0].length}
            setValue={(newValue) => {
              dispatchA({ type: "setColumnCount", value: Number(newValue) });
            }}
            min={1}
            max={6}
          />
        </div>
        <div />
        <div className="flex self-start">
          <NumberInput
            size="small"
            value={matrixB.length}
            setValue={(newValue) => {
              dispatchB({ type: "setRowCount", value: Number(newValue) });
            }}
            min={1}
            max={6}
          />
          &times;
          <NumberInput
            size="small"
            value={matrixB[0].length}
            setValue={(newValue) => {
              dispatchB({ type: "setColumnCount", value: Number(newValue) });
            }}
            min={1}
            max={6}
          />
        </div>
        <div />
        <div className="self-start">
          {hoveredPoint && (
            <div className="grid grid-cols-[auto,auto,auto,auto,auto] gap-y-[2px] text-center">
              {new Array(Math.max(matrixA[0].length, matrixB.length))
                .fill(null)
                .map((_, i) => [
                  matrixA[hoveredPoint.y]?.[i] ?? "?",
                  matrixB[i]?.[hoveredPoint.x] ?? "?",
                ])
                .map(([a, b], i) => (
                  <Fragment key={i}>
                    <div
                      className={classNames(
                        "pl-1 pr-[2px] rounded-l ml-5",
                        getHoverStyle(i)
                      )}
                    >
                      {a}
                    </div>
                    <div className={classNames("px-[2px]", getHoverStyle(i))}>
                      &times;
                    </div>
                    <div className={classNames("px-[2px]", getHoverStyle(i))}>
                      {b}
                    </div>
                    <div className={classNames("px-[2px]", getHoverStyle(i))}>
                      =
                    </div>
                    <div
                      className={classNames(
                        "pl-[2px] pr-1 rounded-r font-bold",
                        getHoverStyle(i)
                      )}
                    >
                      {a === "?" || b === "?" ? "?" : a * b}
                    </div>
                  </Fragment>
                ))}
              <div className="col-span-full border-t border-black relative">
                <span className="absolute left-1 top-0 -translate-y-full -mt-1">
                  +
                </span>
              </div>
              <div className="col-span-full text-right font-bold mr-1">
                {matrixA[0].length === matrixB.length
                  ? new Array(matrixB.length)
                      .fill(null)
                      .map((_, i) => [
                        matrixA[hoveredPoint.y][i],
                        matrixB[i][hoveredPoint.x],
                      ])
                      .map(([a, b]) => a * b)
                      .reduce((a, b) => a + b, 0)
                  : "?"}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

function NumberInput({
  value = 1,
  setValue,
  disabled = false,
  size = "normal",
  className: providedClassName,
  style = {},
  min,
  max,
  ...props
}) {
  const className = classNames(
    providedClassName,
    "inline-block bg-gray-100 rounded text-center",
    {
      "px-4 py-2 text-lg": size === "normal",
      "px-3 py-1 text-base": size === "small",
    }
  );

  return (
    <label className="relative" {...props}>
      <span className={className}>{value}</span>
      {value !== "?" && (
        <input
          className={classNames("absolute inset-0", className)}
          type="number"
          value={value}
          onChange={(event) => {
            setValue(parseInt(event.target.value));
          }}
          disabled={disabled}
          style={style}
          min={min}
          max={max}
        />
      )}

      <style jsx>
        {`
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          /* Firefox */
          input[type="number"] {
            -moz-appearance: textfield;
          }
        `}
      </style>
    </label>
  );
}
