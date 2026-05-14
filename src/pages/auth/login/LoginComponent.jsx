import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

export default function LoginComponent() {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loginMsg, setLoginMsg] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const [showFindPw, setShowFindPw] = useState(false);
  const [findStep, setFindStep] = useState(1);

  const handleSocialLogin = (provider) => {
    window.location.href = `http://localhost:10000/oauth2/authorization/${provider}`;
  };

  const handleLogin = async () => {
    if (!userEmail || !userPassword) {
      setLoginMsg("이메일과 비밀번호를 입력해주세요.");
      return;
    }
    setLoginLoading(true);
    setLoginMsg("");
    try {
      const res = await fetch("http://localhost:10000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ userEmail, userPassword }),
      });
      const data = await res.json();
      if (data.success) {
        window.location.href = "/";
      } else {
        setLoginMsg(data.message || "로그인에 실패했습니다.");
      }
    } catch {
      setLoginMsg("서버 오류가 발생했습니다.");
    } finally {
      setLoginLoading(false);
    }
  };

  return (
    <S.PageWrap>
      <S.Hero>
        <S.HeroTitle>이음과 함께<br />새로운 소통을 시작해보세요</S.HeroTitle>
        <S.HeroSub>
          이 서비스는 수어 학습과 자격시험을 지원합니다. 로그인하여 더 많은 기능을 이용하세요.
        </S.HeroSub>
      </S.Hero>

      <S.ContentArea>
        <S.LoginCard>
          <S.CardTitle>로그인</S.CardTitle>
          <S.InputGroup>
            <div>
              <S.Label>아이디 (이메일)</S.Label>
              <S.Input
                placeholder="example@email.com"
                value={userEmail}
                onChange={e => setUserEmail(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleLogin()}
              />
            </div>
            <div>
              <S.Label>비밀번호</S.Label>
              <S.Input
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={userPassword}
                onChange={e => setUserPassword(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleLogin()}
              />
            </div>
          </S.InputGroup>

          {loginMsg && (
            <div style={{ fontSize: 12, color: "#e74c3c", marginBottom: 8, textAlign: "center" }}>
              {loginMsg}
            </div>
          )}

          <S.PrimaryBtn onClick={handleLogin} disabled={loginLoading}>
            {loginLoading ? "로그인 중..." : "로그인"}
          </S.PrimaryBtn>
          <S.OutlineBtn onClick={() => navigate("/join")}>회원가입</S.OutlineBtn>

          <S.Divider>SNS 로그인</S.Divider>

          <S.SocialBtnRow>
            <S.SocialBtn $bg="#FEE500" $color="#3C1E1E" onClick={() => handleSocialLogin("kakao")}>
              <span style={{ fontWeight: 800, fontSize: 15 }}>K</span>
              Kakao로 시작하기
            </S.SocialBtn>
            <S.SocialBtn $bg="#03C75A" $color="#fff" onClick={() => handleSocialLogin("naver")}>
              <span style={{ fontWeight: 800, fontSize: 15 }}>N</span>
              Naver로 시작하기
            </S.SocialBtn>
            <S.SocialBtn $outline $bg="#fff" $color="#333" onClick={() => handleSocialLogin("google")}>
              <img src="https://www.google.com/favicon.ico" alt="" style={{ width: 16, height: 16 }} />
              Google로 시작하기
            </S.SocialBtn>
          </S.SocialBtnRow>

          <S.FindPwLink onClick={() => setShowFindPw(v => !v)}>
            {showFindPw ? "비밀번호 찾기 닫기" : "비밀번호를 잊으셨나요?"}
          </S.FindPwLink>
        </S.LoginCard>

        {showFindPw && (
          <S.FindPwCard>
            <S.CardTitle>비밀번호 찾기</S.CardTitle>

            <S.StepSection>
              <S.StepLabel>1. 본인 인증</S.StepLabel>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div>
                  <S.Label>이름</S.Label>
                  <S.Input placeholder="이름을 입력하세요" />
                </div>
                <div>
                  <S.Label>아이디 (이메일)</S.Label>
                  <S.SmallInput placeholder="example@email.com" />
                </div>
                <S.InlineRow>
                  <S.SmallInput placeholder="휴대폰 번호" />
                  <S.SmallBtn onClick={() => setFindStep(2)}>인증 발송</S.SmallBtn>
                </S.InlineRow>
                {findStep >= 2 && (
                  <S.InlineRow>
                    <S.SmallInput placeholder="인증번호 입력" />
                    <S.SmallBtn $green onClick={() => setFindStep(3)}>확인</S.SmallBtn>
                  </S.InlineRow>
                )}
              </div>
            </S.StepSection>

            {findStep >= 3 && (
              <S.StepSection>
                <S.StepLabel>2. 비밀번호 설정</S.StepLabel>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div>
                    <S.Label>새 비밀번호</S.Label>
                    <S.Input type="password" placeholder="새 비밀번호를 입력하세요" />
                  </div>
                  <div>
                    <S.Label>비밀번호 확인</S.Label>
                    <S.Input type="password" placeholder="비밀번호를 다시 입력하세요" />
                  </div>
                  <S.ChangeBtn>비밀번호 변경 완료</S.ChangeBtn>
                </div>
              </S.StepSection>
            )}
          </S.FindPwCard>
        )}
      </S.ContentArea>
    </S.PageWrap>
  );
}
