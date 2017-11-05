import React from 'react'
import Helmet from 'react-helmet'

function Analytics() {
  if (process.env.NODE_ENV === `production`) {
    return (
      <Helmet
        script={[
          {
            innerHTML: `var _paq = _paq || [];
            /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="//noaaln.xyz/";
              _paq.push(['setTrackerUrl', u+'piwik.php']);
              _paq.push(['setSiteId', '1']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
            })();`,
            type: 'text/javascript',
          },
        ]}
      />
    )
  }

  return null
}

export default Analytics
