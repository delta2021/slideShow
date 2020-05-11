window.onload = function(){
    //fetch DOMs
    const markLeft = document.getElementsByClassName('mark-left')[0];
    const markRight = document.getElementsByClassName('mark-right')[0];

    const text = this.document.getElementsByClassName('text')[0];
    const currentPos = this.document.getElementsByClassName('length')[0];

   
    const thumbnailList_1 = document.getElementById('image-thumbnail-g1').children;
    const thumbnailList_2 = document.getElementById('image-thumbnail-g2').children;
    const images = document.getElementById('image-holder').getElementsByTagName('img');

    //get DOM list
    const fullthumbnailList = convertDOMCollToArr(thumbnailList_1, thumbnailList_2);
    const imagesList = convertDOMCollToArr(images);

  
    //description text
    const description = ['草地', '山', '阳光', '海', '船', '天和海'];

    //event listeners
    fullthumbnailList.forEach((ele, index) => {
        ele.addEventListener('click', function(){
            if (index === currentIndex){
                return;
            } 
            const selectedImg = imagesList[index];
            const zIndex = currentZIndex++;
            currentIndex = index;
            currentPos.innerText = `${index + 1}/6`;
            text.innerText = `${description[index]}`;
            showSelectedImg(selectedImg,  fullthumbnailList, currentIndex, zIndex);                    
        })


        ele.addEventListener('mouseover', () => {
             startMove(ele.children[0], 'opacity', 100);
        })

        ele.addEventListener('mouseout', () => {
            if (fullthumbnailList.indexOf(ele) === currentIndex){
                return;
            }
            startMove(ele.children[0], 'opacity', 70);
        })
  
        })

        markLeft.addEventListener('click', function(){

            if (currentIndex === 0){
               currentIndex = 6
            }
            
            
                currentIndex -= 1;
               if (currentIndex === 5){
                    document.getElementById('image-thumbnail-g2').classList.add('show');
                } else if (currentIndex === 2){
                    document.getElementById('image-thumbnail-g2').classList.remove('show');
                } 
                const selectedImg = imagesList[currentIndex];
                const zIndex = currentZIndex++;
                currentPos.innerText = `${currentIndex + 1}/6`;
                text.innerText = `${description[currentIndex]}`;
                showSelectedImg(selectedImg,  fullthumbnailList, currentIndex, zIndex)

            
          
        })    

           markRight.addEventListener('click', function(){

            if (currentIndex === 5){
                currentIndex = -1;
            }
       

                currentIndex += 1;
                if (currentIndex === 3){
                    document.getElementById('image-thumbnail-g2').classList.add('show');
                }  else if (currentIndex === 0){
                    document.getElementById('image-thumbnail-g2').classList.remove('show');
                } 
                const selectedImg = imagesList[currentIndex];
                const zIndex = currentZIndex++;
                currentPos.innerText = `${currentIndex + 1}/6`;
                text.innerText = `${description[currentIndex]}`;
                showSelectedImg(selectedImg,  fullthumbnailList, currentIndex, zIndex)

            
          
        })    
}

let currentIndex = 5;
let currentZIndex = 2;

function convertDOMCollToArr(){
        const arr = [];
        for (let i = 0; i < arguments.length; i++){
            for (let j = 0, len = arguments[i].length, curr = arguments[i];  
            j < len ; j++){
                arr.push(curr[j]);
            }
        }
        return arr;  
    }


function showSelectedImg(selectedImg,  thumbnailList, currentIndex, zIndex){
    selectedImg.style.zIndex = zIndex;
    selectedImg.style.height=0;
    startMove(selectedImg, 'height', 300); 
    thumbnailList.forEach(ele => {
    startMove(ele.children[0] ,'opacity', 70) })
            
    startMove(thumbnailList[currentIndex].children[0] ,'opacity', 100);    

}

