# Gobelins internal application
Internal social application of Gobelins, art school, based in Paris.

adrien [10:09 PM]
/hooks, /platform, config.xml c'est cordova. Le www/ c'est la ou ya tout ton build de l'app.

Toi tu vas bosser dans src/ (le premier)
Tu peux faire un `npm install` puis `npm start`

[10:10]
Ensuite dans src/public c'est la ou ya ton `index.html` et tes assets

[10:10]
Puis dans src/src/ c'est la ou ya ton app react

[10:10]
Si tu veux compile, tu fais un `npm run build`

[10:11]
Ça compile tout dans src/public puis ça copie src/public dans www/ et ça lance la commande `cordova build` qui compile pour les platforms

[10:12]
Si t'as des questions hésite pas :wink:ls
