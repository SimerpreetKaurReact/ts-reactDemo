import React, { useState, useEffect } from "react";

function Bill() {
  const [state, setState] = useState({ billValue: 50, tip: 18, people: 1 });
  const [totalTip, setTotalTip] = useState();
  useEffect(() => {
    setTotalTip(state.billValue * state.tip * 0.01);
  }, [state]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  return (
    <>
      <label htmlFor="bill">Bill</label>
      <input
        id="bill"
        name="bill"
        type="number"
        defaultValue={50}
        value={state.billValue}
        onChange={handleChange}
      />
      <label htmlFor="percent">Tip percentage</label>
      <input
        id="percent"
        type="number"
        name="percent"
        defaultValue={18}
        value={state.tip}
        onChange={handleChange}
      />
      <label htmlFor="total">Number of people </label>
      <input
        id="total"
        type="number"
        name="total"
        defaultValue={1}
        value={state.people}
        onChange={handleChange}
      />
      <p>{`total tip=${totalTip.toFixed(2)}`}</p>
      <p>{`Tip Per Person:${(totalTip / state.people).toFixed(2)}`}</p>
    </>
  );
}

export default Bill;
