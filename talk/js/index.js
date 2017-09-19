var chatLog = document.querySelector("#chatLog");
var msg = document.querySelector("#msg");
var btnSend = document.querySelector("#btnSend");


//当用户一点开机器人，默认回复‘你好，有什么可以帮您的’
addChatItem("service",'chat-txt', "你好！有什么可以帮您的吗?")

//回复消息
var backMsg = function(msg){
    //用户输入的消息为msg
    console.log(msg)
    return msg
}

//点击发送按钮发送信息
btnSend.onclick = function () {
    sendMsg();
}

//按回车自动发送消息
window.onkeydown = function (ev) {
    if(ev.keyCode == 13){
        sendMsg();
    }
}
//发送消息的回掉函数
function sendMsg() {
    //1.添加用户发送的信息到页面
    addChatItem("custom","chat-txt2", msg.value);

    //2.发送消息以后将参数传到backMsg
    var back = backMsg(msg.value)

    //3.添加回复的消息到页面
    addChatItem("service",'chat-txt', back)

    //4.清空消息区
    msg.value = null;
}
/**
 *  增加一条聊天记录
 *
 * @param selector    类选择器 .custom  / .service
 * @param msg         消息文本内容
 */
function addChatItem(selector,textStyle, msg) {
    var liDom = document.createElement("li");
    liDom.classList.add(selector);
    var spanDom = document.createElement("span");
    spanDom.classList.add(textStyle);
    spanDom.innerText = msg.trim();
    liDom.appendChild(spanDom);
    chatLog.appendChild(liDom);
    //        滚动条处理：始终位于聊天区域底部
    chatLog.scrollTop = 100000;
    //chatLog.scrollTop = chatLog.offsetHeight;
}

//点击机器人图标弹出聊天窗口，再次点击关闭
var flag = true
$('.btn').on('click',function(){
    if(flag){
        flag = false
        $(".talk_box").animate({
            right:'100px',
        }).css('display','block');
        return
    }
    if(!flag){
        close()
    }
})
$('#close').on('click',function(){
    close()
})

//定义一个关闭对话框的函数，当点击右上角X号，和机器人图标的时候
var close = function(){
    flag = true
    $(".talk_box").animate({
        right:'0px',
    }).css('display','none');
}

