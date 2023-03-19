(function () {
  var melismaPlugin = function (hook, vm) {
    // Invoked on each page load after new HTML has been appended to the DOM
    hook.doneEach(function () {
      setTimeout(() => {
        byzhtml.processAutoMelismas();
      }, 100);

      // TODO figure out how to ensure that custom elements have loaded
      setTimeout(() => {
        byzhtml.processAutoMelismas();
      }, 1000);
    });
  };

  // Add plugin to docsify's plugin array
  $docsify = $docsify || {};
  $docsify.plugins = [].concat(melismaPlugin, $docsify.plugins || []);
})();
