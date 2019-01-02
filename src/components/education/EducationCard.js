import React from 'react'

export default function EducationCard(props) {
  return (
    <div className="border-bottom">
      <span>{props.info.year}</span>
      <p>
        <em>{props.info.school}</em>
        <br />{props.info.cert}
        {
          props.info.extra ?
            <React.Fragment>
              <br /> {props.info.extra}
            </React.Fragment>
            : null
        }
      </p>
    </div>
  )
}
