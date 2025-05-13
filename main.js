// importa modulos app e browserwindo do electron
const { app, BrowserWindow } = require('electron');

//função para criar a janela principal
function createwindow() {
        //criar uma nova instancia do browserwindo
        const window = new BrowserWindow({
                width: 800, // largura da janela
                height: 600, // altura da janela


        })

        //carregar um arquivo html na janela
        window.loadFile('src/pages/index.html');

}

//evento que é declarado quando o electron está pronto
app.whenReady().then(() => {

createwindow()        //chama função de criar a janela

})