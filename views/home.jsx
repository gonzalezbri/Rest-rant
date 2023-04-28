const React = require('react')
const Def = require('./default')

function home () {
    return (
    <Def>
        <main>
            <h1>HOME</h1>
        <div>
            <img width="500px" src="/images/home.jpg" alt="restaurant" />
        <div>
        Photo by <a href="https://unsplash.com/@vardarious">Volkan Vardar</a> on <a href="https://unsplash.com/photos/1H30uRC1plc">Unsplash</a>
        </div>
        </div>
            <a href="/places">
                <button className="btn-primary">Places Page</button>
    </a>



        </main>
    </Def>
    )
}


module.exports = home
