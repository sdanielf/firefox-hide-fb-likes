setInterval(function () {
  var notifs = $('#fbNotificationsJewel li._33c');
  notifs.each(function () {hide_notif_if_like($(this));});
}, 100);

function hide_notif_if_like(notif) {
  var notif_meta = $.parseJSON( notif.attr('data-gt') );
  if ( notif_meta['notif_type'] == 'like' ) {
    notif.hide();
  }
}
