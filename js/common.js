var $backToTopEle = $('<a href="javascript:void(0)" class="Hui-iconfont toTop" title="返回顶部" alt="返回顶部" style="display:none">^^</a>').appendTo($("body")).click(function () {
    $("html, body").animate({scrollTop: 0}, 120);
});
var backToTopFun = function () {
    var st = $(document).scrollTop(), winh = $(window).height();
    (st > 0) ? $backToTopEle.show() : $backToTopEle.hide();
    /*IE6下的定位*/
    if (!window.XMLHttpRequest) {
        $backToTopEle.css("top", st + winh - 166);
    }
};
$(function () {
    $(window).on("scroll", backToTopFun);
    backToTopFun();
});

function getParam(paramName) {
	paramValue = "", isFound = !1;
	if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
		arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0;
		while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++
	}
	return paramValue == "" && (paramValue = null), paramValue
}
