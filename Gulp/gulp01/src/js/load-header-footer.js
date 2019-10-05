
if ($('#header .navigation').length && $('#footer .main-footer').length) {
  // 后台已经加载了
  activeNavbar()
} else {
  // 使用jQuery加载
  $('#header').load('header.htm', null, function (res, status, xhr) {

    setTimeout(() => {
      console.log(` 加载HTML文件完成: `, xhr, status)
    }, 200);
    activeNavbar()
  })
  $('#footer').load('footer.htm')
}


function activeNavbar() {
  $(function () {
    var currenPageClass = $('#header').data('current-page')
    // $('#header').css('display', 'block')
    $('#header .navigation .' + currenPageClass).addClass('current')
  })
}
