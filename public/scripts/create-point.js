function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json())
        .then(states => {
            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        })
}
populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    const indexOfSelectState = event.target.selectedIndex

    stateInput.value = event.target.options[indexOfSelectState].text

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
        .then((res) => res.json())
        .then(cities => {
            for (const city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }

            citySelect.disabled = false
        })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

//itens de coleta
//pegar todos os li´s
const itensToCollect = document.querySelectorAll(".itens-grid li")
for (const itens of itensToCollect) {
    itens.addEventListener("click", handleSelectedItem)
}


const colledtedItens = document.querySelector("input[name=itens]")


let selectItens = []

function handleSelectedItem(event) {
    const itemLi = event.target

    // add ou remover um class com js
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    // console.log('ITEN ID:', itemId)

    //verificar se existem itens selecionados, se sim
    //pegar os itens selecionados

    const alreadySelected = selectItens.findIndex( item => {
        const itemfound = item == itemId //sera true or false
        return itemfound
    })

    //se ja estiver selecionado, tirar de selecao
    if (alreadySelected >= 0 ) {
        //tirar da selecao
        const filteredItens = selectItens.filter( item => {
            const itemIsDifferent = item != itemId //false
            return itemIsDifferent
        })

        selectedItens = filteredItens

    } else {
            //se nao estiver selecionado, add a selecao
        selectedItens.push(itemId)

    }

    // console.log('selectedIdItens:', selectItens)

    //atualizar o campo escondido com os itens selecionados
    collectedItens.value = selectedItens

   


}

//console.log(selectedItens)