let arrowdown=document.getElementById('bi-caret-down-fill');
let arrowup=document.getElementById('bi-caret-up-fill')
let optional=document.getElementById('optional');
let tools=document.getElementById('tools');
let burger=document.getElementById('burger');
let mobile=document.getElementById('mobile');
let exit=document.getElementById('exit');
let slide=document.getElementById('slide')

/*arrowdown.addEventListener("click",()=>{
  optional.classList.toggle('active');
  arrowup.style.display= 'block';
  arrowdown.style.display= 'none';
  tools.style.display= 'none';
});

arrowup.addEventListener("click",()=>{
  optional.classList.toggle('active');
  arrowdown.style.display= 'block';
  arrowup.style.display= 'none';
  tools.style.display= 'block';
});*/


slide.addEventListener("click" , ()=>{
  optional.classList.toggle('active');
  arrowdown.classList.toggle('disappear');
  arrowup.classList.toggle('activation');
  tools.classList.toggle('disappear');
})


burger.addEventListener("click",()=>{
  mobile.style.transform= 'translateX(0%)';
});

exit.addEventListener("click",()=> {
  mobile.style.transform= 'translateX(-101%)';
});

$("input.mask").each((i,ele)=>{
  let clone=$(ele).clone(false)
  clone.attr("type","text")
  let ele1=$(ele)
  clone.val(Number(ele1.val()).toLocaleString("en"))
  $(ele).after(clone)
  $(ele).hide()
  clone.mouseenter(()=>{

    ele1.show()
    clone.hide()
  })
  setInterval(()=>{
    let newv=Number(ele1.val()).toLocaleString("en")
    if(clone.val()!=newv){
      clone.val(newv)
    }
  },10)

  $(ele).mouseleave(()=>{
    $(clone).show()
    $(ele1).hide()
  })


})


function calc(){
  let days=document.getElementById('days').value;
  let dailywage=document.getElementById('DEMO').value;
  let overtime=document.getElementById('overtime').value;
  let holiday=document.getElementById('holiday').value;
  let nightshift=document.getElementById('nightshift').value;
  let children=document.getElementById('children').value;
  let tax1=document.getElementById("tax1").innerHTML;
  let bonus=document.getElementById('food').checked? document.getElementById('food').value:0;
  let home=document.getElementById('hm').checked?document.getElementById('hm').value:0;
  let sabeghe=document.getElementById('sabeghe').value;
  var radios = document.getElementsByName('rooz');

  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      var val= radios[i].value;

      break;
    }
  }

  let hr=dailywage/7.33
  let monthlywage1=(days * dailywage);
  let benefitial=parseFloat(monthlywage1)+parseFloat(bonus)+parseFloat(home)
  let insurance=parseFloat(benefitial*0.07)
  let children1=children * 2655492;
  let overtimeamount=hr*1.4*overtime;
  let holiday1=hr*0.4*holiday;
  let nightshiftamount=hr*0.35*nightshift;
  let bonus1=bonus*days/val
  let home1=home*days/val

  let sum1=parseFloat(monthlywage1)+parseFloat(bonus1)+parseFloat(home1)+parseFloat(children1)+parseFloat(overtimeamount)+parseFloat(holiday1)+parseFloat(nightshiftamount);
  let x = sum1
  switch (true) {
    case x < 40000000:
      tax1= '0'
      break;
    case x >= 40000000 && x < 80000000:
      x=x*0.1
      tax1 =  Number(x)
      break;
    case x >= 80000000 && x < 120000000:
      x=x*0.15
      tax1 =  Number(x)
      break;
    case x >= 120000000 && x < 180000000:
      x=x*0.2
      tax1 =  Number(x)
      break;
    case x >= 180000000 && x < 240000000:
      x=x*0.25
      tax1 =  Number(x)
      break;
    case x >= 240000000 && x < 320000000:
      x=x*0.3
      tax1 =  Number(x)
      break;
    case x >= 320000000:
      x=x*0.35
      tax1 = Number(x)
      break;
    default:
  }

  let sumshortage=parseFloat(tax1)+parseFloat(insurance);
  let puresum=parseFloat(sum1)-parseFloat(sumshortage);
  let sanavatmonth=sabeghe*2.5*dailywage;
  let eid=sabeghe*monthlywage1/6;

  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
      x = x.replace(pattern, "$1,$2");
    return x;
  }



  if (days && dailywage)
      document.getElementById("monthly-wage1").innerHTML= numberWithCommas(monthlywage1);
      document.getElementById("daily-wage1").innerHTML= numberWithCommas(dailywage);
      document.getElementById("days1").innerHTML= days;
      document.getElementById("overtime1").innerHTML= numberWithCommas(overtime);
      document.getElementById("holiday1").innerHTML= numberWithCommas(holiday);
      document.getElementById("nightshift1").innerHTML= numberWithCommas(nightshift);
      document.getElementById("children1").innerHTML= numberWithCommas(children1);
      document.getElementById("overtime-amount1").innerHTML=  numberWithCommas(Math.floor(overtimeamount));
      document.getElementById("holiday-amount1").innerHTML=  numberWithCommas(Math.floor(holiday1));
      document.getElementById("nightshift-amount1").innerHTML=  numberWithCommas(Math.floor(nightshiftamount));
      document.getElementById("sum1").innerHTML= numberWithCommas(Math.floor(sum1));
      document.getElementById("insurance1").innerHTML= numberWithCommas(Math.floor(insurance));
      document.getElementById("sum-shortage").innerHTML= numberWithCommas(Math.floor(sumshortage));
      document.getElementById("tax1").innerHTML= numberWithCommas(Math.floor(parseFloat(tax1)));
      document.getElementById("sum-pure").innerHTML= numberWithCommas(Math.floor(puresum));
      document.getElementById("bonus1").innerHTML= numberWithCommas(Math.floor(bonus1));
      document.getElementById("home1").innerHTML= numberWithCommas(Math.floor(home1));
      //document.getElementById("sanavat1").innerHTML= numberWithCommas(sanavatmonth);
      //document.getElementById("eid").innerHTML= numberWithCommas(eid);
      document.getElementById("words").innerHTML= Num2persian(Math.floor(puresum))+' '+'ریال';

}



