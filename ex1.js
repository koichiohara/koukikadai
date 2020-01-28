var image=new Array();


image[0]=new Image();
image[0].src="千鳥.jpg";
image[1]=new Image();
image[1].src="河本準一.jpg";
image[2]=new Image();
image[2].src="ちえみブルゾン.jpg";
image[3]=new Image();
image[3].src="近藤千尋.jpg";
image[4]=new Image();
image[4].src="桜井日奈子.jpg";

var cnt=0;


function slidesw()
{
    if(document.getElementById)
    {
        document.slide.elements[0].disabled=true;

        document.getElementById("sd").src=image[cnt].src;

        cnt++;

        if(cnt<=4)
        {
            var timer1=setTimeout("slidesw()",3000);
        }
        else
        {
            cnt=0;
            document.slide.elements[0].disabled=false;
            clearTimeout(timer1);
        }
    }
}