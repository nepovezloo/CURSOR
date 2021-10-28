const bigCube = document.createElement('div');
bigCube.className = 'container';
document.body.append(bigCube);
const generateBlocks = () => {

    function randomSmallCubeColor() {
        const randomColor = () => Math.floor(Math.random() * 256);
        return 'rgb(' + randomColor() + ',' + randomColor() + ',' + randomColor() + ')';
    }

  for (let i = 0; i < 5; i++) {
      for (let b = 0; b < 5; b++){
    const smallCube = document.createElement('div');
    smallCube.classList.add('box');
    smallCube.style.backgroundColor = randomSmallCubeColor();
    bigCube.append(smallCube);
  }
}
}
generateBlocks();

//Advanced 
const generateBlocksInterval = () => {
  setInterval(()=> {
    bigCube.innerHTML
  },1000)
}
generateBlocksInterval();