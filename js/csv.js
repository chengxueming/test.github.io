<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>无标题文档</title>
<script type="text/JavaScript">
//显示上传文件名字
var file;
function ShowName(){
for(var i=0;i<document.getElementById("file").files.length;i++){
file=document.getElementById("file").files[i];
alert(file.name);
}}
//文件的属性
function ShowFileType(){
file=document.getElementById("file1").files[0];
var size=document.getElementById("size");
size.innerHTML=file.size;
var type=document.getElementById("type");
type.innerHTML=file.type;
}
//过滤文件
function FileUpload(){
for(var i=0;i<document.getElementById("file2").files.length;i++){
file=document.getElementById("file2").files[i];
if(!/image\/\w+/.test(file.type)){
alert(file.name+"不是图像文件");
}else{
alert(file.name+"可以上传");
}}}
//判断浏览器是否支持FileReader对象
function tyFileReader(){
if(typeof FileReader==='undefined'){
alert("当前浏览器不支持");
}else{
alert("当前浏览器支持");
}}
//读取图片并显示
function readFileImg(){
file=document.getElementById("file3").files[0];
if(!/image\/\w+/.test(file.type)){
alert(file.name+"不是图像文件");
}else{
var reader =new FileReader();
reader.readAsDataURL(file);
reader.onload=function(e){
var result=document.getElementById("result");
result.innerHTML='<img src="'+this.result+'" alt=""/>';
}}}
//读取文本并显示
function readFileText(){
file=document.getElementById("file4").files[0];
var reader =new FileReader();
reader.readAsText(file);
reader.onload=function(e){
var result=document.getElementById("result1");
alert(file.size)
result1.innerHTML=this.result;
}}
</script>
</head>


<body>


<input type="file" multiple size="50" id="file"/><br />
<input type="button" onclick="ShowName();" value="上传文件"/><br />
<br />
<input type="file"  id="file1"/><br />
<input type="button" onclick="ShowFileType();" value="显示文件信息"/><br />
文件字节长度：<span id="size"></span><br />
文件类型：<span id="type"></span><br />
<br />
<input type="file" multiple size="50" id="file2"/><br />
<input type="button" onclick="FileUpload();" value="上传文件"/><br />
<br />
<input type="button" onclick="tyFileReader();" value="判断"/><br />
<br />
<p>
<label>请选择一个文件：</label>
<input type="file"  id="file3"/><br />
<input type="button" onclick="readFileImg();" value="读取文件"/><br />
</p>
<div name="result" id="result"></div>
<!--在这里显示读取结果-->
<br/><br />


<p>
<label>请选择一个文件：</label>
<input type="file"  id="file4"/><br />
<input type="button" onclick="readFileText();" value="读取文件"/><br />
</p>
<div name="result1" id="result1">
<!--在这里显示读取结果,
这里需要调整编码方式-->
</div>
</body>
</html>