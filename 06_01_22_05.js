function calculate(){
let x1 = parseInt(document.getElementById("hs1.1").value);
let x2 = parseInt(document.getElementById("hs1.2").value);
let x3 = parseInt(document.getElementById("hs1.3").value);
let y = parseInt(document.getElementById("hs2").value);
let z = parseInt(document.getElementById("hs3").value);

c = (((x1+x2+x3)/3)*20/100)+(y*30/100) + (z*50/100);
if(c>=9){
    alert("Đạt danh hiệu học sinh xuất sắc!")
}
else if(c>=8){
    alert("Đạt danh hiệu học sinh giỏi!")
}
else if(c>6.5){
    alert("Đạt danh hiệu học sinh tiên tiến!")
}
else{
    alert("Đạt danh hiệu học sinh trung bình!")
}




}
