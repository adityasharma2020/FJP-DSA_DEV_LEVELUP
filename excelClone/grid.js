let rows = 100
let cols = 26

let addressColCont = document.querySelector('.address-col-cont')
let addressRowCont = document.querySelector('.address-row-cont')
let cellsCont = document.querySelector('.cells-cont')
let addressBar = document.querySelector('.address-bar')

for (let i = 0; i < rows; i++) {
  let addressCol = document.createElement('div')
  addressCol.setAttribute('class', 'address-col')
  addressCol.innerText = i + 1
  addressColCont.appendChild(addressCol)
}

for (let i = 0; i < cols; i++) {
  let addressRow = document.createElement('div')
  addressRow.setAttribute('class', 'address-row')
  addressRow.innerText = String.fromCharCode(65 + i)
  addressRowCont.appendChild(addressRow)
}

for (let i = 0; i < rows; i++) {
  let rowCont = document.createElement('div')
  rowCont.setAttribute('class', 'row-cont')
  for (let j = 0; j < cols; j++) {
    let cell = document.createElement('div')
    cell.setAttribute('class', 'cell')
    cell.setAttribute('contenteditable', 'true')
    cell.setAttribute('spellcheck', false)
    // these two attributes are for cell and storage identification
    cell.setAttribute('rid', i)
    cell.setAttribute('cid', j)
    rowCont.appendChild(cell)
    addEventForAddressBarDisplay(cell, i, j)
  }

  cellsCont.appendChild(rowCont)
}

function addEventForAddressBarDisplay(cell, i, j) {
  cell.addEventListener('click', (e) => {
    let rowID = i + 1
    let colID = String.fromCharCode(65 + j)
    addressBar.value = `${colID}${rowID}`
  })
}

// by default first cell will be selected via dom
let firstCell = document.querySelector('.cell')
firstCell.click()

// -------------------

// // add  generate  some data in the cells
let generateDependencyButton = document.querySelector('.dependecies-button')
generateDependencyButton.addEventListener('click', () => {
  let firstCell = document.querySelector(`.cell[rid="${0}"][cid="${0}"]`)
  sheetDB[0][0].value = 1
  firstCell.innerText = sheetDB[0][0].value
  for (let i = 1; i < 10; i++) {
    let cellProp = sheetDB[0][i].value
    let cell = document.querySelector(`.cell[rid="${0}"][cid="${i}"]`)
    let previousCell = document.querySelector(
      `.cell[rid="${0}"][cid="${i - 1}"]`
    )
    sheetDB[0][i - 1].children.push(childrenAddress(0, i))
    sheetDB[0][i].fourmula = `${childrenAddress(0, i - 1)} + 1`
    let previousValue = Number(sheetDB[0][i - 1].value)
    cell.innerText = previousValue + 1
    sheetDB[0][i].value = previousValue + 1
    // cell.style.fontWeight = cellProp.bold ? 'bold' : 'normal'
    cell.style.fontStyle = cellProp.italic ? 'italic' : 'normal'
    cell.style.textDecoration = cellProp.underline ? 'underline' : 'none'
    cell.style.fontSize = cellProp.fontSize + 'px'
    cell.style.fontFamily = cellProp.fontFamily
    cell.style.color = cellProp.fontColor
    cell.style.backgroundColor = cellProp.BGcolor
    cell.style.textAlign = cellProp.alignment
  }
})

function childrenAddress(i, j) {
  let rowID = i + 1
  let colID = String.fromCharCode(65 + j)
  return `${colID}${rowID}`
}
