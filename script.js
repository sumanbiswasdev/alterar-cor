
function mudarColor(){
    let input = document.querySelector('#trocarBackground').value
    let box = document.querySelector("#box")
    let textColor = document.querySelector("#colorCode")
    
    box.style.backgroundColor = input
    textColor.innerText = `Cor atual: ${input}`
}
