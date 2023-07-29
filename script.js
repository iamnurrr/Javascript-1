var _buttonlar =document.getElementsByTagName("button"),
_uzunluk=_buttonlar.length,
_sonuç=document.getElementById("sonuç"),
i=0;
for(i=0;i<_uzunluk;i++){
    _buttonlar[i].onclick=hesapla;
}
function hesapla(){
    var _deger= this.innerHTML;
    if(_deger=="="){
        try{
            _sonuç.value=eval(_sonuç.value);
        }
        catch(e){
            _sonuç.value="0";
    }
return;
    }
    _sonuç.value+=_deger;

}