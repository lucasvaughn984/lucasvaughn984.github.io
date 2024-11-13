$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(800, 500, 100, 50)
    createPlatform(650, 630, 100, 50)
    createPlatform(650, 370, 100, 50)
    createPlatform(250, 370, 100, 50)
    createPlatform(550, 270, 100, 50)
    createPlatform(150, 420, 100, 1)
    createPlatform(50, 520, 100, 1)
    createPlatform(150, 570, 100, 1)



    // TODO 3 - Create Collectables
    createCollectable("steve", 800, 429, 1, 0)
    createCollectable("diamond", 650, 569, 1, 0)
    createCollectable("grace", 650, 269, 1, 0)
    createCollectable("kennedi", 250, 269, 1, 0)
    createCollectable("max", 550, 169, 1, 0)

    // TODO 4 - Create Cannons
    createCannon("right", 750, 1900)
    createCannon("right", 540, 2700)
    createCannon("top", 450, 2000)



    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});