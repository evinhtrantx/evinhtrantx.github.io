function showUrl(){
	//window.alert(window.location.hash);
	//window.alert(window.location.search);
	let s=window.location.href;
	let re = s.match(/\/([A-Z0-9]+)(\/|$)/);
	let jobId = re[1];
	console.log(re);
	//window.alert(jobId);
	//if(jobId==undefined || jobId==null)return;
	trigger(jobId);
	
}
function trigger(jobId){
//document.getElementById("link").href="http://localhost:3000/kidreward/earnings/" + jobId + "?_=" + Math.random();
document.getElementById("link").href="https://4wkutquvec.execute-api.ap-southeast-2.amazonaws.com/Prod/kidreward/earnings/" + jobId + "?_" + Math.random();
document.getElementById("link").style.display='';
/*
let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("response").innerText = this.responseText;
    }
  };
  xhttp.open("GET", "https://4wkutquvec.execute-api.ap-southeast-2.amazonaws.com/Prod/kidreward/earnings/" + jobId, true);
  xhttp.send();
 */
}
function doSend(){
document.getElementById("link").href += "&comment=" + encodeURIComponent(document.getElementById("details").value);
window.setTimeout(function(){document.getElementById("link").style.display='none';},3000);
}