import React, { useId, useState } from "react";
import { validateStringByRegex } from "./utils";
import "./App.css";

interface FormElement extends HTMLFormElement {
  textField: HTMLInputElement;
  minLengthField: HTMLInputElement;
  maxLengthField: HTMLInputElement;
}

const App = () => {
  const inputId = useId();
  const minLengthId = useId();
  const maxLengthId = useId();

  const [isTextValid, setIsTextValid] = useState<boolean>(false);
  const [submitCount, setSubmitCount] = useState<number>(0);
  const [minLength, setMinLength] = useState(4);
  const [maxLength, setMaxLength] = useState(32);

  const minLengthRangeChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setMinLength(Number(e.currentTarget.value));

  const maxLengthRangeChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setMaxLength(Number(e.currentTarget.value));

  const submitHandler = (e: React.FormEvent<FormElement>) => {
    e.preventDefault();

    const isInputValid = validateStringByRegex(
      e.currentTarget.textField.value,
      minLength,
      maxLength
    );

    setIsTextValid(isInputValid);
    setSubmitCount((val) => val + 1);
  };

  return (
    <>
      <h1>Test regex util for string pattern validation</h1>
      <form className="base-form" onSubmit={submitHandler}>
        <fieldset className="base-form__controls-fieldset">
          <legend>Inputs for test validation</legend>
          <div>
            <label className="base-form__label" htmlFor={inputId}>
              Enter text
            </label>
            <input name="textField" id={inputId} type="text" />
          </div>
        </fieldset>
        <fieldset className="base-form__controls-fieldset">
          <legend>{`Controls (${minLength}, ${maxLength})`}</legend>
          <div>
            <label className="base-form__label" htmlFor={minLengthId}>
              Enter min length
            </label>
            <input
              name="minLengthField"
              id={minLengthId}
              type="range"
              step="1"
              value={minLength}
              onChange={minLengthRangeChangeHandler}
              min="0"
              max="300"
            />
          </div>
          <div>
            <label className="base-form__label" htmlFor={maxLengthId}>
              Enter max length
            </label>
            <input
              name="maxLengthField"
              id={maxLengthId}
              type="range"
              step="1"
              value={maxLength}
              onChange={maxLengthRangeChangeHandler}
              min="0"
              max="300"
            />
          </div>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
      {!!submitCount && <p>{isTextValid ? "Success" : "Invalid text"}</p>}
    </>
  );
};

export default App;
