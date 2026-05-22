// 학습 리팩토링 라우터 컨테이너: /study 진입과 하위 Outlet을 담당
import { Outlet } from "react-router-dom";

const StudyContainer = () => {
  return <Outlet />;
};

export default StudyContainer;
