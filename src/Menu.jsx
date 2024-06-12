import React from 'react';

const Menu = (props) => {
  const headerMenuStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    fontWeight: "bold",
    fontSize: "1.2rem",
    padding: "0 1rem",
  };

  const applyStyle = props.isDesktop ? headerMenuStyle : {};

  return (
      <ul style={applyStyle}>
        <li><a href="#faq">お問い合わせ</a></li>
        <li><a href="#overview">店舗概要</a></li>
        <li><a href="#concept">コンセプト</a></li>
        <li><a href="#news">更新情報</a></li>
        <li><a href="#dinner">ディナー</a></li>
        <li><a href="#lunch">ランチ</a></li>
        <li><a href="#environment">環境への取り組み</a></li>
        <li><a href="#questionSection">よくあるご質問</a></li>
      </ul>
  );
};

export default Menu;
