AOS.init();
var typed = new Typed('.auto-type',{
    strings : ['Web developer','Coder','Problem solver'],
    typeSpeed : 100,
    backSpeed : 100,
    loop : true
});
function SendMail(){
    var params = {
        from_name : document.getElementById("exampleFormControlInput1").value,
        email_id : document.getElementById("exampleFormControlInput2").value,
        message : document.getElementById("exampleFormControlTextarea4").value,
        phone : document.getElementById("exampleFormControlInput3").value
    }
    emailjs.send("service_uegfc1f", "template_zqry7dz", params).then(function(res){
        var success = document.getElementById("success")
        success.innerText = "Meassge send successfully..!"
    })
}