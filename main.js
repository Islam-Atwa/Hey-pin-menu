const logo = 'https://www.svgrepo.com/show/535314/code.svg';

const listOfItems =[
    '@islamatwa1',
    'LinkedIn islam atwa',
    'leetcode islam atwa429',
    'Instagram islam atwa',
    'semicolon.academy'
];

const baseScaleChange = 0.033333333;
const baseTranslateChange = 0.7;
//                        load all content in page
document.addEventListener('DOMContentLoaded', function(){
    const stack = document.getElementById('stack');
    for (let i = 0; i < listOfItems.length; i++){
        let div = document.createElement('div');
        div.classList.add('single-block');
        div.innerHTML = `
            <div class = "content">
                <img src = "${logo}"/>
                <div> <h3>${listOfItems[i]}</h3> <p>descraption</p> </div>
            <div></div>`;
        const reverseIndex = listOfItems.length - 1 - i;
        div.style.transform = `scale (${1 - reverseIndex * baseScaleChange}) translateY(-${baseScaleChange * reverseIndex}rem)`;
        stack.append(div);
    }

    //هذه الدالة تضيف وظيفة عند النقر على العنصر الذي يحمل المعرف stack

    stack.addEventListener('click', function (e) {
        e.stopPropagation();
        const blocks = this.querySelectorAll('.single-block');
        blocks.forEach((block, i) => {
            const reverseindex = blocks.length - 1 - i;
            block.style.transform = `rotate(${reverseindex * 1.1}deg) translate(-${reverseindex * 0.2}rem, -${reverseindex * 4}rem)`;
        });
    });

    document.addEventListener('click', function(e) {
        const blocks = document.querySelectorAll('.single-block');
        blocks.forEach((block, i)=>{
            const reverseIndex = listOfItems.length - 1 - i;
            block.style.transform = `scale(${
                1 - reverseIndex * baseScaleChange
              }) translateY(-${baseTranslateChange * reverseIndex}rem)`;
        });
    });
    
});

