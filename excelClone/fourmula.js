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
      if (Number(enteredData) === Number(cellProp.value)) {
        return
      } else {
        cellProp.value = enteredData
        // if data modifies remove P-C relation , make fourmula empty , also update children with new modified values
        removeChildFromParent(cellProp.fourmula)
        cellProp.fourmula = ''
        updateChildrenCells(address)
        console.log(sheetDB)
      }
    })
  }
}

// ------------------ fourmula bar listener----------------------------
fourmulaBar = document.querySelector('.fourmula-bar')

fourmulaBar.addEventListener('keydown', (e) => {
  let inputFormula = fourmulaBar.value

  if (e.key == 'Enter' && fourmulaBar.value) {
    // if their is a change in fourmula , break old P - C relation and evaluate new fourmula and ew P-C relation and update in cellProp
    let address = addressBar.value
    let [cell, cellProp] = getCellAndCellProp(address)
    if (inputFormula !== cellProp.fourmula)
      removeChildFromParent(cellProp.fourmula)

    //add the child to the graph component
    addChildToGraphComponent(inputFormula, address)
    // Check formula is cyclic or not, then only evaluate
    // True -> cycle, False -> Not cyclic
    console.log(graphComponentMatrix)
    let isCyclic = isGraphCylic(graphComponentMatrix)
    if (isCyclic === true) {
      alert('Your formula is cyclic')
      removeChildFromGraphComponent(inputFormula, address)
      return
    }

    let evaluatedValue = evaluateFourmula(inputFormula)

    // to update UI and cellProp in DB
    setCellUIAndCellProp(evaluatedValue, inputFormula, address)
    addChildToParent(inputFormula)

    updateChildrenCells(address)
  }
})

//------------------------------------------------------------------------

function addChildToGraphComponent(formula, childAddress) {
  let [crid, ccid] = decodeRIDCIDFromAddress(childAddress)
  let encodedFormula = formula.split(' ')
  for (let i = 0; i < encodedFormula.length; i++) {
    let asciiValue = encodedFormula[i].charCodeAt(0)
    if (asciiValue >= 65 && asciiValue <= 90) {
      let [prid, pcid] = decodeRIDCIDFromAddress(encodedFormula[i])
      // B1: A1 + 10
      // rid -> i, cid -> j
      graphComponentMatrix[prid][pcid].push([crid, ccid])
    }
  }
}

function removeChildFromGraphComponent(formula, childAddress) {
  let [crid, ccid] = decodeRIDCIDFromAddress(childAddress)
  let encodedFormula = formula.split(' ')

  for (let i = 0; i < encodedFormula.length; i++) {
    let asciiValue = encodedFormula[i].charCodeAt(0)
    if (asciiValue >= 65 && asciiValue <= 90) {
      let [prid, pcid] = decodeRIDCIDFromAddress(encodedFormula[i])
      graphComponentMatrix[prid][pcid].pop()
    }
  }
}

//-------------------update all the children cells recursively--------------
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
    if (asciiValue >= 65 && asciiValue <= 90) {
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
    if (asciiValue >= 65 && asciiValue <= 90) {
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

    if (asciiValue >= 65 && asciiValue <= 90) {
      let [cell, cellProp] = getCellAndCellProp(encodedFourmula[i])
      encodedFourmula[i] = cellProp.value
    }
  }

  let decodedFourmula = encodedFourmula.join(' ')

  return eval(decodedFourmula)
}

function setCellUIAndCellProp(evaluatedValue, fourmula, address) {
  let [cell, cellProp] = getCellAndCellProp(address)

  cell.innerText = evaluatedValue // UI update
  cellProp.value = evaluatedValue
  cellProp.fourmula = fourmula
}
