const routes = {
    "/": "/pages/index.html",
    "/home": "/pages/home.html",
    "/univeso": "/pages/universo.html",
    "/exploracao": "/pages/exploracao.html",
  }

function route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    handle()
}

function handle() {
    const { pathname }  = window.location
    const route = routes[pathname] || routes[404]
    console.log('antes do fetch')
    fetch(route)
    .then(data => data.text())
    .then(html => console.log(html))


    console.log(route)
}