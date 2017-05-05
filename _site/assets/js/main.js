var typed_strings = [
    "Hi, I'm Mack!", //english
    "Salut, je suis Mack!", //french
    "Hola, soy Mack!", //spanish
    "Hallo, ek is Mack!" //afriikans
]

Typed.new(".header-text", {
	strings: typed_strings,
	contentType: 'html',
    showCursor: false,
    loop: true,
    typeSpeed: 40,
    backSpeed: 50,
    backDelay: 2000,
    fadeOut: true
});

var feed = new Instafeed({
    get: 'user',
    userId: '26350158',
    clientId: 'b03570e1f1f1476d92d31ef2212a7acf',
    accessToken: '26350158.b03570e.02f2dfb89c4f437c83fac7914279798a',
    limit: 9,
    template: '<a class="insta-img" href="{{link}}" target="_blank"><img src="{{image}}" /></a>'
});
feed.run();