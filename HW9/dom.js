const bigCube = document.createElement('div');
bigCube.className = 'container';
document.body.append(bigCube);

const generateBlocks = () => {

  function getRandomRGB() {
    const randomColor = () => Math.floor(Math.random() * 256);
    return `rgb(${randomColor()},${randomColor()},${randomColor()})`;
  }

  for (let h = 0; h < 5; h++) {
      for (let w = 0; w < 5; w++){
    const smallCube = document.createElement('div');
    smallCube.classList.add('box');
    smallCube.style.backgroundColor = getRandomRGB();
    bigCube.append(smallCube);
  }
 }
}
generateBlocks();

//Advanced 
const generateBlocksInterval = () => {
    setInterval(()=> {
      bigCube.innerHTML = '' 
      generateBlocks()
    },1000)
  }
  generateBlocksInterval();
