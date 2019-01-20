'use strict';
var multiItemSlider = (function () {
  return function (selector, config) {
    var
      _mainElement = document.querySelector(selector), // основный элемент блока
      _sliderWrapper = _mainElement.querySelector('.slider__wrapper_2'), // обертка для .slider-item
      _sliderItems = _mainElement.querySelectorAll('.slider__item_2'), // элементы (.slider-item)
      _sliderControls = _mainElement.querySelectorAll('.slider__control_2'), // элементы управления
      _sliderControlLeft = _mainElement.querySelector('.slider__control_left_2'), // кнопка "LEFT"
      _sliderControlRight = _mainElement.querySelector('.slider__control_right_2'), // кнопка "RIGHT"
      _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
      _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента    
      _positionLeftItem = 0, // позиция левого активного элемента
      _transform = 0, // значение транфсофрмации .slider_wrapper
      _step = _itemWidth / _wrapperWidth * 105, // величина шага (для трансформации)
      _items = []; // массив элементов
    // наполнение массива _items
    _sliderItems.forEach(function (item, index) {
      _items.push({ item: item, position: index, transform: 0 });
    });

    // media query event handler
    if (matchMedia) {
        const mq_1440 = window.matchMedia("(max-width: 1440px)");
        mq_1440.addListener(WidthChange);
        WidthChange(mq_1440, 123);
        const mq_768 = window.matchMedia("(max-width: 768px)");
        mq_768.addListener(WidthChange);
        WidthChange(mq_768, 116.5);
        const mq_320 = window.matchMedia("(max-width: 320px)");
        mq_320.addListener(WidthChange);
        WidthChange(mq_320, 116.5);
    }
      
    // media query change
    function WidthChange(mq, number) {
         if (mq.matches) {
            _step = _itemWidth / _wrapperWidth * number;
        } else {
            console.log("Not matches")
        }
    }

    var position = {
      getMin: 0,
      getMax: _items.length - 1,
    }

    var _transformItem = function (direction) {
      if (direction === 'right') {
        if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) >= position.getMax) {
          return;
        }
        if (!_sliderControlLeft.classList.contains('slider__control_show_2')) {
          _sliderControlLeft.classList.add('slider__control_show_2');
        }
        if (_sliderControlRight.classList.contains('slider__control_show_2') && (_positionLeftItem + _wrapperWidth / _itemWidth) >= position.getMax) {
          _sliderControlRight.classList.remove('slider__control_show_2');
        }
        _positionLeftItem++;
        _transform -= _step;
      }
      if (direction === 'left') {
        if (_positionLeftItem <= position.getMin) {
          return;
        }
        if (!_sliderControlRight.classList.contains('slider__control_show_2')) {
          _sliderControlRight.classList.add('slider__control_show_2');
        }
        if (_sliderControlLeft.classList.contains('slider__control_show_2') && _positionLeftItem - 1 <= position.getMin) {
          _sliderControlLeft.classList.remove('slider__control_show_2');
        }
        _positionLeftItem--;
        _transform += _step;
      }
      _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
    }

    // обработчик события click для кнопок "назад" и "вперед"
    var _controlClick = function () {
      var direction = this.classList.contains('slider__control_right_2') ? 'right' : 'left';
      _transformItem(direction);
    };

    var _setUpListeners = function () {
      // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
      _sliderControls.forEach(function (item) {
        item.addEventListener('click', _controlClick);
      });
    }

    // инициализация
    _setUpListeners();

    return {
      right: function () { // метод right
        _transformItem('right');
      },
      left: function () { // метод left
        _transformItem('left');
      }
    }

  }
}());

var slider = multiItemSlider('.slider_2')
