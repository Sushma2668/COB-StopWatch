let [hr, min, sec, milisec] = [0,0,0,0];
let display = document.getElementById('display');
let record = document.getElementById('record');
let timer = null;

    function watch(){
       milisec =  milisec + 10;
       if(milisec === 1000){
            milisec = 0;
            sec++;
            if(sec === 60){
                sec = 0;
                min++;
                if(min === 60){
                    min = 0;
                    hr++;
                }
            }
       }

        let h = hr < 10? "0" +hr : hr;
        let m = min < 10? "0" +min : min;
        let s = sec < 10? "0" +sec : sec;
        let ms = milisec < 100? "0" + milisec : milisec;
        format=display.innerHTML = h+ " : " + m +" : "+ s +"<br>" +ms +"<br>" ;
    }

    function start(){
        if(timer!== null){
            clearInterval(timer);
        }
        timer = setInterval(watch,10);
    }

    function stop(){
        clearInterval(timer);
    }

    function reset(){
        clearInterval(timer);
        hr=0;
        min=0;
        sec=0;
        milisec=0;

        display.innerHTML= "00:00:00<br>000";
        var li = document.createElement("li");
        record.innerHTML = format;
        record.appendChild(li);
    }