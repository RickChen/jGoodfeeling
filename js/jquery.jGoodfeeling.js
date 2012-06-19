/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
    {
def: 'easeOutQuad',
swing: function (x, t, b, c, d) {
//alert(jQuery.easing.default);
return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
},
easeInQuad: function (x, t, b, c, d) {
return c*(t/=d)*t + b;
},
easeOutQuad: function (x, t, b, c, d) {
return -c *(t/=d)*(t-2) + b;
},
easeInOutQuad: function (x, t, b, c, d) {
if ((t/=d/2) < 1) return c/2*t*t + b;
return -c/2 * ((--t)*(t-2) - 1) + b;
},
easeInCubic: function (x, t, b, c, d) {
return c*(t/=d)*t*t + b;
},
easeOutCubic: function (x, t, b, c, d) {
                return c*((t = t/d-1)*t*t + 1) + b;
              },
easeInOutCubic: function (x, t, b, c, d) {
                  if ((t/=d/2) < 1) return c/2*t*t*t + b;
                  return c/2*((t-=2)*t*t + 2) + b;
                },
easeInQuart: function (x, t, b, c, d) {
               return c*(t/=d)*t*t*t + b;
             },
easeOutQuart: function (x, t, b, c, d) {
                return -c * ((t = t/d-1)*t*t*t - 1) + b;
              },
easeInOutQuart: function (x, t, b, c, d) {
                  if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
                  return -c/2 * ((t-=2)*t*t*t - 2) + b;
                },
easeInQuint: function (x, t, b, c, d) {
               return c*(t/=d)*t*t*t*t + b;
             },
easeOutQuint: function (x, t, b, c, d) {
                return c*((t = t/d-1)*t*t*t*t + 1) + b;
              },
easeInOutQuint: function (x, t, b, c, d) {
                  if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
                  return c/2*((t-=2)*t*t*t*t + 2) + b;
                },
easeInSine: function (x, t, b, c, d) {
              return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
            },
easeOutSine: function (x, t, b, c, d) {
               return c * Math.sin(t/d * (Math.PI/2)) + b;
             },
easeInOutSine: function (x, t, b, c, d) {
                 return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
               },
easeInExpo: function (x, t, b, c, d) {
              return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
            },
easeOutExpo: function (x, t, b, c, d) {
               return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
             },
easeInOutExpo: function (x, t, b, c, d) {
                 if (t==0) return b;
                 if (t==d) return b+c;
                 if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
                 return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
               },
easeInCirc: function (x, t, b, c, d) {
              return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
            },
easeOutCirc: function (x, t, b, c, d) {
               return c * Math.sqrt(1 - (t = t/d-1)*t) + b;
             },
easeInOutCirc: function (x, t, b, c, d) {
                 if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
                 return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
               },
easeInElastic: function (x, t, b, c, d) {
                 var s = 1.70158;var p=0;var a=c;
                 if (t==0) return b; if ((t/=d)==1) return b+c; if (!p) p=d*.3;
                 if (a < Math.abs(c)) { a = c; var s=p/4; }
                 else var s = p/(2*Math.PI) * Math.asin (c/a);
                 return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
               },
easeOutElastic: function (x, t, b, c, d) {
                  var s = 1.70158;var p=0;var a=c;
                  if (t==0) return b; if ((t/=d)==1) return b+c; if (!p) p=d*.3;
                  if (a < Math.abs(c)) { a = c; var s=p/4; }
                  else var s = p/(2*Math.PI) * Math.asin (c/a);
                  return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
                },
easeInOutElastic: function (x, t, b, c, d) {
                    var s = 1.70158;var p=0;var a=c;
                    if (t==0) return b; if ((t/=d/2)==2) return b+c; if (!p) p=d*(.3*1.5);
                    if (a < Math.abs(c)) { a = c; var s=p/4; }
                    else var s = p/(2*Math.PI) * Math.asin (c/a);
                    if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
                    return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
                  },
easeInBack: function (x, t, b, c, d, s) {
              if (s == undefined) s = 1.70158;
              return c*(t/=d)*t*((s+1)*t - s) + b;
            },
easeOutBack: function (x, t, b, c, d, s) {
               if (s == undefined) s = 1.70158;
               return c*((t = t/d-1)*t*((s+1)*t + s) + 1) + b;
             },
easeInOutBack: function (x, t, b, c, d, s) {
                 if (s == undefined) s = 1.70158;
                 if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
                 return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
               },
easeInBounce: function (x, t, b, c, d) {
                return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
              },
easeOutBounce: function (x, t, b, c, d) {
                 if ((t/=d) < (1/2.75)) {
                   return c*(7.5625*t*t) + b;
                 } else if (t < (2/2.75)) {
                   return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
                 } else if (t < (2.5/2.75)) {
                   return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
                 } else {
                   return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
                 }
               },
easeInOutBounce: function (x, t, b, c, d) {
                   if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
                   return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
                 }
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

(function ($) {
 $.fn.jGoodfeeling = function (option, settings) {
 if (typeof option === 'object') {
 settings = option;
 } else if (typeof option === 'string') {
 var data = this.data('_jGoodfeeling');

 if (data) {
 if ($.fn.jGoodfeeling.defaultSettings[option] !== undefined) {
 if (settings !== undefined) {
 //if you need to make any specific changes to the DOM make them here
 data.settings[option] = settings;
 return true;
 } else return data.settings[option];
 } else return false;
 } else return false;
 }

 settings = $.extend({}, $.fn.jGoodfeeling.defaultSettings, settings || {});

 return this.each(function () {
   var $elem = $(this);

   var $settings = jQuery.extend(true, {}, settings);

   var goodfeeling = new Goodfeeling($settings);

   var goodFeelingContainer = goodfeeling.generate();

   $('html, body').animate({scrollTop: $("body").offset().top}, 250);

   $('body').append(goodFeelingContainer);

   (function runAnimation() {
    if (goodfeeling.doneLoading()) {
    goodfeeling.animationInit();
    } else {
    return
    }
    })();

   goodfeeling.attachClose();

   $elem.data('_jGoodfeeling', goodfeeling);
 });
 }

 $.fn.jGoodfeeling.defaultSettings = {
fonts:null,
      prefix: "_jGoodfeeling",
      containerHeight: getHeight() * 1.1,
      containerWidth: getWidth() * 1.1,
      linearDelay: 50,
      diagonalDelay: 200,
      animationType: 'diagonal',
      animationTime: 1000,
      sliceDim: 100,
      sliceDelay: 500,
      sliceZ: 9999,
      sliceOpacity: 1,
      sliceInitOpacity: 0,
      modalWidth: 700,
      modalHeight: 360,
      modalCSS: {
        'background' : 'white',
        'background' : 'rgba(255, 255, 255, 1)',
        '-webkit-box-shadow': '0px 0px 20px rgba(0, 0, 0, 0.5)',
        '-moz-box-shadow': '0px 0px 20px rgba(0, 0, 0, 0.5)',
        '-moz-border-radius': '5px',
        '-webkit-border-radius': '5px'
      },
modalHeader :'Default Header',
             modalHeaderCSS: {
               'text-align': 'center',
               'margin-bottom' : '1em',
               'padding-bottom' : '1em'
             },
modalBody: 'Default Body Text',
           modalBodyCSS: {
             'color' : '#CB2027',
             'font-size': '2em',
             'text-align':'center'
           },
modalZ: 99999,
        modalAnimationTime: 4000,
        colorScheme : ['#C84281', '#F0624F','#84399F','#A2DD49','#E390B7','#F7A79C', '#BC86CF', '#CBEE96'],
        colorScheme : ['#CB2029', '#CF6C21', '#A31A6D', '#28A91B', '#E57B80', '#E7AA7C', '#D170AB', '#7BD472'],
        colorScheme : ['#78E700','#00B454','#D8F800','#DE0052','#9BF33D','#36DA82','#E3FC3F','#EE3C7E'],
        colorScheme : ['#eee', '#ddd', '#ccc', '#bbb', '#aaa', '#999','#888','#777', '#666','#555','#444','#333']
 };

 function Goodfeeling(settings) {
   this.goodfeeling = null;
   this.globals = {
doneAnimating: false
   };
   this.settings = settings;

   return this;
 }

 function getHeight() {
   var windowHeight = $(window).height();

   return windowHeight;

 }

 function getWidth() {
   var windowWidth = $(window).width();

   return windowWidth;

 }

 Goodfeeling.prototype = {
generate: function () {
            var $this = this;

            if ($this.goodfeeling) return $this.goodfeeling;

            $this.goodfeelingContainer = $('<div class="' + $this.settings.prefix + '_container"></div>');
            $this.goodmodalContainer = $('<div class="' + $this.settings.prefix + '_modal_container"></div>');
            $this.goodfeelingContainer.data('doneLoading', false);

            var containerCSS = {
              'position': 'fixed',
              'overflow': 'hidden',
              'width': $this.settings.containerWidth,
              'height': $this.settings.containerHeight,
              'left': 0,
              'top': 0,
              'z-index': 1
            }
            var modalcontainerCSS = {
              'position': 'fixed',
              'overflow': 'hidden',
              'width': getWidth(),
              'height': getHeight(),
              'left': 0,
              'top': 0,
              'z-index': 2
            }
            $this.goodfeelingContainer.css(containerCSS);
            $this.goodmodalContainer.css(modalcontainerCSS);
            $this.goodfeelingContainer.append($this.goodmodalContainer);
            $this.attachSlices($this.goodfeelingContainer);
            return $this.goodfeelingContainer;
          },

doneLoading: function () {
               return this.goodfeelingContainer.data('doneLoading');
             },

doneAnimating: function () {
                 return this.globals.doneAnimating;
               },

animationInit: function () {
                 var $this = this,
                 linearDelay = $this.settings.linearDelay;

                 $this.attachModal();
                 if ($this.settings.animationType === "linear") {

                   var allSlices = $('.' + $this.settings.prefix + '_slice');
                   allSlices.each(function (index) {
                       var _this = $(this);
                       _this.delay($this,settings.sliceDelay + index * linearDelay).animate({
                         'opacity': 1
                         }, $this.settings.animationTime);
                       });

                 } else if ($this.settings.animationType === "diagonal") {
                   var index = 0;
                   setInterval(function () {
                       var levelSlices = $('.' + $this.settings.prefix + '_level_' + index),
                       sliceOpacity = $this.settings.sliceOpacity,
                       animationTime = $this.settings.animationTime;

                       levelSlices.each(function (index) {
                         var $this = $(this);
                         $this.animate({
                           'opacity': sliceOpacity
                           }, animationTime);
                         });
                       index++;
                       }, $this.settings.diagonalDelay);

                 }

               },

attachModal: function () {
               var $this = this,

               $modal = $('<div class="' + $this.settings.prefix + '_modal_container"></div>'),

               modalCSS = $.extend({
                   'position': 'fixed',
                   'left': '50%',
                   'top': '-100%',
                   'padding': '1em',
                   'font-size': '1em',
                   'overflow': 'hidden',
                   'width': $this.settings.modalWidth,
                   'height': $this.settings.modalHeight,
                   'margin-left': '-' + $this.settings.modalWidth / 2 + 'px',
                   'margin-top': '-' + $this.settings.modalHeight / 2 + 'px',
                   'z-index': $this.settings.modalZ
                   }, $this.settings.modalCSS),

               modalHeaderCSS = $.extend({},$this.settings.modalHeaderCSS),
               modalBodyCSS = $.extend({},$this.settings.modalBodyCSS),
               $modalContent = $('<div class="' + $this.settings.prefix + '_modal"></div>'),
               $modalHeader = $('<div class="' + $this.settings.prefix + '_modal_header">' + $this.settings.modalHeader + '</div>'),
               $modalBody = $('<div class="' + $this.settings.prefix + '_modal_header">' + $this.settings.modalBody + '</div>');

               if($this.settings.fonts){
                 $('head').append($this.settings.fonts);
               }

               $modalHeader.css(modalHeaderCSS);
               $modalBody.css(modalBodyCSS);
               $modalContent.append($modalHeader).append($modalBody);

               $modal.append($modalContent);
               $modal.css(modalCSS);
               $this.goodmodalContainer.append($modal);

               $modal.animate({
top: '50%'
}, $this.settings.modalAnimationTime, 'easeOutBounce', function () {
$this.globals.doneAnimating = true;
});

},
attachClose: function () {
               var $this = this;
               $('.' + $this.settings.prefix + '_container').click(function () {
                   if($this.doneAnimating()) {
                   $('.' + $this.settings.prefix + '_container, .' + $this.settings.prefix + '_modal_container').fadeOut(2000, function () {
                     $(this).remove();
                     });
                   }
                   });

             },
attachSlices: function () {
                var $this = this,
                $container = $this.goodfeelingContainer,
                colorScheme = $this.settings.colorScheme,
                sliceWidth = $this.settings.sliceDim,
                sliceHeight = $this.settings.sliceDim,
                numLevel = 0,
                row = 0,
                numX = Math.floor($this.settings.containerWidth / sliceWidth),
                numY = Math.floor($this.settings.containerHeight / sliceHeight),
                sliceCount = numX * numY;

                for (var i = 0; i < sliceCount; i++) {

                  var sliceCSS = {
                    'width': sliceWidth,
                    'height': sliceHeight,
                    'float': 'left',
                    'z-index': $this.settings.sliceZ,
                    'opacity': $this.settings.sliceInitOpacity,
                    'background': colorScheme[Math.floor(Math.random() * colorScheme.length)]
                  }
                  var slice = $('<div class="' + $this.settings.prefix + '_slice' + ' ' + $this.settings.prefix + '_slice_' + i + '"></div>');
                  slice.css(sliceCSS);

                  if (row == 0) {
                    slice.addClass($this.settings.prefix + '_level_' + numLevel);
                  } else {
                    slice.addClass($this.settings.prefix + '_level_' + (numLevel + row));
                    $this.globals.maxLevels = (numLevel + row);
                  }
                  if (numLevel >= numX - 1) {
                    row++;
                    numLevel = 0;
                  } else {
                    numLevel++
                  }

                  $container.append(slice);
                }

                $container.data('doneLoading', true);
              }
}
})(jQuery);
