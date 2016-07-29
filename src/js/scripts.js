(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    /**
    * Open modal on click of image without caption
    **/
    $('.image img').on('click', function () {
      var ele = $(this);
      if (!ele.data('caption')) {
        $('#image-modal').modal({
          show: true,
          backdrop: 'static',
          keyboard: false
        });
      }
    });

    /**
    * Close the modal dialog on click of close button
    **/
    $('.modal .close').on('click', function () {
      $('#image-modal').modal('hide');
    });
  });

})(jQuery, window, document);
