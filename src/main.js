let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string1 = `
/* 你好，我叫李荣跃
 * 接下来我演示一下我的前端功底
 * 首先我要准备一个div
*/

#div1 {
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我把div变成一个八卦图
 * 注意看好了
 * 首先我把div变成一个圆
 */
#div1{
    border-radius: 50%;
    box-shadow: 0px 0px 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/* 加两个神秘的小球 */
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:25%;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    right:25%;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);

}
`;
let string2 = "";
let n = 0;
let step = () => {
  setTimeout(() => {
    if (string1[n] === "\n") {
      string2 += "<br>";
    } else if (string1[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string1[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string1.substring(0, n);
    window.scrollTo(0, 9999); //pc设置滚动条
    html.scrollTo(0, 9999);
    if (n < string1.length - 1) {
      n += 1;
      step();
    }
  }, 0);
};
step();
