     function getStyle(obj, name){
            return getComputedStyle(obj, false)[name];
        }
        function startMove(obj, propertyName, targetValue){
            clearInterval(obj.timer);
            obj.timer = setInterval(function(){
                let currentValue  = 0;
                if (propertyName === 'opacity'){
                    currentValue = Math.round(parseFloat(getStyle(obj, propertyName)) * 100);
                } else {
                   currentValue = parseInt(getStyle(obj, propertyName));
                }

            let speed = (targetValue - currentValue) / 5;
             speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            if (currentValue === targetValue) {
                clearInterval(obj.timer);
            } else {
                if (propertyName === 'opacity'){
                    obj.style.opacity = (currentValue + speed) / 100;
                    console.log(obj.style.opacity);
                }
                obj.style[propertyName] = currentValue + speed + 'px';
            }
        }, 30)
            }


     
            