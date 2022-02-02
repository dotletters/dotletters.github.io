//Contact Form
/*function contactForm () {
  $('.contact-form').submit(function(e){
    var form = $(this);

    e.preventDefault();

    form.find('input').each(function(){
      if ($(this).val() == '') {
        $(this).addClass('empty-value')
      };
      $(this).on('keypress', function(){
        $(this).removeClass('empty-value')
      });
    })

    form.find('textarea').each(function(){
      if ($(this).val() == '') {
        $(this).addClass('empty-value')
      };
      $(this).on('keypress', function(){
        $(this).removeClass('empty-value')
      });
    })

    $.ajax({
      type: 'POST',
      url : 'lib/php/contact.php',
      data: form.serialize(),
      success: function(data){
                  
        if ($(data).is('.send-true')){
          setTimeout(function(){
            form.trigger('reset');
            form.find('.form-message').fadeOut().delay(500).queue(function(){
              form.find('.form-message').html('').dequeue();
            });
          }, 2000);
        } else if( $(data).is('.wrong-email') ){
          form.addClass('wrong-email');
        }
      }
    });
  });
  $('form.contact-form input.email').on('keypress', function(){
    $('form.contact-form').removeClass('wrong-email')
  });
} */