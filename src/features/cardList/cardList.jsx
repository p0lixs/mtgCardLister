import React from 'react';
import { Card } from './card/card';
import './cardList.scss';

export const CardList = (props) => {
  const { list } = props;
  const card_list = list.map((item) => <Card card={item}></Card>);
  return <div className="todo-list">{list.length ? card_list : 'No cards found'}</div>;
};
