particlesJS("particles-js",
 {"particles":
 {"number":
 {"value":72,"density":
 {"enable":false,"value_area":1282.7296486924183
 }
 },
 "color":{"value":"#ffffff"},
 "shape":{"type":"edge","stroke":
 {
 "width":1,"color":"#000000"
 },
 "polygon":{"nb_sides":4},
 "image":{"src":"img/github.svg","width":100,"height":100}
 },
 "opacity":{"value":0.25654592973848367,"random":true,"anim":
 {"enable":true,"speed":1,"opacity_min":0.1,"sync":true}
 },
 "size":{"value":4.008530152163807,"random":true,"anim":
 {"enable":false,"speed":40,"size_min":0.1,"sync":false}
 },
 "line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},
 "move":{"enable":true,"speed":6,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":
 {"enable":false,"rotateX":1523.2414578222467,"rotateY":2324.947488255008}
 }
 },
 "interactivity":{
 "detect_on":"canvas","events":{
 "onhover":{"enable":true,"mode":"grab"},
 "onclick":{"enable":true,"mode":"repulse"},
 "resize":true},
 "modes":{"grab":
 {"distance":239.76023976023976,"line_linked":
 {"opacity":1}
 },
 "bubble":{"distance":170.53621458328246,"size":16.241544246026905,"duration":1.542946703372556,"opacity":0.17053621458328247,"speed":3},
 "repulse":{"distance":200,"duration":0.4},
 "push":{"particles_nb":4},
 "remove":{"particles_nb":2}
 }
 },
 "retina_detect":true});
 var count_particles, stats, update;
// stats = new Stats; stats.setMode(0);
// stats.domElement.style.position = 'absolute';
// stats.domElement.style.left = '0px';
// stats.domElement.style.top = '0px';
 document.body.appendChild(stats.domElement);
 count_particles = document.querySelector('.js-count-particles');
 update = function() {
 stats.begin();
 stats.end();
 if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array)
 { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; }
 requestAnimationFrame(update);
 };
 requestAnimationFrame(update);;