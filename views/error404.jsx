const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src="/images/errorCream.jpg" alt="Dropped Ice Cream Cone"/>
               <p> 
               Photo by <a href="https://unsplash.com/photos/52jRtc2S_VE">Sarah Kilian</a> on <a href="https://unsplash.com/">Unsplash</a>
               </p>
              </div>
          </main>
      </Def>
    )
  }

module.exports = error404