const routes = {
    "/": "/index.html",
    "/home": "/pages/home.html",
    "/universo": "/pages/universo.html",
    "/exploracao": "/pages/exploracao.html",
  }

function route(event) {
    event.preventDefault()
   
    window.history.pushState({}, "", event.currentTarget.href)
    console.log(event.currentTarget.href)
    
    handle()
    
}

async function handle() {
    // pegar o caminho atual
    const {pathname} = location

    // pegar o caminho onde estão os arquivos
    const route = routes[pathname]
    console.log(route)

    // fazer a leitura dos arquivos
    const html = await fetch(route).then( res => res.text())
    console.log(html)
    
    // colocar elemento dentro do #app
    document.querySelector('#app').innerHTML = html

    // remover classes de background 
    document.body.classList.remove('background-home', 'background-universo', 'background-exploracao');

    if (pathname === '/home') {
        document.body.classList.add('background-home');
      } else if (pathname === '/universo') {
        document.body.classList.add('background-universo');
      } else if (pathname === '/exploracao') {
        document.body.classList.add('background-exploracao');
      }
}

handle()
