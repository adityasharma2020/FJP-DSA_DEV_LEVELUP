for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    let cell = document.querySelector(`.cell[rid="${i}"][cid="${j}"]`)
    cell.addEventListener('blur', (e) => {
      let address = addressBar.value

      let [cell, cellProp] = getCellAndCellProp(address)
      let enteredData = cell.innerText

      //removing the border as soon as that cell got blured
      cellProp.selected = false
      cell.style.border = '1px solid #c9cdd3'
      if (enteredData === cellProp.value) return
      cellProp.value = enteredData
      // if data modifies remove P-C relation , make fourmula empty , also update children with new modified values
      removeChildFromParent(cellProp.fourmula)
      cellProp.fourmula = ''
      updateChildrenCells(address)
    })
  }
}

fourmulaBar = document.querySelector('.fourmula-bar')

fourmulaBar.addEventListener('keydown', (e) => {
  let inputFormula = fourmulaBar.value
  // ------------some formatting---------------------
  // Step 1: Convert to Uppercase
  const formattedInput = inputFormula.toUpperCase()

  // Step 2: Remove Unnecessary Spaces
  const sanitizedInput = formattedInput.trim().replace(/\s+/g, ' ')

  // Step 3: Ensure Space between Variables and Operators
  inputFormula = sanitizedInput
    .replace(/\(/g, '( ')
    .replace(/\)/g, ' )')
    .replace(/([A-Z]+\d+)\s*([+\-*/])/g, '$1 $2 ')
    .replace(/\s*([+\-*/])\s*/g, ' $1 ')

  if (e.key == 'Enter' && fourmulaBar.value) {
    // if their is a change in fourmula , break old P - C relation and evaluate new fourmula and ew P-C relation and update in cellProp
    let address = addressBar.value
    let [cell, cellProp] = getCellAndCellProp(address)
    if (inputFormula !== cellProp.fourmula)
      removeChildFromParent(cellProp.fourmula)

    let evaluatedValue = evaluateFourmula(inputFormula)

    // to update UI and cellProp in DB
    setCellUIAndCellProp(evaluatedValue, inputFormula, address)
    addChildToParent(inputFormula)
    console.log(sheetDB)

    updateChildrenCells(address)
  }
})

function updateChildrenCells(parentAddress) {
  let [parentCell, parentCellProp] = getCellAndCellProp(parentAddress)
  let children = parentCellProp.children
  console.log(children)
  for (let i = 0; i < children.length; i++) {
    let childAddress = children[i]
    let [childCell, childCellProp] = getCellAndCellProp(childAddress)
    let childFourmula = childCellProp.fourmula
    let evaluatedValue = evaluateFourmula(childFourmula)
    console.log(evaluatedValue)
    setCellUIAndCellProp(evaluatedValue, childFourmula, childAddress)
    //recursively change all childrens
    updateChildrenCells(childAddress)
  }
}

function removeChildFromParent(fourmula) {
  let encodedFourmula = fourmula.split(' ')

  for (let i = 0; i < encodedFourmula.length; i++) {
    let children = addressBar.value
    let asciiValue = encodedFourmula[i].charCodeAt(0)
    if (asciiValue >= 65 && asciiValue <= 95) {
      let [parentCell, parentCellProp] = getCellAndCellProp(encodedFourmula[i])
      let idx = parentCellProp.children.indexOf('children')
      parentCellProp.children.splice(idx, 1)
    }
  }
}

function addChildToParent(fourmula) {
  // every dependecy in the fourmula is parent of current cell
  let childAddress = addressBar.value
  let encodedFourmula = fourmula.split(' ')
  for (let i = 0; i < encodedFourmula.length; i++) {
    let asciiValue = encodedFourmula[i].charCodeAt(0)
    if (asciiValue >= 65 && asciiValue <= 95) {
      let [parentCell, parentCellProp] = getCellAndCellProp(encodedFourmula[i])
      parentCellProp.children.push(childAddress)
    }
  }
}

function evaluateFourmula(fourmula) {
  let encodedFourmula = fourmula.split(' ')
  for (let i = 0; i < encodedFourmula.length; i++) {
    //chatrcode of 0th index of every string
    let asciiValue = encodedFourmula[i].charCodeAt(0)

    if (asciiValue >= 65 && asciiValue <= 95) {
      let [cell, cellProp] = getCellAndCellProp(encodedFourmula[i])
      encodedFourmula[i] = cellProp.value
    }
  }

  let decodedFourmula = encodedFourmula.join(' ')

  console.log(decodedFourmula)
  return eval(decodedFourmula)
}

function setCellUIAndCellProp(evaluatedValue, fourmula, address) {
  let [cell, cellProp] = getCellAndCellProp(address)

  cell.innerText = evaluatedValue // UI update
  cellProp.value = evaluatedValue
  cellProp.fourmula = fourmula
}
