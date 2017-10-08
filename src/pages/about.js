import React from 'react'
import Helmet from 'react-helmet'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class About extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={'About'} />
        <h1>About an author</h1>
        <div>
          I'm currently living in Wrocław, Poland where I work as a Python and
          Javascript developer at <a href="https://stxnext.com/">STX Next</a>.
        </div>
        <div>
          Besides coding, I'm a passionate toastmaster at{' '}
          <a href="https://www.facebook.com/wroclovespeakers">
            Wroclove Speakers
          </a>. I am keen on running, meeting new people and doing some street
          workout.
        </div>
        <h3>My projects:</h3>
        <ul>
          <li>
            <a href="https://github.com/krzysztofzuraw/histmag_to_kindle">
              Histmag to kindle
            </a>. Simple web crawler that sends you historical articles to your
            kindle device.
          </li>
          <li>
            <a href="https://krzysztofzuraw.github.io/pomodoro-timer/">
              Pomodoro timer
            </a>. Pomodoro timer that can show if your 25 minutes was good or
            bad.{' '}
            <a href="https://github.com/krzysztofzuraw/pomodoro-timer">
              Source code
            </a>.
          </li>
          <li>
            <a href="https://krzysztofzuraw.github.io/all-roads-lead-to/">
              All roads lead to
            </a>. Select a place & see that all roads lead there. {' '}
            <a href="https://github.com/krzysztofzuraw/all-roads-lead-to">
              Source code
            </a>.
          </li>
          <li>
            <a href="https://poznaj-wroclaw.herokuapp.com/api/">Poznaj</a>.
            Discover history of Wroclaw using your smartphone. {' '}
            <a href="https://github.com/KlubJagiellonski/poznaj-app-backend">
              Source code
            </a>.
          </li>
          <li>
            <a href="https://lit-basin-91592.herokuapp.com/">Podcast-app</a>.
            Simple podcast searcher made in ReactJS.{' '}
            <a href="https://github.com/krzysztofzuraw/podcast-app">
              Source code
            </a>.
          </li>
        </ul>
        <h3>My talks:</h3>
        <ul>
          <li>
            <a href="http://slides.com/noaal/deck">
              GeoDjango- kiedy GIS spotyka Django (Polish)
            </a>. Talk about GeoDjango, made for #20 wrocpy.
          </li>
          <li>
            <a href="http://slides.com/noaal/geopy-geokodowanie-z-pythonem">
              GeoPy- geodokodowanie z Pythonem (Polish)
            </a>. Lightning talk about GeoPy library, made for #21 wrocpy.
          </li>
        </ul>
        <h3>Social media links:</h3>
        <ul>
          <li>
            <a href="https://twitter.com/krzysztof_zuraw">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/krzysztofzuraw">Github</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
          <li>krzysztof.zuraw(at)gmail.com</li>
          <li>
            <a href="https://pl.linkedin.com/in/krzysztofzuraw">LinkedIn</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default About
