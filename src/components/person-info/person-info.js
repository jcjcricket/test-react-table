import React from 'react';
import { useSelector } from 'react-redux';

import {Info} from './elements'

export const PersonInfo = () => {
  const pId = useSelector((state) => state.personId.personId);
  const peopleInfo = useSelector((state) => state.data.peopleInfo);
  const data = peopleInfo.filter((i) => i.id === +pId);
  const rData = data.map((i) => {
    return (
      <Info key={i.id}>
        <p>Выбран пользователь: <b>{i.firstName} {i.lastName}</b></p>
        <p>Описание:</p>
        <textarea defaultValue={i.description}>
          
        </textarea>
        <p>Адрес проживания: <b>{i.adress.streetAddress}</b></p>
        <p>Город: <b>{i.adress.city}</b></p>
        <p>Провинция/штат: <b>{i.adress.state}</b></p>
        <p>Индекс: <b>{i.adress.zip}</b></p>
      </Info>
    );
  });

  return <div>{rData}</div>;
};
// Выбран пользователь <b>Sue Corson</b>
// > Описание:
// > <textarea>
// > et lacus magna dolor...
// > </textarea>
// > Адрес проживания: <b>9792 Mattis Ct</b>
// > Город: <b>Waukesha</b>
// > Провинция/штат: <b>WI</b>
// > Индекс: <b>22178</b>