import React from 'react';

import './mails-menu.css';

function ItemWrapper({id, title, callback}) {
    return  <li className="mails-menu__item-wrapper">
                <input className="mails-menu__item" id={id} type="button" value={title} onClick={callback} />
            </li>
}

function MailsMenu({callbacks}) {
    return  <ul className="mails-menu">
                <ItemWrapper id="forward-button" title="Переслать"                                 />
                <ItemWrapper id="delete-button"  title="Удалить"         callback={callbacks.deleteCallback} />
                <ItemWrapper id="spam-button"    title="Это бан!"                                  />
                <ItemWrapper id="read-button"    title="Прочитано"                                 />
                <ItemWrapper id="read-button"    title="Получить письмо" callback={callbacks.receiveCallback}/>
            </ul>
}

export default MailsMenu;
