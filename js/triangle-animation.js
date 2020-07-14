$(document).ready(function(){
  let firstTr = () => {
    $('#first-tr').addClass('active')
  } ,
  secondTr = () => {
    $('#second-tr').addClass('active')
  },
  thirdTr = () => {
    $('#third-tr').addClass('active')
  }

  firstTr();
  setTimeout(secondTr, 450);
  setTimeout(thirdTr, 900);
})