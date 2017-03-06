(function(module) {
try {
  module = angular.module('myApp');
} catch (e) {
  module = angular.module('myApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('list/content.html',
    '<ion-view title="\'Facts3\'">\n' +
    '	<ion-content class="has-header">\n' +
    '		<ul>\n' +
    '			<li class="p5 b1" ng-repeat="item in vm.items"><span>时间：{{item.tranTime | formatTimestar}}</span>&nbsp;&nbsp;&nbsp;&nbsp;充值{{item.tranAmt}}元\n' +
    '			<p>充值流水号：{{item.applicationNo}}</p>\n' +
    '			</li>\n' +
    '		</ul>\n' +
    '		<ion-infinite-scroll ng-if="vm.completeFlag" on-infinite="vm.loadMore()" distance="1%"></ion-infinite-scroll>\n' +
    '	</ion-content>\n' +
    '</ion-view>');
}]);
})();

(function(module) {
try {
  module = angular.module('myApp');
} catch (e) {
  module = angular.module('myApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('list/home.html',
    '<ion-view title="\'Facts\'">\n' +
    '	<ion-content class="has-header has-footer">\n' +
    '		<div id="slide">\n' +
    '			<ion-slide-box does-continue="true" auto-play="true" slide-interval="2000" show-pager="true" on-slide-changed="slideHasChanged(index)"> \n' +
    '				  <ion-slide>\n' +
    '				   		 <a href="#"><img src="img/images/slide/577b9134N9e918dea.jpg!q70.jpg"></a>\n' +
    '				  </ion-slide>\n' +
    '				  <ion-slide>\n' +
    '				   		 <a href="#"><img src="img/images/slide/577c81dcN8825b6da.jpg"></a>\n' +
    '				  </ion-slide>\n' +
    '				  <ion-slide>\n' +
    '				   		 <a href="#"><img src="img/images/slide/56e6709cN4f92d79f.jpg"></a>\n' +
    '				  </ion-slide>\n' +
    '				  <ion-slide>\n' +
    '				   		 <a href="#"><img src="img/images/slide/577cc3aeNc705a02a.jpg!q70.jpg"></a>\n' +
    '				  </ion-slide>\n' +
    '				  <ion-slide>\n' +
    '				   		 <a href="#"><img src="img/images/slide/577b5b02N447e474e.jpg!q70.jpg"></a>\n' +
    '				  </ion-slide>\n' +
    '				  <ion-slide>\n' +
    '				   		 <a href="#"><img src="img/images/slide/577a3004Ne135538e.jpg!q70.jpg"></a>\n' +
    '				  </ion-slide>\n' +
    '			</ion-slide-box>\n' +
    '		</div>\n' +
    '		<div ng-click="yanzheng()">验证</div>\n' +
    '	</ion-content>\n' +
    '</ion-view>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('myApp');
} catch (e) {
  module = angular.module('myApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('list/index.html',
    '<ion-view>\n' +
    '	<ion-content class="has-header has-footer">\n' +
    '		<div id="slide">\n' +
    '			<ion-slide-box does-continue="true" auto-play="true" slide-interval="2000" show-pager="true" on-slide-changed="slideHasChanged(index)"> \n' +
    '				  <ion-slide>\n' +
    '				   		 <a href="#"><img src="img/images/slide/577b9134N9e918dea.jpg!q70.jpg"></a>\n' +
    '				  </ion-slide>\n' +
    '				  <ion-slide>\n' +
    '				   		 <a href="#"><img src="img/images/slide/577c81dcN8825b6da.jpg"></a>\n' +
    '				  </ion-slide>\n' +
    '				  <ion-slide>\n' +
    '				   		 <a href="#"><img src="img/images/slide/56e6709cN4f92d79f.jpg"></a>\n' +
    '				  </ion-slide>\n' +
    '				  <ion-slide>\n' +
    '				   		 <a href="#"><img src="img/images/slide/577cc3aeNc705a02a.jpg!q70.jpg"></a>\n' +
    '				  </ion-slide>\n' +
    '				  <ion-slide>\n' +
    '				   		 <a href="#"><img src="img/images/slide/577b5b02N447e474e.jpg!q70.jpg"></a>\n' +
    '				  </ion-slide>\n' +
    '				  <ion-slide>\n' +
    '				   		 <a href="#"><img src="img/images/slide/577a3004Ne135538e.jpg!q70.jpg"></a>\n' +
    '				  </ion-slide>\n' +
    '			</ion-slide-box>\n' +
    '		</div>\n' +
    '		<div ng-click="yanzheng()">\n' +
    '			<p class="bar-balanced">验证</p>\n' +
    '		</div>\n' +
    '		<div>\n' +
    '			<ul id="box" class="box">\n' +
    '				<li ng-click="vm.content();">\n' +
    '					<a>\n' +
    '					   <button></button>\n' +
    '					   <span>充值中心</span>\n' +
    '				    </a>\n' +
    '				</li>\n' +
    '				<li ng-click="vm.phonepag()">\n' +
    '					<a>\n' +
    '					   <button></button>\n' +
    '					   <span>移动商城</span>\n' +
    '				    </a>\n' +
    '				</li>\n' +
    '				<li ng-click="vm.jingdong()">\n' +
    '					<a>\n' +
    '					   <button></button>\n' +
    '					   <span>礼品超市</span>\n' +
    '				    </a>\n' +
    '				</li>\n' +
    '				<li>\n' +
    '					<a>\n' +
    '					   <button></button>\n' +
    '					   <span>卡片管理</span>\n' +
    '				    </a>\n' +
    '				</li>\n' +
    '			</ul>\n' +
    '		</div>\n' +
    '	</ion-content>\n' +
    '</ion-view>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('myApp');
} catch (e) {
  module = angular.module('myApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('list/jingdong.html',
    '\n' +
    '<ion-view>\n' +
    '<ion-content class="has-header">\n' +
    '	<div class="new-header">\n' +
    '	<a href="javascript:pageBack();" class="new-a-back"><span>返回</span></a>\n' +
    '	<h2>用户中心</h2>\n' +
    '	<a href="javascript:void(0)" id="btnJdkey" class="new-a-jd"><span>京东键</span></a>\n' +
    '</div>\n' +
    '\n' +
    '<div class="new-jd-tab" style="display:none" id="jdkey">\n' +
    '	<div class="new-tbl-type">\n' +
    '		<a href="#" class="new-tbl-cell"><span class="icon">首页</span><p style="color:#6e6e6e">首页</p></a>\n' +
    '		<a href="#" class="new-tbl-cell"><span class="icon2">分类搜索</span><p style="color:#6e6e6e">分类搜索</p></a>\n' +
    '		<a href="javascript:void(0)" id="html5_cart" class="new-tbl-cell"><span class="icon3">购物车</span><p style="color:#6e6e6e">购物车</p></a>\n' +
    '		<a href="#" class="new-tbl-cell"><span class="icon4 on">我的京东</span><p style="color:#6e6e6e" class="on">我的京东</p></a>\n' +
    '	</div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="user-bg"></div>\n' +
    '\n' +
    '<div class="user-wrapper">\n' +
    '	<div class="div-user">\n' +
    '		<div class="user">\n' +
    '			<img src="images/defaul.png" class="user-avatar">\n' +
    '			<div class="user-info">\n' +
    '				<span class="user-name">用户名</span>   \n' +
    '				<span class="user-level">银牌用户</span>   \n' +
    '			</div>\n' +
    '			<a href="#"><span class="msg">消息</span></a>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="shortcut-navs">\n' +
    '	<ul class="shortcut-nav">\n' +
    '		<li><a class="link link1" href="#">待付款</a></li>\n' +
    '		<li><a class="link link2" href="#">待收货</a></li>\n' +
    '		<li><a class="link link3" href="#">全部订单</a></li>\n' +
    '		<li><a class="link link5" href="#">我的资产</a></li>\n' +
    '	</ul>\n' +
    '	<ul class="shortcut-nav">\n' +
    '		<li><a class="link link6" href="#">帐户中心</a></li>\n' +
    '		<li><a class="link link7" href="#">客户服务</a></li>\n' +
    '		<li><a class="link link8" href="#">我的预约</a></li>\n' +
    '		<li></li>\n' +
    '	</ul>\n' +
    '</div>\n' +
    '\n' +
    '<ul class="tab">\n' +
    '    <li><a class="item current" id="my_focus">我的关注</a></li>\n' +
    '    <li><a class="item" id="my_favorite">店铺收藏</a></li>\n' +
    '    <li><a class="item" id="my_history">浏览记录</a></li>\n' +
    '</ul>\n' +
    '<ul class="tab-scroller">\n' +
    '	<li class="my_focus" style="display:list-item">\n' +
    '		<div style="text-align:center;margin:40px;font-size:13px">那么多宝贝，快去看看吧~</div>\n' +
    '	</li>\n' +
    '	<li class="my_favorite" style="display:none">\n' +
    '		<div style="text-align:center;margin:40px;font-size:13px">2</div>\n' +
    '	</li>            \n' +
    '	<li class="my_history" style="display:none">\n' +
    '		<div style="text-align:center;margin:40px;font-size:13px">3</div>	\n' +
    '	</li>\n' +
    '</ul>\n' +
    '\n' +
    '<div class="login-area" id="footer">\n' +
    '	<div class="version"><a href="http://m.jd.com/index.html?v=w&sid=0868c9ea80cfe88be664cf44b23445ca">标准版</a><a href="javascript:void(0)" class="on">触屏版</a><a href="http://www.jd.com/">电脑版</a></div>\n' +
    '	<div class="copyright">© m.jd.com </div>\n' +
    '</div>\n' +
    '</ion-content>\n' +
    '</ion-view>\n' +
    '\n' +
    '\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('myApp');
} catch (e) {
  module = angular.module('myApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('list/list.html',
    '<ion-view>\n' +
    '	<ion-content class="has-header">\n' +
    '		<div>\n' +
    '			<img width="100%" src="img/3.pic.jpg">\n' +
    '		</div>\n' +
    '	</ion-content>\n' +
    '</ion-view>');
}]);
})();

(function(module) {
try {
  module = angular.module('myApp');
} catch (e) {
  module = angular.module('myApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('list/mycenter.html',
    '<ion-view class="has-header has-footer">\n' +
    '	 <ion-content class="has-header">\n' +
    '\n' +
    '        <!--教程例子    有疑问可加qq群517568588    -->\n' +
    '\n' +
    '        <!--返回的时间选择格式： 2015-10-10 17:30-->\n' +
    '\n' +
    '        <!--一般加载方式 title设置控件名称  yearstart设置开始年份 yearend设置结束年份   datetime默认时间《不给默认选中当前时间》  time-picker-result获取时间选择结果《》-->\n' +
    '        <time-picker title="一般加载方式" yearstart="1990" yearend="2017" time-picker-result="data.result"></time-picker>\n' +
    '\n' +
    '        <br>\n' +
    '\n' +
    '        <!--一般加载方式  隐藏指定选择栏  这里隐藏时间选择栏  可选 ：hideyear(隐藏年份选择栏) ,hidemonth(隐藏月份选择栏),hidedate(隐藏日期选择栏), hidetime(隐藏时间选择栏)-->\n' +
    '        <!-- 当隐藏掉指定的选择栏时 默认在界面显示的选择结果也不会显示该部分，但控制器中接收选择结果的变量 接收的是完整的时间日期,隐藏掉的部分返回的是默认值或设置的初始值 -->\n' +
    '        <time-picker title="请选择日期" hidetime="true" yearstart="1990" yearend="2017" time-picker-result="result"></time-picker>\n' +
    '\n' +
    '        <br>\n' +
    '\n' +
    '        <!--指定时间的加载方式  datetime指定一个默认的时间-->\n' +
    '\n' +
    '        <time-picker datetime="2015-10-10" title="指定时间加载方式" yearstart="1990" yearend="2017" time-picker-result="result"></time-picker>\n' +
    '\n' +
    '        <br>\n' +
    '<div class="row">\n' +
    '	<div class="col-50">\n' +
    '		<time-picker load-date-time="serverData.loadLazyTime" loadlazy="true" yearstart="1990" yearend="2017" title="请选择开始日期" time-picker-result="result"></time-picker>\n' +
    '	</div>\n' +
    '	<div class="col-50">\n' +
    '		    <time-picker load-date-time="serverData.loadLazyTime2" loadlazy="true" yearstart="1990" yearend="2017" title="请选择结束日期" time-picker-result="result"></time-picker>\n' +
    '	</div>\n' +
    '</div>\n' +
    '        <!--延迟加载时间例子-->\n' +
    '        \n' +
    '                         <!--延迟加载时间例子-->\n' +
    '    \n' +
    '<div style="width:100%;border:solid 1px;height:100px;overflow: hidden;white-space:nowrap;padding:10px 20px" id="dash_scroll_container" scrollleft="0">\n' +
    '  <div ng-repeat="d in datas" style="margin-right:20px;border:solid 1px #FFC900;height:100%;width:100px;display:inline-block;text-align:center;line-height:40px">\n' +
    '    {{d}}\n' +
    '  </div>\n' +
    '</div>\n' +
    '<div class="padding" id="contents" style="position:absolute" scrollleft="0">\n' +
    '<img src="img/images/slide/577c81dcN8825b6da.jpg">\n' +
    '</div>\n' +
    '    </ion-content>\n' +
    '</ion-view>');
}]);
})();

(function(module) {
try {
  module = angular.module('myApp');
} catch (e) {
  module = angular.module('myApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('list/mycounrt.html',
    '\n' +
    '      <ion-view>\n' +
    '        <ion-content class="has-header has-footer" padding="true">\n' +
    '          <h3>Create hybrid mobile apps with the web technologies you love.</h3>\n' +
    '          <p>Free and open source, Ionic offers a library of mobile-optimized HTML, CSS and JS components for building highly interactive apps.</p>\n' +
    '          <p>Built with Sass and optimized for AngularJS.</p>\n' +
    '          <p>\n' +
    '            <a class="button icon icon-right ion-chevron-right" ui-sref="index">Tabs Nav Stack</a>\n' +
    '          </p>\n' +
    '        </ion-content>\n' +
    '      </ion-view>');
}]);
})();

(function(module) {
try {
  module = angular.module('myApp');
} catch (e) {
  module = angular.module('myApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('list/phonepag.html',
    '<ion-view>\n' +
    '	<ion-content class="has-header">\n' +
    '		<div class="mgt-52 bg_white pos-r">\n' +
    '	<div class="section js_show_tab1">\n' +
    '    	<ul class="tabstt clearfix js_tab_caption1">\n' +
    '           <li class="on fs-9" onclick="location.href=\'rechargecredit.html\'"> 银行卡充值</li>\n' +
    '            <li class="fs-9" onclick="location.href=\'rechargecard.html\'">充值卡充值</li>\n' +
    '            <li id="recharge_jf" class="fs-9" onclick="location.href=\'rechargejf.html\'">积分充值</li>\n' +
    '        </ul>\n' +
    '    </div>\n' +
    '    <div class="tabscont js_tabscont" id="page-content-ebank">\n' +
    '    	<div class="box on pd-10 mgt-5">\n' +
    '        	<img src="/i/mobile/pub-ui/images/yhkcz-img.jpg" class="show-img" id="show-img">\n' +
    '        	<div class="page-content" id="page-content-card">\n' +
    '        		<div id="phonenum_div" class="stc-recharge-phone-card">\n' +
    '	            	<div class="stc-recharge-input stc-common-inline">\n' +
    '	            		<input class="stc-common-inline input-gray" name="phonenum" id="phonenum" maxlength="11" type="text" defaultvalue="请输入11位移动手机号码">\n' +
    '	            		<div id="phoneBelong" class="stc-recharge-belong"></div>\n' +
    '	            		<span class="icon-person dialogBtn" data-rel="width=300&amp;height=300&amp;id=dialog1"></span>\n' +
    '	            	</div>\n' +
    '					<div class="pos-a phone-num-tips pd-10 dis-hide js-phone-tips b-size" id="recentbook">\n' +
    '\n' +
    '					</div>\n' +
    '				<div class="stc-recharge-down-phone" style="display: none"><div class="stc-recharge-inline stc-recharge-down-phone-num">&nbsp;</div><div class="stc-recharge-inline stc-recharge-down-phone-prompt"><div class="stc-recharge-inline stc-recharge-down-phone-icon"></div><div class="stc-recharge-inline">请仔细核对</div></div></div></div>\n' +
    '	        </div>\n' +
    '	        <p id="stc-recharge-error" class="fs-7 c-666 pdl-5">请仔细核对充值号码，充错号将无法退款</p>\n' +
    '	        <div class="stc-recharge-amount-area" name="amountrule" id="amountrule" value="100">\n' +
    '				<div class="stc-common-inline" id="stc-common-inline1">30元</div>\n' +
    '				<div class="stc-common-inline">50元</div>\n' +
    '				<div class="stc-common-inline money-on">100元</div>\n' +
    '				<!-- <div class="stc-common-inline" id=\'stc-common-inline3\'>200元</div> -->\n' +
    '				<div class="stc-common-inline">300元</div>\n' +
    '				<!-- <div class="stc-common-inline" id=\'stc-common-inline4\'>400元</div> -->\n' +
    '				<div class="stc-common-inline">500元</div>\n' +
    '				<div class="stc-common-inline" id="stc-common-inline2" style="overflow: hidden">\n' +
    '					<input type="tel" id="inputMoney" name="inputMoney" maxlength="4" defaultvalue="10~5000整数" class="input-gray">\n' +
    '				</div>\n' +
    '			</div>\n' +
    '			<div id="paysale" name="paysale" class="module-s1 mgt-10">\n' +
    '	            	<h3 class="title-s1" style="display: none">优惠活动</h3>\n' +
    '	            <ul name="payrule" id="payrule" class="list-04 js_radio">\n' +
    '	\n' +
    '	            </ul>\n' +
    '	        </div>\n' +
    '	        <p id="payruleDes-div" class="mgt-20"><i class="icon-gift" style="display: none"></i><span name="payruleDes" id="payruleDes"></span></p>\n' +
    '	        <p class="mgt-20 fs-8">实际到账：<b id="reality_amount" class="fs-4">100.00元</b></p>\n' +
    '	        <p class="mgt-10 fs-8">支付金额：<b class="fc-rose fs-4" id="pay_amount">100.00元</b></p>\n' +
    '	        <p class="mgt-15"><button class="btn-blue" id="stc-recharge-sub">立即充值</button></p>\n' +
    '	    		<p id="prompt-msg" style="text-align:center;color:red;height:30px"></p>\n' +
    '        	</div>\n' +
    '    	</div>\n' +
    '    </div>\n' +
    '	</ion-content>\n' +
    '</ion-view>');
}]);
})();

(function(module) {
try {
  module = angular.module('myApp');
} catch (e) {
  module = angular.module('myApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('module/footer.html',
    '<ion-footer-bar align-title="left" class="bar-assertive" style="padding: 0" ng-if="vm.footer">\n' +
    ' <div class="tabs tabs-icon-top" id="tabs">\n' +
    '    <a class="tab-item colorB active" ng-click="route(\'index\')" statename="index">\n' +
    '        <i class="icon home"></i>\n' +
    '        首页\n' +
    '    </a>\n' +
    '    <a class="tab-item colorB" ng-click="route(\'list\')" statename="list">\n' +
    '        <i class="icon kehu"></i>\n' +
    '        分类\n' +
    '    </a>\n' +
    '    <a class="tab-item colorB" ng-click="route(\'mycounrt\')" statename="mycounrt">\n' +
    '        <i class="icon news"></i>\n' +
    '        购物车\n' +
    '    </a>\n' +
    '    <a class="tab-item colorB" ng-click="route(\'mycenter\')" statename="mycenter">\n' +
    '        <i class="icon gi user"></i>\n' +
    '        个人中心\n' +
    '    </a>\n' +
    '</div>\n' +
    '</ion-footer-bar>');
}]);
})();

(function(module) {
try {
  module = angular.module('myApp');
} catch (e) {
  module = angular.module('myApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('module/header.html',
    '<ion-header-bar align-title="center" class="bar-stable" ng-if="vm.header">\n' +
    '  <a class="gobank" ng-click="vm.goback()"><i class="back" ng-if="vm.gobackShow"></i></a>\n' +
    '  <h1 class="title">{{vm.page}}</h1>\n' +
    ' <!-- <a class="gobank" style="float:right"><i class="back"></i></a>-->\n' +
    '</ion-header-bar>');
}]);
})();

(function(module) {
try {
  module = angular.module('myApp');
} catch (e) {
  module = angular.module('myApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('module/layout.html',
    '<app-header></app-header>\n' +
    '<ion-nav-view animation="slide-left-right">\n' +
    ' 	<!--<ion-content >\n' +
    '	  <div ui-view></div>\n' +
    '	</ion-content>-->\n' +
    '</ion-nav-view>\n' +
    '<app-footer></app-footer>\n' +
    '');
}]);
})();
