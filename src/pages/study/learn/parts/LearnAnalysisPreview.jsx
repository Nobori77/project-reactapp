import { useEffect, useState } from "react";

import AnalysisReportCard from "../../../mypage/learning/analysis/components/AnalysisReportCard";
import OverallAnalysisCard from "../../../mypage/learning/analysis/components/OverallAnalysisCard";
import AnalysisStyle from "../../../mypage/learning/analysis/style";
import * as S from "../style";

const LearnAnalysisPreview = () => {
  const [analysisData, setAnalysisData] = useState({
    report: null,
    overallAnalysisList: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    const fetchLearningAnalysis = async () => {
      try {
        const response = await fetch("http://localhost:10000/private/api/mypage/learning/analysis", {
          method: "GET",
          credentials: "include",
        });

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.message || "AI 학습 분석 조회에 실패했습니다.");
        }

        const data = result.data || {};

        if (isMounted) {
          setAnalysisData({
            report: data.report,
            overallAnalysisList: data.overallAnalysisList || [],
          });
        }
      } catch (error) {
        if (isMounted) {
          setErrorMessage(error.message || "AI 학습 분석 조회에 실패했습니다.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchLearningAnalysis();

    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    return (
      <S.StudyAnalysisHeader>
        <S.StudyAnalysisTitle>AI 학습 분석</S.StudyAnalysisTitle>
        <S.StudyAnalysisDesc>AI 학습 분석 결과를 불러오고 있습니다.</S.StudyAnalysisDesc>
      </S.StudyAnalysisHeader>
    );
  }

  if (errorMessage) {
    return (
      <S.StudyAnalysisHeader>
        <S.StudyAnalysisTitle>AI 학습 분석</S.StudyAnalysisTitle>
        <S.StudyAnalysisDesc>{errorMessage}</S.StudyAnalysisDesc>
      </S.StudyAnalysisHeader>
    );
  }

  if (!analysisData.report) {
    return (
      <S.StudyAnalysisHeader>
        <S.StudyAnalysisTitle>AI 학습 분석</S.StudyAnalysisTitle>
        <S.StudyAnalysisDesc>분석할 학습 데이터가 없습니다.</S.StudyAnalysisDesc>
      </S.StudyAnalysisHeader>
    );
  }

  return (
    <AnalysisStyle.AnalysisWrapper>
      <S.StudyAnalysisHeader>
        <S.StudyAnalysisTitle>AI 학습 분석</S.StudyAnalysisTitle>
        <S.StudyAnalysisDesc>
          AI가 학습 데이터를 분석하여 전체 성과와 맞춤형 학습 가이드를 제공합니다.
        </S.StudyAnalysisDesc>
      </S.StudyAnalysisHeader>

      <AnalysisStyle.AnalysisTopCard>
        <AnalysisReportCard report={analysisData.report} />
        <AnalysisStyle.AnalysisDivider />
        <OverallAnalysisCard analysisList={analysisData.overallAnalysisList} />
      </AnalysisStyle.AnalysisTopCard>
    </AnalysisStyle.AnalysisWrapper>
  );
};

export default LearnAnalysisPreview;
