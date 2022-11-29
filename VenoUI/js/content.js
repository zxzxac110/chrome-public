console.log('开始执行')
// 生成代码
function genTheadCode (arr) {
  return `<thead><tr>
    ${arr.reduce((a, b) => a + `<th class="ve-table-cell text-start ve-table-th">
        <div class="ve-table-cell__overlay">
        </div>
        <div class="ve-table-th__wrapper">${b}</div>
      </th>`, '')}
  </tr></thead>`
}
// 生成代码
function genTbodyCode (length, arr) {
  var tbody = '<tbody>'
  arr.forEach(e => {
    var colspan = length - e.length + 1
    tbody += `<tr>
    ${e.reduce((a, b, index) => a + ` 
      <td class="ve-table-cell text-start ve-table-td ${colspan === length ? 'text-green body1' : ''}" colspan="${e.length - 1 === index ? colspan : 1}">
        <div class="ve-table-cell__overlay"></div>${b}
      </td>`, '')
      }
    </tr>`
  })
  return tbody + '</tbody>'
}
// 渲染代码
function renderer (box, thead, tbody) {
  var table = document.createElement("DIV")
  table.innerHTML = '<div class="pb-3 pt-10 ve-table ve-table--scroll-position-start"><div class="ve-table__wrapper ve-theme--light ve-table__wrapper--variant-contained ve-table__wrapper--size-medium ve-table__wrapper--density-medium ve-table__wrapper--border ve-table__wrapper--shape-rounded"><table>'
    + genTheadCode(thead)
    + genTbodyCode(thead.length, tbody)
    + '</table></div></div>'
  if (box.id) {
    box.replaceChild(table, box.firstElementChild)
  } else {
    table.id = 'myRemark'
    box.appendChild(table)
  }
}
// 删除备注
function del () {
  if (document.getElementById('myRemark')) {
    document.querySelector('.ve-container').removeChild(document.getElementById('myRemark'))
  }
}
// 监听事件
setTimeout(() => {
  console.log('监听成功')
  document.getElementsByClassName('ve-list--nav')[0].addEventListener('click', function (e) {
    var txt = e.target.innerText
    console.log(txt)
    arr[txt] ? arr[txt]() : del()
  })
}, 3000)
// 参数
var arr = {
  '拖拽 Drag': Drag,
  '分页 Pagination': Pagination
}
// 参数 方法
function Drag () {
  renderer(
    document.getElementById('myRemark') || document.querySelector('.ve-container'),
    ['名称', '说明', '可选参数', '示例'],
    [
      ['插槽'],
      ['item', '渲染主体部分', 'on,index,item', 'template #item="{ on,index,item }"']
    ]
  )
}

function Pagination() {
  renderer(
    document.getElementById('myRemark') || document.querySelector('.ve-container'),
    ['名称', '说明', '可选参数', '示例'],
    [
      ['total-visible', '最多显示多少条目，超多多少条目显示省略', 'number', ':total-visible="7"']
    ]
  )
}


