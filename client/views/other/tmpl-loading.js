Template.loading.rendered = function () {
  if ( ! Session.get('loadingSplash') ) {
    this.loading = window.pleaseWait({
      //logo: '/images/Meteor-logo.png',
      backgroundColor: '#97874b',
      loadingHtml: '<i class="asterisk loading icon"></i>'
    });
    Session.set('loadingSplash', true); // just show loading splash once
  }
};

Template.loading.destroyed = function () {
  if ( this.loading ) {
    this.loading.finish();
  }
};
