import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CustomServiceNoticeComponent from './CustomServiceNoticeComponent';

const CustomServiceNoticeContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [notice, setNotice]       = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError]         = useState(null);
  const [isAdmin, setIsAdmin]     = useState(false);  // ← 추가

  // 관리자 여부 확인
  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await fetch('http://localhost:10000/api/auth/me', { credentials: 'include' });
        if (res.ok) {
          const user = await res.json();
          setIsAdmin(user.role === 'ADMIN');
        }
      } catch (err) {
        setIsAdmin(false);
      }
    };
    fetchMe();
  }, []);

  useEffect(() => {
    const loadNotice = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`http://localhost:10000/api/notice/${id}`, {
          credentials: 'include'
        });
        if (!res.ok) throw new Error('공지사항을 찾을 수 없습니다.');
        const data = await res.json();
        setNotice(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadNotice();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm('삭제하시겠습니까?')) return;
    try {
      const res = await fetch(`http://localhost:10000/api/notice/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      });
      if (!res.ok) throw new Error('삭제 실패');
      navigate('/customservice/notice');
    } catch (err) {
      alert('삭제에 실패했습니다.');
    }
  };

  const handleEdit = () => {
    navigate(`/customservice/notice/${id}/edit`);
  };

  return (
    <>
      <CustomServiceNoticeComponent
        notice={notice}
        isLoading={isLoading}
        error={error}
        isAdmin={isAdmin}
        onBack={() => navigate('/customservice/notice')}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </>
  );
};

export default CustomServiceNoticeContainer;