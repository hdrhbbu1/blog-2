import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Comments extends React.Component {
  render() {
    return (
      <p
        style={{
          marginBottom: rhythm(1),
        }}
      >
        I turned off Disqus comments. If you want to give me feeback please
        write to krzysztof.zuraw(at)gmail.com or use{' '}
        <a href="https://keybase.io/encrypt#krzysztofzuraw">Keybase</a>.
      </p>
    )
  }
}

export default Comments
