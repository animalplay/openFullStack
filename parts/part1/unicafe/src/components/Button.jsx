/* eslint-disable react/prop-types */

export function Button({ onClick, text }) {
  return <button onClick={onClick}>{text}</button>;
}
