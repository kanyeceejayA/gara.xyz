/* eslint-disable no-undef */
// add items
$('#add-todo').click(function () {
  const lastSibling = $('#todo-list > .todo-wrap:last-of-type > input').attr('id');
  const newId = Number(lastSibling) + 1;

  $(this).before(`<span class="editing todo-wrap"><input type="checkbox" id="${newId}"/><label for="${newId}" class="todo"><i class="fa fa-check"></i><input type="text" class="input-todo" id="input-todo${newId}"/></label></div>`);
  $(`#input-todo${newId}`).parent().parent().animate({
    height: '36px',
  }, 200);
  $(`#input-todo${newId}`).focus();

  $(`#input-todo${newId}`).enterKey(function () {
    $(this).trigger('enterEvent');
  });

  $(`#input-todo${newId}`).on('blur enterEvent', function () {
    const todoTitle = $(`#input-todo${newId}`).val();
    const todoTitleLength = todoTitle.length;
    if (todoTitleLength > 0) {
      $(this).before(todoTitle);
      $(this).parent().parent().removeClass('editing');
      $(this).parent().after('<span class="delete-item" title="remove"><i class="fa fa-times-circle"></i></span>');
      $(this).remove();
      $('.delete-item').click(function () {
        const parentItem = $(this).parent();
        parentItem.animate({
          left: '-30%',
          height: 0,
          opacity: 0,
        }, 200);
        setTimeout(() => {
          $(parentItem).remove();
        }, 1000);
      });
    } else {
      $('.editing').animate({
        height: '0px',
      }, 200);
      setTimeout(() => {
        $('.editing').remove();
      }, 400);
    }
  });
});

// remove items

$('.delete-item').click(function () {
  const parentItem = $(this).parent();
  parentItem.animate({
    left: '-30%',
    height: 0,
    opacity: 0,
  }, 200);
  setTimeout(() => {
    $(parentItem).remove();
  }, 1000);
});

// Enter Key detect

$.fn.enterKey = function (fnc) {
  return this.each(function () {
    $(this).keypress(function (ev) {
      const keycode = (ev.keyCode ? ev.keyCode : ev.which);
      if (keycode == '13') {
        fnc.call(this, ev);
      }
    });
  });
};
