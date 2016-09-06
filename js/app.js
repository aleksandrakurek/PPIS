/* sticky menu*/

$(document).ready(function() {

var stickyNavTop = $('.menu-sticky').offset().top;

var stickyNav = function(){
var scrollTop = $(window).scrollTop();

if (scrollTop > stickyNavTop) {
    $('.menu-sticky').addClass('sticky');
    ;
} else {
    $('.menu-sticky').removeClass('sticky');
}
};

stickyNav();
$(window).scroll(function() {
  stickyNav();

});


});

/* sticky menu end*/


/*responsive tabs*/

$(document).ready(function() {
  $('#horizontalTab').easyResponsiveTabs({
    type: 'default', //Types: default, vertical, accordion
    width: 'auto', //auto or any width like 600px
    fit: true // 100% fit in a container
  });
});

/* responsive tabs end*/

/*smooth scrolling */

  $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/* smooth scrolling end*/




//
//
// // $(function() {
// //     //Simple filter controls
// //     $('.simplefilter li').click(function() {
// //         $('.simplefilter li').removeClass('active');
// //         $(this).addClass('active');
// //     });
// //     //Multifilter controls
// //     $('.multifilter li').click(function() {
// //         $(this).toggleClass('active');
// //     });
// //     //Shuffle control
// //     $('.shuffle-btn').click(function() {
// //         $('.sort-btn').removeClass('active');
// //     });
// //     //Sort controls
// //     $('.sort-btn').click(function() {
// //         $('.sort-btn').removeClass('active');
// //         $(this).addClass('active');
// //     });
// // });
//
// /*
//  * jQuery EasIng v1.1.2 - http://gsgd.co.uk/sandbox/jquery.easIng.php
//  *
//  * Uses the built In easIng capabilities added In jQuery 1.1
//  * to offer multiple easIng options
//  *
//  * Copyright (c) 2007 George Smith
//  * Licensed under the MIT License:
//  *   http://www.opensource.org/licenses/mit-license.php
//  */
//
// // t: current time, b: begInnIng value, c: change In value, d: duration
//
// jQuery.extend( jQuery.easing,
// {
// 	easeInQuad: function (x, t, b, c, d) {
// 		return c*(t/=d)*t + b;
// 	},
// 	easeOutQuad: function (x, t, b, c, d) {
// 		return -c *(t/=d)*(t-2) + b;
// 	},
// 	easeInOutQuad: function (x, t, b, c, d) {
// 		if ((t/=d/2) < 1) return c/2*t*t + b;
// 		return -c/2 * ((--t)*(t-2) - 1) + b;
// 	},
// 	easeInCubic: function (x, t, b, c, d) {
// 		return c*(t/=d)*t*t + b;
// 	},
// 	easeOutCubic: function (x, t, b, c, d) {
// 		return c*((t=t/d-1)*t*t + 1) + b;
// 	},
// 	easeInOutCubic: function (x, t, b, c, d) {
// 		if ((t/=d/2) < 1) return c/2*t*t*t + b;
// 		return c/2*((t-=2)*t*t + 2) + b;
// 	},
// 	easeInQuart: function (x, t, b, c, d) {
// 		return c*(t/=d)*t*t*t + b;
// 	},
// 	easeOutQuart: function (x, t, b, c, d) {
// 		return -c * ((t=t/d-1)*t*t*t - 1) + b;
// 	},
// 	easeInOutQuart: function (x, t, b, c, d) {
// 		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
// 		return -c/2 * ((t-=2)*t*t*t - 2) + b;
// 	},
// 	easeInQuint: function (x, t, b, c, d) {
// 		return c*(t/=d)*t*t*t*t + b;
// 	},
// 	easeOutQuint: function (x, t, b, c, d) {
// 		return c*((t=t/d-1)*t*t*t*t + 1) + b;
// 	},
// 	easeInOutQuint: function (x, t, b, c, d) {
// 		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
// 		return c/2*((t-=2)*t*t*t*t + 2) + b;
// 	},
// 	easeInSine: function (x, t, b, c, d) {
// 		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
// 	},
// 	easeOutSine: function (x, t, b, c, d) {
// 		return c * Math.sin(t/d * (Math.PI/2)) + b;
// 	},
// 	easeInOutSine: function (x, t, b, c, d) {
// 		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
// 	},
// 	easeInExpo: function (x, t, b, c, d) {
// 		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
// 	},
// 	easeOutExpo: function (x, t, b, c, d) {
// 		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
// 	},
// 	easeInOutExpo: function (x, t, b, c, d) {
// 		if (t==0) return b;
// 		if (t==d) return b+c;
// 		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
// 		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
// 	},
// 	easeInCirc: function (x, t, b, c, d) {
// 		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
// 	},
// 	easeOutCirc: function (x, t, b, c, d) {
// 		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
// 	},
// 	easeInOutCirc: function (x, t, b, c, d) {
// 		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
// 		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
// 	},
// 	easeInElastic: function (x, t, b, c, d) {
// 		var s=1.70158;var p=0;var a=c;
// 		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
// 		if (a < Math.abs(c)) { a=c; var s=p/4; }
// 		else var s = p/(2*Math.PI) * Math.asin (c/a);
// 		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
// 	},
// 	easeOutElastic: function (x, t, b, c, d) {
// 		var s=1.70158;var p=0;var a=c;
// 		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
// 		if (a < Math.abs(c)) { a=c; var s=p/4; }
// 		else var s = p/(2*Math.PI) * Math.asin (c/a);
// 		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
// 	},
// 	easeInOutElastic: function (x, t, b, c, d) {
// 		var s=1.70158;var p=0;var a=c;
// 		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
// 		if (a < Math.abs(c)) { a=c; var s=p/4; }
// 		else var s = p/(2*Math.PI) * Math.asin (c/a);
// 		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
// 		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
// 	},
// 	easeInBack: function (x, t, b, c, d, s) {
// 		if (s == undefined) s = 1.70158;
// 		return c*(t/=d)*t*((s+1)*t - s) + b;
// 	},
// 	easeOutBack: function (x, t, b, c, d, s) {
// 		if (s == undefined) s = 1.70158;
// 		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
// 	},
// 	easeInOutBack: function (x, t, b, c, d, s) {
// 		if (s == undefined) s = 1.70158;
// 		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
// 		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
// 	},
// 	easeInBounce: function (x, t, b, c, d) {
// 		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
// 	},
// 	easeOutBounce: function (x, t, b, c, d) {
// 		if ((t/=d) < (1/2.75)) {
// 			return c*(7.5625*t*t) + b;
// 		} else if (t < (2/2.75)) {
// 			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
// 		} else if (t < (2.5/2.75)) {
// 			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
// 		} else {
// 			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
// 		}
// 	},
// 	easeInOutBounce: function (x, t, b, c, d) {
// 		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
// 		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
// 	}
// });
//
//
// // Easy Responsive Tabs Plugin
// // Author: Samson.Onna <Email : samson3d@gmail.com>
// (function ($) {
//     $.fn.extend({
//         easyResponsiveTabs: function (options) {
//             //Set the default values, use comma to separate the settings, example:
//             var defaults = {
//                 type: 'default', //default, vertical, accordion;
//                 width: 'auto',
//                 fit: true
//             }
//             //Variables
//             var options = $.extend(defaults, options);
//             var opt = options, jtype = opt.type, jfit = opt.fit, jwidth = opt.width, vtabs = 'vertical', accord = 'accordion';
//
//             //Main function
//             this.each(function () {
//                 var $respTabs = $(this);
//                 $respTabs.find('ul.resp-tabs-list li').addClass('resp-tab-item');
//                 $respTabs.css({
//                     'display': 'block',
//                     'width': jwidth
//                 });
//
//                 $respTabs.find('.resp-tabs-container > div').addClass('resp-tab-content');
//                 jtab_options();
//                 //Properties Function
//                 function jtab_options() {
//                     if (jtype == vtabs) {
//                         $respTabs.addClass('resp-vtabs');
//                     }
//                     if (jfit == true) {
//                         $respTabs.css({ width: '100%', margin: '0px' });
//                     }
//                     if (jtype == accord) {
//                         $respTabs.addClass('resp-easy-accordion');
//                         $respTabs.find('.resp-tabs-list').css('display', 'none');
//                     }
//                 }
//
//                 //Assigning the h2 markup
//                 var $tabItemh2;
//                 $respTabs.find('.resp-tab-content').before("<h2 class='resp-accordion' role='tab'><span class='resp-arrow'></span></h2>");
//
//                 var itemCount = 0;
//                 $respTabs.find('.resp-accordion').each(function () {
//                     $tabItemh2 = $(this);
//                     var innertext = $respTabs.find('.resp-tab-item:eq(' + itemCount + ')').text();
//                     $respTabs.find('.resp-accordion:eq(' + itemCount + ')').append(innertext);
//                     $tabItemh2.attr('aria-controls', 'tab_item-' + (itemCount));
//                     itemCount++;
//                 });
//
//                 //Assigning the 'aria-controls' to Tab items
//                 var count = 0,
//                     $tabContent;
//                 $respTabs.find('.resp-tab-item').each(function () {
//                     $tabItem = $(this);
//                     $tabItem.attr('aria-controls', 'tab_item-' + (count));
//                     $tabItem.attr('role', 'tab');
//
//                     //First active tab
//                     $respTabs.find('.resp-tab-item').first().addClass('resp-tab-active');
//                     $respTabs.find('.resp-accordion').first().addClass('resp-tab-active');
//                     $respTabs.find('.resp-tab-content').first().addClass('resp-tab-content-active').attr('style', 'display:block');
//
//                     //Assigning the 'aria-labelledby' attr to tab-content
//                     var tabcount = 0;
//                     $respTabs.find('.resp-tab-content').each(function () {
//                         $tabContent = $(this);
//                         $tabContent.attr('aria-labelledby', 'tab_item-' + (tabcount));
//                         tabcount++;
//                     });
//                     count++;
//                 });
//
//                 //Tab Click action function
//                 $respTabs.find("[role=tab]").each(function () {
//                     var $currentTab = $(this);
//                     $currentTab.click(function () {
//
//                         var $tabAria = $currentTab.attr('aria-controls');
//
//                         if ($currentTab.hasClass('resp-accordion') && $currentTab.hasClass('resp-tab-active')) {
//                             $respTabs.find('.resp-tab-content-active').slideUp('', function () { $(this).addClass('resp-accordion-closed'); });
//                             $currentTab.removeClass('resp-tab-active');
//                             return false;
//                         }
//                         if (!$currentTab.hasClass('resp-tab-active') && $currentTab.hasClass('resp-accordion')) {
//                             $respTabs.find('.resp-tab-active').removeClass('resp-tab-active');
//                             $respTabs.find('.resp-tab-content-active').slideUp().removeClass('resp-tab-content-active resp-accordion-closed');
//                             $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active');
//
//                             $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + ']').slideDown().addClass('resp-tab-content-active');
//                         } else {
//                             $respTabs.find('.resp-tab-active').removeClass('resp-tab-active');
//                             $respTabs.find('.resp-tab-content-active').removeAttr('style').removeClass('resp-tab-content-active').removeClass('resp-accordion-closed');
//                             $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active');
//                             $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + ']').addClass('resp-tab-content-active').attr('style', 'display:block');
//                         }
//                     });
//                     //Window resize function
//                     $(window).resize(function () {
//                         $respTabs.find('.resp-accordion-closed').removeAttr('style');
//                     });
//                 });
//             });
//         }
//     });
// })(jQuery);
//
// /**
// * Filterizr is a jQuery plugin that sorts, shuffles and applies stunning filters over
// * responsive galleries using CSS3 transitions and custom CSS effects.
// *
// * @author Yiotis Kaltsikis
// * @see {@link http://yiotis.net/filterizr}
// * @version 1.2.1
// * @license MIT License
// */
//
// (function(global, $) {
//
//     'use strict';
//
//     //Make sure jQuery exists
//     if (!$) throw new Error('Filterizr requires jQuery to work.');
//
//     /**
//     * Modified version of Jake Gordon's Bin Packing algorithm used for Filterizr's 'packed' layout
//     * @see {@link https://github.com/jakesgordon/bin-packing}
//     */
//     var Packer = function(w) {
//         this.init(w);
//     };
//
//     Packer.prototype = {
//         init: function(w) {
//             this.root = { x: 0, y: 0, w: w };
//         },
//         fit: function(blocks) {
//             var n, node, block, len = blocks.length;
//             var h = len > 0 ? blocks[0].h : 0;
//             this.root.h = h;
//             for (n = 0; n < len ; n++) {
//                 block = blocks[n];
//                 if ((node = this.findNode(this.root, block.w, block.h)))
//                 block.fit = this.splitNode(node, block.w, block.h);
//                 else
//                 block.fit = this.growDown(block.w, block.h);
//             }
//         },
//         findNode: function(root, w, h) {
//             if (root.used)
//             return this.findNode(root.right, w, h) || this.findNode(root.down, w, h);
//             else if ((w <= root.w) && (h <= root.h))
//             return root;
//             else
//             return null;
//         },
//         splitNode: function(node, w, h) {
//             node.used = true;
//             node.down  = { x: node.x,     y: node.y + h, w: node.w,     h: node.h - h };
//             node.right = { x: node.x + w, y: node.y,     w: node.w - w, h: h          };
//             return node;
//         },
//         growDown: function(w, h) {
//             var node;
//             this.root = {
//                 used: true,
//                 x: 0,
//                 y: 0,
//                 w: this.root.w,
//                 h: this.root.h + h,
//                 down:  { x: 0, y: this.root.h, w: this.root.w, h: h },
//                 right: this.root
//             };
//             if ((node = this.findNode(this.root, w, h)))
//             return this.splitNode(node, w, h);
//             else
//             return null;
//         }
//     };
//
//     /**
//     * Only Filterizr method extracted on jQuery.fn.
//     * Instantiates a new Filterizr or calls any of the public Filterizr methods.
//     * @return {jQuery} this - to facilitate jQuery method chaining.
//     */
//     $.fn.filterizr = function() {
//         var self = this, args = arguments;
//         //Create the Filterizr obj as an internal private property on the current object
//         //to serve as a private namespace
//         if (!self._fltr) {
//             self._fltr = $.fn.filterizr.prototype.init(self.selector, (typeof args[0] === 'object' ? args[0] : undefined));
//         }
//         //Call all public Filterizr methods through the private Filterizr object
//         if (typeof args[0] === 'string') {
//             if (args[0].lastIndexOf('_') > -1) throw new Error('Filterizr error: You cannot call private methods');
//             if (typeof self._fltr[args[0]] === 'function') {
//                 self._fltr[args[0]](args[1], args[2]);
//             }
//             else throw new Error('Filterizr error: There is no such function');
//         }
//         return self;
//     };
//
//     /**
//     * Filterizr prototype
//     */
//     $.fn.filterizr.prototype = {
//
//         /**
//         * Filterizr constructor.
//         * @param {string} [selector] - the selector of your container.
//         * @param {Object} [options] - user options to override defaults.
//         * @constructor
//         */
//         init: function(selector, options) {
//             var self = $(selector).extend($.fn.filterizr.prototype);
//             //Default options
//             self.options = {
//                 animationDuration: 0.5,
//                 callbacks: {
//                     onFilteringStart: function() { },
//                     onFilteringEnd  : function() { }
//                 },
//                 delay: 0,
//                 delayMode: 'progressive',
//                 easing: 'ease-out',
//                 filter: 'all',
//                 filterOutCss: {
//                     'opacity': 0,
//                     'transform': 'scale(0.5)'
//                 },
//                 filterInCss: {
//                     'opacity': 1,
//                     'transform': 'scale(1)'
//                 },
//                 layout: 'sameSize',
//                 selector: (typeof selector === 'string') ? selector : '.filtr-container',
//                 setupControls: true
//             };
//             //No arguments constructor
//             if (arguments.length === 0) {
//                 selector = self.options.selector;
//                 options  = self.options;
//             }
//             //One argument constructor (only options)
//             if (arguments.length === 1 && typeof arguments[0] === 'object') options = arguments[0];
//             //If options argument provided, override defaults
//             if (options) {
//                 self.setOptions(options);
//             }
//             //Private properties
//             self.css({ //Cache reference to container as jQuery obj and init its CSS
//                 'padding' : 0,
//                 'position': 'relative'
//             });
//             self._lastCategory = 0; //Highest value in data-category of .filtr-items
//             self._isAnimating  = false;
//             //.filtr-item collections
//             self._mainArray   = self._getFiltrItems();
//             self._subArrays   = self._makeSubarrays();
//             self._activeArray = self._getCollectionByFilter(self.options.filter);
//             //Used for multiple category filtering
//             self._toggledCategories = { };
//             //Used for search feature
//             self._typedText = $('input[data-search]').val() || '';
//             //Generate unique ID for resize events
//             self._uID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//                 var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
//                 return v.toString(16);
//             });
//             //Set up Filterizr events
//             self._setupEvents();
//             //Set up standard Filterizr controls (for multiple Filterizrs in your scene, set to false)
//             if (self.options.setupControls) self._setupControls();
//             //Start Filterizr!
//             self.filter(self.options.filter);
//             return self;
//         },
//
//         /***********************************
//         * Public methods
//         ***********************************/
//         /**
//         * Filters the items
//         * @param {number} targetFilter - the applied filter towards which items transition
//         */
//         filter: function(targetFilter) {
//             var self   = this,
//                 target = self._getCollectionByFilter(targetFilter);
//
//             self.options.filter = targetFilter;
//             self.trigger('filteringStart');
//             //Filter items
//             self._handleFiltering(target);
//             //Apply search filter on top if activated
//             if (self._isSearchActivated()) self.search(self._typedText);
//         },
//
//         /**
//         * Toggles filters on/off and renders the new collection
//         * @param {number} toggledFilter - the filter to toggle
//         */
//         toggleFilter: function(toggledFilter) {
//             var self   = this,
//                 target = [], i = 0;
//
//             self.trigger('filteringStart');
//             //Toggle the toggledFilter in the active categories
//             if (!self._toggledCategories[toggledFilter])
//                 self._toggledCategories[toggledFilter] = true;
//             else
//                 delete self._toggledCategories[toggledFilter];
//
//             //If a filter is toggled on then display only items belonging to that category
//             if (self._multifilterModeOn()) {
//                 target = self._makeMultifilterArray();
//                 //Filter items
//                 self._handleFiltering(target);
//                 //Apply search filter on top if activated
//                 if (self._isSearchActivated()) self.search(self._typedText);
//             }
//             //If all filters toggled off then display unfiltered gallery
//             else {
//                 //Filter items
//                 self.filter('all');
//                 //Apply search filter on top if activated
//                 if (self._isSearchActivated()) self.search(self._typedText);
//             }
//         },
//
//         /**
//         * Searches the contents of .filtr-item elements, filters them and renders the results
//         * @param {string} text to search in contents of .filtr-item elements
//         */
//         search: function(text) {
//             var self   = this,
//                 //get active category
//                 array  = self._multifilterModeOn() ?
//                             self._makeMultifilterArray() :
//                             self._getCollectionByFilter(self.options.filter),
//                 target = [], i = 0;
//
//             if (self._isSearchActivated()) {
//                 for (i = 0; i < array.length; i++) {
//                     //Check if the text typed in the textbox is contained in the .filtr-item element
//                     //and add it to the target array
//                     var containsText = array[i].text().toLowerCase().indexOf(text.toLowerCase()) > -1;
//                     if (containsText) {
//                         target.push(array[i]);
//                     }
//                 }
//             }
//             //Show the results
//             if (target.length > 0) {
//                 self._handleFiltering(target);
//             }
//             //If there are no results
//             else {
//                 //and search is activated, show blank
//                 if (self._isSearchActivated()) {
//                     for (i = 0; i < self._activeArray.length; i++) {
//                         self._activeArray[i]._filterOut();
//                     }
//                 }
//                 //if search is not activated display gallery with last applied filter
//                 else {
//                     self._handleFiltering(array);
//                 }
//             }
//         },
//
//         /**
//         * Shuffles the active collection and rearranges it on screen
//         */
//         shuffle: function() {
//             var self = this;
//
//             self._mainArray = self._fisherYatesShuffle(self._mainArray);
//             self._subArrays = self._makeSubarrays();
//
//             var target = self._multifilterModeOn() ?
//                             self._makeMultifilterArray() :
//                             self._getCollectionByFilter(self.options.filter);
//
//             if (self._isSearchActivated())
//                 self.search(self._typedText);
//             else
//                 self._placeItems(target);
//         },
//
//         /**
//         * Sorts the active collection and rearranges it on screen.
//         * @param {string} [attr] - attr based on which to sort (default: 'domIndex' / possible: 'domIndex', 'sortData', 'w', 'h').
//         * @param {string} [sortOrder] - asc/desc (default: 'asc').
//         */
//         sort: function(attr, sortOrder) {
//             var self  = this;
//             //Set defaults
//             attr 	  = attr      || 'domIndex';
//             sortOrder = sortOrder || 'asc';
//
//             //Register sort attr on all elements if it is a user-defined data-attribute
//             var isUserAttr = attr !== 'domIndex' && attr !== 'sortData' && attr !== 'w' && attr!== 'h';
//             if (isUserAttr) {
//                 for (var i = 0; i < self._mainArray.length; i++) {
//                     self._mainArray[i][attr] = self._mainArray[i].data(attr);
//                 }
//             }
//             //Sort items
//             self._mainArray.sort(self._comparator(attr, sortOrder));
//             self._subArrays = self._makeSubarrays();
//             //Place sorted collection to new positions
//             var target = self._multifilterModeOn() ?
//                             self._makeMultifilterArray() :
//                             self._getCollectionByFilter(self.options.filter);
//
//             if (self._isSearchActivated())
//                 self.search(self._typedText);
//             else
//                 self._placeItems(target);
//         },
//
//         /**
//         * Overrides the default options with the user-provided ones.
//         * @param {object} options - the user-provided options to override defaults.
//         */
//         setOptions: function(options) {
//             var self = this, i = 0;
//             //Override options
//             for (var prop in options) {
//                 self.options[prop] = options[prop];
//             }
//             //If the user tries to override animationDuration, easing, delay or delayMode
//             if (self._mainArray && (options.animationDuration || options.delay || options.easing || options.delayMode)) {
//                 for (i = 0; i < self._mainArray.length; i++) {
//                     self._mainArray[i].css('transition', 'all ' + self.options.animationDuration + 's ' +  self.options.easing + ' ' + self._mainArray[i]._calcDelay() + 'ms');
//                 }
//             }
//             //If the user has not defined a transform property in their CSS, add it
//             //while overriding, including translates for movement
//             if (!self.options.filterInCss.transform)  self.options.filterInCss.transform  = 'translate3d(0,0,0)';
//             if (!self.options.filterOutCss.transform) self.options.filterOutCss.transform = 'translate3d(0,0,0)';
//         },
//
//         /***********************************
//         * Private & helper methods
//         ***********************************/
//         /**
//         * Finds all .filtr-item elements in the .filtr-container and sets them up before returning them in an array.
//         * @return {Object[]}  all .filtr-item elements contained in Filterizr's container.
//         * @private
//         */
//         _getFiltrItems: function() {
//             var self       = this,
//             filtrItems = $(self.find('.filtr-item')),
//             itemsArray = [];
//
//             $.each(filtrItems, function(i, e) {
//                 //Set item up as Filtr object & push to array
//                 var item = $(e).extend(FiltrItemProto)._init(i, self);
//                 itemsArray.push(item);
//             });
//             return itemsArray;
//         },
//
//         /**
//         * Divide .filtr-item elements into sub-arrays based on data-category attribute.
//         * @return {Object[Object[self._lastCategory]]} Array of arrays including items grouped by data-category.
//         * @private
//         */
//         _makeSubarrays: function() {
//             var self = this,
//             subArrays = [];
//
//             for (var i = 0; i < self._lastCategory; i++) subArrays.push([]);
//
//             //Populate the sub-arrays
//             for (i = 0; i < self._mainArray.length; i++) {
//                 //Multiple categories scenario
//                 if (typeof self._mainArray[i]._category === 'object') {
//                     for (var p in self._mainArray[i]._category)
//                         subArrays[self._mainArray[i]._category[p] - 1].push(self._mainArray[i]);
//                 }
//                 //Single category
//                 else subArrays[self._mainArray[i]._category - 1].push(self._mainArray[i]);
//             }
//             return subArrays;
//         },
//
//         /**
//         * Make a .filtr-item array based on the activated filters
//         * @return {Object[]} array consisting of the .filtr-item elements belonging to active filters
//         * @private
//         */
//         _makeMultifilterArray: function() {
//             var self   = this,
//                 target = [], addedMap = {};
//
//             for (var i = 0; i < self._mainArray.length; i++) {
//                 //If the item belongs to multiple categories
//                 var item = self._mainArray[i],
//                     belongsToCategory = false,
//                     isUnique = item.domIndex in addedMap === false;
//                 //Check if item belongs to categories whose filters are toggled on
//                 if (Array.isArray(item._category)) {
//                     for (var x = 0; x < item._category.length; x++) {
//                         if (item._category[x] in self._toggledCategories) {
//                             belongsToCategory = true;
//                             break;
//                         }
//                     }
//                 }
//                 else {
//                     if (item._category in self._toggledCategories) belongsToCategory = true;
//                 }
//                 //If the item is not already visible and belongs to a category
//                 //of the toggled on filters push it to target collection
//                 if (isUnique && belongsToCategory) {
//                     addedMap[item.domIndex] = true;
//                     target.push(item);
//                 }
//             }
//             return target;
//         },
//
//         /**
//         * Detect and set up preset controls.
//         * @private
//         */
//         _setupControls: function() {
//             var self = this;
//             //Filter controls
//             $('*[data-filter]').click(function() {
//                 var targetFilter = $(this).data('filter');
//                 //Exit case
//                 if (self.options.filter === targetFilter) return;
//                 self.filter(targetFilter);
//             });
//             //Multiple filter controls
//             $('*[data-multifilter]').click(function() {
//                 var targetFilter = $(this).data('multifilter');
//                 if (targetFilter === 'all') {
//                     self._toggledCategories = { };
//                     self.filter('all');
//                 }
//                 else {
//                     self.toggleFilter(targetFilter);
//                 }
//             });
//             //Shuffle control
//             $('*[data-shuffle]').click(function() {
//                 self.shuffle();
//             });
//             //Sort controls
//             $('*[data-sortAsc]').click(function() {
//                 var sortAttr = $('*[data-sortOrder]').val();
//                 self.sort(sortAttr, 'asc');
//             });
//             $('*[data-sortDesc]').click(function() {
//                 var sortAttr = $('*[data-sortOrder]').val();
//                 self.sort(sortAttr, 'desc');
//             });
//             //Search control
//             $('input[data-search]').keyup(function() {
//                 self._typedText = $(this).val();
//                 self._delayEvent(function() {
//                     self.search(self._typedText);
//                 }, 250, self._uID);
//             });
//         },
//
//         /**
//         * Set up window and Filterizr events.
//         * @private
//         */
//         _setupEvents: function() {
//             var self = this;
//             //Window resize event
//             $(global).resize(function() {
//                 self._delayEvent(function() {
//                     self.trigger('resizeFiltrContainer');
//                 }, 250, self._uID);
//             });
//             //Filterizr events
//             self
//             //Container resize event
//             .on('resizeFiltrContainer', function() {
//                 if (self._multifilterModeOn())
//                     self.toggleFilter();
//                 else
//                     self.filter(self.options.filter);
//             })
//             //onFilteringStart event
//             .on('filteringStart', function() {
//                 self.options.callbacks.onFilteringStart();
//             })
//             //onFilteringEnd event
//             .on('filteringEnd', function() {
//                 self.options.callbacks.onFilteringEnd();
//             });
//         },
//
//         /**
//         * Calculates the final positions of items being filtered in, updates the height of .filtr-container.
//         * @return {Object[]} array of future item positions.
//         * @private
//         */
//         _calcItemPositions: function() {
//             var self  = this,
//             array = self._activeArray,
//             //Container data
//             containerHeight = 0,
//             cols = Math.round(self.width() / self.find('.filtr-item').outerWidth()),
//             rows = 0,
//             //Item data
//             itemWidth  = array[0].outerWidth(),
//             itemHeight = 0,
//             //Position calculation vars
//             left = 0, top = 0,
//             //Loop vars
//             i = 0, x = 0,
//             //Array of positions to return
//             posArray = [];
//
//             //Layout for items of varying sizes
//             if (self.options.layout === 'packed') {
//                 //Cache current item width/height
//                 $.each(self._activeArray, function(i, e) {
//                     e._updateDimensions();
//                 });
//                 //Instantiate new Packer, set up grid
//                 var packer = new Packer(self.outerWidth());
//                 packer.fit(self._activeArray);
//                 for (i = 0; i < array.length; i++) {
//                     posArray.push({
//                         left: array[i].fit.x,
//                         top: array[i].fit.y
//                     });
//                 }
//                 containerHeight = packer.root.h;
//             }
//             //Horizontal layout
//             if (self.options.layout === 'horizontal') {
//                 rows = 1;
//                 for (i = 1; i <= array.length; i++) {
//                     itemWidth = array[i - 1].outerWidth();
//                     itemHeight = array[i - 1].outerHeight();
//                     posArray.push({
//                         left: left,
//                         top: top
//                     });
//                     left += itemWidth;
//                     if (containerHeight < itemHeight) containerHeight = itemHeight;
//                 }
//             }
//             //Vertical layout
//             else if (self.options.layout === 'vertical') {
//                 for (i = 1; i <= array.length; i++) {
//                     itemHeight = array[i - 1].outerHeight();
//                     posArray.push({
//                         left: left,
//                         top: top
//                     });
//                     top += itemHeight;
//                 }
//                 containerHeight = top;
//             }
//             //Layout of items for same height and varying width
//             else if (self.options.layout === 'sameHeight') {
//                 rows = 1;
//                 var rowWidth = self.outerWidth();
//                 for (i = 1; i <= array.length; i++) {
//                     itemWidth = array[i - 1].width();
//                     var itemOuterWidth = array[i - 1].outerWidth(),
//                     nextItemWidth = 0;
//                     if (array[i]) nextItemWidth = array[i].width();
//                     posArray.push({
//                         left: left,
//                         top: top
//                     });
//                     x = left + itemWidth + nextItemWidth;
//                     if (x > rowWidth) {
//                         x 	 = 0;
//                         left = 0;
//                         top  += array[0].outerHeight();
//                         rows++;
//                     }
//                     else left += itemOuterWidth;
//                 }
//                 containerHeight = rows * array[0].outerHeight();
//             }
//             //Layout for items of same width and varying height
//             else if (self.options.layout === 'sameWidth') {
//                 //Get positions
//                 for (i = 1; i <= array.length; i++) {
//                     posArray.push({
//                         left: left,
//                         top: top
//                     });
//                     if (i % cols === 0) rows++;
//                     left += itemWidth;
//                     top = 0;
//                     if (rows > 0) {
//                         x = rows;
//                         while (x > 0) {
//                             top += array[i - (cols * x)].outerHeight();
//                             x--;
//                         }
//                     }
//                     if (i % cols === 0) left = 0;
//                 }
//                 //Calculate containerHeight
//                 for (i = 0; i < cols; i++) {
//                     var columnHeight = 0, index = i;
//                     while(array[index]) {
//                         columnHeight += array[index].outerHeight();
//                         index += cols;
//                     }
//                     if (columnHeight > containerHeight) {
//                         containerHeight = columnHeight;
//                         columnHeight = 0;
//                     }
//                     else
//                     columnHeight = 0;
//                 }
//             }
//             //Layout for items of exactly same size
//             else if (self.options.layout === 'sameSize') {
//                 for (i = 1; i <= array.length; i++) {
//                     //Push first point at (left: 0, top: 0)
//                     posArray.push({
//                         left: left,
//                         top: top
//                     });
//                     //Set left and top properties for next point before next iteration
//                     left += itemWidth;
//                     //On row change calc new top and reset left
//                     if (i % cols === 0) {
//                         top += array[0].outerHeight();
//                         left = 0;
//                     }
//                 }
//                 rows = Math.ceil(array.length / cols);
//                 containerHeight = rows * array[0].outerHeight();
//             }
//             //Update the height of .filtr-container based on new positions
//             self.css('height', containerHeight);
//             return posArray;
//         },
//
//         /**
//         * Handles filtering in/out and reposition items when transition between categories
//         * @param {Object[]} the target array towards which to filter
//         * @private
//         */
//         _handleFiltering: function(target) {
//             var self = this,
//                 toFilterOut = self._getArrayOfUniqueItems(self._activeArray, target);
//             //Minimize all .filtr-item elements that are not the same between categories
//             for (var i = 0; i < toFilterOut.length; i++) {
//                 toFilterOut[i]._filterOut();
//             }
//             self._activeArray = target;
//             //Reposition same items and filter in new
//             self._placeItems(target);
//         },
//
//         /**
//         * Determines if the user is using data-multifilter controls or simple data-filter controls
//         * @return {boolean} indicating whether multiple filter mode is on
//         * @private
//         */
//         _multifilterModeOn: function() {
//             var self = this;
//             return Object.keys(self._toggledCategories).length > 0;
//         },
//
//         /**
//         * Determines if the user has something typed in the search box
//         * @return {boolean} indicating whether the user has searched
//         * @private
//         */
//         _isSearchActivated: function() {
//             var self = this;
//             return self._typedText.length > 0;
//         },
//
//         /**
//         * Places .filtr-item elements on the grid positions
//         * @param {Object[]} arr - an array consisting of .filtr-item elements
//         * @private
//         */
//         _placeItems: function(arr) {
//             var self = this;
//             //Tag gallery state as animating
//             self._isAnimating = true;
//             //Recalculate positions and filter in items
//             self._itemPositions = self._calcItemPositions();
//             for (var i = 0; i < arr.length; i++) {
//                 arr[i]._filterIn(self._itemPositions[i]);
//             }
//         },
//
//         /**
//         * Returns item collection based on a certain filter
//         * @param {string|number} filter of category to return
//         * @return {Object[]} one of the item collections based on filter
//         * @private
//         */
//         _getCollectionByFilter: function(filter) {
//             var self = this;
//             return filter === 'all' ? self._mainArray : self._subArrays[filter - 1];
//         },
//
//         /**
//         * Used to make deep copies of the predefined filters
//         * in the options for the filterIn/Out methods of items.
//         * @see _filterIn and _filterOut methods in FiltrItemProto.
//         * @param {Object} obj - is the source object to make a deep copy from.
//         * @return {Object} Deep copy of the obj param.
//         * @private
//         */
//         _makeDeepCopy: function(obj) {
//             var r = {};
//             for (var p in obj) r[p] = obj[p];
//             return r;
//         },
//
//         /**
//         * Comparator factory used to produce camparers for sorting.
//         * @see Filterizr.prototype.sort.
//         * @param {string} prop - property based on which to sort ('domIndex', 'sortData', 'w', 'h')
//         * @param {string} sortOrder - 'asc'/'desc'
//         * @return {function} comparer which takes arguments
//         * @private
//         */
//         _comparator: function(prop, sortOrder) {
//             return function(a, b) {
//                 if (sortOrder === 'asc') {
//                     if (a[prop] < b[prop])
//                     return -1;
//                     else if (a[prop] > b[prop])
//                     return 1;
//                     else
//                     return 0;
//                 }
//                 else if (sortOrder === 'desc') {
//                     if (b[prop] < a[prop])
//                     return -1;
//                     else if (b[prop] > a[prop])
//                     return 1;
//                     else
//                     return 0;
//                 }
//             };
//         },
//
//         /**
//         * Modified version of Jeffery To's array intersection method
//         * @see {@link http://www.falsepositives.com/index.php/2009/12/01/javascript-function-to-get-the-intersect-of-2-arrays/}
//         * @return {Object[]} a disjoint array containing the elements of the first array not found in the second
//         * @private
//         */
//         _getArrayOfUniqueItems: function(arr1, arr2) {
//             var r = [], o = {}, l = arr2.length, i, v;
//             for (i = 0; i < l; i++) {
//                 o[arr2[i].domIndex] = true;
//             }
//             l = arr1.length;
//             for (i = 0; i < l; i++) {
//                 v = arr1[i];
//                 if (!(v.domIndex in o)) {
//                     r.push(v);
//                 }
//             }
//             return r;
//         },
//
//         /**
//         * Brahn's take on CMS's solution to calling the window.resize event at set
//         * intervals in multiple places in the code using a Java-like UUID with a regexp
//         * @see {@link http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed}
//         * @return {function} which calls the callback or just clears the timer
//         * @private
//         */
//         _delayEvent: (function () {
//             var self = this, timers = {};
//             return function (callback, ms, uniqueId) {
//                 if (uniqueId === null) {
//                     throw Error("UniqueID needed");
//                 }
//                 if (timers[uniqueId]) {
//                     clearTimeout (timers[uniqueId]);
//                 }
//                 timers[uniqueId] = setTimeout(callback, ms);
//             };
//         })(),
//
//         /**
//         * Fisher-Yates array shuffling algorithm implemented for JavaScript.
//         * @return {Object[]} shuffled array.
//         * @private
//         */
//         _fisherYatesShuffle: function shuffle(array) {
//             var m = array.length, t, i;
//             // While there remain elements to shuffle…
//             while (m) {
//                 // Pick a remaining element…
//                 i = Math.floor(Math.random() * m--);
//                 // And swap it with the current element.
//                 t = array[m];
//                 array[m] = array[i];
//                 array[i] = t;
//             }
//             return array;
//         }
//     };
//
//     /**
//     * FiltrItem Prototype
//     */
//     var FiltrItemProto = {
//
//         /**
//         * Transforms a jQuery item with .filtr-item class into a FiltrItem.
//         * @param {number} index - initial item order based on position in DOM.
//         * @param {Filterizr} parent - reference to Filterizr container containing this Filtr Item.
//         * @return {jQuery} this - to facilitate method chaining.
//         * @constructor
//         */
//         _init: function(index, parent) {
//             var self = this, delay = 0;
//             //Private item properties
//             self._parent   = parent;			  //Ref to parent Filterizr object
//             self._category = self._getCategory(); //data-category values
//             self._lastPos  = {};				  //Used for animations
//             //Public properties - used for sorting
//             self.domIndex = index;
//             self.sortData = self.data('sort');
//             //Item Dimensions used for Bin Packing algorithm (packed layout) and sorting.
//             self.w = 0;
//             self.h = 0;
//             //self states
//             self._isFilteredOut = true;
//             self._filteringOut  = false;
//             self._filteringIn   = false;
//             //Determine delay & set initial item styles
//             self.css(parent.options.filterOutCss)
//             .css({
//                 '-webkit-backface-visibility': 'hidden',
//                 'perspective': '1000px',
//                 '-webkit-perspective': '1000px',
//                 '-webkit-transform-style': 'preserve-3d',
//                 'position': 'absolute',
//                 'transition': 'all ' + parent.options.animationDuration + 's ' + parent.options.easing + ' ' + self._calcDelay() + 'ms'
//             });
//             //Events
//             self.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
//                 self._onTransitionEnd();
//             });
//             return self;
//         },
//
//         /**
//         * Updates the dimensions (width/height) of the item.
//         * @private
//         */
//         _updateDimensions: function() {
//             var self = this;
//             self.w = self.outerWidth();
//             self.h = self.outerHeight();
//         },
//
//         /**
//         * Calculates and returns the value of delay to apply to transition-delay in ms, depending on delayMode
//         * @return {number} value to apply to transition-delay in ms.
//         * @private
//         */
//         _calcDelay: function() {
//             var self = this, r = 0;
//             if (self._parent.options.delayMode === 'progressive')
//             r = self._parent.options.delay * self.domIndex;
//             else
//             if (self.domIndex % 2 === 0) r = self._parent.options.delay;
//             return r;
//         },
//
//         /**
//         * Determines which categories this items belongs to and updates the _lastCategory prop of Filterizr.
//         * @throws {InvalidArgumentException} data-category of .filtr-item elements must be integer or string of integers delimited by ', '
//         * @return {Object[]|number} the categories this item belongs to.
//         * @private
//         */
//         _getCategory: function() {
//             var self = this,
//             ret  = self.data('category');
//             //If more than one category provided
//             if (typeof ret === 'string') {
//                 ret = ret.split(', ');
//                 for (var n in ret) {
//                     // Error checking: make sure data-category has an integer as its value
//                     if (isNaN(parseInt(ret[n]))) {
//                         throw new Error('Filterizr: the value of data-category must be a number, starting from value 1 and increasing.');
//                     }
//                     if (ret[n] > self._parent._lastCategory) {
//                         self._parent._lastCategory = ret[n];
//                     }
//                 }
//             }
//             else {
//                 if (ret > self._parent._lastCategory)
//                     self._parent._lastCategory = ret;
//             }
//             return ret;
//         },
//
//         /**
//         * Handles the transitionEnd event.
//         * @private
//         */
//         _onTransitionEnd: function() {
//             var self = this;
//             //finished filtering out
//             if (self._filteringOut) {
//                 $(self).addClass('filteredOut');
//                 self._isFilteredOut = true;
//                 self._filteringOut  = false;
//             }
//             //finished filtering in
//             else if (self._filteringIn) {
//                 self._isFilteredOut = false;
//                 self._filteringIn 	= false;
//             }
//             //if animating trigger filteringEnd event once on parent
//             if (self._parent._isAnimating) {
//                 self._parent.trigger('filteringEnd');
//                 self._parent._isAnimating = false;
//             }
//         },
//
//         /**
//         * Filters out the item.
//         * @private
//         */
//         _filterOut: function() {
//             var self         = this,
//                 filterOutCss = self._parent._makeDeepCopy(self._parent.options.filterOutCss);
//             //Auto add translate to transform over user-defined filterOut styles
//             filterOutCss.transform += ' translate3d(' + self._lastPos.left + 'px,' + self._lastPos.top + 'px, 0)';
//             //Play animation
//             self.css(filterOutCss);
//             //Tag as filteringOut for transitionend event
//             self._filteringOut = true;
//         },
//
//         /**
//         * Filters in the item.
//         * @param {Object} targetPos - is the position to move to with transform-translate
//         * @private
//         */
//         _filterIn: function(targetPos) {
//             var self  	    = this,
//                 filterInCss = self._parent._makeDeepCopy(self._parent.options.filterInCss);
//             //Remove the filteredOut class
//             $(self).removeClass('filteredOut');
//             //Tag as filtering in for transitionend event
//             self._filteringIn = true;
//             self._lastPos 	  = targetPos;
//             //Auto add translate to transform over user-defined filterIn styles
//             filterInCss.transform += ' translate3d(' + targetPos.left + 'px,' + targetPos.top + 'px, 0)';
//             //Play animation
//             self.css(filterInCss);
//         }
//     };
//
// })(this, jQuery);
// /*
// @author       Constantin Saguin - @brutaldesign
// @link            http://bsign.co
// @github        http://github.com/brutaldesign/swipebox
// @version     1.0
// @license      MIT License
// */
// (function(e,t,n,r){n.swipebox=function(i,s){var o={useCSS:true,hideBarsDelay:3e3},u=this,a=n(i),i=i,f=i.selector,l=n(f),c=t.createTouch!==r||"ontouchstart"in e||"onmsgesturechange"in e||navigator.msMaxTouchPoints,h=!!e.SVGSVGElement,p='<div id="swipebox-overlay">					<div id="swipebox-slider"></div>					<div id="swipebox-caption"></div>					<div id="swipebox-action">						<a id="swipebox-close"></a>						<a id="swipebox-prev"></a>						<a id="swipebox-next"></a>					</div>			</div>';u.settings={};u.init=function(){u.settings=n.extend({},o,s);l.click(function(e){e.preventDefault();e.stopPropagation();index=a.index(n(this));d.init(index)})};var d={init:function(e){this.build();this.openSlide(e);this.openImg(e);this.preloadImg(e+1);this.preloadImg(e-1)},build:function(){var t=this;n("body").append(p);if(t.doCssTrans()){n("#swipebox-slider").css({"-webkit-transition":"left 0.4s ease","-moz-transition":"left 0.4s ease","-o-transition":"left 0.4s ease","-khtml-transition":"left 0.4s ease",transition:"left 0.4s ease"});n("#swipebox-overlay").css({"-webkit-transition":"opacity 1s ease","-moz-transition":"opacity 1s ease","-o-transition":"opacity 1s ease","-khtml-transition":"opacity 1s ease",transition:"opacity 1s ease"});n("#swipebox-action, #swipebox-caption").css({"-webkit-transition":"0.5s","-moz-transition":"0.5s","-o-transition":"0.5s","-khtml-transition":"0.5s",transition:"0.5s"})}if(h){var r=n("#swipebox-action #swipebox-close").css("background-image");r=r.replace("png","svg");n("#swipebox-action #swipebox-prev,#swipebox-action #swipebox-next,#swipebox-action #swipebox-close").css({"background-image":r})}a.each(function(){n("#swipebox-slider").append('<div class="slide"></div>')});t.setDim();t.actions();t.keyboard();t.gesture();t.animBars();n(e).resize(function(){t.setDim()}).resize()},setDim:function(){var t={width:n(e).width(),height:e.innerHeight?e.innerHeight:n(e).height()};n("#swipebox-overlay").css(t)},supportTransition:function(){var e="transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition".split(" ");for(var n=0;n<e.length;n++){if(t.createElement("div").style[e[n]]!==r){return e[n]}}return false},doCssTrans:function(){if(u.settings.useCSS&&this.supportTransition()){return true}},gesture:function(){if(c){var e=this,t=null,r=10,i={},s={};var o=n("#swipebox-caption, #swipebox-action");o.addClass("visible-bars");e.setTimeout();n("body").bind("touchstart",function(e){n(this).addClass("touching");s=e.originalEvent.targetTouches[0];i.pageX=e.originalEvent.targetTouches[0].pageX;n(".touching").bind("touchmove",function(e){e.preventDefault();e.stopPropagation();s=e.originalEvent.targetTouches[0]});return false}).bind("touchend",function(u){u.preventDefault();u.stopPropagation();t=s.pageX-i.pageX;if(t>=r){e.getPrev()}else if(t<=-r){e.getNext()}else{if(!o.hasClass("visible-bars")){e.showBars();e.setTimeout()}else{e.clearTimeout();e.hideBars()}}n(".touching").off("touchmove").removeClass("touching")})}},setTimeout:function(){if(u.settings.hideBarsDelay>0){var t=this;t.clearTimeout();t.timeout=e.setTimeout(function(){t.hideBars()},u.settings.hideBarsDelay)}},clearTimeout:function(){e.clearTimeout(this.timeout);this.timeout=null},showBars:function(){var e=n("#swipebox-caption, #swipebox-action");if(this.doCssTrans()){e.addClass("visible-bars")}else{n("#swipebox-caption").animate({top:0},500);n("#swipebox-action").animate({bottom:0},500);setTimeout(function(){e.addClass("visible-bars")},1e3)}},hideBars:function(){var e=n("#swipebox-caption, #swipebox-action");if(this.doCssTrans()){e.removeClass("visible-bars")}else{n("#swipebox-caption").animate({top:"-50px"},500);n("#swipebox-action").animate({bottom:"-50px"},500);setTimeout(function(){e.removeClass("visible-bars")},1e3)}},animBars:function(){var e=this;var t=n("#swipebox-caption, #swipebox-action");if(!c){t.addClass("visible-bars");e.setTimeout();n("#swipebox-slider").click(function(n){if(!t.hasClass("visible-bars")){e.showBars();e.setTimeout()}});n("#swipebox-action").hover(function(){e.showBars();t.addClass("force-visible-bars");e.clearTimeout()},function(){t.removeClass("force-visible-bars");e.setTimeout()})}},keyboard:function(){if(!c){var t=this;n(e).bind("keyup",function(e){e.preventDefault();e.stopPropagation();if(e.keyCode==37){t.getPrev()}else if(e.keyCode==39){t.getNext()}else if(e.keyCode==27){t.closeSlide()}})}},actions:function(){var e=this;if(a.length<2){n("#swipebox-prev, #swipebox-next").hide()}else{n("#swipebox-prev").bind("click touchend",function(t){t.preventDefault();t.stopPropagation();e.getPrev();e.setTimeout()});n("#swipebox-next").bind("click touchend",function(t){t.preventDefault();t.stopPropagation();e.getNext();e.setTimeout()})}n("#swipebox-close").bind("click touchstart",function(t){e.closeSlide()})},setSlide:function(e){var t=n("#swipebox-slider");if(this.doCssTrans()){t.css({left:-e*100+"%"})}else{t.animate({left:-e*100+"%"})}n("#swipebox-slider .slide").removeClass("current");n("#swipebox-slider .slide").eq(e).addClass("current");this.setTitle(e);n("#swipebox-prev, #swipebox-next").removeClass("disabled");if(e==0){n("#swipebox-prev").addClass("disabled")}else if(e==a.length-1){n("#swipebox-next").addClass("disabled")}},openSlide:function(e){n("#swipebox-overlay").show().stop().animate({opacity:1},"slow").addClass("visible");setTimeout(function(){n("body").addClass("swipebox-overflow-hidden")},1500);this.setSlide(e)},preloadImg:function(e){var t=this;setTimeout(function(){t.openImg(e)},1e3)},openImg:function(e){var t=this;if(e<0||e>=a.length){return false}t.loadImg(a.eq(e).attr("href"),function(){n("#swipebox-slider .slide").eq(e).html(this)})},setTitle:function(e){var t=null;if(a.eq(e).attr("title")){n("#swipebox-caption").empty().append(a.eq(e).attr("title"))}},loadImg:function(e,t){var r=n("<img>").on("load",function(){t.call(r)});r.attr("src",e)},getNext:function(){var e=this;index=n("#swipebox-slider .slide").index(n("#swipebox-slider .slide.current"));if(index+1<a.length){index++;e.setSlide(index);e.preloadImg(index+1)}else{n("#swipebox-slider").addClass("rightSpring");setTimeout(function(){n("#swipebox-slider").removeClass("rightSpring")},500)}},getPrev:function(){var e=this;index=n("#swipebox-slider .slide").index(n("#swipebox-slider .slide.current"));if(index>0){index--;e.setSlide(index);e.preloadImg(index-1)}else{n("#swipebox-slider").addClass("leftSpring");setTimeout(function(){n("#swipebox-slider").removeClass("leftSpring")},500)}},closeSlide:function(){var e=this;n("body").removeClass("swipebox-overflow-hidden");n("#swipebox-overlay").animate({opacity:0},"fast");setTimeout(function(){n("#swipebox-overlay").removeClass("visible");e.destroy()},1e3)},destroy:function(){var t=this;n(e).unbind("keyup");n(e).unbind("resize");n("body").unbind();n("#swipebox-slider").unbind();n("#swipebox-overlay").remove();a.removeData("_swipebox")}};u.init()};n.fn.swipebox=function(e){if(!n.data(this,"_swipebox")){var t=new n.swipebox(this,e);this.data("_swipebox",t)}}})(window,document,jQuery)/* UItoTop jQuery Plugin 1.2 | Matt Varone | http://www.mattvarone.com/web-design/uitotop-jquery-plugin */
// (function($){$.fn.UItoTop=function(options){var defaults={text:'To Top',min:200,inDelay:600,outDelay:400,containerID:'toTop',containerHoverID:'toTopHover',scrollSpeed:1000,easingType:'linear'},settings=$.extend(defaults,options),containerIDhash='#'+settings.containerID,containerHoverIDHash='#'+settings.containerHoverID;$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');$(containerIDhash).hide().on('click.UItoTop',function(){$('html, body').animate({scrollTop:0},settings.scrollSpeed,settings.easingType);$('#'+settings.containerHoverID,this).stop().animate({'opacity':0},settings.inDelay,settings.easingType);return false;}).prepend('<span id="'+settings.containerHoverID+'"></span>').hover(function(){$(containerHoverIDHash,this).stop().animate({'opacity':1},600,'linear');},function(){$(containerHoverIDHash,this).stop().animate({'opacity':0},700,'linear');});$(window).scroll(function(){var sd=$(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){$(containerIDhash).css({'position':'absolute','top':sd+$(window).height()-50});}
// if(sd>settings.min)
// $(containerIDhash).fadeIn(settings.inDelay);else
// $(containerIDhash).fadeOut(settings.Outdelay);});};})(jQuery);
