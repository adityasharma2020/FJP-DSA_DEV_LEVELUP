let sheetDB = []

for (let i = 0; i < rows; i++) {
  let sheetRow = []
  for (let j = 0; j < cols; j++) {
    let cellProp = {
      bold: false,
      italic: false,
      underline: false,
      alignment: 'left',
      fontFamily: 'monospace',
      fontSize: '14',
      fontColor: '#000000',
      BGcolor: '#ECF0F1', //just for indication purposes
    }
    sheetRow.push(cellProp)
  }
  sheetDB.push(sheetRow)
}

// selectors for cell properties
let bold = document.querySelector('.bold')
let italic = document.querySelector('.italic')
let underline = document.querySelector('.underline')
let fontSize = document.querySelector('.font-size-prop')
let fontFamily = document.querySelector('.font-family-prop')
let fontColor = document.querySelector('.font-color-prop')
let BGcolor = document.querySelector('.BG-color-prop')
let alignment = document.querySelectorAll('.alignment')

let leftAlign = alignment[0]
let centerAlign = alignment[1]
let rightAlign = alignment[2]

let activeColorProp = '#d1d8e0'
let inactiveColorProp = '#ecf0f1'

//application of two way binding

// attaching property listeners
bold.addEventListener('click', (e) => {
  let address = addressBar.value
  let [cell, cellProp] = activeCell(address)

  //   modification
  cellProp.bold = !cellProp.bold //Data change
  cell.style.fontWeight = cellProp.bold ? 'bold' : 'normal' //UI change part-1
  bold.style.backgroundColor = cellProp.bold //UI change part-2
    ? activeColorProp
    : inactiveColorProp
})

italic.addEventListener('click', (e) => {
  let address = addressBar.value
  let [cell, cellProp] = activeCell(address)

  //   modification
  cellProp.italic = !cellProp.italic //Data change
  cell.style.fontStyle = cellProp.italic ? 'italic' : 'normal' //UI change part-1
  italic.style.backgroundColor = cellProp.italic //UI change part-2
    ? activeColorProp
    : inactiveColorProp
})

underline.addEventListener('click', (e) => {
  let address = addressBar.value
  let [cell, cellProp] = activeCell(address)

  //   modification
  cellProp.underline = !cellProp.underline //Data change
  cell.style.textDecoration = cellProp.underline ? 'underline' : 'none' //UI change part-1
  underline.style.backgroundColor = cellProp.underline //UI change part-2
    ? activeColorProp
    : inactiveColorProp
})

fontSize.addEventListener('change', (e) => {
  let address = addressBar.value
  let [cell, cellProp] = activeCell(address)

  //modification
  cellProp.fontSize = fontSize.value
  cell.style.fontSize = cellProp.fontSize + 'px'
  fontSize.value = cellProp.fontSize
})

fontFamily.addEventListener('change', (e) => {
  let address = addressBar.value
  let [cell, cellProp] = activeCell(address)

  //modification
  cellProp.fontFamily = fontFamily.value
  cell.style.fontFamily = cellProp.fontFamily
  fontFamily.value = cellProp.fontFamily
})

fontColor.addEventListener('change', (e) => {
  let address = addressBar.value
  let [cell, cellProp] = activeCell(address)

  cellProp.fontColor = fontColor.value
  cell.style.color = cellProp.fontColor
  fontColor.value = cellProp.fontColor
})

BGcolor.addEventListener('change', (e) => {
  let address = addressBar.value
  let [cell, cellProp] = activeCell(address)

  cellProp.BGcolor = BGcolor.value
  cell.style.backgroundColor = cellProp.BGcolor
  BGcolor.value = cellProp.BGcolor
})

alignment.forEach((alignElem) => {
  alignElem.addEventListener('click', (e) => {
    let address = addressBar.value
    let [cell, cellProp] = activeCell(address)

    let alignValue = e.target.getAttribute('alignment')
    cellProp.alignment = alignValue
    cell.style.textAlign = cellProp.alignment

    switch (alignValue) {
      case 'left':
        leftAlign.style.backgroundColor = activeColorProp
        centerAlign.style.backgroundColor = inactiveColorProp
        rightAlign.style.backgroundColor = inactiveColorProp
        break
      case 'center':
        leftAlign.style.backgroundColor = inactiveColorProp
        centerAlign.style.backgroundColor = activeColorProp
        rightAlign.style.backgroundColor = inactiveColorProp
        break
      case 'right':
        leftAlign.style.backgroundColor = inactiveColorProp
        centerAlign.style.backgroundColor = inactiveColorProp
        rightAlign.style.backgroundColor = activeColorProp
        break
    }
  })
})
// -------------------------------------------------------------------

let allCells = document.querySelectorAll('.cell')
for (let i = 0; i < allCells.length; i++) {
  addListenerToAttachCellProperties(allCells[i])
}
function addListenerToAttachCellProperties(cell) {
  //work
  cell.addEventListener('click', (e) => {
    let address = addressBar.value
    let [rid, cid] = decodeRIDCIDFromAddress(address)
    let cellProp = sheetDB[rid][cid];
    //-------apply cell properties-------------
    cell.style.fontWeight = cellProp.bold ? 'bold' : 'normal'
    cell.style.fontStyle = cellProp.italic ? 'italic' : 'normal'
    cell.style.textDecoration = cellProp.underline ? 'underline' : 'none'
    cell.style.fontSize = cellProp.fontSize + 'px'
    cell.style.fontFamily = cellProp.fontFamily
    cell.style.color = cellProp.fontColor
    cell.style.backgroundColor = cellProp.BGcolor
    cell.style.textAlign = cellProp.alignment

    //   ------apply UI properties to all containers---------
    bold.style.backgroundColor = cellProp.bold //UI change part-2
      ? activeColorProp
      : inactiveColorProp 

    italic.style.backgroundColor = cellProp.italic //UI change part-2
      ? activeColorProp
      : inactiveColorProp

    underline.style.backgroundColor = cellProp.underline //UI change part-2
      ? activeColorProp
      : inactiveColorProp

    fontSize.value = cellProp.fontSize
    fontFamily.value = cellProp.fontFamily
    fontColor.value = cellProp.fontColor
    BGcolor.value = cellProp.BGcolor

    switch (cellProp.alignment) {
      case 'left':
        leftAlign.style.backgroundColor = activeColorProp
        centerAlign.style.backgroundColor = inactiveColorProp
        rightAlign.style.backgroundColor = inactiveColorProp
        break
      case 'center':
        leftAlign.style.backgroundColor = inactiveColorProp
        centerAlign.style.backgroundColor = activeColorProp
        rightAlign.style.backgroundColor = inactiveColorProp
        break
      case 'right':
        leftAlign.style.backgroundColor = inactiveColorProp
        centerAlign.style.backgroundColor = inactiveColorProp
        rightAlign.style.backgroundColor = activeColorProp
        break
    }
  })
}

function activeCell(address) {
  let [rid, cid] = decodeRIDCIDFromAddress(address)
  //   access cell and storage object
  let cell = document.querySelector(`.cell[rid="${rid}"][cid="${cid}"]`)
  let cellProp = sheetDB[rid][cid]
  return [cell, cellProp]
}
function decodeRIDCIDFromAddress(address) {
  // address ->A1
  let rid = Number(address.slice(1) - 1) //"1" =>0
  let cid = Number(address.charCodeAt(0)) - 65 //"A" => 65
  return [rid, cid]
}
