jQuery(document).ready(function(t){var e=t("#nav-toggle"),i=t("#nav-menu");e.click(function(){t(this).toggleClass("is-active"),i.toggleClass("is-active")}),t(".modal-button").click(function(){var e=t(this).data("target");t("html").addClass("is-clipped"),t(e).addClass("is-active")}),t(".modal-background, .modal-close").click(function(){t("html").removeClass("is-clipped"),t(this).parent().removeClass("is-active")}),t(".modal-card-head .delete, .modal-card-foot .button").click(function(){t("html").removeClass("is-clipped"),t("#modal-ter").removeClass("is-active")}),t(".highlight").each(function(){var e=t(this);e.append('<button class="copy">Copy</button>'),e.find("pre code").innerHeight()>600&&e.append('<button class="expand">Expand</button>')}),t(".highlight .copy, .highlight .expand").hover(function(){t(this).parent().css("box-shadow","0 0 0 1px #ed6c63")},function(){t(this).parent().css("box-shadow","none")}),t(".highlight .expand").click(function(){t(this).parent().children("pre").css("max-height","none")}),new Clipboard(".copy",{target:function(t){return t.previousSibling}})});