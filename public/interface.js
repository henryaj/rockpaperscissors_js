$(document).ready(function(){
      var p1 = new Player('Player');
      var p2 = new Player('Computer');
      var game = new Game(p1, p2);

      $('h1').jrumble({x:30,y:30,rotation:0});
      $('.choices img').jrumble();
      $('h1').trigger('startRumble');
      $('.choices img').hover(function(){
      $(this).trigger('startRumble');
    }, function(){
      $(this).trigger('stopRumble');
    });

      $('.choices img').on('click', function(){
        p1.picks($(this).data('pick'));
        p2.picks(_.sample(['rock','paper','scissors','lizard','spock']));

        $("<li>" + game.winningMessage() + "</li>").prependTo('#results').slideDown();

        $("#results li:gt(3)").fadeOut(function(){
          $(this).remove();
        });
      })
    })