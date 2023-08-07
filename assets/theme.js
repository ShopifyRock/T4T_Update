if ((typeof Shopify) === 'undefined') { window.Shopify = {}; }
  // Get from cart.js returns the cart in JSON
  if ((typeof Shopify.getCart) === 'undefined') {
  Shopify.getCart = function(callback, cart) {
    if(!cart){
    return jQuery.getJSON('/cart.js', function (cart, textStatus, xhr) {
        if ((typeof callback) === 'function') {
        callback(cart,textStatus, xhr);
      }
      else {
        Shopify.onCartUpdate(cart);
          }
      });
    }else{
      if ((typeof callback) === 'function') {
      callback(cart);
    }else if(typeof Shopify.onCartUpdate ==='function') {
      Shopify.onCartUpdate(cart);
        }
    }
  };
}

window.theme = window.theme || {};

/* ================ SLATE ================ */
window.theme = window.theme || {};

theme.Sections = function Sections() {
  this.constructors = {};
  this.instances = [];

  $(document)
    .on('shopify:section:load', this._onSectionLoad.bind(this))
    .on('shopify:section:unload', this._onSectionUnload.bind(this))
    .on('shopify:section:select', this._onSelect.bind(this))
    .on('shopify:section:deselect', this._onDeselect.bind(this))
    .on('shopify:block:select', this._onBlockSelect.bind(this))
    .on('shopify:block:deselect', this._onBlockDeselect.bind(this));
};

theme.Sections.prototype = Object.assign({}, theme.Sections.prototype, {
  _createInstance: function(container, constructor) {
    var $container = $(container);
    var id = $container.attr('data-section-id');
    var type = $container.attr('data-section-type');

    constructor = constructor || this.constructors[type];

    if (typeof constructor === 'undefined') {
      return;
    }

    var instance = Object.assign(new constructor(container), {
      id: id,
      type: type,
      container: container
    });

    this.instances.push(instance);
  },

  _onSectionLoad: function(evt) {
    var container = $('[data-section-id]', evt.target)[0];
    if (container) {
      this._createInstance(container);
    }
  },

  _onSectionUnload: function(evt) {
    this.instances = this.instances.filter(function(instance) {
      var isEventInstance = instance.id === evt.detail.sectionId;

      if (isEventInstance) {
        if (typeof instance.onUnload === 'function') {
          instance.onUnload(evt);
        }
      }

      return !isEventInstance;
    });
  },

  _onSelect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = this.instances.find(function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (
      typeof instance !== 'undefined' &&
      typeof instance.onSelect === 'function'
    ) {
      instance.onSelect(evt);
    }
  },

  _onDeselect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = this.instances.find(function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (
      typeof instance !== 'undefined' &&
      typeof instance.onDeselect === 'function'
    ) {
      instance.onDeselect(evt);
    }
  },

  _onBlockSelect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = this.instances.find(function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (
      typeof instance !== 'undefined' &&
      typeof instance.onBlockSelect === 'function'
    ) {
      instance.onBlockSelect(evt);
    }
  },

  _onBlockDeselect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = this.instances.find(function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (
      typeof instance !== 'undefined' &&
      typeof instance.onBlockDeselect === 'function'
    ) {
      instance.onBlockDeselect(evt);
    }
  },

  register: function(type, constructor) {
    this.constructors[type] = constructor;

    $('[data-section-type=' + type + ']').each(
      function(index, container) {
        this._createInstance(container, constructor);
      }.bind(this)
    );
  }
});

window.slate = window.slate || {};

/**
 * Slate utilities
 * -----------------------------------------------------------------------------
 * A collection of useful utilities to help build your theme
 *
 *
 * @namespace utils
 */

slate.utils = {
  /**
   * Get the query params in a Url
   * Ex
   * https://mysite.com/search?q=noodles&b
   * getParameterByName('q') = "noodles"
   * getParameterByName('b') = "" (empty value)
   * getParameterByName('test') = null (absent)
   */
  getParameterByName: function(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  },

  resizeSelects: function($selects) {
    $selects.each(function() {
      var $this = $(this);
      var arrowWidth = 10;
      // create test element
      var text = $this.find('option:selected').text();
      var $test = $('<span>').html(text);

      // add to body, get width, and get out
      $test.appendTo('body');
      var width = $test.width();
      $test.remove();

      // set select width
      $this.width(width + arrowWidth);
    });
  },

  keyboardKeys: {
    TAB: 9,
    ENTER: 13,
    ESCAPE: 27,
    LEFTARROW: 37,
    RIGHTARROW: 39
  }
};

window.slate = window.slate || {};

/**
 * iFrames
 * -----------------------------------------------------------------------------
 * Wrap videos in div to force responsive layout.
 *
 * @namespace iframes
 */

slate.rte = {
  /**
   * Wrap tables in a container div to make them scrollable when needed
   *
   * @param {object} options - Options to be used
   * @param {jquery} options.$tables - jquery object(s) of the table(s) to wrap
   * @param {string} options.tableWrapperClass - table wrapper class name
   */
  wrapTable: function(options) {
    options.$tables.wrap(
      '<div class="' + options.tableWrapperClass + '"></div>'
    );
  },

  /**
   * Wrap iframes in a container div to make them responsive
   *
   * @param {object} options - Options to be used
   * @param {jquery} options.$iframes - jquery object(s) of the iframe(s) to wrap
   * @param {string} options.iframeWrapperClass - class name used on the wrapping div
   */
  wrapIframe: function(options) {
    options.$iframes.each(function() {
      // Add wrapper to make video responsive
      $(this).wrap('<div class="' + options.iframeWrapperClass + '"></div>');

      // Re-set the src attribute on each iframe after page load
      // for Chrome's "incorrect iFrame content on 'back'" bug.
      // https://code.google.com/p/chromium/issues/detail?id=395791
      // Need to specifically target video and admin bar
      this.src = this.src;
    });
  }
};

window.slate = window.slate || {};

/**
 * A11y Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help make your theme more accessible
 * to users with visual impairments.
 *
 *
 * @namespace a11y
 */

slate.a11y = {
  /**
   * For use when focus shifts to a container rather than a link
   * eg for In-page links, after scroll, focus shifts to content area so that
   * next `tab` is where user expects if focusing a link, just $link.focus();
   *
   * @param {JQuery} $element - The element to be acted upon
   */
  pageLinkFocus: function($element) {
    var focusClass = 'js-focus-hidden';

    $element
      .first()
      .attr('tabIndex', '-1')
      .focus()
      .addClass(focusClass)
      .one('blur', callback);

    function callback() {
      $element
        .first()
        .removeClass(focusClass)
        .removeAttr('tabindex');
    }
  },

  /**
   * If there's a hash in the url, focus the appropriate element
   */
  focusHash: function() {
    var hash = window.location.hash;

    // is there a hash in the url? is it an element on the page?
    if (hash && document.getElementById(hash.slice(1))) {
      this.pageLinkFocus($(hash));
    }
  },

  /**
   * When an in-page (url w/hash) link is clicked, focus the appropriate element
   */
  bindInPageLinks: function() {
    $('a[href*=#]').on(
      'click',
      function(evt) {
        this.pageLinkFocus($(evt.currentTarget.hash));
      }.bind(this)
    );
  },

  /**
   * Traps the focus in a particular container
   *
   * @param {object} options - Options to be used
   * @param {jQuery} options.$container - Container to trap focus within
   * @param {jQuery} options.$elementToFocus - Element to be focused when focus leaves container
   * @param {string} options.namespace - Namespace used for new focus event handler
   */
  trapFocus: function(options) {
    if (options.container) options.$container = $(options.container);

    var eventsName = {
      focusin: options.namespace ? 'focusin.' + options.namespace : 'focusin',
      focusout: options.namespace
        ? 'focusout.' + options.namespace
        : 'focusout',
      keydown: options.namespace
        ? 'keydown.' + options.namespace
        : 'keydown.handleFocus'
    };

    /**
     * Get every possible visible focusable element
     */
    var $focusableElements = options.$container.find(
      $(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex^="-"])'
      ).filter(':visible')
    );
    var firstFocusable = $focusableElements[0];
    var lastFocusable = $focusableElements[$focusableElements.length - 1];

    if (options.elementToFocus) {
      options.$elementToFocus = $(options.elementToFocus);
    }

    if (!options.$elementToFocus) {
      options.$elementToFocus = options.$container;
    }

    function _manageFocus(evt) {
      if (evt.keyCode !== slate.utils.keyboardKeys.TAB) return;

      /**
       * On the last focusable element and tab forward,
       * focus the first element.
       */
      if (evt.target === lastFocusable && !evt.shiftKey) {
        evt.preventDefault();
        firstFocusable.focus();
      }
      /**
       * On the first focusable element and tab backward,
       * focus the last element.
       */
      if (evt.target === firstFocusable && evt.shiftKey) {
        evt.preventDefault();
        lastFocusable.focus();
      }
    }

    options.$container.attr('tabindex', '-1');
    options.$elementToFocus.focus();

    $(document).off('focusin');

    $(document).on(eventsName.focusout, function() {
      $(document).off(eventsName.keydown);
    });

    $(document).on(eventsName.focusin, function(evt) {
      if (evt.target !== lastFocusable && evt.target !== firstFocusable) return;

      $(document).on(eventsName.keydown, function(evt) {
        _manageFocus(evt);
      });
    });
  },

  /**
   * Removes the trap of focus in a particular container
   *
   * @param {object} options - Options to be used
   * @param {jQuery} options.$container - Container to trap focus within
   * @param {string} options.namespace - Namespace used for new focus event handler
   */
  removeTrapFocus: function(options) {
    if (options.container) options.$container = $(options.container);

    var eventName = options.namespace
      ? 'focusin.' + options.namespace
      : 'focusin';

    if (options.$container && options.$container.length) {
      options.$container.removeAttr('tabindex');
    }

    $(document).off(eventName);
  },

  /**
   * Add aria-describedby attribute to external and new window links
   *
   * @param {object} options - Options to be used
   * @param {object} options.messages - Custom messages to be used
   * @param {jQuery} options.$links - Specific links to be targeted
   */
  accessibleLinks: function(options) {
    var body = document.querySelector('body');

    var idSelectors = {
      newWindow: 'a11y-new-window-message',
      external: 'a11y-external-message',
      newWindowExternal: 'a11y-new-window-external-message'
    };

    if (options.$links === undefined || !options.$links.jquery) {
      options.$links = $('a[href]:not([aria-describedby])');
    }

    function generateHTML(customMessages) {
      if (typeof customMessages !== 'object') {
        customMessages = {};
      }

      var messages = $.extend(
        {
          newWindow: 'Opens in a new window.',
          external: 'Opens external website.',
          newWindowExternal: 'Opens external website in a new window.'
        },
        customMessages
      );

      var container = document.createElement('ul');
      var htmlMessages = '';

      for (var message in messages) {
        htmlMessages +=
          '<li id=' + idSelectors[message] + '>' + messages[message] + '</li>';
      }

      container.setAttribute('hidden', true);
      container.innerHTML = htmlMessages;

      body.appendChild(container);
    }

    function _externalSite($link) {
      var hostname = window.location.hostname;

      return $link[0].hostname !== hostname;
    }

    $.each(options.$links, function() {
      var $link = $(this);
      var target = $link.attr('target');
      var rel = $link.attr('rel');
      var isExternal = _externalSite($link);
      var isTargetBlank = target === '_blank';

      if (isExternal) {
        $link.attr('aria-describedby', idSelectors.external);
      }
      if (isTargetBlank) {
        if (rel === undefined || rel.indexOf('noopener') === -1) {
          $link.attr('rel', function(i, val) {
            var relValue = val === undefined ? '' : val + ' ';
            return relValue + 'noopener';
          });
        }
        $link.attr('aria-describedby', idSelectors.newWindow);
      }
      if (isExternal && isTargetBlank) {
        $link.attr('aria-describedby', idSelectors.newWindowExternal);
      }
    });

    generateHTML(options.messages);
  }
};

/**
 * Image Helper Functions
 * -----------------------------------------------------------------------------
 * A collection of functions that help with basic image operations.
 *
 */

theme.Images = (function() {
  /**
   * Preloads an image in memory and uses the browsers cache to store it until needed.
   *
   * @param {Array} images - A list of image urls
   * @param {String} size - A shopify image size attribute
   */

  function preload(images, size) {
    if (typeof images === 'string') {
      images = [images];
    }

    for (var i = 0; i < images.length; i++) {
      var image = images[i];
      this.loadImage(this.getSizedImageUrl(image, size));
    }
  }

  /**
   * Loads and caches an image in the browsers cache.
   * @param {string} path - An image url
   */
  function loadImage(path) {
    new Image().src = path;
  }

  /**
   * Swaps the src of an image for another OR returns the imageURL to the callback function
   * @param image
   * @param element
   * @param callback
   */
  function switchImage(image, element, callback) {
    var size = this.imageSize(element.src);
    var imageUrl = this.getSizedImageUrl(image.src, size);

    if (callback) {
      callback(imageUrl, image, element); // eslint-disable-line callback-return
    } else {
      element.src = imageUrl;
    }
  }

  /**
   * +++ Useful
   * Find the Shopify image attribute size
   *
   * @param {string} src
   * @returns {null}
   */
  function imageSize(src) {
    var match = src.match(
      /.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\\.@]/
    );

    if (match !== null) {
      if (match[2] !== undefined) {
        return match[1] + match[2];
      } else {
        return match[1];
      }
    } else {
      return null;
    }
  }

  /**
   * +++ Useful
   * Adds a Shopify size attribute to a URL
   *
   * @param src
   * @param size
   * @returns {*}
   */
  function getSizedImageUrl(src, size) {
    if (size === null) {
      return src;
    }

    if (size === 'master') {
      return this.removeProtocol(src);
    }

    var match = src.match(
      /\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i
    );

    if (match !== null) {
      var prefix = src.split(match[0]);
      var suffix = match[0];

      return this.removeProtocol(prefix[0] + '_' + size + suffix);
    }

    return null;
  }

  function removeProtocol(path) {
    return path.replace(/http(s)?:/, '');
  }

  return {
    preload: preload,
    loadImage: loadImage,
    switchImage: switchImage,
    imageSize: imageSize,
    getSizedImageUrl: getSizedImageUrl,
    removeProtocol: removeProtocol
  };
})();

/**
 * Currency Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help with currency formatting
 *
 * Current contents
 * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.
 *
 * Alternatives
 * - Accounting.js - http://openexchangerates.github.io/accounting.js/
 *
 */

theme.Currency = (function() {
  var moneyFormat = '${{amount}}'; // eslint-disable-line camelcase

  function formatMoney(cents, format) {
    if (typeof cents === 'string') {
      cents = cents.replace('.', '');
    }
    var value = '';
    var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    var formatString = format || moneyFormat;

    function formatWithDelimiters(number, precision, thousands, decimal) {
      thousands = thousands || ',';
      decimal = decimal || '.';

      if (isNaN(number) || number === null) {
        return 0;
      }

      number = (number / 100.0).toFixed(precision);

      var parts = number.split('.');
      var dollarsAmount = parts[0].replace(
        /(\d)(?=(\d\d\d)+(?!\d))/g,
        '$1' + thousands
      );
      var centsAmount = parts[1] ? decimal + parts[1] : '';

      return dollarsAmount + centsAmount;
    }

    switch (formatString.match(placeholderRegex)[1]) {
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',');
        break;
      case 'amount_no_decimals_with_space_separator':
        value = formatWithDelimiters(cents, 0, ' ');
        break;
      case 'amount_with_apostrophe_separator':
        value = formatWithDelimiters(cents, 2, "'");
        break;
    }

    return formatString.replace(placeholderRegex, value);
  }

  return {
    formatMoney: formatMoney
  };
})();

/**
 * Variant Selection scripts
 * ------------------------------------------------------------------------------
 *
 * Handles change events from the variant inputs in any `cart/add` forms that may
 * exist.  Also updates the master select and triggers updates when the variants
 * price or image changes.
 *
 * @namespace variants
 */

slate.Variants = (function() {
  /**
   * Variant constructor
   *
   * @param {object} options - Settings from `product.js`
   */
  function Variants(options) {
    this.$container = options.$container;
    this.product = options.product;
    this.singleOptionSelector = options.singleOptionSelector;
    this.originalSelectorId = options.originalSelectorId;
    this.enableHistoryState = options.enableHistoryState;
    this.currentVariant = this._getVariantFromOptions();

    $(this.singleOptionSelector, this.$container).on(
      'change',
      this._onSelectChange.bind(this)
    );
  }

  Variants.prototype = Object.assign({}, Variants.prototype, {
    /**
     * Get the currently selected options from add-to-cart form. Works with all
     * form input elements.
     *
     * @return {array} options - Values of currently selected variants
     */
    _getCurrentOptions: function() {
      return $(this.singleOptionSelector, this.$container)
        .map(function(index, element) {
          var $element = $(element);
          var type = $element.attr('type');
          var currentOption = {};

          if (type === 'radio' || type === 'checkbox') {
            if ($element[0].checked) {
              currentOption.value = $element.val();
              currentOption.index = $element.data('index');

              return currentOption;
            } else {
              return false;
            }
          } else {
            currentOption.value = $element.val();
            currentOption.index = $element.data('index');

            return currentOption;
          }
        })
        .get();
    },

    /**
     * Find variant based on selected values.
     *
     * @param  {array} selectedValues - Values of variant inputs
     * @return {object || undefined} found - Variant object from product.variants
     */
    _getVariantFromOptions: function() {
      var selectedValues = this._getCurrentOptions();
      var variants = this.product.variants;

      var found = variants.find(function(variant) {
        return selectedValues.every(function(values) {
          return variant[values.index] === values.value;
        });
      });

      return found;
    },

    /**
     * Event handler for when a variant input changes.
     */
    _onSelectChange: function() {
      var variant = this._getVariantFromOptions();

      this.$container.trigger({
        type: 'variantChange',
        variant: variant
      });
      
      // BEGIN SWATCHES
      if (variant) {
        var form = jQuery(this).closest('form');
        for (var i=0,length=variant.options.length; i<length; i++) {
          var radioButton = form.find('.swatch[data-option-index="' + i + '"] :radio[value="' + variant.options[i] +'"]');
          if (radioButton.size()) {
            radioButton.get(0).checked = true;
          }
        }
      }
      // END SWATCHES

      if (!variant) {
        return;
      }

      this._updateMasterSelect(variant);
      this._updateImages(variant);
      this._updatePrice(variant);
      this._updateSKU(variant);
      this._updateQuantity(variant);
      this.currentVariant = variant;

      if (this.enableHistoryState) {
        this._updateHistoryState(variant);
      }
    },

    /**
     * Trigger event when variant image changes
     *
     * @param  {object} variant - Currently selected variant
     * @return {event}  variantImageChange
     */
    _updateImages: function(variant) {
      var variantImage = variant.featured_image || {};
      var currentVariantImage = this.currentVariant.featured_image || {};

      if (
        !variant.featured_image ||
        variantImage.src === currentVariantImage.src
      ) {
        return;
      }

      this.$container.trigger({
        type: 'variantImageChange',
        variant: variant
      });
    },

    /**
     * Trigger event when variant price changes.
     *
     * @param  {object} variant - Currently selected variant
     * @return {event} variantPriceChange
     */
    _updatePrice: function(variant) {
      if (
        variant.price === this.currentVariant.price &&
        variant.compare_at_price === this.currentVariant.compare_at_price
      ) {
        return;
      }

      this.$container.trigger({
        type: 'variantPriceChange',
        variant: variant
      });
    },

    /**
     * Trigger event when variant sku changes.
     *
     * @param  {object} variant - Currently selected variant
     * @return {event} variantSKUChange
     */
    _updateSKU: function(variant) {
      if (variant.sku === this.currentVariant.sku) {
        return;
      }

      this.$container.trigger({
        type: 'variantSKUChange',
        variant: variant
      });
    },
    
    _updateQuantity: function(){
      setTimeout(function(){ $( "#variant-inventory" ).load(window.location.href + " #variant-inventory" ); }, 0);
    },

    /**
     * Update history state for product deeplinking
     *
     * @param  {variant} variant - Currently selected variant
     * @return {k}         [description]
     */
    _updateHistoryState: function(variant) {
      if (!history.replaceState || !variant) {
        return;
      }

      var newurl =
        window.location.protocol +
        '//' +
        window.location.host +
        window.location.pathname +
        '?variant=' +
        variant.id;
      window.history.replaceState({ path: newurl }, '', newurl);
    },

    /**
     * Update hidden master select of variant change
     *
     * @param  {variant} variant - Currently selected variant
     */
    _updateMasterSelect: function(variant) {
      $(this.originalSelectorId, this.$container).val(variant.id);
    }
  });

  return Variants;
})();

this.Shopify = this.Shopify || {};
this.Shopify.theme = this.Shopify.theme || {};
this.Shopify.theme.PredictiveSearch = (function() {
  'use strict';

  function validateQuery(query) {
    var error;

    if (query === null || query === undefined) {
      error = new TypeError("'query' is missing");
      error.type = 'argument';
      throw error;
    }

    if (typeof query !== 'string') {
      error = new TypeError("'query' is not a string");
      error.type = 'argument';
      throw error;
    }
  }

  function GenericError() {
    var error = Error.call(this);

    error.name = 'Server error';
    error.message = 'Something went wrong on the server';
    error.status = 500;

    return error;
  }

  function NotFoundError(status) {
    var error = Error.call(this);

    error.name = 'Not found';
    error.message = 'Not found';
    error.status = status;

    return error;
  }

  function ServerError() {
    var error = Error.call(this);

    error.name = 'Server error';
    error.message = 'Something went wrong on the server';
    error.status = 500;

    return error;
  }

  function ContentTypeError(status) {
    var error = Error.call(this);

    error.name = 'Content-Type error';
    error.message = 'Content-Type was not provided or is of wrong type';
    error.status = status;

    return error;
  }

  function JsonParseError(status) {
    var error = Error.call(this);

    error.name = 'JSON parse error';
    error.message = 'JSON syntax error';
    error.status = status;

    return error;
  }

  function ThrottledError(status, name, message, retryAfter) {
    var error = Error.call(this);

    error.name = name;
    error.message = message;
    error.status = status;
    error.retryAfter = retryAfter;

    return error;
  }

  function InvalidParameterError(status, name, message) {
    var error = Error.call(this);

    error.name = name;
    error.message = message;
    error.status = status;

    return error;
  }

  function ExpectationFailedError(status, name, message) {
    var error = Error.call(this);

    error.name = name;
    error.message = message;
    error.status = status;

    return error;
  }

  function request(configParams, query, onSuccess, onError) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) {
        return;
      }

      var contentType = xhr.getResponseHeader('Content-Type');

      if (xhr.status >= 500) {
        onError(new ServerError());

        return;
      }

      if (xhr.status === 404) {
        onError(new NotFoundError(xhr.status));

        return;
      }

      if (
        typeof contentType !== 'string' ||
        contentType.toLowerCase().match('application/json') === null
      ) {
        onError(new ContentTypeError(xhr.status));

        return;
      }

      if (xhr.status === 417) {
        try {
          var invalidParameterJson = JSON.parse(xhr.responseText);

          onError(
            new InvalidParameterError(
              xhr.status,
              invalidParameterJson.message,
              invalidParameterJson.description
            )
          );
        } catch (error) {
          onError(new JsonParseError(xhr.status));
        }

        return;
      }

      if (xhr.status === 422) {
        try {
          var expectationFailedJson = JSON.parse(xhr.responseText);

          onError(
            new ExpectationFailedError(
              xhr.status,
              expectationFailedJson.message,
              expectationFailedJson.description
            )
          );
        } catch (error) {
          onError(new JsonParseError(xhr.status));
        }

        return;
      }

      if (xhr.status === 429) {
        try {
          var throttledJson = JSON.parse(xhr.responseText);

          onError(
            new ThrottledError(
              xhr.status,
              throttledJson.message,
              throttledJson.description,
              xhr.getResponseHeader('Retry-After')
            )
          );
        } catch (error) {
          onError(new JsonParseError(xhr.status));
        }

        return;
      }

      if (xhr.status === 200) {
        try {
          var res = JSON.parse(xhr.responseText);
          res.query = query;
          onSuccess(res);
        } catch (error) {
          onError(new JsonParseError(xhr.status));
        }

        return;
      }

      try {
        var genericErrorJson = JSON.parse(xhr.responseText);
        onError(
          new GenericError(
            xhr.status,
            genericErrorJson.message,
            genericErrorJson.description
          )
        );
      } catch (error) {
        onError(new JsonParseError(xhr.status));
      }

      return;
    };

    xhr.open(
      'get',
      '/search/suggest.json?q=' + encodeURIComponent(query) + '&' + configParams
    );

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send();
  }

  function Cache(config) {
    this._store = {};
    this._keys = [];
    if (config && config.bucketSize) {
      this.bucketSize = config.bucketSize;
    } else {
      this.bucketSize = 20;
    }
  }

  Cache.prototype.set = function(key, value) {
    if (this.count() >= this.bucketSize) {
      var deleteKey = this._keys.splice(0, 1);
      this.delete(deleteKey);
    }

    this._keys.push(key);
    this._store[key] = value;

    return this._store;
  };

  Cache.prototype.get = function(key) {
    return this._store[key];
  };

  Cache.prototype.has = function(key) {
    return Boolean(this._store[key]);
  };

  Cache.prototype.count = function() {
    return Object.keys(this._store).length;
  };

  Cache.prototype.delete = function(key) {
    var exists = Boolean(this._store[key]);
    delete this._store[key];
    return exists && !this._store[key];
  };

  function Dispatcher() {
    this.events = {};
  }

  Dispatcher.prototype.on = function(eventName, callback) {
    var event = this.events[eventName];
    if (!event) {
      event = new DispatcherEvent(eventName);
      this.events[eventName] = event;
    }
    event.registerCallback(callback);
  };

  Dispatcher.prototype.off = function(eventName, callback) {
    var event = this.events[eventName];
    if (event && event.callbacks.indexOf(callback) > -1) {
      event.unregisterCallback(callback);
      if (event.callbacks.length === 0) {
        delete this.events[eventName];
      }
    }
  };

  Dispatcher.prototype.dispatch = function(eventName, payload) {
    var event = this.events[eventName];
    if (event) {
      event.fire(payload);
    }
  };

  function DispatcherEvent(eventName) {
    this.eventName = eventName;
    this.callbacks = [];
  }

  DispatcherEvent.prototype.registerCallback = function(callback) {
    this.callbacks.push(callback);
  };

  DispatcherEvent.prototype.unregisterCallback = function(callback) {
    var index = this.callbacks.indexOf(callback);
    if (index > -1) {
      this.callbacks.splice(index, 1);
    }
  };

  DispatcherEvent.prototype.fire = function(payload) {
    var callbacks = this.callbacks.slice(0);
    callbacks.forEach(function(callback) {
      callback(payload);
    });
  };

  function debounce(func, wait) {
    var timeout = null;
    return function() {
      var context = this;
      var args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        timeout = null;
        func.apply(context, args);
      }, wait || 0);
    };
  }

  function objectToQueryParams(obj, parentKey) {
    var output = '';
    parentKey = parentKey || null;

    Object.keys(obj).forEach(function(key) {
      var outputKey = key + '=';
      if (parentKey) {
        outputKey = parentKey + '[' + key + ']';
      }

      switch (trueTypeOf(obj[key])) {
        case 'object':
          output += objectToQueryParams(obj[key], parentKey ? outputKey : key);
          break;
        case 'array':
          output += outputKey + '=' + obj[key].join(',') + '&';
          break;
        default:
          if (parentKey) {
            outputKey += '=';
          }
          output += outputKey + encodeURIComponent(obj[key]) + '&';
          break;
      }
    });

    return output;
  }

  function trueTypeOf(obj) {
    return Object.prototype.toString
      .call(obj)
      .slice(8, -1)
      .toLowerCase();
  }

  var DEBOUNCE_RATE = 10;
  var requestDebounced = debounce(request, DEBOUNCE_RATE);

  function PredictiveSearch(config) {
    if (!config) {
      throw new TypeError('No config object was specified');
    }

    this._retryAfter = null;
    this._currentQuery = null;

    this.dispatcher = new Dispatcher();
    this.cache = new Cache({ bucketSize: 40 });
    this.configParams = objectToQueryParams(config);
  }

  PredictiveSearch.TYPES = {
    PRODUCT: 'product',
    PAGE: 'page',
    ARTICLE: 'article'
  };

  PredictiveSearch.FIELDS = {
    AUTHOR: 'author',
    BODY: 'body',
    PRODUCT_TYPE: 'product_type',
    TAG: 'tag',
    TITLE: 'title',
    VARIANTS_BARCODE: 'variants.barcode',
    VARIANTS_SKU: 'variants.sku',
    VARIANTS_TITLE: 'variants.title',
    VENDOR: 'vendor'
  };

  PredictiveSearch.UNAVAILABLE_PRODUCTS = {
    SHOW: 'show',
    HIDE: 'hide',
    LAST: 'last'
  };

  PredictiveSearch.prototype.query = function query(query) {
    try {
      validateQuery(query);
    } catch (error) {
      this.dispatcher.dispatch('error', error);
      return;
    }

    if (query === '') {
      return this;
    }

    this._currentQuery = normalizeQuery(query);
    var cacheResult = this.cache.get(this._currentQuery);
    if (cacheResult) {
      this.dispatcher.dispatch('success', cacheResult);
      return this;
    }

    requestDebounced(
      this.configParams,
      query,
      function(result) {
        this.cache.set(normalizeQuery(result.query), result);
        if (normalizeQuery(result.query) === this._currentQuery) {
          this._retryAfter = null;
          this.dispatcher.dispatch('success', result);
        }
      }.bind(this),
      function(error) {
        if (error.retryAfter) {
          this._retryAfter = error.retryAfter;
        }
        this.dispatcher.dispatch('error', error);
      }.bind(this)
    );

    return this;
  };

  PredictiveSearch.prototype.on = function on(eventName, callback) {
    this.dispatcher.on(eventName, callback);

    return this;
  };

  PredictiveSearch.prototype.off = function on(eventName, callback) {
    this.dispatcher.off(eventName, callback);

    return this;
  };

  function normalizeQuery(query) {
    if (typeof query !== 'string') {
      return null;
    }

    return query
      .trim()
      .replace(' ', '-')
      .toLowerCase();
  }

  return PredictiveSearch;
})();

this.Shopify = this.Shopify || {};
this.Shopify.theme = this.Shopify.theme || {};
this.Shopify.theme.PredictiveSearchComponent = (function(PredictiveSearch) {
  'use strict';

  PredictiveSearch =
    PredictiveSearch && PredictiveSearch.hasOwnProperty('default')
      ? PredictiveSearch['default']
      : PredictiveSearch;

  var DEFAULT_PREDICTIVE_SEARCH_API_CONFIG = {
    resources: {
      type: [PredictiveSearch.TYPES.PRODUCT],
      options: {
        unavailable_products: PredictiveSearch.UNAVAILABLE_PRODUCTS.LAST,
        fields: [
          PredictiveSearch.FIELDS.TITLE,
          PredictiveSearch.FIELDS.VENDOR,
          PredictiveSearch.FIELDS.PRODUCT_TYPE,
          PredictiveSearch.FIELDS.VARIANTS_TITLE
        ]
      }
    }
  };

  function PredictiveSearchComponent(config) {
    // validate config
    if (
      !config ||
      !config.selectors ||
      !config.selectors.input ||
      !isString(config.selectors.input) ||
      !config.selectors.result ||
      !isString(config.selectors.result) ||
      !config.resultTemplateFct ||
      !isFunction(config.resultTemplateFct) ||
      !config.numberOfResultsTemplateFct ||
      !isFunction(config.numberOfResultsTemplateFct) ||
      !config.loadingResultsMessageTemplateFct ||
      !isFunction(config.loadingResultsMessageTemplateFct)
    ) {
      var error = new TypeError(
        'PredictiveSearchComponent config is not valid'
      );
      error.type = 'argument';
      throw error;
    }

    // Find nodes
    this.nodes = findNodes(config.selectors);

    // Validate nodes
    if (!isValidNodes(this.nodes)) {
      // eslint-disable-next-line no-console
      console.warn('Could not find valid nodes');
      return;
    }

    // Store the keyword that was used for the search
    this._searchKeyword = '';

    // Assign result template
    this.resultTemplateFct = config.resultTemplateFct;

    // Assign number of results template
    this.numberOfResultsTemplateFct = config.numberOfResultsTemplateFct;

    // Assign loading state template function
    this.loadingResultsMessageTemplateFct =
      config.loadingResultsMessageTemplateFct;

    // Assign number of search results
    this.numberOfResults = config.numberOfResults || 4;

    // Set classes
    this.classes = {
      visibleVariant: config.visibleVariant
        ? config.visibleVariant
        : 'predictive-search-wrapper--visible',
      itemSelected: config.itemSelectedClass
        ? config.itemSelectedClass
        : 'predictive-search-item--selected',
      clearButtonVisible: config.clearButtonVisibleClass
        ? config.clearButtonVisibleClass
        : 'predictive-search__clear-button--visible'
    };

    this.selectors = {
      searchResult: config.searchResult
        ? config.searchResult
        : '[data-search-result]'
    };

    // Assign callbacks
    this.callbacks = assignCallbacks(config);

    // Add input attributes
    addInputAttributes(this.nodes.input);

    // Add input event listeners
    this._addInputEventListeners();

    // Add body listener
    this._addBodyEventListener();

    // Add accessibility announcer
    this._addAccessibilityAnnouncer();

    // Display the reset button if the input is not empty
    this._toggleClearButtonVisibility();

    // Instantiate Predictive Search API
    this.predictiveSearch = new PredictiveSearch(
      config.PredictiveSearchAPIConfig
        ? config.PredictiveSearchAPIConfig
        : DEFAULT_PREDICTIVE_SEARCH_API_CONFIG
    );

    // Add predictive search success event listener
    this.predictiveSearch.on(
      'success',
      this._handlePredictiveSearchSuccess.bind(this)
    );

    // Add predictive search error event listener
    this.predictiveSearch.on(
      'error',
      this._handlePredictiveSearchError.bind(this)
    );
  }

  /**
   * Private methods
   */
  function findNodes(selectors) {
    return {
      input: document.querySelector(selectors.input),
      reset: document.querySelector(selectors.reset),
      result: document.querySelector(selectors.result)
    };
  }

  function isValidNodes(nodes) {
    if (
      !nodes ||
      !nodes.input ||
      !nodes.result ||
      nodes.input.tagName !== 'INPUT'
    ) {
      return false;
    }

    return true;
  }

  function assignCallbacks(config) {
    return {
      onBodyMousedown: config.onBodyMousedown,
      onBeforeOpen: config.onBeforeOpen,
      onOpen: config.onOpen,
      onBeforeClose: config.onBeforeClose,
      onClose: config.onClose,
      onInputFocus: config.onInputFocus,
      onInputKeyup: config.onInputKeyup,
      onInputBlur: config.onInputBlur,
      onInputReset: config.onInputReset,
      onBeforeDestroy: config.onBeforeDestroy,
      onDestroy: config.onDestroy
    };
  }

  function addInputAttributes(input) {
    input.setAttribute('autocorrect', 'off');
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('autocapitalize', 'off');
    input.setAttribute('spellcheck', 'false');
  }

  function removeInputAttributes(input) {
    input.removeAttribute('autocorrect', 'off');
    input.removeAttribute('autocomplete', 'off');
    input.removeAttribute('autocapitalize', 'off');
    input.removeAttribute('spellcheck', 'false');
  }

  /**
   * Public variables
   */
  PredictiveSearchComponent.prototype.isResultVisible = false;
  PredictiveSearchComponent.prototype.results = {};

  /**
   * "Private" variables
   */
  PredictiveSearchComponent.prototype._latencyTimer = null;
  PredictiveSearchComponent.prototype._resultNodeClicked = false;

  /**
   * "Private" instance methods
   */
  PredictiveSearchComponent.prototype._addInputEventListeners = function() {
    var input = this.nodes.input;
    var reset = this.nodes.reset;

    if (!input) {
      return;
    }

    this._handleInputFocus = this._handleInputFocus.bind(this);
    this._handleInputBlur = this._handleInputBlur.bind(this);
    this._handleInputKeyup = this._handleInputKeyup.bind(this);
    this._handleInputKeydown = this._handleInputKeydown.bind(this);

    input.addEventListener('focus', this._handleInputFocus);
    input.addEventListener('blur', this._handleInputBlur);
    input.addEventListener('keyup', this._handleInputKeyup);
    input.addEventListener('keydown', this._handleInputKeydown);

    if (reset) {
      this._handleInputReset = this._handleInputReset.bind(this);
      reset.addEventListener('click', this._handleInputReset);
    }
  };

  PredictiveSearchComponent.prototype._removeInputEventListeners = function() {
    var input = this.nodes.input;

    input.removeEventListener('focus', this._handleInputFocus);
    input.removeEventListener('blur', this._handleInputBlur);
    input.removeEventListener('keyup', this._handleInputKeyup);
    input.removeEventListener('keydown', this._handleInputKeydown);
  };

  PredictiveSearchComponent.prototype._addBodyEventListener = function() {
    this._handleBodyMousedown = this._handleBodyMousedown.bind(this);

    document
      .querySelector('body')
      .addEventListener('mousedown', this._handleBodyMousedown);
  };

  PredictiveSearchComponent.prototype._removeBodyEventListener = function() {
    document
      .querySelector('body')
      .removeEventListener('mousedown', this._handleBodyMousedown);
  };

  PredictiveSearchComponent.prototype._removeClearButtonEventListener = function() {
    var reset = this.nodes.reset;

    if (!reset) {
      return;
    }

    reset.removeEventListener('click', this._handleInputReset);
  };

  /**
   * Event handlers
   */
  PredictiveSearchComponent.prototype._handleBodyMousedown = function(evt) {
    if (this.isResultVisible && this.nodes !== null) {
      if (
        evt.target.isEqualNode(this.nodes.input) ||
        this.nodes.input.contains(evt.target) ||
        evt.target.isEqualNode(this.nodes.result) ||
        this.nodes.result.contains(evt.target)
      ) {
        this._resultNodeClicked = true;
      } else {
        if (isFunction(this.callbacks.onBodyMousedown)) {
          var returnedValue = this.callbacks.onBodyMousedown(this.nodes);
          if (isBoolean(returnedValue) && returnedValue) {
            this.close();
          }
        } else {
          this.close();
        }
      }
    }
  };

  PredictiveSearchComponent.prototype._handleInputFocus = function(evt) {
    if (isFunction(this.callbacks.onInputFocus)) {
      var returnedValue = this.callbacks.onInputFocus(this.nodes);
      if (isBoolean(returnedValue) && !returnedValue) {
        return false;
      }
    }

    if (evt.target.value.length > 0) {
      this._search();
    }

    return true;
  };

  PredictiveSearchComponent.prototype._handleInputBlur = function() {
    // This has to be done async, to wait for the focus to be on the next
    // element and avoid closing the results.
    // Example: Going from the input to the reset button.
    setTimeout(
      function() {
        if (isFunction(this.callbacks.onInputBlur)) {
          var returnedValue = this.callbacks.onInputBlur(this.nodes);
          if (isBoolean(returnedValue) && !returnedValue) {
            return false;
          }
        }

        if (document.activeElement.isEqualNode(this.nodes.reset)) {
          return false;
        }

        if (this._resultNodeClicked) {
          this._resultNodeClicked = false;
          return false;
        }

        this.close();
      }.bind(this)
    );

    return true;
  };

  PredictiveSearchComponent.prototype._addAccessibilityAnnouncer = function() {
    this._accessibilityAnnouncerDiv = window.document.createElement('div');

    this._accessibilityAnnouncerDiv.setAttribute(
      'style',
      'position: absolute !important; overflow: hidden; clip: rect(0 0 0 0); height: 1px; width: 1px; margin: -1px; padding: 0; border: 0;'
    );

    this._accessibilityAnnouncerDiv.setAttribute('data-search-announcer', '');
    this._accessibilityAnnouncerDiv.setAttribute('aria-live', 'polite');
    this._accessibilityAnnouncerDiv.setAttribute('aria-atomic', 'true');

    this.nodes.result.parentElement.appendChild(
      this._accessibilityAnnouncerDiv
    );
  };

  PredictiveSearchComponent.prototype._removeAccessibilityAnnouncer = function() {
    this.nodes.result.parentElement.removeChild(
      this._accessibilityAnnouncerDiv
    );
  };

  PredictiveSearchComponent.prototype._updateAccessibilityAttributesAfterSelectingElement = function(
    previousSelectedElement,
    currentSelectedElement
  ) {
    // Update the active descendant on the search input
    this.nodes.input.setAttribute(
      'aria-activedescendant',
      currentSelectedElement.id
    );

    // Unmark the previousSelected elemented as selected
    if (previousSelectedElement) {
      previousSelectedElement.removeAttribute('aria-selected');
    }

    // Mark the element as selected
    currentSelectedElement.setAttribute('aria-selected', true);
  };

  PredictiveSearchComponent.prototype._clearAriaActiveDescendant = function() {
    this.nodes.input.setAttribute('aria-activedescendant', '');
  };

  PredictiveSearchComponent.prototype._announceNumberOfResultsFound = function(
    results
  ) {
    var currentAnnouncedMessage = this._accessibilityAnnouncerDiv.innerHTML;
    var newMessage = this.numberOfResultsTemplateFct(results);

    // If the messages are the same, they won't get announced
    // add white space so it gets announced
    if (currentAnnouncedMessage === newMessage) {
      newMessage = newMessage + '&nbsp;';
    }

    this._accessibilityAnnouncerDiv.innerHTML = newMessage;
  };

  PredictiveSearchComponent.prototype._announceLoadingState = function() {
    this._accessibilityAnnouncerDiv.innerHTML = this.loadingResultsMessageTemplateFct();
  };

  PredictiveSearchComponent.prototype._handleInputKeyup = function(evt) {
    var UP_ARROW_KEY_CODE = 38;
    var DOWN_ARROW_KEY_CODE = 40;
    var RETURN_KEY_CODE = 13;
    var ESCAPE_KEY_CODE = 27;

    if (isFunction(this.callbacks.onInputKeyup)) {
      var returnedValue = this.callbacks.onInputKeyup(this.nodes);
      if (isBoolean(returnedValue) && !returnedValue) {
        return false;
      }
    }

    this._toggleClearButtonVisibility();

    if (this.isResultVisible && this.nodes !== null) {
      if (evt.keyCode === UP_ARROW_KEY_CODE) {
        this._navigateOption(evt, 'UP');
        return true;
      }

      if (evt.keyCode === DOWN_ARROW_KEY_CODE) {
        this._navigateOption(evt, 'DOWN');
        return true;
      }

      if (evt.keyCode === RETURN_KEY_CODE) {
        this._selectOption();
        return true;
      }

      if (evt.keyCode === ESCAPE_KEY_CODE) {
        this.close();
      }
    }

    if (evt.target.value.length <= 0) {
      this.close();
      this._setKeyword('');
    } else if (evt.target.value.length > 0) {
      this._search();
    }

    return true;
  };

  PredictiveSearchComponent.prototype._handleInputKeydown = function(evt) {
    var RETURN_KEY_CODE = 13;
    var UP_ARROW_KEY_CODE = 38;
    var DOWN_ARROW_KEY_CODE = 40;

    // Prevent the form default submission if there is a selected option
    if (evt.keyCode === RETURN_KEY_CODE && this._getSelectedOption() !== null) {
      evt.preventDefault();
    }

    // Prevent the cursor from moving in the input when using the up and down arrow keys
    if (
      evt.keyCode === UP_ARROW_KEY_CODE ||
      evt.keyCode === DOWN_ARROW_KEY_CODE
    ) {
      evt.preventDefault();
    }
  };

  PredictiveSearchComponent.prototype._handleInputReset = function(evt) {
    evt.preventDefault();

    if (isFunction(this.callbacks.onInputReset)) {
      var returnedValue = this.callbacks.onInputReset(this.nodes);
      if (isBoolean(returnedValue) && !returnedValue) {
        return false;
      }
    }

    this.nodes.input.value = '';
    this.nodes.input.focus();
    this._toggleClearButtonVisibility();
    this.close();

    return true;
  };

  PredictiveSearchComponent.prototype._navigateOption = function(
    evt,
    direction
  ) {
    var currentOption = this._getSelectedOption();

    if (!currentOption) {
      var firstOption = this.nodes.result.querySelector(
        this.selectors.searchResult
      );
      firstOption.classList.add(this.classes.itemSelected);
      this._updateAccessibilityAttributesAfterSelectingElement(
        null,
        firstOption
      );
    } else {
      if (direction === 'DOWN') {
        var nextOption = currentOption.nextElementSibling;
        if (nextOption) {
          currentOption.classList.remove(this.classes.itemSelected);
          nextOption.classList.add(this.classes.itemSelected);
          this._updateAccessibilityAttributesAfterSelectingElement(
            currentOption,
            nextOption
          );
        }
      } else {
        var previousOption = currentOption.previousElementSibling;
        if (previousOption) {
          currentOption.classList.remove(this.classes.itemSelected);
          previousOption.classList.add(this.classes.itemSelected);
          this._updateAccessibilityAttributesAfterSelectingElement(
            currentOption,
            previousOption
          );
        }
      }
    }
  };

  PredictiveSearchComponent.prototype._getSelectedOption = function() {
    return this.nodes.result.querySelector('.' + this.classes.itemSelected);
  };

  PredictiveSearchComponent.prototype._selectOption = function() {
    var selectedOption = this._getSelectedOption();

    if (selectedOption) {
      selectedOption.querySelector('a, button').click();
    }
  };

  PredictiveSearchComponent.prototype._search = function() {
    var newSearchKeyword = this.nodes.input.value;

    if (this._searchKeyword === newSearchKeyword) {
      return;
    }

    clearTimeout(this._latencyTimer);
    this._latencyTimer = setTimeout(
      function() {
        this.results.isLoading = true;

        // Annonuce that we're loading the results
        this._announceLoadingState();

        this.nodes.result.classList.add(this.classes.visibleVariant);
        // NOTE: We could benifit in using DOMPurify.
        // https://github.com/cure53/DOMPurify
        this.nodes.result.innerHTML = this.resultTemplateFct(this.results);
      }.bind(this),
      500
    );

    this.predictiveSearch.query(newSearchKeyword);
    this._setKeyword(newSearchKeyword);
  };

  PredictiveSearchComponent.prototype._handlePredictiveSearchSuccess = function(
    json
  ) {
    clearTimeout(this._latencyTimer);
    this.results = json.resources.results;

    this.results.isLoading = false;
    this.results.products = this.results.products.slice(
      0,
      this.numberOfResults
    );
    this.results.canLoadMore =
      this.numberOfResults <= this.results.products.length;
    this.results.searchQuery = this.nodes.input.value;

    if (this.results.products.length > 0 || this.results.searchQuery) {
      this.nodes.result.innerHTML = this.resultTemplateFct(this.results);
      this._announceNumberOfResultsFound(this.results);
      this.open();
    } else {
      this.nodes.result.innerHTML = '';

      this._closeOnNoResults();
    }
  };

  PredictiveSearchComponent.prototype._handlePredictiveSearchError = function() {
    clearTimeout(this._latencyTimer);
    this.nodes.result.innerHTML = '';

    this._closeOnNoResults();
  };

  PredictiveSearchComponent.prototype._closeOnNoResults = function() {
    if (this.nodes) {
      this.nodes.result.classList.remove(this.classes.visibleVariant);
    }

    this.isResultVisible = false;
  };

  PredictiveSearchComponent.prototype._setKeyword = function(keyword) {
    this._searchKeyword = keyword;
  };

  PredictiveSearchComponent.prototype._toggleClearButtonVisibility = function() {
    if (!this.nodes.reset) {
      return;
    }

    if (this.nodes.input.value.length > 0) {
      this.nodes.reset.classList.add(this.classes.clearButtonVisible);
    } else {
      this.nodes.reset.classList.remove(this.classes.clearButtonVisible);
    }
  };

  /**
   * Public methods
   */
  PredictiveSearchComponent.prototype.open = function() {
    if (this.isResultVisible) {
      return;
    }

    if (isFunction(this.callbacks.onBeforeOpen)) {
      var returnedValue = this.callbacks.onBeforeOpen(this.nodes);
      if (isBoolean(returnedValue) && !returnedValue) {
        return false;
      }
    }

    this.nodes.result.classList.add(this.classes.visibleVariant);
    this.nodes.input.setAttribute('aria-expanded', true);
    this.isResultVisible = true;

    if (isFunction(this.callbacks.onOpen)) {
      return this.callbacks.onOpen(this.nodes) || true;
    }

    return true;
  };

  PredictiveSearchComponent.prototype.close = function() {
    if (!this.isResultVisible) {
      return true;
    }

    if (isFunction(this.callbacks.onBeforeClose)) {
      var returnedValue = this.callbacks.onBeforeClose(this.nodes);
      if (isBoolean(returnedValue) && !returnedValue) {
        return false;
      }
    }

    if (this.nodes) {
      this.nodes.result.classList.remove(this.classes.visibleVariant);
    }

    this.nodes.input.setAttribute('aria-expanded', false);
    this._clearAriaActiveDescendant();
    this._setKeyword('');

    if (isFunction(this.callbacks.onClose)) {
      this.callbacks.onClose(this.nodes);
    }

    this.isResultVisible = false;
    this.results = {};

    return true;
  };

  PredictiveSearchComponent.prototype.destroy = function() {
    this.close();

    if (isFunction(this.callbacks.onBeforeDestroy)) {
      var returnedValue = this.callbacks.onBeforeDestroy(this.nodes);
      if (isBoolean(returnedValue) && !returnedValue) {
        return false;
      }
    }

    this.nodes.result.classList.remove(this.classes.visibleVariant);
    removeInputAttributes(this.nodes.input);
    this._removeInputEventListeners();
    this._removeBodyEventListener();
    this._removeAccessibilityAnnouncer();
    this._removeClearButtonEventListener();

    if (isFunction(this.callbacks.onDestroy)) {
      this.callbacks.onDestroy(this.nodes);
    }

    return true;
  };

  PredictiveSearchComponent.prototype.clearAndClose = function() {
    this.nodes.input.value = '';
    this.close();
  };

  /**
   * Utilities
   */
  function getTypeOf(value) {
    return Object.prototype.toString.call(value);
  }

  function isString(value) {
    return getTypeOf(value) === '[object String]';
  }

  function isBoolean(value) {
    return getTypeOf(value) === '[object Boolean]';
  }

  function isFunction(value) {
    return getTypeOf(value) === '[object Function]';
  }

  return PredictiveSearchComponent;
})(Shopify.theme.PredictiveSearch);


/* ================ GLOBAL ================ */
/*============================================================================
  Drawer modules
==============================================================================*/
theme.Drawers = (function() {
  function Drawer(id, position, options) {
    var DEFAULT_OPEN_CLASS = 'js-drawer-open';
    var DEFAULT_CLOSE_CLASS = 'js-drawer-close';

    var defaults = {
      selectors: {
        openVariant: '.' + DEFAULT_OPEN_CLASS + '-' + position,
        close: '.' + DEFAULT_CLOSE_CLASS
      },
      classes: {
        open: DEFAULT_OPEN_CLASS,
        openVariant: DEFAULT_OPEN_CLASS + '-' + position
      },
      withPredictiveSearch: false
    };

    this.nodes = {
      $parent: $('html').add('body'),
      $page: $('#PageContainer')
    };

    this.config = $.extend(defaults, options);
    this.position = position;
    this.$drawer = $('#' + id);

    if (!this.$drawer.length) {
      return false;
    }

    this.drawerIsOpen = false;
    this.init();
  }

  Drawer.prototype.init = function() {
    $(this.config.selectors.openVariant).on('click', $.proxy(this.open, this));
    this.$drawer.on(
      'click',
      this.config.selectors.close,
      $.proxy(this.close, this)
    );
  };

  Drawer.prototype.open = function(evt) {
    // Keep track if drawer was opened from a click, or called by another function
    var externalCall = false;

    // Prevent following href if link is clicked
    if (evt) {
      evt.preventDefault();
    } else {
      externalCall = true;
    }

    // Without this, the drawer opens, the click event bubbles up to nodes.$page
    // which closes the drawer.
    if (evt && evt.stopPropagation) {
      evt.stopPropagation();
      // save the source of the click, we'll focus to this on close
      this.$activeSource = $(evt.currentTarget);
    }

    if (this.drawerIsOpen && !externalCall) {
      return this.close();
    }

    // Add is-transitioning class to moved elements on open so drawer can have
    // transition for close animation
    if (!this.config.withPredictiveSearch) {
      this.$drawer.prepareTransition();
    }

    this.nodes.$parent.addClass(
      this.config.classes.open + ' ' + this.config.classes.openVariant
    );
    this.drawerIsOpen = true;

    // Run function when draw opens if set
    if (
      this.config.onDrawerOpen &&
      typeof this.config.onDrawerOpen === 'function'
    ) {
      if (!externalCall) {
        this.config.onDrawerOpen();
      }
    }

    if (this.$activeSource && this.$activeSource.attr('aria-expanded')) {
      this.$activeSource.attr('aria-expanded', 'true');
    }

    // Set focus on drawer
    var trapFocusConfig = {
      $container: this.$drawer,
      namespace: 'drawer_focus'
    };
    if (this.config.$elementToFocusOnOpen) {
      trapFocusConfig.$elementToFocus = this.config.$elementToFocusOnOpen;
    }

    slate.a11y.trapFocus(trapFocusConfig);

    this.bindEvents();

    return this;
  };

  Drawer.prototype.close = function() {
    if (!this.drawerIsOpen) {
      // don't close a closed drawer
      return;
    }

    // deselect any focused form elements
    $(document.activeElement).trigger('blur');

    // Ensure closing transition is applied to moved elements, like the nav
    if (!this.config.withPredictiveSearch) {
      this.$drawer.prepareTransition();
    }

    this.nodes.$parent.removeClass(
      this.config.classes.open + ' ' + this.config.classes.openVariant
    );

    if (this.$activeSource && this.$activeSource.attr('aria-expanded')) {
      this.$activeSource.attr('aria-expanded', 'false');
    }

    this.drawerIsOpen = false;

    // Remove focus on drawer
    slate.a11y.removeTrapFocus({
      $container: this.$drawer,
      namespace: 'drawer_focus'
    });

    this.unbindEvents();

    // Run function when draw closes if set
    if (
      this.config.onDrawerClose &&
      typeof this.config.onDrawerClose === 'function'
    ) {
      this.config.onDrawerClose();
    }
  };

  Drawer.prototype.bindEvents = function() {
    this.nodes.$parent.on(
      'keyup.drawer',
      $.proxy(function(evt) {
        // close on 'esc' keypress
        if (evt.keyCode === 27) {
          this.close();
          return false;
        } else {
          return true;
        }
      }, this)
    );

    // Lock scrolling on mobile
    this.nodes.$page.on('touchmove.drawer', function() {
      return false;
    });

    this.nodes.$page.on(
      'click.drawer',
      $.proxy(function() {
        this.close();
        return false;
      }, this)
    );
  };

  Drawer.prototype.unbindEvents = function() {
    this.nodes.$page.off('.drawer');
    this.nodes.$parent.off('.drawer');
  };

  return Drawer;
})();

theme.Helpers = (function() {
  var touchDevice = false;

  var classes = {
    preventScrolling: 'prevent-scrolling'
  };

  var scrollPosition = window.pageYOffset;

  function setTouch() {
    touchDevice = true;
  }

  function isTouch() {
    return touchDevice;
  }

  function enableScrollLock() {
    scrollPosition = window.pageYOffset;
    document.body.style.top = '-' + scrollPosition + 'px';
    document.body.classList.add(classes.preventScrolling);
  }

  function disableScrollLock() {
    document.body.classList.remove(classes.preventScrolling);
    document.body.style.removeProperty('top');
    window.scrollTo(0, scrollPosition);
  }

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this,
        args = arguments;

      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  return {
    setTouch: setTouch,
    isTouch: isTouch,
    enableScrollLock: enableScrollLock,
    disableScrollLock: disableScrollLock,
    debounce: debounce
  };
})();

theme.LibraryLoader = (function() {
  var types = {
    link: 'link',
    script: 'script'
  };

  var status = {
    requested: 'requested',
    loaded: 'loaded'
  };

  var cloudCdn = 'https://cdn.shopify.com/shopifycloud/';

  var libraries = {
    youtubeSdk: {
      tagId: 'youtube-sdk',
      src: 'https://www.youtube.com/iframe_api',
      type: types.script
    },
    plyrShopifyStyles: {
      tagId: 'plyr-shopify-styles',
      src: cloudCdn + 'shopify-plyr/v1.0/shopify-plyr.css',
      type: types.link
    },
    modelViewerUiStyles: {
      tagId: 'shopify-model-viewer-ui-styles',
      src: cloudCdn + 'model-viewer-ui/assets/v1.0/model-viewer-ui.css',
      type: types.link
    }
  };

  function load(libraryName, callback) {
    var library = libraries[libraryName];

    if (!library) return;
    if (library.status === status.requested) return;

    callback = callback || function() {};
    if (library.status === status.loaded) {
      callback();
      return;
    }

    library.status = status.requested;

    var tag;

    switch (library.type) {
      case types.script:
        tag = createScriptTag(library, callback);
        break;
      case types.link:
        tag = createLinkTag(library, callback);
        break;
    }

    tag.id = library.tagId;
    library.element = tag;

    var firstScriptTag = document.getElementsByTagName(library.type)[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  function createScriptTag(library, callback) {
    var tag = document.createElement('script');
    tag.src = library.src;
    tag.addEventListener('load', function() {
      library.status = status.loaded;
      callback();
    });
    return tag;
  }

  function createLinkTag(library, callback) {
    var tag = document.createElement('link');
    tag.href = library.src;
    tag.rel = 'stylesheet';
    tag.type = 'text/css';
    tag.addEventListener('load', function() {
      library.status = status.loaded;
      callback();
    });
    return tag;
  }

  return {
    load: load
  };
})();


/* ================ MODULES ================ */
window.theme = window.theme || {};

theme.Header = (function() {
  var selectors = {
    body: 'body',
    navigation: '#AccessibleNav',
    siteNavHasDropdown: '[data-has-dropdowns]',
    siteNavChildLinks: '.site-nav__child-link',
    siteNavActiveDropdown: '.site-nav--active-dropdown',
    siteNavHasCenteredDropdown: '.site-nav--has-centered-dropdown',
    siteNavCenteredDropdown: '.site-nav__dropdown--centered',
    siteNavLinkMain: '.site-nav__link--main',
    siteNavChildLink: '.site-nav__link--last',
    siteNavDropdown: '.site-nav__dropdown',
    siteHeader: '.site-header'
  };

  var config = {
    activeClass: 'site-nav--active-dropdown',
    childLinkClass: 'site-nav__child-link',
    rightDropdownClass: 'site-nav__dropdown--right',
    leftDropdownClass: 'site-nav__dropdown--left'
  };

  var cache = {};

  function init() {
    cacheSelectors();
    styleDropdowns(document.querySelectorAll(selectors.siteNavHasDropdown));
    positionFullWidthDropdowns();

    cache.parents.forEach(function(element) {
      element.addEventListener('click', submenuParentClickHandler);
    });

    // check when we're leaving a dropdown and close the active dropdown
    cache.siteNavChildLink.forEach(function(element) {
      element.addEventListener('focusout', submenuFocusoutHandler);
    });

    cache.topLevel.forEach(function(element) {
      element.addEventListener('focus', hideDropdown);
    });

    cache.subMenuLinks.forEach(function(element) {
      element.addEventListener('click', stopImmediatePropagation);
    });

    window.addEventListener('resize', resizeHandler);
  }

  function stopImmediatePropagation(event) {
    event.stopImmediatePropagation();
  }

  function cacheSelectors() {
    var navigation = document.querySelector(selectors.navigation);

    cache = {
      nav: navigation,
      topLevel: document.querySelectorAll(selectors.siteNavLinkMain),
      parents: navigation.querySelectorAll(selectors.siteNavHasDropdown),
      subMenuLinks: document.querySelectorAll(selectors.siteNavChildLinks),
      activeDropdown: document.querySelector(selectors.siteNavActiveDropdown),
      siteHeader: document.querySelector(selectors.siteHeader),
      siteNavChildLink: document.querySelectorAll(selectors.siteNavChildLink)
    };
  }

  function showDropdown(element) {
    element.classList.add(config.activeClass);

    if (cache.activeDropdown) hideDropdown();

    cache.activeDropdown = element;

    element
      .querySelector(selectors.siteNavLinkMain)
      .setAttribute('aria-expanded', 'true');

    setTimeout(function() {
      window.addEventListener('keyup', keyUpHandler);
      document.body.addEventListener('click', hideDropdown);
    }, 250);
  }

  function hideDropdown() {
    if (!cache.activeDropdown) return;

    cache.activeDropdown
      .querySelector(selectors.siteNavLinkMain)
      .setAttribute('aria-expanded', 'false');
    cache.activeDropdown.classList.remove(config.activeClass);

    cache.activeDropdown = document.querySelector(
      selectors.siteNavActiveDropdown
    );

    window.removeEventListener('keyup', keyUpHandler);
    document.body.removeEventListener('click', hideDropdown);
  }

  function styleDropdowns(dropdownListItems) {
    dropdownListItems.forEach(function(item) {
      var dropdownLi = item.querySelector(selectors.siteNavDropdown);

      if (!dropdownLi) return;

      if (isRightOfLogo(item)) {
        dropdownLi.classList.remove(config.leftDropdownClass);
        dropdownLi.classList.add(config.rightDropdownClass);
      } else {
        dropdownLi.classList.remove(config.rightDropdownClass);
        dropdownLi.classList.add(config.leftDropdownClass);
      }
    });
  }

  function isRightOfLogo(item) {
    var rect = item.getBoundingClientRect();
    var win = item.ownerDocument.defaultView;
    var leftOffset = rect.left + win.pageXOffset;

    var headerWidth = Math.floor(cache.siteHeader.offsetWidth) / 2;
    return leftOffset > headerWidth;
  }

  function positionFullWidthDropdowns() {
    document
      .querySelectorAll(selectors.siteNavHasCenteredDropdown)
      .forEach(function(el) {
        var fullWidthDropdown = el.querySelector(
          selectors.siteNavCenteredDropdown
        );

        var fullWidthDropdownOffset = el.offsetTop + 41;
        fullWidthDropdown.style.top = fullWidthDropdownOffset + 'px';
      });
  }

  function keyUpHandler(event) {
    if (event.keyCode === 27) hideDropdown();
  }

  function resizeHandler() {
    adjustStyleAndPosition();
  }

  function submenuParentClickHandler(event) {
    var element = event.currentTarget;

    element.classList.contains(config.activeClass)
      ? hideDropdown()
      : showDropdown(element);
  }

  function submenuFocusoutHandler() {
    setTimeout(function() {
      if (
        document.activeElement.classList.contains(config.childLinkClass) ||
        !cache.activeDropdown
      ) {
        return;
      }

      hideDropdown();
    });
  }

  var adjustStyleAndPosition = theme.Helpers.debounce(function() {
    styleDropdowns(document.querySelectorAll(selectors.siteNavHasDropdown));
    positionFullWidthDropdowns();
  }, 50);

  function unload() {
    cache.topLevel.forEach(function(element) {
      element.removeEventListener('focus', hideDropdown);
    });

    cache.subMenuLinks.forEach(function(element) {
      element.removeEventListener('click', stopImmediatePropagation);
    });

    cache.parents.forEach(function(element) {
      element.removeEventListener('click', submenuParentClickHandler);
    });

    cache.siteNavChildLink.forEach(function(element) {
      element.removeEventListener('focusout', submenuFocusoutHandler);
    });

    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('keyup', keyUpHandler);
    document.body.removeEventListener('click', hideDropdown);
  }

  return {
    init: init,
    unload: unload
  };
})();

window.theme = window.theme || {};

theme.MobileNav = (function() {
  var classes = {
    mobileNavOpenIcon: 'mobile-nav--open',
    mobileNavCloseIcon: 'mobile-nav--close',
    navLinkWrapper: 'mobile-nav__item',
    navLink: 'mobile-nav__link',
    subNavLink: 'mobile-nav__sublist-link',
    return: 'mobile-nav__return-btn',
    subNavActive: 'is-active',
    subNavClosing: 'is-closing',
    navOpen: 'js-menu--is-open',
    subNavShowing: 'sub-nav--is-open',
    thirdNavShowing: 'third-nav--is-open',
    subNavToggleBtn: 'js-toggle-submenu'
  };
  var cache = {};
  var isTransitioning;
  var $activeSubNav;
  var $activeTrigger;
  var menuLevel = 1;
  var mediumUpQuery = '(min-width: ' + theme.breakpoints.medium + 'px)';
  var mql = window.matchMedia(mediumUpQuery);

  $(document).on('shopify:section:unload', function(event) {
    if (event.detail.sectionId !== 'header') return;

    mql.removeListener(initBreakpoints);
  });

  function init() {
    cacheSelectors();

    cache.$mobileNavToggle.on('click', toggleMobileNav);
    cache.$subNavToggleBtn.on('click.subNav', toggleSubNav);

    mql.addListener(initBreakpoints);
  }

  function initBreakpoints() {
    if (mql.matches && cache.$mobileNavContainer.hasClass(classes.navOpen)) {
      closeMobileNav();
    }
  }

  function toggleMobileNav() {
    if (cache.$mobileNavToggle.hasClass(classes.mobileNavCloseIcon)) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  }

  function cacheSelectors() {
    cache = {
      $pageContainer: $('#PageContainer'),
      $siteHeader: $('.site-header'),
      $mobileNavToggle: $('.js-mobile-nav-toggle'),
      $mobileNavContainer: $('.mobile-nav-wrapper'),
      $mobileNav: $('#MobileNav'),
      $sectionHeader: $('#shopify-section-header'),
      $subNavToggleBtn: $('.' + classes.subNavToggleBtn)
    };
  }

  function openMobileNav() {
    var translateHeaderHeight = cache.$siteHeader.outerHeight();

    cache.$mobileNavContainer.prepareTransition().addClass(classes.navOpen);

    cache.$mobileNavContainer.css({
      transform: 'translateY(' + translateHeaderHeight + 'px)'
    });

    cache.$pageContainer.css({
      transform:
        'translate3d(0, ' + cache.$mobileNavContainer[0].scrollHeight + 'px, 0)'
    });

    slate.a11y.trapFocus({
      $container: cache.$sectionHeader,
      $elementToFocus: cache.$mobileNavToggle,
      namespace: 'navFocus'
    });

    cache.$mobileNavToggle
      .addClass(classes.mobileNavCloseIcon)
      .removeClass(classes.mobileNavOpenIcon)
      .attr('aria-expanded', true);

    // close on escape
    $(window).on('keyup.mobileNav', function(evt) {
      if (evt.which === 27) {
        closeMobileNav();
      }
    });
  }

  function closeMobileNav() {
    cache.$mobileNavContainer.prepareTransition().removeClass(classes.navOpen);

    cache.$mobileNavContainer.css({
      transform: 'translateY(-100%)'
    });

    cache.$pageContainer.removeAttr('style');

    slate.a11y.trapFocus({
      $container: $('html'),
      $elementToFocus: $('body')
    });

    cache.$mobileNavContainer.one(
      'TransitionEnd.navToggle webkitTransitionEnd.navToggle transitionend.navToggle oTransitionEnd.navToggle',
      function() {
        slate.a11y.removeTrapFocus({
          $container: cache.$mobileNav,
          namespace: 'navFocus'
        });
      }
    );

    cache.$mobileNavToggle
      .addClass(classes.mobileNavOpenIcon)
      .removeClass(classes.mobileNavCloseIcon)
      .attr('aria-expanded', false)
      .focus();

    $(window).off('keyup.mobileNav');

    scrollTo(0, 0);
  }

  function toggleSubNav(evt) {
    if (isTransitioning) {
      return;
    }

    var $toggleBtn = $(evt.currentTarget);
    var isReturn = $toggleBtn.hasClass(classes.return);
    isTransitioning = true;

    if (isReturn) {
      // Close all subnavs by removing active class on buttons
      $(
        '.' + classes.subNavToggleBtn + '[data-level="' + (menuLevel - 1) + '"]'
      ).removeClass(classes.subNavActive);

      if ($activeTrigger && $activeTrigger.length) {
        $activeTrigger.removeClass(classes.subNavActive);
      }
    } else {
      $toggleBtn.addClass(classes.subNavActive);
    }

    $activeTrigger = $toggleBtn;

    goToSubnav($toggleBtn.data('target'));
  }

  function goToSubnav(target) {
    /*eslint-disable shopify/jquery-dollar-sign-reference */

    var $targetMenu = target
      ? $('.mobile-nav__dropdown[data-parent="' + target + '"]')
      : cache.$mobileNav;

    menuLevel = $targetMenu.data('level') ? $targetMenu.data('level') : 1;

    if ($activeSubNav && $activeSubNav.length) {
      $activeSubNav.prepareTransition().addClass(classes.subNavClosing);
    }

    $activeSubNav = $targetMenu;

    /*eslint-enable shopify/jquery-dollar-sign-reference */

    var translateMenuHeight = $targetMenu.outerHeight();

    var openNavClass =
      menuLevel > 2 ? classes.thirdNavShowing : classes.subNavShowing;

    cache.$mobileNavContainer
      .css('height', translateMenuHeight)
      .removeClass(classes.thirdNavShowing)
      .addClass(openNavClass);

    if (!target) {
      // Show top level nav
      cache.$mobileNavContainer
        .removeClass(classes.thirdNavShowing)
        .removeClass(classes.subNavShowing);
    }

    /* if going back to first subnav, focus is on whole header */
    var $container = menuLevel === 1 ? cache.$sectionHeader : $targetMenu;

    var $menuTitle = $targetMenu.find('[data-menu-title=' + menuLevel + ']');
    var $elementToFocus = $menuTitle ? $menuTitle : $targetMenu;

    // Focusing an item in the subnav early forces element into view and breaks the animation.
    cache.$mobileNavContainer.one(
      'TransitionEnd.subnavToggle webkitTransitionEnd.subnavToggle transitionend.subnavToggle oTransitionEnd.subnavToggle',
      function() {
        slate.a11y.trapFocus({
          $container: $container,
          $elementToFocus: $elementToFocus,
          namespace: 'subNavFocus'
        });

        cache.$mobileNavContainer.off('.subnavToggle');
        isTransitioning = false;
      }
    );

    // Match height of subnav
    cache.$pageContainer.css({
      transform: 'translateY(' + translateMenuHeight + 'px)'
    });

    $activeSubNav.removeClass(classes.subNavClosing);
  }

  return {
    init: init,
    closeMobileNav: closeMobileNav
  };
})(jQuery);

(function() {
  var selectors = {
    backButton: '.return-link'
  };

  var $backButton = $(selectors.backButton);

  if (!document.referrer || !$backButton.length || !window.history.length) {
    return;
  }

  $backButton.one('click', function(evt) {
    evt.preventDefault();

    var referrerDomain = urlDomain(document.referrer);
    var shopDomain = urlDomain(window.location.href);

    if (shopDomain === referrerDomain) {
      history.back();
    }

    return false;
  });

  function urlDomain(url) {
    var anchor = document.createElement('a');
    anchor.ref = url;

    return anchor.hostname;
  }
})();

theme.Slideshow = (function() {
  this.$slideshow = null;
  var classes = {
    slideshow: 'slideshow',
    slickActiveMobile: 'slick-active-mobile',
    controlsHover: 'slideshow__controls--hover',
    isPaused: 'is-paused'
  };

  var selectors = {
    section: '.shopify-section',
    wrapper: '#SlideshowWrapper-',
    slides: '.slideshow__slide',
    textWrapperMobile: '.slideshow__text-wrap--mobile',
    textContentMobile: '.slideshow__text-content--mobile',
    controls: '.slideshow__controls',
    pauseButton: '.slideshow__pause',
    dots: '.slick-dots',
    arrows: '.slideshow__arrows',
    arrowsMobile: '.slideshow__arrows--mobile',
    arrowLeft: '.slideshow__arrow-left',
    arrowRight: '.slideshow__arrow-right'
  };

  function slideshow(el, sectionId) {
    var $slideshow = (this.$slideshow = $(el));
    this.adaptHeight = this.$slideshow.data('adapt-height');
    this.$wrapper = this.$slideshow.closest(selectors.wrapper + sectionId);
    this.$section = this.$wrapper.closest(selectors.section);
    this.$controls = this.$wrapper.find(selectors.controls);
    this.$arrows = this.$section.find(selectors.arrows);
    this.$arrowsMobile = this.$section.find(selectors.arrowsMobile);
    this.$pause = this.$controls.find(selectors.pauseButton);
    this.$textWrapperMobile = this.$section.find(selectors.textWrapperMobile);
    this.autorotate = this.$slideshow.data('autorotate');
    var autoplaySpeed = this.$slideshow.data('speed');
    var loadSlideA11yString = this.$slideshow.data('slide-nav-a11y');

    this.settings = {
      accessibility: true,
      arrows: false,
      dots: true,
      fade: true,
      draggable: true,
      touchThreshold: 20,
      autoplay: this.autorotate,
      autoplaySpeed: autoplaySpeed,
      // eslint-disable-next-line shopify/jquery-dollar-sign-reference
      appendDots: this.$arrows,
      customPaging: function(slick, index) {
        return (
          '<a href="' +
          selectors.wrapper +
          sectionId +
          '" aria-label="' +
          loadSlideA11yString.replace('[slide_number]', index + 1) +
          '" data-slide-number="' +
          index +
          '"></a>'
        );
      }
    };

    this.$slideshow.on('beforeChange', beforeChange.bind(this));
    this.$slideshow.on('init', slideshowA11ySetup.bind(this));

    // Add class to style mobile dots & show the correct text content for the
    // first slide on mobile when the slideshow initialises
    this.$slideshow.on(
      'init',
      function() {
        this.$mobileDots
          .find('li:first-of-type')
          .addClass(classes.slickActiveMobile);
        this.showMobileText(0);
      }.bind(this)
    );

    // Stop the autorotate when you scroll past the mobile controls, resume when
    // they are scrolled back into view
    if (this.autorotate) {
      $(document).scroll(
        $.debounce(
          250,
          function() {
            if (
              this.$arrowsMobile.offset().top +
                this.$arrowsMobile.outerHeight() <
              window.pageYOffset
            ) {
              $slideshow.slick('slickPause');
            } else if (!this.$pause.hasClass(classes.isPaused)) {
              $slideshow.slick('slickPlay');
            }
          }.bind(this)
        )
      );
    }

    if (this.adaptHeight) {
      this.setSlideshowHeight();
      $(window).resize($.debounce(50, this.setSlideshowHeight.bind(this)));
    }

    this.$slideshow.slick(this.settings);

    // This can't be called when the slick 'init' event fires due to how slick
    // adds a11y features.
    slideshowPostInitA11ySetup.bind(this)();

    this.$arrows.find(selectors.arrowLeft).on('click', function() {
      $slideshow.slick('slickPrev');
    });
    this.$arrows.find(selectors.arrowRight).on('click', function() {
      $slideshow.slick('slickNext');
    });

    this.$pause.on('click', this.togglePause.bind(this));
  }

  function slideshowA11ySetup(event, obj) {
    var $slider = obj.$slider;
    var $list = obj.$list;
    this.$dots = this.$section.find(selectors.dots);
    this.$mobileDots = this.$dots.eq(1);

    // Remove default Slick aria-live attr until slider is focused
    $list.removeAttr('aria-live');

    this.$wrapper.on('keyup', keyboardNavigation.bind(this));
    this.$controls.on('keyup', keyboardNavigation.bind(this));
    this.$textWrapperMobile.on('keyup', keyboardNavigation.bind(this));

    // When an element in the slider is focused
    // pause slideshow and set aria-live.
    this.$wrapper
      .on(
        'focusin',
        function(evt) {
          if (!this.$wrapper.has(evt.target).length) {
            return;
          }

          $list.attr('aria-live', 'polite');
          if (this.autorotate) {
            $slider.slick('slickPause');
          }
        }.bind(this)
      )
      .on(
        'focusout',
        function(evt) {
          if (!this.$wrapper.has(evt.target).length) {
            return;
          }

          $list.removeAttr('aria-live');
          if (this.autorotate) {
            // Only resume playing if the user hasn't paused using the pause
            // button
            if (!this.$pause.is('.is-paused')) {
              $slider.slick('slickPlay');
            }
          }
        }.bind(this)
      );

    // Add arrow key support when focused
    if (this.$dots) {
      this.$dots
        .find('a')
        .each(function() {
          var $dot = $(this);
          $dot.on('click keyup', function(evt) {
            if (
              evt.type === 'keyup' &&
              evt.which !== slate.utils.keyboardKeys.ENTER
            )
              return;

            evt.preventDefault();

            var slideNumber = $(evt.target).data('slide-number');

            $slider.attr('tabindex', -1).slick('slickGoTo', slideNumber);

            if (evt.type === 'keyup') {
              $slider.focus();
            }
          });
        })
        .eq(0)
        .attr('aria-current', 'true');
    }

    this.$controls
      .on('focusin', highlightControls.bind(this))
      .on('focusout', unhighlightControls.bind(this));
  }

  function slideshowPostInitA11ySetup() {
    var $slides = this.$slideshow.find(selectors.slides);

    $slides.removeAttr('role').removeAttr('aria-labelledby');
    this.$dots
      .removeAttr('role')
      .find('li')
      .removeAttr('role')
      .removeAttr('aria-selected')
      .each(function() {
        var $dot = $(this);
        var ariaControls = $dot.attr('aria-controls');
        $dot
          .removeAttr('aria-controls')
          .find('a')
          .attr('aria-controls', ariaControls);
      });
  }

  function beforeChange(event, slick, currentSlide, nextSlide) {
    var $dotLinks = this.$dots.find('a');
    var $mobileDotLinks = this.$mobileDots.find('li');

    $dotLinks
      .removeAttr('aria-current')
      .eq(nextSlide)
      .attr('aria-current', 'true');

    $mobileDotLinks
      .removeClass(classes.slickActiveMobile)
      .eq(nextSlide)
      .addClass(classes.slickActiveMobile);
    this.showMobileText(nextSlide);
  }

  function keyboardNavigation() {
    if (event.keyCode === slate.utils.keyboardKeys.LEFTARROW) {
      this.$slideshow.slick('slickPrev');
    }
    if (event.keyCode === slate.utils.keyboardKeys.RIGHTARROW) {
      this.$slideshow.slick('slickNext');
    }
  }

  function highlightControls() {
    this.$controls.addClass(classes.controlsHover);
  }

  function unhighlightControls() {
    this.$controls.removeClass(classes.controlsHover);
  }

  slideshow.prototype.togglePause = function() {
    var slideshowSelector = getSlideshowId(this.$pause);
    if (this.$pause.hasClass(classes.isPaused)) {
      this.$pause.removeClass(classes.isPaused).attr('aria-pressed', 'false');
      if (this.autorotate) {
        $(slideshowSelector).slick('slickPlay');
      }
    } else {
      this.$pause.addClass(classes.isPaused).attr('aria-pressed', 'true');
      if (this.autorotate) {
        $(slideshowSelector).slick('slickPause');
      }
    }
  };

  slideshow.prototype.setSlideshowHeight = function() {
    var minAspectRatio = this.$slideshow.data('min-aspect-ratio');
    this.$slideshow.height($(document).width() / minAspectRatio);
  };

  slideshow.prototype.showMobileText = function(slideIndex) {
    var $allTextContent = this.$textWrapperMobile.find(
      selectors.textContentMobile
    );
    var currentTextContentSelector =
      selectors.textContentMobile + '-' + slideIndex;
    var $currentTextContent = this.$textWrapperMobile.find(
      currentTextContentSelector
    );
    if (
      !$currentTextContent.length &&
      this.$slideshow.find(selectors.slides).length === 1
    ) {
      this.$textWrapperMobile.hide();
    } else {
      this.$textWrapperMobile.show();
    }
    $allTextContent.hide();
    $currentTextContent.show();
  };

  function getSlideshowId($el) {
    return '#Slideshow-' + $el.data('id');
  }

  return slideshow;
})();

theme.Video = (function() {
  var autoplayCheckComplete = false;
  var playOnClickChecked = false;
  var playOnClick = false;
  var youtubeLoaded = false;
  var videos = {};
  var videoPlayers = [];
  var videoOptions = {
    ratio: 16 / 9,
    scrollAnimationDuration: 400,
    playerVars: {
      // eslint-disable-next-line camelcase
      iv_load_policy: 3,
      modestbranding: 1,
      autoplay: 0,
      controls: 0,
      wmode: 'opaque',
      branding: 0,
      autohide: 0,
      rel: 0
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerChange
    }
  };
  var classes = {
    playing: 'video-is-playing',
    paused: 'video-is-paused',
    loading: 'video-is-loading',
    loaded: 'video-is-loaded',
    backgroundVideoWrapper: 'video-background-wrapper',
    videoWithImage: 'video--image_with_play',
    backgroundVideo: 'video--background',
    userPaused: 'is-paused',
    supportsAutoplay: 'autoplay',
    supportsNoAutoplay: 'no-autoplay',
    wrapperMinHeight: 'video-section-wrapper--min-height'
  };

  var selectors = {
    section: '.video-section',
    videoWrapper: '.video-section-wrapper',
    playVideoBtn: '.video-control__play',
    closeVideoBtn: '.video-control__close-wrapper',
    pauseVideoBtn: '.video__pause',
    pauseVideoStop: '.video__pause-stop',
    pauseVideoResume: '.video__pause-resume',
    fallbackText: '.icon__fallback-text'
  };

  /**
   * Public functions
   */
  function init($video) {
    if (!$video.length) {
      return;
    }

    videos[$video.attr('id')] = {
      id: $video.attr('id'),
      videoId: $video.data('id'),
      type: $video.data('type'),
      status:
        $video.data('type') === 'image_with_play' ? 'closed' : 'background', // closed, open, background
      $video: $video,
      $videoWrapper: $video.closest(selectors.videoWrapper),
      $section: $video.closest(selectors.section),
      controls: $video.data('type') === 'background' ? 0 : 1
    };

    if (!youtubeLoaded) {
      // This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    playOnClickCheck();
  }

  function customPlayVideo(playerId) {
    // Make sure we have carried out the playOnClick check first
    if (!playOnClickChecked && !playOnClick) {
      return;
    }

    if (playerId && typeof videoPlayers[playerId].playVideo === 'function') {
      privatePlayVideo(playerId);
    }
  }

  function pauseVideo(playerId) {
    if (
      videoPlayers[playerId] &&
      typeof videoPlayers[playerId].pauseVideo === 'function'
    ) {
      videoPlayers[playerId].pauseVideo();
    }
  }

  function loadVideos() {
    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        createPlayer(key);
      }
    }

    initEvents();
    youtubeLoaded = true;
  }

  function editorLoadVideo(key) {
    if (!youtubeLoaded) {
      return;
    }
    createPlayer(key);

    initEvents();
  }

  /**
   * Private functions
   */

  function privatePlayVideo(id, clicked) {
    var videoData = videos[id];
    var player = videoPlayers[id];
    var $videoWrapper = videoData.$videoWrapper;

    if (playOnClick) {
      // playOnClick means we are probably on mobile (no autoplay).
      // setAsPlaying will show the iframe, requiring another click
      // to play the video.
      setAsPlaying(videoData);
    } else if (clicked || autoplayCheckComplete) {
      // Play if autoplay is available or clicked to play
      $videoWrapper.removeClass(classes.loading);
      setAsPlaying(videoData);
      player.playVideo();
      return;
    } else {
      player.playVideo();
    }
  }

  function setAutoplaySupport(supported) {
    var supportClass = supported
      ? classes.supportsAutoplay
      : classes.supportsNoAutoplay;
    $(document.documentElement)
      .removeClass(classes.supportsAutoplay)
      .removeClass(classes.supportsNoAutoplay)
      .addClass(supportClass);

    if (!supported) {
      playOnClick = true;
    }

    autoplayCheckComplete = true;
  }

  function playOnClickCheck() {
    if (playOnClickChecked) {
      return;
    }

    if (isMobile()) {
      playOnClick = true;
    }

    if (playOnClick) {
      // No need to also do the autoplay check
      setAutoplaySupport(false);
    }

    playOnClickChecked = true;
  }

  // The API will call this function when each video player is ready
  function onPlayerReady(evt) {
    evt.target.setPlaybackQuality('hd1080');
    var videoData = getVideoOptions(evt);
    var videoTitle = evt.target.getVideoData().title;
    playOnClickCheck();

    // Prevent tabbing through YouTube player controls until visible
    $('#' + videoData.id).attr('tabindex', '-1');

    sizeBackgroundVideos();
    setButtonLabels(videoData.$videoWrapper, videoTitle);

    // Customize based on options from the video ID
    if (videoData.type === 'background') {
      evt.target.mute();
      privatePlayVideo(videoData.id);
    }

    videoData.$videoWrapper.addClass(classes.loaded);
  }

  function onPlayerChange(evt) {
    var videoData = getVideoOptions(evt);
    if (
      videoData.status === 'background' &&
      !isMobile() &&
      !autoplayCheckComplete &&
      (evt.data === YT.PlayerState.PLAYING ||
        evt.data === YT.PlayerState.BUFFERING)
    ) {
      setAutoplaySupport(true);
      autoplayCheckComplete = true;
      videoData.$videoWrapper.removeClass(classes.loading);
    }
    switch (evt.data) {
      case YT.PlayerState.ENDED:
        setAsFinished(videoData);
        break;
      case YT.PlayerState.PAUSED:
        // Seeking on a YouTube video also fires a PAUSED state change,
        // checking the state after a delay prevents us pausing the video when
        // the user is seeking instead of pausing
        setTimeout(function() {
          if (evt.target.getPlayerState() === YT.PlayerState.PAUSED) {
            setAsPaused(videoData);
          }
        }, 200);
        break;
    }
  }

  function setAsFinished(videoData) {
    switch (videoData.type) {
      case 'background':
        videoPlayers[videoData.id].seekTo(0);
        break;
      case 'image_with_play':
        closeVideo(videoData.id);
        toggleExpandVideo(videoData.id, false);
        break;
    }
  }

  function setAsPlaying(videoData) {
    var $videoWrapper = videoData.$videoWrapper;
    var $pauseButton = $videoWrapper.find(selectors.pauseVideoBtn);

    $videoWrapper.removeClass(classes.loading);

    if ($pauseButton.hasClass(classes.userPaused)) {
      $pauseButton.removeClass(classes.userPaused);
    }

    // Do not change element visibility if it is a background video
    if (videoData.status === 'background') {
      return;
    }

    $('#' + videoData.id).attr('tabindex', '0');

    if (videoData.type === 'image_with_play') {
      $videoWrapper.removeClass(classes.paused).addClass(classes.playing);
    }

    // Update focus to the close button so we stay within the video wrapper,
    // allowing time for the scroll animation
    setTimeout(function() {
      $videoWrapper.find(selectors.closeVideoBtn).focus();
    }, videoOptions.scrollAnimationDuration);
  }

  function setAsPaused(videoData) {
    var $videoWrapper = videoData.$videoWrapper;

    // YT's events fire after our click event. This status flag ensures
    // we don't interact with a closed or background video.
    if (videoData.type === 'image_with_play') {
      if (videoData.status === 'closed') {
        $videoWrapper.removeClass(classes.paused);
      } else {
        $videoWrapper.addClass(classes.paused);
      }
    }

    $videoWrapper.removeClass(classes.playing);
  }

  function closeVideo(playerId) {
    var videoData = videos[playerId];
    var $videoWrapper = videoData.$videoWrapper;
    var classesToRemove = [classes.paused, classes.playing].join(' ');

    if (isMobile()) {
      $videoWrapper.removeAttr('style');
    }

    $('#' + videoData.id).attr('tabindex', '-1');

    videoData.status = 'closed';

    switch (videoData.type) {
      case 'image_with_play':
        videoPlayers[playerId].stopVideo();
        setAsPaused(videoData); // in case the video is already paused
        break;
      case 'background':
        videoPlayers[playerId].mute();
        setBackgroundVideo(playerId);
        break;
    }

    $videoWrapper.removeClass(classesToRemove);
  }

  function getVideoOptions(evt) {
    var id = evt.target.getIframe().id;
    return videos[id];
  }

  function toggleExpandVideo(playerId, expand) {
    var video = videos[playerId];
    var elementTop = video.$videoWrapper.offset().top;
    var $playButton = video.$videoWrapper.find(selectors.playVideoBtn);
    var offset = 0;
    var newHeight = 0;

    if (isMobile()) {
      video.$videoWrapper.parent().toggleClass('page-width', !expand);
    }

    if (expand) {
      if (isMobile()) {
        newHeight = $(window).width() / videoOptions.ratio;
      } else {
        newHeight = video.$videoWrapper.width() / videoOptions.ratio;
      }
      offset = ($(window).height() - newHeight) / 2;

      video.$videoWrapper
        .removeClass(classes.wrapperMinHeight)
        .animate({ height: newHeight }, 600);

      // Animate doesn't work in mobile editor, so we don't use it
      if (!(isMobile() && Shopify.designMode)) {
        $('html, body').animate(
          {
            scrollTop: elementTop - offset
          },
          videoOptions.scrollAnimationDuration
        );
      }
    } else {
      if (isMobile()) {
        newHeight = video.$videoWrapper.data('mobile-height');
      } else {
        newHeight = video.$videoWrapper.data('desktop-height');
      }

      video.$videoWrapper
        .height(video.$videoWrapper.width() / videoOptions.ratio)
        .animate({ height: newHeight }, 600);
      setTimeout(function() {
        video.$videoWrapper.addClass(classes.wrapperMinHeight);
      }, 600);
      $playButton.focus();
    }
  }

  function togglePause(playerId) {
    var $pauseButton = videos[playerId].$videoWrapper.find(
      selectors.pauseVideoBtn
    );
    var paused = $pauseButton.hasClass(classes.userPaused);
    if (paused) {
      $pauseButton.removeClass(classes.userPaused);
      customPlayVideo(playerId);
    } else {
      $pauseButton.addClass(classes.userPaused);
      pauseVideo(playerId);
    }
    $pauseButton.attr('aria-pressed', !paused);
  }

  function startVideoOnClick(playerId) {
    var video = videos[playerId];

    // add loading class to wrapper
    video.$videoWrapper.addClass(classes.loading);

    // Explicity set the video wrapper height (needed for height transition)
    video.$videoWrapper.attr(
      'style',
      'height: ' + video.$videoWrapper.height() + 'px'
    );

    video.status = 'open';

    switch (video.type) {
      case 'image_with_play':
        privatePlayVideo(playerId, true);
        break;
      case 'background':
        unsetBackgroundVideo(playerId, video);
        videoPlayers[playerId].unMute();
        privatePlayVideo(playerId, true);
        break;
    }

    toggleExpandVideo(playerId, true);

    // esc to close video player
    $(document).on('keydown.videoPlayer', function(evt) {
      var playerId = $(document.activeElement).data('controls');
      if (evt.keyCode !== slate.utils.keyboardKeys.ESCAPE || !playerId) {
        return;
      }

      closeVideo(playerId);
      toggleExpandVideo(playerId, false);
    });
  }

  function sizeBackgroundVideos() {
    $('.' + classes.backgroundVideo).each(function(index, el) {
      sizeBackgroundVideo($(el));
    });
  }

  function sizeBackgroundVideo($videoPlayer) {
    if (!youtubeLoaded) {
      return;
    }

    if (isMobile()) {
      $videoPlayer.removeAttr('style');
    } else {
      var $videoWrapper = $videoPlayer.closest(selectors.videoWrapper);
      var videoWidth = $videoWrapper.width();
      var playerWidth = $videoPlayer.width();
      var desktopHeight = $videoWrapper.data('desktop-height');

      // when screen aspect ratio differs from video, video must center and underlay one dimension
      if (videoWidth / videoOptions.ratio < desktopHeight) {
        playerWidth = Math.ceil(desktopHeight * videoOptions.ratio); // get new player width
        $videoPlayer
          .width(playerWidth)
          .height(desktopHeight)
          .css({
            left: (videoWidth - playerWidth) / 2,
            top: 0
          }); // player width is greater, offset left; reset top
      } else {
        // new video width < window width (gap to right)
        desktopHeight = Math.ceil(videoWidth / videoOptions.ratio); // get new player height
        $videoPlayer
          .width(videoWidth)
          .height(desktopHeight)
          .css({
            left: 0,
            top: (desktopHeight - desktopHeight) / 2
          }); // player height is greater, offset top; reset left
      }

      $videoPlayer.prepareTransition();
      $videoWrapper.addClass(classes.loaded);
    }
  }

  function unsetBackgroundVideo(playerId) {
    // Switch the background video to a chrome-only player once played
    $('#' + playerId)
      .removeClass(classes.backgroundVideo)
      .addClass(classes.videoWithImage);

    setTimeout(function() {
      $('#' + playerId).removeAttr('style');
    }, 600);

    videos[playerId].$videoWrapper
      .removeClass(classes.backgroundVideoWrapper)
      .addClass(classes.playing);

    videos[playerId].status = 'open';
  }

  function setBackgroundVideo(playerId) {
    $('#' + playerId)
      .removeClass(classes.videoWithImage)
      .addClass(classes.backgroundVideo);

    videos[playerId].$videoWrapper.addClass(classes.backgroundVideoWrapper);

    videos[playerId].status = 'background';
    sizeBackgroundVideo($('#' + playerId));
  }

  function isMobile() {
    return $(window).width() < theme.breakpoints.medium;
  }

  function initEvents() {
    $(document).on('click.videoPlayer', selectors.playVideoBtn, function(evt) {
      var playerId = $(evt.currentTarget).data('controls');

      startVideoOnClick(playerId);
    });

    $(document).on('click.videoPlayer', selectors.closeVideoBtn, function(evt) {
      var playerId = $(evt.currentTarget).data('controls');

      $(evt.currentTarget).blur();
      closeVideo(playerId);
      toggleExpandVideo(playerId, false);
    });

    $(document).on('click.videoPlayer', selectors.pauseVideoBtn, function(evt) {
      var playerId = $(evt.currentTarget).data('controls');
      togglePause(playerId);
    });

    // Listen to resize to keep a background-size:cover-like layout
    $(window).on(
      'resize.videoPlayer',
      $.debounce(200, function() {
        if (!youtubeLoaded) return;
        var key;
        var fullscreen = window.innerHeight === screen.height;

        sizeBackgroundVideos();

        if (isMobile()) {
          for (key in videos) {
            if (videos.hasOwnProperty(key)) {
              if (videos[key].$videoWrapper.hasClass(classes.playing)) {
                if (!fullscreen) {
                  pauseVideo(key);
                  setAsPaused(videos[key]);
                }
              }
              videos[key].$videoWrapper.height(
                $(document).width() / videoOptions.ratio
              );
            }
          }
          setAutoplaySupport(false);
        } else {
          setAutoplaySupport(true);
          for (key in videos) {
            if (
              videos[key].$videoWrapper.find('.' + classes.videoWithImage)
                .length
            ) {
              continue;
            }
            videoPlayers[key].playVideo();
            setAsPlaying(videos[key]);
          }
        }
      })
    );

    $(window).on(
      'scroll.videoPlayer',
      $.debounce(50, function() {
        if (!youtubeLoaded) return;

        for (var key in videos) {
          if (videos.hasOwnProperty(key)) {
            var $videoWrapper = videos[key].$videoWrapper;

            // Close the video if more than 75% of it is scrolled out of view
            if (
              $videoWrapper.hasClass(classes.playing) &&
              ($videoWrapper.offset().top + $videoWrapper.height() * 0.75 <
                $(window).scrollTop() ||
                $videoWrapper.offset().top + $videoWrapper.height() * 0.25 >
                  $(window).scrollTop() + $(window).height())
            ) {
              closeVideo(key);
              toggleExpandVideo(key, false);
            }
          }
        }
      })
    );
  }

  function createPlayer(key) {
    var args = $.extend({}, videoOptions, videos[key]);
    args.playerVars.controls = args.controls;
    videoPlayers[key] = new YT.Player(key, args);
  }

  function removeEvents() {
    $(document).off('.videoPlayer');
    $(window).off('.videoPlayer');
  }

  function setButtonLabels($videoWrapper, title) {
    var $playButtons = $videoWrapper.find(selectors.playVideoBtn);
    var $closeButton = $videoWrapper.find(selectors.closeVideoBtn);
    var $pauseButton = $videoWrapper.find(selectors.pauseVideoBtn);
    var $closeButtonText = $closeButton.find(selectors.fallbackText);
    var $pauseButtonStopText = $pauseButton
      .find(selectors.pauseVideoStop)
      .find(selectors.fallbackText);
    var $pauseButtonResumeText = $pauseButton
      .find(selectors.pauseVideoResume)
      .find(selectors.fallbackText);

    // Insert the video title retrieved from YouTube into the instructional text
    // for each button
    $playButtons.each(function() {
      var $playButton = $(this);
      var $playButtonText = $playButton.find(selectors.fallbackText);

      $playButtonText.text(
        $playButtonText.text().replace('[video_title]', title)
      );
    });
    $closeButtonText.text(
      $closeButtonText.text().replace('[video_title]', title)
    );
    $pauseButtonStopText.text(
      $pauseButtonStopText.text().replace('[video_title]', title)
    );
    $pauseButtonResumeText.text(
      $pauseButtonResumeText.text().replace('[video_title]', title)
    );
  }

  return {
    init: init,
    editorLoadVideo: editorLoadVideo,
    loadVideos: loadVideos,
    playVideo: customPlayVideo,
    pauseVideo: pauseVideo,
    removeEvents: removeEvents
  };
})();

theme.ProductVideo = (function() {
  var videos = {};

  var hosts = {
    html5: 'html5',
    youtube: 'youtube'
  };

  var selectors = {
    productMediaWrapper: '[data-product-single-media-wrapper]'
  };

  var attributes = {
    enableVideoLooping: 'enable-video-looping',
    videoId: 'video-id'
  };

  function init(videoContainer, sectionId) {
    if (!videoContainer.length) {
      return;
    }

    var videoElement = videoContainer.find('iframe, video')[0];
    var mediaId = videoContainer.data('mediaId');

    if (!videoElement) {
      return;
    }

    videos[mediaId] = {
      mediaId: mediaId,
      sectionId: sectionId,
      host: hostFromVideoElement(videoElement),
      container: videoContainer,
      element: videoElement,
      ready: function() {
        createPlayer(this);
      }
    };

    var video = videos[mediaId];

    switch (video.host) {
      case hosts.html5:
        window.Shopify.loadFeatures([
          {
            name: 'video-ui',
            version: '1.0',
            onLoad: setupPlyrVideos
          }
        ]);
        theme.LibraryLoader.load('plyrShopifyStyles');
        break;
      case hosts.youtube:
        theme.LibraryLoader.load('youtubeSdk', setupYouTubeVideos);
        break;
    }
  }

  function setupPlyrVideos(errors) {
    if (errors) {
      fallbackToNativeVideo();
      return;
    }

    loadVideos(hosts.html5);
  }

  function setupYouTubeVideos() {
    if (!window.YT.Player) return;

    loadVideos(hosts.youtube);
  }

  function createPlayer(video) {
    if (video.player) {
      return;
    }

    var productMediaWrapper = video.container.closest(
      selectors.productMediaWrapper
    );
    var enableLooping = productMediaWrapper.data(attributes.enableVideoLooping);

    switch (video.host) {
      case hosts.html5:
        // eslint-disable-next-line no-undef
        video.player = new Shopify.Plyr(video.element, {
          loop: { active: enableLooping }
        });
        break;
      case hosts.youtube:
        var videoId = productMediaWrapper.data(attributes.videoId);

        video.player = new YT.Player(video.element, {
          videoId: videoId,
          events: {
            onStateChange: function(event) {
              if (event.data === 0 && enableLooping) event.target.seekTo(0);
            }
          }
        });
        break;
    }

    productMediaWrapper.on('mediaHidden xrLaunch', function() {
      if (!video.player) return;

      if (video.host === hosts.html5) {
        video.player.pause();
      }

      if (video.host === hosts.youtube && video.player.pauseVideo) {
        video.player.pauseVideo();
      }
    });

    productMediaWrapper.on('mediaVisible', function() {
      if (theme.Helpers.isTouch()) return;
      if (!video.player) return;

      if (video.host === hosts.html5) {
        video.player.play();
      }

      if (video.host === hosts.youtube && video.player.playVideo) {
        video.player.playVideo();
      }
    });
  }

  function hostFromVideoElement(video) {
    if (video.tagName === 'VIDEO') {
      return hosts.html5;
    }

    if (video.tagName === 'IFRAME') {
      if (
        /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(
          video.src
        )
      ) {
        return hosts.youtube;
      }
    }
    return null;
  }

  function loadVideos(host) {
    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        var video = videos[key];
        if (video.host === host) {
          video.ready();
        }
      }
    }
  }

  function fallbackToNativeVideo() {
    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        var video = videos[key];

        if (video.nativeVideo) continue;

        if (video.host === hosts.html5) {
          video.element.setAttribute('controls', 'controls');
          video.nativeVideo = true;
        }
      }
    }
  }

  function removeSectionVideos(sectionId) {
    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        var video = videos[key];

        if (video.sectionId === sectionId) {
          if (video.player) video.player.destroy();
          delete videos[key];
        }
      }
    }
  }

  return {
    init: init,
    hosts: hosts,
    loadVideos: loadVideos,
    removeSectionVideos: removeSectionVideos
  };
})();

theme.ProductModel = (function() {
  var modelJsonSections = {};
  var models = {};
  var xrButtons = {};

  var selectors = {
    mediaGroup: '[data-product-single-media-group]',
    xrButton: '[data-shopify-xr]'
  };

  function init(modelViewerContainers, sectionId) {
    modelJsonSections[sectionId] = {
      loaded: false
    };

    modelViewerContainers.each(function(index) {
      var $modelViewerContainer = $(this);
      var mediaId = $modelViewerContainer.data('media-id');
      var $modelViewerElement = $(
        $modelViewerContainer.find('model-viewer')[0]
      );
      var modelId = $modelViewerElement.data('model-id');

      if (index === 0) {
        var $xrButton = $modelViewerContainer
          .closest(selectors.mediaGroup)
          .find(selectors.xrButton);
        xrButtons[sectionId] = {
          $element: $xrButton,
          defaultId: modelId
        };
      }

      models[mediaId] = {
        modelId: modelId,
        sectionId: sectionId,
        $container: $modelViewerContainer,
        $element: $modelViewerElement
      };
    });

    window.Shopify.loadFeatures([
      {
        name: 'shopify-xr',
        version: '1.0',
        onLoad: setupShopifyXr
      },
      {
        name: 'model-viewer-ui',
        version: '1.0',
        onLoad: setupModelViewerUi
      }
    ]);
    theme.LibraryLoader.load('modelViewerUiStyles');
  }

  function setupShopifyXr(errors) {
    if (errors) return;

    if (!window.ShopifyXR) {
      document.addEventListener('shopify_xr_initialized', function() {
        setupShopifyXr();
      });
      return;
    }

    for (var sectionId in modelJsonSections) {
      if (modelJsonSections.hasOwnProperty(sectionId)) {
        var modelSection = modelJsonSections[sectionId];

        if (modelSection.loaded) continue;
        var $modelJson = $('#ModelJson-' + sectionId);

        window.ShopifyXR.addModels(JSON.parse($modelJson.html()));
        modelSection.loaded = true;
      }
    }
    window.ShopifyXR.setupXRElements();
  }

  function setupModelViewerUi(errors) {
    if (errors) return;

    for (var key in models) {
      if (models.hasOwnProperty(key)) {
        var model = models[key];
        if (!model.modelViewerUi) {
          model.modelViewerUi = new Shopify.ModelViewerUI(model.$element);
        }
        setupModelViewerListeners(model);
      }
    }
  }

  function setupModelViewerListeners(model) {
    var xrButton = xrButtons[model.sectionId];

    model.$container.on('mediaVisible', function() {
      xrButton.$element.attr('data-shopify-model3d-id', model.modelId);
      if (theme.Helpers.isTouch()) return;
      model.modelViewerUi.play();
    });

    model.$container
      .on('mediaHidden', function() {
        xrButton.$element.attr('data-shopify-model3d-id', xrButton.defaultId);
        model.modelViewerUi.pause();
      })
      .on('xrLaunch', function() {
        model.modelViewerUi.pause();
      });
  }

  function removeSectionModels(sectionId) {
    for (var key in models) {
      if (models.hasOwnProperty(key)) {
        var model = models[key];
        if (model.sectionId === sectionId) {
          models[key].modelViewerUi.destroy();
          delete models[key];
        }
      }
    }
    delete modelJsonSections[sectionId];
  }

  return {
    init: init,
    removeSectionModels: removeSectionModels
  };
})();

window.theme = window.theme || {};

theme.FormStatus = (function() {
  var selectors = {
    statusMessage: '[data-form-status]'
  };

  function init() {
    this.$statusMessage = $(selectors.statusMessage);

    if (!this.$statusMessage) return;

    this.$statusMessage.attr('tabindex', -1).focus();

    this.$statusMessage.on('blur', handleBlur.bind(this));
  }

  function handleBlur() {
    this.$statusMessage.removeAttr('tabindex');
  }

  return {
    init: init
  };
})();

theme.Hero = (function() {
  var classes = {
    indexSectionFlush: 'index-section--flush'
  };

  var selectors = {
    heroFixedWidthContent: '.hero-fixed-width__content',
    heroFixedWidthImage: '.hero-fixed-width__image'
  };

  function hero(el, sectionId) {
    this.$hero = $(el);
    this.layout = this.$hero.data('layout');
    var $parentSection = $('#shopify-section-' + sectionId);
    var $heroContent = $parentSection.find(selectors.heroFixedWidthContent);
    var $heroImage = $parentSection.find(selectors.heroFixedWidthImage);

    if (this.layout !== 'fixed_width') {
      return;
    }

    $parentSection.removeClass(classes.indexSectionFlush);
    heroFixedHeight();
    $(window).resize(
      $.debounce(50, function() {
        heroFixedHeight();
      })
    );

    function heroFixedHeight() {
      var contentHeight = $heroContent.height() + 50;
      var imageHeight = $heroImage.height();

      if (contentHeight > imageHeight) {
        $heroImage.css('min-height', contentHeight);
      }
    }
  }

  return hero;
})();

// prettier-ignore
window.theme = window.theme || {};

theme.SearchResultsTemplate = (function() {
  function renderResults(products, isLoading, searchQuery) {
    return [
      '<div class="predictive-search">',
      renderHeader(products, isLoading),
      renderProducts(products, searchQuery),
      '</div>'
    ].join('');
  }

  function renderHeader(products, isLoading) {
    if (products.length === 0) {
      return '';
    }

    return [
      '<div class="predictive-search-title">',
      '<h3 id="predictive-search" class="predictive-search-title__content">' +
        theme.strings.products +
        '</h3>',
      '<span class="predictive-search-title__loading-spinner">' +
        (isLoading
          ? '<span class= "icon-predictive-search-spinner" ></span >'
          : '') +
        '</span>',
      '</div>'
    ].join('');
  }

  function loadingState() {
    return [
      '<div class="predictive-search">',
      '<div class="predictive-search-loading">',
      '<span class="visually-hidden">' + theme.strings.loading + '</span>',
      '<span class="predictive-search-loading__icon">',
      '<span class="icon-predictive-search-spinner"></span>',
      '</span>',
      '</div>',
      '</div>'
    ].join('');
  }

  function renderViewAll(searchQuery) {
    return [
      '<button type="submit" class="predictive-search-view-all__button" tabindex="-1">',
      theme.strings.searchFor +
        '<span class="predictive-search-view-all__query"> &ldquo;' +
        _htmlEscape(searchQuery) +
        '&rdquo;</span>',
      '</button>'
    ].join('');
  }

  function renderProducts(products, searchQuery) {
    var resultsCount = products.length;

    return [
      '<ul id="predictive-search-results" class="predictive-search__list" role="listbox" aria-labelledby="predictive-search">',
      products
        .map(function(product, index) {
          return renderProduct(normalizeProduct(product), index, resultsCount);
        })
        .join(''),
      '<li id="search-all" class="predictive-search-view-all" role="option" data-search-result>' +
        renderViewAll(searchQuery) +
        '</li>',
      '</ul>'
    ].join('');
  }

  function renderProduct(product, index, resultsCount) {
    return [
      '<li id="search-result-' +
        index +
        '" class="predictive-search-item" role="option" data-search-result>',
      '<a class="predictive-search-item__link" href="' +
        product.url +
        '" tabindex="-1">',
      '<div class="predictive-search__column predictive-search__column--image" data-image-with-placeholder-wrapper>',
      renderProductImage(product),
      '</div>',
      '<div class="predictive-search__column predictive-search__column--content ' +
        (getDetailsCount() ? '' : 'predictive-search__column--center') +
        '">',
      '<span class="predictive-search-item__title">',
      '<span class="predictive-search-item__title-text">' +
        product.title +
        '</span>',
      '</span>' + (getDetailsCount() ? renderProductDetails(product) : ''),
      '<span class="visually-hidden">, </span>',
      '<span class="visually-hidden">' +
        getNumberOfResultsString(index + 1, resultsCount) +
        '</span>',
      '</div>',
      '</a>',
      '</li>'
    ].join('');
  }

  function renderProductImage(product) {
    if (product.image === null) {
      return '';
    }

    return [
      '<div class="placeholder-background placeholder-background--animation" data-image-placeholder aria-hidden="true"></div>',
      '<img class="predictive-search-item__image lazyload" src="' +
        product.image.url +
        '" data-src="' +
        product.image.url +
        '" data-image alt="' +
        product.image.alt +
        '" />'
    ].join('');
  }

  function renderProductDetails(product) {
    return [
      '<dl class="predictive-search-item__details price' +
        (product.isOnSale ? ' price--on-sale' : '') +
        (!product.available ? ' price--sold-out' : '') +
        (!product.isPriceVaries && product.isCompareVaries
          ? ' price--compare-price-hidden'
          : '') +
        '">',
      '<div class="predictive-search-item__detail">',
      renderVendor(product),
      '</div>',
      '<div class="predictive-search-item__detail predictive-search-item__detail--inline">' +
        renderProductPrice(product),
      '</div>',
      '</dl>'
    ].join('');
  }
  function renderProductPrice(product) {
    if (!theme.settings.predictiveSearchShowPrice) {
      return '';
    }

    var accessibilityAnnounceComma = '<span class="visually-hidden">, </span>';

    var priceMarkup =
      '<div class="price__regular">' + renderPrice(product) + '</div>';

    var salePriceMarkup =
      '<div class="price__sale">' + renderSalePrice(product) + '</div>';

    return (
      accessibilityAnnounceComma +
      '<div class="price__pricing-group">' +
      (product.isOnSale ? salePriceMarkup : priceMarkup) +
      '</div>'
    );
  }

  function renderSalePrice(product) {
    return [
      '<dt>',
      '<span class="visually-hidden">' + theme.strings.salePrice + '</span>',
      '</dt>',
      '<dd>',
      '<span class="predictive-search-item__price predictive-search-item__price--sale">' +
        (product.isPriceVaries
          ? theme.strings.fromLowestPrice.replace('[price]', product.price)
          : product.price) +
        '</span>',
      '</dd>',
      '<div class="price__compare">' + renderCompareAtPrice(product) + '</div>'
    ].join('');
  }

  function renderCompareAtPrice(product) {
    return [
      '<dt>',
      '<span class="visually-hidden">' +
        theme.strings.regularPrice +
        '</span> ',
      '</dt>',
      '<dd>',
      '<span class="predictive-search-item__price predictive-search-item__price--compare">' +
        product.compareAtPrice +
        '</span>',
      '</dd>'
    ].join('');
  }

  function renderPrice(product) {
    return [
      '<dt>',
      '<span class="visually-hidden">' + theme.strings.regularPrice + '</span>',
      '</dt>',
      '<dd>',
      '<span class="predictive-search-item__price">' +
        (product.isPriceVaries
          ? theme.strings.fromLowestPrice.replace('[price]', product.price)
          : product.price) +
        '</span>',
      '</dd>'
    ].join('');
  }

  function renderVendor(product) {
    if (!theme.settings.predictiveSearchShowVendor || product.vendor === '') {
      return '';
    }

    return [
      '<dt>',
      '<span class="visually-hidden">' + theme.strings.vendor + '</span>',
      '</dt>',
      '<dd class="predictive-search-item__vendor">' + product.vendor + '</dd>'
    ].join('');
  }

  function normalizeProduct(product) {
    var productOrVariant =
      product.variants.length > 0 ? product.variants[0] : product;

    return {
      url: productOrVariant.url,
      image: getProductImage(product),
      title: product.title,
      vendor: product.vendor || '',
      price: theme.Currency.formatMoney(product.price_min, theme.moneyFormat),
      compareAtPrice: theme.Currency.formatMoney(
        product.compare_at_price_min,
        theme.moneyFormat
      ),
      available: product.available,
      isOnSale: isOnSale(product),
      isPriceVaries: isPriceVaries(product),
      isCompareVaries: isCompareVaries(product)
    };
  }

  function getProductImage(product) {
    var image;
    var featuredImage;

    if (product.variants.length > 0 && product.variants[0].image !== null) {
      featuredImage = product.variants[0].featured_image;
    } else if (product.image) {
      featuredImage = product.featured_image;
    } else {
      image = null;
    }

    if (image !== null) {
      image = {
        url: theme.Images.getSizedImageUrl(featuredImage.url, '100x'),
        alt: featuredImage.alt
      };
    }

    return image;
  }

  function isOnSale(product) {
    return (
      product.compare_at_price_min !== null &&
      parseInt(product.compare_at_price_min, 10) >
        parseInt(product.price_min, 10)
    );
  }

  function isPriceVaries(product) {
    return product.price_max !== product.price_min;
  }

  function isCompareVaries(product) {
    return product.compare_at_price_max !== product.compare_at_price_min;
  }

  // Returns the number of optional product details to be shown,
  // values of the detailsList need to be boolean.
  function getDetailsCount() {
    var detailsList = [
      theme.settings.predictiveSearchShowPrice,
      theme.settings.predictiveSearchShowVendor
    ];

    var detailsCount = detailsList.reduce(function(acc, detail) {
      return acc + (detail ? 1 : 0);
    }, 0);

    return detailsCount;
  }

  function getNumberOfResultsString(resultNumber, resultsCount) {
    return theme.strings.number_of_results
      .replace('[result_number]', resultNumber)
      .replace('[results_count]', resultsCount);
  }

  function _htmlEscape(input) {
    return input
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  return function(data) {
    var products = data.products || [];
    var isLoading = data.isLoading;
    var searchQuery = data.searchQuery || '';

    if (isLoading && products.length === 0) {
      return loadingState();
    }

    return renderResults(products, isLoading, searchQuery);
  };
})();

window.theme = window.theme || {};

(function() {
  // (a11y) This function will be used by the Predictive Search Component
  // to announce the number of search results
  function numberOfResultsTemplateFct(data) {
    if (data.products.length === 1) {
      return theme.strings.one_result_found;
    } else {
      return theme.strings.number_of_results_found.replace(
        '[results_count]',
        data.products.length
      );
    }
  }

  // (a11y) This function will be used by the Predictive Search Component
  // to announce that it's loading results
  function loadingResultsMessageTemplateFct() {
    return theme.strings.loading;
  }

  function isPredictiveSearchSupported() {
    var shopifyFeatures = JSON.parse($('#shopify-features').text());

    return shopifyFeatures.predictiveSearch;
  }

  function isPredictiveSearchEnabled() {
    return window.theme.settings.predictiveSearchEnabled;
  }

  function canInitializePredictiveSearch() {
    return isPredictiveSearchSupported() && isPredictiveSearchEnabled();
  }

  // listen for search submits and validate query
  function validateSearchHandler(searchEl, submitEl) {
    submitEl.addEventListener(
      'click',
      validateSearchInput.bind(this, searchEl)
    );
  }

  // if there is nothing in the search field, prevent submit
  function validateSearchInput(searchEl, evt) {
    var isInputValueEmpty = searchEl.value.trim().length === 0;
    if (!isInputValueEmpty) {
      return;
    }

    if (typeof evt !== 'undefined') {
      evt.preventDefault();
    }

    searchEl.focus();
  }

  window.theme.SearchPage = (function() {
    var selectors = {
      searchReset: '[data-search-page-predictive-search-clear]',
      searchInput: '[data-search-page-predictive-search-input]',
      searchSubmit: '[data-search-page-predictive-search-submit]',
      searchResults: '[data-predictive-search-mount="default"]'
    };

    var componentInstance;
    var searchInput = document.querySelector(selectors.searchInput);
    var searchSubmit = document.querySelector(selectors.searchSubmit);

    function init(config) {
      componentInstance = new window.Shopify.theme.PredictiveSearchComponent({
        selectors: {
          input: selectors.searchInput,
          reset: selectors.searchReset,
          result: selectors.searchResults
        },
        resultTemplateFct: window.theme.SearchResultsTemplate,
        numberOfResultsTemplateFct: numberOfResultsTemplateFct,
        loadingResultsMessageTemplateFct: loadingResultsMessageTemplateFct,
        onOpen: function(nodes) {
          if (config.isTabletAndUp) {
            return;
          }

          var searchInputBoundingRect = $(
            selectors.searchInput
          )[0].getBoundingClientRect();
          var bodyHeight = $('body').height();
          var offset = 50;
          var resultsMaxHeight =
            bodyHeight - searchInputBoundingRect.bottom - offset;
          $(nodes.result).css({
            maxHeight: resultsMaxHeight
          });
        },
        onBeforeDestroy: function(nodes) {
          // If the viewport width changes from mobile to tablet
          // reset the top position of the results
          $(nodes.result).css({
            maxHeight: ''
          });
        }
      });

      validateSearchHandler(searchInput, searchSubmit);
    }

    function unload() {
      if (!componentInstance) {
        return;
      }
      componentInstance.destroy();
      componentInstance = null;
    }

    return {
      init: init,
      unload: unload
    };
  })();

  window.theme.SearchHeader = (function() {
    var selectors = {
      searchInput: '[data-predictive-search-drawer-input]',
      searchResults: '[data-predictive-search-mount="drawer"]',
      searchFormContainer: '[data-search-form-container]',
      searchSubmit: '[data-search-form-submit]'
    };

    var componentInstance;
    var searchInput = document.querySelector(selectors.searchInput);
    var searchSubmit = document.querySelector(selectors.searchSubmit);

    function init(config) {
      componentInstance = new window.Shopify.theme.PredictiveSearchComponent({
        selectors: {
          input: selectors.searchInput,
          result: selectors.searchResults
        },
        resultTemplateFct: window.theme.SearchResultsTemplate,
        numberOfResultsTemplateFct: numberOfResultsTemplateFct,
        numberOfResults: config.numberOfResults,
        loadingResultsMessageTemplateFct: loadingResultsMessageTemplateFct,
        onInputBlur: function() {
          return false;
        },
        onOpen: function(nodes) {
          var searchInputBoundingRect = $(
            searchInput
          )[0].getBoundingClientRect();

          // For tablet screens and up, stop the scroll area from extending past
          // the bottom of the screen because we're locking the body scroll
          var maxHeight =
            window.innerHeight -
            searchInputBoundingRect.bottom -
            (config.isTabletAndUp ? 20 : 0);

          $(nodes.result).css({
            top: config.isTabletAndUp ? '' : searchInputBoundingRect.bottom,
            maxHeight: maxHeight
          });
        },
        onClose: function(nodes) {
          $(nodes.result).css({
            maxHeight: ''
          });
        },
        onBeforeDestroy: function(nodes) {
          // If the viewport width changes from mobile to tablet
          // reset the top position of the results
          $(nodes.result).css({
            top: ''
          });
        }
      });

      validateSearchHandler(searchInput, searchSubmit);
    }

    function unload() {
      if (!componentInstance) {
        return;
      }

      componentInstance.destroy();
      componentInstance = null;
    }

    function clearAndClose() {
      if (!componentInstance) {
        return;
      }

      componentInstance.clearAndClose();
    }

    return {
      init: init,
      unload: unload,
      clearAndClose: clearAndClose
    };
  })();

  window.theme.Search = (function() {
    var classes = {
      searchTemplate: 'template-search'
    };
    var selectors = {
      siteHeader: '.site-header'
    };
    var mediaQueryList = {
      mobile: window.matchMedia('(max-width: 749px)'),
      tabletAndUp: window.matchMedia('(min-width: 750px)')
    };

    function init() {
      if (!$(selectors.siteHeader).length) {
        return;
      }

      if (!canInitializePredictiveSearch()) {
        return;
      }

      Object.keys(mediaQueryList).forEach(function(device) {
        mediaQueryList[device].addListener(initSearchAccordingToViewport);
      });

      initSearchAccordingToViewport();
    }

    function initSearchAccordingToViewport() {
      theme.SearchDrawer.close();
      theme.SearchHeader.unload();
      theme.SearchPage.unload();

      if (mediaQueryList.mobile.matches) {
        theme.SearchHeader.init({
          numberOfResults: 4,
          isTabletAndUp: false
        });

        if (isSearchPage()) {
          theme.SearchPage.init({ isTabletAndUp: false });
        }
      } else {
        // Tablet and up
        theme.SearchHeader.init({
          numberOfResults: 4,
          isTabletAndUp: true
        });

        if (isSearchPage()) {
          theme.SearchPage.init({ isTabletAndUp: true });
        }
      }
    }

    function isSearchPage() {
      return $('body').hasClass(classes.searchTemplate);
    }

    function unload() {
      theme.SearchHeader.unload();
      theme.SearchPage.unload();
    }

    return {
      init: init,
      unload: unload
    };
  })();
})();

window.theme = window.theme || {};

theme.SearchDrawer = (function() {
  var selectors = {
    headerSection: '[data-header-section]',
    drawer: '[data-predictive-search-drawer]',
    drawerOpenButton: '[data-predictive-search-open-drawer]',
    headerSearchInput: '[data-predictive-search-drawer-input]',
    predictiveSearchWrapper: '[data-predictive-search-mount="drawer"]'
  };

  var drawerInstance;

  function init() {
    setAccessibilityProps();

    drawerInstance = new theme.Drawers('SearchDrawer', 'top', {
      onDrawerOpen: function() {
        setHeight();
        theme.MobileNav.closeMobileNav();
        lockBodyScroll();
      },
      onDrawerClose: function() {
        theme.SearchHeader.clearAndClose();
        $(selectors.drawerOpenButton).focus();
        unlockBodyScroll();
      },
      withPredictiveSearch: true,
      $elementToFocusOnOpen: $(selectors.headerSearchInput)
    });
  }

  function setAccessibilityProps() {
    $(selectors.drawerOpenButton)
      .attr('aria-controls', 'SearchDrawer')
      .attr('aria-expanded', 'false')
      .attr('aria-haspopup', 'dialog');
  }

  function setHeight() {
    $(selectors.drawer).css({
      height: $(selectors.headerSection).outerHeight()
    });
  }

  function close() {
    drawerInstance.close();
  }

  function lockBodyScroll() {
    theme.Helpers.enableScrollLock();
  }

  function unlockBodyScroll() {
    theme.Helpers.disableScrollLock();
  }

  return {
    init: init,
    close: close
  };
})();

theme.Disclosure = (function() {
  var selectors = {
    disclosureList: '[data-disclosure-list]',
    disclosureToggle: '[data-disclosure-toggle]',
    disclosureInput: '[data-disclosure-input]',
    disclosureOptions: '[data-disclosure-option]'
  };

  var classes = {
    listVisible: 'disclosure-list--visible'
  };

  function Disclosure($disclosure) {
    this.$container = $disclosure;
    this.cache = {};
    this._cacheSelectors();
    this._connectOptions();
    this._connectToggle();
    this._onFocusOut();
  }

  Disclosure.prototype = Object.assign({}, Disclosure.prototype, {
    _cacheSelectors: function() {
      this.cache = {
        $disclosureList: this.$container.find(selectors.disclosureList),
        $disclosureToggle: this.$container.find(selectors.disclosureToggle),
        $disclosureInput: this.$container.find(selectors.disclosureInput),
        $disclosureOptions: this.$container.find(selectors.disclosureOptions)
      };
    },

    _connectToggle: function() {
      this.cache.$disclosureToggle.on(
        'click',
        function(evt) {
          var ariaExpanded =
            $(evt.currentTarget).attr('aria-expanded') === 'true';
          $(evt.currentTarget).attr('aria-expanded', !ariaExpanded);

          this.cache.$disclosureList.toggleClass(classes.listVisible);
        }.bind(this)
      );
    },

    _connectOptions: function() {
      this.cache.$disclosureOptions.on(
        'click',
        function(evt) {
          this._submitForm($(evt.currentTarget).data('value'));
        }.bind(this)
      );
    },

    _onFocusOut: function() {
      this.cache.$disclosureToggle.on(
        'focusout',
        function(evt) {
          var disclosureLostFocus =
            this.$container.has(evt.relatedTarget).length === 0;

          if (disclosureLostFocus) {
            this._hideList();
          }
        }.bind(this)
      );

      this.cache.$disclosureList.on(
        'focusout',
        function(evt) {
          var childInFocus =
            $(evt.currentTarget).has(evt.relatedTarget).length > 0;
          var isVisible = this.cache.$disclosureList.hasClass(
            classes.listVisible
          );

          if (isVisible && !childInFocus) {
            this._hideList();
          }
        }.bind(this)
      );

      this.$container.on(
        'keyup',
        function(evt) {
          if (evt.which !== slate.utils.keyboardKeys.ESCAPE) return;
          this._hideList();
          this.cache.$disclosureToggle.focus();
        }.bind(this)
      );

      $('body').on(
        'click',
        function(evt) {
          var isOption = this.$container.has(evt.target).length > 0;
          var isVisible = this.cache.$disclosureList.hasClass(
            classes.listVisible
          );

          if (isVisible && !isOption) {
            this._hideList();
          }
        }.bind(this)
      );
    },

    _submitForm: function(value) {
      this.cache.$disclosureInput.val(value);
      this.$container.parents('form').submit();
    },

    _hideList: function() {
      this.cache.$disclosureList.removeClass(classes.listVisible);
      this.cache.$disclosureToggle.attr('aria-expanded', false);
    },

    unload: function() {
      this.cache.$disclosureOptions.off();
      this.cache.$disclosureToggle.off();
      this.cache.$disclosureList.off();
      this.$container.off();
    }
  });

  return Disclosure;
})();

theme.Zoom = (function() {
  var selectors = {
    imageZoom: '[data-image-zoom]'
  };

  var classes = {
    zoomImg: 'zoomImg'
  };

  var attributes = {
    imageZoomTarget: 'data-image-zoom-target'
  };

  function Zoom(container) {
    this.container = container;
    this.cache = {};
    this.url = container.dataset.zoom;

    this._cacheSelectors();

    if (!this.cache.sourceImage) return;

    this._duplicateImage();
  }

  Zoom.prototype = Object.assign({}, Zoom.prototype, {
    _cacheSelectors: function() {
      this.cache = {
        sourceImage: this.container.querySelector(selectors.imageZoom)
      };
    },

    _init: function() {
      var targetWidth = this.cache.targetImage.width;
      var targetHeight = this.cache.targetImage.height;

      if (this.cache.sourceImage === this.cache.targetImage) {
        this.sourceWidth = targetWidth;
        this.sourceHeight = targetHeight;
      } else {
        this.sourceWidth = this.cache.sourceImage.width;
        this.sourceHeight = this.cache.sourceImage.height;
      }

      this.xRatio =
        (this.cache.sourceImage.width - targetWidth) / this.sourceWidth;
      this.yRatio =
        (this.cache.sourceImage.height - targetHeight) / this.sourceHeight;
    },

    _start: function(e) {
      this._init();
      this._move(e);
    },

    _stop: function() {
      this.cache.targetImage.style.opacity = 0;
    },

    /**
     * Sets the correct coordinates top and left position in px
     * It sets a limit within between 0 and the max height of the image
     * So when the mouse leaves the target image, it could
     * never go above or beyond the target image zone
     */
    _setTopLeftMaxValues: function(top, left) {
      return {
        left: Math.max(Math.min(left, this.sourceWidth), 0),
        top: Math.max(Math.min(top, this.sourceHeight), 0)
      };
    },

    _move: function(e) {
      // get left and top position within the "source image" zone
      var left =
        e.pageX -
        (this.cache.sourceImage.getBoundingClientRect().left + window.scrollX);
      var top =
        e.pageY -
        (this.cache.sourceImage.getBoundingClientRect().top + window.scrollY);
      // make sure the left and top position don't go
      // above or beyond the target image zone
      var position = this._setTopLeftMaxValues(top, left);

      top = position.top;
      left = position.left;

      this.cache.targetImage.style.left = -(left * -this.xRatio) + 'px';
      this.cache.targetImage.style.top = -(top * -this.yRatio) + 'px';
      this.cache.targetImage.style.opacity = 1;
    },

    /**
     * This loads a high resolution image
     * via the data attributes url
     * It adds all necessary CSS styles and adds to the container
     */
    _duplicateImage: function() {
      this._loadImage()
        .then(
          function(image) {
            this.cache.targetImage = image;
            image.style.width = image.width + 'px';
            image.style.height = image.height + 'px';
            image.style.position = 'absolute';
            image.style.maxWidth = 'none';
            image.style.maxHeight = 'none';
            image.style.opacity = 0;
            image.style.border = 'none';
            image.style.left = 0;
            image.style.top = 0;

            this.container.appendChild(image);

            this._init();

            this._start = this._start.bind(this);
            this._stop = this._stop.bind(this);
            this._move = this._move.bind(this);

            this.container.addEventListener('mouseenter', this._start);
            this.container.addEventListener('mouseleave', this._stop);
            this.container.addEventListener('mousemove', this._move);

            this.container.style.position = 'relative';
            this.container.style.overflow = 'hidden';
          }.bind(this)
        )
        .catch(function(error) {
          // eslint-disable-next-line no-console
          console.warn('Error fetching image', error);
        });
    },

    _loadImage: function() {
      // eslint-disable-next-line
      return new Promise(function(resolve, reject) {
          var image = new Image();
          image.setAttribute('role', 'presentation');
          image.setAttribute(attributes.imageZoomTarget, true);
          image.classList.add(classes.zoomImg);
          image.src = this.url;

          image.addEventListener('load', function() {
            resolve(image);
          });

          image.addEventListener('error', function(error) {
            reject(error);
          });
        }.bind(this)
      );
    },

    unload: function() {
      var targetImage = this.container.querySelector(
        '[' + attributes.imageZoomTarget + ']'
      );
      if (targetImage) {
        targetImage.remove();
      }

      this.container.removeEventListener('mouseenter', this._start);
      this.container.removeEventListener('mouseleave', this._stop);
      this.container.removeEventListener('mousemove', this._move);
    }
  });

  return Zoom;
})();


/* ================ TEMPLATES ================ */
(function() {
  var $filterBy = $('#BlogTagFilter');

  if (!$filterBy.length) {
    return;
  }

  slate.utils.resizeSelects($filterBy);

  $filterBy.on('change', function() {
    location.href = $(this).val();
  });
})();

window.theme = theme || {};

theme.customerTemplates = (function() {
  var selectors = {
    RecoverHeading: '#RecoverHeading',
    RecoverEmail: '#RecoverEmail',
    LoginHeading: '#LoginHeading'
  };

  function initEventListeners() {
    this.$RecoverHeading = $(selectors.RecoverHeading);
    this.$RecoverEmail = $(selectors.RecoverEmail);
    this.$LoginHeading = $(selectors.LoginHeading);

    // Show reset password form
    $('#RecoverPassword').on(
      'click',
      function(evt) {
        evt.preventDefault();
        showRecoverPasswordForm();
        this.$RecoverHeading.attr('tabindex', '-1').focus();
      }.bind(this)
    );

    // Hide reset password form
    $('#HideRecoverPasswordLink').on(
      'click',
      function(evt) {
        evt.preventDefault();
        hideRecoverPasswordForm();
        this.$LoginHeading.attr('tabindex', '-1').focus();
      }.bind(this)
    );

    this.$RecoverHeading.on('blur', function() {
      $(this).removeAttr('tabindex');
    });

    this.$LoginHeading.on('blur', function() {
      $(this).removeAttr('tabindex');
    });
  }

  /**
   *
   *  Show/Hide recover password form
   *
   */

  function showRecoverPasswordForm() {
    $('#RecoverPasswordForm').removeClass('hide');
    $('#CustomerLoginForm').addClass('hide');

    if (this.$RecoverEmail.attr('aria-invalid') === 'true') {
      this.$RecoverEmail.focus();
    }
  }

  function hideRecoverPasswordForm() {
    $('#RecoverPasswordForm').addClass('hide');
    $('#CustomerLoginForm').removeClass('hide');
  }

  /**
   *
   *  Show reset password success message
   *
   */
  function resetPasswordSuccess() {
    var $formState = $('.reset-password-success');

    // check if reset password form was successfully submited.
    if (!$formState.length) {
      return;
    }

    // show success message
    $('#ResetSuccess')
      .removeClass('hide')
      .focus();
  }

  /**
   *
   *  Show/hide customer address forms
   *
   */
  function customerAddressForm() {
    var $newAddressForm = $('#AddressNewForm');
    var $newAddressFormButton = $('#AddressNewButton');

    if (!$newAddressForm.length) {
      return;
    }

    // Initialize observers on address selectors, defined in shopify_common.js
    if (Shopify) {
      // eslint-disable-next-line no-new
      new Shopify.CountryProvinceSelector(
        'AddressCountryNew',
        'AddressProvinceNew',
        {
          hideElement: 'AddressProvinceContainerNew'
        }
      );
    }

    // Initialize each edit form's country/province selector
    $('.address-country-option').each(function() {
      var formId = $(this).data('form-id');
      var countrySelector = 'AddressCountry_' + formId;
      var provinceSelector = 'AddressProvince_' + formId;
      var containerSelector = 'AddressProvinceContainer_' + formId;

      // eslint-disable-next-line no-new
      new Shopify.CountryProvinceSelector(countrySelector, provinceSelector, {
        hideElement: containerSelector
      });
    });

    // Toggle new/edit address forms
    $('.address-new-toggle').on('click', function() {
      var isExpanded = $newAddressFormButton.attr('aria-expanded') === 'true';

      $newAddressForm.toggleClass('hide');
      $newAddressFormButton.attr('aria-expanded', !isExpanded).focus();
    });

    $('.address-edit-toggle').on('click', function() {
      var formId = $(this).data('form-id');
      var $editButton = $('#EditFormButton_' + formId);
      var $editAddress = $('#EditAddress_' + formId);
      var isExpanded = $editButton.attr('aria-expanded') === 'true';

      $editAddress.toggleClass('hide');
      $editButton.attr('aria-expanded', !isExpanded).focus();
    });

    $('.address-delete').on('click', function() {
      var $el = $(this);
      var target = $el.data('target');
      var confirmMessage = $el.data('confirm-message');

      // eslint-disable-next-line no-alert
      if (
        confirm(
          confirmMessage || 'Are you sure you wish to delete this address?'
        )
      ) {
        Shopify.postLink(target, {
          parameters: { _method: 'delete' }
        });
      }
    });
  }

  /**
   *
   *  Check URL for reset password hash
   *
   */
  function checkUrlHash() {
    var hash = window.location.hash;

    // Allow deep linking to recover password form
    if (hash === '#recover') {
      showRecoverPasswordForm.bind(this)();
    }
  }

  return {
    init: function() {
      initEventListeners();
      checkUrlHash();
      resetPasswordSuccess();
      customerAddressForm();
    }
  };
})();


/*================ SECTIONS ================*/
window.theme = window.theme || {};

theme.Cart = (function() {
  var selectors = {
    cartCount: '[data-cart-count]',
    cartCountBubble: '[data-cart-count-bubble]',
    cartDiscount: '[data-cart-discount]',
    cartDiscountTitle: '[data-cart-discount-title]',
    cartDiscountAmount: '[data-cart-discount-amount]',
    cartDiscountWrapper: '[data-cart-discount-wrapper]',
    cartErrorMessage: '[data-cart-error-message]',
    cartErrorMessageWrapper: '[data-cart-error-message-wrapper]',
    cartItem: '[data-cart-item]',
    cartItemDetails: '[data-cart-item-details]',
    cartItemDiscount: '[data-cart-item-discount]',
    cartItemDiscountedPriceGroup: '[data-cart-item-discounted-price-group]',
    cartItemDiscountTitle: '[data-cart-item-discount-title]',
    cartItemDiscountAmount: '[data-cart-item-discount-amount]',
    cartItemDiscountList: '[data-cart-item-discount-list]',
    cartItemFinalPrice: '[data-cart-item-final-price]',
    cartItemImage: '[data-cart-item-image]',
    cartItemLinePrice: '[data-cart-item-line-price]',
    cartItemOriginalPrice: '[data-cart-item-original-price]',
    cartItemPrice: '[data-cart-item-price]',
    cartItemPriceList: '[data-cart-item-price-list]',
    cartItemProperty: '[data-cart-item-property]',
    cartItemPropertyName: '[data-cart-item-property-name]',
    cartItemPropertyValue: '[data-cart-item-property-value]',
    cartItemRegularPriceGroup: '[data-cart-item-regular-price-group]',
    cartItemRegularPrice: '[data-cart-item-regular-price]',
    cartItemTitle: '[data-cart-item-title]',
    cartItemOption: '[data-cart-item-option]',
    cartLineItems: '[data-cart-line-items]',
    cartNote: '[data-cart-notes]',
    cartQuantityErrorMessage: '[data-cart-quantity-error-message]',
    cartQuantityErrorMessageWrapper:
      '[data-cart-quantity-error-message-wrapper]',
    cartRemove: '[data-cart-remove]',
    cartStatus: '[data-cart-status]',
    cartSubtotal: '[data-cart-subtotal]',
    cartTableCell: '[data-cart-table-cell]',
    cartWrapper: '[data-cart-wrapper]',
    emptyPageContent: '[data-empty-page-content]',
    quantityInput: '[data-quantity-input]',
    quantityInputMobile: '[data-quantity-input-mobile]',
    quantityInputDesktop: '[data-quantity-input-desktop]',
    quantityLabelMobile: '[data-quantity-label-mobile]',
    quantityLabelDesktop: '[data-quantity-label-desktop]',
    inputQty: '[data-quantity-input]',
    thumbnails: '.cart__image',
    unitPrice: '[data-unit-price]',
    unitPriceBaseUnit: '[data-unit-price-base-unit]',
    unitPriceGroup: '[data-unit-price-group]'
  };

  var classes = {
    cartNoCookies: 'cart--no-cookies',
    cartRemovedProduct: 'cart__removed-product',
    hide: 'hide',
    inputError: 'input--error'
  };

  var attributes = {
    cartItemIndex: 'data-cart-item-index',
    cartItemKey: 'data-cart-item-key',
    cartItemQuantity: 'data-cart-item-quantity',
    cartItemTitle: 'data-cart-item-title',
    cartItemUrl: 'data-cart-item-url',
    quantityItem: 'data-quantity-item'
  };

  theme.breakpoints = theme.breakpoints || {};

  if (
    isNaN(theme.breakpoints.medium) ||
    theme.breakpoints.medium === undefined
  ) {
    theme.breakpoints.medium = 750;
  }

  var mediumUpQuery = '(min-width: ' + theme.breakpoints.medium + 'px)';

  function Cart(container) {
    this.$container = $(container);
    this.$thumbnails = $(selectors.thumbnails, this.$container);
    this.ajaxEnabled = this.$container.data('ajax-enabled');

    if (!this.cookiesEnabled()) {
      this.$container.addClass(classes.cartNoCookies);
    }

    this.$thumbnails.css('cursor', 'pointer');
    this.$container.on(
      'click',
      selectors.thumbnails,
      this._handleThumbnailClick
    );

    this.$container.on(
      'change',
      selectors.inputQty,
      $.debounce(500, this._handleInputQty.bind(this))
    );

    this.mql = window.matchMedia(mediumUpQuery);
    this.mql.addListener(this.setQuantityFormControllers.bind(this));
    this.setQuantityFormControllers();

    if (this.ajaxEnabled) {
      /**
       * Because the entire cart is recreated when a cart item is updated,
       * we cannot cache the elements in the cart. Instead, we add the event
       * listeners on the cart's container to allow us to retain the event
       * listeners after rebuilding the cart when an item is updated.
       */

      this.$container.on(
        'change',
        selectors.cartNote,
        this._onNoteChange.bind(this)
      );

      this.$container.on(
        'click',
        selectors.cartRemove,
        this._onRemoveItem.bind(this)
      );

      this._setupCartTemplates();
    }
  }

  Cart.prototype = Object.assign({}, Cart.prototype, {
    _setupCartTemplates: function() {
      this.$itemTemplate = $(selectors.cartItem, this.$container)
        .first()
        .clone();
      this.$itemDiscountTemplate = $(
        selectors.cartItemDiscount,
        this.$itemTemplate
      ).clone();
      this.$itemOptionTemplate = $(
        selectors.cartItemOption,
        this.$itemTemplate
      ).clone();
      this.$itemPropertyTemplate = $(
        selectors.cartItemProperty,
        this.$itemTemplate
      ).clone();
      this.$itemPriceListTemplate = $(
        selectors.cartItemPriceList,
        this.$itemTemplate
      ).clone();
      this.$itemLinePriceTemplate = $(
        selectors.cartItemLinePrice,
        this.$itemTemplate
      ).clone();
      this.$cartDiscountTemplate = $(
        selectors.cartDiscount,
        this.$container
      ).clone();
    },

    _handleInputQty: function(evt) {
      var $input = $(evt.target);
      var itemIndex = $input.data('quantity-item');
      var $itemElement = $input.closest(selectors.cartItem);
      var $itemQtyInputs = $('[data-quantity-item=' + itemIndex + ']');
      var value = parseInt($input.val());
      var isValidValue = !(value < 0 || isNaN(value));
      $itemQtyInputs.val(value);

      this._hideCartError();
      this._hideQuantityErrorMessage();

      if (!isValidValue) {
        this._showQuantityErrorMessages($itemElement);
        return;
      }

      if (isValidValue && this.ajaxEnabled) {
        this._updateItemQuantity(
          itemIndex,
          $itemElement,
          $itemQtyInputs,
          value
        );
      }
    },

    _updateItemQuantity: function(
      itemIndex,
      $itemElement,
      $itemQtyInputs,
      value
    ) {
      var key = $itemElement.attr(attributes.cartItemKey);
      var index = $itemElement.attr(attributes.cartItemIndex);

      var params = {
        url: '/cart/change.js',
        data: { quantity: value, line: index },
        dataType: 'json'
      };

      $.post(params)
        .done(
          function(state) {
            Shopify.getCart(function(state) {
            if (state.item_count === 0) {
              this._emptyCart();
            } else {
              this._createCart(state);

              if (value === 0) {
                this._showRemoveMessage($itemElement.clone());
              } else {
                var $lineItem = $('[data-cart-item-key="' + key + '"]');
                var item = this.getItem(key, state);

                $(selectors.quantityInput, $lineItem).focus();
                this._updateLiveRegion(item);
              }
            }

            this._setCartCountBubble(state.item_count);
           }.bind(this));   
          }.bind(this)
        )
        .fail(
          function() {
            this._showCartError($itemQtyInputs);
          }.bind(this)
        );
    },

    getItem: function(key, state) {
      return state.items.find(function(item) {
        return item.key === key;
      });
    },

    _liveRegionText: function(item) {
      // Dummy content for live region
      var liveRegionText =
        theme.strings.update +
        ': [QuantityLabel]: [Quantity], [Regular] [$$] [DiscountedPrice] [$]. [PriceInformation]';

      // Update Quantity
      liveRegionText = liveRegionText
        .replace('[QuantityLabel]', theme.strings.quantity)
        .replace('[Quantity]', item.quantity);

      // Update pricing information
      var regularLabel = '';
      var regularPrice = theme.Currency.formatMoney(
        item.original_line_price,
        theme.moneyFormat
      );
      var discountLabel = '';
      var discountPrice = '';
      var discountInformation = '';

      if (item.original_line_price > item.final_line_price) {
        regularLabel = theme.strings.regularTotal;

        discountLabel = theme.strings.discountedTotal;
        discountPrice = theme.Currency.formatMoney(
          item.final_line_price,
          theme.moneyFormat
        );

        discountInformation = theme.strings.priceColumn;
      }

      liveRegionText = liveRegionText
        .replace('[Regular]', regularLabel)
        .replace('[$$]', regularPrice)
        .replace('[DiscountedPrice]', discountLabel)
        .replace('[$]', discountPrice)
        .replace('[PriceInformation]', discountInformation)
        .trim();

      return liveRegionText;
    },

    _updateLiveRegion: function(item) {
      var $liveRegion = $(selectors.cartStatus);
      $liveRegion.html(this._liveRegionText(item)).attr('aria-hidden', false);

      // hide content from accessibility tree after announcement
      setTimeout(function() {
        $liveRegion.attr('aria-hidden', true);
      }, 1000);
    },

    _createCart: function(state) {
      var cartDiscountList = this._createCartDiscountList(state);

      $(selectors.cartLineItems, this.$container).html(
        this._createLineItemList(state)
      );

      this.setQuantityFormControllers();

      $(selectors.cartNote, this.$container).val(state.note);

      if (cartDiscountList.length === 0) {
        $(selectors.cartDiscountWrapper, this.$container)
          .html('')
          .addClass(classes.hide);
      } else {
        $(selectors.cartDiscountWrapper, this.$container)
          .html(cartDiscountList)
          .removeClass(classes.hide);
      }

      $(selectors.cartSubtotal, this.$container).html(
        theme.Currency.formatMoney(
          state.total_price,
          theme.moneyFormatWithCurrency
        )
      );
    },

    _createCartDiscountList: function(cart) {
      return $.map(
        cart.cart_level_discount_applications,
        function(discount) {
          var $discount = this.$cartDiscountTemplate.clone();
          $discount.find(selectors.cartDiscountTitle).text(discount.title);
          $discount
            .find(selectors.cartDiscountAmount)
            .html(
              theme.Currency.formatMoney(
                discount.total_allocated_amount,
                theme.moneyFormat
              )
            );
          return $discount[0];
        }.bind(this)
      );
    },

    _createLineItemList: function(state) {
      return $.map(
        state.items,
        function(item, index) {
          var $item = this.$itemTemplate.clone();
          var $itemPriceList = this.$itemPriceListTemplate.clone();

          this._setLineItemAttributes($item, item, index);
          this._setLineItemImage($item, item.featured_image);

          $(selectors.cartItemTitle, $item)
            .text(item.product_title)
            .attr('href', item.url);

          var productDetailsList = this._createProductDetailsList(
            item.product_has_only_default_variant,
            item.options_with_values,
            item.properties
          );
          this._setProductDetailsList($item, productDetailsList);

          this._setItemRemove($item, item.title);

          $itemPriceList.html(
            this._createItemPrice(
              item.original_price,
              item.final_price,
              this.$itemPriceListTemplate
            )
          );

          if (item.unit_price_measurement) {
            $itemPriceList.append(
              this._createUnitPrice(
                item.unit_price,
                item.unit_price_measurement,
                this.$itemPriceListTemplate
              )
            );
          }

          this._setItemPrice($item, $itemPriceList);

          var itemDiscountList = this._createItemDiscountList(item);
          this._setItemDiscountList($item, itemDiscountList);

          this._setQuantityInputs($item, item, index);

          var itemLinePrice = this._createItemPrice(
            item.original_line_price,
            item.final_line_price,
            this.$itemLinePriceTemplate
          );
          this._setItemLinePrice($item, itemLinePrice);

          return $item[0];
        }.bind(this)
      );
    },

    _setLineItemAttributes: function($item, item, index) {
      $item
        .attr(attributes.cartItemKey, item.key)
        .attr(attributes.cartItemUrl, item.url)
        .attr(attributes.cartItemTitle, item.title)
        .attr(attributes.cartItemIndex, index + 1)
        .attr(attributes.cartItemQuantity, item.quantity);
    },

    _setLineItemImage: function($item, featuredImage) {
      var $image = $(selectors.cartItemImage, $item);

      var sizedImageUrl =
        featuredImage.url !== null
          ? theme.Images.getSizedImageUrl(featuredImage.url, 'x190')
          : null;

      if (sizedImageUrl) {
        $image
          .attr('alt', featuredImage.alt)
          .attr('src', sizedImageUrl)
          .removeClass(classes.hide);
      } else {
        $image.remove();
      }
    },

    _setProductDetailsList: function($item, productDetailsList) {
      var $itemDetails = $(selectors.cartItemDetails, $item);

      if (productDetailsList.length === 0) {
        $itemDetails.addClass(classes.hide).text('');
      } else {
        $itemDetails.removeClass(classes.hide).html(productDetailsList);
      }
    },

    _setItemPrice: function($item, price) {
      $(selectors.cartItemPrice, $item).html(price);
    },

    _setItemDiscountList: function($item, discountList) {
      var $itemDiscountList = $(selectors.cartItemDiscountList, $item);

      if (discountList.length === 0) {
        $itemDiscountList.html('').addClass(classes.hide);
      } else {
        $itemDiscountList.html(discountList).removeClass(classes.hide);
      }
    },

    _setItemRemove: function($item, title) {
      $(selectors.cartRemove, $item).attr(
        'aria-label',
        theme.strings.removeLabel.replace('[product]', title)
      );
    },

    _setQuantityInputs: function($item, item, index) {
      $(selectors.quantityInputMobile, $item)
        .attr('id', 'updates_' + item.key)
        .attr(attributes.quantityItem, index + 1)
        .val(item.quantity);

      $(selectors.quantityInputDesktop, $item)
        .attr('id', 'updates_large_' + item.key)
        .attr(attributes.quantityItem, index + 1)
        .val(item.quantity);

      $(selectors.quantityLabelMobile, $item).attr(
        'for',
        'updates_' + item.key
      );

      $(selectors.quantityLabelDesktop, $item).attr(
        'for',
        'updates_large_' + item.key
      );
    },

    setQuantityFormControllers: function() {
      if (this.mql.matches) {
        $(selectors.quantityInputDesktop).attr('name', 'updates[]');
        $(selectors.quantityInputMobile).removeAttr('name');
      } else {
        $(selectors.quantityInputMobile).attr('name', 'updates[]');
        $(selectors.quantityInputDesktop).removeAttr('name');
      }
    },

    _setItemLinePrice: function($item, price) {
      $(selectors.cartItemLinePrice, $item).html(price);
    },

    _createProductDetailsList: function(
      product_has_only_default_variant,
      options,
      properties
    ) {
      var optionsPropertiesHTML = [];

      if (!product_has_only_default_variant) {
        optionsPropertiesHTML = optionsPropertiesHTML.concat(
          this._getOptionList(options)
        );
      }

      if (properties !== null && Object.keys(properties).length !== 0) {
        optionsPropertiesHTML = optionsPropertiesHTML.concat(
          this._getPropertyList(properties)
        );
      }

      return optionsPropertiesHTML;
    },

    _getOptionList: function(options) {
      return $.map(
        options,
        function(option) {
          var $optionElement = this.$itemOptionTemplate.clone();

          $optionElement
            .text(option.name + ': ' + option.value)
            .removeClass(classes.hide);

          return $optionElement[0];
        }.bind(this)
      );
    },

    _getPropertyList: function(properties) {
      var propertiesArray =
        properties !== null ? Object.entries(properties) : [];

      return $.map(
        propertiesArray,
        function(property) {
          var $propertyElement = this.$itemPropertyTemplate.clone();

          // Line item properties prefixed with an underscore are not to be displayed
          if (property[0].charAt(0) === '_') return;

          // if the property value has a length of 0 (empty), don't display it
          if (property[1].length === 0) return;

          $propertyElement
            .find(selectors.cartItemPropertyName)
            .text(property[0]);

          if (property[0].indexOf('/uploads/') === -1) {
            $propertyElement
              .find(selectors.cartItemPropertyValue)
              .text(': ' + property[1]);
          } else {
            $propertyElement
              .find(selectors.cartItemPropertyValue)
              .html(
                ': <a href="' +
                  property[1] +
                  '"> ' +
                  property[1].split('/').pop() +
                  '</a>'
              );
          }

          $propertyElement.removeClass(classes.hide);

          return $propertyElement[0];
        }.bind(this)
      );
    },

    _createItemPrice: function(original_price, final_price, $priceTemplate) {
      if (original_price !== final_price) {
        var $discountedPrice = $(
          selectors.cartItemDiscountedPriceGroup,
          $priceTemplate
        ).clone();

        $(selectors.cartItemOriginalPrice, $discountedPrice).html(
          theme.Currency.formatMoney(original_price, theme.moneyFormat)
        );
        $(selectors.cartItemFinalPrice, $discountedPrice).html(
          theme.Currency.formatMoney(final_price, theme.moneyFormat)
        );
        $discountedPrice.removeClass(classes.hide);

        return $discountedPrice[0];
      } else {
        var $regularPrice = $(
          selectors.cartItemRegularPriceGroup,
          $priceTemplate
        ).clone();

        $(selectors.cartItemRegularPrice, $regularPrice).html(
          theme.Currency.formatMoney(original_price, theme.moneyFormat)
        );

        $regularPrice.removeClass(classes.hide);

        return $regularPrice[0];
      }
    },

    _createUnitPrice: function(
      unitPrice,
      unitPriceMeasurement,
      $itemPriceGroup
    ) {
      var $unitPriceGroup = $(
        selectors.unitPriceGroup,
        $itemPriceGroup
      ).clone();

      var unitPriceBaseUnit =
        (unitPriceMeasurement.reference_value !== 1
          ? unitPriceMeasurement.reference_value
          : '') + unitPriceMeasurement.reference_unit;

      $(selectors.unitPriceBaseUnit, $unitPriceGroup).text(unitPriceBaseUnit);
      $(selectors.unitPrice, $unitPriceGroup).html(
        theme.Currency.formatMoney(unitPrice, theme.moneyFormat)
      );

      $unitPriceGroup.removeClass(classes.hide);

      return $unitPriceGroup[0];
    },

    _createItemDiscountList: function(item) {
      return $.map(
        item.line_level_discount_allocations,
        function(discount) {
          var $discount = this.$itemDiscountTemplate.clone();
          $discount
            .find(selectors.cartItemDiscountTitle)
            .text(discount.discount_application.title);
          $discount
            .find(selectors.cartItemDiscountAmount)
            .html(
              theme.Currency.formatMoney(discount.amount, theme.moneyFormat)
            );
          return $discount[0];
        }.bind(this)
      );
    },

    _showQuantityErrorMessages: function(itemElement) {
      $(selectors.cartQuantityErrorMessage, itemElement).text(
        theme.strings.quantityMinimumMessage
      );

      $(selectors.cartQuantityErrorMessageWrapper, itemElement).removeClass(
        classes.hide
      );

      $(selectors.inputQty, itemElement)
        .addClass(classes.inputError)
        .focus();
    },

    _hideQuantityErrorMessage: function() {
      var $errorMessages = $(
        selectors.cartQuantityErrorMessageWrapper
      ).addClass(classes.hide);

      $(selectors.cartQuantityErrorMessage, $errorMessages).text('');

      $(selectors.inputQty, this.$container).removeClass(classes.inputError);
    },

    _handleThumbnailClick: function(evt) {
      var url = $(evt.target)
        .closest(selectors.cartItem)
        .data('cart-item-url');

      window.location.href = url;
    },

    _onNoteChange: function(evt) {
      var note = evt.currentTarget.value;
      this._hideCartError();
      this._hideQuantityErrorMessage();

      var params = {
        url: '/cart/update.js',
        data: { note: note },
        dataType: 'json'
      };

      $.post(params).fail(
        function() {
          this._showCartError(evt.currentTarget);
        }.bind(this)
      );
    },

    _showCartError: function(elementToFocus) {
      $(selectors.cartErrorMessage).text(theme.strings.cartError);

      $(selectors.cartErrorMessageWrapper).removeClass(classes.hide);

      elementToFocus.focus();
    },

    _hideCartError: function() {
      $(selectors.cartErrorMessageWrapper).addClass(classes.hide);
      $(selectors.cartErrorMessage).text('');
    },

    _onRemoveItem: function(evt) {
      evt.preventDefault();
      var $remove = $(evt.target);
      var $lineItem = $remove.closest(selectors.cartItem);
      var index = $lineItem.attr(attributes.cartItemIndex);
      this._hideCartError();

      var params = {
        url: '/cart/change.js',
        data: { quantity: 0, line: index },
        dataType: 'json'
      };

      $.post(params)
        .done(
          function(state) {
            Shopify.getCart(function(state) {
            if (state.item_count === 0) {
              this._emptyCart();
            } else {
              this._createCart(state);
              this._showRemoveMessage($lineItem.clone());
            }

            this._setCartCountBubble(state.item_count);
           }.bind(this));   
          }.bind(this)
        )
        .fail(
          function() {
            this._showCartError(null);
          }.bind(this)
        );
    },

    _showRemoveMessage: function(lineItem) {
      var index = lineItem.data('cart-item-index');
      var removeMessage = this._getRemoveMessage(lineItem);
      var $lineItemAtIndex;

      if (index - 1 === 0) {
        $lineItemAtIndex = $('[data-cart-item-index="1"]', this.$container);
        $(removeMessage).insertBefore($lineItemAtIndex);
      } else {
        $lineItemAtIndex = $(
          '[data-cart-item-index="' + (index - 1) + '"]',
          this.$container
        );
        removeMessage.insertAfter($lineItemAtIndex);
      }
      removeMessage.focus();
    },

    _getRemoveMessage: function(lineItem) {
      var formattedMessage = this._formatRemoveMessage(lineItem);

      var $tableCell = $(selectors.cartTableCell, lineItem).clone();
      $tableCell
        .removeClass()
        .addClass(classes.cartRemovedProduct)
        .attr('colspan', '4')
        .html(formattedMessage);

      lineItem
        .attr('role', 'alert')
        .html($tableCell)
        .attr('tabindex', '-1');

      return lineItem;
    },

    _formatRemoveMessage: function(lineItem) {
      var quantity = lineItem.data('cart-item-quantity');
      var url = lineItem.attr(attributes.cartItemUrl);
      var title = lineItem.attr(attributes.cartItemTitle);

      return theme.strings.removedItemMessage
        .replace('[quantity]', quantity)
        .replace(
          '[link]',
          '<a ' +
            'href="' +
            url +
            '" class="text-link text-link--accent">' +
            title +
            '</a>'
        );
    },

    _setCartCountBubble: function(quantity) {
      this.$cartCountBubble =
        this.$cartCountBubble || $(selectors.cartCountBubble);
      this.$cartCount = this.$cartCount || $(selectors.cartCount);

      if (quantity > 0) {
        this.$cartCountBubble.removeClass(classes.hide);
        this.$cartCount.html(quantity);
      } else {
        this.$cartCountBubble.addClass(classes.hide);
        this.$cartCount.html('');
      }
    },

    _emptyCart: function() {
      this.$emptyPageContent =
        this.$emptyPageContent ||
        $(selectors.emptyPageContent, this.$container);
      this.$cartWrapper =
        this.$cartWrapper || $(selectors.cartWrapper, this.$container);

      this.$emptyPageContent.removeClass(classes.hide);
      this.$cartWrapper.addClass(classes.hide);
    },

    cookiesEnabled: function() {
      var cookieEnabled = navigator.cookieEnabled;

      if (!cookieEnabled) {
        document.cookie = 'testcookie';
        cookieEnabled = document.cookie.indexOf('testcookie') !== -1;
      }
      return cookieEnabled;
    }
  });

  return Cart;
})();

window.theme = window.theme || {};

theme.Filters = (function() {
  var settings = {
    mediaQueryMediumUp: '(min-width: ' + theme.breakpoints.medium + 'px)'
  };

  var selectors = {
    mainContent: '#MainContent',
    filterSelection: '#FilterTags',
    sortSelection: '#SortBy'
  };

  var data = {
    sortBy: 'data-default-sortby'
  };

  function Filters(container) {
    var $container = (this.$container = $(container));

    this.$filterSelect = $(selectors.filterSelection, $container);
    this.$sortSelect = $(selectors.sortSelection, $container);
    this.$selects = $(selectors.filterSelection, $container).add(
      $(selectors.sortSelection, $container)
    );

    this.defaultSort = this._getDefaultSortValue();
    this.$selects.removeClass('hidden');

    this.initBreakpoints = this._initBreakpoints.bind(this);

    this.mql = window.matchMedia(settings.mediaQueryMediumUp);
    this.mql.addListener(this.initBreakpoints);

    this.$filterSelect.on('change', this._onFilterChange.bind(this));
    this.$sortSelect.on('change', this._onSortChange.bind(this));
    this._initBreakpoints();
    this._initParams();
  }

  Filters.prototype = Object.assign({}, Filters.prototype, {
    _initBreakpoints: function() {
      if (this.mql.matches) {
        slate.utils.resizeSelects(this.$selects);
      }
    },

    _initParams: function() {
      self.queryParams = {};
      if (location.search.length) {
        var aKeyValue;
        var aCouples = location.search.substr(1).split('&');
        for (var i = 0; i < aCouples.length; i++) {
          aKeyValue = aCouples[i].split('=');
          if (aKeyValue.length > 1) {
            self.queryParams[
              decodeURIComponent(aKeyValue[0])
            ] = decodeURIComponent(aKeyValue[1]);
          }
        }
      }
    },

    _onSortChange: function() {
      self.queryParams.sort_by = this._getSortValue();

      if (self.queryParams.page) {
        delete self.queryParams.page;
      }
      window.location.search = decodeURIComponent($.param(self.queryParams));
    },

    _onFilterChange: function() {
      document.location.href = this._getFilterValue();
    },

    _getFilterValue: function() {
      return this.$filterSelect.val();
    },

    _getSortValue: function() {
      return this.$sortSelect.val() || this.defaultSort;
    },

    _getDefaultSortValue: function() {
      return this.$sortSelect.attr(data.sortBy);
    },

    onUnload: function() {
      this.$filterSelect.off('change', this._onFilterChange);
      this.$sortSelect.off('change', this._onSortChange);

      this.mql.removeListener(this.initBreakpoints);
    }
  });

  return Filters;
})();

window.theme = window.theme || {};

theme.HeaderSection = (function() {
  function Header() {
    theme.Header.init();
    theme.MobileNav.init();
    theme.SearchDrawer.init();
    theme.Search.init();
  }

  Header.prototype = Object.assign({}, Header.prototype, {
    onUnload: function() {
      theme.Header.unload();
      theme.Search.unload();
    }
  });

  return Header;
})();

theme.Maps = (function() {
  var config = {
    zoom: 14
  };
  var apiStatus = null;
  var mapsToLoad = [];

  var errors = {
    addressNoResults: theme.strings.addressNoResults,
    addressQueryLimit: theme.strings.addressQueryLimit,
    addressError: theme.strings.addressError,
    authError: theme.strings.authError
  };

  var selectors = {
    section: '[data-section-type="map"]',
    map: '[data-map]',
    mapOverlay: '[data-map-overlay]'
  };

  var classes = {
    mapError: 'map-section--load-error',
    errorMsg: 'map-section__error errors text-center'
  };

  // Global function called by Google on auth errors.
  // Show an auto error message on all map instances.
  // eslint-disable-next-line camelcase, no-unused-vars
  window.gm_authFailure = function() {
    if (!Shopify.designMode) {
      return;
    }

    $(selectors.section).addClass(classes.mapError);
    $(selectors.map).remove();
    $(selectors.mapOverlay).after(
      '<div class="' +
        classes.errorMsg +
        '">' +
        theme.strings.authError +
        '</div>'
    );
  };

  function Map(container) {
    this.$container = $(container);
    this.$map = this.$container.find(selectors.map);
    this.key = this.$map.data('api-key');

    if (typeof this.key === 'undefined') {
      return;
    }

    if (apiStatus === 'loaded') {
      this.createMap();
    } else {
      mapsToLoad.push(this);

      if (apiStatus !== 'loading') {
        apiStatus = 'loading';
        if (typeof window.google === 'undefined') {
          $.getScript(
            'https://maps.googleapis.com/maps/api/js?key=' + this.key
          ).then(function() {
            apiStatus = 'loaded';
            initAllMaps();
          });
        }
      }
    }
  }

  function initAllMaps() {
    // API has loaded, load all Map instances in queue
    $.each(mapsToLoad, function(index, instance) {
      instance.createMap();
    });
  }

  function geolocate($map) {
    var deferred = $.Deferred();
    var geocoder = new google.maps.Geocoder();
    var address = $map.data('address-setting');

    geocoder.geocode({ address: address }, function(results, status) {
      if (status !== google.maps.GeocoderStatus.OK) {
        deferred.reject(status);
      }

      deferred.resolve(results);
    });

    return deferred;
  }

  Map.prototype = Object.assign({}, Map.prototype, {
    createMap: function() {
      var $map = this.$map;

      return geolocate($map)
        .then(
          function(results) {
            var mapOptions = {
              zoom: config.zoom,
              center: results[0].geometry.location,
              draggable: false,
              clickableIcons: false,
              scrollwheel: false,
              disableDoubleClickZoom: true,
              disableDefaultUI: true
            };

            var map = (this.map = new google.maps.Map($map[0], mapOptions));
            var center = (this.center = map.getCenter());

            //eslint-disable-next-line no-unused-vars
            var marker = new google.maps.Marker({
              map: map,
              position: map.getCenter()
            });

            google.maps.event.addDomListener(
              window,
              'resize',
              $.debounce(250, function() {
                google.maps.event.trigger(map, 'resize');
                map.setCenter(center);
                $map.removeAttr('style');
              })
            );
          }.bind(this)
        )
        .fail(function() {
          var errorMessage;

          switch (status) {
            case 'ZERO_RESULTS':
              errorMessage = errors.addressNoResults;
              break;
            case 'OVER_QUERY_LIMIT':
              errorMessage = errors.addressQueryLimit;
              break;
            case 'REQUEST_DENIED':
              errorMessage = errors.authError;
              break;
            default:
              errorMessage = errors.addressError;
              break;
          }

          // Show errors only to merchant in the editor.
          if (Shopify.designMode) {
            $map
              .parent()
              .addClass(classes.mapError)
              .html(
                '<div class="' +
                  classes.errorMsg +
                  '">' +
                  errorMessage +
                  '</div>'
              );
          }
        });
    },

    onUnload: function() {
      if (this.$map.length === 0) {
        return;
      }
      google.maps.event.clearListeners(this.map, 'resize');
    }
  });

  return Map;
})();

/* eslint-disable no-new */
theme.Product = (function() {
  function Product(container) {
    var $container = (this.$container = $(container));
    var sectionId = $container.attr('data-section-id');
    this.zoomPictures = [];
    this.ajaxEnabled = $container.data('ajax-enabled');

    this.settings = {
      // Breakpoints from src/stylesheets/global/variables.scss.liquid
      mediaQueryMediumUp: 'screen and (min-width: 750px)',
      mediaQuerySmall: 'screen and (max-width: 749px)',
      bpSmall: false,
      enableHistoryState: $container.data('enable-history-state') || false,
      namespace: '.slideshow-' + sectionId,
      sectionId: sectionId,
      sliderActive: false,
      zoomEnabled: false
    };

    this.selectors = {
      addToCart: '[data-add-to-cart]',
      addToCartText: '[data-add-to-cart-text]',
      cartCount: '[data-cart-count]',
      cartCountBubble: '[data-cart-count-bubble]',
      cartPopup: '[data-cart-popup]',
      cartPopupCartQuantity: '[data-cart-popup-cart-quantity]',
      cartPopupClose: '[data-cart-popup-close]',
      cartPopupDismiss: '[data-cart-popup-dismiss]',
      cartPopupImage: '[data-cart-popup-image]',
      cartPopupImageWrapper: '[data-cart-popup-image-wrapper]',
      cartPopupImagePlaceholder: '[data-cart-popup-image-placeholder]',
      cartPopupPlaceholderSize: '[data-placeholder-size]',
      cartPopupProductDetails: '[data-cart-popup-product-details]',
      cartPopupQuantity: '[data-cart-popup-quantity]',
      cartPopupQuantityLabel: '[data-cart-popup-quantity-label]',
      cartPopupTitle: '[data-cart-popup-title]',
      cartPopupWrapper: '[data-cart-popup-wrapper]',
      loader: '[data-loader]',
      loaderStatus: '[data-loader-status]',
      quantity: '[data-quantity-input]',
      SKU: '.variant-sku',
      productStatus: '[data-product-status]',
      originalSelectorId: '#ProductSelect-' + sectionId,
      productForm: '[data-product-form]',
      errorMessage: '[data-error-message]',
      errorMessageWrapper: '[data-error-message-wrapper]',
      imageZoomWrapper: '[data-image-zoom-wrapper]',
      productMediaWrapper: '[data-product-single-media-wrapper]',
      productThumbImages: '.product-single__thumbnail--' + sectionId,
      productThumbs: '.product-single__thumbnails-' + sectionId,
      productThumbListItem: '.product-single__thumbnails-item',
      productThumbsWrapper: '.thumbnails-wrapper',
      saleLabel: '.product-price__sale-label-' + sectionId,
      singleOptionSelector: '.single-option-selector-' + sectionId,
      shopifyPaymentButton: '.shopify-payment-button',
      productMediaTypeVideo: '[data-product-media-type-video]',
      productMediaTypeModel: '[data-product-media-type-model]',
      priceContainer: '[data-price]',
      regularPrice: '[data-regular-price]',
      salePrice: '[data-sale-price]',
      unitPrice: '[data-unit-price]',
      unitPriceBaseUnit: '[data-unit-price-base-unit]',
      productPolicies: '[data-product-policies]'
    };

    this.classes = {
      cartPopupWrapperHidden: 'cart-popup-wrapper--hidden',
      hidden: 'hide',
      visibilityHidden: 'visibility-hidden',
      inputError: 'input--error',
      jsZoomEnabled: 'js-zoom-enabled',
      productOnSale: 'price--on-sale',
      productUnitAvailable: 'price--unit-available',
      productUnavailable: 'price--unavailable',
      productSoldOut: 'price--sold-out',
      cartImage: 'cart-popup-item__image',
      productFormErrorMessageWrapperHidden:
        'product-form__error-message-wrapper--hidden',
      activeClass: 'active-thumb',
      variantSoldOut: 'product-form--variant-sold-out'
    };

    this.$quantityInput = $(this.selectors.quantity, $container);
    this.$errorMessageWrapper = $(
      this.selectors.errorMessageWrapper,
      $container
    );
    this.$addToCart = $(this.selectors.addToCart, $container);
    this.$addToCartText = $(this.selectors.addToCartText, this.$addToCart);
    this.$shopifyPaymentButton = $(
      this.selectors.shopifyPaymentButton,
      $container
    );
    this.$productPolicies = $(this.selectors.productPolicies, $container);

    this.$loader = $(this.selectors.loader, this.$addToCart);
    this.$loaderStatus = $(this.selectors.loaderStatus, $container);

    this.$imageZoomWrapper = $(this.selectors.imageZoomWrapper, $container);

    // Stop parsing if we don't have the product json script tag when loading
    // section in the Theme Editor
    if (!$('#ProductJson-' + sectionId).html()) {
      return;
    }

    this.productSingleObject = JSON.parse(
      document.getElementById('ProductJson-' + sectionId).innerHTML
    );

    this.settings.zoomEnabled = this.$imageZoomWrapper.hasClass(
      this.classes.jsZoomEnabled
    );

    this.initMobileBreakpoint = this._initMobileBreakpoint.bind(this);
    this.initDesktopBreakpoint = this._initDesktopBreakpoint.bind(this);

    this.mqlSmall = window.matchMedia(this.settings.mediaQuerySmall);
    this.mqlSmall.addListener(this.initMobileBreakpoint);

    this.mqlMediumUp = window.matchMedia(this.settings.mediaQueryMediumUp);
    this.mqlMediumUp.addListener(this.initDesktopBreakpoint);

    this.initMobileBreakpoint();
    this.initDesktopBreakpoint();
    this._stringOverrides();
    this._initVariants();
    this._initMediaSwitch();
    this._initAddToCart();
    this._setActiveThumbnail();
    this._initProductVideo();
    this._initModelViewerLibraries();
    this._initShopifyXrLaunch();
  }

  Product.prototype = Object.assign({}, Product.prototype, {
    _stringOverrides: function() {
      theme.productStrings = theme.productStrings || {};
      $.extend(theme.strings, theme.productStrings);
    },

    _initMobileBreakpoint: function() {
      if (this.mqlSmall.matches) {
        // initialize thumbnail slider on mobile if more than four thumbnails
        if ($(this.selectors.productThumbImages).length > 4) {
          this._initThumbnailSlider();
        }

        // destroy image zooming if enabled
        if (this.settings.zoomEnabled) {
          this.$imageZoomWrapper.each(
            function(index) {
              this._destroyZoom(index);
            }.bind(this)
          );
        }

        this.settings.bpSmall = true;
      } else {
        if (this.settings.sliderActive) {
          this._destroyThumbnailSlider();
        }

        this.settings.bpSmall = false;
      }
    },

    _initDesktopBreakpoint: function() {
      if (this.mqlMediumUp.matches && this.settings.zoomEnabled) {
        this.$imageZoomWrapper.each(
          function(index, element) {
            this._enableZoom(element, index);
          }.bind(this)
        );
      }
    },

    _initVariants: function() {
      var options = {
        $container: this.$container,
        enableHistoryState:
          this.$container.data('enable-history-state') || false,
        singleOptionSelector: this.selectors.singleOptionSelector,
        originalSelectorId: this.selectors.originalSelectorId,
        product: this.productSingleObject
      };

      this.variants = new slate.Variants(options);

      this.$container.on(
        'variantChange' + this.settings.namespace,
        this._updateAvailability.bind(this)
      );
      this.$container.on(
        'variantImageChange' + this.settings.namespace,
        this._updateMedia.bind(this)
      );
      this.$container.on(
        'variantPriceChange' + this.settings.namespace,
        this._updatePrice.bind(this)
      );
      this.$container.on(
        'variantSKUChange' + this.settings.namespace,
        this._updateSKU.bind(this)
      );
    },

    _initMediaSwitch: function() {
      if (!$(this.selectors.productThumbImages).length) {
        return;
      }

      var self = this;

      $(this.selectors.productThumbImages)
        .on('click', function(evt) {
          evt.preventDefault();
          var $el = $(this);

          var mediaId = $el.data('thumbnail-id');

          self._switchMedia(mediaId);
          self._setActiveThumbnail(mediaId);
        })
        .on('keyup', self._handleMediaFocus.bind(self));
    },

    _initAddToCart: function() {
      $(this.selectors.productForm, this.$container).on(
        'submit',
        function(evt) {
          if (this.$addToCart.is('[aria-disabled]')) {
            evt.preventDefault();
            return;
          }

          if (!this.ajaxEnabled) return;

          evt.preventDefault();

          this.$previouslyFocusedElement = $(':focus');

          var isInvalidQuantity = this.$quantityInput.val() <= 0;

          if (isInvalidQuantity) {
            this._showErrorMessage(theme.strings.quantityMinimumMessage);
            return;
          }

          if (!isInvalidQuantity && this.ajaxEnabled) {
            // disable the addToCart and dynamic checkout button while
            // request/cart popup is loading and handle loading state
            this._handleButtonLoadingState(true);
            var $data = $(this.selectors.productForm, this.$container);
            this._addItemToCart($data);
            return;
          }
        }.bind(this)
      );
    },

    _initProductVideo: function() {
      var sectionId = this.settings.sectionId;

      $(this.selectors.productMediaTypeVideo, this.$container).each(function() {
        var $el = $(this);
        theme.ProductVideo.init($el, sectionId);
      });
    },

    _initModelViewerLibraries: function() {
      var $modelViewerElements = $(
        this.selectors.productMediaTypeModel,
        this.$container
      );
      if ($modelViewerElements.length < 1) return;
      theme.ProductModel.init($modelViewerElements, this.settings.sectionId);
    },

    _initShopifyXrLaunch: function() {
      var self = this;
      $(document).on('shopify_xr_launch', function() {
        var $currentMedia = $(
          self.selectors.productMediaWrapper +
            ':not(.' +
            self.classes.hidden +
            ')',
          self.$container
        );
        $currentMedia.trigger('xrLaunch');
      });
    },

    _addItemToCart: function(data) {
      var params = {
        url: '/cart/add.js',
        data: $(data).serialize(),
        dataType: 'json'
      };

      $.post(params)
        .done(
          function(item) {
            Shopify.getCart(function(cart) {
            this._hideErrorMessage();
            this._setupCartPopup(item);
            }.bind(this));  
          }.bind(this)
        )
        .fail(
          function(response) {
            this.$previouslyFocusedElement.focus();
            var errorMessage = response.responseJSON
              ? response.responseJSON.description
              : theme.strings.cartError;
            this._showErrorMessage(errorMessage);
            this._handleButtonLoadingState(false);
          }.bind(this)
        );
    },

    _handleButtonLoadingState: function(isLoading) {
      if (isLoading) {
        this.$addToCart.attr('aria-disabled', true);
        this.$addToCartText.addClass(this.classes.hidden);
        this.$loader.removeClass(this.classes.hidden);
        this.$shopifyPaymentButton.attr('disabled', true);
        this.$loaderStatus.attr('aria-hidden', false);
      } else {
        this.$addToCart.removeAttr('aria-disabled');
        this.$addToCartText.removeClass(this.classes.hidden);
        this.$loader.addClass(this.classes.hidden);
        this.$shopifyPaymentButton.removeAttr('disabled');
        this.$loaderStatus.attr('aria-hidden', true);
      }
    },

    _showErrorMessage: function(errorMessage) {
      $(this.selectors.errorMessage, this.$container).html(errorMessage);

      if (this.$quantityInput.length !== 0) {
        this.$quantityInput.addClass(this.classes.inputError);
      }

      this.$errorMessageWrapper
        .removeClass(this.classes.productFormErrorMessageWrapperHidden)
        .attr('aria-hidden', true)
        .removeAttr('aria-hidden');
    },

    _hideErrorMessage: function() {
      this.$errorMessageWrapper.addClass(
        this.classes.productFormErrorMessageWrapperHidden
      );

      if (this.$quantityInput.length !== 0) {
        this.$quantityInput.removeClass(this.classes.inputError);
      }
    },

    _setupCartPopup: function(item) {
      this.$cartPopup = this.$cartPopup || $(this.selectors.cartPopup);
      this.$cartPopupWrapper =
        this.$cartPopupWrapper || $(this.selectors.cartPopupWrapper);
      this.$cartPopupTitle =
        this.$cartPopupTitle || $(this.selectors.cartPopupTitle);
      this.$cartPopupQuantity =
        this.$cartPopupQuantity || $(this.selectors.cartPopupQuantity);
      this.$cartPopupQuantityLabel =
        this.$cartPopupQuantityLabel ||
        $(this.selectors.cartPopupQuantityLabel);
      this.$cartPopupClose =
        this.$cartPopupClose || $(this.selectors.cartPopupClose);
      this.$cartPopupDismiss =
        this.$cartPopupDismiss || $(this.selectors.cartPopupDismiss);
      this.$cartPopupImagePlaceholder =
        this.$cartPopupImagePlaceholder ||
        $(this.selectors.cartPopupImagePlaceholder);

      this._setupCartPopupEventListeners();

      this._updateCartPopupContent(item);
    },

    _updateCartPopupContent: function(item) {
      var quantity = this.$quantityInput.length ? this.$quantityInput.val() : 1;

      this.$cartPopupTitle.text(item.product_title);
      this.$cartPopupQuantity.text(quantity);
      this.$cartPopupQuantityLabel.text(
        theme.strings.quantityLabel.replace('[count]', quantity)
      );

      this._setCartPopupPlaceholder(
        item.featured_image.url,
        item.featured_image.aspect_ratio
      );
      this._setCartPopupImage(item.featured_image.url, item.featured_image.alt);
      this._setCartPopupProductDetails(
        item.product_has_only_default_variant,
        item.options_with_values,
        item.properties
      );

      $.getJSON('/cart.js').then(
        function(cart) {
          this._setCartQuantity(cart.item_count);
          this._setCartCountBubble(cart.item_count);
          this._showCartPopup();
        }.bind(this)
      );
    },

    _setupCartPopupEventListeners: function() {
      this.$cartPopupWrapper.on(
        'keyup',
        function(event) {
          if (event.keyCode === slate.utils.keyboardKeys.ESCAPE) {
            this._hideCartPopup(event);
          }
        }.bind(this)
      );

      this.$cartPopupClose.on('click', this._hideCartPopup.bind(this));
      this.$cartPopupDismiss.on('click', this._hideCartPopup.bind(this));
      $('body').on('click', this._onBodyClick.bind(this));
    },

    _setCartPopupPlaceholder: function(imageUrl, imageAspectRatio) {
      this.$cartPopupImageWrapper =
        this.$cartPopupImageWrapper || $(this.selectors.cartPopupImageWrapper);

      if (imageUrl === null) {
        this.$cartPopupImageWrapper.addClass(this.classes.hidden);
        return;
      }

      var $placeholder = $(this.selectors.cartPopupPlaceholderSize);
      var maxWidth = 95 * imageAspectRatio;
      var heightRatio = 100 / imageAspectRatio;

      this.$cartPopupImagePlaceholder.css('max-width', maxWidth);

      $placeholder.css('padding-top', heightRatio + '%');
    },

    _setCartPopupImage: function(imageUrl, imageAlt) {
      if (imageUrl === null) return;

      this.$cartPopupImageWrapper.removeClass(this.classes.hidden);
      var sizedImageUrl = theme.Images.getSizedImageUrl(imageUrl, '200x');
      var image = document.createElement('img');
      image.src = sizedImageUrl;
      image.alt = imageAlt;
      image.classList.add(this.classes.cartImage);
      image.dataset.cartPopupImage = '';

      image.onload = function() {
        this.$cartPopupImagePlaceholder.addClass(this.classes.hidden);
        this.$cartPopupImageWrapper.append(image);
      }.bind(this);
    },

    _setCartPopupProductDetails: function(
      product_has_only_default_variant,
      options,
      properties
    ) {
      this.$cartPopupProductDetails =
        this.$cartPopupProductDetails ||
        $(this.selectors.cartPopupProductDetails);
      var variantPropertiesHTML = '';

      if (!product_has_only_default_variant) {
        variantPropertiesHTML =
          variantPropertiesHTML + this._getVariantOptionList(options);
      }

      if (properties !== null && Object.keys(properties).length !== 0) {
        variantPropertiesHTML =
          variantPropertiesHTML + this._getPropertyList(properties);
      }

      if (variantPropertiesHTML.length === 0) {
        this.$cartPopupProductDetails.html('');
        this.$cartPopupProductDetails.attr('hidden', '');
      } else {
        this.$cartPopupProductDetails.html(variantPropertiesHTML);
        this.$cartPopupProductDetails.removeAttr('hidden');
      }
    },

    _getVariantOptionList: function(variantOptions) {
      var variantOptionListHTML = '';

      variantOptions.forEach(function(variantOption) {
        variantOptionListHTML =
          variantOptionListHTML +
          '<li class="product-details__item product-details__item--variant-option">' +
          variantOption.name +
          ': ' +
          variantOption.value +
          '</li>';
      });

      return variantOptionListHTML;
    },

    _getPropertyList: function(properties) {
      var propertyListHTML = '';
      var propertiesArray = Object.entries(properties);

      propertiesArray.forEach(function(property) {
        // Line item properties prefixed with an underscore are not to be displayed
        if (property[0].charAt(0) === '_') return;

        // if the property value has a length of 0 (empty), don't display it
        if (property[1].length === 0) return;

        propertyListHTML =
          propertyListHTML +
          '<li class="product-details__item product-details__item--property">' +
          '<span class="product-details__property-label">' +
          property[0] +
          ': </span>' +
          property[1];
        ': ' + '</li>';
      });

      return propertyListHTML;
    },

    _setCartQuantity: function(quantity) {
      this.$cartPopupCartQuantity =
        this.$cartPopupCartQuantity || $(this.selectors.cartPopupCartQuantity);
      var ariaLabel;

      if (quantity === 1) {
        ariaLabel = theme.strings.oneCartCount;
      } else if (quantity > 1) {
        ariaLabel = theme.strings.otherCartCount.replace('[count]', quantity);
      }

      this.$cartPopupCartQuantity.text(quantity).attr('aria-label', ariaLabel);
    },

    _setCartCountBubble: function(quantity) {
      this.$cartCountBubble =
        this.$cartCountBubble || $(this.selectors.cartCountBubble);
      this.$cartCount = this.$cartCount || $(this.selectors.cartCount);

      this.$cartCountBubble.removeClass(this.classes.hidden);
      this.$cartCount.text(quantity);
    },

    _showCartPopup: function() {
      this.$cartPopupWrapper
        .prepareTransition()
        .removeClass(this.classes.cartPopupWrapperHidden);
      this._handleButtonLoadingState(false);

      slate.a11y.trapFocus({
        $container: this.$cartPopupWrapper,
        $elementToFocus: this.$cartPopup,
        namespace: 'cartPopupFocus'
      });
    },

    _hideCartPopup: function(event) {
      var setFocus = event.detail === 0 ? true : false;
      this.$cartPopupWrapper
        .prepareTransition()
        .addClass(this.classes.cartPopupWrapperHidden);

      $(this.selectors.cartPopupImage).remove();
      this.$cartPopupImagePlaceholder.removeClass(this.classes.hidden);

      slate.a11y.removeTrapFocus({
        $container: this.$cartPopupWrapper,
        namespace: 'cartPopupFocus'
      });

      if (setFocus) this.$previouslyFocusedElement[0].focus();

      this.$cartPopupWrapper.off('keyup');
      this.$cartPopupClose.off('click');
      this.$cartPopupDismiss.off('click');
      $('body').off('click');
    },

    _onBodyClick: function(event) {
      var $target = $(event.target);

      if (
        $target[0] !== this.$cartPopupWrapper[0] &&
        !$target.parents(this.selectors.cartPopup).length
      ) {
        this._hideCartPopup(event);
      }
    },

    _setActiveThumbnail: function(mediaId) {
      // If there is no element passed, find it by the current product image
      if (typeof mediaId === 'undefined') {
        mediaId = $(
          this.selectors.productMediaWrapper + ':not(.hide)',
          this.$container
        ).data('media-id');
      }

      var $thumbnailWrappers = $(
        this.selectors.productThumbListItem + ':not(.slick-cloned)',
        this.$container
      );

      var $activeThumbnail = $thumbnailWrappers.find(
        this.selectors.productThumbImages +
          "[data-thumbnail-id='" +
          mediaId +
          "']"
      );

      $(this.selectors.productThumbImages)
        .removeClass(this.classes.activeClass)
        .removeAttr('aria-current');

      $activeThumbnail.addClass(this.classes.activeClass);
      $activeThumbnail.attr('aria-current', true);

      if (!$thumbnailWrappers.hasClass('slick-slide')) {
        return;
      }

      var slideIndex = $activeThumbnail.parent().data('slick-index');

      $(this.selectors.productThumbs).slick('slickGoTo', slideIndex, true);
    },

    _switchMedia: function(mediaId) {
      var $currentMedia = $(
        this.selectors.productMediaWrapper +
          ':not(.' +
          this.classes.hidden +
          ')',
        this.$container
      );

      var $newMedia = $(
        this.selectors.productMediaWrapper +
          "[data-media-id='" +
          mediaId +
          "']",
        this.$container
      );

      var $otherMedia = $(
        this.selectors.productMediaWrapper +
          ":not([data-media-id='" +
          mediaId +
          "'])",
        this.$container
      );

      $currentMedia.trigger('mediaHidden');
      $newMedia.removeClass(this.classes.hidden).trigger('mediaVisible');
      $otherMedia.addClass(this.classes.hidden);
    },

    _handleMediaFocus: function(evt) {
      if (evt.keyCode !== slate.utils.keyboardKeys.ENTER) return;

      var mediaId = $(evt.currentTarget).data('thumbnail-id');

      $(
        this.selectors.productMediaWrapper +
          "[data-media-id='" +
          mediaId +
          "']",
        this.$container
      ).focus();
    },

    _initThumbnailSlider: function() {
      var options = {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: false,
        prevArrow: '.thumbnails-slider__prev--' + this.settings.sectionId,
        nextArrow: '.thumbnails-slider__next--' + this.settings.sectionId
      };

      $(this.selectors.productThumbs).slick(options);

      // Accessibility concerns not yet fixed in Slick Slider
      $(this.selectors.productThumbsWrapper, this.$container)
        .find('.slick-list')
        .removeAttr('aria-live');
      $(this.selectors.productThumbsWrapper, this.$container)
        .find('.slick-disabled')
        .removeAttr('aria-disabled');

      this.settings.sliderActive = true;
    },

    _destroyThumbnailSlider: function() {
      $(this.selectors.productThumbs).slick('unslick');
      this.settings.sliderActive = false;

      // Accessibility concerns not yet fixed in Slick Slider
      $(this.selectors.productThumbsWrapper, this.$container)
        .find('[tabindex="-1"]')
        .removeAttr('tabindex');
    },

    _liveRegionText: function(variant) {
      // Dummy content for live region
      var liveRegionText =
        '[Availability] [Regular] [$$] [Sale] [$]. [UnitPrice] [$$$]';

      if (!variant) {
        liveRegionText = theme.strings.unavailable;
        return liveRegionText;
      }

      // Update availability
      var availability = variant.available ? '' : theme.strings.soldOut + ',';
      liveRegionText = liveRegionText.replace('[Availability]', availability);

      // Update pricing information
      var regularLabel = '';
      var regularPrice = theme.Currency.formatMoney(
        variant.price,
        theme.moneyFormat
      );
      var saleLabel = '';
      var salePrice = '';
      var unitLabel = '';
      var unitPrice = '';

      if (variant.compare_at_price > variant.price) {
        regularLabel = theme.strings.regularPrice;
        regularPrice =
          theme.Currency.formatMoney(
            variant.compare_at_price,
            theme.moneyFormat
          ) + ',';
        saleLabel = theme.strings.sale;
        salePrice = theme.Currency.formatMoney(
          variant.price,
          theme.moneyFormat
        );
      }

      if (variant.unit_price) {
        unitLabel = theme.strings.unitPrice;
        unitPrice =
          theme.Currency.formatMoney(variant.unit_price, theme.moneyFormat) +
          ' ' +
          theme.strings.unitPriceSeparator +
          ' ' +
          this._getBaseUnit(variant);
      }

      liveRegionText = liveRegionText
        .replace('[Regular]', regularLabel)
        .replace('[$$]', regularPrice)
        .replace('[Sale]', saleLabel)
        .replace('[$]', salePrice)
        .replace('[UnitPrice]', unitLabel)
        .replace('[$$$]', unitPrice)
        .trim();

      return liveRegionText;
    },

    _updateLiveRegion: function(evt) {
      var variant = evt.variant;
      var liveRegion = this.container.querySelector(
        this.selectors.productStatus
      );
      liveRegion.innerHTML = this._liveRegionText(variant);
      liveRegion.setAttribute('aria-hidden', false);

      // hide content from accessibility tree after announcement
      setTimeout(function() {
        liveRegion.setAttribute('aria-hidden', true);
      }, 1000);
    },

    _updateAddToCart: function(evt) {
      var variant = evt.variant;

      if (variant) {
        if (variant.available) {
          this.$addToCart
            .removeAttr('aria-disabled')
            .attr('aria-label', theme.strings.addToCart);
          $(this.selectors.addToCartText, this.$container)
            .html(theme.strings.addToCart)
            .text();
          $(this.selectors.productForm, this.container).removeClass(
            this.classes.variantSoldOut
          );
        } else {
          // Variant is sold out, disable submit button and change the text.
          this.$addToCart
            .attr('aria-disabled', true)
            .attr('aria-label', theme.strings.soldOut);
          $(this.selectors.addToCartText, this.$container)
            .html(theme.strings.soldOut)
            .text();
          $(this.selectors.productForm, this.container).addClass(
            this.classes.variantSoldOut
          );
        }
      } else {
        // The variant doesn't exist, disable submit button and change the text.
        this.$addToCart
          .attr('aria-disabled', true)
          .attr('aria-label', theme.strings.unavailable);
        $(this.selectors.addToCartText, this.$container)
          .html(theme.strings.unavailable)
          .text();
        $(this.selectors.productForm, this.container).addClass(
          this.classes.variantSoldOut
        );
      }
    },

    _updateAvailability: function(evt) {
      // remove error message if one is showing
      this._hideErrorMessage();

      // update form submit
      this._updateAddToCart(evt);
      // update live region
      this._updateLiveRegion(evt);

      this._updatePrice(evt);
    },

    _updateMedia: function(evt) {
      var variant = evt.variant;
      var mediaId = variant.featured_media.id;
      var sectionMediaId = this.settings.sectionId + '-' + mediaId;

      this._switchMedia(sectionMediaId);
      this._setActiveThumbnail(sectionMediaId);
    },

    _updatePrice: function(evt) {
      var variant = evt.variant;

      var $priceContainer = $(this.selectors.priceContainer, this.$container);
      var $regularPrice = $(this.selectors.regularPrice, $priceContainer);
      var $salePrice = $(this.selectors.salePrice, $priceContainer);
      var $unitPrice = $(this.selectors.unitPrice, $priceContainer);
      var $unitPriceBaseUnit = $(
        this.selectors.unitPriceBaseUnit,
        $priceContainer
      );

      // Reset product price state
      $priceContainer
        .removeClass(this.classes.productUnavailable)
        .removeClass(this.classes.productOnSale)
        .removeClass(this.classes.productUnitAvailable)
        .removeClass(this.classes.productSoldOut)
        .removeAttr('aria-hidden');

      this.$productPolicies.removeClass(this.classes.visibilityHidden);

      // Unavailable
      if (!variant) {
        $priceContainer
          .addClass(this.classes.productUnavailable)
          .attr('aria-hidden', true);

        this.$productPolicies.addClass(this.classes.visibilityHidden);
        return;
      }

      // Sold out
      if (!variant.available) {
        $priceContainer.addClass(this.classes.productSoldOut);
      }

      // On sale
      if (variant.compare_at_price > variant.price) {
        $regularPrice.html(
          theme.Currency.formatMoney(
            variant.compare_at_price,
            theme.moneyFormat
          )
        );
        $salePrice.html(
          theme.Currency.formatMoney(variant.price, theme.moneyFormat)
        );
        $priceContainer.addClass(this.classes.productOnSale);
      } else {
        // Regular price
        $regularPrice.html(
          theme.Currency.formatMoney(variant.price, theme.moneyFormat)
        );
      }

      // Unit price
      if (variant.unit_price) {
        $unitPrice.html(
          theme.Currency.formatMoney(variant.unit_price, theme.moneyFormat)
        );
        $unitPriceBaseUnit.html(this._getBaseUnit(variant));
        $priceContainer.addClass(this.classes.productUnitAvailable);
      }
    },

    _getBaseUnit: function(variant) {
      return variant.unit_price_measurement.reference_value === 1
        ? variant.unit_price_measurement.reference_unit
        : variant.unit_price_measurement.reference_value +
            variant.unit_price_measurement.reference_unit;
    },

    _updateSKU: function(evt) {
      var variant = evt.variant;

      // Update the sku
      $(this.selectors.SKU).html(variant.sku);
    },

    _enableZoom: function(el, index) {
      this.zoomPictures[index] = new theme.Zoom(el);
    },

    _destroyZoom: function(index) {
      if (this.zoomPictures.length === 0) return;
      this.zoomPictures[index].unload();
    },

    onUnload: function() {
      this.$container.off(this.settings.namespace);
      theme.ProductVideo.removeSectionVideos(this.settings.sectionId);
      theme.ProductModel.removeSectionModels(this.settings.sectionId);

      this.mqlSmall.removeListener(this.initMobileBreakpoint);
      this.mqlMediumUp.removeListener(this.initDesktopBreakpoint);
    }
  });

  return Product;
})();

theme.ProductRecommendations = (function() {
  function ProductRecommendations(container) {
    this.$container = $(container);

    var baseUrl = this.$container.data('baseUrl');
    var productId = this.$container.data('productId');
    var recommendationsSectionUrl =
      baseUrl +
      '?section_id=product-recommendations&product_id=' +
      productId +
      '&limit=4';

    $.get(recommendationsSectionUrl).then(
      function(section) {
        var recommendationsMarkup = $(section).html();
        if (recommendationsMarkup.trim() !== '') {
          this.$container.html(recommendationsMarkup);
        }
      }.bind(this)
    );
  }

  return ProductRecommendations;
})();

theme.Quotes = (function() {
  var config = {
    mediaQuerySmall: 'screen and (max-width: 749px)',
    mediaQueryMediumUp: 'screen and (min-width: 750px)',
    slideCount: 0
  };
  var defaults = {
    accessibility: true,
    arrows: false,
    dots: true,
    autoplay: false,
    touchThreshold: 20,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  function Quotes(container) {
    var $container = (this.$container = $(container));
    var sectionId = $container.attr('data-section-id');
    var wrapper = (this.wrapper = '.quotes-wrapper');
    var slider = (this.slider = '#Quotes-' + sectionId);
    this.$slider = $(slider, wrapper);

    this.sliderActive = false;
    this.mobileOptions = $.extend({}, defaults, {
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    });

    config.slideCount = this.$slider.data('count');

    // Override slidesToShow/Scroll if there are not enough blocks
    if (config.slideCount < defaults.slidesToShow) {
      defaults.slidesToShow = config.slideCount;
      defaults.slidesToScroll = config.slideCount;
    }

    this.$slider.on('init', this.a11y.bind(this));

    this.initMobileSlider = this._initMobileSlider.bind(this);
    this.initDesktopSlider = this._initDesktopSlider.bind(this);

    this.mqlSmall = window.matchMedia(config.mediaQuerySmall);
    this.mqlSmall.addListener(this.initMobileSlider);

    this.mqlMediumUp = window.matchMedia(config.mediaQueryMediumUp);
    this.mqlMediumUp.addListener(this.initDesktopSlider);

    this.initMobileSlider();
    this.initDesktopSlider();
  }

  Quotes.prototype = Object.assign({}, Quotes.prototype, {
    onUnload: function() {
      this.mqlSmall.removeListener(this.initMobileSlider);
      this.mqlMediumUp.removeListener(this.initDesktopSlider);

      $(this.slider, this.wrapper).slick('unslick');
    },

    onBlockSelect: function(evt) {
      // Ignore the cloned version
      var $slide = $(
        '.quotes-slide--' + evt.detail.blockId + ':not(.slick-cloned)'
      );
      var slideIndex = $slide.data('slick-index');

      // Go to selected slide, pause autoplay
      $(this.slider, this.wrapper).slick('slickGoTo', slideIndex);
    },

    a11y: function(event, obj) {
      var $list = obj.$list;
      var $wrapper = $(this.wrapper, this.$container);

      // Remove default Slick aria-live attr until slider is focused
      $list.removeAttr('aria-live');

      // When an element in the slider is focused set aria-live
      $wrapper.on('focusin', function(evt) {
        if ($wrapper.has(evt.target).length) {
          $list.attr('aria-live', 'polite');
        }
      });

      // Remove aria-live
      $wrapper.on('focusout', function(evt) {
        if ($wrapper.has(evt.target).length) {
          $list.removeAttr('aria-live');
        }
      });
    },

    _initMobileSlider: function() {
      if (this.mqlSmall.matches) {
        this._initSlider(this.mobileOptions);
      }
    },

    _initDesktopSlider: function() {
      if (this.mqlMediumUp.matches) {
        this._initSlider(defaults);
      }
    },

    _initSlider: function(args) {
      if (this.sliderActive) {
        this.$slider.slick('unslick');
        this.sliderActive = false;
      }

      this.$slider.slick(args);
      this.sliderActive = true;
    }
  });

  return Quotes;
})();

theme.slideshows = {};

theme.SlideshowSection = (function() {
  function SlideshowSection(container) {
    var $container = (this.$container = $(container));
    var sectionId = $container.attr('data-section-id');
    var slideshow = (this.slideshow = '#Slideshow-' + sectionId);

    theme.slideshows[slideshow] = new theme.Slideshow(slideshow, sectionId);
  }

  return SlideshowSection;
})();

theme.SlideshowSection.prototype = Object.assign(
  {},
  theme.SlideshowSection.prototype,
  {
    onUnload: function() {
      delete theme.slideshows[this.slideshow];
    },

    onBlockSelect: function(evt) {
      var $slideshow = $(this.slideshow);
      var adaptHeight = $slideshow.data('adapt-height');

      if (adaptHeight) {
        theme.slideshows[this.slideshow].setSlideshowHeight();
      }

      // Ignore the cloned version
      var $slide = $(
        '.slideshow__slide--' + evt.detail.blockId + ':not(.slick-cloned)'
      );
      var slideIndex = $slide.data('slick-index');

      // Go to selected slide, pause auto-rotate
      $slideshow.slick('slickGoTo', slideIndex).slick('slickPause');
    },

    onBlockDeselect: function() {
      // Resume auto-rotate
      $(this.slideshow).slick('slickPlay');
    }
  }
);

theme.slideshows = {};

theme.VideoSection = (function() {
  function VideoSection(container) {
    var $container = (this.$container = $(container));

    $('.video', $container).each(function() {
      var $el = $(this);
      theme.Video.init($el);
      theme.Video.editorLoadVideo($el.attr('id'));
    });
  }

  return VideoSection;
})();

theme.VideoSection.prototype = Object.assign({}, theme.VideoSection.prototype, {
  onUnload: function() {
    theme.Video.removeEvents();
  }
});

theme.heros = {};

theme.HeroSection = (function() {
  function HeroSection(container) {
    var $container = (this.$container = $(container));
    var sectionId = $container.attr('data-section-id');
    var hero = '#Hero-' + sectionId;
    theme.heros[hero] = new theme.Hero(hero, sectionId);
  }

  return HeroSection;
})();

window.theme = window.theme || {};

var selectors = {
  disclosureLocale: '[data-disclosure-locale]',
  disclosureCurrency: '[data-disclosure-currency]'
};

theme.FooterSection = (function() {
  function Footer(container) {
    this.$container = $(container);
    this.cache = {};
    this.cacheSelectors();

    if (this.cache.$localeDisclosure.length) {
      this.localeDisclosure = new theme.Disclosure(
        this.cache.$localeDisclosure
      );
    }

    if (this.cache.$currencyDisclosure.length) {
      this.currencyDisclosure = new theme.Disclosure(
        this.cache.$currencyDisclosure
      );
    }
  }

  Footer.prototype = Object.assign({}, Footer.prototype, {
    cacheSelectors: function() {
      this.cache = {
        $localeDisclosure: this.$container.find(selectors.disclosureLocale),
        $currencyDisclosure: this.$container.find(selectors.disclosureCurrency)
      };
    },

    onUnload: function() {
      if (this.cache.$localeDisclosure.length) {
        this.localeDisclosure.unload();
      }

      if (this.cache.$currencyDisclosure.length) {
        this.currencyDisclosure.unload();
      }
    }
  });

  return Footer;
})();


$(document).ready(function() {
  var sections = new theme.Sections();

  sections.register('cart-template', theme.Cart);
  sections.register('product', theme.Product);
  sections.register('collection-template', theme.Filters);
  sections.register('product-template', theme.Product);
  sections.register('header-section', theme.HeaderSection);
  sections.register('map', theme.Maps);
  sections.register('slideshow-section', theme.SlideshowSection);
  sections.register('video-section', theme.VideoSection);
  sections.register('quotes', theme.Quotes);
  sections.register('hero-section', theme.HeroSection);
  sections.register('product-recommendations', theme.ProductRecommendations);
  sections.register('footer-section', theme.FooterSection);
});

theme.init = function() {
  theme.customerTemplates.init();

  // Theme-specific selectors to make tables scrollable
  var tableSelectors = '.rte table,' + '.custom__item-inner--html table';

  slate.rte.wrapTable({
    $tables: $(tableSelectors),
    tableWrapperClass: 'scrollable-wrapper'
  });

  // Theme-specific selectors to make iframes responsive
  var iframeSelectors =
    '.rte iframe[src*="youtube.com/embed"],' +
    '.rte iframe[src*="player.vimeo"],' +
    '.custom__item-inner--html iframe[src*="youtube.com/embed"],' +
    '.custom__item-inner--html iframe[src*="player.vimeo"]';

  slate.rte.wrapIframe({
    $iframes: $(iframeSelectors),
    iframeWrapperClass: 'video-wrapper'
  });

  // Common a11y fixes
  slate.a11y.pageLinkFocus($(window.location.hash));

  $('.in-page-link').on('click', function(evt) {
    slate.a11y.pageLinkFocus($(evt.currentTarget.hash));
  });

  $('a[href="#"]').on('click', function(evt) {
    evt.preventDefault();
  });

  slate.a11y.accessibleLinks({
    messages: {
      newWindow: theme.strings.newWindow,
      external: theme.strings.external,
      newWindowExternal: theme.strings.newWindowExternal
    },
    $links: $('a[href]:not([aria-describedby], .product-single__thumbnail)')
  });

  theme.FormStatus.init();

  var selectors = {
    image: '[data-image]',
    imagePlaceholder: '[data-image-placeholder]',
    imageWithPlaceholderWrapper: '[data-image-with-placeholder-wrapper]',
    lazyloaded: '.lazyloaded'
  };

  var classes = {
    hidden: 'hide'
  };

  $(document).on('lazyloaded', function(e) {
    var $target = $(e.target);

    if ($target.data('bgset')) {
      var $image = $target.find(selectors.lazyloaded);
      if ($image.length) {
        var alt = $target.data('alt');
        var src = $image.data('src') ? $image.data('src') : $target.data('bg');

        $image.attr('alt', alt ? alt : '');
        $image.attr('src', src ? src : '');
      }
    }

    if (!$target.is(selectors.image)) {
      return;
    }

    $target
      .closest(selectors.imageWithPlaceholderWrapper)
      .find(selectors.imagePlaceholder)
      .addClass(classes.hidden);
  });

  // When the theme loads, lazysizes might load images before the "lazyloaded"
  // event listener has been attached. When this happens, the following function
  // hides the loading placeholders.
  function onLoadHideLazysizesAnimation() {
    $(selectors.image + '.lazyloaded')
      .closest(selectors.imageWithPlaceholderWrapper)
      .find(selectors.imagePlaceholder)
      .addClass(classes.hidden);
  }

  onLoadHideLazysizesAnimation();
  $(document).one('touchstart', function() {
    theme.Helpers.setTouch();
  });
};

// Youtube API callback
// eslint-disable-next-line no-unused-vars
function onYouTubeIframeAPIReady() {
  theme.Video.loadVideos();
  theme.ProductVideo.loadVideos(theme.ProductVideo.hosts.youtube);
}

$(theme.init);

/*=============================================================================================================================================================================*/
/*=============================================================================================================================================================================*/

/*------------------ slick.min.js ---------------------------*/

!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

/*------------------ slick.min.js ---------------------------*/

/*------------------ owl.min.js ---------------------------*/
!function(t,e,i,s){function n(e,i){this.settings=null,this.options=t.extend({},n.Defaults,i),this.$element=t(e),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},t.each(["onResize","onThrottledResize"],t.proxy(function(e,i){this._handlers[i]=t.proxy(this[i],this)},this)),t.each(n.Plugins,t.proxy(function(t,e){this._plugins[t.charAt(0).toLowerCase()+t.slice(1)]=new e(this)},this)),t.each(n.Workers,t.proxy(function(e,i){this._pipe.push({filter:i.filter,run:t.proxy(i.run,this)})},this)),this.setup(),this.initialize()}n.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:e,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},n.Width={Default:"default",Inner:"inner",Outer:"outer"},n.Type={Event:"event",State:"state"},n.Plugins={},n.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(t){t.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(t){var e=this.settings.margin||"",i=!this.settings.autoWidth,s=this.settings.rtl,n={width:"auto","margin-left":s?e:"","margin-right":s?"":e};!i&&this.$stage.children().css(n),t.css=n}},{filter:["width","items","settings"],run:function(t){var e=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,i=null,s=this._items.length,n=!this.settings.autoWidth,o=[];for(t.items={merge:!1,width:e};s--;)i=this._mergers[s],i=this.settings.mergeFit&&Math.min(i,this.settings.items)||i,t.items.merge=i>1||t.items.merge,o[s]=n?e*i:this._items[s].width();this._widths=o}},{filter:["items","settings"],run:function(){var e=[],i=this._items,s=this.settings,n=Math.max(2*s.items,4),o=2*Math.ceil(i.length/2),r=s.loop&&i.length?s.rewind?n:Math.max(n,o):0,a="",h="";for(r/=2;r>0;)e.push(this.normalize(e.length/2,!0)),a+=i[e[e.length-1]][0].outerHTML,e.push(this.normalize(i.length-1-(e.length-1)/2,!0)),h=i[e[e.length-1]][0].outerHTML+h,r-=1;this._clones=e,t(a).addClass("cloned").appendTo(this.$stage),t(h).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var t=this.settings.rtl?1:-1,e=this._clones.length+this._items.length,i=-1,s=0,n=0,o=[];++i<e;)s=o[i-1]||0,n=this._widths[this.relative(i)]+this.settings.margin,o.push(s+n*t);this._coordinates=o}},{filter:["width","items","settings"],run:function(){var t=this.settings.stagePadding,e=this._coordinates,i={width:Math.ceil(Math.abs(e[e.length-1]))+2*t,"padding-left":t||"","padding-right":t||""};this.$stage.css(i)}},{filter:["width","items","settings"],run:function(t){var e=this._coordinates.length,i=!this.settings.autoWidth,s=this.$stage.children();if(i&&t.items.merge)for(;e--;)t.css.width=this._widths[this.relative(e)],s.eq(e).css(t.css);else i&&(t.css.width=t.items.width,s.css(t.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(t){t.current=t.current?this.$stage.children().index(t.current):0,t.current=Math.max(this.minimum(),Math.min(this.maximum(),t.current)),this.reset(t.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var t,e,i,s,n=this.settings.rtl?1:-1,o=2*this.settings.stagePadding,r=this.coordinates(this.current())+o,a=r+this.width()*n,h=[];for(i=0,s=this._coordinates.length;i<s;i++)t=this._coordinates[i-1]||0,e=Math.abs(this._coordinates[i])+o*n,(this.op(t,"<=",r)&&this.op(t,">",a)||this.op(e,"<",r)&&this.op(e,">",a))&&h.push(i);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+h.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],n.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=t("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(t("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},n.prototype.initializeItems=function(){var e=this.$element.find(".owl-item");if(e.length)return this._items=e.get().map(function(e){return t(e)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},n.prototype.initialize=function(){var t,e,i;(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading"))&&(t=this.$element.find("img"),e=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:void 0,i=this.$element.children(e).width(),t.length&&i<=0&&this.preloadAutoWidthImages(t));this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},n.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},n.prototype.setup=function(){var e=this.viewport(),i=this.options.responsive,s=-1,n=null;i?(t.each(i,function(t){t<=e&&t>s&&(s=Number(t))}),"function"==typeof(n=t.extend({},this.options,i[s])).stagePadding&&(n.stagePadding=n.stagePadding()),delete n.responsive,n.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+s))):n=t.extend({},this.options),this.trigger("change",{property:{name:"settings",value:n}}),this._breakpoint=s,this.settings=n,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},n.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},n.prototype.prepare=function(e){var i=this.trigger("prepare",{content:e});return i.data||(i.data=t("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(e)),this.trigger("prepared",{content:i.data}),i.data},n.prototype.update=function(){for(var e=0,i=this._pipe.length,s=t.proxy(function(t){return this[t]},this._invalidated),n={};e<i;)(this._invalidated.all||t.grep(this._pipe[e].filter,s).length>0)&&this._pipe[e].run(n),e++;this._invalidated={},!this.is("valid")&&this.enter("valid")},n.prototype.width=function(t){switch(t=t||n.Width.Default){case n.Width.Inner:case n.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},n.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},n.prototype.onThrottledResize=function(){e.clearTimeout(this.resizeTimer),this.resizeTimer=e.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},n.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},n.prototype.registerEventHandlers=function(){t.support.transition&&this.$stage.on(t.support.transition.end+".owl.core",t.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(e,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",t.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",t.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",t.proxy(this.onDragEnd,this)))},n.prototype.onDragStart=function(e){var s=null;3!==e.which&&(t.support.transform?s={x:(s=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","))[16===s.length?12:4],y:s[16===s.length?13:5]}:(s=this.$stage.position(),s={x:this.settings.rtl?s.left+this.$stage.width()-this.width()+this.settings.margin:s.left,y:s.top}),this.is("animating")&&(t.support.transform?this.animate(s.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===e.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=t(e.target),this._drag.stage.start=s,this._drag.stage.current=s,this._drag.pointer=this.pointer(e),t(i).on("mouseup.owl.core touchend.owl.core",t.proxy(this.onDragEnd,this)),t(i).one("mousemove.owl.core touchmove.owl.core",t.proxy(function(e){var s=this.difference(this._drag.pointer,this.pointer(e));t(i).on("mousemove.owl.core touchmove.owl.core",t.proxy(this.onDragMove,this)),Math.abs(s.x)<Math.abs(s.y)&&this.is("valid")||(e.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},n.prototype.onDragMove=function(t){var e=null,i=null,s=null,n=this.difference(this._drag.pointer,this.pointer(t)),o=this.difference(this._drag.stage.start,n);this.is("dragging")&&(t.preventDefault(),this.settings.loop?(e=this.coordinates(this.minimum()),i=this.coordinates(this.maximum()+1)-e,o.x=((o.x-e)%i+i)%i+e):(e=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),i=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),s=this.settings.pullDrag?-1*n.x/5:0,o.x=Math.max(Math.min(o.x,e+s),i+s)),this._drag.stage.current=o,this.animate(o.x))},n.prototype.onDragEnd=function(e){var s=this.difference(this._drag.pointer,this.pointer(e)),n=this._drag.stage.current,o=s.x>0^this.settings.rtl?"left":"right";t(i).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==s.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(n.x,0!==s.x?o:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=o,(Math.abs(s.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},n.prototype.closest=function(e,i){var s=-1,n=this.width(),o=this.coordinates();return this.settings.freeDrag||t.each(o,t.proxy(function(t,r){return"left"===i&&e>r-30&&e<r+30?s=t:"right"===i&&e>r-n-30&&e<r-n+30?s=t+1:this.op(e,"<",r)&&this.op(e,">",void 0!==o[t+1]?o[t+1]:r-n)&&(s="left"===i?t+1:t),-1===s},this)),this.settings.loop||(this.op(e,">",o[this.minimum()])?s=e=this.minimum():this.op(e,"<",o[this.maximum()])&&(s=e=this.maximum())),s},n.prototype.animate=function(e){var i=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),i&&(this.enter("animating"),this.trigger("translate")),t.support.transform3d&&t.support.transition?this.$stage.css({transform:"translate3d("+e+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):i?this.$stage.animate({left:e+"px"},this.speed(),this.settings.fallbackEasing,t.proxy(this.onTransitionEnd,this)):this.$stage.css({left:e+"px"})},n.prototype.is=function(t){return this._states.current[t]&&this._states.current[t]>0},n.prototype.current=function(t){if(void 0===t)return this._current;if(0!==this._items.length){if(t=this.normalize(t),this._current!==t){var e=this.trigger("change",{property:{name:"position",value:t}});void 0!==e.data&&(t=this.normalize(e.data)),this._current=t,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current}},n.prototype.invalidate=function(e){return"string"===t.type(e)&&(this._invalidated[e]=!0,this.is("valid")&&this.leave("valid")),t.map(this._invalidated,function(t,e){return e})},n.prototype.reset=function(t){void 0!==(t=this.normalize(t))&&(this._speed=0,this._current=t,this.suppress(["translate","translated"]),this.animate(this.coordinates(t)),this.release(["translate","translated"]))},n.prototype.normalize=function(t,e){var i=this._items.length,s=e?0:this._clones.length;return!this.isNumeric(t)||i<1?t=void 0:(t<0||t>=i+s)&&(t=((t-s/2)%i+i)%i+s/2),t},n.prototype.relative=function(t){return t-=this._clones.length/2,this.normalize(t,!0)},n.prototype.maximum=function(t){var e,i,s,n=this.settings,o=this._coordinates.length;if(n.loop)o=this._clones.length/2+this._items.length-1;else if(n.autoWidth||n.merge){if(e=this._items.length)for(i=this._items[--e].width(),s=this.$element.width();e--&&!((i+=this._items[e].width()+this.settings.margin)>s););o=e+1}else o=n.center?this._items.length-1:this._items.length-n.items;return t&&(o-=this._clones.length/2),Math.max(o,0)},n.prototype.minimum=function(t){return t?0:this._clones.length/2},n.prototype.items=function(t){return void 0===t?this._items.slice():(t=this.normalize(t,!0),this._items[t])},n.prototype.mergers=function(t){return void 0===t?this._mergers.slice():(t=this.normalize(t,!0),this._mergers[t])},n.prototype.clones=function(e){var i=this._clones.length/2,s=i+this._items.length,n=function(t){return t%2==0?s+t/2:i-(t+1)/2};return void 0===e?t.map(this._clones,function(t,e){return n(e)}):t.map(this._clones,function(t,i){return t===e?n(i):null})},n.prototype.speed=function(t){return void 0!==t&&(this._speed=t),this._speed},n.prototype.coordinates=function(e){var i,s=1,n=e-1;return void 0===e?t.map(this._coordinates,t.proxy(function(t,e){return this.coordinates(e)},this)):(this.settings.center?(this.settings.rtl&&(s=-1,n=e+1),i=this._coordinates[e],i+=(this.width()-i+(this._coordinates[n]||0))/2*s):i=this._coordinates[n]||0,i=Math.ceil(i))},n.prototype.duration=function(t,e,i){return 0===i?0:Math.min(Math.max(Math.abs(e-t),1),6)*Math.abs(i||this.settings.smartSpeed)},n.prototype.to=function(t,e){var i=this.current(),s=null,n=t-this.relative(i),o=(n>0)-(n<0),r=this._items.length,a=this.minimum(),h=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(n)>r/2&&(n+=-1*o*r),(s=(((t=i+n)-a)%r+r)%r+a)!==t&&s-n<=h&&s-n>0&&(i=s-n,t=s,this.reset(i))):t=this.settings.rewind?(t%(h+=1)+h)%h:Math.max(a,Math.min(h,t)),this.speed(this.duration(i,t,e)),this.current(t),this.isVisible()&&this.update()},n.prototype.next=function(t){t=t||!1,this.to(this.relative(this.current())+1,t)},n.prototype.prev=function(t){t=t||!1,this.to(this.relative(this.current())-1,t)},n.prototype.onTransitionEnd=function(t){if(void 0!==t&&(t.stopPropagation(),(t.target||t.srcElement||t.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},n.prototype.viewport=function(){var s;return this.options.responsiveBaseElement!==e?s=t(this.options.responsiveBaseElement).width():e.innerWidth?s=e.innerWidth:i.documentElement&&i.documentElement.clientWidth?s=i.documentElement.clientWidth:console.warn("Can not detect viewport width."),s},n.prototype.replace=function(e){this.$stage.empty(),this._items=[],e&&(e=e instanceof jQuery?e:t(e)),this.settings.nestedItemSelector&&(e=e.find("."+this.settings.nestedItemSelector)),e.filter(function(){return 1===this.nodeType}).each(t.proxy(function(t,e){e=this.prepare(e),this.$stage.append(e),this._items.push(e),this._mergers.push(1*e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},n.prototype.add=function(e,i){var s=this.relative(this._current);i=void 0===i?this._items.length:this.normalize(i,!0),e=e instanceof jQuery?e:t(e),this.trigger("add",{content:e,position:i}),e=this.prepare(e),0===this._items.length||i===this._items.length?(0===this._items.length&&this.$stage.append(e),0!==this._items.length&&this._items[i-1].after(e),this._items.push(e),this._mergers.push(1*e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[i].before(e),this._items.splice(i,0,e),this._mergers.splice(i,0,1*e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[s]&&this.reset(this._items[s].index()),this.invalidate("items"),this.trigger("added",{content:e,position:i})},n.prototype.remove=function(t){void 0!==(t=this.normalize(t,!0))&&(this.trigger("remove",{content:this._items[t],position:t}),this._items[t].remove(),this._items.splice(t,1),this._mergers.splice(t,1),this.invalidate("items"),this.trigger("removed",{content:null,position:t}))},n.prototype.preloadAutoWidthImages=function(e){e.each(t.proxy(function(e,i){this.enter("pre-loading"),i=t(i),t(new Image).one("load",t.proxy(function(t){i.attr("src",t.target.src),i.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",i.attr("src")||i.attr("data-src")||i.attr("data-src-retina"))},this))},n.prototype.destroy=function(){for(var s in this.$element.off(".owl.core"),this.$stage.off(".owl.core"),t(i).off(".owl.core"),!1!==this.settings.responsive&&(e.clearTimeout(this.resizeTimer),this.off(e,"resize",this._handlers.onThrottledResize)),this._plugins)this._plugins[s].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},n.prototype.op=function(t,e,i){var s=this.settings.rtl;switch(e){case"<":return s?t>i:t<i;case">":return s?t<i:t>i;case">=":return s?t<=i:t>=i;case"<=":return s?t>=i:t<=i}},n.prototype.on=function(t,e,i,s){t.addEventListener?t.addEventListener(e,i,s):t.attachEvent&&t.attachEvent("on"+e,i)},n.prototype.off=function(t,e,i,s){t.removeEventListener?t.removeEventListener(e,i,s):t.detachEvent&&t.detachEvent("on"+e,i)},n.prototype.trigger=function(e,i,s,o,r){var a={item:{count:this._items.length,index:this.current()}},h=t.camelCase(t.grep(["on",e,s],function(t){return t}).join("-").toLowerCase()),l=t.Event([e,"owl",s||"carousel"].join(".").toLowerCase(),t.extend({relatedTarget:this},a,i));return this._supress[e]||(t.each(this._plugins,function(t,e){e.onTrigger&&e.onTrigger(l)}),this.register({type:n.Type.Event,name:e}),this.$element.trigger(l),this.settings&&"function"==typeof this.settings[h]&&this.settings[h].call(this,l)),l},n.prototype.enter=function(e){t.each([e].concat(this._states.tags[e]||[]),t.proxy(function(t,e){void 0===this._states.current[e]&&(this._states.current[e]=0),this._states.current[e]++},this))},n.prototype.leave=function(e){t.each([e].concat(this._states.tags[e]||[]),t.proxy(function(t,e){this._states.current[e]--},this))},n.prototype.register=function(e){if(e.type===n.Type.Event){if(t.event.special[e.name]||(t.event.special[e.name]={}),!t.event.special[e.name].owl){var i=t.event.special[e.name]._default;t.event.special[e.name]._default=function(t){return!i||!i.apply||t.namespace&&-1!==t.namespace.indexOf("owl")?t.namespace&&t.namespace.indexOf("owl")>-1:i.apply(this,arguments)},t.event.special[e.name].owl=!0}}else e.type===n.Type.State&&(this._states.tags[e.name]?this._states.tags[e.name]=this._states.tags[e.name].concat(e.tags):this._states.tags[e.name]=e.tags,this._states.tags[e.name]=t.grep(this._states.tags[e.name],t.proxy(function(i,s){return t.inArray(i,this._states.tags[e.name])===s},this)))},n.prototype.suppress=function(e){t.each(e,t.proxy(function(t,e){this._supress[e]=!0},this))},n.prototype.release=function(e){t.each(e,t.proxy(function(t,e){delete this._supress[e]},this))},n.prototype.pointer=function(t){var i={x:null,y:null};return(t=(t=t.originalEvent||t||e.event).touches&&t.touches.length?t.touches[0]:t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t).pageX?(i.x=t.pageX,i.y=t.pageY):(i.x=t.clientX,i.y=t.clientY),i},n.prototype.isNumeric=function(t){return!isNaN(parseFloat(t))},n.prototype.difference=function(t,e){return{x:t.x-e.x,y:t.y-e.y}},t.fn.owlCarousel=function(e){var i=Array.prototype.slice.call(arguments,1);return this.each(function(){var s=t(this),o=s.data("owl.carousel");o||(o=new n(this,"object"==typeof e&&e),s.data("owl.carousel",o),t.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(e,i){o.register({type:n.Type.Event,name:i}),o.$element.on(i+".owl.carousel.core",t.proxy(function(t){t.namespace&&t.relatedTarget!==this&&(this.suppress([i]),o[i].apply(this,[].slice.call(arguments,1)),this.release([i]))},o))})),"string"==typeof e&&"_"!==e.charAt(0)&&o[e].apply(o,i)})},t.fn.owlCarousel.Constructor=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this._core=e,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this._core.$element.on(this._handlers)};n.Defaults={autoRefresh:!0,autoRefreshInterval:500},n.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=e.setInterval(t.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},n.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},n.prototype.destroy=function(){var t,i;for(t in e.clearInterval(this._interval),this._handlers)this._core.$element.off(t,this._handlers[t]);for(i in Object.getOwnPropertyNames(this))"function"!=typeof this[i]&&(this[i]=null)},t.fn.owlCarousel.Constructor.Plugins.AutoRefresh=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this._core=e,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":t.proxy(function(e){if(e.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(e.property&&"position"==e.property.name||"initialized"==e.type)){var i=this._core.settings,s=i.center&&Math.ceil(i.items/2)||i.items,n=i.center&&-1*s||0,o=(e.property&&void 0!==e.property.value?e.property.value:this._core.current())+n,r=this._core.clones().length,a=t.proxy(function(t,e){this.load(e)},this);for(i.lazyLoadEager>0&&(s+=i.lazyLoadEager,i.loop&&(o-=i.lazyLoadEager,s++));n++<s;)this.load(r/2+this._core.relative(o)),r&&t.each(this._core.clones(this._core.relative(o)),a),o++}},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this._core.$element.on(this._handlers)};n.Defaults={lazyLoad:!1,lazyLoadEager:0},n.prototype.load=function(i){var s=this._core.$stage.children().eq(i),n=s&&s.find(".owl-lazy");!n||t.inArray(s.get(0),this._loaded)>-1||(n.each(t.proxy(function(i,s){var n,o=t(s),r=e.devicePixelRatio>1&&o.attr("data-src-retina")||o.attr("data-src")||o.attr("data-srcset");this._core.trigger("load",{element:o,url:r},"lazy"),o.is("img")?o.one("load.owl.lazy",t.proxy(function(){o.css("opacity",1),this._core.trigger("loaded",{element:o,url:r},"lazy")},this)).attr("src",r):o.is("source")?o.one("load.owl.lazy",t.proxy(function(){this._core.trigger("loaded",{element:o,url:r},"lazy")},this)).attr("srcset",r):((n=new Image).onload=t.proxy(function(){o.css({"background-image":'url("'+r+'")',opacity:"1"}),this._core.trigger("loaded",{element:o,url:r},"lazy")},this),n.src=r)},this)),this._loaded.push(s.get(0)))},n.prototype.destroy=function(){var t,e;for(t in this.handlers)this._core.$element.off(t,this.handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.Lazy=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(i){this._core=i,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&"position"===t.property.name&&this.update()},this),"loaded.owl.lazy":t.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&t.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var s=this;t(e).on("load",function(){s._core.settings.autoHeight&&s.update()}),t(e).resize(function(){s._core.settings.autoHeight&&(null!=s._intervalId&&clearTimeout(s._intervalId),s._intervalId=setTimeout(function(){s.update()},250))})};n.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},n.prototype.update=function(){var e=this._core._current,i=e+this._core.settings.items,s=this._core.settings.lazyLoad,n=this._core.$stage.children().toArray().slice(e,i),o=[],r=0;t.each(n,function(e,i){o.push(t(i).height())}),(r=Math.max.apply(null,o))<=1&&s&&this._previousHeight&&(r=this._previousHeight),this._previousHeight=r,this._core.$stage.parent().height(r).addClass(this._core.settings.autoHeightClass)},n.prototype.destroy=function(){var t,e;for(t in this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.AutoHeight=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this._core=e,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":t.proxy(function(t){t.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.video&&this.isInFullScreen()&&t.preventDefault()},this),"refreshed.owl.carousel":t.proxy(function(t){t.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":t.proxy(function(t){t.namespace&&"position"===t.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":t.proxy(function(e){if(e.namespace){var i=t(e.content).find(".owl-video");i.length&&(i.css("display","none"),this.fetch(i,t(e.content)))}},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",t.proxy(function(t){this.play(t)},this))};n.Defaults={video:!1,videoHeight:!1,videoWidth:!1},n.prototype.fetch=function(t,e){var i=t.attr("data-vimeo-id")?"vimeo":t.attr("data-vzaar-id")?"vzaar":"youtube",s=t.attr("data-vimeo-id")||t.attr("data-youtube-id")||t.attr("data-vzaar-id"),n=t.attr("data-width")||this._core.settings.videoWidth,o=t.attr("data-height")||this._core.settings.videoHeight,r=t.attr("href");if(!r)throw new Error("Missing video URL.");if((s=r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")>-1)i="youtube";else if(s[3].indexOf("vimeo")>-1)i="vimeo";else{if(!(s[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");i="vzaar"}s=s[6],this._videos[r]={type:i,id:s,width:n,height:o},e.attr("data-video",r),this.thumbnail(t,this._videos[r])},n.prototype.thumbnail=function(e,i){var s,n,o=i.width&&i.height?"width:"+i.width+"px;height:"+i.height+"px;":"",r=e.find("img"),a="src",h="",l=this._core.settings,c=function(i){'<div class="owl-video-play-icon"></div>',s=l.lazyLoad?t("<div/>",{class:"owl-video-tn "+h,srcType:i}):t("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+i+")"}),e.after(s),e.after('<div class="owl-video-play-icon"></div>')};if(e.wrap(t("<div/>",{class:"owl-video-wrapper",style:o})),this._core.settings.lazyLoad&&(a="data-src",h="owl-lazy"),r.length)return c(r.attr(a)),r.remove(),!1;"youtube"===i.type?(n="//img.youtube.com/vi/"+i.id+"/hqdefault.jpg",c(n)):"vimeo"===i.type?t.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+i.id+".json",jsonp:"callback",dataType:"jsonp",success:function(t){n=t[0].thumbnail_large,c(n)}}):"vzaar"===i.type&&t.ajax({type:"GET",url:"//vzaar.com/api/videos/"+i.id+".json",jsonp:"callback",dataType:"jsonp",success:function(t){n=t.framegrab_url,c(n)}})},n.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},n.prototype.play=function(e){var i,s=t(e.target).closest("."+this._core.settings.itemClass),n=this._videos[s.attr("data-video")],o=n.width||"100%",r=n.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),s=this._core.items(this._core.relative(s.index())),this._core.reset(s.index()),(i=t('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height",r),i.attr("width",o),"youtube"===n.type?i.attr("src","//www.youtube.com/embed/"+n.id+"?autoplay=1&rel=0&v="+n.id):"vimeo"===n.type?i.attr("src","//player.vimeo.com/video/"+n.id+"?autoplay=1"):"vzaar"===n.type&&i.attr("src","//view.vzaar.com/"+n.id+"/player?autoplay=true"),t(i).wrap('<div class="owl-video-frame" />').insertAfter(s.find(".owl-video")),this._playing=s.addClass("owl-video-playing"))},n.prototype.isInFullScreen=function(){var e=i.fullscreenElement||i.mozFullScreenElement||i.webkitFullscreenElement;return e&&t(e).parent().hasClass("owl-video-frame")},n.prototype.destroy=function(){var t,e;for(t in this._core.$element.off("click.owl.video"),this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.Video=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this.core=e,this.core.options=t.extend({},n.Defaults,this.core.options),this.swapping=!0,this.previous=void 0,this.next=void 0,this.handlers={"change.owl.carousel":t.proxy(function(t){t.namespace&&"position"==t.property.name&&(this.previous=this.core.current(),this.next=t.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":t.proxy(function(t){t.namespace&&(this.swapping="translated"==t.type)},this),"translate.owl.carousel":t.proxy(function(t){t.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};n.Defaults={animateOut:!1,animateIn:!1},n.prototype.swap=function(){if(1===this.core.settings.items&&t.support.animation&&t.support.transition){this.core.speed(0);var e,i=t.proxy(this.clear,this),s=this.core.$stage.children().eq(this.previous),n=this.core.$stage.children().eq(this.next),o=this.core.settings.animateIn,r=this.core.settings.animateOut;this.core.current()!==this.previous&&(r&&(e=this.core.coordinates(this.previous)-this.core.coordinates(this.next),s.one(t.support.animation.end,i).css({left:e+"px"}).addClass("animated owl-animated-out").addClass(r)),o&&n.one(t.support.animation.end,i).addClass("animated owl-animated-in").addClass(o))}},n.prototype.clear=function(e){t(e.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},n.prototype.destroy=function(){var t,e;for(t in this.handlers)this.core.$element.off(t,this.handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.Animate=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this._core=e,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":t.proxy(function(t){t.namespace&&"settings"===t.property.name?this._core.settings.autoplay?this.play():this.stop():t.namespace&&"position"===t.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":t.proxy(function(t,e,i){t.namespace&&this.play(e,i)},this),"stop.owl.autoplay":t.proxy(function(t){t.namespace&&this.stop()},this),"mouseover.owl.autoplay":t.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":t.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":t.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":t.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=t.extend({},n.Defaults,this._core.options)};n.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},n.prototype._next=function(s){this._call=e.setTimeout(t.proxy(this._next,this,s),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||i.hidden||this._core.next(s||this._core.settings.autoplaySpeed)},n.prototype.read=function(){return(new Date).getTime()-this._time},n.prototype.play=function(i,s){var n;this._core.is("rotating")||this._core.enter("rotating"),i=i||this._core.settings.autoplayTimeout,n=Math.min(this._time%(this._timeout||i),i),this._paused?(this._time=this.read(),this._paused=!1):e.clearTimeout(this._call),this._time+=this.read()%i-n,this._timeout=i,this._call=e.setTimeout(t.proxy(this._next,this,s),i-n)},n.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,e.clearTimeout(this._call),this._core.leave("rotating"))},n.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,e.clearTimeout(this._call))},n.prototype.destroy=function(){var t,e;for(t in this.stop(),this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.autoplay=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){"use strict";var n=function(e){this._core=e,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":t.proxy(function(e){e.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.splice(t.position,0,this._templates.pop())},this),"remove.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.splice(t.position,1)},this),"changed.owl.carousel":t.proxy(function(t){t.namespace&&"position"==t.property.name&&this.draw()},this),"initialized.owl.carousel":t.proxy(function(t){t.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":t.proxy(function(t){t.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this.$element.on(this._handlers)};n.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},n.prototype.initialize=function(){var e,i=this._core.settings;for(e in this._controls.$relative=(i.navContainer?t(i.navContainer):t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=t("<"+i.navElement+">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click",t.proxy(function(t){this.prev(i.navSpeed)},this)),this._controls.$next=t("<"+i.navElement+">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click",t.proxy(function(t){this.next(i.navSpeed)},this)),i.dotsData||(this._templates=[t('<button role="button">').addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]),this._controls.$absolute=(i.dotsContainer?t(i.dotsContainer):t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",t.proxy(function(e){var s=t(e.target).parent().is(this._controls.$absolute)?t(e.target).index():t(e.target).parent().index();e.preventDefault(),this.to(s,i.dotsSpeed)},this)),this._overrides)this._core[e]=t.proxy(this[e],this)},n.prototype.destroy=function(){var t,e,i,s,n;for(t in n=this._core.settings,this._handlers)this.$element.off(t,this._handlers[t]);for(e in this._controls)"$relative"===e&&n.navContainer?this._controls[e].html(""):this._controls[e].remove();for(s in this.overides)this._core[s]=this._overrides[s];for(i in Object.getOwnPropertyNames(this))"function"!=typeof this[i]&&(this[i]=null)},n.prototype.update=function(){var t,e,i=this._core.clones().length/2,s=i+this._core.items().length,n=this._core.maximum(!0),o=this._core.settings,r=o.center||o.autoWidth||o.dotsData?1:o.dotsEach||o.items;if("page"!==o.slideBy&&(o.slideBy=Math.min(o.slideBy,o.items)),o.dots||"page"==o.slideBy)for(this._pages=[],t=i,e=0,0;t<s;t++){if(e>=r||0===e){if(this._pages.push({start:Math.min(n,t-i),end:t-i+r-1}),Math.min(n,t-i)===n)break;e=0,0}e+=this._core.mergers(this._core.relative(t))}},n.prototype.draw=function(){var e,i=this._core.settings,s=this._core.items().length<=i.items,n=this._core.relative(this._core.current()),o=i.loop||i.rewind;this._controls.$relative.toggleClass("disabled",!i.nav||s),i.nav&&(this._controls.$previous.toggleClass("disabled",!o&&n<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!o&&n>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!i.dots||s),i.dots&&(e=this._pages.length-this._controls.$absolute.children().length,i.dotsData&&0!==e?this._controls.$absolute.html(this._templates.join("")):e>0?this._controls.$absolute.append(new Array(e+1).join(this._templates[0])):e<0&&this._controls.$absolute.children().slice(e).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(t.inArray(this.current(),this._pages)).addClass("active"))},n.prototype.onTrigger=function(e){var i=this._core.settings;e.page={index:t.inArray(this.current(),this._pages),count:this._pages.length,size:i&&(i.center||i.autoWidth||i.dotsData?1:i.dotsEach||i.items)}},n.prototype.current=function(){var e=this._core.relative(this._core.current());return t.grep(this._pages,t.proxy(function(t,i){return t.start<=e&&t.end>=e},this)).pop()},n.prototype.getPosition=function(e){var i,s,n=this._core.settings;return"page"==n.slideBy?(i=t.inArray(this.current(),this._pages),s=this._pages.length,e?++i:--i,i=this._pages[(i%s+s)%s].start):(i=this._core.relative(this._core.current()),s=this._core.items().length,e?i+=n.slideBy:i-=n.slideBy),i},n.prototype.next=function(e){t.proxy(this._overrides.to,this._core)(this.getPosition(!0),e)},n.prototype.prev=function(e){t.proxy(this._overrides.to,this._core)(this.getPosition(!1),e)},n.prototype.to=function(e,i,s){var n;!s&&this._pages.length?(n=this._pages.length,t.proxy(this._overrides.to,this._core)(this._pages[(e%n+n)%n].start,i)):t.proxy(this._overrides.to,this._core)(e,i)},t.fn.owlCarousel.Constructor.Plugins.Navigation=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){"use strict";var n=function(i){this._core=i,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":t.proxy(function(i){i.namespace&&"URLHash"===this._core.settings.startPosition&&t(e).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":t.proxy(function(e){if(e.namespace){var i=t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!i)return;this._hashes[i]=e.content}},this),"changed.owl.carousel":t.proxy(function(i){if(i.namespace&&"position"===i.property.name){var s=this._core.items(this._core.relative(this._core.current())),n=t.map(this._hashes,function(t,e){return t===s?e:null}).join();if(!n||e.location.hash.slice(1)===n)return;e.location.hash=n}},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this.$element.on(this._handlers),t(e).on("hashchange.owl.navigation",t.proxy(function(t){var i=e.location.hash.substring(1),s=this._core.$stage.children(),n=this._hashes[i]&&s.index(this._hashes[i]);void 0!==n&&n!==this._core.current()&&this._core.to(this._core.relative(n),!1,!0)},this))};n.Defaults={URLhashListener:!1},n.prototype.destroy=function(){var i,s;for(i in t(e).off("hashchange.owl.navigation"),this._handlers)this._core.$element.off(i,this._handlers[i]);for(s in Object.getOwnPropertyNames(this))"function"!=typeof this[s]&&(this[s]=null)},t.fn.owlCarousel.Constructor.Plugins.Hash=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=t("<support>").get(0).style,o="Webkit Moz O ms".split(" "),r={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},a=function(){return!!c("transform")},h=function(){return!!c("perspective")},l=function(){return!!c("animation")};function c(e,i){var r=!1,a=e.charAt(0).toUpperCase()+e.slice(1);return t.each((e+" "+o.join(a+" ")+a).split(" "),function(t,e){if(n[e]!==s)return r=!i||e,!1}),r}function p(t){return c(t,!0)}(function(){return!!c("transition")})()&&(t.support.transition=new String(p("transition")),t.support.transition.end=r.transition.end[t.support.transition]),l()&&(t.support.animation=new String(p("animation")),t.support.animation.end=r.animation.end[t.support.animation]),a()&&(t.support.transform=new String(p("transform")),t.support.transform3d=h())}(window.Zepto||window.jQuery,window,document);
/*------------------ owl.min.js ---------------------------*/

/*------------------ Navigation Hover Open Menu ---------------------------*/

$('.site-nav--has-dropdown').hover(function() {
  if ($(this).hasClass('activated')){
    $(this).removeClass('activated');
    $(this).children('.site-nav__dropdown').css('display', 'none');
  }
  else
  {
    $(this).addClass('activated');
    $(this).children('.site-nav__dropdown').css('display', 'block');
  }  
});

/*------------------ Navigation Hover Open Menu ---------------------------*/

/*------------------ feature-categories-slider-new ---------------------------*/

/*$(document).ready(function(){
  $('.categories_list_new').slick({
    dots: false,
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});*/
    
/*$('.categories_list_new').owlCarousel({
    loop:true,
    margin:18,
    nav:true,
    dots:false,
    autoplay:true,
    items:9,
    smartSpeed:700,
    responsive:{
        0:{
            items:3
        },
        768:{
            items:6
        },
        1024:{
            items:7
        },
      	1200:{
            items:9
        }
    }
})*/

$('.categories_list_new').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    items:9,
    smartSpeed:700,
    responsive:{
        0:{
            items:3
        },
        750:{
            items:6
        },
        1024:{
            items:7
        },
      	1200:{
            items:9
        }
    }
})

/*------------------ feature-categories-slider-new ---------------------------*/
    
/*------------------ logo-list-slider-new ---------------------------*/

/*$(document).ready(function(){
  $('.logo_list_new').slick({
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});*/
    
$('.logo_list_new').owlCarousel({
    loop:true,
    margin:18,
    nav:true,
    dots:false,
    autoplay:true,
    smartSpeed:700,
    items:9,
    responsive:{
        0:{
            items:2
        },
      	576:{
            items:3
        },
        750:{
            items:5
        },
        1024:{
            items:7
        }
    }
})

$('.feature-new-row').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:true,
    autoplay:true,
  	autoplayTimeout:8000,
    smartSpeed:700,
    items:1
})



/*------------------ logo-list-slider-new ---------------------------*/

/*------------------ product-template-tabs-new -------------------Klarna-FAQs-tabs-new----------------------*/
    
jQuery(document).ready(function() {
  jQuery('ul.tabs').each(function(){
    var active, content, links = jQuery(this).find('a');
    active = links.first().addClass('active');
    content = jQuery(active.attr('href'));
    links.not(':first').each(function () {
      jQuery(jQuery(this).attr('href')).hide();
    });
    jQuery(this).find('a').click(function(e){
      active.removeClass('active');
      content.hide();
      active = jQuery(this);
      content = jQuery(jQuery(this).attr('href'));
      active.addClass('active');
      content.show();
      return false;
    });
  });
});    
    
/*------------------ product-template-tabs-new -------------------Klarna-FAQs-tabs-new----------------------*/    
    
/*------------------ product-template-quantity ---------------------------*/
 
$('.qtyminus').click(function(e){
  e.preventDefault();

  var $this = $(this),
      $input = $this.next('input'),
      newValue = parseInt($input.val())-1;
  if(newValue<1){	
    $input.val(1);      
  } else {
    $input.val(newValue);
  }
});

$(".qtyplus").click(function(e) {
  e.preventDefault();

  var $this = $(this),
      $input = $this.prev('input'),
      newValue = parseInt($input.val())+1;

  $input.val(newValue);
});    
    
/*------------------ product-template-quantity ---------------------------*/    
    
jQuery(function() {
  jQuery('.swatch :radio').change(function() {
    var optionIndex = jQuery(this).closest('.swatch').attr('data-option-index');
    var optionValue = jQuery(this).val();
    jQuery(this)
      .closest('form')
      .find('.single-option-selector')
      .eq(optionIndex)
      .val(optionValue)
      .trigger('change');
  });
});
    
/*------------------ product page slider with dropdown varient---------------------------*/  

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav',
  adaptiveHeight: false
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  asNavFor: '.slider-for',
  dots: false,
  arrows: true,
  centerMode: true,
  focusOnSelect: true, 
});
/*------------------ product page slider with dropdown varient---------------------------*/     
    
/*------------------ Accordian all pages ---------------------------*/     

/*------------------ Accordian all pages ---------------------------*/     
    
/*------------------ Accordian all pages ---------------------------*/     

    $('.all_tabs').removeClass("active");
    $(".tab1_tab").addClass("active");
    $('.all_tabs_info').css("display","none");	
    $(".tab1_info").fadeIn();
    
    //mobile
    $('.tab1').addClass("active");
    
    $(".tab1").click(function(){
      if($(this).hasClass("active") == false){
        $('.all_tabs').removeClass("active");
        $(this).addClass("active");
        $(".tab1_tab").addClass("active");
        $('.all_tabs_info').slideUp();	
        $(".tab1_info").slideToggle();
      }
      else
      {
      	$('.all_tabs').removeClass("active");
        $('.tab1_info').slideUp();	
      }
    })
    
    $(".tab1_tab").click(function(){
        if($(this).hasClass("active") == false){
          $('.all_tabs').removeClass("active");
          $(this).addClass("active");
          $('.all_tabs_info').css("display","none");	
          $(".tab1_info").fadeIn();
        }	
    })
    
    $(".tab2").click(function(){
      if($(this).hasClass("active") == false){
        $('.all_tabs').removeClass("active");
        $(this).addClass("active");
        $(".tab2_tab").addClass("active");
        $('.all_tabs_info').slideUp();	
        $(".tab2_info").slideToggle();
      }
      else
      {
      	$('.all_tabs').removeClass("active");
        $('.tab2_info').slideUp();	
      }
    })
    $(".tab2_tab").click(function(){
      if($(this).hasClass("active") == false){
        $('.all_tabs').removeClass("active");
        $(this).addClass("active");
      
        $('.all_tabs_info').css("display","none");	
        $(".tab2_info").fadeIn();
      }
    })
    
    $(".tab3").click(function(){
      if($(this).hasClass("active") == false){
        $('.all_tabs').removeClass("active");
        $(this).addClass("active");
        $(".tab3_tab").addClass("active");
        $('.all_tabs_info').slideUp();	
        $(".tab3_info").slideToggle();
      }
      else
      {
      	$('.all_tabs').removeClass("active");
        $('.tab3_info').slideUp();	
      }
    })
    $(".tab3_tab").click(function(){
      if($(this).hasClass("active") == false){
        $('.all_tabs').removeClass("active");
        $(this).addClass("active");
      
        $('.all_tabs_info').css("display","none");	
        $(".tab3_info").fadeIn();
      }
    })
    
    $(".tab4").click(function(){
      if($(this).hasClass("active") == false){
        $('.all_tabs').removeClass("active");
        $(this).addClass("active");
        $(".tab4_tab").addClass("active");
        $('.all_tabs_info').slideUp();	
        $(".tab4_info").slideToggle();
      }
      else
      {
      	$('.all_tabs').removeClass("active");
        $('.tab4_info').slideUp();	
      }
    })
    $(".tab4_tab").click(function(){
      if($(this).hasClass("active") == false){
        $('.all_tabs').removeClass("active");
        $(this).addClass("active");
      
        $('.all_tabs_info').css("display","none");	
        $(".tab4_info").fadeIn();
      }
    })
    
    $(".tab5").click(function(){
      if($(this).hasClass("active") == false){
        $('.all_tabs').removeClass("active");
        $(this).addClass("active");
        $(".tab5_tab").addClass("active");
        $('.all_tabs_info').slideUp();	
        $(".tab5_info").slideToggle();
      }
      else
      {
      	$('.all_tabs').removeClass("active");
        $('.tab5_info').slideUp();	
      }
    })
    $(".tab5_tab").click(function(){
      if($(this).hasClass("active") == false){
        $('.all_tabs').removeClass("active");
        $(this).addClass("active");
      
        $('.all_tabs_info').css("display","none");	
        $(".tab5_info").fadeIn();
      }
    })
    
/*------------------ Accordian all pages ---------------------------*/     
    
/*------------------ Warranty page ---------------------------*/     
  $(".tabs-content-warranty h3").click(function(){
    var width = $(document).width();
    if(width < 750 )
    {
      	$(this).toggleClass("active");
  		$(this).next("div").slideToggle();                                     
        
    }
  })
  $(".tabs-warranty li a").click(function() {
    var width = $(document).width();
    if(width < 750 )
    {
      $('html, body').animate({
          scrollTop: $("#tabs_content_warranty").offset().top - 100
      }, 2000);
    }
  });
/*------------------ Warranty page ---------------------------*/     


$('#top_deals').owlCarousel({
    loop:true,
    margin:6,
    nav:true,
    dots:false,
    autoplay:false,
    smartSpeed:700,
    items:4,
    responsive:{
        0:{
            items:2
        },
      	576:{
            items:2
        },
        750:{
            items:4
        },
        1024:{
            items:4
        }
    }
})


/*------------------ new arrival page ---------------------------*/     
$(document).ready(function() {
  if ( $(window).width() > 750 ) {
    startCarousel();
  } else {
    $('#new_arrival.owl-carousel').addClass('off');
  }
});

$(window).resize(function() {
    if ( $(window).width() > 750 ) {
      startCarousel();
    } else {
      stopCarousel();
    }
});

function startCarousel(){
  $("#new_arrival").owlCarousel({
     loop:true,
     margin:6,
     nav:true,
     dots:false,
     autoplay:false,
     smartSpeed:700,
     items:4,
  });
}
function stopCarousel() {
  var owl = $('#new_arrival.owl-carousel');
  owl.trigger('destroy.owl.carousel');
  owl.addClass('off');
}


/*-------------- ARROW_FOR_MOBILE ---------------*/
$(function(){
  var nav = $('.spec_information_text_new'),
      animateTime = 500,
      navLink = $('.navLink');
  navLink.click(function(){
    $(this).toggleClass("open");
    if(nav.height() === 100){
      autoHeightAnimate(nav, animateTime);
    } else {
      nav.stop().animate({ height: '100' }, animateTime);
    }
  });
})

/* Function to animate height: auto */
function autoHeightAnimate(element, time){
  	var curHeight = element.height(), // Get Default Height
        autoHeight = element.css('height', 'auto').height(); // Get Auto Height
    	  element.height(curHeight); // Reset to Default Height
    	  element.stop().animate({ height: autoHeight }, time); // Animate to Auto Height
}

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* jQuery elevateZoom 2.1.0 - Demo's and documentation: - www.elevateweb.co.uk/image-zoom - Copyright (c) 2012 Andrew Eades - www.elevateweb.co.uk - Dual licensed under the LGPL licenses. - http://en.wikipedia.org/wiki/MIT_License - http://en.wikipedia.org/wiki/GNU_General_Public_License */
 "function"!==typeof Object.create&&(Object.create=function(b){function e(){}e.prototype=b;return new e});
(function(b){var e={init:function(a,d){var c=this;c.elem=d;c.$elem=b(d);c.imageSrc=c.$elem.data("zoom-image")?c.$elem.data("zoom-image"):c.$elem.attr("src");c.options=b.extend({},b.fn.elevateZoom.options,a);c.options.tint&&(c.options.lensColour="none",c.options.lensOpacity="1");"inner"==c.options.zoomType&&(c.options.showLens=!1);c.$elem.parent().removeAttr("title").removeAttr("alt");c.zoomImage=c.imageSrc;c.refresh(1);b("#"+c.options.gallery+" a").click(function(a){a.preventDefault();c.zoomImagePre=
b(this).data("zoom-image")?b(this).data("zoom-image"):b(this).data("image");c.swaptheimage(b(this).data("image"),c.zoomImagePre);return!1})},refresh:function(a){var d=this;setTimeout(function(){d.fetch(d.imageSrc)},a||d.options.refresh)},fetch:function(a){var d=this,c=new Image;c.onload=function(){d.largeWidth=c.width;d.largeHeight=c.height;d.startZoom();d.currentImage=d.imageSrc};c.src=a},startZoom:function(){var a=this;a.nzWidth=a.$elem.width();a.nzHeight=a.$elem.height();a.nzOffset=a.$elem.offset();
a.widthRatio=a.largeWidth/a.nzWidth;a.heightRatio=a.largeHeight/a.nzHeight;"window"==a.options.zoomType&&(a.zoomWindowStyle="overflow: hidden;background-position: 0px 0px;background-color:white;text-align:center;width: "+String(a.options.zoomWindowWidth)+"px;height: "+String(a.options.zoomWindowHeight)+"px;float: left;display: none;z-index:100px;border: "+String(a.options.borderSize)+"px solid "+a.options.borderColour+";background-repeat: no-repeat;position: absolute;");"inner"==a.options.zoomType&&
(a.zoomWindowStyle="overflow: hidden;background-position: 0px 0px;width: "+String(a.nzWidth)+"px;height: "+String(a.nzHeight)+"px;float: left;display: none;cursor:"+a.options.cursor+";px solid "+a.options.borderColour+";background-repeat: no-repeat;position: absolute;");"window"==a.options.zoomType&&(lensHeight=a.nzHeight<a.options.zoomWindowWidth/a.widthRatio?a.nzHeight:String(a.options.zoomWindowHeight/a.heightRatio),lensWidth=a.largeWidth<a.options.zoomWindowWidth?a.nzHWidth:a.options.zoomWindowWidth/
a.widthRatio,a.lensStyle="background-position: 0px 0px;width: "+String(a.options.zoomWindowWidth/a.widthRatio)+"px;height: "+String(a.options.zoomWindowHeight/a.heightRatio)+"px;float: right;display: none;overflow: hidden;z-index: 999;opacity:"+a.options.lensOpacity+";filter: alpha(opacity = "+100*a.options.lensOpacity+"); zoom:1;width:"+lensWidth+"px;height:"+lensHeight+"px;background-color:"+a.options.lensColour+";cursor:"+a.options.cursor+";border: "+a.options.lensBorder+"px solid black;background-repeat: no-repeat;position: absolute;");
a.tintStyle="display: block;position: absolute;background-color: "+a.options.tintColour+";opacity: 0;width: "+a.nzWidth+"px;height: "+a.nzHeight+"px;";a.lensRound="";"lens"==a.options.zoomType&&(a.lensStyle="background-position: 0px 0px;float: left;display: none;border: "+String(a.options.borderSize)+"px solid "+a.options.borderColour+";width:"+String(a.options.lensSize)+"px;height:"+String(a.options.lensSize)+"px;background-repeat: no-repeat;position: absolute;");"round"==a.options.lensShape&&(a.lensRound=
"border-top-left-radius: "+String(a.options.lensSize/2+a.options.borderSize)+"px;border-top-right-radius: "+String(a.options.lensSize/2+a.options.borderSize)+"px;border-bottom-left-radius: "+String(a.options.lensSize/2+a.options.borderSize)+"px;border-bottom-right-radius: "+String(a.options.lensSize/2+a.options.borderSize)+"px;");a.zoomContainer=b('<div class="zoomContainer" style="position:absolute;left:'+a.nzOffset.left+"px;top:"+a.nzOffset.top+"px;height:"+a.nzHeight+"px;width:"+a.nzWidth+'px;"></div>').appendTo(a.$elem);
a.$elem.after(a.zoomContainer);a.options.containLensZoom&&"lens"==a.options.zoomType&&a.zoomContainer.css("overflow","hidden");"inner"!=a.options.zoomType&&(a.zoomLens=b("<div class='zoomLens' style='"+a.lensStyle+a.lensRound+"'>&nbsp;</div>").appendTo(a.zoomContainer).click(function(){a.$elem.trigger("click")}));a.options.tint&&(a.tintContainer=b("<div/>").addClass("tintContainer"),a.zoomTint=b("<div class='zoomTint' style='"+a.tintStyle+"'></div>"),a.zoomLens.wrap(a.tintContainer),a.zoomTintcss=
a.zoomLens.after(a.zoomTint),a.zoomTintImage=b('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: '+a.nzWidth+"px; height: "+a.nzHeight+'px;" src="'+a.imageSrc+'">').appendTo(a.zoomLens).click(function(){a.$elem.trigger("click")}));a.zoomWindow=isNaN(a.options.zoomWindowPosition)?b("<div style='z-index:999;left:"+a.windowOffsetLeft+"px;top:"+a.windowOffsetTop+"px;"+a.zoomWindowStyle+"' class='zoomWindow'>&nbsp;</div>").appendTo("body").click(function(){a.$elem.trigger("click")}):
b("<div style='z-index:999;left:"+a.windowOffsetLeft+"px;top:"+a.windowOffsetTop+"px;"+a.zoomWindowStyle+"' class='zoomWindow'>&nbsp;</div>").appendTo(a.zoomContainer).click(function(){a.$elem.trigger("click")});a.zoomWindowContainer=b("<div/>").addClass("zoomWindowContainer").css("width",a.options.zoomWindowWidth);a.zoomWindow.wrap(a.zoomWindowContainer);"lens"==a.options.zoomType&&a.zoomLens.css({backgroundImage:"url('"+a.imageSrc+"')"});"window"==a.options.zoomType&&a.zoomWindow.css({backgroundImage:"url('"+
a.imageSrc+"')"});"inner"==a.options.zoomType&&a.zoomWindow.css({backgroundImage:"url('"+a.imageSrc+"')"});a.$elem.bind("mousemove",function(d){a.setPosition(d)});a.zoomContainer.bind("mousemove",function(d){a.setPosition(d)});"inner"!=a.options.zoomType&&a.zoomLens.bind("mousemove",function(d){a.setPosition(d)});a.options.tint&&a.zoomTint.bind("mousemove",function(d){a.setPosition(d)});"inner"==a.options.zoomType&&a.zoomWindow.bind("mousemove",function(d){a.setPosition(d)});a.zoomContainer.mouseenter(function(){"inner"==
a.options.zoomType&&(a.options.zoomWindowFadeIn?a.zoomWindow.stop(!0,!0).fadeIn(a.options.zoomWindowFadeIn):a.zoomWindow.show());"window"==a.options.zoomType&&(a.options.zoomWindowFadeIn?a.zoomWindow.stop(!0,!0).fadeIn(a.options.zoomWindowFadeIn):a.zoomWindow.show());a.options.showLens&&(a.options.lensFadeIn?a.zoomLens.stop(!0,!0).fadeIn(a.options.lensFadeIn):a.zoomLens.show());a.options.tint&&(a.options.zoomTintFadeIn?a.zoomTint.stop(!0,!0).fadeIn(a.options.zoomTintFadeIn):a.zoomTint.show())}).mouseleave(function(){a.zoomWindow.hide();
a.options.showLens&&a.zoomLens.hide();a.options.tint&&a.zoomTint.hide()});a.$elem.mouseenter(function(){"inner"==a.options.zoomType&&(a.options.zoomWindowFadeIn?a.zoomWindow.stop(!0,!0).fadeIn(a.options.zoomWindowFadeIn):a.zoomWindow.show());"window"==a.options.zoomType&&(a.options.zoomWindowFadeIn?a.zoomWindow.stop(!0,!0).fadeIn(a.options.zoomWindowFadeIn):a.zoomWindow.show());a.options.showLens&&(a.options.lensFadeIn?a.zoomLens.stop(!0,!0).fadeIn(a.options.lensFadeIn):a.zoomLens.show());a.options.tint&&
(a.options.zoomTintFadeIn?a.zoomTint.stop(!0,!0).fadeIn(a.options.zoomTintFadeIn):a.zoomTint.show())}).mouseleave(function(){a.zoomWindow.hide();a.options.showLens&&a.zoomLens.hide();a.options.tint&&a.zoomTint.hide()});"inner"!=a.options.zoomType&&a.zoomLens.mouseenter(function(){"inner"==a.options.zoomType&&(a.options.zoomWindowFadeIn?a.zoomWindow.stop(!0,!0).fadeIn(a.options.zoomWindowFadeIn):a.zoomWindow.show());"window"==a.options.zoomType&&a.zoomWindow.show();a.options.showLens&&a.zoomLens.show();
a.options.tint&&a.zoomTint.show()}).mouseleave(function(){a.options.zoomWindowFadeOut?a.zoomWindow.stop(!0,!0).fadeOut(a.options.zoomWindowFadeOut):a.zoomWindow.hide();"inner"!=a.options.zoomType&&a.zoomLens.hide();a.options.tint&&a.zoomTint.hide()});a.options.tint&&a.zoomTint.mouseenter(function(){"inner"==a.options.zoomType&&a.zoomWindow.show();"window"==a.options.zoomType&&a.zoomWindow.show();a.options.showLens&&a.zoomLens.show();a.zoomTint.show()}).mouseleave(function(){a.zoomWindow.hide();"inner"!=
a.options.zoomType&&a.zoomLens.hide();a.zoomTint.hide()});"inner"==a.options.zoomType&&a.zoomWindow.mouseenter(function(){"inner"==a.options.zoomType&&a.zoomWindow.show();"window"==a.options.zoomType&&a.zoomWindow.show();a.options.showLens&&a.zoomLens.show()}).mouseleave(function(){a.options.zoomWindowFadeOut?a.zoomWindow.stop(!0,!0).fadeOut(a.options.zoomWindowFadeOut):a.zoomWindow.hide();"inner"!=a.options.zoomType&&a.zoomLens.hide()})},setPosition:function(a){this.nzHeight=this.$elem.height();
this.nzWidth=this.$elem.width();this.nzOffset=this.$elem.offset();this.options.tint&&(this.zoomTint.css({top:0}),this.zoomTint.css({left:0}));this.zoomContainer.css({top:this.nzOffset.top});this.zoomContainer.css({left:this.nzOffset.left});this.mouseLeft=parseInt(a.pageX-this.nzOffset.left);this.mouseTop=parseInt(a.pageY-this.nzOffset.top);"window"==this.options.zoomType&&(this.Etoppos=this.mouseTop<this.zoomLens.height()/2,this.Eboppos=this.mouseTop>this.nzHeight-this.zoomLens.height()/2-2*this.options.lensBorder,
this.Eloppos=this.mouseLeft<0+this.zoomLens.width()/2,this.Eroppos=this.mouseLeft>this.nzWidth-this.zoomLens.width()/2-2*this.options.lensBorder);"inner"==this.options.zoomType&&(this.Etoppos=this.mouseTop<this.nzHeight/2/this.heightRatio,this.Eboppos=this.mouseTop>this.nzHeight-this.nzHeight/2/this.heightRatio,this.Eloppos=this.mouseLeft<0+this.nzWidth/2/this.widthRatio,this.Eroppos=this.mouseLeft>this.nzWidth-this.nzWidth/2/this.widthRatio-2*this.options.lensBorder);0>this.mouseLeft||0>=this.mouseTop||
this.mouseLeft>this.nzWidth||this.mouseTop>this.nzHeight?(this.zoomWindow.hide(),this.options.showLens&&this.zoomLens.hide(),this.options.tint&&this.zoomTint.hide()):("window"==this.options.zoomType&&this.zoomWindow.show(),this.options.tint&&this.zoomTint.show(),this.options.showLens&&(this.zoomLens.show(),this.lensLeftPos=String(this.mouseLeft-this.zoomLens.width()/2),this.lensTopPos=String(this.mouseTop-this.zoomLens.height()/2)),this.Etoppos&&(this.lensTopPos=0),this.Eloppos&&(this.tintpos=this.lensLeftPos=
this.windowLeftPos=0),"window"==this.options.zoomType&&(this.Eboppos&&(this.lensTopPos=Math.max(this.nzHeight-this.zoomLens.height()-2*this.options.lensBorder,0)),this.Eroppos&&(this.lensLeftPos=this.nzWidth-this.zoomLens.width()-2*this.options.lensBorder)),"inner"==this.options.zoomType&&(this.Eboppos&&(this.lensTopPos=Math.max(this.nzHeight-2*this.options.lensBorder,0)),this.Eroppos&&(this.lensLeftPos=this.nzWidth-this.nzWidth-2*this.options.lensBorder)),"lens"==this.options.zoomType&&(this.windowLeftPos=
String(-1*((a.pageX-this.nzOffset.left)*this.widthRatio-this.zoomLens.width()/2)),this.windowTopPos=String(-1*((a.pageY-this.nzOffset.top)*this.heightRatio-this.zoomLens.height()/2)),this.zoomLens.css({backgroundPosition:this.windowLeftPos+"px "+this.windowTopPos+"px"}),this.setWindowPostition(a)),this.options.tint&&this.setTintPosition(a),"window"==this.options.zoomType&&this.setWindowPostition(a),"inner"==this.options.zoomType&&this.setWindowPostition(a),this.options.showLens&&this.zoomLens.css({left:this.lensLeftPos+
"px",top:this.lensTopPos+"px"}))},setLensPostition:function(){},setWindowPostition:function(a){if(isNaN(this.options.zoomWindowPosition))this.externalContainer=b("#"+this.options.zoomWindowPosition),this.externalContainerWidth=this.externalContainer.width(),this.externalContainerHeight=this.externalContainer.height(),this.externalContainerOffset=this.externalContainer.offset(),this.windowOffsetTop=this.externalContainerOffset.top,this.windowOffsetLeft=this.externalContainerOffset.left;else switch(this.options.zoomWindowPosition){case 1:this.windowOffsetTop=
this.options.zoomWindowOffety;this.windowOffsetLeft=+this.nzWidth;break;case 2:this.options.zoomWindowHeight>this.nzHeight&&(this.windowOffsetTop=-1*(this.options.zoomWindowHeight/2-this.nzHeight/2),this.windowOffsetLeft=this.nzWidth);break;case 3:this.windowOffsetTop=this.nzHeight-this.zoomWindow.height()-2*this.options.borderSize;this.windowOffsetLeft=this.nzWidth;break;case 4:this.windowOffsetTop=this.nzHeight;this.windowOffsetLeft=this.nzWidth;break;case 5:this.windowOffsetTop=this.nzHeight;this.windowOffsetLeft=
this.nzWidth-this.zoomWindow.width()-2*this.options.borderSize;break;case 6:this.options.zoomWindowHeight>this.nzHeight&&(this.windowOffsetTop=this.nzHeight,this.windowOffsetLeft=-1*(this.options.zoomWindowWidth/2-this.nzWidth/2+2*this.options.borderSize));break;case 7:this.windowOffsetTop=this.nzHeight;this.windowOffsetLeft=0;break;case 8:this.windowOffsetTop=this.nzHeight;this.windowOffsetLeft=-1*(this.zoomWindow.width()+2*this.options.borderSize);break;case 9:this.windowOffsetTop=this.nzHeight-
this.zoomWindow.height()-2*this.options.borderSize;this.windowOffsetLeft=-1*(this.zoomWindow.width()+2*this.options.borderSize);break;case 10:this.options.zoomWindowHeight>this.nzHeight&&(this.windowOffsetTop=-1*(this.options.zoomWindowHeight/2-this.nzHeight/2),this.windowOffsetLeft=-1*(this.zoomWindow.width()+2*this.options.borderSize));break;case 11:this.windowOffsetTop=this.options.zoomWindowOffety;this.windowOffsetLeft=-1*(this.zoomWindow.width()+2*this.options.borderSize);break;case 12:this.windowOffsetTop=
-1*(this.zoomWindow.height()+2*this.options.borderSize);this.windowOffsetLeft=-1*(this.zoomWindow.width()+2*this.options.borderSize);break;case 13:this.windowOffsetTop=-1*(this.zoomWindow.height()+2*this.options.borderSize);this.windowOffsetLeft=0;break;case 14:this.options.zoomWindowHeight>this.nzHeight&&(this.windowOffsetTop=-1*(this.zoomWindow.height()+2*this.options.borderSize),this.windowOffsetLeft=-1*(this.options.zoomWindowWidth/2-this.nzWidth/2+2*this.options.borderSize));break;case 15:this.windowOffsetTop=
-1*(this.zoomWindow.height()+2*this.options.borderSize);this.windowOffsetLeft=this.nzWidth-this.zoomWindow.width()-2*this.options.borderSize;break;case 16:this.windowOffsetTop=-1*(this.zoomWindow.height()+2*this.options.borderSize);this.windowOffsetLeft=this.nzWidth;break;default:this.windowOffsetTop=this.options.zoomWindowOffety,this.windowOffsetLeft=this.nzWidth}this.windowOffsetTop+=this.options.zoomWindowOffety;this.windowOffsetLeft+=this.options.zoomWindowOffetx;this.zoomWindow.css({top:this.windowOffsetTop});
this.zoomWindow.css({left:this.windowOffsetLeft});"inner"==this.options.zoomType&&(this.zoomWindow.css({top:0}),this.zoomWindow.css({left:0}));this.windowLeftPos=String(-1*((a.pageX-this.nzOffset.left)*this.widthRatio-this.zoomWindow.width()/2));this.windowTopPos=String(-1*((a.pageY-this.nzOffset.top)*this.heightRatio-this.zoomWindow.height()/2));this.Etoppos&&(this.windowTopPos=0);this.Eloppos&&(this.windowLeftPos=0);this.Eboppos&&(this.windowTopPos=-1*(this.largeHeight-this.zoomWindow.height()));
this.Eroppos&&(this.windowLeftPos=-1*(this.largeWidth-this.zoomWindow.width()));"window"==this.options.zoomType&&(1>=this.widthRatio&&(this.windowLeftPos=0),1>=this.heightRatio&&(this.windowTopPos=0),this.largeHeight<this.options.zoomWindowHeight&&(this.windowTopPos=0),this.largeWidth<this.options.zoomWindowWidth&&(this.windowLeftPos=0),this.options.easing?(b.easing.zoomsmoothmove=function(a,c,b,e,f){return c==f?b+e:e*(-Math.pow(2,-10*c/f)+1)+b},this.zoomWindow.animate({"background-position-x":this.windowLeftPos,
"background-position-y":this.windowTopPos},{queue:!1,duration:this.options.easingDuration,easing:"zoomsmoothmove"})):this.zoomWindow.css({backgroundPosition:this.windowLeftPos+"px "+this.windowTopPos+"px"}));"inner"==this.options.zoomType&&this.zoomWindow.css({backgroundPosition:this.windowLeftPos+"px "+this.windowTopPos+"px"})},setTintPosition:function(a){this.nzOffset=this.$elem.offset();this.tintpos=String(-1*(a.pageX-this.nzOffset.left-this.zoomLens.width()/2));this.tintposy=String(-1*(a.pageY-
this.nzOffset.top-this.zoomLens.height()/2));this.Etoppos&&(this.tintposy=0);this.Eloppos&&(this.tintpos=0);this.Eboppos&&(this.tintposy=-1*(this.nzHeight-this.zoomLens.height()-2*this.options.lensBorder));this.Eroppos&&(this.tintpos=-1*(this.nzWidth-this.zoomLens.width()-2*this.options.lensBorder));this.options.tint&&(this.zoomTint.css({opacity:this.options.tintOpacity}).animate().fadeIn("slow"),this.zoomTintImage.css({left:this.tintpos-this.options.lensBorder+"px"}),this.zoomTintImage.css({top:this.tintposy-
this.options.lensBorder+"px"}))},swaptheimage:function(a,d){var c=this,b=new Image;b.onload=function(){c.largeWidth=b.width;c.largeHeight=b.height;c.zoomImage=d;c.swapAction(a,d)};b.src=d},swapAction:function(a,b){var c=this,e=new Image;e.onload=function(){c.nzHeight=e.height;c.nzWidth=e.width;c.doneCallback()};e.src=a;c.zoomWindow.css({backgroundImage:"url('"+b+"')"});c.currentImage=b;c.$elem.attr("src",a)},doneCallback:function(){this.options.tint&&(this.zoomTintImage.attr("src",largeimage),this.zoomTintImage.attr("height",
this.$elem.height()),this.zoomTintImage.css({height:this.$elem.height()}),this.zoomTint.css({height:this.$elem.height()}));this.nzOffset=this.$elem.offset();this.nzWidth=this.$elem.width();this.nzHeight=this.$elem.height();this.widthRatio=this.largeWidth/this.nzWidth;this.heightRatio=this.largeHeight/this.nzHeight;lensHeight=this.nzHeight<this.options.zoomWindowWidth/this.widthRatio?this.nzHeight:String(this.options.zoomWindowHeight/this.heightRatio);lensWidth=this.largeWidth<this.options.zoomWindowWidth?
this.nzHWidth:this.options.zoomWindowWidth/this.widthRatio;this.zoomLens.css("width",lensWidth);this.zoomLens.css("height",lensHeight)},getCurrentImage:function(){return this.zoomImage},getGalleryList:function(){var a=this;a.gallerylist=[];a.options.gallery?b("#"+a.options.gallery+" a").each(function(){var d="";b(this).data("zoom-image")?d=b(this).data("zoom-image"):b(this).data("image")&&(d=b(this).data("image"));d==a.zoomImage?a.gallerylist.unshift({href:""+d+"",title:b(this).find("img").attr("title")}):
a.gallerylist.push({href:""+d+"",title:b(this).find("img").attr("title")})}):a.gallerylist.push({href:""+a.zoomImage+"",title:b(this).find("img").attr("title")});return a.gallerylist}};b.fn.elevateZoom=function(a){return this.each(function(){var d=Object.create(e);d.init(a,this);b.data(this,"elevateZoom",d)})};b.fn.elevateZoom.options={easing:!1,easingType:"zoomdefault",easingDuration:2E3,lensSize:200,zoomWindowWidth:400,zoomWindowHeight:400,zoomWindowOffetx:0,zoomWindowOffety:0,zoomWindowPosition:1,
lensFadeIn:!1,lensFadeOut:!1,debug:!1,zoomWindowFadeIn:!1,zoomWindowFadeOut:!1,zoomWindowAlwaysShow:!1,zoomTintFadeIn:!1,zoomTintFadeOut:!1,borderSize:4,showLens:!0,borderColour:"#888",lensBorder:1,lensShape:"square",zoomType:"window",containLensZoom:!1,lensColour:"white",lensOpacity:0.4,lenszoom:!1,tint:!1,tintColour:"#333",tintOpacity:0.4,gallery:!1,cursor:"default",onComplete:b.noop}})(jQuery,window,document);


$('.zoom-in').elevateZoom({
  zoomType: "inner",
  cursor: "crosshair",
  zoomWindowFadeIn: 500,
  zoomWindowFadeOut: 750
}); 


/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* nanogallery2 - v3.0.2 - 2020-07-21 */
/*!
 * @preserve nanogallery2 - javascript photo / video gallery and lightbox
 * Homepage: http://nanogallery2.nanostudio.org
 * Sources:  https://github.com/nanostudio-org/nanogallery2
 *
 * License:  GPLv3 and commercial licence
 * 
 * Requirements:
 *  - jQuery (http://www.jquery.com) - version >= 1.7.1
 *
 * Embeded components:
 *  - shifty (https://github.com/jeremyckahn/shifty)
 *  - imagesloaded (https://github.com/desandro/imagesloaded)
 *  - hammer.js (http://hammerjs.github.io/)
 *  - screenfull.js (https://github.com/sindresorhus/screenfull.js)
 * Tools:
 *  - webfont generated with http://fontello.com - mainly based on Font Awesome Copyright (C) 2012 by Dave Gandy (http://fontawesome.io/)
 *  - ICO online converter: https://iconverticons.com/online/
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports&&"function"==typeof require?e(require("jquery")):e(jQuery)}((function(e){"use strict";function t(e){var t=document.getElementById("ngyColorHelperToRGB");return null===t&&((t=document.createElement("div")).id="ngyColorHelperToRGB",t.style.cssText="display: none; color:"+e+";",document.body.appendChild(t)),getComputedStyle(t).color}function n(e,t,n){var i="";if("RGBA("==t.toUpperCase().substring(0,5)&&(i="a",t="rgb("+t.substring(5)),"number"!=typeof e||e<-1||e>1||"string"!=typeof t||"r"!=t[0]&&"#"!=t[0]||"string"!=typeof n&&void 0!==n)return null;function a(e){var t=e.length,n=new Object;if(t>9){if((e=e.split(",")).length<3||e.length>4)return null;n[0]=o(e[0].slice(4)),n[1]=o(e[1]),n[2]=o(e[2]),n[3]=e[3]?parseFloat(e[3]):-1}else{if(8==t||6==t||t<4)return null;t<6&&(e="#"+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+(t>4?e[4]+""+e[4]:"")),e=o(e.slice(1),16),n[0]=e>>16&255,n[1]=e>>8&255,n[2]=255&e,n[3]=9==t||5==t?r((e>>24&255)/255*1e4)/1e4:-1}return n}var o=parseInt,r=Math.round,l=t.length>9,s=(l="string"==typeof n?n.length>9||"c"==n&&!l:l,e<0),u=(e=s?-1*e:e,n=n&&"c"!=n?n:s?"#000000":"#FFFFFF",a(t)),c=a(n);return u&&c?l?"rgb"+i+"("+r((c[0]-u[0])*e+u[0])+","+r((c[1]-u[1])*e+u[1])+","+r((c[2]-u[2])*e+u[2])+(u[3]<0&&c[3]<0?")":","+(u[3]>-1&&c[3]>-1?r(1e4*((c[3]-u[3])*e+u[3]))/1e4:c[3]<0?u[3]:c[3])+")"):"#"+(4294967296+16777216*(u[3]>-1&&c[3]>-1?r(255*((c[3]-u[3])*e+u[3])):c[3]>-1?r(255*c[3]):u[3]>-1?r(255*u[3]):255)+65536*r((c[0]-u[0])*e+u[0])+256*r((c[1]-u[1])*e+u[1])+r((c[2]-u[2])*e+u[2])).toString(16).slice(u[3]>-1||c[3]>-1?1:3):null}function i(e){if(null===e||"object"!=typeof e)return e;var t=e.constructor();for(var n in e)t[n]=i(e[n]);return t}function a(){var e=jQuery(window);return{l:e.scrollLeft(),t:e.scrollTop(),w:e.width(),h:e.height()}}function o(e,t){var n=0;""==e&&(e="*"),jQuery(e).each((function(){var e=parseInt(jQuery(this).css("z-index"));n=e>n?e:n})),n++,jQuery(t).css("z-index",n)}var r=function(e){return{}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()};function l(){this.LightboxReOpen=function(){m()},this.ReloadAlbum=function(){if(""===u.O.kind)throw"Not supported for this content source:"+u.O.kind;var e=u.GOM.albumIdx;if(-1==e)throw"Current album not found.";for(var t=u.I[e].GetID(),n=u.I.length,i=0;i<n;i++){var a=u.I[i];a.albumID==t&&(a.selected=!1)}u.I[e].contentIsLoaded=!1,g("-1",t)},this.ItemsSetSelectedValue=function(e,t){for(var n=e.length,i=0;i<n;i++)pe(e[i],t)},this.ItemsSelectedGet=function(){for(var e=[],t=u.I.length,n=0;n<t;n++)1==u.I[n].selected&&e.push(u.I[n]);return e},this.Get=function(e){return u.O[e]},this.Set=function(e,t){switch(u.O[e]=t,e){case"thumbnailSelectable":de(),w(u.GOM.albumIdx)}},this.Refresh=function(){w(u.GOM.albumIdx)},this.Resize=function(){x()},this.DisplayItem=function(e){var t=p(e);"0"!=t.imageID?Q(t.imageID,t.albumID):g("-1",t.albumID)},this.ThumbnailToolbarOneCartUpdate=function(e){R(e)};var l=function(e){if(null==u.I[e])return 0;for(var t=u.I[e].GetID(),n=u.I.length,i=0,a=0;a<n;a++){u.I[a].isToDisplay(t)&&i++}return i};this.Search=function(e){u.GOM.albumSearch=e.toUpperCase();var t=u.GOM.albumIdx;return w(u.GOM.albumIdx),l(t)},this.Search2=function(e,t){return u.GOM.albumSearch=null!=e&&null!=e?e.toUpperCase().trim():"",u.GOM.albumSearchTags=null!=t&&null!=t?t.toUpperCase().trim():"",l(u.GOM.albumIdx)},this.Search2Execute=function(){var e=u.GOM.albumIdx;return w(u.GOM.albumIdx),l(e)},this.Destroy=function(){null!=u.GOM.hammertime&&(u.GOM.hammertime.destroy(),u.GOM.hammertime=null),null!=u.VOM.hammertime&&(u.VOM.hammertime.destroy(),u.VOM.hammertime=null),e("#ngycs_"+u.baseEltID).remove(),u.GOM.items=[],NGY2Item.New(u,u.i18nTranslations.breadcrumbHome,"","0","-1","album"),u.GOM.navigationBar.$newContent=null,u.$E.base.empty(),u.$E.base.removeData(),u.O.locationHash&&jQuery(window).off("hashchange.nanogallery2."+u.baseEltID),jQuery(window).off("resize.nanogallery2."+u.baseEltID),jQuery(window).off("orientationChange.nanogallery2."+u.baseEltID),jQuery(window).off("scroll.nanogallery2."+u.baseEltID),null!==u.$E.scrollableParent&&u.$E.scrollableParent.off("scroll.nanogallery2."+u.baseEltID),u.GOM.firstDisplay=!0},this.CloseViewer=function(){return tt(null),!1},this.MinimizeToolbar=function(){return We(),!1},this.MaximizeToolbar=function(){return Ue(),!1},this.PaginationPreviousPage=function(){return G(),!1},this.PaginationNextPage=function(){return y(),!1},this.PaginationGotoPage=function(e){return e>1&&e--,u.GOM.pagination.currentPage=e,u.GOM.ScrollToTop(),L(),E(!0),!1},this.PaginationCountPages=function(){return 0==u.GOM.items.length?0:Math.ceil((u.GOM.items[u.GOM.items.length-1].row+1)/u.galleryMaxRows.Get())};var s=function(e,t,n){var i;return function(){var a=this,o=arguments;function r(){n||e.apply(a,o),i=null}i?clearTimeout(i):n&&e.apply(a,o),i=setTimeout(r,t||100)}};window.ng_draf=function(e){return requestAnimationFrame((function(){window.requestAnimationFrame(e)}))},window.requestTimeout=function(e,t){if(!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame&&window.mozCancelRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame))return window.setTimeout(e,t);var n=(new Date).getTime(),i=new Object;return i.value=requestAnimFrame((function a(){(new Date).getTime()-n>=t?e.call():i.value=requestAnimFrame(a)})),i},window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,t){window.setTimeout(e,1e3/60)},window.clearRequestTimeout=function(e){window.cancelAnimationFrame?window.cancelAnimationFrame(e.value):window.webkitCancelAnimationFrame?window.webkitCancelAnimationFrame(e.value):window.webkitCancelRequestAnimationFrame?window.webkitCancelRequestAnimationFrame(e.value):window.mozCancelRequestAnimationFrame?window.mozCancelRequestAnimationFrame(e.value):window.oCancelRequestAnimationFrame?window.oCancelRequestAnimationFrame(e.value):window.msCancelRequestAnimationFrame?window.msCancelRequestAnimationFrame(e.value):clearTimeout(e)};var u=this;function c(e){this.$e=null,this.ngy2ItemIdx=e,this.mediaNumber=u.VOM.items.length+1,this.posX=0,this.posY=0}u.I=[],u.Id=[],u.O=null,u.baseEltID=null,u.$E={base:null,conTnParent:null,conLoadingB:null,conConsole:null,conNavigationBar:null,conTnBottom:null,scrollableParent:null},u.shoppingCart=[],u.layout={internal:!0,engine:"",support:{rows:!1},prerequisite:{imageSize:!1},SetEngine:function(){if(u.layout.internal){if("auto"==u.tn.settings.width[u.GOM.curNavLevel][u.GOM.curWidth]||""==u.tn.settings.width[u.GOM.curNavLevel][u.GOM.curWidth])return u.layout.engine="JUSTIFIED",u.layout.support.rows=!0,void(u.layout.prerequisite.imageSize=!0);if("auto"==u.tn.settings.height[u.GOM.curNavLevel][u.GOM.curWidth]||""==u.tn.settings.height[u.GOM.curNavLevel][u.GOM.curWidth])return u.layout.engine="CASCADING",u.layout.support.rows=!1,void(u.layout.prerequisite.imageSize=!0);if(null!=u.tn.settings.getMosaic())return u.layout.engine="MOSAIC",u.layout.support.rows=!0,void(u.layout.prerequisite.imageSize=!1);u.layout.engine="GRID",u.layout.support.rows=!0,u.layout.prerequisite.imageSize=!1}}},u.galleryResizeEventEnabled=!1,u.galleryMaxRows={l1:0,lN:0,Get:function(){return u.galleryMaxRows[u.GOM.curNavLevel]}},u.galleryMaxItems={l1:0,lN:0,Get:function(){return u.galleryMaxItems[u.GOM.curNavLevel]}},u.galleryFilterTags={l1:0,lN:0,Get:function(){return u.galleryFilterTags[u.GOM.curNavLevel]}},u.galleryFilterTagsMode={l1:0,lN:0,Get:function(){return u.galleryFilterTagsMode[u.GOM.curNavLevel]}},u.galleryDisplayMode={l1:"FULLCONTENT",lN:"FULLCONTENT",Get:function(){return u.galleryDisplayMode[u.GOM.curNavLevel]}},u.galleryLastRowFull={l1:!1,lN:!1,Get:function(){return u.galleryLastRowFull[u.GOM.curNavLevel]}},u.gallerySorting={l1:"",lN:"",Get:function(){return u.gallerySorting[u.GOM.curNavLevel]}},u.galleryDisplayTransition={l1:"none",lN:"none",Get:function(){return u.galleryDisplayTransition[u.GOM.curNavLevel]}},u.galleryDisplayTransitionDuration={l1:500,lN:500,Get:function(){return u.galleryDisplayTransitionDuration[u.GOM.curNavLevel]}},u.$currentTouchedThumbnail=null,u.tn={opt:{l1:{crop:!0,stacks:0,stacksTranslateX:0,stacksTranslateY:0,stacksTranslateZ:0,stacksRotateX:0,stacksRotateY:0,stacksRotateZ:0,stacksScale:0,borderHorizontal:0,borderVertical:0,baseGridHeight:0,displayTransition:"FADEIN",displayTransitionStartVal:0,displayTransitionEasing:"easeOutQuart",displayTransitionDuration:240,displayInterval:15},lN:{crop:!0,stacks:0,stacksTranslateX:0,stacksTranslateY:0,stacksTranslateZ:0,stacksRotateX:0,stacksRotateY:0,stacksRotateZ:0,stacksScale:0,borderHorizontal:0,borderVertical:0,baseGridHeight:0,displayTransition:"FADEIN",displayTransitionStartVal:0,displayTransitionEasing:"easeOutQuart",displayTransitionDuration:240,displayInterval:15},Get:function(e){return u.tn.opt[u.GOM.curNavLevel][e]}},scale:1,labelHeight:{l1:0,lN:0,get:function(){return u.tn.labelHeight[u.GOM.curNavLevel]}},defaultSize:{width:{l1:{xs:0,sm:0,me:0,la:0,xl:0},lN:{xs:0,sm:0,me:0,la:0,xl:0}},height:{l1:{xs:0,sm:0,me:0,la:0,xl:0},lN:{xs:0,sm:0,me:0,la:0,xl:0}},getWidth:function(){return u.tn.defaultSize.width[u.GOM.curNavLevel][u.GOM.curWidth]},getOuterWidth:function(){u.tn.borderWidth=u.tn.opt.Get("borderHorizontal"),u.tn.borderHeight=u.tn.opt.Get("borderVertical");var e=u.tn.defaultSize.width[u.GOM.curNavLevel][u.GOM.curWidth]+2*u.tn.opt.Get("borderHorizontal");return"right"!=u.O.thumbnailLabel.get("position")&&"left"!=u.O.thumbnailLabel.get("position")||(e+=u.tn.defaultSize.width[u.GOM.curNavLevel][u.GOM.curWidth]),e},getHeight:function(){return u.tn.defaultSize.height[u.GOM.curNavLevel][u.GOM.curWidth]},getOuterHeight:function(){return u.tn.defaultSize.height[u.GOM.curNavLevel][u.GOM.curWidth]+2*u.tn.opt.Get("borderVertical")}},settings:{width:{l1:{xs:0,sm:0,me:0,la:0,xl:0,xsc:"u",smc:"u",mec:"u",lac:"u",xlc:"u"},lN:{xs:0,sm:0,me:0,la:0,xl:0,xsc:"u",smc:"u",mec:"u",lac:"u",xlc:"u"}},height:{l1:{xs:0,sm:0,me:0,la:0,xl:0,xsc:"u",smc:"u",mec:"u",lac:"u",xlc:"u"},lN:{xs:0,sm:0,me:0,la:0,xl:0,xsc:"u",smc:"u",mec:"u",lac:"u",xlc:"u"}},getH:function(e,t){var n=null==e?u.GOM.curNavLevel:e,i=null==t?u.GOM.curWidth:t;return"MOSAIC"==u.layout.engine?this.height[n][i]*this.mosaic[n+"Factor"].h[i]:this.height[n][i]},getW:function(e,t){var n=null==e?u.GOM.curNavLevel:e,i=null==t?u.GOM.curWidth:t;return"MOSAIC"==u.layout.engine?this.width[n][i]*this.mosaic[n+"Factor"].w[i]:this.width[n][i]},mosaic:{l1:{xs:null,sm:null,me:null,la:null,xl:null},lN:{xs:null,sm:null,me:null,la:null,xl:null},l1Factor:{h:{xs:1,sm:1,me:1,la:1,xl:1},w:{xs:1,sm:1,me:1,la:1,xl:1}},lNFactor:{h:{xs:1,sm:1,me:1,la:1,xl:1},w:{xs:1,sm:1,me:1,la:1,xl:1}}},getMosaic:function(){return this.mosaic[u.GOM.curNavLevel][u.GOM.curWidth]},mosaicCalcFactor:function(e,t){for(var n=1,i=1,a=0;a<u.tn.settings.mosaic[e][t].length;a++)n=Math.max(n,this.mosaic[e][t][a].w),i=Math.max(i,this.mosaic[e][t][a].h);this.mosaic[e+"Factor"].h[t]=i,this.mosaic[e+"Factor"].w[t]=n},gutterHeight:{l1:{xs:0,sm:0,me:0,la:0,xl:0},lN:{xs:0,sm:0,me:0,la:0,xl:0}},gutterWidth:{l1:{xs:0,sm:0,me:0,la:0,xl:0},lN:{xs:0,sm:0,me:0,la:0,xl:0}},GetResponsive:function(e){return this[e][u.GOM.curNavLevel][u.GOM.curWidth]}},hoverEffects:{std:[],level1:[],get:function(){return"l1"==u.GOM.curNavLevel&&0!==this.level1.length?this.level1:this.std}},buildInit:{std:[],level1:[],get:function(){return"l1"==u.GOM.curNavLevel&&0!==this.level1.length?this.level1:this.std}},toolbar:{album:{topLeft:"",topRight:"",bottomLeft:"",bottomRight:""},image:{topLeft:"",topRight:"",bottomLeft:"",bottomRight:""},albumUp:{topLeft:"",topRight:"",bottomLeft:"",bottomRight:""},get:function(e){return this[e.kind]}},style:{l1:{label:"",title:"",desc:""},lN:{label:"",title:"",desc:""},getTitle:function(){return'style="'+this[u.GOM.curNavLevel].title+'"'},getDesc:function(){return'style="'+this[u.GOM.curNavLevel].desc+'"'},getLabel:function(){var e='style="'+this[u.GOM.curNavLevel].label;return e+=u.O.RTL?'"direction:RTL;"':"",e+='"'}}},u.scrollTimeOut=0,u.i18nTranslations={paginationPrevious:"Previous",paginationNext:"Next",breadcrumbHome:"List of Albums",thumbnailImageTitle:"",thumbnailAlbumTitle:"",thumbnailImageDescription:"",thumbnailAlbumDescription:""},u.emptyGif="data:image/gif;base64,R0lGODlhEAAQAIAAAP///////yH5BAEKAAEALAAAAAAQABAAAAIOjI+py+0Po5y02ouzPgUAOw==",u.CSStransformName=dt(["transform","msTransform","MozTransform","WebkitTransform","OTransform"]),u.CSStransformStyle=dt(["transformStyle","msTransformStyle","MozTransformStyle","WebkitTransformStyle","OTransformStyle"]),u.CSSperspective=dt(["perspective","msPerspective","MozPerspective","WebkitPerspective","OPerspective"]),u.CSSbackfaceVisibilityName=dt(["backfaceVisibility","msBackfaceVisibility","MozBackfaceVisibility","WebkitBackfaceVisibility","OBackfaceVisibility"]),u.CSStransitionName=dt(["transition","msTransition","MozTransition","WebkitTransition","OTransition"]),u.CSSanimationName=dt(["animation","msAnimation","MozAnimation","WebkitAnimation","OAnimation"]),u.GalleryResizeThrottled=function(e,t,n){var i,a,o,r=null,l=0;n||(n={});var s=function(){l=!1===n.leading?0:(new Date).getTime(),r=null,o=e.apply(i,a),r||(i=a=null)};return function(){var u=(new Date).getTime();l||!1!==n.leading||(l=u);var c=t-(u-l);return i=this,a=arguments,c<=0||c>t?(r&&(clearTimeout(r),r=null),l=u,o=e.apply(i,a),r||(i=a=null)):r||!1===n.trailing||(r=setTimeout(s,c)),o}}(x,15,{leading:!1}),u.blockList=null,u.allowList=null,u.albumList=[],u.locationHashLastUsed="",u.custGlobals={},u.touchAutoOpenDelayTimerID=0,u.i18nLang="",u.timeLastTouchStart=0,u.custGlobals={},u.markupOrApiProcessed=!1,u.GOM={albumIdx:-1,clipArea:{top:0,height:0},displayArea:{width:0,height:0},displayAreaLast:{width:0,height:0},displayedMoreSteps:0,items:[],$imgPreloader:[],thumbnails2Display:[],itemsDisplayed:0,firstDisplay:!0,firstDisplayTime:0,navigationBar:{displayed:!1,$newContent:""},cache:{viewport:null,containerOffset:null,areaWidth:100},nbSelected:0,pagination:{currentPage:0},panThreshold:60,panYOnly:!1,lastFullRow:-1,lastDisplayedIdx:-1,displayInterval:{from:0,len:0},hammertime:null,curNavLevel:"l1",curWidth:"me",albumSearch:"",albumSearchTags:"",lastZIndex:0,lastRandomValue:0,slider:{hostIdx:-1,hostItem:null,currentIdx:0,nextIdx:0,timerID:0,tween:null},NGY2Item:function(e){if(null==u.GOM.items[e]||null==u.GOM.items[e])return null;var t=u.GOM.items[e].thumbnailIdx;return u.I[t]},GTn:function(e,t,n){this.thumbnailIdx=e,this.width=0,this.height=0,this.top=0,this.left=0,this.row=0,this.imageWidth=t,this.imageHeight=n,this.resizedContentWidth=0,this.resizedContentHeight=0,this.displayed=!1,this.neverDisplayed=!0,this.inDisplayArea=!1},ScrollToTop:function(){var e,t,n,i;if(!u.GOM.firstDisplay&&(null!==u.$E.scrollableParent||(e=u.$E.base,t=20,n=a(),(i=e.offset()).top>=n.t&&i.top<=n.t+n.h-t)||u.$E.base.get(0).scrollIntoView(),null!==u.$E.scrollableParent)){var o=u.$E.scrollableParent.scrollTop(),r=Math.abs(u.$E.scrollableParent.offset().top-u.$E.base.offset().top-o);o>r&&window.ng_draf((function(){u.$E.scrollableParent.scrollTop(r)}))}}},u.VOM={viewerDisplayed:!1,viewerIsFullscreen:!1,infoDisplayed:!1,toolbarsDisplayed:!0,toolsHide:null,zoom:{posX:0,posY:0,userFactor:1,isZooming:!1},padding:{H:0,V:0},window:{lastWidth:0,lastHeight:0},$viewer:null,$toolbar:null,$toolbarTL:null,$toolbarTR:null,toolbarMode:"std",playSlideshow:!1,playSlideshowTimerID:0,slideshowDelay:3e3,albumID:-1,viewerMediaIsChanged:!1,items:[],panMode:"off",$baseCont:null,$content:null,content:{previous:{vIdx:-1,$media:null,NGY2Item:function(){return u.I[u.VOM.items[u.VOM.content.previous.vIdx].ngy2ItemIdx]}},current:{vIdx:-1,$media:null,NGY2Item:function(){return u.I[u.VOM.items[u.VOM.content.current.vIdx].ngy2ItemIdx]}},next:{vIdx:-1,$media:null,NGY2Item:function(){return u.I[u.VOM.items[u.VOM.content.next.vIdx].ngy2ItemIdx]}}},IdxNext:function(){var e=0;return u.VOM.content.current.vIdx<u.VOM.items.length-1&&(e=u.VOM.content.current.vIdx+1),e},IdxPrevious:function(){var e=u.VOM.content.current.vIdx-1;return 0==u.VOM.content.current.vIdx&&(e=u.VOM.items.length-1),e},gallery:{$elt:null,$tmbCont:null,gwidth:0,vwidth:0,oneTmbWidth:0,firstDisplay:!0,posX:0,SetThumbnailActive(){"none"!=u.O.viewerGallery&&(this.$tmbCont.children().removeClass("activeVThumbnail"),this.$tmbCont.children().eq(u.VOM.content.current.vIdx).addClass("activeVThumbnail"),this.firstDisplay=!1)},Resize:function(){if("none"!=u.O.viewerGallery)if(this.firstDisplay)(new NGTweenable).tween({from:{opacity:0},to:{opacity:1},easing:"easeInOutSine",duration:1e3,step:function(e){},finish:function(e){}});else{var e=u.VOM.$viewer.width(),t=Math.trunc(e/this.oneTmbWidth);if(this.vwidth=t*this.oneTmbWidth,this.$elt.css({width:this.vwidth,left:(e-this.vwidth)/2}),u.VOM.items.length>=t){var n=this.oneTmbWidth*u.VOM.content.current.vIdx;n+this.posX<this.vwidth?n+this.posX<0&&(this.posX=-n):n+this.posX>=this.vwidth&&(this.posX=this.vwidth-(n+this.oneTmbWidth))}this.PanGallery(0)}},PanGallery:function(e){this.gwidth<u.VOM.$viewer.width()&&(this.posX=(u.VOM.$viewer.width()-this.gwidth)/2,e=0),this.posX>this.vwidth-this.oneTmbWidth&&(this.posX=this.vwidth-this.oneTmbWidth),this.posX+this.gwidth<this.oneTmbWidth&&(this.posX=-this.gwidth+this.oneTmbWidth),this.$tmbCont.css(u.CSStransformName,"translateX("+(this.posX+e)+"px)")},PanGalleryEnd:function(e){var t=100*e;(new NGTweenable).tween({from:{pan:u.VOM.gallery.posX},to:{pan:u.VOM.gallery.posX+t},easing:"easeOutQuad",duration:500,step:function(e){u.VOM.gallery.posX=e.pan,u.VOM.gallery.PanGallery(0)}})}},hammertime:null,swipePosX:0,panPosX:0,panPosY:0,panThreshold:60,panXOnly:!1,singletapTime:0,viewerTheme:"",timeImgChanged:0,ImageLoader:{maxChecks:1e3,list:[],intervalHandle:null,loadImage:function(e,t){if("img"==t.mediaKind){var n=new Image;if(n.src=t.responsiveURL(),n.width&&n.height)e(n.width,n.height,t,0);else{var i,a={image:n,url:t.responsiveURL(),ngitem:t,callback:e,checks:1};for(i=0;i<this.list.length&&null!=this.list[i];i++);this.list[i]=a,this.intervalHandle||(this.intervalHandle=setInterval(this.interval,50))}}},interval:function(){for(var e,t=0,n=u.VOM.ImageLoader.list,i=0;i<n.length;i++)null!=(e=n[i])&&(e.image.width&&e.image.height?(u.VOM.ImageLoader.list[i]=null,e.callback(e.image.width,e.image.height,e.ngitem,e.checks)):e.checks>u.VOM.ImageLoader.maxChecks?(u.VOM.ImageLoader.list[i]=null,e.callback(0,0,e.ngitem,e.checks)):(t++,e.checks++));0==t&&(u.VOM.ImageLoader.list=[],clearInterval(u.VOM.ImageLoader.intervalHandle),delete u.VOM.ImageLoader.intervalHandle)}}},u.popup={isDisplayed:!1,$elt:null,close:function(){null!=this.$elt&&(new NGTweenable).tween({from:{opacity:1},to:{opacity:0},attachment:{t:this},easing:"easeInOutSine",duration:100,step:function(e,t){null!=t.t.$elt&&t.t.$elt.css("opacity",e.opacity)},finish:function(e,t){null!=t.t.$elt&&(t.t.$elt.remove(),t.t.$elt=null),t.t.isDisplayed=!1}})}},u.galleryTheme_dark={navigationBar:{background:"none",borderTop:"",borderBottom:"",borderRight:"",borderLeft:""},navigationBreadcrumb:{background:"#111",color:"#fff",colorHover:"#ccc",borderRadius:"4px"},navigationFilter:{color:"#ddd",background:"#111",colorSelected:"#fff",backgroundSelected:"#111",borderRadius:"4px"},navigationPagination:{background:"#111",color:"#fff",colorHover:"#ccc",borderRadius:"4px"},thumbnail:{background:"#444",backgroundImage:"linear-gradient(315deg, #111 0%, #445 90%)",borderColor:"#000",borderRadius:"0px",labelOpacity:1,labelBackground:"rgba(34, 34, 34, 0)",titleColor:"#fff",titleBgColor:"transparent",titleShadow:"",descriptionColor:"#ccc",descriptionBgColor:"transparent",descriptionShadow:"",stackBackground:"#aaa"},thumbnailIcon:{padding:"5px",color:"#fff",shadow:""},pagination:{background:"#181818",backgroundSelected:"#666",color:"#fff",borderRadius:"2px",shapeBorder:"3px solid #666",shapeColor:"#444",shapeSelectedColor:"#aaa"}},u.galleryTheme_light={navigationBar:{background:"none",borderTop:"",borderBottom:"",borderRight:"",borderLeft:""},navigationBreadcrumb:{background:"#eee",color:"#000",colorHover:"#333",borderRadius:"4px"},navigationFilter:{background:"#eee",color:"#222",colorSelected:"#000",backgroundSelected:"#eee",borderRadius:"4px"},navigationPagination:{background:"#eee",color:"#000",colorHover:"#333",borderRadius:"4px"},thumbnail:{background:"#444",backgroundImage:"linear-gradient(315deg, #111 0%, #445 90%)",borderColor:"#000",labelOpacity:1,labelBackground:"rgba(34, 34, 34, 0)",titleColor:"#fff",titleBgColor:"transparent",titleShadow:"",descriptionColor:"#ccc",descriptionBgColor:"transparent",descriptionShadow:"",stackBackground:"#888"},thumbnailIcon:{padding:"5px",color:"#fff"},pagination:{background:"#eee",backgroundSelected:"#aaa",color:"#000",borderRadius:"2px",shapeBorder:"3px solid #666",shapeColor:"#444",shapeSelectedColor:"#aaa"}},u.viewerTheme_dark={background:"#000",barBackground:"rgba(4, 4, 4, 0.2)",barBorder:"0px solid #111",barColor:"#fff",barDescriptionColor:"#ccc"},u.viewerTheme_light={background:"#f8f8f8",barBackground:"rgba(4, 4, 4, 0.7)",barBorder:"0px solid #111",barColor:"#fff",barDescriptionColor:"#ccc"};var h=NGY2Tools.NanoAlert,d=NGY2Tools.NanoConsoleLog;function m(){u.VOM.items=[],u.VOM.albumID="0",u.GOM.curNavLevel="l1";for(var e=0,t=u.$E.base[0].src,n=void 0,i=0;i<u.I.length;i++)if("image"==u.I[i].kind){var a=new c(i);u.VOM.items.push(a),u.I[i].thumbImg().src==t&&(n=e),e++}u.VOM.items.length>0?De(n):d(u,"No content for Lightbox standalone.")}function p(e){var t={albumID:"0",imageID:"0"},n=e.split("/");return n.length>0&&(t.albumID=n[0],n.length>1&&(t.imageID=n[1])),t}function g(e,t){u.VOM.viewerDisplayed&&tt(null);var n=NGY2Item.GetIdx(u,t);u.GOM.curNavLevel="lN",0==n&&(u.GOM.curNavLevel="l1"),u.layout.SetEngine(),u.galleryResizeEventEnabled=!1,-1==n&&(NGY2Item.New(u,"","",t,"0","album"),n=u.I.length-1),u.I[n].contentIsLoaded?(de(),u.GOM.pagination.currentPage=0,rt(t,""),w(n)):q(t,g,e,t)}function f(){switch(u.galleryDisplayMode.Get()){case"PAGINATION":u.layout.support.rows&&u.galleryMaxRows.Get()>0&&function(){if(u.$E.conTnBottom.css("opacity",0),u.$E.conTnBottom.children().remove(),0==u.GOM.items.length)return;var e=Math.ceil((u.GOM.items[u.GOM.items.length-1].row+1)/u.galleryMaxRows.Get());if(1==e)return;u.GOM.pagination.currentPage>e-1&&(u.GOM.pagination.currentPage=e-1);if(M(),0==u.GOM.displayInterval.len)return;if("NUMBERS"==u.O.galleryPaginationMode&&u.GOM.pagination.currentPage>0){jQuery('<div class="nGY2PaginationPrev">'+u.O.icons.paginationPrevious+"</div>").appendTo(u.$E.conTnBottom).click((function(e){G()}))}var t=0,n=e;if("NUMBERS"!=u.O.galleryPaginationMode)t=0;else{var i=u.O.paginationVisiblePages;if(i>=e)t=0;else{var a=0;a=i%2==1?(i+1)/2:i/2,u.GOM.pagination.currentPage<a?(t=0,(n=i-1)>e&&(n=e-1)):(t=u.GOM.pagination.currentPage-a,(n=t+i)>e&&(n=e-1)),n-t<i&&(t=n-i)<0&&(t=0)}}for(var o=t;o<n;o++){var r="",l="";switch(u.O.galleryPaginationMode){case"NUMBERS":r="nGY2paginationItem",l=o+1;break;case"DOTS":r="nGY2paginationDot";break;case"RECTANGLES":r="nGY2paginationRectangle"}o==u.GOM.pagination.currentPage&&(r+="CurrentPage");var s=jQuery('<div class="'+r+'">'+l+"</div>").appendTo(u.$E.conTnBottom);s.data("pageNumber",o),s.click((function(e){u.GOM.pagination.currentPage=jQuery(this).data("pageNumber"),at("pageChanged"),u.GOM.ScrollToTop(),L(),E(!0)}))}if("NUMBERS"==u.O.galleryPaginationMode&&u.GOM.pagination.currentPage+1<e){jQuery('<div class="nGY2PaginationNext">'+u.O.icons.paginationNext+"</div>").appendTo(u.$E.conTnBottom).click((function(e){y()}))}u.$E.conTnBottom.css("opacity",1)}();break;case"MOREBUTTON":u.$E.conTnBottom.off("click");var e=u.GOM.items.length-u.GOM.itemsDisplayed;0==e?u.$E.conTnBottom.empty():(u.$E.conTnBottom.html('<div class="nGY2GalleryMoreButton"><div class="nGY2GalleryMoreButtonAnnotation">+'+e+" "+u.O.icons.galleryMoreButton+"</div></div>"),u.$E.conTnBottom.on("click",(function(e){u.GOM.displayedMoreSteps++,x()})))}}function b(e){var t="";u.O.breadcrumbHideIcons||(t=u.O.icons.breadcrumbAlbum,0==e&&(t=u.O.icons.breadcrumbHome));var n=jQuery('<div class="oneItem">'+t+u.I[e].title+"</div>").appendTo(u.GOM.navigationBar.$newContent.find(".nGY2Breadcrumb"));u.O.breadcrumbOnlyCurrentLevel?0==e?jQuery(n).data("albumID","0"):jQuery(n).data("albumID",u.I[e].albumID):jQuery(n).data("albumID",u.I[e].GetID()),n.click((function(){g("-1",jQuery(this).data("albumID"))}))}function v(e){var t=jQuery('<div class="oneItem">'+(u.O.RTL?u.O.icons.breadcrumbSeparatorRtl:u.O.icons.breadcrumbSeparator)+"</div>").appendTo(u.GOM.navigationBar.$newContent.find(".nGY2Breadcrumb"));jQuery(t).data("albumIdx",e),t.click((function(){var e=jQuery(this).data("albumIdx");g("-1",u.I[e].GetID())}))}function O(e){if(u.GOM.navigationBar.$newContent=jQuery('<div class="nGY2Navigationbar"></div>'),1==u.O.displayBreadcrumb&&!u.O.thumbnailAlbumDisplayImage){var t=0,n=[];if(0!=e){var i=u.I.length;n.push(e);var a=e;for(t++;0!=u.I[a].albumID&&-1!=u.I[a].albumID;)for(var o=1;o<i;o++)if(u.I[o].GetID()==u.I[a].albumID){a=o,n.push(a),t++;break}}u.O.breadcrumbAutoHideTopLevel&&0==t||function(e){if(jQuery('<div class="nGY2NavigationbarItem nGY2Breadcrumb"></div>').appendTo(u.GOM.navigationBar.$newContent),u.O.breadcrumbOnlyCurrentLevel)0==e.length?b(0):(1==e.length?v(0):v(e[0]),b(e[0]));else if(b(0),e.length>0){v(0);for(var t=e.length-1;t>=0;t--)b(e[t]),t>0&&v(e[t-1])}}(n)}if(0!=u.galleryFilterTags.Get()){var r=u.I[e].albumTagList.length;if(r>0){for(o=0;o<r;o++){var l=u.I[e].albumTagList[o],s=u.O.icons.navigationFilterUnselected,c="Unselected";jQuery.inArray(l,u.I[e].albumTagListSel)>=0&&(c="Selected",s=u.O.icons.navigationFilterSelected),jQuery('<div class="nGY2NavigationbarItem nGY2NavFilter'+c+'">'+s+" "+l+"</div>").appendTo(u.GOM.navigationBar.$newContent).click((function(){var t=jQuery(this),n=t.text().replace(/^\s*|\s*$/,"");if("single"==u.galleryFilterTagsMode.Get())u.I[e].albumTagListSel=[],u.I[e].albumTagListSel.push(n);else{if(t.hasClass("nGY2NavFilterUnselected"))u.I[e].albumTagListSel.push(n);else{var i=jQuery.inArray(n,u.I[e].albumTagListSel);-1!=i&&u.I[e].albumTagListSel.splice(i,1)}t.toggleClass("nGY2NavFilters-oneTagUnselected nGY2NavFilters-oneTagSelected")}g("-1",u.I[e].GetID())}))}jQuery('<div class="nGY2NavigationbarItem nGY2NavFilterSelectAll">'+u.O.icons.navigationFilterSelectedAll+"</div>").appendTo(u.GOM.navigationBar.$newContent).click((function(){u.I[e].albumTagListSel=[],g("-1",u.I[e].GetID())}))}}"PAGINATION"==u.galleryDisplayMode.Get()&&u.O.galleryPaginationTopButtons&&(u.layout.support.rows&&u.galleryMaxRows.Get()>0&&(jQuery('<div class="nGY2NavigationbarItem nGY2NavPagination">'+u.O.icons.navigationPaginationPrevious+"</div>").appendTo(u.GOM.navigationBar.$newContent).click((function(){G()})),jQuery('<div class="nGY2NavigationbarItem nGY2NavPagination">'+u.O.icons.navigationPaginationNext+"</div>").appendTo(u.GOM.navigationBar.$newContent).click((function(){y()}))))}function y(){var e=0;j(),u.galleryMaxRows.Get()>0&&(e=(u.GOM.items[u.GOM.items.length-1].row+1)/u.galleryMaxRows.Get());var t=Math.ceil(e),n=u.GOM.pagination.currentPage;n<t-1?n++:n=0,u.GOM.pagination.currentPage=n,at("pageChanged"),u.GOM.ScrollToTop(),L(),E(!0)}function G(){var e=0;j(),u.galleryMaxRows.Get()>0&&(e=(u.GOM.items[u.GOM.items.length-1].row+1)/u.galleryMaxRows.Get());var t=Math.ceil(e),n=u.GOM.pagination.currentPage;n>0?n--:n=t-1,u.GOM.pagination.currentPage=n,at("pageChanged"),u.GOM.ScrollToTop(),L(),E(!0)}function M(){switch(u.GOM.displayInterval.from=0,u.GOM.displayInterval.len=u.I.length,u.galleryDisplayMode.Get()){case"PAGINATION":if(u.layout.support.rows){let a=u.GOM.items.length;var e=u.GOM.pagination.currentPage*u.galleryMaxRows.Get(),t=e+u.galleryMaxRows.Get(),n=-1;u.GOM.displayInterval.len=0;for(var i=0;i<a;i++){let a=u.GOM.items[i];a.row>=e&&a.row<t&&(-1==n&&(u.GOM.displayInterval.from=i,n=i),u.GOM.displayInterval.len++)}}break;case"MOREBUTTON":if(u.layout.support.rows){let e=u.GOM.items.length,t=u.O.galleryDisplayMoreStep*(u.GOM.displayedMoreSteps+1);u.GOM.displayInterval.len=0;for(i=0;i<e;i++){u.GOM.items[i].row<t&&u.GOM.displayInterval.len++}}break;case"ROWS":if(u.layout.support.rows){let e=u.GOM.items.length,t=u.galleryMaxRows.Get();u.galleryLastRowFull.Get()&&-1!=u.GOM.lastFullRow&&t>u.GOM.lastFullRow+1&&(t=u.GOM.lastFullRow+1),u.GOM.displayInterval.len=0;for(i=0;i<e;i++){u.GOM.items[i].row<t&&u.GOM.displayInterval.len++}}break;default:case"FULLCONTENT":if(u.layout.support.rows&&u.galleryLastRowFull.Get()&&-1!=u.GOM.lastFullRow){let e=u.GOM.items.length,t=u.GOM.lastFullRow+1;u.GOM.displayInterval.len=0;for(i=0;i<e;i++){u.GOM.items[i].row<t&&u.GOM.displayInterval.len++}}}}function w(e){at("galleryRenderStart"),clearTimeout(u.GOM.slider.timerID),u.GOM.slider.hostIdx=-1;var t=u.O.fnGalleryRenderStart;if(null!==t&&("function"==typeof t?t(u.I[u.GOM.albumIdx]):window[t](u.I[u.GOM.albumIdx])),u.layout.SetEngine(),u.galleryResizeEventEnabled=!1,u.GOM.albumIdx=-1,u.GOM.lastDisplayedIdx=-1,void 0!==u.$E.conTnBottom&&u.$E.conTnBottom.empty(),O(e),u.GOM.firstDisplay){u.GOM.firstDisplay=!1;var n=Date.now()-u.GOM.firstDisplayTime;n<u.O.galleryRenderDelay?requestTimeout((function(){I(e)}),u.O.galleryRenderDelay-n):I(e),u.O.galleryRenderDelay=0}else{var i=!1;0==u.GOM.navigationBar.$newContent.children().length&&(i=!0),(new NGTweenable).tween({from:{opacity:1},to:{opacity:0},duration:300,easing:"easeInQuart",attachment:{h:i},step:function(e,t){u.$E.conTnParent.css({opacity:e.opacity}),t.h&&u.$E.conNavigationBar.css({opacity:e.opacity})},finish:function(t,n){n.h&&u.$E.conNavigationBar.css({opacity:0,display:"none"}),u.GOM.ScrollToTop(),I(e)}})}}function I(e){var t=u.$E.conNavigationBar.children().length;(u.$E.conNavigationBar.empty(),u.GOM.navigationBar.$newContent.children().clone(!0,!0).appendTo(u.$E.conNavigationBar),u.$E.conNavigationBar.children().length>0&&0==t)?(u.$E.conNavigationBar.css({opacity:0,display:"block"}),(new NGTweenable).tween({from:{opacity:0},to:{opacity:1},duration:200,easing:"easeInQuart",step:function(e){u.$E.conNavigationBar.css(e)},finish:function(t){u.$E.conNavigationBar.css({opacity:1}),requestTimeout((function(){T(e)}),20)}})):requestTimeout((function(){T(e)}),20)}function T(e){u.GOM.lastZIndex=parseInt(u.$E.base.css("z-index")),isNaN(u.GOM.lastZIndex)&&(u.GOM.lastZIndex=0),u.$E.conTnParent.css({opacity:0}),u.$E.conTn.off().empty();for(var t=u.I.length,n=0;n<t;n++){var i=u.I[n];i.hovered=!1,i.$elt=null,i.$Elts=[],i.eltTransform=[],i.eltFilter=[],i.width=0,i.height=0,i.left=0,i.top=0,i.resizedContentWidth=0,i.resizedContentHeight=0,i.thumbnailImgRevealed=!1}null==u.CSStransformName?u.$E.conTn.css("left","0px"):u.$E.conTn.css(u.CSStransformName,"none"),requestTimeout((function(){!function(e){var t=new Date;u.$E.conTnParent.css("opacity",1),u.GOM.items=[],u.GOM.displayedMoreSteps=0,"onBottom"==u.O.thumbnailLabel.get("position")?u.tn.labelHeight[u.GOM.curNavLevel]=function(){var e=[],t=0;if(0==u.O.thumbnailLabel.get("display"))return 0;e[t++]='<div class="nGY2GThumbnail '+u.O.theme+'" style="display:block;visibility:hidden;position:absolute;top:-9999px;left:-9999px;" ><div class="nGY2GThumbnailSub">',1==u.O.thumbnailLabel.get("display")&&(e[t++]='  <div class="nGY2GThumbnailLabel" '+u.tn.style.getLabel()+">",e[t++]='    <div class="nGY2GThumbnailAlbumTitle" '+u.tn.style.getTitle()+">aAzZjJ</div>",1==u.O.thumbnailLabel.get("displayDescription")&&(e[t++]='    <div class="nGY2GThumbnailDescription" '+u.tn.style.getDesc()+">aAzZjJ</div>"),e[t++]="  </div>");e[t++]="</div></div>";var n=jQuery(e.join("")).appendTo(u.$E.conTn),i=n.find(".nGY2GThumbnailLabel").outerHeight(!0);return n.remove(),i}():u.tn.labelHeight[u.GOM.curNavLevel]=0;u.GOM.albumIdx=e,at("galleryRenderEnd");var n=u.O.fnGalleryRenderEnd;null!==n&&("function"==typeof n?n(u.I[u.GOM.albumIdx]):window[n](u.I[u.GOM.albumIdx]));!function(){for(var e="",t=u.I[u.GOM.albumIdx].GetID(),n=u.I.length,i=0,a=0;a<n;a++){var o=u.I[a];if(o.isToDisplay(t)){var r=o.thumbImg().width,l=o.thumbImg().height;!u.layout.prerequisite.imageSize||0!=r&&0!=l||(e+='<img src="'+o.thumbImg().src+'" data-idx="'+i+'" data-albumidx="'+u.GOM.albumIdx+'">'),0==l&&(l=u.tn.defaultSize.getHeight()),0==r&&(r=u.tn.defaultSize.getWidth());var s=new u.GOM.GTn(a,r,l);u.GOM.items.push(s),i++}}at("galleryObjectModelBuilt");var c=u.O.fnGalleryObjectModelBuilt;null!==c&&("function"==typeof c?c():window[c]());if(""!=e){var h=jQuery(e),d=ngimagesLoaded(h);return h=null,d.on("progress",(function(e,t){if(t.isLoaded){var n=t.img.getAttribute("data-idx");if(t.img.getAttribute("data-albumidx")==u.GOM.albumIdx){var i=u.GOM.items[n];i.imageWidth=t.img.naturalWidth,i.imageHeight=t.img.naturalHeight;var a=u.I[i.thumbnailIdx];a.thumbs.width[u.GOM.curNavLevel][u.GOM.curWidth]=i.imageWidth,a.thumbs.height[u.GOM.curNavLevel][u.GOM.curWidth]=i.imageHeight,u.GalleryResizeThrottled();var o=a.thumbs.width.l1;for(let e in o)o.hasOwnProperty(e)&&e!=u.GOM.curWidth&&u.tn.settings.width.l1[e]==u.tn.settings.getW()&&u.tn.settings.height.l1[e]==u.tn.settings.getH()&&(a.thumbs.width.l1[e]=i.imageWidth,a.thumbs.height.l1[e]=i.imageHeight);o=a.thumbs.width.lN;for(let e in o)o.hasOwnProperty(e)&&e!=u.GOM.curWidth&&u.tn.settings.width.lN[e]==u.tn.settings.getW()&&u.tn.settings.height.lN[e]==u.tn.settings.getH()&&(a.thumbs.width.lN[e]=i.imageWidth,a.thumbs.height.lN[e]=i.imageHeight)}}})),u.galleryResizeEventEnabled=!0,!1}return!0}()?u.galleryResizeEventEnabled=!0:(S(),function(){var e=u.galleryDisplayTransitionDuration.Get();switch(u.galleryDisplayTransition.Get()){case"ROTATEX":u.$E.base.css({perspective:"1000px","perspective-origin":"50% 0%"}),(new NGTweenable).tween({from:{r:50},to:{r:0},attachment:{orgIdx:u.GOM.albumIdx},duration:e,easing:"easeOutCirc",step:function(e,t){t.orgIdx==u.GOM.albumIdx&&u.$E.conTnParent.css(u.CSStransformName,"rotateX("+e.r+"deg)")}});break;case"SLIDEUP":u.$E.conTnParent.css({opacity:0}),(new NGTweenable).tween({from:{y:200,o:0},to:{y:0,o:1},attachment:{orgIdx:u.GOM.albumIdx},duration:e,easing:"easeOutCirc",step:function(e,t){t.orgIdx==u.GOM.albumIdx&&u.$E.conTnParent.css(u.CSStransformName,"translate( 0px, "+e.y+"px)").css("opacity",e.o)}})}}(),L(),requestTimeout((function(){E(!1)}),20));u.O.debugMode&&console.log("GalleryRenderPart3: "+(new Date-t))}(e)}),20)}function x(){var e=new Date;if(u.galleryResizeEventEnabled=!1,0==S())return u.galleryResizeEventEnabled=!0,void(u.O.debugMode&&console.log("GalleryResize1: "+(new Date-e)));u.O.debugMode&&console.log("GalleryResizeSetLayout: "+(new Date-e)),L(),E(!1),u.O.debugMode&&console.log("GalleryResizeFull: "+(new Date-e))}function S(){var e=!0;switch(u.GOM.cache.areaWidth=u.$E.conTnParent.width(),u.GOM.displayArea={width:0,height:0},u.layout.engine){case"JUSTIFIED":e=function(){for(var e=0,t=u.GOM.cache.areaWidth,n=0,i=0,a=[],o=0,r=[],l=!1,s=u.tn.settings.GetResponsive("gutterWidth"),c=u.tn.settings.GetResponsive("gutterHeight"),h=0,d=0,m=!1,p=!1,g=u.tn.defaultSize.getOuterHeight(),f=2*u.tn.opt.Get("borderHorizontal"),b=2*u.tn.opt.Get("borderVertical"),v=1,O=u.GOM.items.length,y=0;y<O;y++){let n=u.GOM.items[y];if(1==n.deleted)break;if(n.imageWidth>0){let i=n.imageWidth/n.imageHeight,u=Math.floor(g*i);if(l&&(l=!1,o++,e=0,m=!1,p=!1,v=1),n.imageHeight>n.imageWidth?m=!0:p=!0,e+s+u<t-v*f){e+=u+s,r[o]=g;var G=Math.max(m?h:0,p?d:0);G>0&&(r[o]=Math.min(r[o],G)),a[o]=y}else{let n=(t-v*f)/(e+=s+u),i=Math.floor(g*n);r[o]=i,m&&(h=Math.max(h,i)),p&&(d=Math.max(d,i)),a[o]=y,l=!0}v++}}o=0,i=0,n=0,0,u.GOM.lastFullRow=0;for(y=0;y<O;y++){let e=u.GOM.items[y];if(!(e.imageWidth>0))return!1;{let l=e.imageWidth/e.imageHeight,h=Math.floor(l*r[o]);y==a[o]&&(a.length!=o+1||n+s+h+f>t)&&(h=t-n-f);let d=parseInt(r[o]);h=parseInt(h),e.resizedContentWidth=h,e.resizedContentHeight=d,e.width=h+f,e.height=d+u.tn.labelHeight.get()+b,e.row=o,e.top=i;let m=n;u.O.RTL&&(m=t-n-e.width),e.left=m,n+=e.width+s,y==a[o]&&(i+=e.height+c,u.GOM.lastFullRow=o-1,o++,n=0)}}return u.GOM.displayArea.width=t,!0}();break;case"CASCADING":e=function(){var e=0,t=u.GOM.cache.areaWidth,n=0,i=[],a=z(t),o=0,r=u.tn.settings.GetResponsive("gutterHeight"),l=1,s=u.tn.defaultSize.getOuterWidth(),c=u.GOM.items.length,h=0;"justified"==u.O.thumbnailAlignment?(a=Math.min(a,c),o=1==a?0:(t-a*s)/(a-1)):o=u.tn.settings.GetResponsive("gutterWidth");var d=2*u.tn.opt.Get("borderHorizontal"),m=2*u.tn.opt.Get("borderVertical");if(u.GOM.lastFullRow=-1,"fillWidth"==u.O.thumbnailAlignment){var p=(a-1)*o;(l=(t-p)/(a*s))>1&&a++,p=(a-1)*o,l=Math.min((t-p)/(a*s),1)}for(var g=(s=Math.round(s*l))-d,f=Math.round(u.tn.opt.Get("baseGridHeight")*l),b=0;b<c;b++){var v=u.GOM.items[b];if(1==v.deleted)break;if(v.imageHeight>0&&v.imageWidth>0){var O=0,y=(h=0,v.imageHeight/v.imageWidth);if(v.resizedContentWidth=g,v.resizedContentHeight=v.resizedContentWidth*y,f>0){var G=Math.max(Math.trunc(v.resizedContentHeight/f),1);v.resizedContentHeight=f*G+(G-1)*(m+r)}if(v.height=v.resizedContentHeight+m+u.tn.labelHeight.get(),v.width=s,v.row=0,0==n)O=e*(s+o),i[e]=v.height+r,++e>=a&&(e=0,n++);else{for(var M=0,w=i[0],I=1;I<a;I++)i[I]+5<w&&(w=i[I],M=I);h=i[M],O=M*(s+o),i[M]=h+v.height+r}var T=O;u.O.RTL&&(T=0-O-s),v.left=T,v.top=h}}return u.GOM.displayArea.width=a*(s+o)-o,!0}();break;case"MOSAIC":e=function(){var e=u.GOM.cache.areaWidth,t=u.tn.settings.GetResponsive("gutterHeight"),n=u.tn.settings.GetResponsive("gutterWidth"),i=2*u.tn.opt.Get("borderHorizontal"),a=2*u.tn.opt.Get("borderVertical"),o=u.GOM.items.length,r=0,l=0,s=0,c=0,h=0;let d=u.tn.settings.getMosaic();for(var m=0;m<o;m++){let e=d[s];var p=(e.c-1)*u.tn.defaultSize.getOuterWidth()+(e.c-1)*n,g=e.w*u.tn.defaultSize.getOuterWidth()+(e.w-1)*n;if(h=Math.max(h,p+g),c=Math.max(c,e.c-1+e.w),++s>=d.length)break}var f=(c-1)*n,b=Math.min((e-f)/(h-f),1);r=0,s=0;for(m=0;m<o;m++){let e=u.GOM.items[m],o=d[s];e.top=Math.round((o.r-1)*u.tn.defaultSize.getOuterHeight()*b)+(o.r-1)*t+r*l+u.tn.labelHeight.get()*(o.r-1),r>0&&(e.top+=t),e.left=(o.c-1)*Math.round(u.tn.defaultSize.getOuterWidth()*b)+(o.c-1)*n,e.height=Math.round(o.h*u.tn.defaultSize.getOuterHeight()*b)+(o.h-1)*t+u.tn.labelHeight.get()*o.h,e.resizedContentHeight=e.height-u.tn.labelHeight.get()-a,e.width=Math.round(o.w*u.tn.defaultSize.getOuterWidth()*b)+(o.w-1)*n,e.resizedContentWidth=e.width-i,e.row=r,0==r&&(l=Math.max(l,e.top+e.height)),++s>=d.length&&(s=0,r++)}return u.GOM.displayArea.width=(h-f)*b+f,!0}();break;case"GRID":default:e=function(){var e=0,t=0,n=u.GOM.cache.areaWidth,i=0,a=u.tn.settings.GetResponsive("gutterHeight"),o=z(n),r=0,l=[],s=0,c=n,h=u.tn.defaultSize.getOuterWidth(),d=1,m=u.GOM.items.length,p=2*u.tn.opt.Get("borderHorizontal"),g=2*u.tn.opt.Get("borderVertical");"justified"==u.O.thumbnailAlignment?(o=Math.min(o,m),i=1==o?0:(n-o*h)/(o-1)):i=u.tn.settings.GetResponsive("gutterWidth");if(u.O.RTL||"fillWidth"==u.O.thumbnailAlignment){var f=(o-1)*i;(d=(n-f)/(o*h))>1&&o++,f=(o-1)*i,d=Math.min((n-f)/(o*h),1),c=o*h+f}u.GOM.lastFullRow=0;for(var b=0,v=(h=Math.round(h*d))-p,O=Math.round(u.tn.defaultSize.getOuterHeight()*d)+u.tn.labelHeight.get(),y=Math.round(u.tn.defaultSize.getOuterHeight()*d)-g,G=0;G<m;G++){0==t?(e=s*(h+i),l[s]=e,r=e+h):e=l[s];var M=e;u.O.RTL&&(M=parseInt(c)-e-h);var w=u.GOM.items[G];w.top=t,w.left=M,w.height=O,w.width=h,"fillWidth"==u.O.thumbnailAlignment&&(w.resizedContentWidth=v,w.resizedContentHeight=y),w.row=b,++s>=o&&(s=0,t+=O+a,u.GOM.lastFullRow=b,b++)}return u.GOM.displayArea.width=r,!0}()}at("galleryLayoutApplied");var t=u.O.fnGalleryLayoutApplied;return null!==t&&("function"==typeof t?t():window[t]()),e}function L(){null==u.CSStransformName?u.$E.conTn.css("left","0px"):u.$E.conTn.css(u.CSStransformName,"none")}function C(){u.GOM.cache.viewport=a(),u.GOM.cache.areaWidth=u.$E.base.width(),u.O.lightboxStandalone||(u.GOM.cache.containerOffset=u.$E.conLoadingB.offset())}function E(e){C();var t=u.GOM.items.length;u.GOM.itemsDisplayed=0;var n=0;M();for(var i=0;i<t;i++){let t=u.GOM.items[i];i>=u.GOM.displayInterval.from&&n<u.GOM.displayInterval.len?(t.inDisplayArea=!0,e&&(t.neverDisplayed=!0),u.GOM.itemsDisplayed++,n++):t.inDisplayArea=!1}f();var a=[],o=[];C(),u.GOM.clipArea.top=-1,n=0;var r=-1;u.GOM.clipArea.height=0;for(i=0;i<t;i++){let e=u.GOM.items[i];if(e.inDisplayArea){if(-1==u.GOM.clipArea.top&&(u.GOM.clipArea.top=e.top),e.top-u.GOM.clipArea.top<=-1&&(u.GOM.clipArea.top=e.top),u.GOM.clipArea.height=Math.max(u.GOM.clipArea.height,e.top-u.GOM.clipArea.top+e.height),e.neverDisplayed){var l=u.GOM.cache.containerOffset.top+(e.top-u.GOM.clipArea.top);if(l+e.height>=u.GOM.cache.viewport.t-50&&l<=u.GOM.cache.viewport.t+u.GOM.cache.viewport.h+50){let t=u.I[e.thumbnailIdx];null==t.$elt&&A(t,e.thumbnailIdx,i),a.push({idx:i,delay:n,top:e.top,left:e.left}),n++}}else o.push({idx:i,delay:0,top:e.top,left:e.left});r=i}else{e.displayed=!1;let t=u.I[e.thumbnailIdx];null!=t.$elt&&t.$elt.css({opacity:0,display:"none"})}}var s=u.$E.conTnParent.width();if(u.GOM.displayArea.width==u.GOM.displayAreaLast.width&&u.GOM.clipArea.height==u.GOM.displayAreaLast.height||(u.$E.conTn.width(u.GOM.displayArea.width).height(u.GOM.clipArea.height),u.GOM.displayAreaLast.width=u.GOM.displayArea.width,u.GOM.displayAreaLast.height=u.GOM.clipArea.height),s!=u.$E.conTnParent.width())return u.GOM.cache.areaWidth=u.$E.conTnParent.width(),S(),L(),void E(e);if(u.layout.support.rows&&("ROWS"==u.galleryDisplayMode.Get()||"FULLCONTENT"==u.galleryDisplayMode.Get()&&u.galleryLastRowFull.Get()&&-1!=u.GOM.lastFullRow)&&(u.GOM.lastDisplayedIdxNew=r<t-1?r:-1,-1!=u.GOM.lastDisplayedIdx)){u.I[u.GOM.items[u.GOM.lastDisplayedIdx].thumbnailIdx].$getElt(".nGY2GThumbnailIconsFullThumbnail").html("")}u.GOM.thumbnails2Display=[];var c=k(a);k(o),u.GOM.thumbnails2Display.forEach((function(e){!function(e,t){function n(e,t){return Math.floor(Math.random()*(t-e+1)+e)}var i={},a={};switch(u.tn.opt.Get("displayTransition")){case"RANDOMSCALE":{for(var o=n(0,3);o==u.GOM.lastRandomValue;)o=n(0,3);u.GOM.lastRandomValue=o;let t=[.95,1,1.05,1.1][o];e.$elt.css({"z-index":u.GOM.lastZIndex+[1,2,3,4][o],"box-shadow":"0px 0px 5px 3px rgba(0,0,0,0.74)"}),i={scale:.5,opacity:0},a={scale:t,opacity:1};break}case"SCALEUP":{let e=u.tn.opt.Get("displayTransitionStartVal");0==e&&(e=.6),i={scale:e,opacity:0},a={scale:1,opacity:1};break}case"SCALEDOWN":{let e=u.tn.opt.Get("displayTransitionStartVal");0==e&&(e=1.3),i={scale:e,opacity:0},a={scale:1,opacity:1};break}case"SLIDEUP":{let e=u.tn.opt.Get("displayTransitionStartVal");0==e&&(e=50),i={opacity:0,translateY:e},a={opacity:1,translateY:0};break}case"SLIDEDOWN":{let e=u.tn.opt.Get("displayTransitionStartVal");0==e&&(e=-50),i={opacity:0,translateY:e},a={opacity:1,translateY:0};break}case"FLIPUP":{let e=u.tn.opt.Get("displayTransitionStartVal");0==e&&(e=100),i={opacity:0,translateY:e,rotateX:45},a={opacity:1,translateY:0,rotateX:0};break}case"FLIPDOWN":{let e=u.tn.opt.Get("displayTransitionStartVal");0==e&&(e=-100),i={opacity:0,translateY:e,rotateX:-45},a={opacity:1,translateY:0,rotateX:0};break}case"SLIDEUP2":{let e=u.tn.opt.Get("displayTransitionStartVal");0==e&&(e=100),i={opacity:0,translateY:e,rotateY:40},a={opacity:1,translateY:0,rotateY:0};break}case"IMAGESLIDEUP":i={opacity:0,top:"100%"},a={opacity:1,top:"0%"};break;case"SLIDEDOWN2":{let e=u.tn.opt.Get("displayTransitionStartVal");0==e&&(e=-100),i={opacity:0,translateY:e,rotateY:40},a={opacity:1,translateY:0,rotateY:0};break}case"SLIDERIGHT":{let e=u.tn.opt.Get("displayTransitionStartVal");0==e&&(e=-150),i={opacity:0,translateX:e},a={opacity:1,translateX:0};break}case"SLIDELEFT":{let e=u.tn.opt.Get("displayTransitionStartVal");0==e&&(e=150),i={opacity:0,translateX:e},a={opacity:1,translateX:0};break}case"FADEIN":i={opacity:0},a={opacity:1}}var r=new NGTweenable;r.tween({from:i,to:a,attachment:{$e:e.$elt,item:e,tw:r},delay:t,duration:u.tn.opt.Get("displayTransitionDuration"),easing:u.tn.opt.Get("displayTransitionEasing"),step:function(e,t){window.requestAnimationFrame((function(){if(null!==t.item.$elt)switch(u.tn.opt.Get("displayTransition")){case"RANDOMSCALE":case"SCALEUP":t.$e.css(u.CSStransformName,"scale("+e.scale+")").css("opacity",e.opacity);break;case"SCALEDOWN":t.item.$elt.last().css("opacity",e.opacity),t.item.CSSTransformSet(".nGY2GThumbnail","scale",e.scale),t.item.CSSTransformApply(".nGY2GThumbnail");break;case"SLIDEUP":t.item.$elt.css("opacity",e.opacity),t.item.CSSTransformSet(".nGY2GThumbnail","translate","0px, "+e.translateY+"px"),t.item.CSSTransformApply(".nGY2GThumbnail");break;case"SLIDEDOWN":t.item.$elt.css("opacity",e.opacity),t.item.CSSTransformSet(".nGY2GThumbnail","translate","0px,"+e.translateY+"px"),t.item.CSSTransformApply(".nGY2GThumbnail");break;case"FLIPUP":t.item.CSSTransformSet(".nGY2GThumbnail","translate","0px,"+e.translateY+"px"),t.item.CSSTransformSet(".nGY2GThumbnail","rotateX",e.rotateX+"deg"),t.item.$elt.css("opacity",e.opacity),t.item.CSSTransformApply(".nGY2GThumbnail");break;case"FLIPDOWN":t.item.$elt.css("opacity",e.opacity),t.item.CSSTransformSet(".nGY2GThumbnail","translate","0px,"+e.translateY+"px"),t.item.CSSTransformSet(".nGY2GThumbnail","rotateX",e.rotateX+"deg"),t.item.CSSTransformApply(".nGY2GThumbnail");break;case"SLIDEUP2":t.item.$elt.css("opacity",e.opacity),t.item.CSSTransformSet(".nGY2GThumbnail","translate","0px,"+e.translateY+"px"),t.item.CSSTransformSet(".nGY2GThumbnail","rotateY",e.rotateY+"deg"),t.item.CSSTransformApply(".nGY2GThumbnail");break;case"IMAGESLIDEUP":t.item.$elt.css("opacity",e.opacity),t.item.$Elts[".nGY2GThumbnailImage"].css("top",e.top);break;case"SLIDEDOWN2":t.item.$elt.css("opacity",e.opacity),t.item.CSSTransformSet(".nGY2GThumbnail","translate","0px, "+e.translateY+"px"),t.item.CSSTransformSet(".nGY2GThumbnail","rotateY",e.rotateY+"deg"),t.item.CSSTransformApply(".nGY2GThumbnail");break;case"SLIDERIGHT":t.item.$elt.css("opacity",e.opacity),t.item.CSSTransformSet(".nGY2GThumbnail","translate",e.translateX+"px, 0px"),t.item.CSSTransformApply(".nGY2GThumbnail");break;case"SLIDELEFT":t.item.CSSTransformSet(".nGY2GThumbnail","translate",e.translateX+"px, 0px"),t.item.$elt.css("opacity",e.opacity),t.item.CSSTransformApply(".nGY2GThumbnail");break;case"FADEIN":t.$e.css(e)}else t.tw.stop(!1)}))},finish:function(e,t){window.requestAnimationFrame((function(){if(null!==t.item.$elt){switch(u.tn.opt.Get("displayTransition")){case"RANDOMSCALE":t.$e.css(u.CSStransformName,"scale("+e.scale+")").css("opacity","");break;case"SCALEUP":t.$e.css(u.CSStransformName,"").css("opacity","");break;case"SCALEDOWN":t.item.$elt.last().css("opacity",""),t.item.CSSTransformSet(".nGY2GThumbnail","scale",e.scale),t.item.CSSTransformApply(".nGY2GThumbnail");break;case"IMAGESLIDEUP":t.item.$elt.css("opacity",""),t.item.$Elts[".nGY2GThumbnailImage"].css("top",0);break;case"SLIDEDOWN2":t.item.$elt.css("opacity",""),t.item.CSSTransformApply(".nGY2GThumbnail");break;default:t.item.$elt.css("opacity","")}B(t.item)}}))}})}(e.itm,e.d)})),u.GOM.thumbnails2Display=[],"NONE"==u.tn.opt.Get("displayTransition")?(u.galleryResizeEventEnabled=!0,at("galleryDisplayed")):requestTimeout((function(){u.galleryResizeEventEnabled=!0,at("galleryDisplayed")}),c*u.tn.opt.Get("displayInterval"))}function k(e){var t=e.length;if(0==t)return 0;var n=u.tn.opt.Get("displayOrder");if("random"==n?NGY2Tools.AreaShuffle(e):("rowByRow"==n&&"JUSTIFIED"!=u.layout.engine&&"GRID"!=u.layout.engine&&(n=""),"colFromRight"!=n&&"colFromLeft"!=n||"CASCADING"==u.layout.engine||"GRID"==u.layout.engine||(n="")),"colFromRight"==n||"colFromLeft"==n){for(var i=[],a=[],o=0;o<t;o++)null==i[e[o].left]&&(i[e[o].left]=[],a.push(e[o].left)),i[e[o].left].push(e[o].idx);"colFromRight"==n&&(a=a.reverse());for(o=0;o<a.length;o++)for(var r=a[o],l=0;l<i[r].length;l++)D(i[r][l],o);return o}var s=0,c=e[0].top;for(o=0;o<t;o++)"rowByRow"==n?e[o].top>c&&(s++,c=e[o].top):s++,D(e[o].idx,s);return s}function D(e,t){var n=0,i=u.GOM.items[e],a=u.GOM.items[e].thumbnailIdx,o=u.I[a];if(i.neverDisplayed){var r=i.top-u.GOM.clipArea.top;if(u.tn.opt.Get("stacks")>0?(o.$elt.last().css({display:"block"}),o.$elt.css({top:r,left:i.left})):o.$elt.css({display:"block",top:r,left:i.left}),n=r,!0===u.O.thumbnailWaitImageLoaded)ngimagesLoaded(o.$getElt(".nGY2TnImg2")).on("progress",(function(e,t){if(t.isLoaded&&t.img.getAttribute("data-albumidx")==u.GOM.albumIdx){var n=t.img.getAttribute("data-idx");u.I[n].ThumbnailImageReveal()}}));!function(e,t){var n=u.GOM.items[e],i=u.I[n.thumbnailIdx];if("NONE"==u.tn.opt.Get("displayTransition"))i.$elt.css({opacity:1}),B(i);else{if(null==i.$elt)return;var a=u.GOM.cache.containerOffset.top+(n.top-u.GOM.clipArea.top),o=u.GOM.cache.viewport;if(a+(n.top-u.GOM.clipArea.top)>=o.t-50&&a<=o.t+o.h+50){var r=t*u.tn.opt.Get("displayInterval");return void("CUSTOM"==u.tn.opt.Get("displayTransition")?"lN"==u.GOM.curNavLevel?u.O.fnThumbnailDisplayEffect(i.$elt,i,e,r):u.O.fnThumbnailL1DisplayEffect(i.$elt,i,e,r):u.GOM.thumbnails2Display.push({itm:i,d:r}))}i.$elt.css({opacity:1}),B(i)}}(e,t),i.displayed=!0,i.neverDisplayed=!1}else{var l=u.GOM.cache.containerOffset.top+o.top;r=u.GOM.cache.containerOffset.top+(i.top-u.GOM.clipArea.top);n=i.top-u.GOM.clipArea.top;var s=u.GOM.cache.viewport;if(u.O.thumbnailDisplayOutsideScreen||l+i.height>=s.t-s.h&&l<=s.t+4*s.h||r+i.height>=s.t-s.h&&r<=s.t+4*s.h)if(i.displayed){if(o.top!=i.top||o.left!=i.left)if(1==u.O.galleryResizeAnimation)(new NGTweenable).tween({from:{top:o.top,left:o.left,height:o.height,width:o.width},to:{top:n,left:i.left,height:i.height,width:i.width},attachment:{$e:o.$elt},duration:100,delay:t*u.tn.opt.Get("displayInterval")/5,easing:"easeOutQuart",step:function(e,t){t.$e.css(e)},finish:function(e,t){this.dispose()}});else o.$elt.css({top:n,left:i.left})}else i.displayed=!0,o.$elt.css({display:"block",top:n,left:i.left,opacity:1}),B(o);else i.displayed=!1,o.$elt.css({display:"none"})}if(o.left=i.left,o.top=n,o.width==i.width&&o.height==i.height||(o.$elt.css({width:i.width,height:i.height}),o.width=i.width,o.height=i.height,o.resizedContentWidth==i.resizedContentWidth&&o.resizedContentHeight==i.resizedContentHeight||("albumUp"==o.kind||(o.$getElt(".nGY2GThumbnailImage").css({height:i.resizedContentHeight,width:i.resizedContentWidth}),"JUSTIFIED"==u.layout.engine&&o.$getElt(".nGY2GThumbnailImg").css({height:i.resizedContentHeight,width:i.resizedContentWidth})),o.resizedContentWidth=i.resizedContentWidth,o.resizedContentHeight=i.resizedContentHeight)),u.GOM.lastDisplayedIdxNew==e&&u.layout.support.rows&&("ROWS"==u.galleryDisplayMode.Get()&&u.galleryMaxRows.Get()>0||"FULLCONTENT"==u.galleryDisplayMode.Get()&&u.galleryLastRowFull.Get()&&-1!=u.GOM.lastFullRow)){var c=u.GOM.items.length-e-1;"0"!=o.albumID&&u.O.thumbnailLevelUp&&c--,c>0?((u.O.thumbnailOpenInLightox||u.O.thumbnailSliderDelay>0)&&o.$getElt(".nGY2GThumbnailIconsFullThumbnail").html("+"+c),"right"!=u.O.thumbnailLabel.get("position")&&"left"!=u.O.thumbnailLabel.get("position")&&u.GOM.slider.hostItem!=u.GOM.NGY2Item(e)&&(V(u.GOM.slider.hostItem),u.GOM.slider.hostIdx=e,u.GOM.slider.hostItem=u.GOM.NGY2Item(e),u.GOM.slider.nextIdx=e,u.GOM.slider.currentIdx=e,function(){if(0==u.O.thumbnailSliderDelay||-1==u.GOM.slider.hostIdx)return;clearTimeout(u.GOM.slider.timerID);var e=u.GOM.slider.hostItem;0==e.$getElt(".nGY2TnImgNext").length&&(e.$getElt(".nGY2TnImg").clone().removeClass("nGY2TnImg").addClass("nGY2TnImgNext").insertAfter(e.$getElt(".nGY2TnImg")),e.$getElt(".nGY2TnImgBack").clone().removeClass("nGY2TnImgBack").addClass("nGY2TnImgBackNext").insertAfter(e.$getElt(".nGY2TnImg",!0)),e.$getElt(".nGY2GThumbnailImage",!0),e.$getElt(".nGY2GThumbnailImg",!0));e.CSSTransformSet(".nGY2TnImgNext","translateX","100%",!0),e.CSSTransformApply(".nGY2TnImgNext"),e.CSSTransformSet(".nGY2TnImgBackNext","translateX","100%",!0),e.CSSTransformApply(".nGY2TnImgBackNext"),N(),u.GOM.slider.timerID=requestTimeout((function(){!function e(){if(null!=u.GOM.slider.hostItem.$getElt()){var t=new NGTweenable;u.GOM.slider.tween=t,t.tween({from:{left:100},to:{left:0},duration:800,delay:0,easing:"easeOutQuart",step:function(e){null!=u.GOM.slider.hostItem.$getElt()?(u.GOM.slider.hostItem.CSSTransformSet(".nGY2TnImgBack","translateX",-(100-e.left)+"%"),u.GOM.slider.hostItem.CSSTransformApply(".nGY2TnImgBack"),u.GOM.slider.hostItem.CSSTransformSet(".nGY2TnImg","translateX",-(100-e.left)+"%"),u.GOM.slider.hostItem.CSSTransformApply(".nGY2TnImg"),u.GOM.slider.hostItem.CSSTransformSet(".nGY2TnImgBackNext","translateX",e.left+"%"),u.GOM.slider.hostItem.CSSTransformApply(".nGY2TnImgBackNext"),u.GOM.slider.hostItem.CSSTransformSet(".nGY2TnImgNext","translateX",e.left+"%"),u.GOM.slider.hostItem.CSSTransformApply(".nGY2TnImgNext")):u.GOM.slider.tween.stop(!1)},finish:function(t){null!=u.GOM.slider.hostItem.$getElt()&&null!=u.GOM.NGY2Item(u.GOM.slider.nextIdx)&&(V(u.GOM.NGY2Item(u.GOM.slider.nextIdx)),u.GOM.slider.currentIdx=u.GOM.slider.nextIdx,N(),clearTimeout(u.GOM.slider.timerID),u.GOM.slider.timerID=requestTimeout((function(){e()}),u.O.thumbnailSliderDelay))}})}}()}),u.O.thumbnailSliderDelay)}())):(V(u.GOM.slider.hostItem),u.GOM.slider.hostIdx=-1),u.GOM.lastDisplayedIdx=e}}function N(){u.GOM.slider.nextIdx++,u.GOM.slider.nextIdx>=u.GOM.items.length&&(u.GOM.slider.nextIdx=u.GOM.slider.hostIdx);var e=u.GOM.NGY2Item(u.GOM.slider.nextIdx),t="url('"+u.emptyGif+"')";null!=e.imageDominantColors&&(t="url('"+e.imageDominantColors+"')"),u.GOM.slider.hostItem.$getElt(".nGY2TnImgBackNext",!0).css({"background-image":t,opacity:1}),u.GOM.slider.hostItem.$getElt(".nGY2TnImgNext",!0).css({"background-image":"url('"+e.thumbImg().src+"')",opacity:1}),u.GOM.slider.hostItem.$getElt(".nGY2TnImgNext .nGY2GThumbnailImg",!0).attr("src",e.thumbImg().src)}function V(e){if(-1!=u.GOM.slider.hostIdx){null!=u.GOM.slider.tween&&1==u.GOM.slider.tween._isTweening&&u.GOM.slider.tween.stop(!1);var t="url('"+u.emptyGif+"')";if(null!=e.imageDominantColors&&(t="url('"+e.imageDominantColors+"')"),u.GOM.slider.hostItem.$getElt(".nGY2TnImgBack").css("background-image",t),u.GOM.slider.hostItem.$getElt(".nGY2TnImg").css("background-image","url('"+e.thumbImg().src+"')"),u.GOM.slider.hostItem.$getElt(".nGY2TnImg .nGY2GThumbnailImg").attr("src",e.thumbImg().src),u.GOM.slider.hostItem.CSSTransformSet(".nGY2TnImgBack","translateX","0"),u.GOM.slider.hostItem.CSSTransformApply(".nGY2TnImgBack"),u.GOM.slider.hostItem.CSSTransformSet(".nGY2TnImg","translateX","0"),u.GOM.slider.hostItem.CSSTransformApply(".nGY2TnImg"),u.GOM.slider.hostItem.CSSTransformSet(".nGY2TnImgBackNext","translateX","100%",!0),u.GOM.slider.hostItem.CSSTransformApply(".nGY2TnImgBackNext"),u.GOM.slider.hostItem.CSSTransformSet(".nGY2TnImgNext","translateX","100%",!0),u.GOM.slider.hostItem.CSSTransformApply(".nGY2TnImgNext"),1==u.O.thumbnailLabel.get("display")){var n=u.O.icons.thumbnailAlbum;"album"!=e.kind&&(n=u.O.icons.thumbnailImage),u.GOM.slider.hostItem.$getElt(".nGY2GThumbnailTitle").html(n+$(e)),u.GOM.slider.hostItem.$getElt(".nGY2GThumbnailDescription").html(n+F(e))}}}function Y(e){var t=u.tn.opt.Get("stacks");if(0==t)return"";for(var n="",i=0;i<t;i++)n='<div class="nGY2GThumbnailStack " style="display:none;'+e+'"></div>'+n;return n}function A(e,t,n){if(e.eltTransform=[],e.eltFilter=[],e.hoverInitDone=!1,e.$Elts=[],"albumUp"!=e.kind){var i=[],a=0,o="";!1===u.O.thumbnailOpenInLightox&&(o="cursor:default;");var r=e.thumbImg().src.replace(/'/g,"%27"),l=$(e),s="",c="background-image: url('"+u.emptyGif+"');";null!=e.imageDominantColors?c="background-image: url('"+e.imageDominantColors+"');":null!=e.imageDominantColor?s="background-color:"+e.imageDominantColor+";":c="";var h="opacity:1;";1==u.O.thumbnailWaitImageLoaded&&(h="opacity:0;"),i[a++]=Y(s)+'<div class="nGY2GThumbnail nGY2GThumbnail_'+u.GOM.curNavLevel+'" style="display:none;opacity:0;'+o+'"><div class="nGY2GThumbnailSub '+(u.O.thumbnailSelectable&&e.selected?"nGY2GThumbnailSubSelected":"")+'">';var d=u.tn.settings.getW(),m=u.tn.settings.getH();null!==u.tn.settings.getMosaic()&&(d=u.GOM.items[n].width,m=u.GOM.items[n].height);var p="contain";u.tn.opt.Get("crop")&&(p="cover");var g="position: absolute; top: 0px; left: 0px; width:"+d+"px; height:"+m+"px;"+s+c+" background-position: center center;  background-repeat: no-repeat; background-size:"+p+"; overflow: hidden;";i[a++]='<div class="nGY2GThumbnailImage nGY2TnImgBack" style="'+g+'"></div>';var f=h+"position: absolute; top: 0px; left: 0px; width:"+d+"px; height:"+m+"px; background-image: url('"+r+"'); background-position: center center; background-repeat: no-repeat; background-size:"+p+"; overflow: hidden;";i[a++]='<div class="nGY2GThumbnailImage nGY2TnImg" style="'+f+'">',i[a++]='  <img class="nGY2GThumbnailImg nGY2TnImg2" src="'+r+'" alt="'+l+'" style="opacity:0;" data-idx="'+t+'" data-albumidx="'+u.GOM.albumIdx+'" >',i[a++]="</div>",i[a++]='<div class="nGY2GThumbnailCustomLayer"></div>',1==u.O.thumbnailLabel.get("display")&&(i[a++]='  <div class="nGY2GThumbnailLabel" '+u.tn.style.getLabel(e)+">","album"==e.kind?i[a++]='    <div class="nGY2GThumbnailTitle nGY2GThumbnailAlbumTitle" '+u.tn.style.getTitle()+">"+u.O.icons.thumbnailAlbum+l+"</div>":i[a++]='    <div class="nGY2GThumbnailTitle nGY2GThumbnailImageTitle" '+u.tn.style.getTitle()+">"+u.O.icons.thumbnailImage+l+"</div>",i[a++]='    <div class="nGY2GThumbnailDescription" '+u.tn.style.getDesc()+">"+F(e)+"</div>",i[a++]="  </div>"),i[a++]=function(e){var t=_(e,"topLeft")+_(e,"topRight")+_(e,"bottomLeft")+_(e,"bottomRight");return t+='<div class="nGY2GThumbnailIconsFullThumbnail"></div>'}(e),i[a++]="</div></div>";var b=jQuery(i.join("")).appendTo(u.$E.conTn);e.$elt=b,b.data("index",n),e.$getElt(".nGY2GThumbnailImg").data("index",n);var v=u.O.fnThumbnailInit;null!==v&&("function"==typeof v?v(b,e,n):window[v](b,e,n)),"image gallery by nanogallery2 [build]"!=e.title&&H(n)}else!function(e,t){var n=[],i=0,a="";!1===u.O.thumbnailOpenInLightox&&(a="cursor:default;"),n[i++]=Y("")+'<div class="nGY2GThumbnail" style="display:none;opacity:0;'+a+'" >',n[i++]='  <div class="nGY2GThumbnailSub">';var o=u.tn.defaultSize.getHeight(),r=u.tn.defaultSize.getWidth();n[i++]='    <div class="nGY2GThumbnailImage" style="width:'+r+"px;height:"+o+'px;"><img class="nGY2GThumbnailImg" src="'+u.emptyGif+'" alt="" style="max-width:'+r+"px;max-height:"+o+'px;" ></div>',n[i++]='    <div class="nGY2GThumbnailAlbumUp" >'+u.O.icons.thumbnailAlbumUp+"</div>",n[i++]="  </div>",n[i++]="</div>";var l=jQuery(n.join("")).appendTo(u.$E.conTn);e.$elt=l,l.data("index",t),e.$getElt(".nGY2GThumbnailImg").data("index",t)}(e,n)}function _(e,t){var n="",i=u.tn.toolbar.get(e),a={xs:0,sm:1,me:2,la:3,xl:4},o=0;if(""!=i[t]){var r="top: 0; right: 0; text-align: right;";switch(t){case"topLeft":r="top: 0; left: 0; text-align: left;";break;case"bottomRight":r="bottom: 0; right: 0; text-align: right;";break;case"bottomLeft":r="bottom: 0; left: 0; text-align: left;"}n+='  <ul class="nGY2GThumbnailIcons" style="'+r+'">';for(var l=i[t].split(","),s=l.length,c=0;c<s;c++){var h=l[c].replace(/^\s*|\s*$/,""),d=h.substring(0,2).toLowerCase(),m=h,p=!0;if(/xs|sm|me|la|xl/i.test(d)&&(a[d]>a[u.GOM.curWidth]&&(p=!1),m=h.substring(2)),p){var g=c+1<s?"&nbsp;":"";switch(m){case"COUNTER":"album"==e.kind&&(n+='    <li class="nGY2GThumbnailIcon" data-ngy2action="">',n+='      <div class="nGY2GThumbnailIconImageCounter"></div>',n+='      <div class="nGY2GThumbnailIconText">'+u.O.icons.thumbnailCounter+Math.max(e.getContentLength(!1),e.numberItems)+g+"</div>",n+="    </li>",o++);break;case"COUNTER2":"album"==e.kind&&(n+='    <li class="nGY2GThumbnailIcon" data-ngy2action="">',n+='      <div class="nGY2GThumbnailIconTextBadge">'+u.O.icons.thumbnailCounter+Math.max(e.getContentLength(!1),e.numberItems)+g+"</div>",n+="    </li>",o++);break;case"SHARE":n+='    <li class="nGY2GThumbnailIcon" data-ngy2action="'+m+'">',n+="      <div>"+u.O.icons.thumbnailShare+"</div>",n+="    </li>",o++;break;case"DOWNLOAD":n+='    <li class="nGY2GThumbnailIcon" data-ngy2action="'+m+'">',n+="      <div>"+u.O.icons.thumbnailDownload+"</div>",n+="    </li>",o++;break;case"INFO":n+='    <li class="nGY2GThumbnailIcon" data-ngy2action="'+m+'">',n+="      <div>"+u.O.icons.thumbnailInfo+"</div>",n+="    </li>",o++;break;case"SHOPPINGCART":n+='    <li class="nGY2GThumbnailIcon" data-ngy2action="'+m+'">',n+=P(e),n+="    </li>",o++;break;case"DISPLAY":n+='    <li class="nGY2GThumbnailIcon" data-ngy2action="DISPLAY">',n+='      <div class="nGY2GThumbnailIconImageShare">'+u.O.icons.thumbnailDisplay+"</div>",n+="    </li>",o++;break;case"CUSTOM1":case"CUSTOM2":case"CUSTOM3":case"CUSTOM4":case"CUSTOM5":case"CUSTOM6":case"CUSTOM7":case"CUSTOM8":case"CUSTOM9":case"CUSTOM10":var f=m.replace("CUSTOM","");n+='    <li class="nGY2GThumbnailIcon" data-ngy2action="'+m.toLowerCase()+'">',n+='      <div class="nGY2GThumbnailIconImageShare">'+u.O.icons["thumbnailCustomTool"+f]+"</div>",n+="    </li>",o++;break;case"FEATURED":!0===e.featured&&(n+='    <li class="nGY2GThumbnailIcon" data-ngy2action="">',n+='      <div class="nGY2GThumbnailIconImageFeatured">'+u.O.icons.thumbnailFeatured+"</div>",n+="    </li>",o++);break;case"SELECT":1==u.O.thumbnailSelectable&&(n+='    <li class="nGY2GThumbnailIcon" data-ngy2action="TOGGLESELECT">',!0===e.selected?n+='      <div class="nGY2GThumbnailIconImageSelect nGY2ThumbnailSelected">'+u.O.icons.thumbnailSelected+"</div>":n+='      <div class="nGY2GThumbnailIconImageSelect nGY2ThumbnailUnselected">'+u.O.icons.thumbnailUnselected+"</div>",n+="    </li>",o++)}}}n+="  </ul>"}return o>0?n:""}function P(e){for(var t=0,n=e.GetID(),i=0;i<u.shoppingCart.length;i++)u.I[u.shoppingCart[i].idx].GetID()==n&&(t=u.shoppingCart[i].qty);return 0==t&&(t=""),"      <div>"+u.O.icons.thumbnailShoppingcart+t+"</div>"}function R(e){var t=e.$elt;if(null!=t){var n=t.find('*[data-ngy2action="SHOPPINGCART"]');void 0!==n&&n.html(P(e))}}function $(e){var t=e.title;if(1==u.O.thumbnailLabel.get("display")){void 0!==t&&0!=t.length||(t="&nbsp;"),""!=u.i18nTranslations.thumbnailImageTitle&&(t=u.i18nTranslations.thumbnailImageTitle);var n=u.O.thumbnailLabel.get("titleMaxLength");n>3&&t.length>n&&(t=t.substring(0,n)+"...")}return t}function F(e){var t="";if(1==u.O.thumbnailLabel.get("displayDescription")){t="album"==e.kind?""!=u.i18nTranslations.thumbnailImageDescription?u.i18nTranslations.thumbnailAlbumDescription:e.description:""!=u.i18nTranslations.thumbnailImageDescription?u.i18nTranslations.thumbnailImageDescription:e.description;var n=u.O.thumbnailLabel.get("descriptionMaxLength");n>3&&t.length>n&&(t=t.substring(0,n)+"..."),0==t.length&&(t="&nbsp;")}return t}function z(e){var t=u.tn.defaultSize.getOuterWidth(),n=0;return n="justified"==u.O.thumbnailAlignment?Math.floor(e/t):Math.floor((e+u.tn.settings.GetResponsive("gutterWidth"))/(t+u.tn.settings.GetResponsive("gutterWidth"))),u.O.maxItemsPerLine>0&&n>u.O.maxItemsPerLine&&(n=u.O.maxItemsPerLine),n<1&&(n=1),n}function B(e){var t=u.tn.opt.Get("stacks");if(t>0){e.$elt.css({display:"block"});for(var n=.9,i=t-1;i>=0;i--)e.$elt.eq(i).css("opacity",n),n-=.2}}function H(e){var t=u.GOM.items[e],n=u.I[t.thumbnailIdx];if(null!=n.$elt){var i=u.O.fnThumbnailHoverInit;null!==i&&("function"==typeof i?i($e,n,e):window[i]($e,n,e));for(var a=u.tn.buildInit.get(),o=0;o<a.length;o++)switch(a[o].property){case"scale":case"rotateX":case"rotateY":case"rotateZ":case"translateX":case"translateY":case"translateZ":n.CSSTransformSet(a[o].element,a[o].property,a[o].value),n.CSSTransformApply(a[o].element);break;case"blur":case"brightness":case"grayscale":case"sepia":case"contrast":case"opacity":case"saturate":n.CSSFilterSet(a[o].element,a[o].property,a[o].value),n.CSSFilterApply(a[o].element);break;default:n.$getElt(a[o].element).css(a[o].property,a[o].value)}var r=u.tn.hoverEffects.get();for(o=0;o<r.length;o++)if(!0===r[o].firstKeyframe)switch(r[o].type){case"scale":case"rotateX":case"rotateY":case"rotateZ":case"translateX":case"translateY":case"translateZ":n.CSSTransformSet(r[o].element,r[o].type,r[o].from),n.CSSTransformApply(r[o].element);break;case"blur":case"brightness":case"grayscale":case"sepia":case"contrast":case"opacity":case"saturate":n.CSSFilterSet(r[o].element,r[o].type,r[o].from),n.CSSFilterApply(r[o].element);break;default:n.$getElt(r[o].element).css(r[o].type,r[o].from)}n.hoverInitDone=!0}}function U(){if(-1!=u.GOM.albumIdx)for(var e=u.GOM.items.length,t=0;t<e;t++)H(t),u.I[u.GOM.items[t].thumbnailIdx].hovered=!1}function W(e){if(-1!=u.GOM.albumIdx&&u.galleryResizeEventEnabled&&u.GOM.slider.hostIdx!=e){var t=u.GOM.items[e],n=u.I[t.thumbnailIdx];if("albumUp"!=n.kind&&null!=n.$elt){n.hovered=!0;var i=u.O.fnThumbnailHover;null!==i&&("function"==typeof i?i(n.$elt,n,e):window[i](n.$elt,n,e));var a=u.tn.hoverEffects.get();try{for(var o=0;o<a.length;o++)!0===a[o].hoverin&&n.animate(a[o],0,!0)}catch(e){h(u,"error on hover: "+e.message)}}}}function j(){if(-1!=u.GOM.albumIdx)for(var e=u.GOM.items.length,t=0;t<e;t++)u.GOM.items[t].inDisplayArea?X(t):u.I[u.GOM.items[t].thumbnailIdx].hovered=!1}function X(e){if(-1!=u.GOM.albumIdx&&u.galleryResizeEventEnabled&&u.GOM.slider.hostIdx!=e){var t=u.GOM.items[e],n=u.I[t.thumbnailIdx];if("albumUp"!=n.kind&&n.hovered&&(n.hovered=!1,null!=n.$elt)){var i=u.O.fnThumbnailHoverOut;null!==i&&("function"==typeof i?i(n.$elt,n,e):window[i](n.$elt,n,e));var a=u.tn.hoverEffects.get();try{for(var o=0;o<a.length;o++)!0===a[o].hoverout&&n.animate(a[o],0,!1)}catch(e){h(u,"error on hoverOut: "+e.message)}}}}function Q(e,t){u.O.debugMode&&console.log("#DisplayPhoto : "+t+"-"+e);var n=NGY2Item.GetIdx(u,t);u.GOM.curNavLevel=0==n?"l1":"lN",-1==n&&""!=u.O.kind&&NGY2Item.New(u,"","",t,"0","album");var i=NGY2Item.GetIdx(u,e);-1!=i?(u.O.debugMode&&console.log("#DisplayPhoto : "+i),we(i)):q(t,Q,e,t)}function q(e,t,n,i){switch(u.O.kind){case"":!function(e,t,n){if(!0===u.markupOrApiProcessed)return void g("-1",0);if(void 0!==u.O.items&&null!==u.O.items)K();else{if(!(u.O.$markup.length>0))return void d(u,"error: no media to process.");te(u.O.$markup),u.O.$markup=[]}u.markupOrApiProcessed=!0,null!=e&&e(t,n,null)}(t,n,i);break;default:jQuery.nanogallery2["data_"+u.O.kind](u,"AlbumGetContent",e,t,n,i)}}this.initiateGallery2=function(e,t){if(u.O=t,u.$E.base=jQuery(e),u.baseEltID=u.$E.base.attr("id"),null==u.baseEltID){for(var n="",i=!0;i;)document.getElementById("my_nanogallery"+n)?""==n?n=1:n++:(i=!1,u.baseEltID="my_nanogallery"+n);u.$E.base.attr("id",u.baseEltID)}if(u.O.$markup=[],function(){"PICASA"!=u.O.kind.toUpperCase()&&"GOOGLE"!=u.O.kind.toUpperCase()||(u.O.kind="google2");u.GOM.cache.viewport=a(),u.GOM.curWidth=ht(),jQuery.extend(!0,u.tn.toolbar.image,u.O.thumbnailToolbarImage),jQuery.extend(!0,u.tn.toolbar.album,u.O.thumbnailToolbarAlbum);for(var e=["image","album"],t=["topLeft","topRight","bottomLeft","bottomRight"],n=0;n<e.length;n++)for(var i=0;i<t.length;i++)u.tn.toolbar[e[n]][t[i]]=u.tn.toolbar[e[n]][t[i]].toUpperCase();"overImageOnBottom"==u.O.thumbnailLabel.position&&(u.O.thumbnailLabel.valign="bottom",u.O.thumbnailLabel.position="overImage");"overImageOnMiddle"==u.O.thumbnailLabel.position&&(u.O.thumbnailLabel.valign="middle",u.O.thumbnailLabel.position="overImage");"overImageOnTop"==u.O.thumbnailLabel.position&&(u.O.thumbnailLabel.valign="top",u.O.thumbnailLabel.position="overImage");void 0!==u.O.thumbnailL1Label&&void 0!==u.O.thumbnailL1Label.position&&("overImageOnBottom"==u.O.thumbnailL1Label.position&&(u.O.thumbnailL1Label.valign="bottom",u.O.thumbnailL1Label.position="overImage"),"overImageOnMiddle"==u.O.thumbnailL1Label.position&&(u.O.thumbnailL1Label.valign="middle",u.O.thumbnailL1Label.position="overImage"),"overImageOnTop"==u.O.thumbnailL1Label.position&&(u.O.thumbnailL1Label.valign="top",u.O.thumbnailL1Label.position="overImage"));u.O.thumbnailLabel.get=function(e){return"l1"==u.GOM.curNavLevel&&void 0!==u.O.thumbnailL1Label&&void 0!==u.O.thumbnailL1Label[e]?u.O.thumbnailL1Label[e]:u.O.thumbnailLabel[e]},u.O.thumbnailLabel.set=function(e,t){"l1"==u.GOM.curNavLevel&&void 0!==u.O.thumbnailL1Label&&void 0!==u.O.thumbnailL1Label[e]?u.O.thumbnailL1Label[e]=t:u.O.thumbnailLabel[e]=t},""!=u.O.blockList&&(u.blockList=u.O.blockList.toUpperCase().split("|"));""!=u.O.allowList&&(u.allowList=u.O.allowList.toUpperCase().split("|"));if(void 0!==u.O.albumList2&&null!==u.O.albumList2&&u.O.albumList2.constructor===Array){var o=u.O.albumList2.length;for(n=0;n<o;n++)u.albumList.push(u.O.albumList2[n])}void 0!==u.O.albumList2&&"string"==typeof u.O.albumList2&&u.albumList.push(u.O.albumList2);function l(e,t,n){u.tn.opt.lN[n]=u.O[e],u.tn.opt.l1[n]=u.O[e],"number"==r(u.O[t])&&(u.tn.opt.l1[n]=u.O[t])}function s(e,t,n){u.tn.settings[e][t].xs=n,u.tn.settings[e][t].sm=n,u.tn.settings[e][t].me=n,u.tn.settings[e][t].la=n,u.tn.settings[e][t].xl=n}function c(e,t,n){var i=u.O[e];if(null!=i)if("number"==r(i)||-1==i.indexOf(" ")){var a="auto";"auto"!=i&&(a=parseInt(i)),s(t,n,a)}else{var o=i.split(" ");if(o.length>0&&+o[0]==+o[0]){a="auto";"auto"!=o[0]&&(a=parseInt(o[0])),s(t,n,a)}for(var l=1;l<o.length;l++)if(/^xs|sm|me|la|xl/i.test(o[l])){var c=o[l].substring(0,2).toLowerCase(),h=o[l].substring(2);a="auto";"auto"!=h&&(a=parseInt(h)),u.tn.settings[t][n][c]=a}}}u.tn.opt.lN.crop=u.O.thumbnailCrop,u.tn.opt.l1.crop=null!=u.O.thumbnailL1Crop?u.O.thumbnailL1Crop:u.O.thumbnailCrop,l("thumbnailStacks","thumbnailL1Stacks","stacks"),l("thumbnailStacksTranslateX","thumbnailL1StacksTranslateX","stacksTranslateX"),l("thumbnailStacksTranslateY","thumbnailL1StacksTranslateY","stacksTranslateY"),l("thumbnailStacksTranslateZ","thumbnailL1StacksTranslateZ","stacksTranslateZ"),l("thumbnailStacksRotateX","thumbnailL1StacksRotateX","stacksRotateX"),l("thumbnailStacksRotateY","thumbnailL1StacksRotateY","stacksRotateY"),l("thumbnailStacksRotateZ","thumbnailL1StacksRotateZ","stacksRotateZ"),l("thumbnailStacksScale","thumbnailL1StacksScale","stacksScale"),l("thumbnailBorderHorizontal","thumbnailL1BorderHorizontal","borderHorizontal"),l("thumbnailBorderVertical","thumbnailL1BorderVertical","borderVertical"),l("thumbnailBaseGridHeight","thumbnailL1BaseGridHeight","baseGridHeight"),c("thumbnailGutterWidth","gutterWidth","lN"),c("thumbnailGutterWidth","gutterWidth","l1"),c("thumbnailL1GutterWidth","gutterWidth","l1"),c("thumbnailGutterHeight","gutterHeight","lN"),c("thumbnailGutterHeight","gutterHeight","l1"),c("thumbnailL1GutterHeight","gutterHeight","l1"),u.galleryDisplayMode.lN=u.O.galleryDisplayMode.toUpperCase(),u.galleryDisplayMode.l1=null!=u.O.galleryL1DisplayMode?u.O.galleryL1DisplayMode.toUpperCase():u.O.galleryDisplayMode.toUpperCase(),u.galleryMaxRows.lN=u.O.galleryMaxRows,u.galleryMaxRows.l1="number"==r(u.O.galleryL1MaxRows)?u.O.galleryL1MaxRows:u.O.galleryMaxRows,u.galleryLastRowFull.lN=u.O.galleryLastRowFull,u.galleryLastRowFull.l1=null!=u.O.galleryL1LastRowFull?u.O.galleryL1LastRowFull:u.O.galleryLastRowFull,u.gallerySorting.lN=u.O.gallerySorting.toUpperCase(),u.gallerySorting.l1=null!=u.O.galleryL1Sorting?u.O.galleryL1Sorting.toUpperCase():u.gallerySorting.lN,u.galleryDisplayTransition.lN=u.O.galleryDisplayTransition.toUpperCase(),u.galleryDisplayTransition.l1=null!=u.O.galleryL1DisplayTransition?u.O.galleryL1DisplayTransition.toUpperCase():u.galleryDisplayTransition.lN,u.galleryDisplayTransitionDuration.lN=u.O.galleryDisplayTransitionDuration,u.galleryDisplayTransitionDuration.l1=null!=u.O.galleryL1DisplayTransitionDuration?u.O.galleryL1DisplayTransitionDuration:u.galleryDisplayTransitionDuration.lN,u.galleryMaxItems.lN=u.O.galleryMaxItems,u.galleryMaxItems.l1="number"==r(u.O.galleryL1MaxItems)?u.O.galleryL1MaxItems:u.O.galleryMaxItems,u.galleryFilterTags.lN=u.O.galleryFilterTags,u.galleryFilterTags.l1=null!=u.O.galleryL1FilterTags?u.O.galleryL1FilterTags:u.O.galleryFilterTags,u.galleryFilterTagsMode.lN=u.O.galleryFilterTagsMode,u.galleryFilterTagsMode.l1=null!=u.O.galleryL1FilterTagsMode?u.O.galleryL1FilterTagsMode:u.O.galleryFilterTagsMode,u.O.galleryPaginationMode=u.O.galleryPaginationMode.toUpperCase(),"number"==r(u.O.slideshowDelay)&&u.O.slideshowDelay>=2e3?u.VOM.slideshowDelay=u.O.slideshowDelay:d(u,'Parameter "slideshowDelay" must be an integer >= 2000 ms.');"boolean"==typeof u.O.thumbnailDisplayTransition&&(!0===u.O.thumbnailDisplayTransition?(u.tn.opt.lN.displayTransition="FADEIN",u.tn.opt.l1.displayTransition="FADEIN"):(u.tn.opt.lN.displayTransition="NONE",u.tn.opt.l1.displayTransition="NONE"));""!==u.O.fnThumbnailDisplayEffect&&(u.tn.opt.lN.displayTransition="CUSTOM",u.tn.opt.l1.displayTransition="CUSTOM");""!==u.O.fnThumbnailL1DisplayEffect&&(u.tn.opt.l1.displayTransition="CUSTOM");function m(e,t){if("string"==typeof e){var n=e.split("_");1==n.length&&(u.tn.opt[t].displayTransition=e.toUpperCase()),2==n.length&&(u.tn.opt[t].displayTransition=n[0].toUpperCase(),u.tn.opt[t].displayTransitionStartVal=Number(n[1])),3==n.length&&(u.tn.opt[t].displayTransition=n[0].toUpperCase(),u.tn.opt[t].displayTransitionStartVal=Number(n[1]),u.tn.opt[t].displayTransitionEasing=n[2])}}l("thumbnailDisplayTransitionEasing","thumbnailL1DisplayTransitionEasing","displayTransitionEasing"),m(u.O.thumbnailDisplayTransition,"lN"),m(u.O.thumbnailDisplayTransition,"l1"),m(u.O.thumbnailL1DisplayTransition,"l1"),l("thumbnailDisplayTransitionDuration","thumbnailL1DisplayTransitionDuration","displayTransitionDuration"),l("thumbnailDisplayInterval","thumbnailL1DisplayInterval","displayInterval"),l("thumbnailDisplayOrder","thumbnailL1DisplayOrder","displayOrder"),void 0!==u.O.thumbnailSizeSM&&(u.O.breakpointSizeSM=u.O.thumbnailSizeSM);void 0!==u.O.thumbnailSizeME&&(u.O.breakpointSizeME=u.O.thumbnailSizeME);void 0!==u.O.thumbnailSizeLA&&(u.O.breakpointSizeLA=u.O.thumbnailSizeLA);void 0!==u.O.thumbnailSizeXL&&(u.O.breakpointSizeXL=u.O.thumbnailSizeXL);if(void 0!==u.O.thumbnailL1BuildInit2){var p=u.O.thumbnailL1BuildInit2.split("|");for(n=0;n<p.length;n++){if(3==(g=p[n].trim().split("_")).length)(f=re()).element=ie(g[0],""),f.property=g[1],f.value=g[2],u.tn.buildInit.level1.push(f)}}if(void 0!==u.O.thumbnailBuildInit2)for(p=u.O.thumbnailBuildInit2.split("|"),n=0;n<p.length;n++){var g,f;if(3==(g=p[n].trim().split("_")).length)(f=re()).element=ie(g[0],""),f.property=g[1],f.value=g[2],u.tn.buildInit.std.push(f)}var b=u.O.thumbnailL1HoverEffect2;if(void 0!==b)switch(r(b)){case"string":{let e=b.split("|");for(n=0;n<e.length;n++){let t=oe();t=ne(e[n].trim(),t),null!=t&&u.tn.hoverEffects.level1.push(t)}break}case"object":{let e=oe();e=jQuery.extend(e,b),e=ne(e.name,e),null!=e&&u.tn.hoverEffects.level1.push(e);break}case"array":for(n=0;n<b.length;n++){let e=oe();e=jQuery.extend(e,b[n]),e=ne(e.name,e),null!=e&&u.tn.hoverEffects.level1.push(e)}break;case"null":break;default:h(u,'incorrect parameter for "thumbnailL1HoverEffect2".')}u.tn.hoverEffects.level1=ae(u.tn.hoverEffects.level1);var v=u.O.thumbnailHoverEffect2;switch(r(v)){case"string":{let e=v.split("|");for(n=0;n<e.length;n++){let t=oe();t=ne(e[n].trim(),t),null!=t&&u.tn.hoverEffects.std.push(t)}break}case"object":{let e=oe();e=jQuery.extend(e,v),e=ne(e.name,e),null!=e&&u.tn.hoverEffects.std.push(e);break}case"array":for(n=0;n<v.length;n++){let e=oe();e=jQuery.extend(e,v[n]),e=ne(e.name,e),null!=e&&u.tn.hoverEffects.std.push(e)}break;case"null":break;default:h(u,'incorrect parameter for "thumbnailHoverEffect2".')}u.tn.hoverEffects.std=ae(u.tn.hoverEffects.std),null==u.O.touchAnimationL1&&(u.O.touchAnimationL1=u.O.touchAnimation);0==u.tn.hoverEffects.std.length&&(0==u.tn.hoverEffects.level1.length&&(u.O.touchAnimationL1=!1),u.O.touchAnimation=!1);0!=u.O.thumbnailHeight&&""!=u.O.thumbnailHeight||(u.O.thumbnailHeight="auto");0!=u.O.thumbnailWidth&&""!=u.O.thumbnailWidth||(u.O.thumbnailWidth="auto");0!=u.O.thumbnailL1Height&&""!=u.O.thumbnailL1Height||(u.O.thumbnailL1Height="auto");0!=u.O.thumbnailL1Width&&""!=u.O.thumbnailL1Width||(u.O.thumbnailL1Width="auto");c("thumbnailWidth","width","lN"),c("thumbnailWidth","width","l1"),c("thumbnailL1Width","width","l1"),c("thumbnailHeight","height","lN"),c("thumbnailHeight","height","l1"),c("thumbnailL1Height","height","l1"),u.O.thumbnailLabelHeight=parseInt(u.O.thumbnailLabelHeight),null!=u.O.galleryMosaic&&(u.tn.settings.mosaic.l1.xs=JSON.parse(JSON.stringify(u.O.galleryMosaic)),u.tn.settings.mosaic.l1.sm=JSON.parse(JSON.stringify(u.O.galleryMosaic)),u.tn.settings.mosaic.l1.me=JSON.parse(JSON.stringify(u.O.galleryMosaic)),u.tn.settings.mosaic.l1.la=JSON.parse(JSON.stringify(u.O.galleryMosaic)),u.tn.settings.mosaic.l1.xl=JSON.parse(JSON.stringify(u.O.galleryMosaic)),u.tn.settings.mosaic.lN.xs=JSON.parse(JSON.stringify(u.O.galleryMosaic)),u.tn.settings.mosaic.lN.sm=JSON.parse(JSON.stringify(u.O.galleryMosaic)),u.tn.settings.mosaic.lN.me=JSON.parse(JSON.stringify(u.O.galleryMosaic)),u.tn.settings.mosaic.lN.la=JSON.parse(JSON.stringify(u.O.galleryMosaic)),u.tn.settings.mosaic.lN.xl=JSON.parse(JSON.stringify(u.O.galleryMosaic)),u.tn.settings.mosaicCalcFactor("l1","xs"),u.tn.settings.mosaicCalcFactor("l1","sm"),u.tn.settings.mosaicCalcFactor("l1","me"),u.tn.settings.mosaicCalcFactor("l1","la"),u.tn.settings.mosaicCalcFactor("l1","xl"),u.tn.settings.mosaicCalcFactor("lN","xs"),u.tn.settings.mosaicCalcFactor("lN","sm"),u.tn.settings.mosaicCalcFactor("lN","me"),u.tn.settings.mosaicCalcFactor("lN","la"),u.tn.settings.mosaicCalcFactor("lN","xl"));null!=u.O.galleryL1Mosaic&&(u.tn.settings.mosaic.l1.xs=JSON.parse(JSON.stringify(u.O.galleryL1Mosaic)),u.tn.settings.mosaic.l1.sm=JSON.parse(JSON.stringify(u.O.galleryL1Mosaic)),u.tn.settings.mosaic.l1.me=JSON.parse(JSON.stringify(u.O.galleryL1Mosaic)),u.tn.settings.mosaic.l1.la=JSON.parse(JSON.stringify(u.O.galleryL1Mosaic)),u.tn.settings.mosaic.l1.xl=JSON.parse(JSON.stringify(u.O.galleryL1Mosaic)),u.tn.settings.mosaicCalcFactor("l1","xs"),u.tn.settings.mosaicCalcFactor("l1","sm"),u.tn.settings.mosaicCalcFactor("l1","me"),u.tn.settings.mosaicCalcFactor("l1","la"),u.tn.settings.mosaicCalcFactor("l1","xl"));for(var O=["xs","sm","me","la","xl"],y=0;y<O.length;y++)null!=u.O["galleryMosaic"+O[y].toUpperCase()]&&(u.tn.settings.mosaic.lN[O[y]]=JSON.parse(JSON.stringify(u.O["galleryMosaic"+O[y].toUpperCase()])),u.tn.settings.mosaic.l1[O[y]]=JSON.parse(JSON.stringify(u.O["galleryMosaic"+O[y].toUpperCase()])),u.tn.settings.mosaicCalcFactor("lN",O[y]),u.tn.settings.mosaicCalcFactor("l1",O[y]));for(y=0;y<O.length;y++)null!=u.O["galleryL1Mosaic"+O[y].toUpperCase()]&&(u.tn.settings.mosaic.l1[O[y]]=JSON.parse(JSON.stringify(u.O["galleryL1Mosaic"+O[y].toUpperCase()])),u.tn.settings.mosaicCalcFactor("l1",O[y]));switch(u.O.imageTransition=u.O.imageTransition.toUpperCase(),u.layout.SetEngine(),u.O.kind){case"":break;default:jQuery.nanogallery2["data_"+u.O.kind](u,"Init")}}(),function(){Function.prototype.bind||(Function.prototype.bind=function(e){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var t=Array.prototype.slice.call(arguments,1),n=this,i=function(){},a=function(){return n.apply(this instanceof i&&e?this:e,t.concat(Array.prototype.slice.call(arguments)))};return i.prototype=this.prototype,a.prototype=new i,a});
// thanks to @lichtamberg - https://github.com/lichtamberg
(function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var i=(new Date).getTime(),a=Math.max(0,16-(i-e)),o=window.setTimeout((function(){t(i+a)}),a);return e=i+a,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})})(),Array.prototype.removeIf=function(e){for(var t=this.length;t--;)e(this[t],t)&&this.splice(t,1)},String.prototype.startsWith||(String.prototype.startsWith=function(e,t){return t=t||0,this.indexOf(e,t)===t})}(),function(){var e=u.$E.base.children();e.length>0&&(u.O.$markup=e);if(!u.O.lightboxStandalone){u.$E.base.text(""),u.$E.base.addClass("ngy2_container"),u.$E.base.addClass(u.O.theme),function(){void 0!==u.O.colorScheme&&(u.O.galleryTheme=u.O.colorScheme);var e=null,t="";switch(r(u.O.galleryTheme)){case"object":e=u.galleryTheme_dark,jQuery.extend(!0,e,u.O.galleryTheme),t="nanogallery_gallerytheme_custom_"+u.baseEltID;break;case"string":switch(u.O.galleryTheme){case"light":e=u.galleryTheme_light,t="nanogallery_gallerytheme_light_"+u.baseEltID;break;case"default":case"dark":case"none":default:e=u.galleryTheme_dark,t="nanogallery_gallerytheme_dark_"+u.baseEltID}break;default:return void h(u,"Error in galleryTheme parameter.")}var n="."+t+" ",i=e.navigationBar,a=n+".nGY2Navigationbar { background:"+i.background+"; }\n";void 0!==i.border&&""!==i.border&&(a+=n+".nGY2Navigationbar { border:"+i.border+"; }\n");void 0!==i.borderTop&&""!==i.borderTop&&(a+=n+".nGY2Navigationbar { border-top:"+i.borderTop+"; }\n");void 0!==i.borderBottom&&""!==i.borderBottom&&(a+=n+".nGY2Navigationbar { border-bottom:"+i.borderBottom+"; }\n");void 0!==i.borderRight&&""!==i.borderRight&&(a+=n+".nGY2Navigationbar { border-right:"+i.borderRight+"; }\n");void 0!==i.borderLeft&&""!==i.borderLeft&&(a+=n+".nGY2Navigationbar { border-left:"+i.borderLeft+"; }\n");i=e.navigationBreadcrumb;a+=n+".nGY2Breadcrumb { background:"+i.background+"; border-radius:"+i.borderRadius+"; }\n",a+=n+".nGY2Breadcrumb .oneItem  { color:"+i.color+"; }\n",a+=n+".nGY2Breadcrumb .oneItem:hover { color:"+i.colorHover+"; }\n";i=e.navigationFilter;a+=n+".nGY2NavFilterUnselected { color:"+i.color+"; background:"+i.background+"; border-radius:"+i.borderRadius+"; }\n",a+=n+".nGY2NavFilterSelected { color:"+i.colorSelected+"; background:"+i.backgroundSelected+"; border-radius:"+i.borderRadius+"; }\n",a+=n+".nGY2NavFilterSelectAll { color:"+i.colorSelected+"; background:"+i.background+"; border-radius:"+i.borderRadius+"; }\n";i=e.navigationPagination;a+=n+".nGY2NavPagination { color:"+i.color+"; background:"+i.background+"; border-radius:"+i.borderRadius+"; }\n",a+=n+".nGY2NavPagination:hover { color:"+i.colorHover+"; }\n";i=e.thumbnail;a+=n+".nGY2GThumbnail { border-radius: "+i.borderRadius+"; background:"+i.background+"; border-color:"+i.borderColor+"; }\n",a+=n+".nGY2GThumbnail_l1 { border-top-width:"+u.tn.opt.l1.borderVertical+"px; border-right-width:"+u.tn.opt.l1.borderHorizontal+"px; border-bottom-width:"+u.tn.opt.l1.borderVertical+"px; border-left-width:"+u.tn.opt.l1.borderHorizontal+"px;}\n",a+=n+".nGY2GThumbnail_lN { border-top-width:"+u.tn.opt.lN.borderVertical+"px; border-right-width:"+u.tn.opt.lN.borderHorizontal+"px; border-bottom-width:"+u.tn.opt.lN.borderVertical+"px; border-left-width:"+u.tn.opt.lN.borderHorizontal+"px;}\n",a+=n+".nGY2GThumbnailStack { background:"+i.stackBackground+"; }\n",a+=n+".nGY2TnImgBack { background:"+i.background+"; background-image:"+i.backgroundImage+"; }\n",a+=n+".nGY2GThumbnailAlbumUp { background:"+i.background+"; background-image:"+i.backgroundImage+"; color:"+e.thumbnail.titleColor+"; }\n",a+=n+".nGY2GThumbnailIconsFullThumbnail { color:"+i.titleColor+"; }\n",a+=n+".nGY2GThumbnailLabel { background:"+i.labelBackground+"; opacity:"+i.labelOpacity+"; }\n",a+=n+".nGY2GThumbnailImageTitle  { color:"+i.titleColor+"; background-color:"+i.titleBgColor+"; "+(""==i.titleShadow?"":"Text-Shadow:"+i.titleShadow+";")+" }\n",a+=n+".nGY2GThumbnailAlbumTitle { color:"+i.titleColor+"; background-color:"+i.titleBgColor+"; "+(""==i.titleShadow?"":"Text-Shadow:"+i.titleShadow+";")+" }\n",a+=n+".nGY2GThumbnailDescription { color:"+i.descriptionColor+"; background-color:"+i.descriptionBgColor+"; "+(""==i.descriptionShadow?"":"Text-Shadow:"+i.descriptionShadow+";")+" }\n";i=e.thumbnailIcon;a+=n+".nGY2GThumbnailIcons { padding:"+i.padding+"; }\n",a+=n+".nGY2GThumbnailIcon { color:"+i.color+"; "+(""==i.shadow?"":"Text-Shadow:"+i.shadow+";")+" }\n",a+=n+".nGY2GThumbnailIconTextBadge { background-color:"+i.color+"; }\n";i=e.pagination;"NUMBERS"!=u.O.galleryPaginationMode?(a+=n+".nGY2paginationDot { border:"+i.shapeBorder+"; background:"+i.shapeColor+";}\n",a+=n+".nGY2paginationDotCurrentPage { border:"+i.shapeBorder+"; background:"+i.shapeSelectedColor+";}\n",a+=n+".nGY2paginationRectangle { border:"+i.shapeBorder+"; background:"+i.shapeColor+";}\n",a+=n+".nGY2paginationRectangleCurrentPage { border:"+i.shapeBorder+"; background:"+i.shapeSelectedColor+";}\n"):(a+=n+".nGY2paginationItem { background:"+i.background+"; color:"+i.color+"; border-radius:"+i.borderRadius+"; }\n",a+=n+".nGY2paginationItemCurrentPage { background:"+i.background+"; color:"+i.color+"; border-radius:"+i.borderRadius+"; }\n",a+=n+".nGY2PaginationPrev { background:"+i.background+"; color:"+i.color+"; border-radius:"+i.borderRadius+"; }\n",a+=n+".nGY2PaginationNext { background:"+i.background+"; color:"+i.color+"; border-radius:"+i.borderRadius+"; }\n",a+=n+".nGY2paginationItemCurrentPage { background:"+i.backgroundSelected+"; }\n");i=e.thumbnail;a+=n+".nGY2GalleryMoreButtonAnnotation { background:"+i.background+"; border-color:"+i.borderColor+"; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;}\n",a+=n+".nGY2GalleryMoreButtonAnnotation  { color:"+i.titleColor+"; "+(""==i.titleShadow?"":"Text-Shadow:"+i.titleShadow)+"; }\n",jQuery("head").append('<style id="ngycs_'+u.baseEltID+'">'+a+"</style>"),u.$E.base.addClass(t)}(),u.O.thumbnailLabel.get("hideIcons")&&(u.O.icons.thumbnailAlbum="",u.O.icons.thumbnailImage="");var t="";switch(null!=u.O.navigationFontSize&&""!=u.O.navigationFontSize&&(t=' style="font-size:'+u.O.navigationFontSize+';"'),u.$E.conNavigationBar=jQuery('<div class="nGY2Navigationbar" '+t+"></div>").appendTo(u.$E.base),u.$E.conLoadingB=jQuery('<div class="nanoGalleryLBarOff"><div></div><div></div><div></div><div></div><div></div></div>').appendTo(u.$E.base),u.$E.conTnParent=jQuery('<div class="nGY2Gallery"></div>').appendTo(u.$E.base),u.$E.conTn=jQuery('<div class="nGY2GallerySub"></div>').appendTo(u.$E.conTnParent),u.O.thumbnailAlignment){case"left":u.$E.conTnParent.css({"text-align":"left"});break;case"right":u.$E.conTnParent.css({"text-align":"right"})}if(void 0!==u.O.galleryBuildInit2)for(var n=u.O.galleryBuildInit2.split("|"),i=0;i<n.length;i++){var a=n[i].split("_");2==a.length&&u.$E.conTn.css(a[0],a[1])}for(var o=u.tn.hoverEffects.std.concat(u.tn.hoverEffects.level1),l=0;l<o.length;l++)switch(o[l].type){case"scale":case"rotateZ":case"rotateX":case"rotateY":case"translateX":case"translateY":".nGY2GThumbnail"==o[l].element&&(u.$E.base.css("overflow","visible"),u.$E.base.find(".nGY2GallerySub").css("overflow","visible"),u.$E.conTnParent.css("overflow","visible"))}if(u.$E.conTnBottom=jQuery('<div class="nGY2GalleryBottom" '+t+"></div>").appendTo(u.$E.conTnParent),u.O.portable){var s="font-weight:bold !important;color: #FF0075 !important;font-size: 14px !important;text-transform: lowercase !important;cursor:pointer !important;text-align: center !important;Text-Shadow: #000000 1px 0px 0px, #000000 1px 1px 0px, #000000 1px -1px 0px, #000000 -1px 1px 0px, #000000 -1px 0px 0px, #000000 -1px -1px 0px, #000000 0px 1px 0px, #000000 0px -1px 0px !important;";u.$E.ngy2i=jQuery('<div class="nGY2PortInfo"><a href="http://nano.gallery" target="_blank" title="nanogallery2 | easy photo gallery for your website" style="'+s+'"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4QgDBCAWVVC/hwAABRxJREFUSMetll9oVFcexz/nnDvJRBmSzWTrmD9uNGZsHta0/qFIFQTxRcnCBgTFNlX0YR8W+1AK9lGwCBJYgn0KKr5136S4gpUQTR4caJRslcxYWV3iaphQapJJppO5957z60Mmk4mN1q75wg/OPefc+/v9vt/fueenKEFEqICqsNWAVNiCA7XwaS0iZeejo6OIiCltdIBdJXMLOYp5/PjxsoTVS5nr0mYDJIE/lObeBhaYAn4oJbboAwBvBedHJicnPx8YGGh/8eJF1dvKoJSShoYGf//+/Zl4PP4l8M2yIEoSLErx6c2bN6W1tXVRglWzLVu2SCqVEhE5LiI457SIoEREW2udMaZtcnLy+2QyWZ3L5XRHR4f+4MNdoBUahUJhcWilmZ/NE4ZhOQHn3LIi1lqjtS6vjY6O8uTJE9vc3MyDBw+mYrHYn0Uk63me8gCtlHLA7uHh4bW5XC7oePddPTQ8xHffDjM/PYe3thqMws35iAcHPj5ENBp9Yxmy2Sw7d+40z549C+7du9ewb9++D6y13wDaK+kE0DAzMyNKKbXtvfd5EfzM+Ef/4C+8x23+wzPm+IhtfMf3/Ksuyl+7u9FaY63l+vXrpFIpCoUCmzdvpquri9bWVoIgQClFIpFg48aNPH/+XE9NTQkQLTGmvEXKRERprZWIEIYhQRjQbN6hmUb+tCaPNnM055v40f3If7XBGMPT8af0fNLD0NDQsozPnDlDb28vx44dIwxDRARrLSKCKmUbiUQQkWWnoLJ20UpjFYAjVA6rBJTFV5ZIJIIfBBw4eICxsTHq6uo4dOgQ8XicgYEB7t69y/Hjx4nH43R1dVHB8q+w4hlXSmGd5edwmjCco5DLkZ+aJvTnyIdTrFmzhn9+/TVjY2M0NTVx+/Zt+vv7OXfuHKlUip6eHgBOnz6N7/vlYl0JKzIw78/T+sdGbn6yjf5ZS2HtJgIP+mcC5kySI1uSXPjqAlprTp06RWdnJ8ViEaUUVVVVnD9/nqtXr5LJZHj48CFbt279fQEEYUisZi2fXel9bWU750gmkwRBgNYaz/Ow1lJfX088Hmd2dpZcLvdaBl4pgQChH4B1iHU4a8E6Qj9ARGhpaUFrzeDgIJFIBGMM1lqMMWQyGSYmJohEIqxfv/7314CIoADtGTAaZTTaLI2VUhw+fBjnHBcvXuTy5cs45/A8j3Q6zcmTJ/F9n71799LW1rbgSOs3D+B1lBljcM7R3d3N0aNHKRQKnDhxgs7OTnbt2sX27dsZGRkhHo/T19e3+Kt/fQ1YawFwzolSCs/zUEqVtX1VcJcuXSKRSNDf3086nS6v79mzh76+Pjo6OigWi1RXV2OMWZC29PL8/PxSAL7vE41Gf4rFYkpEePToEb7vU1VVxW+ht7eXs2fPcv/+fQqFAps2baKlpaW8Xl1dTS6XY3x8HBFxtbW1BiiW4hAlInp8fNxt2LChPZvN/ru9vT2Sz+e93bt3qx07diwrzJWYcM5RU1NDNBots5bP53HOlS+kO3fuMDIy4hKJhKTT6ena2tqtxWJxoqamRr98HX9x7do1qaurExYaiXCVzK5bt04GBwdFRP728nVcWZAO+Hsmk/nsxo0bTTMzM5FXHZ83hYhQX1/vHzx48H9tbW1ngSsVvpYCmJ2dJRaLKRbapjpgOxB7K+9LmAbuAnOAnpiYcI2NjUsRLlo2myUMQ1M5t5rmnDO3bt1aNlfmd4W2XL/0/H8pUDF2rNCW/wLRuCkxx8V6wgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wOC0wM1QwNDozMjoyMi0wNDowMO7mdkwAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDgtMDNUMDQ6MzI6MjItMDQ6MDCfu87wAAAAAElFTkSuQmCC" style="height:32px !important;width:initial !important;box-shadow: none !important;vertical-align: middle !important;"/> &nbsp; nanogallery2</a></div>').appendTo(u.$E.base),u.$E.ngy2i.find("a").on({mouseenter:function(){jQuery(this).attr("style",s)},mouseleave:function(){jQuery(this).attr("style",s)}})}}if(u.$E.conConsole=jQuery('<div class="nGY2ConsoleParent"></div>').appendTo(u.$E.base),function(){u.i18nLang=(navigator.language||navigator.userLanguage).toUpperCase(),"UNDEFINED"===u.i18nLang&&(u.i18nLang="");var e=-("_"+u.i18nLang).length;if("object"==r(u.O.i18n))for(var t in u.O.i18n){var n=t.substr(e);n=="_"+u.i18nLang?u.i18nTranslations[t.substr(0,t.length-n.length)]=u.O.i18n[t]:u.i18nTranslations[t]=u.O.i18n[t]}}(),!u.O.lightboxStandalone)switch(function(){le(u.O.thumbnailLabel,"lN"),void 0!==u.O.thumbnailL1Label?le(u.O.thumbnailL1Label,"l1"):le(u.O.thumbnailLabel,"l1");u.O.thumbnailL1Label&&u.O.thumbnailL1Label.display&&le(u.O.thumbnailL1Label,"l1");for(var e=["xs","sm","me","la","xl"],t=0;t<e.length;t++){if("auto"!=(i=u.tn.settings.width.lN[e[t]]))u.tn.defaultSize.width.lN[e[t]]=i,u.tn.defaultSize.width.l1[e[t]]=i;else{var n=u.tn.settings.height.lN[e[t]];u.tn.defaultSize.width.lN[e[t]]=n,u.tn.defaultSize.width.l1[e[t]]=n}}for(t=0;t<e.length;t++){if("auto"!=(n=u.tn.settings.height.lN[e[t]]))u.tn.defaultSize.height.lN[e[t]]=n,u.tn.defaultSize.height.l1[e[t]]=n;else{var i=u.tn.settings.width.lN[e[t]];u.tn.defaultSize.height.lN[e[t]]=i,u.tn.defaultSize.height.l1[e[t]]=i}}for(t=0;t<e.length;t++){if("auto"!=(i=u.tn.settings.width.l1[e[t]]))u.tn.defaultSize.width.l1[e[t]]=i;else{n=u.tn.settings.height.l1[e[t]];u.tn.defaultSize.width.l1[e[t]]=n}}for(t=0;t<e.length;t++){if("auto"!=(n=u.tn.settings.height.l1[e[t]]))u.tn.defaultSize.height.l1[e[t]]=n;else{i=u.tn.settings.width.l1[e[t]];u.tn.defaultSize.height.l1[e[t]]=i}}}(),u.tn.opt.Get("displayTransition")){case"SCALEDOWN":case"RANDOMSCALE":default:u.$E.base.css("overflow","visible"),u.$E.conTnParent.css("overflow","visible"),u.$E.conTn.css("overflow","visible")}}(),u.GOM.firstDisplayTime=Date.now(),function(){u.O.lightboxStandalone||(u.$E.conTnParent.on({mouseenter:be,mouseleave:ve},".nGY2GThumbnail"),u.GOM.hammertime=new NGHammer(u.$E.conTn[0]),u.GOM.hammertime.on("pan",(function(e){u.VOM.viewerDisplayed||u.O.paginationSwipe&&u.layout.support.rows&&"PAGINATION"==u.galleryDisplayMode.Get()&&(Math.abs(e.deltaY)>u.GOM.panThreshold&&(u.GOM.panYOnly=!0),u.GOM.panYOnly||u.$E.conTn.css(u.CSStransformName,"translate("+e.deltaX+"px,0px)"))})),u.GOM.hammertime.on("panend",(function(e){if(!u.VOM.viewerDisplayed&&u.O.paginationSwipe&&u.layout.support.rows&&"PAGINATION"==u.galleryDisplayMode.Get()){if(!u.GOM.panYOnly){if(e.deltaX>50)return void G();if(e.deltaX<-50)return void y()}u.GOM.panYOnly=!1,u.$E.conTn.css(u.CSStransformName,"translate(0px,0px)")}})),u.GOM.hammertime.on("tap",(function(e){if(!u.VOM.viewerDisplayed)if(e.srcEvent.stopPropagation(),e.srcEvent.preventDefault(),"mouse"==e.pointerType){if("exit"==ue(e.srcEvent))return}else{var t=Oe(e.srcEvent,!1);if(-1==t.GOMidx)return;if("NONE"!=t.action&&"OPEN"!=t.action)return void ue(e.srcEvent);if(u.GOM.slider.hostIdx==t.GOMidx)return j(),void ye(u.GOM.items[u.GOM.slider.currentIdx].thumbnailIdx,!0);if("l1"==u.GOM.curNavLevel&&0==u.O.touchAnimationL1||"lN"==u.GOM.curNavLevel&&0==u.O.touchAnimation)return void ye(u.GOM.items[t.GOMidx].thumbnailIdx,!0);u.O.touchAutoOpenDelay>0?(j(),W(t.GOMidx),window.clearInterval(u.touchAutoOpenDelayTimerID),u.touchAutoOpenDelayTimerID=window.setInterval((function(){window.clearInterval(u.touchAutoOpenDelayTimerID),ye(u.GOM.items[t.GOMidx].thumbnailIdx,!0)}),u.O.touchAutoOpenDelay)):u.I[u.GOM.items[t.GOMidx].thumbnailIdx].hovered?ye(u.GOM.items[t.GOMidx].thumbnailIdx,!0):(j(),W(t.GOMidx))}})),u.O.locationHash&&jQuery(window).on("hashchange.nanogallery2."+u.baseEltID,(function(){ot()})));if(jQuery(window).on("resize.nanogallery2."+u.baseEltID+" orientationChange.nanogallery2."+u.baseEltID,s(lt,u.O.eventsDebounceDelay,!1)),jQuery(window).on("scroll.nanogallery2."+u.baseEltID,s(st,u.O.eventsDebounceDelay,!1)),!u.O.lightboxStandalone){u.$E.scrollableParent=it(u.$E.base[0]);var e=it(u.$E.base[0]);null!==e&&(u.$E.scrollableParent=jQuery(e),u.$E.scrollableParent.on("scroll.nanogallery2."+u.baseEltID,s(st,u.O.eventsDebounceDelay,!1)))}u.VOM.toolsHide=s(Ye,u.O.viewerHideToolsDelay,!1),jQuery(document).keyup((function(e){if(u.popup.isDisplayed)switch(e.keyCode){case 27:u.popup.close()}else if(u.VOM.viewerDisplayed)switch(Ae(),e.keyCode){case 27:case 40:case 38:tt();break;case 32:case 13:He();break;case 39:case 33:Qe();break;case 37:case 34:qe()}})),jQuery(window).bind("mousewheel wheel",(function(e){if(u.VOM.viewerDisplayed&&"img"==u.VOM.content.current.NGY2Item().mediaKind){var t=0;e.preventDefault(),Ie()&&(e.originalEvent.deltaY?t=e.originalEvent.deltaY:e.originalEvent.wheelDelta&&(t=-e.originalEvent.wheelDelta),Te(t<=0))}})),jQuery(window).bind("mousemove",(function(e){u.VOM.viewerDisplayed&&0==u.VOM.toolbarsDisplayed&&(u.VOM.singletapTime=(new Date).getTime(),s(Ae,100,!1)())})),ngscreenfull.enabled&&ngscreenfull.onchange((function(){u.VOM.viewerDisplayed&&(ngscreenfull.isFullscreen?(u.VOM.viewerIsFullscreen=!0,u.VOM.$viewer.find(".fullscreenButton").html(u.O.icons.viewerFullscreenOff)):(u.VOM.viewerIsFullscreen=!1,u.VOM.$viewer.find(".fullscreenButton").html(u.O.icons.viewerFullscreenOn)))}))}(),!u.O.lightboxStandalone){var o=u.O.album;if(""==o&&""!=u.O.photoset&&(o=u.O.photoset,u.O.album=u.O.photoset),""!=o&&(u.O.displayBreadcrumb=!1,"NONE"!=o.toUpperCase()))return"nano_photos_provider2"==u.O.kind&&o==decodeURIComponent(o)&&(o=encodeURIComponent(o),u.O.album=o),NGY2Item.New(u,"","",o,"-1","album"),void(ot()||g("-1",o))}NGY2Item.New(u,u.i18nTranslations.breadcrumbHome,"","0","-1","album"),ot()||function(){if(u.O.lightboxStandalone)!function(){if(u.GOM.curNavLevel="l1",null==u.O.items){var e=jQuery("[data-nanogallery2-Lightbox"),t=u.$E.base[0].dataset.nanogallery2Lgroup;te(e,t)}else K();m()}();else if(""!=u.O.openOnStart){var e=p(u.O.openOnStart);"0"!=e.imageID?Q(e.imageID,e.albumID):g("-1",e.albumID)}else g("-1",0)}()};var Z={youtube:{getID:function(e){var t=e.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);return null!=t?t[1]:null},thumbUrl:function(e){return"https://img.youtube.com/vi/"+e+"/hqdefault.jpg"},url:function(e){return"https://www.youtube.com/embed/"+e},markup:function(e){return'<iframe class="nGY2ViewerMedia" src="https://www.youtube.com/embed/'+e+'?rel=0" frameborder="0" allow="autoplay" allowfullscreen></iframe>'},kind:"iframe"},vimeo:{getID:function(e){var t=e.match(/(http|https)?:\/\/(www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|)(\d+)(?:|\/\?)/);return null!=t?t[4]:null},url:function(e){return"https://player.vimeo.com/video/"+e},markup:function(e){return'<iframe class="nGY2ViewerMedia" src="https://player.vimeo.com/video/'+e+'" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'},kind:"iframe"},dailymotion:{getID:function(e){var t=e.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);return null!==t?void 0!==t[4]?t[4]:t[2]:null},thumbUrl:function(e){return"https://www.dailymotion.com/thumbnail/video/"+e},url:function(e){return"https://www.dailymotion.com/embed/video/"+e},markup:function(e){return'<iframe class="nGY2ViewerMedia" src="https://www.dailymotion.com/embed/video/'+e+'?rel=0" frameborder="0" allow="autoplay" allowfullscreen></iframe>'},kind:"iframe"},selfhosted:{getID:function(e){var t=e.split(".").pop();return"mp4"===t||"webm"===t||"ogv"===t||"3gp"===t?t:null},markup:function(e){var t=e.split(".").pop();return'<video controls class="nGY2ViewerMedia"><source src="'+e+'" type="video/'+t+'" preload="auto">Your browser does not support the video tag (HTML 5).</video>'},kind:"video",selfhosted:!0}};function J(e){if(null==e)return!1;return!!/^((http|https|ftp|ftps|file):\/\/)/.test(e)}function K(){var e=0,t=NGY2Tools.AlbumPostProcess.bind(u);u.I[0].contentIsLoaded=!0,jQuery.each(u.O.items,(function(n,a){var o="";void 0===(o=ct(a,"title"))&&(o="");var r="";J(r=void 0!==a["src"+ht().toUpperCase()]?a["src"+ht().toUpperCase()]:a.src)||(r=u.O.itemsBaseURL+r);var l="";void 0!==a.srct&&a.srct.length>0?J(l=a.srct)||(l=u.O.itemsBaseURL+l):l=r,""!=u.O.thumbnailLabel.get("title")&&(o=GetImageTitle(r));var s="";void 0===(s=ct(a,"description"))&&(s="");var c=ct(a,"tags");void 0===c&&(c="");var h=0;void 0!==a.albumID&&(h=a.albumID,!0);var d=null;void 0!==a.ID&&(d=a.ID);var m="image";void 0!==a.kind&&a.kind.length>0&&(m=a.kind);var p=NGY2Item.New(u,o,s,d,h,m,c);""!=o&&e++,p.setMediaURL(r,"img"),jQuery.each(Z,(function(e,t){var n=t.getID(r);if(null!=n)return"function"==typeof t.url&&(r=t.url(n)),"function"==typeof t.thumbUrl&&(l=t.thumbUrl(n)),p.mediaKind=t.kind,p.mediaMarkup=t.selfhosted?t.markup(r):t.markup(n),!1})),void 0!==a.imageWidth&&(p.imageWidth=a.width),void 0!==a.imageHeight&&(p.imageHeight=a.height);var g=void 0!==a.imgtWidth?a.imgtWidth:0,f=void 0!==a.imgtHeight?a.imgtHeight:0;if(p.thumbs={url:{l1:{xs:l,sm:l,me:l,la:l,xl:l},lN:{xs:l,sm:l,me:l,la:l,xl:l}},width:{l1:{xs:g,sm:g,me:g,la:g,xl:g},lN:{xs:g,sm:g,me:g,la:g,xl:g}},height:{l1:{xs:f,sm:f,me:f,la:f,xl:f},lN:{xs:f,sm:f,me:f,la:f,xl:f}}},"img"==p.mediaKind){var b=["xs","sm","me","la","xl"];for(n=0;n<b.length;n++){var v=a["srct"+b[n].toUpperCase()];void 0!==v&&(J(v)||(v=u.O.itemsBaseURL+v),p.url.l1[b[n]]=v,p.url.lN[b[n]]=v),null!=(g=a["imgt"+b[n].toUpperCase()+"Width"])&&(p.width.l1[b[n]]=parseInt(g),p.width.lN[b[n]]=parseInt(g)),null!=(f=a["imgt"+b[n].toUpperCase()+"Height"])&&(p.height.l1[b[n]]=parseInt(f),p.height.lN[b[n]]=parseInt(f))}}void 0!==a.imageDominantColors&&(p.imageDominantColors=a.imageDominantColors),void 0!==a.imageDominantColor&&(p.imageDominantColor=a.imageDominantColor),void 0!==a.destURL&&a.destURL.length>0&&(p.destinationURL=a.destURL),void 0!==a.downloadURL&&a.downloadURL.length>0&&(p.downloadURL=a.downloadURL),void 0!==a.exifModel&&(p.exif.model=a.exifModel),void 0!==a.exifFlash&&(p.exif.flash=a.exifFlash),void 0!==a.exifFocalLength&&(p.exif.focallength=a.exifFocalLength),void 0!==a.exifFStop&&(p.exif.fstop=a.exifFStop),void 0!==a.exifExposure&&(p.exif.exposure=a.exifExposure),void 0!==a.exifIso&&(p.exif.iso=a.exifIso),void 0!==a.exifTime&&(p.exif.time=a.exifTime),void 0!==a.exifLocation&&(p.exif.location=a.exifLocation),null!==a.customData&&(p.customData=i(a.customData)),p.contentIsLoaded=!0;var O=u.O.fnProcessData;null!==O&&("function"==typeof O?O(p,"api",a):window[O](p,"api",a)),t(h)})),0==e&&(u.O.thumbnailLabel.display=!1)}function ee(e){var t="";return void 0!==e.childNodes[0]&&null!==e.childNodes[0].nodeValue&&void 0!==e.childNodes[0].nodeValue&&(t=e.childNodes[0].nodeValue.trim()),t}function te(t,n){var a=0,o=NGY2Tools.AlbumPostProcess.bind(u),r=NGY2Tools.GetImageTitleFromURL.bind(u);u.I[0].contentIsLoaded=!0,jQuery.each(t,(function(t,l){if(l.dataset.nanogallery2Lgroup==n&&"SCRIPT"!=l.nodeName){var s={"data-ngdesc":"","data-ngid":null,"data-ngkind":"image","data-ngtags":null,"data-ngdest":"","data-ngthumbimgwidth":0,"data-ngthumbimgheight":0,"data-ngimagewidth":0,"data-ngimageheight":0,"data-ngimagedominantcolors":null,"data-ngimagedominantcolor":null,"data-ngexifmodel":"","data-ngexifflash":"","data-ngexiffocallength":"","data-ngexiffstop":"","data-ngexifexposure":"","data-ngexifiso":"","data-ngexiftime":"","data-ngexiflocation":"","data-ngsrc":"",alt:""};[].forEach.call(l.attributes,(function(e){s[e.name.toLowerCase()]=e.value.trim()}));var c=ee(l);""==c&&""!=s.alt&&(c=s.alt),jQuery.each(e(l).children(),(function(e,t){""==c&&(c=ee(t)),[].forEach.call(t.attributes,(function(e){s[e.name.toLowerCase()]=e.value.trim()})),""==c&&""!=s.alt&&(c=s.alt)}));var h="",d=ht().toUpperCase();s.hasOwnProperty("data-ngsrc"+d)&&(h=s["data-ngsrc"+d]),void 0===(h=h||s["data-ngsrc"]||s.href)||J(h)||(h=u.O.itemsBaseURL+h);var m="";if(s.hasOwnProperty("src")&&(m=s.src),""==m&&s.hasOwnProperty("data-ngthumb")&&(m=s["data-ngthumb"]),""==m&&(m=h),void 0===m||J(m)||(m=u.O.itemsBaseURL+m),void 0!==h||void 0!==m){var p=s["data-ngdesc"],g=s.id||s["data-ngid"],f=s["data-ngkind"],b=s["data-ngtags"],v="0";s.hasOwnProperty("data-ngalbumid")&&(v=s["data-ngalbumid"],!0);var O=r(h);""!=O&&(c=O);var y=NGY2Item.New(u,c,p,g,v,f,b);""!=c&&a++,y.setMediaURL(h,"img"),jQuery.each(Z,(function(e,t){var n=t.getID(h);if(null!=n)return"function"==typeof t.url&&(h=t.url(n)),"function"==typeof t.thumbUrl&&(m=t.thumbUrl(n)),y.mediaKind=t.kind,y.mediaMarkup=t.selfhosted?t.markup(h):t.markup(n),!1})),y.imageWidth=parseInt(s["data-ngimagewidth"]),y.imageHeight=parseInt(s["data-ngimageheight"]);var G=parseInt(s["data-ngthumbimgwidth"]),M=parseInt(s["data-ngthumbimgheight"]);if(y.thumbs={url:{l1:{xs:m,sm:m,me:m,la:m,xl:m},lN:{xs:m,sm:m,me:m,la:m,xl:m}},width:{l1:{xs:G,sm:G,me:G,la:G,xl:G},lN:{xs:G,sm:G,me:G,la:G,xl:G}},height:{l1:{xs:M,sm:M,me:M,la:M,xl:M},lN:{xs:M,sm:M,me:M,la:M,xl:M}}},"img"==y.mediaKind){var w=["xs","sm","me","la","xl"];for(t=0;t<w.length;t++){if(s.hasOwnProperty("data-ngthumb"+w[t])){var I=s["data-ngthumb"+w[t]];J(I)||(I=u.O.itemsBaseURL+I),y.url.l1[w[t]]=I,y.url.lN[w[t]]=I}if(s.hasOwnProperty("data-ngthumb"+w[t]+"width")){G=parseInt(s["data-ngthumb"+w[t]+"width"]);y.width.l1[w[t]]=G,y.width.lN[w[t]]=G}if(s.hasOwnProperty("data-ngthumb"+w[t]+"height")){M=parseInt("data-ngthumb"+w[t]+"height");y.height.l1[w[t]]=M,y.height.lN[w[t]]=M}}}y.imageDominantColors=s["data-ngimagedominantcolors"],y.imageDominantColor=s["data-ngimagedominantcolors"],y.destinationURL=s["data-ngdest"],y.downloadURL=s["data-ngdownloadurl"],y.exif.model=s["data-ngexifmodel"],y.exif.flash=s["data-ngexifflash"],y.exif.focallength=s["data-ngexiffocallength"],y.exif.fstop=s["data-ngexiffstop"],y.exif.exposure=s["data-ngexifexposure"],y.exif.iso=s["data-ngexifiso"],y.exif.time=s["data-ngexiftime"],y.exif.location=s["data-ngexiflocation"],y.contentIsLoaded=!0,void 0!==jQuery(l).data("customdata")&&(y.customData=i(jQuery(l).data("customdata"))),void 0!==jQuery(l).data("ngcustomdata")&&(y.customData=i(jQuery(l).data("ngcustomdata")));var T=u.O.fnProcessData;null!==T&&("function"==typeof T?T(y,"markup",l):window[T](y,"markup",l)),o(v)}}})),0==a&&(u.O.thumbnailLabel.display=!1)}function ne(e,t){var n=["easeInQuad","easeOutQuad","easeInOutQuad","easeInCubic","easeOutCubic","easeInOutCubic","easeInQuart","easeOutQuart","easeInOutQuart","easeInQuint","easeOutQuint","easeInOutQuint","easeInSine","easeOutSine","easeInOutSine","easeInExpo","easeOutExpo","easeInOutExpo","easeInCirc","easeOutCirc","easeInOutCirc","easeOutBounce","easeInBack","easeOutBack","easeInOutBack","elastic","bounce"],i=e.split("_");if(i.length>=4){if(t.name="",t.type=i[1],t.from=i[2],t.to=i[3],i.length>=5)for(var a=4;a<i.length;a++){for(var o=i[a],r=!1,l=0;l<n.length;l++)if(o==n[l]){r=!0,t.easing=o;break}if(!0!==r)if("HOVERIN"!=(o=o.toUpperCase()))if("HOVEROUT"!=o)if("KEYFRAME"!=o){var s=parseInt(o.replace(/[^0-9\.]/g,""),10);if(s>0){if(o.indexOf("DURATION")>=0){t.duration=s;continue}if(o.indexOf("DURATIONBACK")>=0){t.durationBack=s;continue}if(o.indexOf("DELAY")>=0){t.delay=s;continue}if(o.indexOf("DELAYBACK")>=0){t.delayBack=s;continue}t.duration=s}}else t.firstKeyframe=!1;else t.hoverin=!1;else t.hoverout=!1}t.element=ie(i[0],t.type)}else t.name=e;return t}function ie(e,t){var n={image:".nGY2GThumbnailImage",thumbnail:".nGY2GThumbnail",label:".nGY2GThumbnailLabel",title:".nGY2GThumbnailTitle",description:".nGY2GThumbnailDescription",tools:".nGY2GThumbnailIcons",customlayer:".nGY2GThumbnailCustomLayer",default:"nGY2GThumbnailImage"};return n[e]||n.default}function ae(e){for(var a=[],o=0;o<e.length;o++)switch(e[o].name.toUpperCase()){case"BORDERLIGHTER":{let i=t(se().thumbnail.borderColor),r="thumbnail_borderColor_"+i+"_"+n(.5,i);a.push(ne(r,e[o]));break}case"BORDERDARKER":{let i=t(se().thumbnail.borderColor),r="thumbnail_borderColor_"+i+"_"+n(-.5,i);a.push(ne(r,e[o]));break}case"SCALE120":a.push(ne("thumbnail_scale_1.00_1.20",e[o]));break;case"LABELAPPEAR":case"LABELAPPEAR75":a.push(ne("label_opacity_0.00_1.00",e[o]));break;case"TOOLSAPPEAR":a.push(ne("tools_opacity_0_1",e[o]));break;case"TOOLSSLIDEDOWN":a.push(ne("tools_translateY_-100%_0%",e[o]));break;case"TOOLSSLIDEUP":a.push(ne("tools_translateY_100%_0%",e[o]));break;case"LABELOPACITY50":a.push(ne("label_opacity_1.00_0.50",e[o]));break;case"LABELSLIDEUPTOP":case"LABELSLIDEUP":a.push(ne("label_translateY_100%_0%",e[o])),a.push(ne("label_translateY_100%_0%",e[o]));break;case"LABELSLIDEDOWN":a.push(ne("label_translateY_-100%_0%",e[o]));break;case"SCALELABELOVERIMAGE":a.push(ne("label_scale_0.00_1.00",e[o]));var r=i(e[o]);a.push(ne("image_scale_1.00_0.00",r));break;case"OVERSCALE":case"OVERSCALEOUTSIDE":a.push(ne("label_scale_2.00_1.00",e[o]));r=i(e[o]);a.push(ne("label_opacity_0.00_1.00",r)),r=i(e[o]),a.push(ne("image_scale_1.00_0.00",r)),r=i(e[o]),a.push(ne("image_opacity_1.00_0.00",r));break;case"DESCRIPTIONAPPEAR":a.push(ne("description_opacity_0_1",e[o]));break;case"SLIDERIGHT":a.push(ne("image_translateX_0%_100%",e[o])),a.push(ne("label_translateX_-100%_0%",i(e[o])));break;case"SLIDELEFT":a.push(ne("image_translateX_0%_-100%",e[o])),a.push(ne("label_translateX_100%_0%",i(e[o])));break;case"SLIDEUP":a.push(ne("image_translateY_0%_-100%",e[o])),a.push(ne("label_translateY_100%_0%",i(e[o])));break;case"SLIDEDOWN":a.push(ne("image_translateY_0%_100%",e[o])),a.push(ne("label_translateY_-100%_0%",i(e[o])));break;case"IMAGESCALE150":case"IMAGESCALE150OUTSIDE":a.push(ne("image_scale_1.00_1.50",e[o]));break;case"IMAGESCALEIN80":a.push(ne("image_scale_1.20_1.00",e[o]));break;case"IMAGESLIDERIGHT":a.push(ne("image_translateX_0%_100%",e[o]));break;case"IMAGESLIDELEFT":a.push(ne("image_translateX_0%_-100%",e[o]));break;case"IMAGESLIDEUP":a.push(ne("image_translateY_0%_-100%",e[o]));break;case"IMAGESLIDEDOWN":a.push(ne("image_translateY_0%_100%",e[o]));break;case"LABELSLIDEUPDOWN":a.push(ne("label_translateY_0%_100%",e[o]));break;case"DESCRIPTIONSLIDEUP":a.push(ne("description_translateY_110%_0%",e[o]));break;case"IMAGEBLURON":a.push(ne("image_blur_2.00px_0.00px",e[o]));break;case"IMAGEBLUROFF":a.push(ne("image_blur_0.00px_2.00px",e[o]));break;case"IMAGEGRAYON":a.push(ne("image_grayscale_0%_100%",e[o]));break;case"IMAGEGRAYOFF":a.push(ne("image_grayscale_100%_0%",e[o]));break;case"IMAGESEPIAON":a.push(ne("image_sepia_100%_1%",e[o]));break;case"IMAGESEPIAOFF":a.push(ne("image_sepia_1%_100%",e[o]));break;default:a.push(e[o])}return a}function oe(){return{name:"",element:"",type:"",from:"",to:"",hoverin:!0,hoverout:!0,firstKeyframe:!0,delay:0,delayBack:0,duration:400,durationBack:300,easing:"easeOutQuart",easingBack:"easeOutQuart",animParam:null}}function re(){return{element:"",property:"",value:""}}function le(e,t){switch(e.position){case"onBottom":u.tn.style[t].label="bottom:0; ";break;case"right":switch(e.valign){case"top":u.tn.style[t].label="top:0; position:absolute; left: 50%;";break;case"middle":u.tn.style[t].label="top:0; bottom:0; left: 50%;",u.tn.style[t].title="position:absolute; bottom:50%;",u.tn.style[t].desc="position:absolute; top:50%;";break;case"bottom":default:u.tn.style[t].label="bottom:0; position:absolute; left: 50%;",u.tn.style[t].title="position:absolute;bottom:0;"}break;case"custom":break;default:case"overImage":switch(e.valign){case"top":u.tn.style[t].label="top:0; position:absolute;";break;case"middle":u.tn.style[t].label="top:0; bottom:0;",u.tn.style[t].title="position:absolute; bottom:50%;",u.tn.style[t].desc="position:absolute; top:50%;";break;case"bottom":default:u.tn.style[t].label="bottom:0; position:absolute;"}}switch("onBottom"!=e.position&&(e.titleMultiLine&&(u.tn.style[t].title+="white-space:normal;"),e.descriptionMultiLine&&(u.tn.style[t].desc+="white-space:normal;")),e.align){case"right":u.tn.style[t].label+="text-align:right;";break;case"left":u.tn.style[t].label+="text-align:left;";break;default:u.tn.style[t].label+="text-align:center;"}null!=e.titleFontSize&&""!=e.titleFontSize&&(u.tn.style[t].title+="font-size:"+e.titleFontSize+";"),null!=e.descriptionFontSize&&""!=e.descriptionFontSize&&(u.tn.style[t].desc+="font-size:"+e.descriptionFontSize+";"),0==e.displayDescription&&(u.tn.style[t].desc+="display:none;")}function se(){var e=null;switch(r(u.O.galleryTheme)){case"object":e=u.galleryTheme_dark,jQuery.extend(!0,e,u.O.galleryTheme);break;case"string":switch(u.O.galleryTheme){case"light":e=u.galleryTheme_light;break;case"default":case"dark":case"none":default:e=u.galleryTheme_dark}break;default:e=u.galleryTheme_dark}return e}function ue(e){var t=Oe(e,!1);if(-1==t.GOMidx)return"exit";var n=u.GOM.items[t.GOMidx].thumbnailIdx;switch(u.GOM.slider.hostIdx==t.GOMidx&&(n=u.GOM.items[u.GOM.slider.currentIdx].thumbnailIdx),t.action){case"OPEN":return ye(n,!1),"exit";case"DISPLAY":return ye(n,!0),"exit";case"TOGGLESELECT":return me(n),"exit";case"SHARE":return ge(n),"exit";case"DOWNLOAD":return ce(n),"exit";case"INFO":return ze(u.I[n]),"exit";case"SHOPPINGCART":return he(n,"gallery"),"exit";default:var i=u.O.fnThumbnailToolCustAction;null!==i&&("function"==typeof i?i(t.action,u.I[n]):window[i](t.action,u.I[n]))}}function ce(e){if("img"==u.I[e].mediaKind){var t=u.I[e].src;null!=u.I[e].downloadURL&&""!=u.I[e].downloadURL&&(t=u.I[e].downloadURL);var n=document.createElement("a");n.href=t,n.download=t.split("/").pop(),n.target="_blank",n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}}function he(e,t){for(var n=0;n<u.shoppingCart.length;n++){var i;if(u.shoppingCart[n].idx==e)return u.shoppingCart[n].qty++,R(u.I[e]),null!==(i=u.O.fnShoppingCartUpdated)&&("function"==typeof i?i(u.shoppingCart,u.I[e],t):window[i](u.shoppingCart,u.I[e],t)),void at("shoppingCartUpdated")}u.shoppingCart.push({idx:e,ID:u.I[e].GetID(),qty:1}),R(u.I[e]),null!==(i=u.O.fnShoppingCartUpdated)&&("function"==typeof i?i(u.shoppingCart,u.I[e],t):window[i](u.shoppingCart,u.I[e],t)),at("shoppingCartUpdated")}function de(){u.GOM.nbSelected=0;for(var e=0,t=u.GOM.items.length;e<t;e++){var n=u.I[u.GOM.items[e].thumbnailIdx];if(n.selected){n.selected=!1;var i=u.O.fnThumbnailSelection;null!==i&&("function"==typeof i?i(n.$elt,n,u.I):window[i](n.$elt,n,u.I))}n.selected=!1}}function me(e){var t=u.I[e];!0===t.selected?(pe(t,!1),u.GOM.nbSelected--,at("itemUnSelected")):(pe(t,!0),u.GOM.nbSelected++,at("itemSelected"))}function pe(e,t){e.selected=t,function(e){if(null==e.$elt)return;var t=e.$getElt(".nGY2GThumbnail"),n=e.$getElt(".nGY2GThumbnailIconImageSelect");!0===e.selected?(t.addClass("nGY2GThumbnailSubSelected"),n.addClass("nGY2ThumbnailSelected"),n.removeClass("nGY2ThumbnailUnselected"),n.html(u.O.icons.thumbnailSelected)):(t.removeClass("nGY2GThumbnailSubSelected"),n.removeClass("nGY2ThumbnailSelected"),n.addClass("nGY2ThumbnailUnselected"),n.html(u.O.icons.thumbnailUnselected))}(e);var n=u.O.fnThumbnailSelection;null!==n&&("function"==typeof n?n(e.$elt,e,u.I):window[n](e.$elt,e,u.I))}function ge(e){var t=u.I[e],n=document.location.protocol+"//"+document.location.hostname+document.location.pathname,i="#nanogallery/"+u.baseEltID+"/";"image"==t.kind?i+=t.albumID+"/"+t.GetID():i+=t.GetID();var a="<br><br>";a+='<div class="nGY2PopupOneItem" style="text-align:center;" data-share="facebook">'+u.O.icons.shareFacebook+"</div>",a+='<div class="nGY2PopupOneItem" style="text-align:center;" data-share="pinterest">'+u.O.icons.sharePinterest+"</div>",a+='<div class="nGY2PopupOneItem" style="text-align:center;" data-share="tumblr">'+u.O.icons.shareTumblr+"</div>",a+='<div class="nGY2PopupOneItem" style="text-align:center;" data-share="twitter">'+u.O.icons.shareTwitter+"</div>",a+='<div class="nGY2PopupOneItem" style="text-align:center;" data-share="vk">'+u.O.icons.shareVK+"</div>",a+='<div class="nGY2PopupOneItem" style="text-align:center;" data-share="mail">'+u.O.icons.shareMail+"</div>",a+='<div class="nGY2PopupOneItem" style="text-align:center;"></div>',a+='<input class="nGY2PopupOneItemText" readonly type="text" value="'+n+i+'" style="width:100%;text-align:center;">',a+="<br>",n=encodeURIComponent(document.location.protocol+"//"+document.location.hostname+document.location.pathname+i);var o=t.title,r=t.thumbImg().src;fe("nanogallery2 - share to:",a,"Center"),u.popup.$elt.find(".nGY2PopupOneItem").on("click",(function(e){e.stopPropagation();var t="",i=!0;switch(jQuery(this).attr("data-share").toUpperCase()){case"FACEBOOK":t="https://www.facebook.com/sharer.php?u="+n;break;case"VK":t="http://vk.com/share.php?url="+n;break;case"GOOGLEPLUS":t="https://plus.google.com/share?url="+n;break;case"TWITTER":t="https://twitter.com/intent/tweet?text="+o+"url="+n;break;case"PINTEREST":t="https://pinterest.com/pin/create/button/?media="+r+"&url="+n+"&description="+o;break;case"TUMBLR":t="http://www.tumblr.com/share/link?url="+n+"&name="+o;break;case"MAIL":t="mailto:?subject="+o+"&body="+n;break;default:i=!1}i&&(window.open(t,"","height=550,width=500,left=100,top=100,menubar=0"),u.popup.close())}))}function fe(e,t,n){var i='<div class="nGY2Popup" style="opacity:0;"><div class="nGY2PopupContent'+n+'">';i+='<div class="nGY2PopupCloseButton" style="font-size:0.9em;">'+u.O.icons.buttonClose+"</div>",i+='<div class="nGY2PopupTitle">'+e+"</div>",i+=t,i+="</div></div>",u.popup.$elt=jQuery(i).appendTo("body"),o(u.VOM.$viewer,u.popup.$elt),u.popup.isDisplayed=!0,(new NGTweenable).tween({from:{o:0,y:100},to:{o:1,y:0},easing:"easeInOutSine",duration:250,step:function(e,t){u.popup.$elt[0].style.opacity=e.o,u.popup.$elt[0].style[u.CSStransformName]="translateY("+e.y+"px)"}}),u.popup.$elt.find(".nGY2PopupCloseButton").on("click",(function(e){e.stopPropagation(),u.popup.close()}))}function be(e){if(!u.VOM.viewerDisplayed&&-1!=u.GOM.albumIdx){var t=Oe(e,!0);-1!=t.GOMidx&&W(t.GOMidx)}}function ve(e){if(!u.VOM.viewerDisplayed&&-1!=u.GOM.albumIdx){var t=Oe(e,!0);-1!=t.GOMidx&&X(t.GOMidx)}}function Oe(e,t){var n={action:"NONE",GOMidx:-1};if(null==e)return n;for(var i=e.target||e.srcElement;i!=u.$E.conTnParent[0];){if(jQuery(i).hasClass("nGY2GThumbnail"))return"NONE"==n.action&&(n.action="OPEN"),n.GOMidx=jQuery(i).data("index"),n;if(!t){var a=jQuery(i).data("ngy2action");""!=a&&null!=a&&(n.action=a)}if(null==i.parentNode)return n;i=i.parentNode}return n}function ye(e,t){var n=u.I[e];u.GOM.albumIdxLoading=e;var i=u.O.fnThumbnailClicked;if(null!==i&&("function"==typeof i?i(n.$elt,n):window[i](n.$elt,n)),void 0!==n.destinationURL&&n.destinationURL.length>0)window.location=n.destinationURL;else switch(n.kind){case"image":!1===t&&u.GOM.nbSelected>0?me(e):we(e);break;case"album":if(!1===t&&u.GOM.nbSelected>0)me(e);else{if(u.O.thumbnailAlbumDisplayImage&&0!=e)return void Ge(e);g("-1",n.GetID())}break;case"albumUp":g("-1",NGY2Item.Get(u,n.albumID).albumID)}}function Ge(e){u.O.debugMode&&console.log("#DisplayFirstPhotoInAlbum : "+e);for(var t=u.I[e],n=u.I.length,i=0;i<n;i++)if(u.I[i].albumID==t.GetID())return void we(i);q(t.GetID(),Ge,e,null)}function Me(e){switch(u.O.kind){case"flickr":var t="https://www.flickr.com/photos/"+u.O.userID+"/"+e.GetID();"0"!=e.albumID&&(t+="/in/album-"+e.albumID+"/"),window.open(t,"_blank");break;case"picasa":case"google":case"google2":default:t=e.responsiveURL();window.open(t,"_blank")}}function we(e){if(u.O.thumbnailOpenInLightox)if(u.O.thumbnailOpenOriginal)Me(u.I[e]);else{var t=[];u.VOM.content.current.vIdx=0,u.VOM.items=[],u.VOM.albumID=u.I[e].albumID;var n=new c(e);u.VOM.items.push(n),t.push(u.I[e]);var i=u.I.length;for(let n=e+1;n<i;n++){let e=u.I[n];if("image"==e.kind&&e.isToDisplay(u.VOM.albumID)&&""==e.destinationURL){let i=new c(n);u.VOM.items.push(i),t.push(e)}}var a=u.VOM.items.length,o=1;for(let n=0;n<e;n++){let e=u.I[n];if("image"==e.kind&&e.isToDisplay(u.VOM.albumID)&&""==e.destinationURL){let i=new c(n);i.mediaNumber=o,u.VOM.items.push(i),t.push(e),o++}}for(let e=0;e<a;e++)u.VOM.items[e].mediaNumber=o,o++;var r=u.O.fnThumbnailOpen;if(null===r)if(u.VOM.viewerDisplayed){u.VOM.content.current.$media.empty();let e=u.VOM.content.current.NGY2Item();var l='<div class="nGY2ViewerMediaLoaderDisplayed"></div>';"img"==e.mediaKind&&0!=e.imageWidth&&0!=e.imageHeight&&(l='<div class="nGY2ViewerMediaLoaderHidden"></div>'),u.VOM.content.current.$media.append(l+e.mediaMarkup),et(u.VOM.content.next,0),et(u.VOM.content.previous,0),"img"==e.mediaKind&&u.VOM.ImageLoader.loadImage(Ke,e),Ze("")}else De();else"function"==typeof r?r(t):window[r](t)}}function Ie(){if(u.O.viewerZoom&&!u.VOM.viewerMediaIsChanged){var e=u.VOM.content.current.NGY2Item();if("img"==e.mediaKind&&e.imageHeight>0&&e.imageWidth>0)return!1===u.VOM.zoom.isZooming&&(u.VOM.zoom.userFactor=1,u.VOM.zoom.isZooming=!0),!0}return!1}function Te(e){e?(u.VOM.zoom.userFactor+=.1,xe()):(u.VOM.zoom.userFactor-=.1,Se()),Le()}function xe(){u.VOM.zoom.userFactor>3&&(u.VOM.zoom.userFactor=3)}function Se(){u.VOM.zoom.userFactor<.2&&(u.VOM.zoom.userFactor=.2)}function Le(){u.VOM.zoom.isZooming||(u.VOM.zoom.userFactor=1),Ee(u.VOM.content.current,!0),Ee(u.VOM.content.previous,!1),Ee(u.VOM.content.next,!1)}function Ce(e){var t=e.children().eq(1),n=90;"none"!=u.O.viewerGallery&&(n-=10),"none"!=u.O.viewerToolbar.display&&(n-=10),t.css({height:n+"%"}),t.css({width:"90%"}),t[0].style[u.CSStransformName]='translate(0px, "50%") '}function Ee(e,t){var n=e.NGY2Item(),i=e.$media;if("img"==n.mediaKind)if(0!=n.imageHeight&&0!=n.imageWidth){var a=1==t?u.VOM.zoom.userFactor:1,o=1;"bestImageQuality"==u.O.viewerImageDisplay&&(o=window.devicePixelRatio);var r=(u.VOM.window.lastWidth-u.VOM.padding.V)/(n.imageWidth/o),l=(u.VOM.window.lastHeight-u.VOM.padding.H)/(n.imageHeight/o),s=Math.min(r,l);s>1&&"upscale"!=u.O.viewerImageDisplay&&(s=1);var c=n.imageHeight/o*a*s,h=n.imageWidth/o*a*s;i.children().eq(1).css({height:c}),i.children().eq(1).css({width:h});var d=0;h>u.VOM.window.lastWidth&&(d=-(h-u.VOM.window.lastWidth)/2);t?(u.VOM.zoom.isZooming||(u.VOM.panPosX=0,u.VOM.panPosY=0),u.VOM.zoom.posX=d,u.VOM.zoom.posY=0,ke(u.VOM.panPosX,u.VOM.panPosY,i,!1)):(Xe(u.VOM.swipePosX),i.children().eq(1)[0].style[u.CSStransformName]="translate(0px, 0px) rotate("+n.rotationAngle+"deg)")}else et(e,0);else Ce(i)}function ke(e,t,n,i){i&&(u.VOM.panPosX=e,u.VOM.panPosY=t),e+=u.VOM.zoom.posX,t+=u.VOM.zoom.posY,n.children().eq(1)[0].style[u.CSStransformName]="translate("+e+"px, "+t+"px) rotate("+u.VOM.content.current.NGY2Item().rotationAngle+"deg)"}function De(e){u.GOM.firstDisplay=!1,jQuery("head").append('<style id="nGY2_body_scrollbar_style" type="text/css">.nGY2_body_scrollbar{margin-right: '+(window.innerWidth-document.documentElement.clientWidth)+"px;}</style>"),jQuery("body").addClass("nGY2_body_scrollbar"),u.VOM.$baseCont=jQuery('<div  class="nGY2 nGY2ViewerContainer" style="opacity:1"></div>').appendTo("body"),function(){if(""==u.VOM.viewerTheme){void 0!==u.O.colorSchemeViewer&&(u.O.viewerTheme=u.O.colorSchemeViewer);var e=null;switch(r(u.O.viewerTheme)){case"object":e=u.viewerTheme_dark,jQuery.extend(!0,e,u.O.viewerTheme),u.VOM.viewerTheme="nanogallery_viewertheme_custom_"+u.baseEltID;break;case"string":switch(u.O.viewerTheme){case"none":return;case"light":e=u.viewerTheme_light,u.VOM.viewerTheme="nanogallery_viewertheme_light_"+u.baseEltID;break;case"dark":case"default":e=u.viewerTheme_dark,u.VOM.viewerTheme="nanogallery_viewertheme_dark_"+u.baseEltID}break;default:return void h(u,"Error in viewerTheme parameter.")}var t="."+u.VOM.viewerTheme+" ",n=t+".nGY2Viewer { background:"+e.background+"; }\n";n+=t+".nGY2Viewer .toolbarBackground { background:"+e.barBackground+"; }\n",n+=t+".nGY2Viewer .toolbar { border:"+e.barBorder+"; color:"+e.barColor+"; }\n",n+=t+".nGY2Viewer .toolbar .previousButton:after { color:"+e.barColor+"; }\n",n+=t+".nGY2Viewer .toolbar .nextButton:after { color:"+e.barColor+"; }\n",n+=t+".nGY2Viewer .toolbar .closeButton:after { color:"+e.barColor+"; }\n",n+=t+".nGY2Viewer .toolbar .label .title { color:"+e.barColor+"; }\n",n+=t+".nGY2Viewer .toolbar .label .description { color:"+e.barDescriptionColor+"; }\n",jQuery("head").append("<style>"+n+"</style>"),u.VOM.$baseCont.addClass(u.VOM.viewerTheme)}else u.VOM.$baseCont.addClass(u.VOM.viewerTheme)}(),u.VOM.$viewer=jQuery('<div class="nGY2Viewer" style="opacity:0" itemscope itemtype="http://schema.org/ImageObject"></div>').appendTo(u.VOM.$baseCont),u.VOM.$viewer.css({msTouchAction:"none",touchAction:"none"}),u.VOM.content.current.vIdx=null==e?0:e,u.VOM.content.previous.vIdx=u.VOM.IdxNext(),u.VOM.content.next.vIdx=u.VOM.IdxPrevious();var t='<div class="nGY2ViewerMediaPan"><div class="nGY2ViewerMediaLoaderDisplayed"></div>'+u.VOM.content.previous.NGY2Item().mediaMarkup+"</div>";t+='<div class="nGY2ViewerMediaPan"><div class="nGY2ViewerMediaLoaderDisplayed"></div>'+u.VOM.content.current.NGY2Item().mediaMarkup+"</div>",t+='<div class="nGY2ViewerMediaPan"><div class="nGY2ViewerMediaLoaderDisplayed"></div>'+u.VOM.content.next.NGY2Item().mediaMarkup+"</div>";var n="",i=u.O.icons.viewerImgPrevious;null!=i&&""!=i&&(n+='<div class="nGY2ViewerAreaPrevious ngy2viewerToolAction" data-ngy2action="previous">'+i+"</div>");var a=u.O.icons.viewerImgNext;null!=a&&""!=a&&(n+='<div class="nGY2ViewerAreaNext ngy2viewerToolAction" data-ngy2action="next">'+a+"</div>"),u.VOM.$content=jQuery('<div class="nGY2ViewerContent">'+t+n+"</div>").appendTo(u.VOM.$viewer),u.VOM.$buttonLeft=u.VOM.$content.find(".nGY2ViewerAreaPrevious"),u.VOM.$buttonRight=u.VOM.$content.find(".nGY2ViewerAreaNext");var l=u.VOM.$content.find(".nGY2ViewerMediaPan");u.VOM.content.previous.$media=l.eq(0),u.VOM.content.current.$media=l.eq(1),u.VOM.content.next.$media=l.eq(2);var c=u.GOM.cache.viewport;u.VOM.content.previous.$media[0].style[u.CSStransformName]="translate(-"+c.w+"px, 0px)",u.VOM.content.next.$media[0].style[u.CSStransformName]="translate("+c.w+"px, 0px)",u.VOM.ImageLoader.loadImage(Ke,u.VOM.content.current.NGY2Item()),u.VOM.ImageLoader.loadImage(Ke,u.VOM.content.previous.NGY2Item()),u.VOM.ImageLoader.loadImage(Ke,u.VOM.content.next.NGY2Item()),u.VOM.padding.H=parseInt(u.VOM.$content.css("padding-left"))+parseInt(u.VOM.$content.css("padding-right")),u.VOM.padding.V=parseInt(u.VOM.$content.css("padding-top"))+parseInt(u.VOM.$content.css("padding-bottom"));var d="",m=" toolbarBackground";u.O.viewerToolbar.fullWidth&&(d=" toolbarBackground",m="");var p="text-align:center;";switch(u.O.viewerToolbar.align){case"left":p="text-align:left;";break;case"right":p="text-align:right;"}var g='<div class="toolbarContainer nGEvent'+d+'" style="visibility:'+(u.O.viewerToolbar.display?"visible":"hidden")+";"+p+'"><div class="toolbar nGEvent'+m+'"></div></div>';u.VOM.$toolbar=jQuery(g).appendTo(u.VOM.$viewer),"min"==u.VOM.toolbarMode||u.O.viewerToolbar.autoMinimize>0&&u.O.viewerToolbar.autoMinimize>=u.GOM.cache.viewport.w?We():Ue();for(var f='<div class="nGY2ViewerToolsTopLeft nGEvent"><div class="toolbar nGEvent">',b=u.O.viewerTools.topLeft.split(","),v=0,O=b.length;v<O;v++)f+=Be(b[v]);f+="</div></div>",u.VOM.$toolbarTL=jQuery(f).appendTo(u.VOM.$viewer);for(var y='<div class="nGY2ViewerToolsTopRight nGEvent"><div class="toolbar nGEvent">',G=u.O.viewerTools.topRight.split(","),M=(v=0,G.length);v<M;v++)y+=Be(G[v]);y+="</div></div>",u.VOM.$toolbarTR=jQuery(y).appendTo(u.VOM.$viewer),Pe(),ngscreenfull.enabled&&u.O.viewerFullscreen&&(ngscreenfull.request(),u.VOM.viewerIsFullscreen=!0),function(){if(u.VOM.gallery.firstDisplay=!0,"none"!=u.O.viewerGallery){for(var e=u.O.viewerGalleryTWidth,t=u.O.viewerGalleryTHeight,n="",i=0;i<u.VOM.items.length;i++){var a=u.VOM.items[i].ngy2ItemIdx,o=u.I[a].thumbImg().src.replace(/'/g,"%27");n+='<div class="nGY2VThumbnail" style="width:'+e+"px;height:"+t+"px;left:"+i*(e+4)+"px;background-image: url(&apos;"+o+'&apos;);" data-ngy2_lightbox_thumbnail="true" data-ngy2_idx="'+a+'" data-ngy2_vidx="'+i+'" ></div>'}u.VOM.gallery.gwidth=(e+4)*u.VOM.items.length,u.VOM.gallery.oneTmbWidth=e+4;var r="<div class='nGY2VThumbnailContainer' style='height:"+(t+4)+"px;left:0;width:"+u.VOM.gallery.gwidth+"px;' data-ngy2_lightbox_gallery='true'>"+n+"</div>";u.VOM.gallery.$elt=jQuery('<div class="nGY2viewerGallery" style="display: inline-block;height:'+(t+4)+'px;left:0;right:0;">'+r+"</div>").appendTo(u.VOM.$viewer),u.VOM.gallery.$tmbCont=u.VOM.gallery.$elt.find(".nGY2VThumbnailContainer"),u.VOM.gallery.Resize(),u.VOM.gallery.SetThumbnailActive()}}(),o("",u.VOM.$viewer),nt(!0),u.VOM.gallery.Resize(),u.VOM.timeImgChanged=(new Date).getTime(),u.VOM.$toolbarTL.css("opacity",0),u.VOM.$toolbarTR.css("opacity",0),u.VOM.$buttonLeft.css("opacity",0),u.VOM.$buttonRight.css("opacity",0),"none"!=u.O.viewerGallery&&u.VOM.gallery.$elt.css("opacity",0),u.VOM.$content.css("opacity",0),u.VOM.$toolbarTR[0].style[u.CSStransformName]="translateY(-40px) ",u.VOM.$toolbarTL[0].style[u.CSStransformName]="translateY(-40px) ",u.VOM.$buttonLeft[0].style[u.CSStransformName]="translateX(-40px) ",u.VOM.$buttonRight[0].style[u.CSStransformName]="translateX(40px) ",(new NGTweenable).tween({from:{opacity:0,posY:.5*u.VOM.window.lastHeight},to:{opacity:1,posY:0},delay:10,duration:450,easing:"easeInOutQuint",step:function(e){u.VOM.$viewer.css("opacity",e.opacity),u.VOM.$viewer[0].style[u.CSStransformName]="translateY("+e.posY+"px) ",u.VOM.$content.css("opacity",e.opacity)}}),(new NGTweenable).tween({from:{posY:-40,opacity:0,scale:3},to:{posY:0,opacity:1,scale:1},delay:300,duration:400,easing:"easeInOutQuint",step:function(e){u.VOM.$toolbarTR[0].style[u.CSStransformName]="translateY("+e.posY+"px) ",u.VOM.$toolbarTL[0].style[u.CSStransformName]="translateY("+e.posY+"px) ",u.VOM.$buttonLeft[0].style[u.CSStransformName]="translateX("+e.posY+"px) ",u.VOM.$buttonRight[0].style[u.CSStransformName]="translateX("+-e.posY+"px) ","none"!=u.O.viewerGallery&&(u.VOM.gallery.$elt.css({opacity:e.opacity}),u.VOM.gallery.$elt[0].style[u.CSStransformName]="scale("+e.scale+")")},finish:function(){u.VOM.viewerDisplayed=!0,Xe(0),null==u.VOM.hammertime&&(u.VOM.hammertime=new NGHammer.Manager(u.VOM.$baseCont[0],{recognizers:[[NGHammer.Pinch,{enable:!0}],[NGHammer.Pan,{direction:NGHammer.DIRECTION_ALL}]]}),u.VOM.hammertime.on("pan",(function(e){if(Ne())switch("off"==u.VOM.panMode&&(null!=e.target.dataset.ngy2_lightbox_thumbnail||null!=e.target.dataset.ngy2_lightbox_gallery?u.VOM.panMode="gallery":u.VOM.zoom.isZooming?u.VOM.panMode="zoom":u.VOM.panMode="media"),u.VOM.panMode){case"zoom":ke(u.VOM.panPosX+e.deltaX,u.VOM.panPosY+e.deltaY,u.VOM.content.current.$media,!1),u.VOM.toolsHide();break;case"media":if(Math.abs(e.deltaY)>u.VOM.panThreshold&&Math.abs(e.deltaX)<u.VOM.panThreshold&&!u.VOM.panXOnly){Xe(0);var t=0;t=e.deltaY<0?Math.max(e.deltaY,-200):Math.min(e.deltaY,200),u.VOM.$viewer[0].style[u.CSStransformName]="translateY("+t+"px) ",u.VOM.$viewer.css("opacity",1-Math.abs(t)/200/2)}else Math.abs(e.deltaX)>u.VOM.panThreshold&&(u.VOM.panXOnly=!0),Xe(e.deltaX),u.VOM.$viewer[0].style[u.CSStransformName]="translateY(0px)",u.VOM.$viewer.css("opacity",1);break;case"gallery":u.VOM.gallery.PanGallery(e.deltaX)}})),u.VOM.hammertime.on("panend",(function(e){if(Ne()){switch(u.VOM.panMode){case"zoom":u.VOM.timeImgChanged=(new Date).getTime(),ke(u.VOM.panPosX+e.deltaX,u.VOM.panPosY+e.deltaY,u.VOM.content.current.$media,!0);break;case"media":var t=!1;u.VOM.panXOnly||Math.abs(e.deltaY)>50&&Math.abs(e.deltaX)<50&&(tt(),t=!0),t||(Math.abs(e.deltaX)<50?Xe(0):e.deltaX>50?qe(Math.abs(e.velocityX)):Qe(Math.abs(e.velocityX))),u.VOM.panXOnly=!1;break;case"gallery":u.VOM.gallery.posX+=e.deltaX,u.VOM.gallery.PanGallery(0),u.VOM.gallery.PanGalleryEnd(e.velocityX)}u.VOM.panMode="off"}})),u.O.viewerZoom?(u.VOM.hammertime.add(new NGHammer.Tap({event:"doubletap",taps:2,interval:250})),u.VOM.hammertime.add(new NGHammer.Tap({event:"singletap"})),u.VOM.hammertime.get("doubletap").recognizeWith("singletap"),u.VOM.hammertime.get("singletap").requireFailure("doubletap"),u.VOM.hammertime.on("singletap",(function(e){if(Ne()){if(null!=e.target.dataset.ngy2_lightbox_thumbnail){var t=parseInt(e.target.dataset.ngy2_idx),n=parseInt(e.target.dataset.ngy2_vidx);if(!isNaN(t)&&n!=u.VOM.content.current.vIdx){if(n>u.VOM.content.current.vIdx){at("lightboxNextImage"),u.VOM.content.next.$media.empty();var i=u.I[t];u.VOM.content.next.vIdx=n;let e='<div class="nGY2ViewerMediaLoaderDisplayed"></div>';"img"==i.mediaKind&&0!=i.imageWidth&&0!=i.imageHeight&&(e='<div class="nGY2ViewerMediaLoaderHidden"></div>'),u.VOM.content.next.$media.append(e+i.mediaMarkup),"img"==i.mediaKind?u.VOM.ImageLoader.loadImage(Ke,i):Ce(u.VOM.content.next.$media),Ze("nextImage")}else{at("lightboxPreviousImage"),u.VOM.content.previous.$media.empty();var a=u.I[t];u.VOM.content.previous.vIdx=n;let e='<div class="nGY2ViewerMediaLoaderDisplayed"></div>';"img"==a.mediaKind&&0!=a.imageWidth&&0!=a.imageHeight&&(e='<div class="nGY2ViewerMediaLoaderHidden"></div>'),u.VOM.content.previous.$media.append(e+a.mediaMarkup),"img"==a.mediaKind?u.VOM.ImageLoader.loadImage(Ke,a):Ce(u.VOM.content.previous.$media),Ze("previousImage")}return}}if(Ve(e.srcEvent),0==u.VOM.toolbarsDisplayed)s(Ae,100,!1)(),u.VOM.singletapTime=(new Date).getTime();else{if((new Date).getTime()-u.VOM.singletapTime<400)return;"img"==u.VOM.content.current.NGY2Item().mediaKind&&-1!==e.target.className.indexOf("nGY2ViewerMedia")&&((e.srcEvent instanceof MouseEvent?e.srcEvent.pageX:e.srcEvent.changedTouches[0].pageX)<u.GOM.cache.viewport.w/2?qe():Qe())}}})),u.VOM.hammertime.on("doubletap",(function(e){Ne()&&(Ve(e.srcEvent),-1!==e.target.className.indexOf("nGY2ViewerMedia")&&(u.VOM.zoom.isZooming?(u.VOM.zoom.isZooming=!1,nt(!0)):Ie()&&(u.VOM.zoom.userFactor=1.5,Le())))})),u.VOM.hammertime.on("pinchend",(function(e){e.srcEvent.stopPropagation(),e.srcEvent.preventDefault(),u.VOM.timeImgChanged=(new Date).getTime()})),u.VOM.hammertime.on("pinch",(function(e){e.srcEvent.stopPropagation(),e.srcEvent.preventDefault(),Ie()&&(u.VOM.zoom.userFactor=e.scale,xe(),Se(),Le())}))):(u.VOM.hammertime.add(new NGHammer.Tap({event:"singletap"})),u.VOM.hammertime.on("singletap",(function(e){if(Ne())if(Ve(e.srcEvent),0==u.VOM.toolbarsDisplayed)s(Ae,100,!1)(),u.VOM.singletapTime=(new Date).getTime();else{if((new Date).getTime()-u.VOM.singletapTime<400)return;-1!==e.target.className.indexOf("nGY2ViewerMedia")&&((e.srcEvent instanceof MouseEvent?e.srcEvent.pageX:e.srcEvent.changedTouches[0].pageX)<u.GOM.cache.viewport.w/2?qe():Qe())}})))),Ze(""),u.O.slideshowAutoStart&&(u.VOM.playSlideshow=!1,He()),Ae(),Je("")}})}function Ne(){return!(!u.VOM.viewerDisplayed||u.VOM.viewerMediaIsChanged)}function Ve(e){e.stopPropagation(),e.preventDefault()}function Ye(){u.VOM.viewerDisplayed&&(u.VOM.toolbarsDisplayed=!1,_e(0))}function Ae(){u.VOM.viewerDisplayed&&(u.VOM.toolbarsDisplayed=!0,_e(1),u.VOM.toolsHide())}function _e(e){null!=u.VOM.$toolbar&&u.VOM.$toolbar.css("opacity",e),null!=u.VOM.$toolbarTL&&u.VOM.$toolbarTL.css("opacity",e),null!=u.VOM.$toolbarTR&&u.VOM.$toolbarTR.css("opacity",e),u.VOM.$content.find(".nGY2ViewerAreaNext").css("opacity",e),u.VOM.$content.find(".nGY2ViewerAreaPrevious").css("opacity",e)}function Pe(){u.VOM.$viewer.off("touchstart click",".ngy2viewerToolAction",Re),u.VOM.$viewer.on("touchstart click",".ngy2viewerToolAction",Re)}function Re(t){if(!((new Date).getTime()-u.timeLastTouchStart<300)){u.timeLastTouchStart=(new Date).getTime();var n=e(this),i=n.data("ngy2action");if(null!=i){switch(i){case"next":Ve(t),Qe();break;case"previous":Ve(t),qe();break;case"playPause":t.stopPropagation(),He();break;case"zoomIn":Ve(t),Ie()&&Te(!0);break;case"zoomOut":Ve(t),Ie()&&Te(!1);break;case"minimize":Ve(t),"std"==u.VOM.toolbarMode?We():Ue();break;case"fullScreen":t.stopPropagation(),ngscreenfull.enabled&&ngscreenfull.toggle();break;case"info":t.stopPropagation(),ze(u.VOM.content.current.NGY2Item());break;case"close":if(Ve(t),(new Date).getTime()-u.VOM.timeImgChanged<400)return;tt();break;case"download":Ve(t),ce(u.VOM.items[u.VOM.content.current.vIdx].ngy2ItemIdx);break;case"share":Ve(t),ge(u.VOM.items[u.VOM.content.current.vIdx].ngy2ItemIdx);break;case"linkOriginal":Ve(t),Me(u.VOM.content.current.NGY2Item());break;case"rotateLeft":Ve(t),Fe(-90);break;case"rotateRight":Ve(t),Fe(90);break;case"shoppingcart":Ve(t),he(u.VOM.items[u.VOM.content.current.vIdx].ngy2ItemIdx,"lightbox")}var a=u.O.fnImgToolbarCustClick;0==i.indexOf("custom")&&null!==a&&("function"==typeof a?a(i,n,u.VOM.content.current.NGY2Item()):window[a](i,n,u.VOM.content.current.NGY2Item()))}}}function Fe(e){var t=u.VOM.content.current.NGY2Item();"img"==t.mediaKind&&(t.rotationAngle+=e,t.rotationAngle=t.rotationAngle%360,t.rotationAngle<0&&(t.rotationAngle+=360),Xe(0),Ee(u.VOM.content.current,!0))}function ze(e){var t='<div class="nGY2PopupOneItem">'+e.title+"</div>";t+='<div class="nGY2PopupOneItemText">'+e.description+"</div>",""!=e.author&&(t+='<div class="nGY2PopupOneItemText">'+u.O.icons.user+" "+e.author+"</div>"),""!=e.exif.model&&(t+='<div class="nGY2PopupOneItemText">'+u.O.icons.config+" "+e.exif.model+"</div>");var n=u.O.icons.picture+":";""!=e.exif.flash||""!=e.exif.focallength||""!=e.exif.fstop||""!=e.exif.exposure||""!=e.exif.iso||""!=e.exif.time?(n+="<br>",n+=""==e.exif.flash?"":" &nbsp; "+e.exif.flash,n+=""==e.exif.focallength?"":" &nbsp; "+e.exif.focallength+"mm",n+=""==e.exif.fstop?"":" &nbsp; f"+e.exif.fstop,n+=""==e.exif.exposure?"":" &nbsp; "+e.exif.exposure+"s",n+=""==e.exif.iso?"":" &nbsp; "+e.exif.iso+" ISO",""!=e.exif.time&&(n+=" &nbsp; "+e.exif.time)):n+=" n/a",t+='<div class="nGY2PopupOneItemText">'+n+"</div>",""!=e.exif.location?(t+='<div class="nGY2PopupOneItemText">'+u.O.icons.location+' <a href="http://maps.google.com/maps?z=12&t=m&q='+encodeURIComponent(e.exif.location)+'" target="_blank">'+e.exif.location+"</a></div>",t+='<iframe width="300" height="150" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?&amp;t=m&amp;q='+encodeURIComponent(e.exif.location)+'&amp;output=embed"></iframe>'):t+='<div class="nGY2PopupOneItemText">'+u.O.icons.location+": n/a</div>";var i={title:u.O.icons.viewerInfo,content:t},a=u.O.fnPopupMediaInfo;null!==a&&(i="function"==typeof a?a(e,i.title,i.content):window[a](e,i.title,i.content)),fe(i.title,i.content,"Left")}function Be(e){var t='<div class="ngbt ngy2viewerToolAction ',n=e.replace(/^\s+|\s+$/g,"");switch(n){case"minimizeButton":case"minimize":var i=u.O.icons.viewerToolbarMin;"min"==u.VOM.toolbarMode&&(i=u.O.icons.viewerToolbarStd),t+='minimizeButton nGEvent" data-ngy2action="minimize">'+i+"</div>";break;case"previousButton":case"previous":t+='previousButton nGEvent" data-ngy2action="previous">'+u.O.icons.viewerPrevious+"</div>";break;case"pageCounter":t+='pageCounter nGEvent"></div>';break;case"nextButton":case"next":t+='nextButton nGEvent" data-ngy2action="next">'+u.O.icons.viewerNext+"</div>";break;case"playPauseButton":case"playPause":t+='playButton playPauseButton nGEvent" data-ngy2action="playPause">'+u.O.icons.viewerPlay+"</div>";break;case"rotateLeft":t+='rotateLeftButton nGEvent" data-ngy2action="rotateLeft">'+u.O.icons.viewerRotateLeft+"</div>";break;case"rotateRight":t+='rotateRightButton nGEvent" data-ngy2action="rotateRight">'+u.O.icons.viewerRotateRight+"</div>";break;case"downloadButton":case"download":t+='downloadButton nGEvent" data-ngy2action="download">'+u.O.icons.viewerDownload+"</div>";break;case"zoomButton":case"zoom":t+='nGEvent" data-ngy2action="zoomIn">'+u.O.icons.viewerZoomIn+'</div><div class="ngbt ngy2viewerToolAction nGEvent" data-ngy2action="zoomOut">'+u.O.icons.viewerZoomOut+"</div>";break;case"fullscreenButton":case"fullscreen":var a=u.O.icons.viewerFullscreenOn;ngscreenfull.enabled&&u.VOM.viewerIsFullscreen&&(a=u.O.icons.viewerFullscreenOff),t+='setFullscreenButton fullscreenButton nGEvent" data-ngy2action="fullScreen">'+a+"</div>";break;case"infoButton":case"info":t+='infoButton nGEvent" data-ngy2action="info">'+u.O.icons.viewerInfo+"</div>";break;case"linkOriginalButton":case"linkOriginal":t+='linkOriginalButton nGEvent" data-ngy2action="linkOriginal">'+u.O.icons.viewerLinkOriginal+"</div>";break;case"closeButton":case"close":t+='closeButton nGEvent" data-ngy2action="close">'+u.O.icons.buttonClose+"</div>";break;case"shareButton":case"share":t+='nGEvent" data-ngy2action="share">'+u.O.icons.viewerShare+"</div>";break;case"label":t+='"><div class="label"><div class="title nGEvent" itemprop="name"></div><div class="description nGEvent" itemprop="description"></div></div></div>';break;case"shoppingcart":t+='closeButton nGEvent" data-ngy2action="shoppingcart">'+u.O.icons.viewerShoppingcart+"</div>";break;default:if(0==n.indexOf("custom")){var o="",r=u.O.fnImgToolbarCustInit;if(null!==r&&("function"==typeof r?r(n):window[r](n)),null==o||""==o){var l=n.substring(6);o=u.O.icons["viewerCustomTool"+l]}t+="ngy2CustomBtn "+n+' nGEvent" data-ngy2action="'+n+'">'+o+"</div>"}else t=""}return t}function He(){u.VOM.playSlideshow?(window.clearTimeout(u.VOM.playSlideshowTimerID),u.VOM.playSlideshow=!1,u.VOM.$viewer.find(".playPauseButton").html(u.O.icons.viewerPlay)):(u.VOM.playSlideshow=!0,Qe(),u.VOM.$viewer.find(".playPauseButton").html(u.O.icons.viewerPause))}function Ue(){u.VOM.toolbarMode="std";for(var e="",t=u.O.viewerToolbar.standard.split(","),n=0,i=t.length;n<i;n++)e+=Be(t[n]);u.VOM.$toolbar.find(".toolbar").html(e),je()}function We(){if(null==u.O.viewerToolbar.minimized||""==u.O.viewerToolbar.minimized)Ue();else{u.VOM.toolbarMode="min";for(var e="",t=u.O.viewerToolbar.minimized.split(","),n=0,i=t.length;n<i;n++)e+=Be(t[n]);u.VOM.$toolbar.find(".toolbar").html(e),je()}}function je(){var e=u.VOM.content.current.vIdx;if(null!=e){var t=u.VOM.content.current.NGY2Item(),n=!1;void 0!==t.title&&""!=t.title?(u.VOM.$viewer.find(".ngy2viewerToolAction").find(".title").html(t.title),n=!0):u.VOM.$viewer.find(".ngy2viewerToolAction").find(".title").html(""),void 0!==t.description&&""!=t.description?(u.VOM.$viewer.find(".ngy2viewerToolAction").find(".description").html(t.description),n=!0):u.VOM.$viewer.find(".ngy2viewerToolAction").find(".description").html(""),n?u.VOM.$viewer.find(".ngy2viewerToolAction").find(".label").show():u.VOM.$viewer.find(".ngy2viewerToolAction").find(".label").hide();var i=u.VOM.items.length;i>0&&u.VOM.$viewer.find(".pageCounter").html(u.VOM.items[e].mediaNumber+"/"+i);var a=u.VOM.$viewer.find(".ngy2CustomBtn"),o=u.O.fnImgToolbarCustDisplay;a.length>0&&null!==o&&("function"==typeof o?o(a,t):window[o](a,t)),Pe()}}function Xe(e){if(u.VOM.swipePosX=e,null==u.CSStransformName);else{u.VOM.content.current.$media[0].style[u.CSStransformName]="translate("+e+"px, 0px)";var t=u.VOM.content.previous.NGY2Item(),n=u.VOM.content.next.NGY2Item();if(u.O.imageTransition.startsWith("SWIPE")){t.mediaTransition()&&et(u.VOM.content.previous,1),n.mediaTransition()&&et(u.VOM.content.next,1);var i=Math.min(Math.max(Math.abs(e)/u.VOM.window.lastWidth,.8),1);if("SWIPE"==u.O.imageTransition&&(i=1),e>0){let a=u.VOM.window.lastWidth;t.mediaTransition()&&(u.VOM.content.previous.$media[0].style[u.CSStransformName]="translate("+(-a+e)+"px, 0px) scale("+i+")"),n.mediaTransition()&&(u.VOM.content.next.$media[0].style[u.CSStransformName]="translate("+a+"px, 0px) scale("+i+")")}else{let a=-u.VOM.window.lastWidth;n.mediaTransition()&&(u.VOM.content.next.$media[0].style[u.CSStransformName]="translate("+(-a+e)+"px, 0px) scale("+i+")"),t.mediaTransition()&&(u.VOM.content.previous.$media[0].style[u.CSStransformName]="translate("+a+"px, 0px) scale("+i+")")}}if("SLIDEAPPEAR"==u.O.imageTransition)if(u.VOM.content.previous.$media[0].style[u.CSStransformName]="",u.VOM.content.next.$media[0].style[u.CSStransformName]="",e<0){let i=-e/u.VOM.window.lastWidth;n.mediaTransition()&&et(u.VOM.content.next,i),t.mediaTransition()&&et(u.VOM.content.previous,0)}else{let i=e/u.VOM.window.lastWidth;t.mediaTransition()&&et(u.VOM.content.previous,i),n.mediaTransition()&&et(u.VOM.content.next,0)}}}function Qe(e){e=e||0,u.VOM.viewerMediaIsChanged||(new Date).getTime()-u.VOM.timeImgChanged<300||(at("lightboxNextImage"),Ze("nextImage",e))}function qe(e){e=e||0,u.VOM.viewerMediaIsChanged||(new Date).getTime()-u.VOM.timeImgChanged<300||(u.VOM.playSlideshow&&He(),at("lightboxPreviousImage"),Ze("previousImage",e))}function Ze(e,t){t=t||0,u.O.debugMode&&console.timeline&&console.timeline("nanogallery2_viewer"),u.VOM.playSlideshow&&window.clearTimeout(u.VOM.playSlideshowTimerID);var n=null,i=null;switch(u.VOM.timeImgChanged=(new Date).getTime(),u.VOM.viewerMediaIsChanged=!0,u.VOM.zoom.isZooming=!1,nt(!0),e){case"":n=u.VOM.content.current,i=u.VOM.content.current;break;case"previousImage":n=u.VOM.content.current,i=u.VOM.content.previous;break;default:n=u.VOM.content.current,i=u.VOM.content.next}if(rt(i.NGY2Item().albumID,i.NGY2Item().GetID()),""!=e){var a=u.GOM.cache.viewport,o="",r=500*(a.w-Math.abs(u.VOM.swipePosX))/a.w;if(t>0&&(r=Math.min((a.w-Math.abs(u.VOM.swipePosX))/t,r),o="linear"),null==u.CSStransformName)et(i,1),et(n,1),Je(e);else switch(u.O.imageTransition){case"SWIPE":case"SWIPE2":var l="nextImage"==e?-a.w:a.w;i.$media[0].style[u.CSStransformName]="translate("+-l+"px, 0px) ",0==t&&(o="swipe"==u.O.imageTransition?"easeInOutSine":"easeOutCubic"),et(u.VOM.content.current,1),u.VOM.content.current.$media[0].style[u.CSStransformName]="translate(0px, 0px)",et(i,1),(new NGTweenable).tween({from:{t:u.VOM.swipePosX},to:{t:"nextImage"==e?-a.w:a.w},attachment:{dT:e,new_content_item:i,dir:l,media_transition:i.NGY2Item().mediaTransition()},duration:r,easing:o,step:function(e,t){if(u.VOM.content.current.$media[0].style[u.CSStransformName]="translate("+e.t+"px, 0px)",t.media_transition){var n=Math.min(Math.max(Math.abs(e.t)/u.VOM.window.lastWidth,.8),1);"SWIPE"==u.O.imageTransition&&(n=1),t.new_content_item.$media[0].style[u.CSStransformName]="translate("+(-t.dir+e.t)+"px, 0px) scale("+n+")"}},finish:function(e,t){u.VOM.content.current.$media[0].style[u.CSStransformName]="",et(u.VOM.content.current,0),t.new_content_item.$media[0].style[u.CSStransformName]="",Je(t.dT)}});break;case"SLIDEAPPEAR":default:var s=Math.abs(u.VOM.swipePosX)/u.VOM.window.lastWidth;i.$media[0].style[u.CSStransformName]="",0==t&&(o="easeInOutSine"),(new NGTweenable).tween({from:{o:s,t:u.VOM.swipePosX},to:{o:1,t:"nextImage"==e?-a.w:a.w},attachment:{dT:e,new_content_item:i,media_transition:i.NGY2Item().mediaTransition()},delay:30,duration:r,easing:o,step:function(e,t){u.VOM.content.current.$media[0].style[u.CSStransformName]="translate("+e.t+"px, 0px)",t.media_transition&&et(t.new_content_item,e.o)},finish:function(e,t){u.VOM.content.current.$media[0].style[u.CSStransformName]="",Je(t.dT)}})}}}function Je(e){var t=0;switch(e){case"":t=u.VOM.content.current.vIdx;break;case"previousImage":t=u.VOM.content.previous.vIdx;break;default:t=u.VOM.content.next.vIdx}u.VOM.content.current.vIdx=t,u.VOM.content.next.vIdx=u.VOM.IdxNext(),u.VOM.content.previous.vIdx=u.VOM.IdxPrevious(),u.VOM.gallery.Resize(),u.VOM.gallery.SetThumbnailActive();var n=u.VOM.content.current.NGY2Item();je(),u.O.debugMode&&console.timeline&&console.timelineEnd("nanogallery2_viewer");var i=u.O.fnImgDisplayed;if(null!==i&&("function"==typeof i?i(n):window[i](n)),u.VOM.swipePosX=0,""!=e){u.VOM.content.current.$media.removeClass("imgCurrent");var a=u.VOM.content.current.$media;switch(e){case"nextImage":u.VOM.content.current.$media=u.VOM.content.next.$media,u.VOM.content.next.$media=a;break;case"previousImage":u.VOM.content.current.$media=u.VOM.content.previous.$media,u.VOM.content.previous.$media=a}}u.VOM.content.current.$media.addClass("imgCurrent");var o=u.VOM.$content.find(".nGY2ViewerMediaPan");u.VOM.content.current.$media.insertAfter(o.last()),"img"==n.mediaKind&&0==n.imageWidth?et(u.VOM.content.current,0):(u.VOM.content.current.$media.children().eq(0).attr("class","nGY2ViewerMediaLoaderHidden"),et(u.VOM.content.current,1)),u.VOM.content.next.$media.empty();var r=u.VOM.content.next.NGY2Item(),l='<div class="nGY2ViewerMediaLoaderDisplayed"></div>';"img"==r.mediaKind&&0!=r.imageWidth&&0!=r.imageHeight&&(l='<div class="nGY2ViewerMediaLoaderHidden"></div>'),u.VOM.content.next.$media.append(l+r.mediaMarkup),et(u.VOM.content.next,0),et(u.VOM.content.previous,0),"img"==r.mediaKind?u.VOM.ImageLoader.loadImage(Ke,r):Ce(u.VOM.content.next.$media),u.VOM.content.previous.$media.empty();var s=u.VOM.content.previous.NGY2Item();l='<div class="nGY2ViewerMediaLoaderDisplayed"></div>',"img"==s.mediaKind&&0!=s.imageWidth&&0!=s.imageHeight&&(l='<div class="nGY2ViewerMediaLoaderHidden"></div>'),u.VOM.content.previous.$media.append(l+s.mediaMarkup),et(u.VOM.content.previous,0),et(u.VOM.content.next,0),"img"==s.mediaKind?u.VOM.ImageLoader.loadImage(Ke,s):Ce(u.VOM.content.previous.$media),u.VOM.playSlideshow&&u.VOM.content.current.$media.children().eq(1).ngimagesLoaded().always((function(e){u.VOM.playSlideshow&&(u.VOM.playSlideshowTimerID=window.setTimeout((function(){Qe()}),u.VOM.slideshowDelay))})),nt(),u.VOM.viewerMediaIsChanged=!1,at("lightboxImageDisplayed")}function Ke(e,t,n,i){n.imageWidth=e,n.imageHeight=t,u.VOM.content.current.NGY2Item()==n&&(u.VOM.content.current.$media.children().eq(0).attr("class","nGY2ViewerMediaLoaderHidden"),et(u.VOM.content.current,1),u.VOM.zoom.userFactor=1),u.VOM.content.next.NGY2Item()==n&&u.VOM.content.next.$media.children().eq(0).attr("class","nGY2ViewerMediaLoaderHidden"),u.VOM.content.previous.NGY2Item()==n&&u.VOM.content.previous.$media.children().eq(0).attr("class","nGY2ViewerMediaLoaderHidden"),Le()}function et(e,t){var n=e.NGY2Item(),i=e.$media;"img"!=n.mediaKind||0!=n.imageWidth?0==t?i.children().css({opacity:0,visibility:"hidden"}):i.children().css({opacity:t,visibility:"visible"}):i.children().eq(1).css({opacity:0,visibility:"hidden"})}function tt(e){if(null==e&&(e=u.VOM.content.current.vIdx),u.VOM.viewerMediaIsChanged=!1,u.VOM.viewerDisplayed){if(jQuery("body").removeClass("nGY2_body_scrollbar"),jQuery("#nGY2_body_scrollbar_style").remove(),u.VOM.playSlideshow&&(window.clearTimeout(u.VOM.playSlideshowTimerID),u.VOM.playSlideshow=!1),u.VOM.hammertime.destroy(),u.VOM.hammertime=null,ngscreenfull.enabled&&u.VOM.viewerIsFullscreen&&(u.VOM.viewerIsFullscreen=!1,ngscreenfull.exit()),jQuery(".nGY2ViewerContainer").remove(),u.VOM.$baseCont=null,u.VOM.viewerDisplayed=!1,u.O.lightboxStandalone)return;if(u.O.thumbnailAlbumDisplayImage)if(null==e);else{var t=u.I[u.VOM.items[e].ngy2ItemIdx],n=NGY2Item.Get(u,t.albumID);u.GOM.albumIdx!=n.albumID?g("-1",n.albumID):(x(),rt("",""),U())}else null!=e&&(-1==u.GOM.albumIdx?g("",u.I[u.VOM.items[e].ngy2ItemIdx].albumID):(x(),rt(u.I[u.VOM.items[e].ngy2ItemIdx].albumID,""),U()));u.VOM.timeImgChanged=(new Date).getTime()}}function nt(e){if(e=void 0!==e&&e,null!==u.VOM.$toolbar){var t=u.VOM.$viewer.width(),n=u.VOM.$viewer.height();if(null!=u.VOM.content.current.$media.children().eq(1)&&-1!=u.VOM.content.current.vIdx&&(e||u.VOM.window.lastWidth!=t||u.VOM.window.lastHeight!=n)){u.VOM.window.lastWidth=t,u.VOM.window.lastHeight=n;var i=0,a=0;switch("none"!=u.O.viewerGallery&&(i=u.O.viewerGalleryTHeight+10),"bottom"==u.O.viewerGallery&&(a=i),u.O.viewerToolbar.position){case"top":case"topOverImage":u.VOM.$content.css({height:n,width:t,top:0}),u.VOM.$toolbar.css({top:0,bottom:""});break;case"bottom":case"bottomOverImage":default:n-=a,u.VOM.$content.css({height:n,width:t,bottom:-a,top:0}),u.VOM.$toolbar.css({bottom:i})}!u.VOM.viewerMediaIsChanged&&u.VOM.zoom.isZooming?Le():u.VOM.zoom.isZooming||0==u.VOM.zoom.userFactor&&0==u.VOM.panPosX&&0==u.VOM.panPosY&&0==u.VOM.zoom.posX&&0==u.VOM.zoom.posY?(u.VOM.zoom.userFactor=1,u.VOM.zoom.isZooming=!1,u.VOM.panPosX=0,u.VOM.panPosY=0,u.VOM.zoom.posX=0,u.VOM.zoom.posY=0,Le()):(u.VOM.zoom.isZooming=!0,(new NGTweenable).tween({from:{userFactor:u.VOM.zoom.userFactor,panPosX:u.VOM.panPosX,panPosY:u.VOM.panPosY,zoomPosX:u.VOM.zoom.posX,zoomPosY:u.VOM.zoom.posY},to:{userFactor:1,panPosX:0,panPosY:0,zoomPosX:0,zoomPosY:0},easing:"easeInOutSine",delay:0,duration:150,step:function(e){u.VOM.zoom.userFactor=e.userFactor,u.VOM.panPosX=e.panPosX,u.VOM.panPosY=e.panPosY,u.VOM.zoom.posX=e.zoomPosX,u.VOM.zoom.posY=e.zoomPosY,Le()},finish:function(e){u.VOM.zoom.isZooming=!1}}))}}}function it(e){const t=/(auto|scroll)/,n=(e,t)=>null===e.parentNode?t:n(e.parentNode,t.concat([e])),i=(e,t)=>getComputedStyle(e,null).getPropertyValue(t),a=e=>t.test((e=>i(e,"overflow")+i(e,"overflow-y")+i(e,"overflow-x"))(e));return(e=>{if(!(e instanceof HTMLElement||e instanceof SVGElement))return;const t=n(e.parentNode,[]);for(let e=0;e<t.length;e+=1){if(t[e]===document.body)return null;if(a(t[e]))return t[e]}return document.scrollingElement||document.documentElement})(e)}function at(e){var t=e+".nanogallery2",n=null;try{n=new Event(t)}catch(e){(n=document.createEvent("Event")).initEvent(t,!1,!1)}u.$E.base.trigger(t,n)}function ot(){if(!u.O.locationHash)return!1;var e="#nanogallery/"+u.baseEltID+"/",t=location.hash;if(u.O.debugMode&&(console.log("------------------------ PROCESS LOCATION HASH"),console.log("newLocationHash1: "+t),console.log("G.locationHashLastUsed: "+u.locationHashLastUsed)),""==t&&""!==u.locationHashLastUsed)return u.O.debugMode&&console.log("display root album"),u.locationHashLastUsed="",u.O.debugMode&&console.log("new3 G.locationHashLastUsed: "+u.locationHashLastUsed),g("","0"),!0;if(t!=u.locationHashLastUsed){if(0==t.indexOf(e)){var n=p(t.substring(e.length));return"0"!=n.imageID?(u.O.debugMode&&console.log("display image: "+n.albumID+"-"+n.imageID),Q(n.imageID,n.albumID),!0):(u.O.debugMode&&console.log("display album: "+n.albumID),g("-1",n.albumID),!0)}return!1}}function rt(e,t){if(!u.O.locationHash||u.O.lightboxStandalone)return!1;if(u.O.debugMode&&console.log("------------------------ SET LOCATION HASH"),""==t&&("-1"==e||"0"==e||u.O.album==e))return""!=location.hash&&("pushState"in history?history.pushState("",document.title,window.location.pathname+window.location.search):location.hash=""),u.locationHashLastUsed="",void(u.O.debugMode&&console.log("new2 G.locationHashLastUsed: "+u.locationHashLastUsed));var n="#nanogallery/"+u.baseEltID+"/"+e;""!=t&&(n+="/"+t);var i=location.hash;if(u.O.debugMode&&(console.log("newLocationHash2: "+n),console.log("location.hash: "+i)),u.locationHashLastUsed=n,u.O.debugMode&&console.log("new G.locationHashLastUsed: "+u.locationHashLastUsed),""==i||i!=n)try{top.location.hash=n}catch(e){u.O.locationHash=!1}}function lt(){C();var e=u.GOM.curNavLevel,t=u.GOM.curWidth;if(u.VOM.viewerDisplayed)nt(),u.VOM.gallery.Resize();else if(u.galleryResizeEventEnabled){var n=ht();if(-1!=u.GOM.albumIdx){var i=u.tn.settings;if("MOSAIC"==u.layout.engine){if(JSON.stringify(i.mosaic[e][t])!==JSON.stringify(i.mosaic[e][n]))return u.GOM.curWidth=n,u.GOM.pagination.currentPage=0,void w(u.GOM.albumIdx)}else if(i.height[e][t]!=i.height[e][n]||i.width[e][t]!=i.width[e][n]||i.gutterHeight[e][t]!=i.gutterHeight[e][n]||i.gutterWidth[e][t]!=i.gutterWidth[e][n])return u.GOM.curWidth=n,u.GOM.pagination.currentPage=0,void w(u.GOM.albumIdx)}x()}}function st(){u.VOM.viewerDisplayed||ut()}function ut(){0==u.galleryResizeEventEnabled?window.setTimeout(ut,10):x()}function ct(e,t){return""!=u.i18nLang&&void 0!==e[t+"_"+u.i18nLang]&&e[t+"_"+u.i18nLang].length>0?e[t+"_"+u.i18nLang]:e[t]}function ht(){var e=u.GOM.cache.viewport.w;return u.O.breakpointSizeSM>0&&e<u.O.breakpointSizeSM?"xs":u.O.breakpointSizeME>0&&e<u.O.breakpointSizeME?"sm":u.O.breakpointSizeLA>0&&e<u.O.breakpointSizeLA?"me":u.O.breakpointSizeXL>0&&e<u.O.breakpointSizeXL?"la":"xl"}function dt(e){for(var t=document.createElement("div"),n=0;n<e.length;++n)if(void 0!==t.style[e[n]])return e[n];return null}}
/*!
 * imagesLoaded PACKAGED v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */e.nanogallery2=function(e,t){var i=this;i.$e=jQuery(e),i.e=e,i.$e.data("nanogallery2data",i),i.init=function(){void 0===window.NGY2Item&&(window.NGY2Tools=function(){function e(){}return e.FilterAlbumName=function(e,t){var n=e.toUpperCase();if(!(this.albumList.length>0)){var i=!1;if(null!==this.allowList){for(a=0;a<this.allowList.length;a++)-1!==n.indexOf(this.allowList[a])&&(i=!0);if(!i)return!1}if(null!==this.blockList)for(a=0;a<this.blockList.length;a++)if(-1!==n.indexOf(this.blockList[a]))return!1;return!0}for(var a=0;a<this.albumList.length;a++)if(n===this.albumList[a].toUpperCase()||t===this.albumList[a])return!0},e.NanoAlert=function(t,n,i){e.NanoConsoleLog.call(t,n),null!=t.$E.conConsole&&(t.$E.conConsole.css({visibility:"visible",minHeight:"100px"}),0==i?t.$E.conConsole.append("<p>"+n+"</p>"):t.$E.conConsole.append("<p>nanogallery2: "+n+" ["+t.baseEltID+"]</p>"))},e.NanoConsoleLog=function(e,t){window.console&&console.log("nanogallery2: "+t+" ["+e.baseEltID+"]")},e.PreloaderDisplay=function(e){if(!0===e){if(this.$E.conLoadingB.removeClass("nanoGalleryLBarOff").addClass("nanoGalleryLBar"),null!=this.GOM.albumIdxLoading&&-1!=this.GOM.albumIdxLoading){this.I[this.GOM.albumIdxLoading].$Elts[".nGY2TnImg"].addClass("nGY2GThumbnailLoaderDisplayed")}}else if(this.$E.conLoadingB.removeClass("nanoGalleryLBar").addClass("nanoGalleryLBarOff"),null!=this.GOM.albumIdxLoading&&-1!=this.GOM.albumIdxLoading){this.I[this.GOM.albumIdxLoading].$Elts[".nGY2TnImg"].removeClass("nGY2GThumbnailLoaderDisplayed")}},e.AreaShuffle=function(e){for(var t,n,i=e.length;i;t=Math.floor(Math.random()*i),n=e[--i],e[i]=e[t],e[t]=n);return e},e.GetImageTitleFromURL=function(e){return"%filename"==this.O.thumbnailLabel.get("title")?e.split("/").pop().replace("_"," "):"%filenameNoExt"==this.O.thumbnailLabel.get("title")?e.split("/").pop().split(".").shift().replace("_"," "):""},e.AlbumPostProcess=function(t){var n=this.gallerySorting[this.GOM.curNavLevel],i=this.galleryMaxItems[this.GOM.curNavLevel];if(""!=n||i>0){var a=this.I.filter((function(e){return e.albumID==t&&"albumUp"!=e.kind}));switch(n){case"RANDOM":a=e.AreaShuffle(a);break;case"REVERSED":a=a.reverse();break;case"TITLEASC":a.sort((function(e,t){return e.title.toUpperCase()<t.title.toUpperCase()?-1:e.title.toUpperCase()>t.title.toUpperCase()?1:0}));break;case"TITLEDESC":a.sort((function(e,t){return e.title.toUpperCase()>t.title.toUpperCase()?-1:e.title.toUpperCase()<t.title.toUpperCase()?1:0}))}i>0&&a.length>i&&a.splice(i-1,a.length-i),this.I.removeIf((function(e){return e.albumID==t&&"albumUp"!=e.kind})),this.I.push.apply(this.I,a)}},e}(),window.NGY2Item=function(){var e=1;function t(t){var n=0;n=null==t?e++:t,this.GetID=function(){return n},this.kind="",this.mediaKind="img",this.mediaMarkup="",this.G=null,this.title="",this.description="",this.albumID=0,this.src="",this.width=0,this.height=0,this.destinationURL="",this.downloadURL="",this.author="",this.left=0,this.top=0,this.width=0,this.height=0,this.resizedContentWidth=0,this.resizedContentHeight=0,this.thumbs={url:{l1:{xs:"",sm:"",me:"",la:"",xl:""},lN:{xs:"",sm:"",me:"",la:"",xl:""}},width:{l1:{xs:0,sm:0,me:0,la:0,xl:0},lN:{xs:0,sm:0,me:0,la:0,xl:0}},height:{l1:{xs:0,sm:0,me:0,la:0,xl:0},lN:{xs:0,sm:0,me:0,la:0,xl:0}}},this.thumbnailImgRevealed=!1,this.imageDominantColors=null,this.imageDominantColor=null,this.featured=!1,this.flickrThumbSizes={},this.picasaThumbs=null,this.hovered=!1,this.hoverInitDone=!1,this.contentIsLoaded=!1,this.contentLength=0,this.numberItems=0,this.mediaNumber=0,this.mediaCounter=0,this.eltTransform=[],this.eltFilter=[],this.eltEffect=[],this.paginationLastPage=0,this.paginationLastWidth=0,this.customData={},this.selected=!1,this.imageWidth=0,this.imageHeight=0,this.$elt=null,this.$Elts=[],this.tags=[],this.albumTagList=[],this.albumTagListSel=[],this.exif={exposure:"",flash:"",focallength:"",fstop:"",iso:"",model:"",time:"",location:""},this.deleted=!1,this.rotationAngle=0}t.Get=function(e,t){for(var n=e.I.length,i=0;i<n;i++)if(e.I[i].GetID()==t)return e.I[i];return null},t.GetIdx=function(e,t){for(var n=e.I.length,i=0;i<n;i++)if(e.I[i].GetID()==t)return i;return-1},t.New=function(e,n,i,o,r,l,s){var u=t.Get(e,r);if(null!==e.O.titleTranslationMap){let t=e.O.titleTranslationMap.find(e=>e.title===n);void 0!==t&&(n=t.replace)}if(-1!=r&&0!=r&&"image gallery by nanogallery2 [build]"!=n&&e.O.thumbnailLevelUp&&0==u.getContentLength(!1)&&""==e.O.album){let n=new t("0");e.I.push(n),u.contentLength+=1,n.title="UP",n.albumID=r,n.kind="albumUp",n.G=e,jQuery.extend(!0,n.thumbs.width,e.tn.defaultSize.width),jQuery.extend(!0,n.thumbs.height,e.tn.defaultSize.height)}var c=t.Get(e,o);null===c&&(c=new t(o),e.I.push(c),-1!=r&&"image gallery by nanogallery2 [build]"!=n&&(u.contentLength+=1)),c.G=e,c.albumID=r,c.kind=l,"image"==l&&(u.mediaCounter+=1,c.mediaNumber=u.mediaCounter);var h=e.O.thumbnailFeaturedKeyword;if(""!=h){h=h.toUpperCase();var d=n.toUpperCase().indexOf(h);d>-1&&(c.featured=!0,n=n.substring(0,d)+n.substring(d+h.length,n.length)),(d=i.toUpperCase().indexOf(h))>-1&&(c.featured=!0,i=i.substring(0,d)+i.substring(d+h.length,i.length))}if("string"==typeof e.galleryFilterTags.Get())switch(e.galleryFilterTags.Get().toUpperCase()){case"TITLE":{let e,t=/(?:^|\W)#(\w+)(?!\w)/g,i=[];for(;e=t.exec(n);)i.push(e[1].replace(/^\s*|\s*$/,""));c.setTags(i),n=n.split("#").join("");break}case"DESCRIPTION":{let e,t=/(?:^|\W)#(\w+)(?!\w)/g,n=[];for(;e=t.exec(i);)n.push(e[1].replace(/^\s*|\s*$/,""));c.setTags(n),i=i.split("#").join("");break}}else""!=s&&null!=s&&c.setTags(s.split(" "));return c.title=a(e,n),c.description=a(e,i),c},t.prototype.delete=function(){this.deleted=!0,this.G.I[t.GetIdx(this.G,this.albumID)].contentLength--,this.G.I[t.GetIdx(this.G,this.albumID)].numberItems--;for(var e=this.G.GOM.items.length,n=this.GetID(),i=-1,a=-1,o=0;o<e;o++){var r=this.G.GOM.items[o],l=this.G.I[r.thumbnailIdx];l.GetID()==n?r.neverDisplayed||(i=r.thumbnailIdx,a=o):-1!=i&&(r.neverDisplayed||(l.$getElt(".nGY2GThumbnail").data("index",o-1),l.$getElt(".nGY2GThumbnailImg").data("index",o-1)))}if(-1!=i){var s=this.G;1==this.selected&&(this.selected=!1,s.GOM.nbSelected--),null!==s.I[i].$elt&&s.I[i].$elt.remove(),s.GOM.items.splice(a,1),-1!=s.GOM.lastDisplayedIdx&&(s.GOM.lastDisplayedIdx-=1)}},t.prototype.addToGOM=function(){for(var e=this.GetID(),t=this.G.I.length,n=0;n<t;n++){var i=this.G.I[n];if(i.GetID()==e){var a=i.thumbImg().width,o=i.thumbImg().height;0==o&&(o=this.G.tn.defaultSize.getHeight()),0==a&&(a=this.G.tn.defaultSize.getWidth());var r=new this.G.GOM.GTn(n,a,o);this.G.GOM.items.push(r);break}}};var i={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function a(e,t){return 1==e.O.allowHTMLinData?t:String(t).replace(/[&<>"'`=\/]/g,(function(e){return i[e]}))}function o(e,t){if("0"===(e=String(e))||1==t)return e;var n=Number(e.replace(/[a-zA-Z]/g,"")),i=e.match(/([^\-0-9\.]+)/g),a="";return null!=i&&i.length>0&&(a=i.join()),isNaN(n)||0==n?e:(n*=t)+a}return t.get_nextId=function(){return e},t.prototype.$getElt=function(e,t){return null==this.$elt?null:(void 0!==this.$Elts[e]&&1==!t||(this.$Elts[e]=".nGY2GThumbnail"==e?this.$elt:this.$elt.find(e)),this.$Elts[e])},t.prototype.removeElt=function(e){if(null!=this.$elt&&null!=this.$Elts[e]){this.$Elts[e].remove();var t=this.$Elts.indexOf(e);this.$Elts.splice(t,1)}},t.prototype.album=function(){return this.G.I[t.GetIdx(this.G,this.albumID)]},t.prototype.mediaTransition=function(){return this.G.O.viewerTransitionMediaKind.indexOf(this.mediaKind)>-1},t.prototype.imageSet=function(e,t,n){this.src=e,this.width=t,this.height=n},t.prototype.thumbSet=function(e,t,n,i,a){var o=["xs","sm","me","la","xl"];if(void 0===i||""==i||null==i)for(var r=0;r<o.length;r++)void 0===a||""==a?(this.thumbs.url.l1[o[r]]=e,this.thumbs.height.l1[o[r]]=n,this.thumbs.width.l1[o[r]]=t,this.thumbs.url.lN[o[r]]=e,this.thumbs.height.lN[o[r]]=n,this.thumbs.width.lN[o[r]]=t):(this.thumbs.url[a][o[r]]=e,this.thumbs.height[a][o[r]]=n,this.thumbs.width[a][o[r]]=t);else void 0===a||""==a||null==a?(this.thumbs.url.l1[i]=e,this.thumbs.height.l1[i]=n,this.thumbs.width.l1[i]=t,this.thumbs.url.lN[i]=e,this.thumbs.height.lN[i]=n,this.thumbs.width.lN[i]=t):(this.thumbs.url[a][i]=e,this.thumbs.height[a][i]=n,this.thumbs.width[a][i]=t);for(r=0;r<o.length;r++)this.thumbs.height.l1[o[r]]=n;for(r=0;r<o.length;r++)this.G.tn.settings.height.lN[o[r]]==this.G.tn.settings.getH()&&this.G.tn.settings.width.l1[o[r]]==this.G.tn.settings.getW()&&(this.thumbs.height.lN[o[r]]=n)},t.prototype.thumbSetImgHeight=function(e){for(var t=["xs","sm","me","la","xl"],n=0;n<t.length;n++)this.G.tn.settings.height.l1[t[n]]==this.G.tn.settings.getH()&&this.G.tn.settings.width.l1[t[n]]==this.G.tn.settings.getW()&&(this.thumbs.height.l1[t[n]]=e);for(n=0;n<t.length;n++)this.G.tn.settings.height.lN[t[n]]==this.G.tn.settings.getH()&&this.G.tn.settings.width.l1[t[n]]==this.G.tn.settings.getW()&&(this.thumbs.height.lN[t[n]]=e)},t.prototype.thumbSetImgWidth=function(e){for(var t=["xs","sm","me","la","xl"],n=0;n<t.length;n++)this.G.tn.settings.height.l1[t[n]]==this.G.tn.settings.getH()&&this.G.tn.settings.width.l1[t[n]]==this.G.tn.settings.getW()&&(this.thumbs.width.l1[t[n]]=e);for(n=0;n<t.length;n++)this.G.tn.settings.height.lN[t[n]]==this.G.tn.settings.getH()&&this.G.tn.settings.width.l1[t[n]]==this.G.tn.settings.getW()&&(this.thumbs.width.lN[t[n]]=e)},t.prototype.thumbImg=function(){var e={src:"",width:0,height:0};return"image gallery by nanogallery2 [build]"==this.title?(e.src=this.G.emptyGif,e.url=this.G.emptyGif,e):(e.src=this.thumbs.url[this.G.GOM.curNavLevel][this.G.GOM.curWidth],e.width=this.thumbs.width[this.G.GOM.curNavLevel][this.G.GOM.curWidth],e.height=this.thumbs.height[this.G.GOM.curNavLevel][this.G.GOM.curWidth],e)},t.prototype.setTags=function(e){if(e.length>0){this.tags=e;for(var t=this.album().albumTagList,n=0;n<e.length;n++){for(var i=!1,a=0;a<t.length;a++)e[n].toUpperCase()==t[a].toUpperCase()&&(i=!0);0==i&&this.album().albumTagList.push(e[n])}}},t.prototype.checkTagFilter=function(){if(0!=this.G.galleryFilterTags.Get()&&this.album().albumTagList.length>0){if(this.G.O.thumbnailLevelUp&&"albumUp"==this.kind)return!0;var e=!1,t=this.album().albumTagListSel;if(0==t.length)return!0;for(var n=0;n<this.tags.length;n++)for(var i=0;i<t.length;i++)if(this.tags[n].toUpperCase()==t[i].toUpperCase()){e=!0;break}return e}return!0},t.prototype.isSearchTagFound=function(){if(""==this.G.GOM.albumSearchTags)return!0;if(this.G.O.thumbnailLevelUp&&"albumUp"==this.kind)return!0;for(var e=0;e<this.tags.length;e++)if(this.tags[e].toUpperCase().indexOf(this.G.GOM.albumSearchTags)>=0)return!0;return!1},t.prototype.setMediaURL=function(e,t){this.src=e,this.mediaKind=t,"img"==t&&(this.mediaMarkup='<img class="nGY2ViewerMedia" src="'+e+'" alt=" " itemprop="contentURL" draggable="false">')},t.prototype.isToDisplay=function(e){return this.albumID==e&&this.checkTagFilter()&&this.isSearchFound()&&this.isSearchTagFound()&&0==this.deleted},t.prototype.getContentLength=function(e){if(0==e||0==this.albumTagList.length||0==this.G.galleryFilterTags.Get())return this.contentLength;for(var t=this.G.I.length,n=0,i=this.GetID(),a=0;a<t;a++){this.G.I[a].isToDisplay(i)&&n++}return n},t.prototype.isSearchFound=function(){return""==this.G.GOM.albumSearch||-1!=this.title.toUpperCase().indexOf(this.G.GOM.albumSearch)},t.prototype.responsiveURL=function(){var e="";switch(this.G.O.kind){case"":case"flickr":e=this.src;break;case"picasa":case"google":case"google2":default:e=this.src}return e},t.prototype.ThumbnailImageReveal=function(){0==this.thumbnailImgRevealed&&(this.thumbnailImgRevealed=!0,(new NGTweenable).tween({from:{opacity:0},to:{opacity:1},attachment:{item:this},delay:30,duration:400,easing:"easeOutQuart",step:function(e,t){var n=t.item.$getElt(".nGY2TnImg");null!=n&&n.css(e)}}))},t.prototype.CSSTransformApply=function(e){var t=this.eltTransform[e];if(".nGY2GThumbnail"==e)for(var n=t.$elt.length-1,i=1,a=1,r=1,l=1,s=1,u=1,c=1,h=n;h>=0;h--){var d="translateX("+o(t.translateX,i)+") translateY("+o(t.translateY,a)+") translateZ("+o(t.translateZ,r)+") scale("+o(t.scale,c)+") translate("+o(t.translate,1)+")";this.G.IE<=9||this.G.isGingerbread?d+=" rotate("+o(t.rotateZ,u)+")":d+=" rotateX("+o(t.rotateX,l)+") rotateY("+o(t.rotateY,s)+") rotateZ("+o(t.rotateZ,u)+") rotate("+o(t.rotate,1)+")",t.$elt[h].style[this.G.CSStransformName]=d,n>0&&(i-=this.G.tn.opt.Get("stacksTranslateX"),a-=this.G.tn.opt.Get("stacksTranslateY"),r-=this.G.tn.opt.Get("stacksTranslateZ"),l-=this.G.tn.opt.Get("stacksRotateX"),s-=this.G.tn.opt.Get("stacksRotateY"),u-=this.G.tn.opt.Get("stacksRotateZ"),c-=this.G.tn.opt.Get("stacksScale"))}else if(null!=t.$elt)for(h=0;h<t.$elt.length;h++)if(null!=t.$elt[h]){d="translateX("+t.translateX+") translateY("+t.translateY+") translateZ("+t.translateZ+") scale("+t.scale+") translate("+t.translate+")";this.G.IE<=9||this.G.isGingerbread?d+=" rotate("+t.rotateZ+")":d+=" rotateX("+t.rotateX+") rotateY("+t.rotateY+") rotateZ("+t.rotateZ+") rotate("+t.rotate+")",t.$elt[h].style[this.G.CSStransformName]=d}},t.prototype.CSSTransformSet=function(e,t,n,i){null==this.eltTransform[e]&&(this.eltTransform[e]={translateX:0,translateY:0,translateZ:0,rotateX:0,rotateY:0,rotateZ:0,scale:1,translate:"0px,0px",rotate:0},this.eltTransform[e].$elt=this.$getElt(e)),this.eltTransform[e][t]=n,!0===i&&(this.eltTransform[e].$elt=this.$getElt(e,!0))},t.prototype.CSSFilterApply=function(e){var t=this.eltFilter[e],n="blur("+t.blur+") brightness("+t.brightness+") grayscale("+t.grayscale+") sepia("+t.sepia+") contrast("+t.contrast+") opacity("+t.opacity+") saturate("+t.saturate+")";if(null!=t.$elt)for(var i=0;i<t.$elt.length;i++)null!=t.$elt[i]&&(t.$elt[i].style.WebkitFilter=n,t.$elt[i].style.filter=n)},t.prototype.CSSFilterSet=function(e,t,n,i){null==this.eltFilter[e]&&(this.eltFilter[e]={blur:0,brightness:"100%",grayscale:"0%",sepia:"0%",contrast:"100%",opacity:"100%",saturate:"100%"},this.eltFilter[e].$elt=this.$getElt(e)),this.eltFilter[e][t]=n,!0===i&&(this.eltTransform[e].$elt=this.$getElt(e,!0))},t.prototype.animate=function(e,t,i){if(null!=this.$getElt()){var a={};a.G=this.G,a.item=this,a.effect=e,a.hoverIn=i,a.cssKind="",i?(null==this.eltEffect[e.element]&&(this.eltEffect[e.element]=[]),null==this.eltEffect[e.element][e.type]&&(this.eltEffect[e.element][e.type]={initialValue:0,lastValue:0}),e.firstKeyframe&&(this.eltEffect[e.element][e.type]={initialValue:e.from,lastValue:e.from}),a.animeFrom=e.from,a.animeTo=e.to,a.animeDuration=parseInt(e.duration),a.animeDelay=30+parseInt(e.delay+t),a.animeEasing=e.easing):(a.animeFrom=this.eltEffect[e.element][e.type].lastValue,a.animeTo=this.eltEffect[e.element][e.type].initialValue,a.animeDuration=parseInt(e.durationBack),a.animeDelay=30+parseInt(e.delayBack+t),a.animeEasing=e.easingBack);for(var o=["translateX","translateY","translateZ","scale","rotateX","rotateY","rotateZ"],r=0;r<o.length;r++)if(e.type==o[r]){a.cssKind="transform";break}var l=["blur","brightness","grayscale","sepia","contrast","opacity","saturate"];for(r=0;r<l.length;r++)if(e.type==l[r]){a.cssKind="filter";break}!i||".nGY2GThumbnail"!=e.element||"scale"!=e.type&&"rotateX"!=e.type||(this.G.GOM.lastZIndex++,this.$getElt(e.element).css("z-index",this.G.GOM.lastZIndex));var s=new NGTweenable;a.tweenable=s,s.tween({attachment:a,from:{v:a.animeFrom},to:{v:a.animeTo},duration:a.animeDuration,delay:a.animeDelay,easing:a.animeEasing,step:function(e,t){if(null!=t.item.$getElt())if(!t.hoverIn||t.item.hovered){if(t.G.VOM.viewerDisplayed)t.tweenable.stop(!1);else if(e.v!=t.animeFrom){switch(t.cssKind){case"transform":t.item.CSSTransformSet(t.effect.element,t.effect.type,e.v),t.item.CSSTransformApply(t.effect.element);break;case"filter":t.item.CSSFilterSet(t.effect.element,t.effect.type,e.v),t.item.CSSFilterApply(t.effect.element);break;default:var a=e.v;"rgb("!=e.v.substring(0,4)&&"rgba("!=e.v.substring(0,5)||(a=n(0,a)),t.item.$getElt(t.effect.element).css(t.effect.type,a)}i&&(t.item.eltEffect[t.effect.element][t.effect.type].lastValue=e.v)}}else t.tweenable.stop(!1);else t.tweenable.stop(!1)},finish:function(e,t){if(i&&(t.item.eltEffect[t.effect.element][t.effect.type].lastValue=e.v),null!=t.item.$getElt()&&(!t.hoverIn||t.item.hovered)&&!t.G.VOM.viewerDisplayed)switch(t.cssKind){case"transform":t.item.CSSTransformSet(t.effect.element,t.effect.type,t.animeTo),t.item.CSSTransformApply(t.effect.element);break;case"filter":t.item.CSSFilterSet(t.effect.element,t.effect.type,t.animeTo),t.item.CSSFilterApply(t.effect.element);break;default:t.item.$getElt(t.effect.element).css(t.effect.type,t.animeTo)}}})}},t}()),i.options=jQuery.extend(!0,{},jQuery.nanogallery2.defaultOptions,t),i.nG2=null,i.nG2=new l,i.nG2.initiateGallery2(i.e,i.options)},i.test=function(){},i.init()},jQuery.nanogallery2.defaultOptions={kind:"",userID:"",photoset:"",album:"",blockList:"scrapbook|profil|auto backup",tagBlockList:"",allowList:"",albumList:"",albumList2:null,RTL:!1,flickrSkipOriginal:!0,flickrAPIKey:"",breadcrumbAutoHideTopLevel:!0,displayBreadcrumb:!0,breadcrumbOnlyCurrentLevel:!0,breadcrumbHideIcons:!0,theme:"nGY2",galleryTheme:"dark",viewerTheme:"dark",items:null,itemsBaseURL:"",thumbnailSelectable:!1,dataProvider:"",allowHTMLinData:!1,locationHash:!0,slideshowDelay:3e3,slideshowAutoStart:!1,debugMode:!1,titleTranslationMap:null,galleryDisplayMoreStep:2,galleryDisplayMode:"fullContent",galleryL1DisplayMode:null,galleryPaginationMode:"rectangles",galleryPaginationTopButtons:!0,galleryMaxRows:2,galleryL1MaxRows:null,galleryLastRowFull:!1,galleryL1LastRowFull:null,galleryLayoutEngine:"default",paginationSwipe:!0,paginationVisiblePages:10,galleryFilterTags:!1,galleryL1FilterTags:null,galleryFilterTagsMode:"single",galleryL1FilterTagsMode:null,galleryMaxItems:0,galleryL1MaxItems:null,gallerySorting:"",galleryL1Sorting:null,galleryDisplayTransition:"none",galleryL1DisplayTransition:null,galleryDisplayTransitionDuration:1e3,galleryL1DisplayTransitionDuration:null,galleryResizeAnimation:!1,galleryRenderDelay:10,thumbnailCrop:!0,thumbnailL1Crop:null,thumbnailCropScaleFactor:1.5,thumbnailLevelUp:!1,thumbnailAlignment:"fillWidth",thumbnailWidth:300,thumbnailL1Width:null,thumbnailHeight:200,thumbnailL1Height:null,thumbnailBaseGridHeight:0,thumbnailL1BaseGridHeight:null,thumbnailGutterWidth:2,thumbnailL1GutterWidth:null,thumbnailGutterHeight:2,thumbnailL1GutterHeight:null,thumbnailBorderVertical:2,thumbnailL1BorderVertical:null,thumbnailBorderHorizontal:2,thumbnailL1BorderHorizontal:null,thumbnailFeaturedKeyword:"*featured",thumbnailAlbumDisplayImage:!1,thumbnailHoverEffect2:"toolsAppear",thumbnailBuildInit2:"",thumbnailStacks:0,thumbnailL1Stacks:null,thumbnailStacksTranslateX:0,thumbnailL1StacksTranslateX:null,thumbnailStacksTranslateY:0,thumbnailL1StacksTranslateY:null,thumbnailStacksTranslateZ:0,thumbnailL1StacksTranslateZ:null,thumbnailStacksRotateX:0,thumbnailL1StacksRotateX:null,thumbnailStacksRotateY:0,thumbnailL1StacksRotateY:null,thumbnailStacksRotateZ:0,thumbnailL1StacksRotateZ:null,thumbnailStacksScale:0,thumbnailL1StacksScale:null,thumbnailDisplayOutsideScreen:!0,thumbnailWaitImageLoaded:!0,thumbnailSliderDelay:2e3,galleryBuildInit2:"",portable:!1,eventsDebounceDelay:10,touchAnimation:!1,touchAnimationL1:void 0,touchAutoOpenDelay:0,thumbnailLabel:{position:"overImage",align:"center",valign:"bottom",display:!0,displayDescription:!1,titleMaxLength:0,titleMultiLine:!1,descriptionMaxLength:0,descriptionMultiLine:!1,hideIcons:!0,title:""},thumbnailToolbarImage:{topLeft:"select",topRight:"featured"},thumbnailToolbarAlbum:{topLeft:"select",topRight:"counter"},thumbnailDisplayOrder:"",thumbnailL1DisplayOrder:null,thumbnailDisplayInterval:15,thumbnailL1DisplayInterval:null,thumbnailDisplayTransition:"fadeIn",thumbnailL1DisplayTransition:null,thumbnailDisplayTransitionEasing:"easeOutQuart",thumbnailL1DisplayTransitionEasing:null,thumbnailDisplayTransitionDuration:240,thumbnailL1DisplayTransitionDuration:null,thumbnailOpenInLightox:!0,thumbnailOpenOriginal:!1,lightboxStandalone:!1,viewer:"internal",viewerFullscreen:!1,imageTransition:"swipe2",viewerTransitionMediaKind:"img",viewerZoom:!0,viewerImageDisplay:"",openOnStart:"",viewerHideToolsDelay:4e3,viewerToolbar:{display:!1,position:"bottom",fullWidth:!1,align:"center",autoMinimize:0,standard:"minimizeButton,label",minimized:"minimizeButton,label,infoButton,shareButton,fullscreenButton"},viewerTools:{topLeft:"pageCounter,playPauseButton",topRight:"rotateLeft,rotateRight,fullscreenButton,closeButton"},viewerGallery:"bottomOverMedia",viewerGalleryTWidth:40,viewerGalleryTHeight:40,breakpointSizeSM:480,breakpointSizeME:992,breakpointSizeLA:1200,breakpointSizeXL:1800,fnThumbnailInit:null,fnThumbnailHoverInit:null,fnThumbnailHover:null,fnThumbnailHoverOut:null,fnThumbnailDisplayEffect:null,fnViewerInfo:null,fnImgToolbarCustInit:null,fnImgToolbarCustDisplay:null,fnImgToolbarCustClick:null,fnProcessData:null,fnThumbnailSelection:null,fnGalleryRenderStart:null,fnGalleryRenderEnd:null,fnGalleryObjectModelBuilt:null,fnGalleryLayoutApplied:null,fnThumbnailClicked:null,fnShoppingCartUpdated:null,fnThumbnailToolCustAction:null,fnThumbnailOpen:null,fnImgDisplayed:null,fnPopupMediaInfo:null,i18n:{breadcrumbHome:"Galleries",breadcrumbHome_FR:"Galeries",thumbnailImageTitle:"",thumbnailAlbumTitle:"",thumbnailImageDescription:"",thumbnailAlbumDescription:"",infoBoxPhoto:"Photo",infoBoxDate:"Date",infoBoxAlbum:"Album",infoBoxDimensions:"Dimensions",infoBoxFilename:"Filename",infoBoxFileSize:"File size",infoBoxCamera:"Camera",infoBoxFocalLength:"Focal length",infoBoxExposure:"Exposure",infoBoxFNumber:"F Number",infoBoxISO:"ISO",infoBoxMake:"Make",infoBoxFlash:"Flash",infoBoxViews:"Views",infoBoxComments:"Comments"},icons:{thumbnailAlbum:'<i class="nGY2Icon-folder-empty"></i>',thumbnailImage:'<i class="nGY2Icon-picture"></i>',breadcrumbAlbum:'<i class="nGY2Icon-folder-empty"></i>',breadcrumbHome:'<i class="nGY2Icon-home"></i>',breadcrumbSeparator:'<i class="nGY2Icon-left-open"></i>',breadcrumbSeparatorRtl:'<i class="nGY2Icon-right-open"></i>',navigationFilterSelected:'<i style="color:#fff;" class="nGY2Icon-ok"></i>',navigationFilterUnselected:'<i style="color:#ddd;opacity:0.3;" class="nGY2Icon-circle-empty"></i>',navigationFilterSelectedAll:'<i class="nGY2Icon-ccw"></i>',navigationPaginationPrevious:'<i class="nGY2Icon-ngy2_chevron-left"></i>',navigationPaginationNext:'<i class="nGY2Icon-ngy2_chevron-right"></i>',thumbnailSelected:'<i style="color:#bff;" class="nGY2Icon-ok-circled"></i>',thumbnailUnselected:'<i style="color:#bff;" class="nGY2Icon-circle-empty"></i>',thumbnailFeatured:'<i style="color:#dd5;" class="nGY2Icon-star"></i>',thumbnailCounter:'<i class="nGY2Icon-picture"></i>',thumbnailShare:'<i class="nGY2Icon-ngy2_share2"></i>',thumbnailDownload:'<i class="nGY2Icon-ngy2_download2"></i>',thumbnailInfo:'<i class="nGY2Icon-ngy2_info2"></i>',thumbnailShoppingcart:'<i class="nGY2Icon-basket"></i>',thumbnailDisplay:'<i class="nGY2Icon-resize-full"></i>',thumbnailCustomTool1:"T1",thumbnailCustomTool2:"T2",thumbnailCustomTool3:"T3",thumbnailCustomTool4:"T4",thumbnailCustomTool5:"T5",thumbnailCustomTool6:"T6",thumbnailCustomTool7:"T7",thumbnailCustomTool8:"T8",thumbnailCustomTool9:"T9",thumbnailCustomTool10:"T10",thumbnailAlbumUp:'<i style="font-size: 3em;" class="nGY2Icon-ngy2_chevron_up2"></i>',paginationNext:'<i class="nGY2Icon-right-open"></i>',paginationPrevious:'<i class="nGY2Icon-left-open"></i>',galleryMoreButton:'<i class="nGY2Icon-picture"></i> &nbsp; <i class="nGY2Icon-right-open"></i>',buttonClose:'<i class="nGY2Icon-ngy2_close2"></i>',viewerPrevious:'<i class="nGY2Icon-ngy2_chevron-left"></i>',viewerNext:'<i class="nGY2Icon-ngy2_chevron-right"></i>',viewerImgPrevious:'<i class="nGY2Icon-ngy2_chevron_left3"></i>',viewerImgNext:'<i class="nGY2Icon-ngy2_chevron_right3"></i>',viewerDownload:'<i class="nGY2Icon-ngy2_download2"></i>',viewerToolbarMin:'<i class="nGY2Icon-ellipsis-vert"></i>',viewerToolbarStd:'<i class="nGY2Icon-menu"></i>',viewerPlay:'<i class="nGY2Icon-play"></i>',viewerPause:'<i class="nGY2Icon-pause"></i>',viewerFullscreenOn:'<i class="nGY2Icon-resize-full"></i>',viewerFullscreenOff:'<i class="nGY2Icon-resize-small"></i>',viewerZoomIn:'<i class="nGY2Icon-ngy2_zoom_in2"></i>',viewerZoomOut:'<i class="nGY2Icon-ngy2_zoom_out2"></i>',viewerLinkOriginal:'<i class="nGY2Icon-ngy2_external2"></i>',viewerInfo:'<i class="nGY2Icon-ngy2_info2"></i>',viewerShare:'<i class="nGY2Icon-ngy2_share2"></i>',viewerRotateLeft:'<i class="nGY2Icon-ccw"></i>',viewerRotateRight:'<i class="nGY2Icon-cw"></i>',viewerShoppingcart:'<i class="nGY2Icon-basket"></i>',user:'<i class="nGY2Icon-user"></i>',location:'<i class="nGY2Icon-location"></i>',picture:'<i class="nGY2Icon-picture"></i>',config:'<i class="nGY2Icon-wrench"></i>',shareFacebook:'<i style="color:#3b5998;" class="nGY2Icon-facebook-squared"></i>',shareTwitter:'<i style="color:#00aced;" class="nGY2Icon-twitter-squared"></i>',shareTumblr:'<i style="color:#32506d;" class="nGY2Icon-tumblr-squared"></i>',sharePinterest:'<i style="color:#cb2027;" class="nGY2Icon-pinterest-squared"></i>',shareVK:'<i style="color:#3b5998;" class="nGY2Icon-vkontakte"></i>',shareMail:'<i style="color:#555;" class="nGY2Icon-mail-alt"></i>',viewerCustomTool1:"T1",viewerCustomTool2:"T2",viewerCustomTool3:"T3",viewerCustomTool4:"T4",viewerCustomTool5:"T5",viewerCustomTool6:"T6",viewerCustomTool7:"T7",viewerCustomTool8:"T8",viewerCustomTool9:"T9",viewerCustomTool10:"T10"}},jQuery.fn.nanogallery2=function(t,n,i){if(void 0===jQuery(this).data("nanogallery2data")){if("destroy"==t)return;return this.each((function(){new jQuery.nanogallery2(this,t)}))}var a=e(this).data("nanogallery2data").nG2;if(void 0===t||!0!==t.lightboxStandalone){switch(t){case"displayItem":a.DisplayItem(n);break;case"search":return a.Search(n);case"search2":return a.Search2(n,i);case"search2Execute":return a.Search2Execute();case"refresh":a.Refresh();break;case"resize":a.Resize();break;case"instance":return a;case"data":return a.data={items:a.I,gallery:a.GOM,lightbox:a.VOM,shoppingcart:a.shoppingCart},a.data;case"reload":return a.ReloadAlbum(),e(this);case"itemsSelectedGet":return a.ItemsSelectedGet();case"itemsSetSelectedValue":a.ItemsSetSelectedValue(n,i);break;case"option":if(void 0===i)return a.Get(n);a.Set(n,i),"demoViewportWidth"==n&&e(window).trigger("resize");break;case"destroy":a.Destroy(),e(this).removeData("nanogallery2data");break;case"shoppingCartGet":return a.shoppingCart;case"shoppingCartUpdate":if(void 0===i||void 0===n)return!1;for(var o=n,r=i,l=0;l<a.shoppingCart.length;l++)if(a.shoppingCart[l].ID==o){a.shoppingCart[l].qty=r;let e=a.I[a.shoppingCart[l].idx];a.ThumbnailToolbarOneCartUpdate(e),0==r&&a.shoppingCart.splice(l,1),null!==(u=a.O.fnShoppingCartUpdated)&&("function"==typeof u?u(a.shoppingCart,e,"api"):window[u](a.shoppingCart,e,"api"));break}return a.shoppingCart;case"shoppingCartRemove":if(void 0===n)return!1;var s=n;for(l=0;l<a.shoppingCart.length;l++)if(a.shoppingCart[l].ID==s){var u,c=a.I[a.shoppingCart[l].idx];a.shoppingCart[l].qty=0,a.ThumbnailToolbarOneCartUpdate(c),a.shoppingCart.splice(l,1),null!==(u=a.O.fnShoppingCartUpdated)&&("function"==typeof u?u(a.shoppingCart,c,"api"):window[u](a.shoppingCart,c,"api"));break}return a.shoppingCart;case"closeViewer":a.CloseViewer();break;case"minimizeToolbar":a.MinimizeToolbar();break;case"maximizeToolbar":a.MaximizeToolbar();break;case"paginationPreviousPage":a.PaginationPreviousPage();break;case"paginationNextPage":a.paginationNextPage();break;case"paginationGotoPage":a.PaginationGotoPage(n);break;case"paginationCountPages":a.PaginationCountPages()}return e(this)}a.LightboxReOpen()},("undefined"!=typeof window?window:this).ngEvEmitter=function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var n=this._events=this._events||{},i=n[e]=n[e]||[];return-1==i.indexOf(t)&&i.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var n=this._onceEvents=this._onceEvents||{};return(n[e]=n[e]||{})[t]=!0,this}},t.off=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){var i=n.indexOf(t);return-1!=i&&n.splice(i,1),this}},t.emitEvent=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){var i=0,a=n[i];t=t||[];for(var o=this._onceEvents&&this._onceEvents[e];a;){var r=o&&o[a];r&&(this.off(e,a),delete o[a]),a.apply(this,t),a=n[i+=r?0:1]}return this}},e}(),
/*!
 * ngimagesLoaded v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
function(e,t){e.ngimagesLoaded=function(e,t){var n=jQuery,i=e.console;function a(e,t){for(var n in t)e[n]=t[n];return e}function o(e,t,i){if(!(this instanceof o))return new o(e,t,i);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=function(e){var t=[];if(Array.isArray(e))t=e;else if("number"==typeof e.length)for(var n=0;n<e.length;n++)t.push(e[n]);else t.push(e);return t}(e),this.options=a({},this.options),"function"==typeof t?i=t:a(this.options,t),i&&this.on("always",i),this.getImages(),n&&(this.jqDeferred=new n.Deferred),setTimeout(function(){this.check()}.bind(this))}o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),!0===this.options.background&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&r[t]){for(var n=e.querySelectorAll("img"),i=0;i<n.length;i++){var a=n[i];this.addImage(a)}if("string"==typeof this.options.background){var o=e.querySelectorAll(this.options.background);for(i=0;i<o.length;i++){var l=o[i];this.addElementBackgroundImages(l)}}}};var r={1:!0,9:!0,11:!0};function l(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var n=/url\((['"])?(.*?)\1\)/gi,i=n.exec(t.backgroundImage);null!==i;){var a=i&&i[2];a&&this.addBackground(a,e),i=n.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new l(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var n=new s(e,t);this.images.push(n)},o.prototype.check=function(){var e=this;function t(t,n,i){setTimeout((function(){e.progress(t,n,i)}))}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach((function(e){e.once("progress",t),e.check()})):this.complete()},o.prototype.progress=function(e,t,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&i&&i.log("progress: "+n,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},l.prototype=Object.create(t.prototype),l.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},l.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},l.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},l.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},l.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},l.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},l.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(l.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((n=t).fn.ngimagesLoaded=function(e,t){return new o(this,e,t).jqDeferred.promise(n(this))})},o.makeJQueryPlugin(),o}(e,e.ngEvEmitter)}(window),function(){var e="undefined"!=typeof window&&void 0!==window.document?window.document:{},t="undefined"!=typeof module&&module.exports,n="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,i=function(){for(var t,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],i=0,a=n.length,o={};i<a;i++)if((t=n[i])&&t[1]in e){for(i=0;i<t.length;i++)o[n[0][i]]=t[i];return o}return!1}(),a={change:i.fullscreenchange,error:i.fullscreenerror},o={request:function(t){return new Promise(function(a){var o=i.requestFullscreen,r=function(){this.off("change",r),a()}.bind(this);t=t||e.documentElement,/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)?t[o]():t[o](n?Element.ALLOW_KEYBOARD_INPUT:{}),this.on("change",r)}.bind(this))},exit:function(){return new Promise(function(t){if(this.isFullscreen){var n=function(){this.off("change",n),t()}.bind(this);e[i.exitFullscreen](),this.on("change",n)}else t()}.bind(this))},toggle:function(e){return this.isFullscreen?this.exit():this.request(e)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(t,n){var i=a[t];i&&e.addEventListener(i,n,!1)},off:function(t,n){var i=a[t];i&&e.removeEventListener(i,n,!1)},raw:i};i?(Object.defineProperties(o,{isFullscreen:{get:function(){return Boolean(e[i.fullscreenElement])}},element:{enumerable:!0,get:function(){return e[i.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(e[i.fullscreenEnabled])}}}),t?module.exports=o:window.ngscreenfull=o):t?module.exports=!1:window.ngscreenfull=!1}(),function(){var e,t=this||Function("return this")(),n=function(){var e,n,i,a,o,r,l=Date.now?Date.now:function(){return+new Date},s="undefined"!=typeof SHIFTY_DEBUG_NOW?SHIFTY_DEBUG_NOW:l;function u(){}function c(e,t){var n;for(n in e)Object.hasOwnProperty.call(e,n)&&t(n)}function h(e,t){return c(t,(function(n){e[n]=t[n]})),e}function d(e,t){c(t,(function(n){void 0===e[n]&&(e[n]=t[n])}))}function m(t,n,i,a,o,r,l){var s,u,c,h=t<r?0:(t-r)/o;for(s in n)n.hasOwnProperty(s)&&(c="function"==typeof(u=l[s])?u:e[u],n[s]=p(i[s],a[s],c,h));return n}function p(e,t,n,i){return e+(t-e)*n(i)}function g(e,t){var n=v.prototype.filter,i=e._filterArgs;c(n,(function(a){void 0!==n[a][t]&&n[a][t].apply(e,i)}))}function f(e,t,n,l,u,c,h,d,p,f,b){i=t+n+l,a=Math.min(b||s(),i),o=a>=i,r=l-(i-a),e.isPlaying()&&(o?(p(h,e._attachment,r),e.stop(!0)):(e._scheduleId=f(e._timeoutHandler,1e3/60),g(e,"beforeTween"),a<t+n?m(1,u,c,h,1,1,d):m(a,u,c,h,l,t+n,d),g(e,"afterTween"),p(u,e._attachment,r)))}function b(e,t){var n={},i=typeof t;return c(e,"string"===i||"function"===i?function(e){n[e]=t}:function(e){n[e]||(n[e]=t[e]||"linear")}),n}function v(e,t){this._currentState=e||{},this._configured=!1,this._scheduleFunction=n,void 0!==t&&this.setConfig(t)}return n="undefined"!=typeof window&&(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||window.mozCancelRequestAnimationFrame&&window.mozRequestAnimationFrame)||setTimeout,v.prototype.tween=function(e){return this._isTweening?this:(void 0===e&&this._configured||this.setConfig(e),this._timestamp=s(),this._start(this.get(),this._attachment),this.resume())},v.prototype.setConfig=function(e){e=e||{},this._configured=!0,this._attachment=e.attachment,this._pausedAtTime=null,this._scheduleId=null,this._delay=e.delay||0,this._start=e.start||u,this._step=e.step||u,this._finish=e.finish||u,this._duration=e.duration||500,this._currentState=h({},e.from||this.get()),this._originalState=this.get(),this._targetState=h({},e.to||this.get());var t=this;this._timeoutHandler=function(){f(t,t._timestamp,t._delay,t._duration,t._currentState,t._originalState,t._targetState,t._easing,t._step,t._scheduleFunction)};var n=this._currentState,i=this._targetState;return d(i,n),this._easing=b(n,e.easing||"linear"),this._filterArgs=[n,this._originalState,i,this._easing],g(this,"tweenCreated"),this},v.prototype.get=function(){return h({},this._currentState)},v.prototype.set=function(e){this._currentState=e},v.prototype.pause=function(){return this._pausedAtTime=s(),this._isPaused=!0,this},v.prototype.resume=function(){return this._isPaused&&(this._timestamp+=s()-this._pausedAtTime),this._isPaused=!1,this._isTweening=!0,this._timeoutHandler(),this},v.prototype.seek=function(e){e=Math.max(e,0);var t=s();return this._timestamp+e===0||(this._timestamp=t-e,this.isPlaying()||(this._isTweening=!0,this._isPaused=!1,f(this,this._timestamp,this._delay,this._duration,this._currentState,this._originalState,this._targetState,this._easing,this._step,this._scheduleFunction,t),this.pause())),this},v.prototype.stop=function(e){return this._isTweening=!1,this._isPaused=!1,this._timeoutHandler=u,(t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.oCancelAnimationFrame||t.msCancelAnimationFrame||t.mozCancelRequestAnimationFrame||t.clearTimeout)(this._scheduleId),e&&(g(this,"beforeTween"),m(1,this._currentState,this._originalState,this._targetState,1,0,this._easing),g(this,"afterTween"),g(this,"afterTweenEnd"),this._finish.call(this,this._currentState,this._attachment)),this},v.prototype.isPlaying=function(){return this._isTweening&&!this._isPaused},v.prototype.setScheduleFunction=function(e){this._scheduleFunction=e},v.prototype.dispose=function(){var e;for(e in this)this.hasOwnProperty(e)&&delete this[e]},v.prototype.filter={},v.prototype.formula={linear:function(e){return e}},e=v.prototype.formula,h(v,{now:s,each:c,tweenProps:m,tweenProp:p,applyFilter:g,shallowCopy:h,defaults:d,composeEasingObject:b}),"function"==typeof SHIFTY_DEBUG_NOW&&(t.timeoutHandler=f),"object"==typeof exports?module.exports=v:"function"==typeof define&&define.amdDISABLED?define((function(){return v})):void 0===t.NGTweenable&&(t.NGTweenable=v),v}();n.shallowCopy(n.prototype.formula,{easeInQuad:function(e){return Math.pow(e,2)},easeOutQuad:function(e){return-(Math.pow(e-1,2)-1)},easeInOutQuad:function(e){return(e/=.5)<1?.5*Math.pow(e,2):-.5*((e-=2)*e-2)},easeInCubic:function(e){return Math.pow(e,3)},easeOutCubic:function(e){return Math.pow(e-1,3)+1},easeInOutCubic:function(e){return(e/=.5)<1?.5*Math.pow(e,3):.5*(Math.pow(e-2,3)+2)},easeInQuart:function(e){return Math.pow(e,4)},easeOutQuart:function(e){return-(Math.pow(e-1,4)-1)},easeInOutQuart:function(e){return(e/=.5)<1?.5*Math.pow(e,4):-.5*((e-=2)*Math.pow(e,3)-2)},easeInQuint:function(e){return Math.pow(e,5)},easeOutQuint:function(e){return Math.pow(e-1,5)+1},easeInOutQuint:function(e){return(e/=.5)<1?.5*Math.pow(e,5):.5*(Math.pow(e-2,5)+2)},easeInSine:function(e){return 1-Math.cos(e*(Math.PI/2))},easeOutSine:function(e){return Math.sin(e*(Math.PI/2))},easeInOutSine:function(e){return-.5*(Math.cos(Math.PI*e)-1)},easeInExpo:function(e){return 0===e?0:Math.pow(2,10*(e-1))},easeOutExpo:function(e){return 1===e?1:1-Math.pow(2,-10*e)},easeInOutExpo:function(e){return 0===e?0:1===e?1:(e/=.5)<1?.5*Math.pow(2,10*(e-1)):.5*(2-Math.pow(2,-10*--e))},easeInCirc:function(e){return-(Math.sqrt(1-e*e)-1)},easeOutCirc:function(e){return Math.sqrt(1-Math.pow(e-1,2))},easeInOutCirc:function(e){return(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)},easeOutBounce:function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInBack:function(e){var t=1.70158;return e*e*((t+1)*e-t)},easeOutBack:function(e){var t=1.70158;return(e-=1)*e*((t+1)*e+t)+1},easeInOutBack:function(e){var t=1.70158;return(e/=.5)<1?e*e*((1+(t*=1.525))*e-t)*.5:.5*((e-=2)*e*((1+(t*=1.525))*e+t)+2)},elastic:function(e){return-1*Math.pow(4,-8*e)*Math.sin((6*e-1)*(2*Math.PI)/2)+1},swingFromTo:function(e){var t=1.70158;return(e/=.5)<1?e*e*((1+(t*=1.525))*e-t)*.5:.5*((e-=2)*e*((1+(t*=1.525))*e+t)+2)},swingFrom:function(e){var t=1.70158;return e*e*((t+1)*e-t)},swingTo:function(e){var t=1.70158;return(e-=1)*e*((t+1)*e+t)+1},bounce:function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},bouncePast:function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?2-(7.5625*(e-=1.5/2.75)*e+.75):e<2.5/2.75?2-(7.5625*(e-=2.25/2.75)*e+.9375):2-(7.5625*(e-=2.625/2.75)*e+.984375)},easeFromTo:function(e){return(e/=.5)<1?.5*Math.pow(e,4):-.5*((e-=2)*Math.pow(e,3)-2)},easeFrom:function(e){return Math.pow(e,4)},easeTo:function(e){return Math.pow(e,.25)}}),function(){function e(e,t,n,i,a,o){var r,l,s=0,u=0,c=0,h=0,d=0,m=0;function p(e){return((s*e+u)*e+c)*e}function g(e){return(3*s*e+2*u)*e+c}function f(e){return e>=0?e:0-e}return s=1-(c=3*t)-(u=3*(i-t)-c),h=1-(m=3*n)-(d=3*(a-n)-m),r=e,l=function(e){return 1/(200*e)}(o),function(e){return((h*e+d)*e+m)*e}(function(e,t){var n,i,a,o,r,l;for(a=e,l=0;l<8;l++){if(f(o=p(a)-e)<t)return a;if(f(r=g(a))<1e-6)break;a-=o/r}if(i=1,(a=e)<(n=0))return n;if(a>i)return i;for(;n<i;){if(f((o=p(a))-e)<t)return a;e>o?n=a:i=a,a=.5*(i-n)+n}return a}(r,l))}n.setBezierFunction=function(t,i,a,o,r){var l=function(t,n,i,a){return function(o){return e(o,t,n,i,a,1)}}(i,a,o,r);return l.displayName=t,l.x1=i,l.y1=a,l.x2=o,l.y2=r,n.prototype.formula[t]=l},n.unsetBezierFunction=function(e){delete n.prototype.formula[e]}}(),(e=new n)._filterArgs=[],n.interpolate=function(t,i,a,o,r){var l=n.shallowCopy({},t),s=r||0,u=n.composeEasingObject(t,o||"linear");e.set({});var c=e._filterArgs;c.length=0,c[0]=l,c[1]=t,c[2]=i,c[3]=u,n.applyFilter(e,"tweenCreated"),n.applyFilter(e,"beforeTween");var h=function(e,t,i,a,o,r){return n.tweenProps(a,t,e,i,1,r,o)}(t,l,i,a,u,s);return n.applyFilter(e,"afterTween"),h},function(e){var t=/(\d|\-|\.)/,n=/([^\-0-9\.]+)/g,i=/[0-9.\-]+/g,a=new RegExp("rgb\\("+i.source+/,\s*/.source+i.source+/,\s*/.source+i.source+"\\)","g"),o=/^.*\(/,r=/#([0-9]|[a-f]){3,6}/gi;function l(e,t){var n,i=[],a=e.length;for(n=0;n<a;n++)i.push("_"+t+"_"+n);return i}function s(t){e.each(t,(function(e){var n=t[e];"string"==typeof n&&n.match(r)&&(t[e]=d(r,n,u))}))}function u(e){var t=function(e){3===(e=e.replace(/#/,"")).length&&(e=(e=e.split(""))[0]+e[0]+e[1]+e[1]+e[2]+e[2]);return c[0]=h(e.substr(0,2)),c[1]=h(e.substr(2,2)),c[2]=h(e.substr(4,2)),c}(e);return"rgb("+t[0]+","+t[1]+","+t[2]+")"}var c=[];function h(e){return parseInt(e,16)}function d(e,t,n){var i=t.match(e),a=t.replace(e,"VAL");if(i)for(var o,r=i.length,l=0;l<r;l++)o=i.shift(),a=a.replace("VAL",n(o));return a}function m(e){for(var t=e.match(i),n=t.length,a=e.match(o)[0],r=0;r<n;r++)a+=parseInt(t[r],10)+",";return a=a.slice(0,-1)+")"}function p(t,n){e.each(n,(function(e){for(var i=b(t[e]),a=i.length,o=0;o<a;o++)t[n[e].chunkNames[o]]=+i[o];delete t[e]}))}function g(t,n){e.each(n,(function(e){var i=t[e],o=function(e,t){f.length=0;for(var n=t.length,i=0;i<n;i++)f.push(e[t[i]]);return f}(function(e,t){for(var n,i={},a=t.length,o=0;o<a;o++)n=t[o],i[n]=e[n],delete e[n];return i}(t,n[e].chunkNames),n[e].chunkNames);i=function(e,t){for(var n=e,i=t.length,a=0;a<i;a++)n=n.replace("VAL",+t[a].toFixed(4));return n}(n[e].formatString,o),t[e]=d(a,i,m)}))}var f=[];function b(e){return e.match(i)}e.prototype.filter.token={tweenCreated:function(i,a,o,r){var u,c;s(i),s(a),s(o),this._tokenData=(u=i,c={},e.each(u,(function(e){var i,a,o=u[e];if("string"==typeof o){var r=b(o);c[e]={formatString:(i=o,a=i.match(n),a?(1===a.length||i.charAt(0).match(t))&&a.unshift(""):a=["",""],a.join("VAL")),chunkNames:l(r,e)}}})),c)},beforeTween:function(t,n,i,a){!function(t,n){e.each(n,(function(e){var i,a=n[e].chunkNames,o=a.length,r=t[e];if("string"==typeof r){var l=r.split(" "),s=l[l.length-1];for(i=0;i<o;i++)t[a[i]]=l[i]||s}else for(i=0;i<o;i++)t[a[i]]=r;delete t[e]}))}(a,this._tokenData),p(t,this._tokenData),p(n,this._tokenData),p(i,this._tokenData)},afterTween:function(t,n,i,a){g(t,this._tokenData),g(n,this._tokenData),g(i,this._tokenData),function(t,n){e.each(n,(function(e){var i=n[e].chunkNames,a=i.length,o=t[i[0]];if("string"===typeof o){for(var r="",l=0;l<a;l++)r+=" "+t[i[l]],delete t[i[l]];t[e]=r.substr(1)}else t[e]=o}))}(a,this._tokenData)}}}(n)}.call(null),
/*! NGHammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
function(e,t,n,i){var a,o=["","webkit","Moz","MS","ms","o"],r=t.createElement("div"),l=Math.round,s=Math.abs,u=Date.now;function c(e,t,n){return setTimeout(b(e,n),t)}function h(e,t,n){return!!Array.isArray(e)&&(d(e,n[t],n),!0)}function d(e,t,n){var i;if(e)if(e.forEach)e.forEach(t,n);else if(void 0!==e.length)for(i=0;i<e.length;)t.call(n,e[i],i,e),i++;else for(i in e)e.hasOwnProperty(i)&&t.call(n,e[i],i,e)}function m(t,n,i){var a="DEPRECATED METHOD: "+n+"\n"+i+" AT \n";return function(){var n=new Error("get-stack-trace"),i=n&&n.stack?n.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",o=e.console&&(e.console.warn||e.console.log);return o&&o.call(e.console,a,i),t.apply(this,arguments)}}a="function"!=typeof Object.assign?function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),n=1;n<arguments.length;n++){var i=arguments[n];if(null!=i)for(var a in i)i.hasOwnProperty(a)&&(t[a]=i[a])}return t}:Object.assign;var p=m((function(e,t,n){for(var i=Object.keys(t),a=0;a<i.length;)(!n||n&&void 0===e[i[a]])&&(e[i[a]]=t[i[a]]),a++;return e}),"extend","Use `assign`."),g=m((function(e,t){return p(e,t,!0)}),"merge","Use `assign`.");function f(e,t,n){var i,o=t.prototype;(i=e.prototype=Object.create(o)).constructor=e,i._super=o,n&&a(i,n)}function b(e,t){return function(){return e.apply(t,arguments)}}function v(e,t){return"function"==typeof e?e.apply(t&&t[0]||void 0,t):e}function O(e,t){return void 0===e?t:e}function y(e,t,n){d(I(t),(function(t){e.addEventListener(t,n,!1)}))}function G(e,t,n){d(I(t),(function(t){e.removeEventListener(t,n,!1)}))}function M(e,t){for(;e;){if(e==t)return!0;e=e.parentNode}return!1}function w(e,t){return e.indexOf(t)>-1}function I(e){return e.trim().split(/\s+/g)}function T(e,t,n){if(e.indexOf&&!n)return e.indexOf(t);for(var i=0;i<e.length;){if(n&&e[i][n]==t||!n&&e[i]===t)return i;i++}return-1}function x(e){return Array.prototype.slice.call(e,0)}function S(e,t,n){for(var i=[],a=[],o=0;o<e.length;){var r=t?e[o][t]:e[o];T(a,r)<0&&i.push(e[o]),a[o]=r,o++}return n&&(i=t?i.sort((function(e,n){return e[t]>n[t]})):i.sort()),i}function L(e,t){for(var n,i,a=t[0].toUpperCase()+t.slice(1),r=0;r<o.length;){if((i=(n=o[r])?n+a:t)in e)return i;r++}}var C=1;function E(t){var n=t.ownerDocument||t;return n.defaultView||n.parentWindow||e}var k="ontouchstart"in e,D=k&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),N=["x","y"],V=["clientX","clientY"];function Y(e,t){var n=this;this.manager=e,this.callback=t,this.element=e.element,this.target=e.options.inputTarget,this.domHandler=function(t){v(e.options.enable,[e])&&n.handler(t)},this.init()}function A(e,t,n){var i=n.pointers.length,a=n.changedPointers.length,o=1&t&&i-a==0,r=12&t&&i-a==0;n.isFirst=!!o,n.isFinal=!!r,o&&(e.session={}),n.eventType=t,function(e,t){var n=e.session,i=t.pointers,a=i.length;n.firstInput||(n.firstInput=_(t));a>1&&!n.firstMultiple?n.firstMultiple=_(t):1===a&&(n.firstMultiple=!1);var o=n.firstInput,r=n.firstMultiple,l=r?r.center:o.center,c=t.center=P(i);t.timeStamp=u(),t.deltaTime=t.timeStamp-o.timeStamp,t.angle=z(l,c),t.distance=F(l,c),function(e,t){var n=t.center,i=e.offsetDelta||{},a=e.prevDelta||{},o=e.prevInput||{};1!==t.eventType&&4!==o.eventType||(a=e.prevDelta={x:o.deltaX||0,y:o.deltaY||0},i=e.offsetDelta={x:n.x,y:n.y});t.deltaX=a.x+(n.x-i.x),t.deltaY=a.y+(n.y-i.y)}(n,t),t.offsetDirection=$(t.deltaX,t.deltaY);var h=R(t.deltaTime,t.deltaX,t.deltaY);t.overallVelocityX=h.x,t.overallVelocityY=h.y,t.overallVelocity=s(h.x)>s(h.y)?h.x:h.y,t.scale=r?(d=r.pointers,m=i,F(m[0],m[1],V)/F(d[0],d[1],V)):1,t.rotation=r?function(e,t){return z(t[1],t[0],V)+z(e[1],e[0],V)}(r.pointers,i):0,t.maxPointers=n.prevInput?t.pointers.length>n.prevInput.maxPointers?t.pointers.length:n.prevInput.maxPointers:t.pointers.length,function(e,t){var n,i,a,o,r=e.lastInterval||t,l=t.timeStamp-r.timeStamp;if(8!=t.eventType&&(l>25||void 0===r.velocity)){var u=t.deltaX-r.deltaX,c=t.deltaY-r.deltaY,h=R(l,u,c);i=h.x,a=h.y,n=s(h.x)>s(h.y)?h.x:h.y,o=$(u,c),e.lastInterval=t}else n=r.velocity,i=r.velocityX,a=r.velocityY,o=r.direction;t.velocity=n,t.velocityX=i,t.velocityY=a,t.direction=o}(n,t);var d,m;var p=e.element;M(t.srcEvent.target,p)&&(p=t.srcEvent.target);t.target=p}(e,n),e.emit("hammer.input",n),e.recognize(n),e.session.prevInput=n}function _(e){for(var t=[],n=0;n<e.pointers.length;)t[n]={clientX:l(e.pointers[n].clientX),clientY:l(e.pointers[n].clientY)},n++;return{timeStamp:u(),pointers:t,center:P(t),deltaX:e.deltaX,deltaY:e.deltaY}}function P(e){var t=e.length;if(1===t)return{x:l(e[0].clientX),y:l(e[0].clientY)};for(var n=0,i=0,a=0;a<t;)n+=e[a].clientX,i+=e[a].clientY,a++;return{x:l(n/t),y:l(i/t)}}function R(e,t,n){return{x:t/e||0,y:n/e||0}}function $(e,t){return e===t?1:s(e)>=s(t)?e<0?2:4:t<0?8:16}function F(e,t,n){n||(n=N);var i=t[n[0]]-e[n[0]],a=t[n[1]]-e[n[1]];return Math.sqrt(i*i+a*a)}function z(e,t,n){n||(n=N);var i=t[n[0]]-e[n[0]],a=t[n[1]]-e[n[1]];return 180*Math.atan2(a,i)/Math.PI}Y.prototype={handler:function(){},init:function(){this.evEl&&y(this.element,this.evEl,this.domHandler),this.evTarget&&y(this.target,this.evTarget,this.domHandler),this.evWin&&y(E(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&G(this.element,this.evEl,this.domHandler),this.evTarget&&G(this.target,this.evTarget,this.domHandler),this.evWin&&G(E(this.element),this.evWin,this.domHandler)}};var B={mousedown:1,mousemove:2,mouseup:4};function H(){this.evEl="mousedown",this.evWin="mousemove mouseup",this.pressed=!1,Y.apply(this,arguments)}f(H,Y,{handler:function(e){var t=B[e.type];1&t&&0===e.button&&(this.pressed=!0),2&t&&1!==e.which&&(t=4),this.pressed&&(4&t&&(this.pressed=!1),this.callback(this.manager,t,{pointers:[e],changedPointers:[e],pointerType:"mouse",srcEvent:e}))}});var U={pointerdown:1,pointermove:2,pointerup:4,pointercancel:8,pointerout:8},W={2:"touch",3:"pen",4:"mouse",5:"kinect"},j="pointerdown",X="pointermove pointerup pointercancel";function Q(){this.evEl=j,this.evWin=X,Y.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}e.MSPointerEvent&&!e.PointerEvent&&(j="MSPointerDown",X="MSPointerMove MSPointerUp MSPointerCancel"),f(Q,Y,{handler:function(e){var t=this.store,n=!1,i=e.type.toLowerCase().replace("ms",""),a=U[i],o=W[e.pointerType]||e.pointerType,r="touch"==o,l=T(t,e.pointerId,"pointerId");1&a&&(0===e.button||r)?l<0&&(t.push(e),l=t.length-1):12&a&&(n=!0),l<0||(t[l]=e,this.callback(this.manager,a,{pointers:t,changedPointers:[e],pointerType:o,srcEvent:e}),n&&t.splice(l,1))}});var q={touchstart:1,touchmove:2,touchend:4,touchcancel:8};function Z(){this.evTarget="touchstart",this.evWin="touchstart touchmove touchend touchcancel",this.started=!1,Y.apply(this,arguments)}function J(e,t){var n=x(e.touches),i=x(e.changedTouches);return 12&t&&(n=S(n.concat(i),"identifier",!0)),[n,i]}f(Z,Y,{handler:function(e){var t=q[e.type];if(1===t&&(this.started=!0),this.started){var n=J.call(this,e,t);12&t&&n[0].length-n[1].length==0&&(this.started=!1),this.callback(this.manager,t,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:e})}}});var K={touchstart:1,touchmove:2,touchend:4,touchcancel:8};function ee(){this.evTarget="touchstart touchmove touchend touchcancel",this.targetIds={},Y.apply(this,arguments)}function te(e,t){var n=x(e.touches),i=this.targetIds;if(3&t&&1===n.length)return i[n[0].identifier]=!0,[n,n];var a,o,r=x(e.changedTouches),l=[],s=this.target;if(o=n.filter((function(e){return M(e.target,s)})),1===t)for(a=0;a<o.length;)i[o[a].identifier]=!0,a++;for(a=0;a<r.length;)i[r[a].identifier]&&l.push(r[a]),12&t&&delete i[r[a].identifier],a++;return l.length?[S(o.concat(l),"identifier",!0),l]:void 0}f(ee,Y,{handler:function(e){var t=K[e.type],n=te.call(this,e,t);n&&this.callback(this.manager,t,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:e})}});function ne(){Y.apply(this,arguments);var e=b(this.handler,this);this.touch=new ee(this.manager,e),this.mouse=new H(this.manager,e),this.primaryTouch=null,this.lastTouches=[]}function ie(e,t){1&e?(this.primaryTouch=t.changedPointers[0].identifier,ae.call(this,t)):12&e&&ae.call(this,t)}function ae(e){var t=e.changedPointers[0];if(t.identifier===this.primaryTouch){var n={x:t.clientX,y:t.clientY};this.lastTouches.push(n);var i=this.lastTouches;setTimeout((function(){var e=i.indexOf(n);e>-1&&i.splice(e,1)}),2500)}}function oe(e){for(var t=e.srcEvent.clientX,n=e.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var a=this.lastTouches[i],o=Math.abs(t-a.x),r=Math.abs(n-a.y);if(o<=25&&r<=25)return!0}return!1}f(ne,Y,{handler:function(e,t,n){var i="touch"==n.pointerType,a="mouse"==n.pointerType;if(!(a&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)ie.call(this,t,n);else if(a&&oe.call(this,n))return;this.callback(e,t,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var re=L(r.style,"touchAction"),le=void 0!==re,se=function(){if(!le)return!1;var t={},n=e.CSS&&e.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(i){t[i]=!n||e.CSS.supports("touch-action",i)})),t}();function ue(e,t){this.manager=e,this.set(t)}ue.prototype={set:function(e){"compute"==e&&(e=this.compute()),le&&this.manager.element.style&&se[e]&&(this.manager.element.style[re]=e),this.actions=e.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var e=[];return d(this.manager.recognizers,(function(t){v(t.options.enable,[t])&&(e=e.concat(t.getTouchAction()))})),function(e){if(w(e,"none"))return"none";var t=w(e,"pan-x"),n=w(e,"pan-y");if(t&&n)return"none";if(t||n)return t?"pan-x":"pan-y";if(w(e,"manipulation"))return"manipulation";return"auto"}(e.join(" "))},preventDefaults:function(e){var t=e.srcEvent,n=e.offsetDirection;if(this.manager.session.prevented)t.preventDefault();else{var i=this.actions,a=w(i,"none")&&!se.none,o=w(i,"pan-y")&&!se["pan-y"],r=w(i,"pan-x")&&!se["pan-x"];if(a){var l=1===e.pointers.length,s=e.distance<2,u=e.deltaTime<250;if(l&&s&&u)return}if(!r||!o)return a||o&&6&n||r&&24&n?this.preventSrc(t):void 0}},preventSrc:function(e){this.manager.session.prevented=!0,e.preventDefault()}};function ce(e){this.options=a({},this.defaults,e||{}),this.id=C++,this.manager=null,this.options.enable=O(this.options.enable,!0),this.state=1,this.simultaneous={},this.requireFail=[]}function he(e){return 16&e?"cancel":8&e?"end":4&e?"move":2&e?"start":""}function de(e){return 16==e?"down":8==e?"up":2==e?"left":4==e?"right":""}function me(e,t){var n=t.manager;return n?n.get(e):e}function pe(){ce.apply(this,arguments)}function ge(){pe.apply(this,arguments),this.pX=null,this.pY=null}function fe(){pe.apply(this,arguments)}function be(){ce.apply(this,arguments),this._timer=null,this._input=null}function ve(){pe.apply(this,arguments)}function Oe(){pe.apply(this,arguments)}function ye(){ce.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function Ge(e,t){return(t=t||{}).recognizers=O(t.recognizers,Ge.defaults.preset),new Me(e,t)}ce.prototype={defaults:{},set:function(e){return a(this.options,e),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(e){if(h(e,"recognizeWith",this))return this;var t=this.simultaneous;return t[(e=me(e,this)).id]||(t[e.id]=e,e.recognizeWith(this)),this},dropRecognizeWith:function(e){return h(e,"dropRecognizeWith",this)||(e=me(e,this),delete this.simultaneous[e.id]),this},requireFailure:function(e){if(h(e,"requireFailure",this))return this;var t=this.requireFail;return-1===T(t,e=me(e,this))&&(t.push(e),e.requireFailure(this)),this},dropRequireFailure:function(e){if(h(e,"dropRequireFailure",this))return this;e=me(e,this);var t=T(this.requireFail,e);return t>-1&&this.requireFail.splice(t,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(e){return!!this.simultaneous[e.id]},emit:function(e){var t=this,n=this.state;function i(n){t.manager.emit(n,e)}n<8&&i(t.options.event+he(n)),i(t.options.event),e.additionalEvent&&i(e.additionalEvent),n>=8&&i(t.options.event+he(n))},tryEmit:function(e){if(this.canEmit())return this.emit(e);this.state=32},canEmit:function(){for(var e=0;e<this.requireFail.length;){if(!(33&this.requireFail[e].state))return!1;e++}return!0},recognize:function(e){var t=a({},e);if(!v(this.options.enable,[this,t]))return this.reset(),void(this.state=32);56&this.state&&(this.state=1),this.state=this.process(t),30&this.state&&this.tryEmit(t)},process:function(e){},getTouchAction:function(){},reset:function(){}},f(pe,ce,{defaults:{pointers:1},attrTest:function(e){var t=this.options.pointers;return 0===t||e.pointers.length===t},process:function(e){var t=this.state,n=e.eventType,i=6&t,a=this.attrTest(e);return i&&(8&n||!a)?16|t:i||a?4&n?8|t:2&t?4|t:2:32}}),f(ge,pe,{defaults:{event:"pan",threshold:10,pointers:1,direction:30},getTouchAction:function(){var e=this.options.direction,t=[];return 6&e&&t.push("pan-y"),24&e&&t.push("pan-x"),t},directionTest:function(e){var t=this.options,n=!0,i=e.distance,a=e.direction,o=e.deltaX,r=e.deltaY;return a&t.direction||(6&t.direction?(a=0===o?1:o<0?2:4,n=o!=this.pX,i=Math.abs(e.deltaX)):(a=0===r?1:r<0?8:16,n=r!=this.pY,i=Math.abs(e.deltaY))),e.direction=a,n&&i>t.threshold&&a&t.direction},attrTest:function(e){return pe.prototype.attrTest.call(this,e)&&(2&this.state||!(2&this.state)&&this.directionTest(e))},emit:function(e){this.pX=e.deltaX,this.pY=e.deltaY;var t=de(e.direction);t&&(e.additionalEvent=this.options.event+t),this._super.emit.call(this,e)}}),f(fe,pe,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return["none"]},attrTest:function(e){return this._super.attrTest.call(this,e)&&(Math.abs(e.scale-1)>this.options.threshold||2&this.state)},emit:function(e){if(1!==e.scale){var t=e.scale<1?"in":"out";e.additionalEvent=this.options.event+t}this._super.emit.call(this,e)}}),f(be,ce,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return["auto"]},process:function(e){var t=this.options,n=e.pointers.length===t.pointers,i=e.distance<t.threshold,a=e.deltaTime>t.time;if(this._input=e,!i||!n||12&e.eventType&&!a)this.reset();else if(1&e.eventType)this.reset(),this._timer=c((function(){this.state=8,this.tryEmit()}),t.time,this);else if(4&e.eventType)return 8;return 32},reset:function(){clearTimeout(this._timer)},emit:function(e){8===this.state&&(e&&4&e.eventType?this.manager.emit(this.options.event+"up",e):(this._input.timeStamp=u(),this.manager.emit(this.options.event,this._input)))}}),f(ve,pe,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return["none"]},attrTest:function(e){return this._super.attrTest.call(this,e)&&(Math.abs(e.rotation)>this.options.threshold||2&this.state)}}),f(Oe,pe,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:30,pointers:1},getTouchAction:function(){return ge.prototype.getTouchAction.call(this)},attrTest:function(e){var t,n=this.options.direction;return 30&n?t=e.overallVelocity:6&n?t=e.overallVelocityX:24&n&&(t=e.overallVelocityY),this._super.attrTest.call(this,e)&&n&e.offsetDirection&&e.distance>this.options.threshold&&e.maxPointers==this.options.pointers&&s(t)>this.options.velocity&&4&e.eventType},emit:function(e){var t=de(e.offsetDirection);t&&this.manager.emit(this.options.event+t,e),this.manager.emit(this.options.event,e)}}),f(ye,ce,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return["manipulation"]},process:function(e){var t=this.options,n=e.pointers.length===t.pointers,i=e.distance<t.threshold,a=e.deltaTime<t.time;if(this.reset(),1&e.eventType&&0===this.count)return this.failTimeout();if(i&&a&&n){if(4!=e.eventType)return this.failTimeout();var o=!this.pTime||e.timeStamp-this.pTime<t.interval,r=!this.pCenter||F(this.pCenter,e.center)<t.posThreshold;if(this.pTime=e.timeStamp,this.pCenter=e.center,r&&o?this.count+=1:this.count=1,this._input=e,0===this.count%t.taps)return this.hasRequireFailures()?(this._timer=c((function(){this.state=8,this.tryEmit()}),t.interval,this),2):8}return 32},failTimeout:function(){return this._timer=c((function(){this.state=32}),this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){8==this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),Ge.VERSION="2.0.7",Ge.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[ve,{enable:!1}],[fe,{enable:!1},["rotate"]],[Oe,{direction:6}],[ge,{direction:6},["swipe"]],[ye],[ye,{event:"doubletap",taps:2},["tap"]],[be]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};function Me(e,t){var n;this.options=a({},Ge.defaults,t||{}),this.options.inputTarget=this.options.inputTarget||e,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=e,this.input=new((n=this).options.inputClass||(D?ee:k?ne:H))(n,A),this.touchAction=new ue(this,this.options.touchAction),we(this,!0),d(this.options.recognizers,(function(e){var t=this.add(new e[0](e[1]));e[2]&&t.recognizeWith(e[2]),e[3]&&t.requireFailure(e[3])}),this)}function we(e,t){var n,i=e.element;i.style&&(d(e.options.cssProps,(function(a,o){n=L(i.style,o),t?(e.oldCssProps[n]=i.style[n],i.style[n]=a):i.style[n]=e.oldCssProps[n]||""})),t||(e.oldCssProps={}))}Me.prototype={set:function(e){return a(this.options,e),e.touchAction&&this.touchAction.update(),e.inputTarget&&(this.input.destroy(),this.input.target=e.inputTarget,this.input.init()),this},stop:function(e){this.session.stopped=e?2:1},recognize:function(e){var t=this.session;if(!t.stopped){var n;this.touchAction.preventDefaults(e);var i=this.recognizers,a=t.curRecognizer;(!a||a&&8&a.state)&&(a=t.curRecognizer=null);for(var o=0;o<i.length;)n=i[o],2===t.stopped||a&&n!=a&&!n.canRecognizeWith(a)?n.reset():n.recognize(e),!a&&14&n.state&&(a=t.curRecognizer=n),o++}},get:function(e){if(e instanceof ce)return e;for(var t=this.recognizers,n=0;n<t.length;n++)if(t[n].options.event==e)return t[n];return null},add:function(e){if(h(e,"add",this))return this;var t=this.get(e.options.event);return t&&this.remove(t),this.recognizers.push(e),e.manager=this,this.touchAction.update(),e},remove:function(e){if(h(e,"remove",this))return this;if(e=this.get(e)){var t=this.recognizers,n=T(t,e);-1!==n&&(t.splice(n,1),this.touchAction.update())}return this},on:function(e,t){if(void 0!==e&&void 0!==t){var n=this.handlers;return d(I(e),(function(e){n[e]=n[e]||[],n[e].push(t)})),this}},off:function(e,t){if(void 0!==e){var n=this.handlers;return d(I(e),(function(e){t?n[e]&&n[e].splice(T(n[e],t),1):delete n[e]})),this}},emit:function(e,n){this.options.domEvents&&function(e,n){var i=t.createEvent("Event");i.initEvent(e,!0,!0),i.gesture=n,n.target.dispatchEvent(i)}(e,n);var i=this.handlers[e]&&this.handlers[e].slice();if(i&&i.length){n.type=e,n.preventDefault=function(){n.srcEvent.preventDefault()};for(var a=0;a<i.length;)i[a](n),a++}},destroy:function(){this.element&&we(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},a(Ge,{INPUT_START:1,INPUT_MOVE:2,INPUT_END:4,INPUT_CANCEL:8,STATE_POSSIBLE:1,STATE_BEGAN:2,STATE_CHANGED:4,STATE_ENDED:8,STATE_RECOGNIZED:8,STATE_CANCELLED:16,STATE_FAILED:32,DIRECTION_NONE:1,DIRECTION_LEFT:2,DIRECTION_RIGHT:4,DIRECTION_UP:8,DIRECTION_DOWN:16,DIRECTION_HORIZONTAL:6,DIRECTION_VERTICAL:24,DIRECTION_ALL:30,Manager:Me,Input:Y,TouchAction:ue,TouchInput:ee,MouseInput:H,PointerEventInput:Q,TouchMouseInput:ne,SingleTouchInput:Z,Recognizer:ce,AttrRecognizer:pe,Tap:ye,Pan:ge,Swipe:Oe,Pinch:fe,Rotate:ve,Press:be,on:y,off:G,each:d,merge:g,extend:p,assign:a,inherit:f,bindFn:b,prefixed:L}),(void 0!==e?e:"undefined"!=typeof self?self:{}).NGHammer=Ge,"function"==typeof define&&define.amdDISABLED?define((function(){return Ge})):"undefined"!=typeof module&&module.exports?module.exports=Ge:e.NGHammer=Ge}(window,document)})),function(){"use strict";var e;e=function(){for(var e=document.querySelectorAll("[data-nanogallery2]"),t=0;t<e.length;t++)jQuery(e[t]).nanogallery2(jQuery(e[t]).data("nanogallery2"));for(e=document.querySelectorAll("[data-nanogallery2-lightbox]"),t=0;t<e.length;t++)e[t].classList.add("NGY2ThumbnailLightbox"),e[t].addEventListener("click",(function(e){e.preventDefault();for(var t={lightboxStandalone:!0,viewerToolbar:{display:!1}},n=this.dataset.nanogallery2Lgroup,i=document.querySelectorAll("[data-nanogallery2-lightbox]"),a=0;a<i.length;a++)if(i[a].dataset.nanogallery2Lgroup==n&&""!==i[a].dataset.nanogallery2Lightbox){t=jQuery.extend(!0,{},t,jQuery(i[a]).data("nanogallery2Lightbox"));break}jQuery(this).nanogallery2(t)}))},"loading"!=document.readyState?e():document.addEventListener?document.addEventListener("DOMContentLoaded",e):document.attachEvent("onreadystatechange",(function(){"complete"==document.readyState&&e()}))}.call(null),
/**!
 * @preserve nanogallery2 - NANOPHOTOSPROVIDER2 data provider
 * Homepage: http://nanogallery2.nanostudio.org
 * Sources:  https://github.com/nanostudio-org/nanogallery2
 *
 * License:  GPLv3 and commercial licence
 * 
*/
function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","nanogallery2"],e):"object"==typeof exports&&"function"==typeof require?e(require(["jquery","nanogallery2"])):e(jQuery)}((function(e){jQuery.nanogallery2.data_nano_photos_provider2=function(e,t){var n=e,i=function(t,i,s,c){var h=NGY2Item.GetIdx(n,t);""==e.I[h].title&&(e.I[h].title=a(t));var d=n.O.dataProvider+"?albumID="+t;d+="&hxs="+n.tn.settings.getH(n.GOM.curNavLevel,"xs"),d+="&wxs="+n.tn.settings.getW(n.GOM.curNavLevel,"xs"),d+="&hsm="+n.tn.settings.getH(n.GOM.curNavLevel,"sm"),d+="&wsm="+n.tn.settings.getW(n.GOM.curNavLevel,"sm"),d+="&hme="+n.tn.settings.getH(n.GOM.curNavLevel,"me"),d+="&wme="+n.tn.settings.getW(n.GOM.curNavLevel,"me"),d+="&hla="+n.tn.settings.getH(n.GOM.curNavLevel,"la"),d+="&wla="+n.tn.settings.getW(n.GOM.curNavLevel,"la"),d+="&hxl="+n.tn.settings.getH(n.GOM.curNavLevel,"xl"),d+="&wxl="+n.tn.settings.getW(n.GOM.curNavLevel,"xl"),r(!0),jQuery.ajaxSetup({cache:!1}),jQuery.support.cors=!0;try{var m=setTimeout((function(){r(!1),l(n,"Could not retrieve nanoPhotosProvider2 data (timeout).")}),6e4);n.O.debugMode&&console.log("nanoPhotosProvider2 URL: "+d),jQuery.getJSON(d,(function(e,a,d){clearTimeout(m),r(!1),o(h,e),"ok"==e.nano_status?(u(t),null!=i&&i(s,c,null)):l(n,"Could not retrieve nanoPhotosProvider2 data. Error: "+e.nano_status+" - "+e.nano_message)})).fail((function(e,t,i){clearTimeout(m),r(!1);var a="";for(var o in e)a+=o+"="+e[o]+"<br>";l(n,"Could not retrieve nanoPhotosProvider2 data. Error: "+(t+", "+i+" "+a+"<br><br>URL:"+d))}))}catch(e){l(n,"Could not retrieve nanoPhotosProvider2 data. Error: "+e)}};function a(e){return decodeURIComponent(e)}function o(e,t){n.O.debugMode&&(console.log("nanoPhotosProvider2 parse data:"),console.dir(t));jQuery.each(t.album_content,(function(e,i){var o=n.O.dataProvider.substring(0,n.O.dataProvider.indexOf("nano_photos_provider2.php")),r=o+a(i.src),l=i.title,u=i.description.split("_").join(" "),c="image";void 0!==i.kind&&i.kind.length>0&&(c=i.kind);var h=i.ID,d=!1;if("album"==c&&(s(l,h)||(d=!0),""==n.O.album&&""==n.O.photoset||(d=!0)),"image"==c||!d){var m=0;void 0!==i.albumID&&(m=i.albumID,!0);var p=void 0===i.tags?"":i.tags,g=NGY2Item.New(n,l.split("_").join(" "),u,h,m,c,p);g.setMediaURL(r,"img"),void 0!==i.dcGIF&&(g.imageDominantColors="data:image/gif;base64,"+i.dcGIF),void 0!==i.dc&&""!==i.dc&&(g.imageDominantColor=i.dc),"album"==c?g.numberItems=i.cnt:(g.imageWidth=i.imgWidth,g.imageHeight=i.imgHeight),""!=i.originalURL&&(g.downloadURL=o+a(i.originalURL));for(var f=n.GOM.curNavLevel,b=["xs","sm","me","la","xl"],v=0;v<b.length;v++)g.thumbs.url[f][b[v]]=o+a(i.t_url[v]),g.thumbs.width[f][b[v]]=parseInt(i.t_width[v]),g.thumbs.height[f][b[v]]=parseInt(i.t_height[v]);var O=n.O.fnProcessData;null!==O&&("function"==typeof O?O(g,n.O.dataProvider,t):window[O](g,n.O.dataProvider,t))}})),n.I[e].contentIsLoaded=!0}var r=NGY2Tools.PreloaderDisplay.bind(n),l=NGY2Tools.NanoAlert,s=NGY2Tools.FilterAlbumName.bind(n),u=NGY2Tools.AlbumPostProcess.bind(n);switch(t){case"GetHiddenAlbums":break;case"AlbumGetContent":var c=arguments[2],h=arguments[3],d=arguments[4],m=arguments[5];i(c,h,d,m)}}})),
/**!
 * @preserve nanogallery2 - GOOGLE PHOTOS data provider
 * Homepage: http://nanogallery2.nanostudio.org
 * Sources:  https://github.com/nanostudio-org/nanogallery2
 *
 * License:  GPLv3 and commercial licence
 * 
*/
function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","nanogallery2"],e):"object"==typeof exports&&"function"==typeof require?e(require(["jquery","nanogallery2"])):e(jQuery)}((function(e){jQuery.nanogallery2.data_google2=function(e,t){var n=e,i=function(e,t,i,o){var s="",u="image",c=NGY2Item.GetIdx(n,e),d="";n.galleryMaxItems.Get()>0&&(d="&max-results="+n.galleryMaxItems.Get());var m="";"undefined"!=typeof ngy2_pwa_at&&(m=ngy2_pwa_at),0==e?(s=""!=m?"https://photoslibrary.googleapis.com/v1/albums":n.O.google2URL+"?nguserid="+n.O.userID+"&alt=json&v=3&kind=album"+d+"&rnd="+(new Date).getTime(),u="album"):s=""!=m?"https://photoslibrary.googleapis.com/v1/mediaItems:search":n.O.google2URL+"?nguserid="+n.O.userID+"&ngalbumid="+e+"&alt=json&v=3&kind=photo&"+d,n.O.debugMode&&console.log("Google Photos URL: "+s),r(!0),jQuery.ajaxSetup({cache:!1}),jQuery.support.cors=!0;try{var p=setTimeout((function(){r(!1),l("Could not retrieve AJAX data...")}),6e4);jQuery.getJSON(s+"&callback=?",(function(s){if("error"==s.nano_status)return clearTimeout(p),r(!1),void l(n,"Could not retrieve Google data. Error: "+s.nano_message);clearTimeout(p),r(!1),a(c,u,s),h(e),null!=t&&t(i,o,null)})).fail((function(e,t,i){clearTimeout(p),r(!1);var a="";for(var o in e)a+=o+"="+e[o]+"<br>";l(n,"Could not retrieve Google data. Error: "+(t+", "+i+" "+a+"<br><br>URL:"+s))}))}catch(e){l(n,"Could not retrieve Google data. Error: "+e)}};function a(e,t,i){n.O.debugMode&&(console.log("Google Photos data:"),console.dir(i));var a=n.I[e].GetID();jQuery.each(i,(function(e,i){if("object"==typeof i&&null!==i){var r="",l="";"image"==t?(void 0!==i.description&&(r=i.description),""!=n.O.thumbnailLabel.get("title")&&(l=u(i.filename))):l=i.title,null==l&&(l="");var h=i.id;if("album"==t&&(!c(l,h)||null==i.coverPhotoBaseUrl))return!0;var d=NGY2Item.New(n,l,r,h,a,t,""),m=0,p=0,g="";"image"==t?(g=i.baseUrl,n.O.viewerZoom||null==n.O.viewerZoom?g+="=h"+i.mediaMetadata.height+"-w"+i.mediaMetadata.width:window.screen.width>window.screen.height?g+="=w"+window.screen.width:g=s+"=h"+window.screen.height,d.setMediaURL(g,"img"),void 0!==i.mediaMetadata.width&&(d.imageWidth=parseInt(i.mediaMetadata.width),m=d.imageWidth),void 0!==i.mediaMetadata.height&&(d.imageHeight=parseInt(i.mediaMetadata.height),p=d.imageHeight),void 0!==i.mediaMetadata.photo&&(null!=i.mediaMetadata.photo.exposureTime&&(d.exif.exposure=i.mediaMetadata.photo.exposureTime),null!=i.mediaMetadata.photo.focalLength&&(d.exif.focallength=i.mediaMetadata.photo.focalLength),null!=i.mediaMetadata.photo.apertureFNumber&&(d.exif.fstop=i.mediaMetadata.photo.apertureFNumber),null!=i.mediaMetadata.photo.isoEquivalent&&(d.exif.iso=i.mediaMetadata.photo.isoEquivalent),null!=i.mediaMetadata.photo.cameraModel&&(d.exif.model=i.mediaMetadata.photo.cameraModel)),void 0!==i.mediaMetadata.video&&(null!=i.mediaMetadata.video.cameraModel&&(d.exif.model=i.mediaMetadata.video.cameraModel),d.downloadURL=i.baseUrl+"=dv")):d.numberItems=i.mediaItemsCount,d.thumbs=o("l1",d.thumbs,i,t,p,m),d.thumbs=o("lN",d.thumbs,i,t,p,m);var f=n.O.fnProcessData;null!==f&&("function"==typeof f?f(d,"google2",i):window[f](d,"google2",i))}})),n.I[e].contentIsLoaded=!0}function o(e,t,i,a,o,r){for(var l=["xs","sm","me","la","xl"],s=0;s<l.length;s++){if("image"==a){if("auto"==n.tn.settings.width[e][l[s]]){let a=r/o;t.height[e][l[s]]=n.tn.settings.getH(e,l[s]),t.width[e][l[s]]=n.tn.settings.getH(e,l[s])*a,t.url[e][l[s]]=i.baseUrl+"=h"+n.tn.settings.getH(e,l[s]);continue}if("auto"==n.tn.settings.height[e][l[s]]){let a=o/r;t.width[e][l[s]]=n.tn.settings.getW(e,l[s]),t.height[e][l[s]]=n.tn.settings.getW(e,l[s])*a,t.url[e][l[s]]=i.baseUrl+"=w"+n.tn.settings.getW(e,l[s]);continue}t.height[e][l[s]]=n.tn.settings.getH(e,l[s]),t.width[e][l[s]]=n.tn.settings.getW(e,l[s]),t.url[e][l[s]]=i.baseUrl+"=w"+n.tn.settings.getW(e,l[s])}if("album"==a){if("auto"==n.tn.settings.width[e][l[s]]){t.url[e][l[s]]=i.coverPhotoBaseUrl+"=h"+n.tn.settings.getH(e,l[s]);continue}if("auto"==n.tn.settings.height[e][l[s]]){t.url[e][l[s]]=i.coverPhotoBaseUrl+"=w"+n.tn.settings.getW(e,l[s]);continue}t.url[e][l[s]]=i.coverPhotoBaseUrl+"=h"+n.tn.settings.getH(e,l[s])+"-w"+n.tn.settings.getW(e,l[s])}}return t}var r=NGY2Tools.PreloaderDisplay.bind(n),l=NGY2Tools.NanoAlert,u=NGY2Tools.GetImageTitleFromURL.bind(n),c=NGY2Tools.FilterAlbumName.bind(n),h=NGY2Tools.AlbumPostProcess.bind(n);switch(t){case"AlbumGetContent":var d=arguments[2],m=arguments[3],p=arguments[4],g=arguments[5];i(d,m,p,g)}}})),
/**!
 * @preserve nanogallery2 - FLICKR data provider
 * Homepage: http://nanogallery2.nanostudio.org
 * Sources:  https://github.com/nanostudio-org/nanogallery2
 *
 * License:  GPLv3 and commercial licence
 * 
*/
function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","nanogallery2"],e):"object"==typeof exports&&"function"==typeof require?e(require(["jquery","nanogallery2"])):e(jQuery)}((function(e){jQuery.nanogallery2.data_flickr=function(e,t){var n=e,i={url:function(){return"https://api.flickr.com/services/rest/"},thumbSize:"               sq",thumbAvailableSizes:new Array(75,100,150,240,500,640),thumbAvailableSizesStr:new Array("sq","t","q","s","m","z"),photoSize:"0",photoAvailableSizes:new Array(75,100,150,240,500,640,1024,1024,1600,2048,1e4),photoAvailableSizesStr:new Array("sq","t","q","s","m","z","b","l","h","k","o")},a=function(e,t,a,l){""==n.O.flickrAPIKey&&h(n,"Please set your Flickr API Key (option flickrAPIKey)");var s=NGY2Item.GetIdx(n,e),d="",m="image";"NONE"==n.O.photoset.toUpperCase()||"NONE"==n.O.album.toUpperCase()?d=i.url()+"?&method=flickr.people.getPublicPhotos&api_key="+n.O.flickrAPIKey+"&user_id="+n.O.userID+"&extras=description,views,tags,url_o,url_sq,url_t,url_q,url_s,url_m,url_z,url_b,url_h,url_k&per_page=500&format=json":0==n.I[s].GetID()?(d=i.url()+"?&method=flickr.photosets.getList&api_key="+n.O.flickrAPIKey+"&user_id="+n.O.userID+"&per_page=500&primary_photo_extras=tags,url_o,url_sq,url_t,url_q,url_s,url_m,url_l,url_z,url_b,url_h,url_k&format=json",m="album"):d=i.url()+"?&method=flickr.photosets.getPhotos&api_key="+n.O.flickrAPIKey+"&photoset_id="+n.I[s].GetID()+"&extras=description,views,tags,url_o,url_sq,url_t,url_q,url_s,url_m,url_l,url_z,url_b,url_h,url_k&format=json",n.O.debugMode&&console.log("Flickr URL: "+d),c(!0),jQuery.ajaxSetup({cache:!1}),jQuery.support.cors=!0;var g=setTimeout((function(){c(!1),h(n,"Could not retrieve AJAX data...")}),6e4),f=[],b=function(i,d){jQuery.getJSON(i+"&page="+d+"&jsoncallback=?",(function(v,O,y){var G=0;if("album"==m){if(void 0!==v.stat&&"fail"===v.stat)return h(n,"Could not retrieve Flickr album list: "+v.message+" (code: "+v.code+")."),!1;f=f.concat(v.photosets.photoset),G=v.photosets.pages}else if("NONE"==n.O.photoset.toUpperCase()||"NONE"==n.O.album.toUpperCase())f=f.concat(v.photos.photo),G=v.photos.pages;else{if(void 0!==v.stat&&"fail"===v.stat)return h(n,"Could not retrieve Flickr album: "+v.message+" (code: "+v.code+")."),!1;""==n.I[s].title&&(n.I[s].title=v.photoset.title),f=f.concat(v.photoset.photo),G=v.photoset.pages}G>d?b(i,d+1):(clearTimeout(g),c(!1),f=u(f,n.O.tagBlockList),"album"==m?r(s,e,f):o(s,e,f),p(e),null!=t&&t(a,l,null))})).fail((function(e,t,i){clearTimeout(g),c(!1),h(n,"Could not retrieve Flickr ajax data: "+t+", "+i)}))};b(d,1)};function o(e,t,a){n.O.debugMode&&(console.log("Flickr parse photos:"),console.dir(a)),jQuery.each(a,(function(e,a){var o=a.id,r=a.url_sq,s=a.title;""!=n.O.thumbnailLabel.get("title")&&(s=d(r));var u=a.description._content,c=75,h=75,m=i.photoAvailableSizesStr.length-1;n.O.flickrSkipOriginal&&m--;for(e=m;e>=0;e--)if(null!=a["url_"+i.photoAvailableSizesStr[e]]){r=a["url_"+i.photoAvailableSizesStr[e]],c=parseInt(a["width_"+i.photoAvailableSizesStr[e]]),h=parseInt(a["height_"+i.photoAvailableSizesStr[e]]);break}var p={};for(var g in a)0!=g.indexOf("height_")&&0!=g.indexOf("width_")&&0!=g.indexOf("url_")||(p[g]=a[g]);var f=void 0!==a.tags?a.tags:"",b=NGY2Item.New(n,s,u,o,t,"image",f);b.setMediaURL(r,"img"),b.imageWidth=c,b.imageHeight=h;var v={url:{l1:{xs:"",sm:"",me:"",la:"",xl:""},lN:{xs:"",sm:"",me:"",la:"",xl:""}},width:{l1:{xs:0,sm:0,me:0,la:0,xl:0},lN:{xs:0,sm:0,me:0,la:0,xl:0}},height:{l1:{xs:0,sm:0,me:0,la:0,xl:0},lN:{xs:0,sm:0,me:0,la:0,xl:0}}};v=l(v,a,"l1"),v=l(v,a,"lN"),b.thumbs=v;var O=n.O.fnProcessData;null!==O&&("function"==typeof O?O(b,"flickr",a):window[O](b,"flickr",a))})),n.I[e].contentIsLoaded=!0}function r(e,t,i){n.O.debugMode&&(console.log("Flickr parse list of albums:"),console.dir(i)),jQuery.each(i,(function(e,i){var a=i.title._content;if(0==i.visibility_can_see_set)return!0;if(m(a,i.id)){var o=i.id,r=null!=i.description._content?i.description._content:"",s={};for(var u in i.primary_photo_extras)s[u]=i.primary_photo_extras[u];var c="";void 0!==i.primary_photo_extras&&void 0!==i.primary_photo_extras.tags&&(c=i.primary_photo_extras.tags);var h=NGY2Item.New(n,a,r,o,t,"album",c);h.numberItems=i.photos,h.thumbSizes=s;var d={url:{l1:{xs:"",sm:"",me:"",la:"",xl:""},lN:{xs:"",sm:"",me:"",la:"",xl:""}},width:{l1:{xs:0,sm:0,me:0,la:0,xl:0},lN:{xs:0,sm:0,me:0,la:0,xl:0}},height:{l1:{xs:0,sm:0,me:0,la:0,xl:0},lN:{xs:0,sm:0,me:0,la:0,xl:0}}};d=l(d,i.primary_photo_extras,"l1"),d=l(d,i.primary_photo_extras,"lN"),h.thumbs=d;var p=n.O.fnProcessData;null!==p&&("function"==typeof p?p(h,"flickr",i):window[p](h,"flickr",i))}})),n.I[e].contentIsLoaded=!0}function l(e,t,i){var a=1;!0===n.tn.opt[i].crop&&(a=n.O.thumbnailCropScaleFactor);for(var o=["xs","sm","me","la","xl"],r=0;r<o.length;r++)if("auto"==n.tn.settings.width[i][o[r]]||""==n.tn.settings.width[i][o[r]]){let l=s("height_",Math.ceil(n.tn.settings.height[i][o[r]]*n.tn.scale*a*n.tn.settings.mosaic[i+"Factor"].h[o[r]]),t);e.url[i][o[r]]=l.url,e.width[i][o[r]]=l.width,e.height[i][o[r]]=l.height}else if("auto"==n.tn.settings.height[i][o[r]]||""==n.tn.settings.height[i][o[r]]){let l=s("width_",Math.ceil(n.tn.settings.width[i][o[r]]*n.tn.scale*a*n.tn.settings.mosaic[i+"Factor"].w[o[r]]),t);e.url[i][o[r]]=l.url,e.width[i][o[r]]=l.width,e.height[i][o[r]]=l.height}else{let l="height_",u=Math.ceil(n.tn.settings.height[i][o[r]]*n.tn.scale*a*n.tn.settings.mosaic[i+"Factor"].h[o[r]]);n.tn.settings.width[i][o[r]]>n.tn.settings.height[i][o[r]]&&(l="width_",u=Math.ceil(n.tn.settings.width[i][o[r]]*n.tn.scale*a*n.tn.settings.mosaic[i+"Factor"].w[o[r]]));let c=s(l,u,t);e.url[i][o[r]]=c.url,e.width[i][o[r]]=c.width,e.height[i][o[r]]=c.height}return e}function s(e,t,n){for(var a={url:"",width:0,height:0},o=0,r=0;r<i.thumbAvailableSizes.length;r++){var l=n[e+i.photoAvailableSizesStr[r]];if(null!=l&&(o=r,l>=t))break}var s=i.photoAvailableSizesStr[o];return a.url=n["url_"+s],a.width=parseInt(n["width_"+s]),a.height=parseInt(n["height_"+s]),a}var u=function(e,t){return""!=t&&null!=e&&(e=e.filter((function(e){var n=new RegExp(t,"i"),i=[e.tags];return Array.isArray(e.tags)&&(i=e.tags),!i.some((function(e){return n.test(e)}))}))),e};var c=NGY2Tools.PreloaderDisplay.bind(n),h=NGY2Tools.NanoAlert,d=NGY2Tools.GetImageTitleFromURL.bind(n),m=NGY2Tools.FilterAlbumName.bind(n),p=NGY2Tools.AlbumPostProcess.bind(n);switch(t){case"AlbumGetContent":var g=arguments[2],f=arguments[3],b=arguments[4],v=arguments[5];a(g,f,b,v)}}}));

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
