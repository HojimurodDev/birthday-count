VanillaTilt.init(document.querySelectorAll(".box"), {
		max: 25,
        speed: 400,
        easing:"cubic-bezier(.03,.98,.52,.99)",
        perspective:500,
        transition:true
    });


(function () {
    const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
            week = day * 7
            month = week * 30
            
    inp = document.querySelector('.inp')
    btn = document.querySelector('.btn')
    btn.addEventListener('click', ()=>{
        
        let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 1).padStart(2, "0"),
            yyyy = today.getFullYear(),
            nextYear = yyyy +1 ,
            a = inp.value.split('-')
            oy = a[1]
            kun = a[2]
            dayMonth = oy+'/'+kun+"/",
            globalThis =  dayMonth;
        console.log(dayMonth);
        birthday = dayMonth + yyyy;
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
        birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
    
            const now = new Date().getTime(),
                distance = countDown - now;
    
            document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
    
            
            //do something later when date is reached
            if (distance < 0) {
            document.getElementById("headline").innerText = "Error!";
            document.getElementById("headline").style = "color:red;";
            document.getElementById("countdown").style.display = "none";
            clearInterval(x);
            }
            //seconds
        }, 0)
        btn.innerText = 'yangilash'
        if (btn.innerText == 'yangilash') {
            inp.setAttribute('disabled', "")
            btn.setAttribute('id',"btn")
            refresh = document.querySelector('#btn')
            refresh.addEventListener('click', ()=>{
            refresh.setAttribute('href',"")
            })
        }
        });
    }());