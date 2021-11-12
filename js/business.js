$(function (){
	$('.tag-list .tag-li').click(function(){
    var num = $(this).index();  //index() 本元素的索引值  从0开始
    var that = $(this);
	var lii = ''
    if(num == 0){
		$('.pw').html('首页 - 公司业务 - 产业招商')
		$('#titles').html('产业招商')
		var cont = `<div class="tag-b-list">
						<div style="display:flex;">
							<a href="javascript:;" class="b-list-li" style="color:#cc99cc;">
								<img src="./image/business/编组 48.png" class="back-img">
								<p class="font-20 name">政策研究咨询</p>
							</a>
							<a href="javascript:;" class="b-list-li" style="color:#cc99cc;">
								<img src="./image/business/编组 43.png" class="back-img">
								<p class="font-20 name">招商落地服务</p>
							</a>
							<a href="javascript:;" class="b-list-li" style="color:#cc99cc;">
								<img src="./image/business/编组 45.png" class="back-img">
								<p class="font-20 name">项目发展跟进</p>
							</a>
							<a href="javascript:;" class="b-list-li" style="color:#cc99cc;">
								<img src="./image/business/编组 46.png" class="back-img">
								<p class="font-20 name">项目评估服务</p>
							</a>
						</div>
						<div style="display:flex;">
							<a href="javascript:;" class="b-list-li" style="color:#cc99cc;">
								<img src="./image/business/编组 42.png" class="back-img">
								<p class="font-20 name">招商活动承办</p>
							</a>
							<a href="javascript:;" class="b-list-li" style="color:#cc99cc;">
								<img src="./image/business/编组 47.png" class="back-img">
								<p class="font-20 name">产业平台搭建</p>
							</a>
							<a href="javascript:;" class="b-list-li" style="color:#cc99cc;">
								<img src="./image/business/编组 44.png" class="back-img">
								<p class="font-20 name">对外驻点招商</p>
							</a>
						</div>
					</div>`
	}else if(num == 1){
      $('.pw').html('首页 - 公司业务 - 企业服务')
	  $('#titles').html('企业服务')
	  for(var i = 1; i<3; i++) {
	  		  lii += '<div class="file-li"><img src="./image/home/cyzt2.png"></div>'
	  }
	  var cont = `<div class="tag-b-list">
	  				<div style="display:flex;">
	  					<a href="javascript:;" class="b-list-li" style="color:#b0b0de;">
	  						<img src="./image/business/企业服务/编组 48备份 2.png" class="back-img">
	  						<p class="font-20 name">企业设立服务</p>
	  					</a>
	  					<a href="javascript:;" class="b-list-li" style="color:#b0b0de;">
	  						<img src="./image/business/企业服务/编组 47备份 2.png" class="back-img">
	  						<p class="font-20 name">对澳专项服务</p>
	  					</a>
	  					<a href="javascript:;" class="b-list-li" style="color:#b0b0de;">
	  						<img src="./image/business/企业服务/编组 45备份 2.png" class="back-img">
	  						<p class="font-20 name">产业政策补贴申报服务</p>
	  					</a>
	  					<a href="javascript:;" class="b-list-li" style="color:#e7c7df;">
	  						<img src="./image/business/企业服务/编组 46备份 2.png" class="back-img">
	  						<p class="font-20 name">科技金融服务</p>
	  					</a>
	  				</div>
	  				<div style="display:flex;">
	  					<a href="javascript:;" class="b-list-li" style="color:#b0b0de;">
	  						<img src="./image/business/企业服务/编组 42备份 2.png" class="back-img">
	  						<p class="font-20 name">科技中介对接服务</p>
	  					</a>
	  					<a href="javascript:;" class="b-list-li" style="color:#b0b0de;">
	  						<img src="./image/business/企业服务/编组 43备份 2.png" class="back-img">
	  						<p class="font-20 name">产业资源对接服务</p>
	  					</a>
	  					<a href="javascript:;" class="b-list-li" style="color:#b0b0de;">
	  						<img src="./image/business/企业服务/编组 3.png" class="back-img">
	  						<p class="font-20 name">商务配套服务</p>
	  					</a>
	  				</div>
					<div class="font-20 font-blue">
						咨询方式
						<p class="font-12" style="padding-top:15px;">0756-2990750</p>
					</div>
	  			</div>`
    }else if(num == 2){
		var cont = `<div class="tag-b-list">
						<div style="display:flex;">
							<a href="javascript:;" class="b-list-li" style="color:#7ea0ff;">
								<img src="./image/business/企业孵化/编组 48.png" class="back-img">
								<p class="font-20 name">创业辅导服务</p>
							</a>
							<a href="javascript:;" class="b-list-li" style="color:#7ea0ff;">
								<img src="./image/business/企业孵化/编组 47.png" class="back-img">
								<p class="font-20 name">技术创新服务</p>
							</a>
							<a href="javascript:;" class="b-list-li" style="color:#7ea0ff;">
								<img src="./image/business/企业孵化/编组 45.png" class="back-img">
								<p class="font-20 name">投融资服务</p>
							</a>
						</div>
						<div style="display:flex;">
							<a href="javascript:;" class="b-list-li" style="color:#7ea0ff;">
								<img src="./image/business/企业孵化/编组 42.png" class="back-img">
								<p class="font-20 name">推广与对接服务</p>
							</a>
							<a href="javascript:;" class="b-list-li" style="color:#7ea0ff;">
								<img src="./image/business/企业孵化/编组 43.png" class="back-img">
								<p class="font-20 name">商务服务</p>
							</a>
						</div>
					</div>`
      $('.pw').html('首页 - 公司业务 - 企业孵化')
	  $('#titles').html('企业孵化')
    }else if(num == 3){
      $('.pw').html('首页 - 公司业务 - 人才服务')
	  $('#titles').html('人才服务')
	  for(var i = 0; i<1; i++) {
	  		  lii += '<div class="file-li"><img src="./image/home/cyzt2.png"></div>'
	  }
	  var cont = `<div class="tag-b-list">
	  				<div style="display:flex;">
	  					<a href="javascript:;" class="b-list-li" style="color:#7ea0ff;">
	  						<img src="./image/business/人才服务/编组 48备份 2.png" class="back-img">
	  						<p class="font-20 name">高层次人才服务</p>
	  					</a>
	  					<a href="javascript:;" class="b-list-li" style="color:#7ea0ff;">
	  						<img src="./image/business/人才服务/编组 47备份 2.png" class="back-img">
	  						<p class="font-20 name">政策申报辅导服务</p>
	  					</a>
	  					<a href="javascript:;" class="b-list-li" style="color:#7ea0ff;">
	  						<img src="./image/business/人才服务/编组 45备份 2.png" class="back-img">
	  						<p class="font-20 name">人才咨询服务</p>
	  					</a>
						<a href="javascript:;" class="b-list-li" style="color:#a1afd1;">
							<img src="./image/business/人才服务/编组 46备份 2.png" class="back-img">
							<p class="font-20 name">人才活动策划</p>
						</a>
	  				</div>
	  				<div style="display:flex;">
	  					<a href="javascript:;" class="b-list-li" style="color:#7ea0ff;">
	  						<img src="./image/business/人才服务/编组 42备份 2.png" class="back-img">
	  						<p class="font-20 name">劳务派遣服务</p>
	  					</a>
	  					<a href="javascript:;" class="b-list-li" style="color:#7ea0ff;">
	  						<img src="./image/business/人才服务/编组 43备份 2.png" class="back-img">
	  						<p class="font-20 name">人力资源外包</p>
	  					</a>
						<a href="javascript:;" class="b-list-li" style="color:#7ea0ff;">
							<img src="./image/business/人才服务/编组 3.png" class="back-img">
							<p class="font-20 name">培训服务</p>
						</a>
						<a href="javascript:;" class="b-list-li" style="color:#a1afd1;">
							<img src="./image/business/人才服务/编组 3备份 3.png" class="back-img">
							<p class="font-20 name">人力资源咨询服务</p>
						</a>
	  				</div>
					<div style="display:flex;">
						<a href="javascript:;" class="b-list-li" style="color:#7ea0ff;">
							<img src="./image/business/人才服务/编组 42备份 3.png" class="back-img">
							<p class="font-20 name">人才招聘服务</p>
						</a>
						<a href="javascript:;" class="b-list-li" style="color:#7ea0ff;">
							<img src="./image/business/人才服务/编组 43备份 3.png" class="back-img">
							<p class="font-20 name">特色活动</p>
						</a>
					</div>
	  			</div>`
    }else if(num == 4){
		$('.pw').html('首页 - 公司业务 - 园区运营')
		$('#titles').html('园区运营')
		var cont = `<div class="tag-b-list">
						<div style="display:flex;">
							<a href="javascript:;" class="b-list-li" style="color:#79c0ba;">
								<img src="./image/business/园区运营/编组 48备份.png" class="back-img">
								<p class="font-20 name">办公场地租赁</p>
							</a>
							<a href="javascript:;" class="b-list-li" style="color:#79c0ba;">
								<img src="./image/business/园区运营/编组 47备份.png" class="back-img">
								<p class="font-20 name">园区空间资源对接</p>
							</a>
							<a href="javascript:;" class="b-list-li" style="color:#79c0ba;">
								<img src="./image/business/园区运营/编组 45备份.png" class="back-img">
								<p class="font-20 name">园区场地物业管理</p>
							</a>
							<a href="javascript:;" class="b-list-li" style="color:#789078;">
								<img src="./image/business/园区运营/编组 46备份.png" class="back-img">
								<p class="font-20 name">园区工程安全管理</p>
							</a>
						</div>
						<div style="display:flex;">
							<a href="javascript:;" class="b-list-li" style="color:#79c0ba;">
								<img src="./image/business/园区运营/编组 42备份.png" class="back-img">
								<p class="font-20 name">楼宇合作拓展</p>
							</a>
							<a href="javascript:;" class="b-list-li" style="color:#79c0ba;">
								<img src="./image/business/园区运营/编组 43备份.png" class="back-img">
								<p class="font-20 name">展厅运营管理</p>
							</a>
							<a href="javascript:;" class="b-list-li" style="color:#79c0ba;">
								<img src="./image/business/园区运营/编组 44备份 2.png" class="back-img">
								<p class="font-20 name">展厅服务输出</p>
							</a>
							<a href="javascript:;" class="b-list-li" style="color:#789078;">
								<img src="./image/business/园区运营/编组 44备份 3.png" class="back-img">
								<p class="font-20 name">项目空间运营</p>
							</a>
						</div>
					</div>`
    }
	$('.file-list').html(lii)
	$('#tag-b-list').html(cont)
	if (num == 2) {
		$('.content-img').attr('src','./image/business/1顶部图.png')
	} else {
		$('.content-img').attr('src','./image/banner5@1x.png')
	}
    $('.nav-hover-list .nav-lis .nav-li').each(function(i){
      if(i == num){
        $(this).addClass('nav_color')
      }else{
        $(this).removeClass('nav_color')
      }
    })
	
    $('.tag-list .tag-li').each(function(index){
      if(index == num){
        $(this).addClass('hovers')
		$(this).find('.t-logo').addClass('logohide')
		$(this).find('.tag-logo').removeClass('logohide')
      }else{
        $(this).removeClass('hovers')
		$(this).find('.t-logo').removeClass('logohide')
		$(this).find('.tag-logo').addClass('logohide')
      }
    })
  })
})