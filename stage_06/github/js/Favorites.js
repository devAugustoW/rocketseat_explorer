// Classe que vai conter a estrutura e a lógica dos dados
export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()

    }

    load() {
        this.entries = [
            {
                login: "DevAugustoW",
                name: "Augusto Dantas",
                public_repos: '8',
                followers: '10'
            },
            {
                login: "maykbrito",
                name: "Mayk Brito",
                public_repos: '76',
                followers: '12000'
            },
            {
                login: "diego3g",
                name: "Diego Fernandes",
                public_repos: '96',
                followers: '20000'
            }
        ]
    }

    

}



// classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites {
    constructor(root){
        super(root)
        this.tbody = this.root.querySelector('table tbody')
        this.update()
    }

    update() {
        this.removeAllTr()

        this.entries.forEach( user => {
            const row = this.createRow()

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`


            this.tbody.append('row')
        })

        
             
    }

    createRow() {
        const tbody = this.root.querySelector('table tbody')
        const tr = document.createElement('tr')

        tr.innerHTML = `
                <tr>
                    <td class="user">
                        <img src="https://github.com/devaugustow.png" alt="foto augusto">
                        <a href="https://github.com/devaugustow" target="_blank">
                            <p>Augusto Dantas</p>
                            <span>DevAugustoW</span>
                        </a>
                    </td>
                    <td class="repositories">8</td>
                    <td class="followers">10</td>
                    <td><button class="remove">&times;</button></td>
                </tr>`

        return tr
         
    }
    
    removeAllTr() {

        this.tbody.querySelectorAll('tr').forEach((tr) => {
            tr.remove()
        });
    }
}
