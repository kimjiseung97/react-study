import React from 'react';
import { Link, Route, useParams } from 'react-router-dom';
import { Routes } from 'react-router';

function Rooms() {
  return (
    <div>
      <h2>여기는 방을 소개하는 페이지입니다.</h2>
      <Link to="/rooms/blueRoom">파란 방입니다</Link>
      <br />
      <Link to="/rooms/greenRoom">초록 방입니다</Link>
      <br />
      <Routes>
        {/* 부모 경로 '/rooms'를 포함시킵니다 */}
        <Route path=":roomId" element={<Room />} /> 
        {/* exact와 render를 제거하고 path만 "/"로 설정하였습니다 */}
        <Route index element={<h3>방을 선택해주세요</h3>} /> 
      </Routes>
    </div>
  );
}

export default Rooms;

function Room() {
  // useParams를 사용하여 roomId에 접근합니다
  const { roomId } = useParams();
  
  return (
    // 문자열 템플릿 내에서 직접 roomId 변수를 사용합니다
    <h2>{`${roomId}방을 선택하셨습니다.`}</h2> 
  );
}
