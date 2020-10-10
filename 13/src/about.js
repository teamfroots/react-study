import React from "react";
import qs from "qs";

const about = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const showDetail = query.detail === "test";
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터 기초를 연습하는 페이지입니다.</p>
      {showDetail && <p>detail 값을 {query.detail}로 설정하였네요!</p>}
    </div>
  );
};

export default about;
