import React from 'react'

import { rhythm } from '../utils/typography'

function BlogSeries(props) {
  const { readNext, readPrev } = props
  let nextText
  let prevText

  if (readNext === null && readPrev === null) {
    return null
  }
  if (readNext !== null) {
    nextText = 'You can read next post'
  }
  if (readPrev !== null) {
    prevText = 'You can go back to previous post'
  }

  return (
    <div>
      This blog post is part of series.
      {nextText}
      {prevText}
    </div>
  )
}

export default BlogSeries
