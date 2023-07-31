for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    let cell = document.querySelector(`.cell[rid="${i}"][cid="${j}"]`)
    cell.addEventListener('blur', (e) => {
      let address = addressBar.value

      let [cell, cellProp] = getCellAndCellProp(address)
      let enteredData = cell.innerText

      //removing the border as soon as that cell got blured
      cellProp.selected = false
      cell.style.border = '1px solid #dfe4ea'

      cellProp.value = enteredData
    })
  }
}

let fourmulaBar = document.querySelector('.fourmula-bar')

fourmulaBar.addEventListener('keydown', (e) => {
  let inputFoumula = fourmulaBar.value
  if (e.key == 'Enter' && fourmulaBar.value) {
    let evaluatedValue = evaluateFourmula(inputFoumula)

    // to update UI and cellProp in DB
    setCellUIAndCellProp(evaluatedValue, inputFoumula)
  }
})

function evaluateFourmula(fourmula) {
  let encodedFourmula = fourmula.split(' ')
  for (let i = 0; i < encodedFourmula.length; i++) {
    //chatrcode of 0th index of every string
    let asciiValue = encodedFourmula[i].charCodeAt(0)
    console.log(asciiValue)
    if (asciiValue >= 65 && asciiValue <= 95) {
      let [cell, cellProp] = getCellAndCellProp(encodedFourmula[i])
      encodedFourmula[i] = cellProp.value
    }
  }

  let decodedFourmula = encodedFourmula.join(' ')
  return eval(decodedFourmula)
}

function setCellUIAndCellProp(evaluatedValue, fourmula) {
  let address = addressBar.value
  let [cell, cellProp] = getCellAndCellProp(address)

  cell.innerText = evaluatedValue // UI update
  cellProp.value = evaluatedValue
  cellProp.fourmula = fourmula
}
