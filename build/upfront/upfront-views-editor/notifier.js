!function(e){var t=Upfront.Settings&&Upfront.Settings.l10n?Upfront.Settings.l10n.global.views:Upfront.mainData.l10n.global.views;upfrontrjs.define(["text!upfront/templates/popup.html"],function(s){var i=Backbone.View.extend({notices:new Backbone.Collection([]),elId:"upfront-notice",timer:!1,timeoutTime:5e3,$notice:!1,tpl:_.template(e(s).find("#upfront-notifier-tpl").html()),initialize:function(t){this.notices.on("add",this.messageAdded,this),this.notices.on("remove",this.messageRemoved,this),e("body").append(this.tpl({})),this.setElement(e("#"+this.elId))},addMessage:function(e,s,i){var n={message:e?e:t.no_message,type:s?s:"info",duration:i};this.notices.add(n)},show:function(e){var t=this;this.setMessage(e),this.$el.addClass("notify open").removeClass("out"),this.timer=setTimeout(function(){t.notices.remove(e)},e.get("duration")||this.timeoutTime)},replace:function(e){var t=this;this.setMessage(e),this.timer=setTimeout(function(){t.notices.remove(e)},this.timeoutTime),this.$el.removeClass("notify").addClass("shake"),setTimeout(function(){t.$el.removeClass("shake")},this.timeoutTime/2)},setMessage:function(e){this.$el.removeClass("info warning error").addClass(e.get("type")).html(e.get("message"))},close:function(){this.$el.addClass("out"),this.$el.removeClass("notify shake open")},messageAdded:function(e){this.$el.hasClass("notify")||this.show(e)},messageRemoved:function(e){this.notices.length?this.replace(this.notices.at(0)):this.close()}});return new i})}(jQuery);