import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Krzysztof Żuraw`}
          style={{
            float: 'left',
            marginRight: rhythm(1 / 4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        Written by <strong>Krzysztof Żuraw</strong> who lives and works in
        Wrocław building useful things.{' '}
        <a href="https://twitter.com/krzysztof_zuraw">
          You should follow him on Twitter
        </a>
      </p>
    )
  }
}

export default Bio
