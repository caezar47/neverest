var topPos=$(document).scrollTop(),snb=$(".navbar__block.is--scroll");snb.hasClass("is--bg")?topPos<=200&&snb.removeClass("is--bg"):200<topPos&&snb.addClass("is--bg");