
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

//text carousel code
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactThing = function (_React$Component) {
  _inherits(ReactThing, _React$Component);

  function ReactThing(props) {
    _classCallCheck(this, ReactThing);

    var _this = _possibleConstructorReturn(this, (ReactThing.__proto__ || Object.getPrototypeOf(ReactThing)).call(this, props));

    _this.state = {
      words: ["virtual and augmented reality", "XR", "spatial computing", "mixed reality"]
    };
    return _this;
  }

  _createClass(ReactThing, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.timerID = setInterval(function () {
        return _this2.cycleWords();
      }, 2500);
    }
  }, {
    key: "cycleWords",
    value: function cycleWords() {
      var words = this.state.words;
      var last = words.pop();
      var newWords = words.unshift(last);

      this.setState({
        words: words
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "carousel-section" },
        React.createElement(
          "div",
          { className: "tagline" },
          "I'm currently looking for new experiences in UX research and design. I'm especially excited by the future of human-computer interaction in the era of ",
          React.createElement(
            "span",
            { className: "taglineE" },
            this.state.words[0]
          ),
          "."
        )
      );
    }
  }]);

  return ReactThing;
}(React.Component);

ReactDOM.render(React.createElement(ReactThing, null), document.getElementById("app"));

//Google VR Makerspace 360 photo viewer code
window.addEventListener('load', onVrViewLoad);

function onVrViewLoad() {
  // Selector '#vrview' finds element with id 'vrview'.
  var vrView = new VRView.Player('#vrview', {
    image: 'https://www.gcan.co/3dpano.jpg', //change to 3d.jpg, stereo=true, try color correcting image
    is_stereo: true,
    width: "100%",
    height: "600px"
  });
}

// create hover effect on homepage image when hovering over the headline or tagline
$(function() {
  $('.inner').hover(function() {
    $(this).find('.homeimage').css('box-shadow', '0px 0px 20px 0 rgba(0, 0, 0, 0.8), 0px 0px 20px 0 rgba(0, 0, 0, 0.8)');
    $(this).find('.homeimage').css('transform', 'scale(1.01, 1.01)');
    $(this).find('.homeimage2').css('box-shadow', '0px 0px 20px 0 rgba(0, 0, 0, 0.8), 0px 0px 10px 0 rgba(0, 0, 0, 0.8)');
    $(this).find('.homeimage2').css('transform', 'scale(1.01, 1.01)');
  }, function() {
    $(this).find('.homeimage').css('transform', 'scale(1.0, 1.0)');
    $(this).find('.homeimage').css('box-shadow', '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5)');
    $(this).find('.homeimage2').css('transform', 'scale(1.0, 1.0)');
    $(this).find('.homeimage2').css('box-shadow', '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 10px 0 rgba(0, 0, 0, 0.5)');
  });
});