import React from 'react'
import Link from 'gatsby-link'
import { rhythm } from '../utils/typography'

function BlogSeries(props) {
  const { readNext, readPrev } = props
  let nextText
  let prevText

  if (readNext === null && readPrev === null) {
    return null
  }
  if (readNext !== null) {
    nextText = ReadNextText(readNext)
  }
  if (readPrev !== null) {
    prevText = ReadPrevText(readPrev)
  }

  return (
    <h4
      style={{
        display: 'block',
        marginBottom: rhythm(1),
        marginTop: 0,
      }}
    >
      This blog post is part of series.
      {nextText}
      {prevText}
    </h4>
  )
}

function ReadNextText(readNext) {
  return (
    <span>
      {' '}
      Read <Link to={readNext}>next</Link> part.
    </span>
  )
}

function ReadPrevText(readPrev) {
  return (
    <span>
      {' '}
      Go <Link to={readPrev}>back</Link> to previous one.
    </span>
  )
}

export default BlogSeries
