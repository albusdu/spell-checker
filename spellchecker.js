let words = ['mgeli', 'tura', 'mela']
CKEDITOR.replace('spellcheck')
CKEDITOR.on('instanceReady', (e) => {
  e.editor.on('key', (e) => {
    if (e.data.keyCode == 32) {
      let text = CKEDITOR.instances.spellcheck.editable().getText()
      spellCheck(text)
      //for update caret position after set
      var range = CKEDITOR.instances.spellcheck.createRange()
      range.moveToElementEditablePosition(
        CKEDITOR.instances.spellcheck.editable(),
        true
      )
      CKEDITOR.instances.spellcheck.getSelection().selectRanges([range])
      //for update caret position after set
    }
  })
})

const spellCheck = (text) => {
  // let e = CKEDITOR.instances.spellcheck.editable().getText()
  // words.forEach((word) => {
  //   let res = new RegExp('(?:^|\\s)' + word, 'gi')
  //   let test = text.replaceAll(res, ` <u style="color:green">${word}</u>`)
  //   CKEDITOR.instances.spellcheck.editable().setData(test, { internal: true })
  //   // let texts = CKEDITOR.instances.spellcheck.editable().getData()
  //   console.log(text)
  // })

  //
  let e = CKEDITOR.instances.spellcheck.editable().getData()
  words.forEach((word) => {
    let res = new RegExp('(?:^|\\s)' + word, 'gi')
    let test = text.replaceAll(res, ` <u style="color:green">${word}</u>`)

    let splitted = text.split(' ')
    splitted.forEach((i) => {
      if (word == i) {
        let res = new RegExp('(?:^|\\s)' + word, 'gi')
        let test = text.replace(res, ` <u style="color:green">${word}</u>`)
        CKEDITOR.instances.spellcheck.editable().setData(test, (e) => {
          // console.log(e)
        })
      }
    })
  })
  console.log(e)
}
// const underline = (test) => {
//   // console.log(test)
//   // let text = CKEDITOR.instances.spellcheck.editable().getText()
//   // if (word) {
//   //   // console.log(text)
//   //   let replace = text.replaceAll(word, `<u style='color:green'>${word}</u>`)
//   //   CKEDITOR.instances.spellcheck.editable().setData(replace, () => {})
//   // }
// }
