
var textOpacity = 0.2;

var isMobile = false; 
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
  || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
	isMobile = true; }
	
$(function() {
  if (isMobile == true) {
      $('.butn').css('visibility', 'visible');
      $('h2').css('font-size', '2em');
      $('p').css('font-size', '1.3em');
      $('.sub').css('font-size', '.9em');
      //$('.butn').css('font-size', '1.0em');
      $('h1').css('font-size', '2.8em');
  }
});

//Allow for gcan.co/#marathonmodal to link to marathon project
$(document).ready(function() {
  var modal = "#marathonModal"
  if(window.location.href.indexOf(modal) != -1) {
    $(modal).modal('show');
  }

});

//Google VR Makerspace 360 photo viewer code
window.addEventListener('load', onVrViewLoad);

function onVrViewLoad() {
  // Selector '#vrview' finds element with id 'vrview'.
  var vrView = new VRView.Player('#vrview', {
    image: 'https://www.gcan.co/makerspace.jpg',
    is_stereo: true
  });
}

// create hover effect on homepage image when hovering over the headline or tagline
$(function() {
  $('.inner').hover(function() {
    $(this).find('.homeimage').css('box-shadow', '0px 0px 20px 0 rgba(0, 0, 0, 0.8), 0px 0px 20px 0 rgba(0, 0, 0, 0.8)');
    $(this).find('.homeimage').css('transform', 'scale(1.01, 1.01)');
  }, function() {
    $(this).find('.homeimage').css('transform', 'scale(1.0, 1.0)');
    $(this).find('.homeimage').css('box-shadow', '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5)');
  });
});

/*
$(function() {
  $('#oceanHead').hover(function() {
    //$('.ocean').css('box-shadow', 'inset 0 0 0 1000px rgba(0,0,0,0)');
    $('.tagline').css('opacity', textOpacity);
    $('.sub').css('opacity', textOpacity);
    $('video').get(0).play();
    $('video').css('opacity', '1.0');
    $('video').css('border-radius', '25px');
    //$('#ocean-btn').css('visibility', 'visible');
  }, function() {
    // on mouseout, reset the background colour
    //$('.ocean').css('box-shadow', 'inset 0 0 0 1000px rgba(0,0,0,.2)');
    $('.tagline').css('opacity', '1');
    $('.sub').css('opacity', '1');
    $('video').get(0).pause();
    $('video').css('opacity', '0.0'); 
  });
});

$(function() {
  $('#makerspaceHead').hover(function() {
    $('.makerspace').css('box-shadow', 'inset 0 0 0 1000px rgba(0,0,0,0)');
    $('.tagline').css('opacity', textOpacity);
    $('.sub').css('opacity', textOpacity);
    //$('#makerspace-btn').css('visibility', 'visible');
  }, function() {
    // on mouseout, reset the background colour
    $('.makerspace').css('box-shadow', 'inset 0 0 0 1000px rgba(0,0,0,.3)');
    $('.tagline').css('opacity', '1');
    $('.sub').css('opacity', '1'); 
  });
});

$(function() {
  $('#dataHead').hover(function() {
    $('.data').css('box-shadow', 'inset 0 0 0 1000px rgba(0,0,0,0)');
    $('.tagline').css('opacity', textOpacity);
    $('.sub').css('opacity', textOpacity);
    //$('#data-btn').css('visibility', 'visible');
  }, function() {
    // on mouseout, reset the background colour
    $('.data').css('box-shadow', 'inset 0 0 0 1000px rgba(0,0,0,.4)');
    $('.tagline').css('opacity', '1');
    $('.sub').css('opacity', '1'); 
  });
});

$(function() {
  $('#algorithmsHead').hover(function() {
    $('.algorithms').css('box-shadow', 'inset 0 0 0 1000px rgba(0,0,0,0)');
    $('.tagline').css('opacity', textOpacity);
    $('.sub').css('opacity', textOpacity);
    //$('#algorithms-btn').css('visibility', 'visible');
  }, function() {
    // on mouseout, reset the background colour
    $('.algorithms').css('box-shadow', 'inset 0 0 0 1000px rgba(0,0,0,.4)');
    $('.tagline').css('opacity', '1');
    $('.sub').css('opacity', '1'); 
  });
});

$(function() {
  $('#catnipHead').hover(function() {
    $('.catnip').css('box-shadow', 'inset 0 0 0 1000px rgba(0,0,0,0)');
    $('.tagline').css('opacity', textOpacity);
    $('.sub').css('opacity', textOpacity);
    //$('#catnip-btn').css('visibility', 'visible');
  }, function() {
    // on mouseout, reset the background colour
    $('.catnip').css('box-shadow', 'inset 0 0 0 1000px rgba(0,0,0,.3)');
    $('.tagline').css('opacity', '1');
    $('.sub').css('opacity', '1'); 
  });
});

$(function() {
  $('#elksHead').hover(function() {
    $('.elks').css('box-shadow', 'inset 0 0 0 1000px rgba(0,0,0,0)');
    $('.tagline').css('opacity', textOpacity);
    $('.sub').css('opacity', textOpacity);
    //$('#elks-btn').css('visibility', 'visible');
  }, function() {
    // on mouseout, reset the background colour
    $('.elks').css('box-shadow', 'inset 0 0 0 1000px rgba(0,0,0,.3)');
    $('.tagline').css('opacity', '1');
    $('.sub').css('opacity', '1'); 
  });
});

$(function() {
  $('#arcadeHead').hover(function() {
    $('.arcade').css('box-shadow', 'inset 0 0 0 1000px rgba(0,0,0,0)');
    $('.tagline').css('opacity', textOpacity);
    $('.sub').css('opacity', textOpacity);
    //$('#arcade-btn').css('visibility', 'visible');
  }, function() {
    // on mouseout, reset the background colour
    $('.arcade').css('box-shadow', 'inset 0 0 0 1000px rgba(0,0,0,.1)');
    $('.tagline').css('opacity', '1');
    $('.sub').css('opacity', '1'); 
  });
});
*/