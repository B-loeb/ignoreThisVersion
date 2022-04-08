const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>Rest-Rant</h1>
              <div>
                <img src="/images/sushi.jpg" alt="Rainbow Roll Sushi" />
                 <p>
                  Photo by <a href="https://unsplash.com/photos/kNH31Q7MDUY">Israel Albornoz</a> on <a href="https://unsplash.com/">Unsplash</a>
                 </p>
              </div>
          </main>
      </Def>
    )
  }
module.exports = home