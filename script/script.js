var app = new Vue({
  el: '#pc-data-aggregator',

  data: {
    isChangedPrimary: false,
    isHiddenPrimary: false,
    isChangedSecondary: false,
    isHiddenSecondary: false,
    isHiddenFooter: false,
  },

  methods: {
    changePrimaryHeaderPosition: function () {
      this.isChangedPrimary = !this.isChangedPrimary;
      console.log("changed")
    },
    hidePrimaryHeader: function () {
      this.isHiddenPrimary = !this.isHiddenPrimary;
      console.log("hidden")
    },

    changeSecondaryHeaderPosition: function () {
      this.isChangedSecondary = !this.isChangedSecondary;
      console.log("changed")
    },
    hideSecondaryHeader: function () {
      this.isHiddenSecondary = !this.isHiddenSecondary;
      console.log("hidden")
    },
    hideFooter: function () {
      this.isHiddenFooter = !this.isHiddenFooter;
      console.log("hidden")
    }
  }
})
