import React, { useState, useEffect } from "react";
import ReviewSectionComponent from "./ReviewSectionComponent";
import { REVIEWS } from "./constants";
import { useNavigate } from "react-router-dom";
import * as S from "./style.js";

const MAX_DISPLAY = 7;

const ReviewSectionContainer = () => {
  const [reviews, setReviews] = useState(REVIEWS);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/reviews")
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setReviews([...data, ...REVIEWS]);
        }
      })
      .catch(() => {});
  }, []);

  const displayedReviews = reviews.slice(0, MAX_DISPLAY);
  const hasMore = reviews.length > MAX_DISPLAY;

  return (
    <>
      <ReviewSectionComponent reviews={displayedReviews} hasMore={hasMore} onMore={() => navigate("/reviews")} />
    </>
  );
};

export default ReviewSectionContainer;