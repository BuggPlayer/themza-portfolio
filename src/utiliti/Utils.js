import { constantText } from "./constants/ConstantText";

export const stringCount = (str) => {
  const wom = str.match(/\S+/g);
  if (isValidInput(str, constantText.STRING)) {
    return {
      charactersNoSpaces: str.replace(/\s+/g, "").length,
      characters: str.length,
      words: wom ? wom.length : 0,
      lines: str.split(/\r*\n/).length,
    };
  }
  return false;
};

export const trimString = (str) => {
  if (isValidInput(str, constantText.STRING)) {
    return str.trim();
  }
  return false;
};

export const transformString = (str, operation) => {
  if (isValidInput(str, constantText.STRING)) {
    switch (operation) {
      case constantText.CAPITALIZE:
        return trimString(str).toUpperCase();
      case constantText.LOWERCASE:
        return trimString(str).toLowerCase();
      default:
        return str;
    }
  }
  return false;
};

export const isValidInput = (input, inputType) => {
  switch (inputType) {
    case constantText.STRING:
      return (
        Object.prototype.toString.call(input) ===
        `[object ${constantText.STRING}]`
      );
    case constantText.NUMBER:
      return (
        Object.prototype.toString.call(input) ===
          `[object ${constantText.NUMBER}]` && !isNaN(input)
      );
    case constantText.BOOLEAN:
      return (
        Object.prototype.toString.call(input) ===
        `[object ${constantText.BOOLEAN}]`
      );
    case constantText.OBJECT:
      return (
        Object.prototype.toString.call(input) ===
        `[object ${constantText.OBJECT}]`
      );
    case constantText.FUNCTION:
      return (
        Object.prototype.toString.call(input) ===
        `[object ${constantText.FUNCTION}]`
      );
    case constantText.DATE:
      return (
        Object.prototype.toString.call(input) ===
        `[object ${constantText.DATE}]`
      );
    case constantText.REGEXP:
      return (
        Object.prototype.toString.call(input) ===
        `[object ${constantText.REGEXP}]`
      );
    case constantText.ARRAY:
      return (
        Object.prototype.toString.call(input) ===
        `[object ${constantText.ARRAY}]`
      );
    case constantText.NULL:
      return (
        Object.prototype.toString.call(input) ===
        `[object ${constantText.NULL}]`
      );
    case constantText.UNDEFINED:
      return (
        Object.prototype.toString.call(input) ===
        `[object ${constantText.UNDEFINED}]`
      );
    case constantText.ERROR:
      return (
        Object.prototype.toString.call(input) ===
        `[object ${constantText.ERROR}]`
      );
    default:
      return false;
  }
};

export const validateInput = (
  ev,
  field,
  error,
  errorMessages,
  setError = () => {},
  setErrorMessages = () => {}
) => {
  const inputElement = ev.target.value;
  let isValid = true;
  switch (field) {
    case "name":
      isValid = stringCount(inputElement).charactersNoSpaces > 8;
      if (!isValid) {
        setError({ ...error, name: true });
        setErrorMessages({
          ...errorMessages,
          name: constantText.NAME_VALIDATION_MESSAGE,
        });
      } else {
        setError({ ...error, name: false });
        setErrorMessages({
          ...errorMessages,
          name: "",
        });
      }
      return isValid;
    case "email":
      isValid =
        isValidInput(inputElement, constantText.STRING) &&
        /^[a-zA-Z.]{1,20}\@{1}[a-zA-Z]{0,10}\.[a-zA-Z]{2,3}$/.test(
          inputElement
        );
      if (!isValid) {
        setError({ ...error, email: true });
        setErrorMessages({
          ...errorMessages,
          email: constantText.EMAIL_VALIDATION_MESSAGE,
        });
      } else {
        setError({ ...error, email: false });
        setErrorMessages({
          ...errorMessages,
          email: "",
        });
      }
      return isValid;
    case "password":
      isValid =
        stringCount(inputElement).charactersNoSpaces > 8 &&
        stringCount(inputElement).charactersNoSpaces < 16 &&
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(
          inputElement
        );
      if (!isValid) {
        setError({ ...error, password: true });
        setErrorMessages({
          ...errorMessages,
          password: constantText.PASSWORD_VALIDATION_MESSAGE,
        });
      } else {
        setError({ ...error, password: false });
        setErrorMessages({
          ...errorMessages,
          password: "",
        });
      }
      return isValid;
    default:
      setError({ ...error });
      setErrorMessages({
        ...errorMessages,
      });
      break;
  }
};