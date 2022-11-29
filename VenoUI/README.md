# VenoUI插件
将VenoUI文档加入自己的理解备注
https://venoui.fdota.com/components/icon


var arr = {
  '拖拽 Drag': Drag
}

function Drag(){
  console.log(123456)
}

document.getElementsByClassName('ve-list--nav')[0].addEventListener('click',function(){
  document.querySelectorAll('h1').forEach(e => {
    arr[e.innerText] ? arr[e.innerText]() : ''
  })
})