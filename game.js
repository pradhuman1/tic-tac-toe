
var i=0,flag=0;
var circle=[],cross=[],marked=[];



    document.getElementById('con').addEventListener('click',store);

    function store(e){
        if(flag!==1){
            var place=e.target.id;
            place=place.split('-');
            if((place!="")&&(place[0]!=='con')){
                if(i%2==0){
                    if(marked.indexOf(place[1])===-1){
                        marked.push(place[1]);
                        i++;
                        cross.push(place[1]);
                        var html='<div class="Img-%"><img src="cross.png" width="100" height="100" ></div>'
                        html=html.replace('%',i);
                        document.getElementById(e.target.id).insertAdjacentHTML('beforeend',html);
                        if(cross.length>2){
                            checkWinner(cross);
                        }
                    }
                }
                else{
                    if(marked.indexOf(place[1])===-1){
                        marked.push(place[1]);
                        i++;
                        circle.push(place[1]);
                        
                        var html='<div class="Img-%"><img src="ring.png" width="100" height="100" class="img" ></div>'
                        html=html.replace('%',i);
                        document.getElementById(e.target.id).insertAdjacentHTML('beforeend',html);        
                        if(circle.length>2){
                            checkWinner(circle);
                        }
                    }
                }
            }
        }
    }


function checkWinner(arr){
    if((arr.indexOf('1')!==-1)&&(arr.indexOf('4')!==-1)&&(arr.indexOf('7')!==-1)){
        Winner();
    }
    if((arr.indexOf('1')!==-1)&&(arr.indexOf('2')!==-1)&&(arr.indexOf('3')!==-1)){
        Winner();
    }
    if((arr.indexOf('4')!==-1)&&(arr.indexOf('5')!==-1)&&(arr.indexOf('6')!==-1)){
        Winner();
    }
    if((arr.indexOf('7')!==-1)&&(arr.indexOf('8')!==-1)&&(arr.indexOf('9')!==-1)){
        Winner();
    }
    if((arr.indexOf('2')!==-1)&&(arr.indexOf('5')!==-1)&&(arr.indexOf('8')!==-1)){
        Winner();
    }
    if((arr.indexOf('3')!==-1)&&(arr.indexOf('6')!==-1)&&(arr.indexOf('9')!==-1)){
        Winner();
    }
    if((arr.indexOf('1')!==-1)&&(arr.indexOf('5')!==-1)&&(arr.indexOf('9')!==-1)){
        Winner();
    }
    if((arr.indexOf('3')!==-1)&&(arr.indexOf('5')!==-1)&&(arr.indexOf('7')!==-1)){
        Winner();
    }
}

function Winner(){
    flag=1;
        if(i%2!=0){
            document.getElementById('One').textContent='PLAYER : X Winner!!';
        }
        else{
            document.getElementById('Two').textContent='PLAYER : O Winner!!';
        }
}

document.querySelector('.refresh').addEventListener('click',init);

function init(){
    for(var count=1;count<=i;count++){
        document.querySelector('.Img-'+count).remove();
    }
    circle=[];
    cross=[];
    marked=[];
    i=0;
    flag=0;
    document.getElementById('One').textContent='PLAYER : X';
    document.getElementById('Two').textContent='PLAYER : O';
}













