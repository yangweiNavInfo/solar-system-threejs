define(function() {
  'use strict';

  var stats = new Stats();

  stats.setMode(0); // 0: fps, 1: ms, 2: mb
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.right = '0px';
  stats.domElement.style.top = '0px';

  document.body.appendChild(stats.domElement);

  return stats;
});
