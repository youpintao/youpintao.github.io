 //�����̺���
(function(d){
	//1.��ȡĿ���ַ����ƴ���п��ܵ��������
	url = getGoUrl();
	//2.�ƽ�������
	sendEcode();
	//3.���õ�ǰҳ����⣬������������΢����Ҫ�õ�
  setTitle();
	//�����΢�ţ��򰴶��Ƶ�Ҫ��չʾ
	if(app=='weixin'|| app=='qq'){
		setWxImg();
	}
	
	//�򿪷�ʽ��
	//4.1 selfview --ʹ���Զ���ҳ��
	if(appMethod=="selfview"){
		return;
	}
	//4.2 image --ʹ��ͼƬչʾ
	if(appMethod=="image"){
		imgShow();
		return;
	}
	//4.3 iframe --ʹ���м�ҳiframe��ǶĿ��ҳ��
	if(appMethod=="iframe"){
		makeIframe(url);
		return;
	}
	//4.4 callclient>0 --ʹ��iframe������ĳ��app
	if(appMethod=="callclient" && methodString !=0){
		callClient();
		return;
	}
	//4.5 replace/callclient=0 --ֱ�Ӵ�
 	setTimeout(function(){
	window.location.replace(url);
	//alert("go to:"+url);
  },200);
})(document);

 //1.ƴװĿ���ַ���Ѷ̵�ַ��Ĳ���ƴ��
function getGoUrl(){
//	var strRedirect ;//t=url;
    var strRedirect = url;
    var append2;
	//�Ƿ���ê��
	var anchorIndex = url.indexOf("#");
	if(anchorIndex>0){
        //��ê���url�ֳ�������
        strRedirect = url.substring(0,anchorIndex);
        append2 = url.substring(anchorIndex);
    }else{
        strRedirect = url;
        append2 = '';
    }
//    alert(strRedirect)
	//ɨ��ʧ��
	if(status!='true'){
			strRedirect = invalidUrl;
	}
	//ƴ���������
	var params =  location.search;
	if(params.indexOf("?")!=-1){
		if(strRedirect.indexOf("?")>=0){
			strRedirect = strRedirect+params.replace("?","&");
		}else{
			strRedirect=strRedirect+params;
		}
	}
	//��APP��Ϣ��ԴҲ����
	if(strRedirect.indexOf("?")>=0){
		strRedirect= strRedirect+'&app='+app;
	}else{
		strRedirect= strRedirect+'?app='+app;
	}
//	return strRedirect;
return strRedirect + append2;
}
//2.�ƽ�������
function sendEcode(){
	if(shortName){
    	var logUrl = '//gm.mmstat.com/'+ecode+'?logtype=2&cache='+new Date().getTime();
		var img = new Image();
		img.src = logUrl + '&id='+shortName+'&biz_code='+bizCode+'&app='+app+'&status='+status;
	}
}
//3�����õ�ǰҳ�����
function setTitle(){
	var title = url.match(/\bxTitle=([^&$]+)/);
	title = title ? title[1] : '';
    title = decodeURIComponent(title);
    if(title){
        document.title = title;
        sendMsg("wxtitle:"+title);
    }
}
//����΢�ŷ����LogoͼƬ,ͼƬ��С����350*350,body����ĵ�һ��ͼƬ
function setWxImg(){
    var image = url.match(/\bxImage=([^&$]+)/);
    image = image ? image[1] : '';
    image = decodeURIComponent(image);
    if(image){
			var imgDiv = document.createElement('div');
			imgDiv.style.display="none";
			imgDiv.id="wx_pic";
			imgDiv.innerHTML="<img src='"+image+"' />";
			document.body.appendChild(imgDiv); 
			//���͸��ⲿiframe��Ϣ����������Ѷ�Ʒ������������������ø�ҳ������
	    sendMsg("wxpic:"+image);
    }
}
//ʹ���ⲿ����IFRAME��������Ϣ��֪tile�ͷ���ͼƬlogo
function sendMsg(message){
	if (typeof window.postMessage != 'undefined') {// ���������Ƿ�֧��postMessage	 
		window.parent.postMessage(message, '*');//ע���򸸴��ڷ�����Ϣ���������ҳ���iframe����Ϣ����Ҫָ���ĸ�iframe.contentWindow.postMessage
	}	
}
//4.2 image --ʹ��ͼƬչʾ
function imgShow(){
	var body = document.body;
	if(methodString=="" || methodString.indexOf(",")<=0){
		methodString = '//gtms01.alicdn.com/tps/i1/TB1lcdUIFXXXXc6XpXXv8wV0FXX-640-390.jpg,//gtms02.alicdn.com/tps/i2/TB1OkV4IFXXXXa_XXXXPF7W0FXX-640-421.png';
	}
	var imgArr =  methodString.split(",");
	//QQ
	if(app=='qq' && imgArr.length==4){
		if(os=='iphone' || os=='ipad' ){
			body.style.backgroundImage = 'url('+imgArr[2]+')';
		}else{
			body.style.backgroundImage = 'url('+imgArr[3]+')';
		}		
	}else{
		if(os=='iphone' || os=='ipad' ){
			body.style.backgroundImage = 'url('+imgArr[0]+')';
		}else{
			body.style.backgroundImage = 'url('+imgArr[1]+')';
		}
	}
}
 ////4.4 callclient>0 --ʹ��iframe������ĳ��app��˫11���ع��¸ĳ�ǰ�˵Ŀ�ʹ��gotoPage
 //1���Ա�����taobao://��
 //2��֧��������alipays://platformapi/startapp?appId=20000067&url=��,20000067 ����Ǯ���ڲ�Ӧ�õ�ID ��by ����
 //3����è����tmall://page.tm/webview?webURLString=�� by ����
 //4���Ա���Ӱ����tbmovie://taobao.com/h5jump?url=����by ��ү
function callClient(){
	var schame = '';
	var encode = false;
	if(methodString == 1){
		schame = 'taobao://';
	}
	if(methodString==2 ){
		schame = 'alipays://platformapi/startapp?appId=20000067&url=';
		encode =true;
	}
	if(methodString==3){
		schame = "tmall://page.tm/webview?webURLString=";
		encode =true;
	}
	if(methodString==4){
		schame = 'tbmovie://taobao.com/h5jump?url=';
		encode =true;
	}
	//����ʧ�ܣ�����ͣ�������H5ҳ��
	makeIframe(url);
	//����ͻ��ˣ���һ��iframe������
	if(schame !=''){
		var schameUrl = url.replace('http://',"");
		schameUrl = schameUrl.replace('https://',"");
		if(encode == true){
			schameUrl = encodeURIComponent(schameUrl);
		}
		schameUrl = schame + schameUrl;
		//JS���ϵͳ���ж�
		var j_os = lib.env.os;
		var j_browser = lib.env.browser;
		  // ios 9.0����Ҫ��a��ǩ��href???
        var ios9SafariFix =j_os.isIPhone && j_os.version.gte('9.0') && j_browser.isSafari;
        //IOS9 Safari���⴦��
		if(ios9SafariFix){
            setTimeout(function(){
                useAnchorLink(schameUrl);
            }, 100);		
		}else{
			makeHiddenIframe(schameUrl);
		}
	}
}
//����һ��A���Ӵ��¼�����һ����ַ
function useAnchorLink(url) {
    var a = document.createElement('a');
    a.setAttribute('href', url);
    a.style.display = 'none';
    document.body.appendChild(a);

    var e = document.createEvent('HTMLEvents');
    e.initEvent('click', false, false);
    a.dispatchEvent(e);
}

//4.3 iframe --ʹ���м�ҳiframe��ǶĿ��ҳ��
function makeIframe(url){
    var ifa = document.createElement('iframe');
    ifa.style.width = '100%';
    ifa.style.height = '100%';
    ifa.style.border = 'none';
    ifa.style.margin = '0';
    ifa.style.padding = '0';
    ifa.src = url;
    ifa.onload = function(){
    		//���safri�ϱ���ҳ�汻�Ŵ�2�����⣬����android���ܼ���ȥ������ȥ��������
    		if(lib.env.os.isIPhone){
    			ifa.setAttribute('scrolling', 'no');
          ifa.style.width = '1px';
          ifa.style.minWidth = '100%';
    		}
    };
    document.body.appendChild(ifa);
}
 //����һ�����ص� iframe�����ڻ���ͻ���
function makeHiddenIframe(url){
    var ifa = document.createElement('iframe');
		ifa.style.display='none';
    ifa.style.width = '0%';
    ifa.style.height = '0%';
    ifa.style.border = 'none';
    ifa.style.margin = '0';
    ifa.style.padding = '0';
    ifa.src = url;
    document.body.appendChild(ifa);
}