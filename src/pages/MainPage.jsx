import React from "react";
import { Outlet, Link } from "react-router-dom";
import SHeader from "../components/Header/Header";
import SContainer from "../components/Container.styled";
import SGlobalWrapper from "../components/GlobalWrapper.styled";

const MainPage = () => {
  return (
    <>
      <SHeader />
      <SGlobalWrapper>
        <SContainer>
          <div style={{ padding: "20px" }}>
            <h1>Главная страница</h1>
            <p>Это главная страница с маршрутом "/"</p>

            {/* Тестовая кнопка для перехода на анализ расходов */}
            <Link
              to="/spend-analysis"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: "#565eef",
                color: "white",
                textDecoration: "none",
                borderRadius: "6px",
                marginTop: "20px",
              }}
            >
              Перейти к анализу расходов
            </Link>
          </div>

          <Outlet />
        </SContainer>
      </SGlobalWrapper>
    </>
  );
};

export default MainPage;
