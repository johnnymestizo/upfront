!function(t){Upfront.Settings&&Upfront.Settings.l10n?Upfront.Settings.l10n.global.views:Upfront.mainData.l10n.global.views;upfrontrjs.define(["scripts/upfront/upfront-views-editor/commands/command"],function(t){return t.extend({tagName:"div",className:"upfront-sidebar-content_editor-sidebar_command",post:!1,initialize:function(){this.setPost(),Upfront.Events.on("data:current_post:change",this.setPost,this)},setPost:function(){var t=Upfront.data.currentPost;return t?this.post&&this.post.id==t.id||(this.post=Upfront.data.currentPost,this.onPostChange&&this.onPostChange()):this.post=new Upfront.Models.Post({post_type:"post",id:"0"}),this}})})}(jQuery);