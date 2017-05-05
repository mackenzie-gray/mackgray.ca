var typed_strings = [
    "Hi, ^500 I'm Mack!", //english
    "Salut, ^250 je suis Mack!", //french
    "Hola, ^250 soy Mack!", //spanish
    "Hallo, ^250 ek is Mack!" //afriikans
]

Typed.new(".header-text", {
	strings: typed_strings,
	contentType: 'html',
    loop: true,
    typeSpeed: 40,
    backSpeed: 50,
    backDelay: 2000,
    cursorChar: null,
    showCursor: false
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