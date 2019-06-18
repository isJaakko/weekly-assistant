function createElement() {
  var HelloWorld = document.createElement('h1');
  HelloWorld.innerHTML = 'Hello World！';
  var root = document.getElementById('root');
  root.append(HelloWorld);
}

createElement();