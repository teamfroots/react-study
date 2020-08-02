import React from "react";

// const MyComponent = (props) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {props.name}입니다. <br />
//       children 값은 {props.children} 입니다.
//     </div>
//   );
// };

// const MyComponent = (props) => {
//   const { name, children } = props;
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name}입니다. <br />
//       children 값은 {children} 입니다.
//     </div>
//   );
// };

const MyComponent = ({ name, children }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children} 입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "땡땡땡",
};

export default MyComponent;
