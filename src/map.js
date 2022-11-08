// 高德导航 创建自定义窗体
function createInfoWindow(title, content, callback) {
  var info = document.createElement('div')
  info.className = 'custom-info input-card content-window-card'
 
  // 可以通过下面的方式修改自定义窗体的宽高
  info.style.width = '250px'
  // 定义顶部标题
  var top = document.createElement('div')
  // var titleD = document.createElement("div");
  var closeX = document.createElement('img')
  top.className = 'info-top'
 
  closeX.src = require('@/assets/close.png')
  closeX.onclick = callback
 
  // top.appendChild(titleD);
  top.innerHTML = title
  top.appendChild(closeX)
  info.appendChild(top)
 
  // 定义中部内容
  var middle = document.createElement('div')
  middle.className = 'info-middle'
  middle.style.backgroundColor = 'white'
  middle.innerHTML = content
  info.appendChild(middle)
 
  // 定义底部内容
  var bottom = document.createElement('div')
  bottom.className = 'info-bottom'
  bottom.style.position = 'relative'
  bottom.style.top = '0px'
  bottom.style.margin = '0 auto'
  info.appendChild(bottom)
  return info
}
 
export default {
  createInfoWindow
}