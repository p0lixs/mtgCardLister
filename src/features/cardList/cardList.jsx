import React from 'react';
import { MagicCard } from './card/card';
import './cardList.scss';

export const CardList = (props) => {
  const { list } = props;
  const card_list = list.map((item) => <MagicCard card={item} key={item.id}></MagicCard>);
  return <div className="todo-list">{list.length ? card_list : 'No cards found'}</div>;
};
