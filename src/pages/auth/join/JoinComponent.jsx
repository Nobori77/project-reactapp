import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

const steps = ["약관동의", "회원정보 입력", "가입완료"];

const AGREE_ITEMS = [
  { id: "terms", label: "[필수] 이음 서비스 이용약관에 동의합니다." },
  { id: "privacy", label: "[필수] 개인정보 수집 및 이용에 동의합니다." },
  { id: "marketing", label: "[선택] 마케팅 정보 수신에 동의합니다." },
];

export default function JoinComponent() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  // 1단계: 약관동의
  const [agreeAll, setAgreeAll] = useState(false);
  const [agrees, setAgrees] = useState({ terms: false, privacy: false, marketing: false });

  // 2단계: 회원정보
  const [form, setForm] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    confirmPassword: "",
  });
  const [phone, setPhone] = useState("");
  const [verifyCode, setVerifyCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [codeVerified, setCodeVerified] = useState(false);
  const [smsLoading, setSmsLoading] = useState(false);
  const [smsMsg, setSmsMsg] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitMsg, setSubmitMsg] = useState("");

  const handleAgreeAll = (checked) => {
    setAgreeAll(checked);
    setAgrees({ terms: checked, privacy: checked, marketing: checked });
  };

  const handleAgreeItem = (id, checked) => {
    const next = { ...agrees, [id]: checked };
    setAgrees(next);
    setAgreeAll(Object.values(next).every(Boolean));
  };

  const handleForm = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSendCode = async () => {
    const memberPhone = phone.replace(/-/g, "");
    if (!memberPhone) return;
    setSmsLoading(true);
    setSmsMsg("");
    try {
      const res = await fetch("http://localhost:10000/api/sms/phone/verification-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ memberPhone }),
      });
      const data = await res.json();
      if (data.success) {
        setCodeSent(true);
        setSmsMsg("인증번호가 발송되었습니다.");
      } else {
        setSmsMsg(data.message || "발송에 실패했습니다.");
      }
    } catch {
      setSmsMsg("서버 오류가 발생했습니다.");
    } finally {
      setSmsLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    const memberPhone = phone.replace(/-/g, "");
    if (!memberPhone || !verifyCode) return;
    setSmsLoading(true);
    setSmsMsg("");
    try {
      const res = await fetch("http://localhost:10000/api/sms/phone/verification-code/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ memberPhone, code: verifyCode }),
      });
      const data = await res.json();
      if (data.success) {
        setCodeVerified(true);
        setSmsMsg("인증이 완료되었습니다.");
      } else {
        setSmsMsg(data.message || "인증번호가 올바르지 않습니다.");
      }
    } catch {
      setSmsMsg("서버 오류가 발생했습니다.");
    } finally {
      setSmsLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!form.userName || !form.userEmail || !form.userPassword) {
      setSubmitMsg("필수 항목을 모두 입력해주세요.");
      return;
    }
    if (form.userPassword !== form.confirmPassword) {
      setSubmitMsg("비밀번호가 일치하지 않습니다.");
      return;
    }
    setSubmitLoading(true);
    setSubmitMsg("");
    try {
      const res = await fetch("http://localhost:10000/api/users/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName: form.userName,
          userEmail: form.userEmail,
          userPassword: form.userPassword,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setCurrentStep(2);
      } else {
        setSubmitMsg(data.message || "회원가입에 실패했습니다.");
      }
    } catch {
      setSubmitMsg("서버 오류가 발생했습니다.");
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <S.PageWrap>
      <S.Hero>
        <S.HeroTitle>이음과 함께<br />새로운 소통을 시작해보세요</S.HeroTitle>
        <S.StepBar>
          {steps.map((name, i) => (
            <div key={name} style={{ display: "flex", alignItems: "center" }}>
              <S.StepItem>
                <S.StepCircle $active={i <= currentStep}>{i + 1}</S.StepCircle>
                <S.StepName $active={i <= currentStep}>{name}</S.StepName>
              </S.StepItem>
              {i < steps.length - 1 && <S.StepLine />}
            </div>
          ))}
        </S.StepBar>
      </S.Hero>

      <S.ContentArea>

        {/* 1단계: 약관동의 */}
        {currentStep === 0 && (
          <S.FormCard>
            <S.SectionTitle>서비스 이용약관</S.SectionTitle>
            <S.SectionBlock>
              <S.AgreeAll>
                <input
                  type="checkbox"
                  checked={agreeAll}
                  onChange={e => handleAgreeAll(e.target.checked)}
                />
                전체 동의
              </S.AgreeAll>
              <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: 12 }}>
                {AGREE_ITEMS.map(item => (
                  <S.AgreeItem key={item.id}>
                    <S.AgreeLeft>
                      <input
                        type="checkbox"
                        checked={agrees[item.id]}
                        onChange={e => handleAgreeItem(item.id, e.target.checked)}
                      />
                      {item.label}
                    </S.AgreeLeft>
                    <S.ViewLink>보기</S.ViewLink>
                  </S.AgreeItem>
                ))}
              </div>
            </S.SectionBlock>

            <S.SubmitBtn
              onClick={() => setCurrentStep(1)}
              disabled={!agrees.terms || !agrees.privacy}
              style={{ opacity: (!agrees.terms || !agrees.privacy) ? 0.4 : 1 }}
            >
              다음
            </S.SubmitBtn>
          </S.FormCard>
        )}

        {/* 2단계: 회원정보 입력 및 핸드폰 인증 */}
        {currentStep === 1 && (
          <S.FormCard>
            <S.SectionBlock>
              <S.SectionTitle>기본 정보</S.SectionTitle>
              <S.Grid>
                <div>
                  <S.Label>이름 *</S.Label>
                  <S.Input
                    name="userName"
                    placeholder="이름을 입력하세요"
                    value={form.userName}
                    onChange={handleForm}
                  />
                </div>
                <div>
                  <S.Label>생년월일</S.Label>
                  <S.Input placeholder="YYYY-MM-DD" />
                </div>
              </S.Grid>
            </S.SectionBlock>

            <S.SectionBlock>
              <S.SectionTitle>계정 정보</S.SectionTitle>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div>
                  <S.Label>아이디 (이메일) *</S.Label>
                  <S.Input
                    name="userEmail"
                    placeholder="example@email.com"
                    value={form.userEmail}
                    onChange={handleForm}
                  />
                </div>
                <div>
                  <S.Label>비밀번호 *</S.Label>
                  <S.Input
                    type="password"
                    name="userPassword"
                    placeholder="비밀번호를 입력하세요"
                    value={form.userPassword}
                    onChange={handleForm}
                  />
                </div>
                <div>
                  <S.Label>비밀번호 확인 *</S.Label>
                  <S.Input
                    type="password"
                    name="confirmPassword"
                    placeholder="비밀번호를 다시 입력하세요"
                    value={form.confirmPassword}
                    onChange={handleForm}
                  />
                  {form.confirmPassword && (
                    <div style={{ fontSize: 11, color: form.userPassword === form.confirmPassword ? "#03C75A" : "#e74c3c", marginTop: 4 }}>
                      {form.userPassword === form.confirmPassword ? "비밀번호가 일치합니다." : "비밀번호가 일치하지 않습니다."}
                    </div>
                  )}
                </div>
              </div>
            </S.SectionBlock>

            <S.SectionBlock>
              <S.SectionTitle>핸드폰 인증</S.SectionTitle>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div>
                  <S.Label>핸드폰 번호 *</S.Label>
                  <S.InlineRow>
                    <S.Input
                      placeholder="010-0000-0000"
                      style={{ flex: 1 }}
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      disabled={codeVerified}
                    />
                    <S.SmallBtn onClick={handleSendCode} disabled={smsLoading || codeVerified}>
                      {codeSent ? "재발송" : "인증 발송"}
                    </S.SmallBtn>
                  </S.InlineRow>
                </div>
                {codeSent && !codeVerified && (
                  <div>
                    <S.Label>인증번호 *</S.Label>
                    <S.InlineRow>
                      <S.Input
                        placeholder="인증번호를 입력하세요"
                        style={{ flex: 1 }}
                        value={verifyCode}
                        onChange={e => setVerifyCode(e.target.value)}
                      />
                      <S.SmallBtn $green onClick={handleVerifyCode} disabled={smsLoading}>
                        확인
                      </S.SmallBtn>
                    </S.InlineRow>
                  </div>
                )}
                {smsMsg && (
                  <div style={{ fontSize: 12, color: codeVerified ? "#03C75A" : "#e74c3c", marginTop: 2 }}>
                    {smsMsg}
                  </div>
                )}
              </div>
            </S.SectionBlock>

            {submitMsg && (
              <div style={{ fontSize: 13, color: "#e74c3c", marginBottom: 8, textAlign: "center" }}>
                {submitMsg}
              </div>
            )}

            <div style={{ display: "flex", gap: 10 }}>
              <S.SubmitBtn
                onClick={() => setCurrentStep(0)}
                style={{ background: "#fff", color: "#4359fc", border: "1.5px solid #4359fc", flex: 1 }}
              >
                이전
              </S.SubmitBtn>
              <S.SubmitBtn onClick={handleSubmit} disabled={submitLoading} style={{ flex: 2 }}>
                {submitLoading ? "처리 중..." : "이음 시작하기"}
              </S.SubmitBtn>
            </div>
          </S.FormCard>
        )}

        {/* 3단계: 가입완료 */}
        {currentStep === 2 && (
          <S.FormCard style={{ textAlign: "center", padding: "60px 32px" }}>
            <div style={{ fontSize: 52, marginBottom: 16 }}>🎉</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 8 }}>
              회원가입이 완료되었습니다!
            </div>
            <div style={{ fontSize: 14, color: "#888", marginBottom: 32 }}>
              이음과 함께 새로운 소통을 시작해보세요.
            </div>
            <S.SubmitBtn onClick={() => navigate("/login")} style={{ maxWidth: 240, margin: "0 auto" }}>
              로그인하러 가기
            </S.SubmitBtn>
          </S.FormCard>
        )}

      </S.ContentArea>
    </S.PageWrap>
  );
}
