(function () {
  var melismaPlugin = function (hook, vm) {
    // Invoked on each page load after new HTML has been appended to the DOM
    hook.doneEach(function () {
      setTimeout(() => {
        byzhtml.processAutoMelismas();
      }, 50);
    });
  };

  // Add plugin to docsify's plugin array
  $docsify = $docsify || {};
  $docsify.plugins = [].concat(melismaPlugin, $docsify.plugins || []);
})();
