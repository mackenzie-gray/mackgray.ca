var strings = [
    "Hi, I'm Mack!", //english
    "Salut, je suis Mack!", //french
    "Hola, soy Mack!", //spanish
    "Hallo, ek is Mack!" //afriikans
]

Typed.new(".header-text", {
	strings: strings,
	contentType: 'html',
    showCursor: false,
    loop: true,
    typeSpeed: 25,
    backDelay: 2000
});

var feed = new Instafeed({
    get: 'user',
    userId: '26350158',
    clientId: 'b03570e1f1f1476d92d31ef2212a7acf',
    accessToken: '26350158.b03570e.02f2dfb89c4f437c83fac7914279798a',
    limit: 6,
    template: '<a href="{{link}}" target="_blank"><img class="insta-img" src="{{image}}" /></a>'

});
feed.run();