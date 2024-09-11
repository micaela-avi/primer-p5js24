function setup() {
    createCanvas(400, 500);
    background(150);
  
    // PARTE SUPERIOR
    fill(30, 110, 200); // color cian de rectangulo
    noStroke(); // sin contorno a todo
    rect(0, 0, 150, 250); // rectangulo celeste de fondo del triangulo amarillo
    fill(255, 204, 0); // color amarillo
    triangle(75, 15, 20, 250, 150, 250); // traingulo amarillo
    fill(255); // color blanco
    circle(30, 30, 35); // circulo blanco
    fill(150, 50, 130); // color violeta
    rect(150, 0, 400, 128); // rectangulo violeta de fondo de los circulos r y n
    fill(255, 100, 30); // color naranja
    circle(206, 70, 110); // circulo naranja
    //fill(255, 0, 0); // color rojo
    fill(255, 30, 30); // color rojo
    circle(330, 70, 110); // circulo rojo
    fill(30); // color negro
    rect(150, 128, 400, 122); // rectangulo negro
    fill(255, 100, 30); // color naranja de rectangulo
    rect(150, 180, 122, 71); // rectangulo naranja fondo negro. Derecho.
    fill(80, 110, 255); // color circulo cian
    circle(211, 249, 120); // medio circulo cian
    fill(240); // color blanco
    rect(272, 128, 116, 123); //  casi cuadrado blanco
  
    //PARTE INFERIOR
  
    //inferior derecho
    fill(30); //color negro
    rect(272, 250, 400, 250); // rectangulo negro esquina inferior derecha
    fill(255, 110, 90); // color rosa de triangulo
    triangle(330, 250, 272, 490, 390, 490); // Triangulo rosa
    fill(255, 30, 30); //color rojo de circulo rojo del triangulo rosa.
    circle(365, 267, 33); // circulo rojo del triangulo rosa.
  
    //inferior medio
    fill(255, 100, 90); /// color rosa del ractangulo
    rect(150, 250, 122, 55); // rectangulo rosa del medio.
    fill(30, 110, 200); // color celeste
    rect(150, 305, 122, 80); // rectangulo celeste del medio
    fill(255, 30, 30); // color rojo del rectangulo
    rect(150, 378, 122, 122); // rectangulo rojo abajo
    fill(240); // color blanco de circulo y triangulo
    circle(210, 341, 70); // criculo blanco del medio
    triangle(210, 380, 150, 490, 270, 490); // triangulo blanco abajo
  
    //inferior izquierdo
    fill(30); // color negro del rectangulo
    rect(0, 250, 150, 55); // rectangulo negro
    fill(150, 50, 130); // color violeta
    rect(0, 305, 150, 500); // rectangulo violeta
    fill(255, 110, 90); // color rosa de circulo
    circle(84, 372, 128); // circulo rosa
    fill(80, 110, 255); // color circulo cian
    circle(84, 500, 128); // circulo rosa
    
     //bezier
    //bezier(250, 300, 380, 8, 155, 20, 30, 250);
     //bezier(150, 300, 200, 4, 70, 5, 30, 250);
     //bezier(150, 300, 150, 2, 50, 5, 30, 250);
    //bezier(100, 500, 150, 20, 50, 3, 20, 500);
    // bezier(250, 300, 20, 170, 20, 170, 30, 250);
    //bezier(100, 500, 150, 100, 50, 100, 20, 500);
  
    //Resolvi los medio circulos con la función circle. 
  }
  
  function draw() {}
  