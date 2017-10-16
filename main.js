let scene = document.getElementById('parallax'),
    layers = scene.children;


let moveLayers = function(e){
    let initialX = (window.innerWidth / 2) - e.pageX,
        initialY = (window.innerHeight / 2) - e.pageY;
        
        Array.prototype.slice.call(layers).forEach(function(layer, i) {
            let layerStyle = layer.style,
                divider = i / 100;
                positionX = initialX * divider,
                positionY = initialY * divider,
                bottomPosition = (window.innerHeight / 2) * divider;

            

            layerStyle.transform = `translate3d(${positionX}px, ${positionY}px, 0)`;
            layerStyle.bottom = `-${bottomPosition}px`;
        });       
}

window.addEventListener('mousemove', moveLayers );

