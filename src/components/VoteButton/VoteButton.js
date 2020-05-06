import React from 'react'
import {navigate} from '@reach/router'

import Arrow from './Arrow'
import './VoteButton.scss'

const VoteButton = ({name, text, theme, url = null}) => {
  return (
    <>
      <div className={`VoteButton VoteButton--${theme}`}>
        <input className="VoteButton__input" id={text} name={name} type="radio" value={text} />
        <label className="VoteButton__label" htmlFor={text} onClick={e => (url ? navigate(url) : null)}>
          {text}
          <span className="VoteButton__arrow">
            <Arrow theme={theme} />
          </span>
        </label>
      </div>
    </>
  )
}

export default VoteButton
