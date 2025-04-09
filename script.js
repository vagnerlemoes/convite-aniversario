 alert("Convite de Aníversario")
 
 // Criar uma borboleta
 const borboleta = document.createElement('div');
 borboleta.className = 'borboleta';
 document.body.appendChild(borboleta);

 // Posição inicial aleatória
 let x = Math.random() * window.innerWidth;
 let y = Math.random() * window.innerHeight;
 let dx = (Math.random() - 0.5) * 4;
 let dy = (Math.random() - 0.5) * 4;

 // Movimento contínuo
 function animar() {
   x += dx;
   y += dy;

   if (x <= 0 || x >= window.innerWidth - 60) dx *= -1;
   if (y <= 0 || y >= window.innerHeight - 60) dy *= -1;

   borboleta.style.left = x + 'px';
   borboleta.style.top = y + 'px';

   requestAnimationFrame(animar);
 }

 animar();