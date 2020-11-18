let words = [
  'word1',
  'word2',
  'word3',
  'word4',
  'word5',
  'word6',
  'word7',
  'word8',
  'word9',
  'word10',
]
CKEDITOR.replace('spellcheck')
CKEDITOR.on('instanceReady', (e) => {
  e.editor.on('key', (e) => {
    if (e.data.keyCode == 32 || e.data.keyCode == 13) {
      let text = e.editor.editable().getText()
      spellCheck(text)
      //for update caret position after set
      let range = e.editor.createRange()
      range.moveToElementEditablePosition(e.editor.editable(), true)
      e.editor.getSelection().selectRanges([range])
      //for update caret position after set
    }
  })
})
const spellCheck = (text) => {
  w = words.join('|')
  let reg = new RegExp('(?:^|\\s)' + `${w}`, 'gi')
  text = text.replace(reg, (word) => ` <u style="color:green">${word}</u>`)
  CKEDITOR.instances.spellcheck.editable().setData(text, () => {})
}
