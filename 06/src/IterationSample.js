import React from "react";

const IterationSample = () => {
  const names = ["눈사람", "얼음", "눈", "바람"];

  /* key pros가 없다는 오류 해결. 데이터가 가진 고유한 값이 없을때는 key 값을 index로 사용
  게시물 번호같이 key값이 있으면 Article key = {article.id} 와 같이 넣어줘야함.
  index를 key로 사용하면 배열이 변경될 때 효율적으로 리렌더링 하지 못한다 */

  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return (
    <ul>{nameList}</ul>

    /* 아래의 코드를 map 함수를 사용하여 정리*/
    //   <ul>
    //       <li>눈사람</li>
    //       <li>얼음</li>
    //       <li>눈</li>
    //       <li>바람</li>
    //   </ul>
  );
};

export default IterationSample;
