import Scene from "./webgl/scene.js";
import Geometry from "./webgl/geometry.js";
import Vector3 from "./webgl/vector3.js";
import Face from "./webgl/face.js";
import Color from "./webgl/color.js";

    var canvas, scene, gambarKiri, gambarKanan;
    var offset = 0.7;   

function main() {
    canvas = document.getElementById("myCanvas");
    scene = new Scene(canvas);

    gambarKiri = new Geometry();
    gambarKanan = new Geometry();

    addgambarKiri();
    addColorKiri();
    addFaceKiri();
    scene.add(gambarKiri);

    addgambarKanan();
    addColorKanan();
    gambarKanan.setMovement(0.0, 0.0021, 0.0);
    addFaceKanan();
    scene.add(gambarKanan);

}

function update() {
    scene.render();
}

function animate() {
    requestAnimationFrame(animate);
    update();
}

//ketika object diload kewindow, akan otomatis menjalankan fungsi didalamnya
window.onload = () => {
    main();
    animate();
};

// menambahkan vertices x,y,z dari gambar kiri
function addgambarKiri() {

    //trapesium atas
    gambarKiri.addVertice(new Vector3(-0.35 - offset, 0.11, 0));
    gambarKiri.addVertice(new Vector3(0.309 - offset, 0.14, 0));
    gambarKiri.addVertice(new Vector3(-0.386 - offset, 0.004, 0));

    gambarKiri.addVertice(new Vector3(-0.386 - offset, 0.004, 0));
    gambarKiri.addVertice(new Vector3(0.309 - offset, 0.14, 0));
    gambarKiri.addVertice(new Vector3(0.377 - offset, 0.004, 0));
    
    //persegi panjang banget
    gambarKiri.addVertice(new Vector3(-0.47 - offset, 0.0005, 0));
    gambarKiri.addVertice(new Vector3(0.45 - offset, 0.001, 0));
    gambarKiri.addVertice(new Vector3(-0.48 - offset, -0.04, 0));

    gambarKiri.addVertice(new Vector3(0.45 - offset, 0.001, 0));
    gambarKiri.addVertice(new Vector3(-0.48 - offset, -0.04, 0));
    gambarKiri.addVertice(new Vector3(0.48 - offset, -0.04, 0));

    //segi3 kiri atas
    gambarKiri.addVertice(new Vector3(-0.48 - offset, -0.04, 0));
    gambarKiri.addVertice(new Vector3(-0.35 - offset, -0.21, 0));
    gambarKiri.addVertice(new Vector3(-0.1 - offset, -0.038, 0));

    //segi3 kiri bawahnya segi3 kiri atas
    gambarKiri.addVertice(new Vector3(-0.48 - offset, -0.04, 0));
    gambarKiri.addVertice(new Vector3(-0.35 - offset, -0.21, 0));
    gambarKiri.addVertice(new Vector3(-0.45 - offset, -0.21, 0));

    //segi3 paling kiri tengah
    gambarKiri.addVertice(new Vector3(-0.46 - offset, -0.4, 0));
    gambarKiri.addVertice(new Vector3(-0.35 - offset, -0.21, 0));
    gambarKiri.addVertice(new Vector3(-0.45 - offset, -0.21, 0));

    //segi3 kiri tengah
    gambarKiri.addVertice(new Vector3(-0.46 - offset, -0.4, 0));
    gambarKiri.addVertice(new Vector3(-0.35 - offset, -0.21, 0));
    gambarKiri.addVertice(new Vector3(-0.19 - offset, -0.38, 0));

    //segi3 kiri pojok bawah
    gambarKiri.addVertice(new Vector3(-0.46 - offset, -0.4, 0));
    gambarKiri.addVertice(new Vector3(-0.51 - offset, -0.64, 0));
    gambarKiri.addVertice(new Vector3(-0.19 - offset, -0.38, 0));

    //segi3 bawah tengah
    gambarKiri.addVertice(new Vector3(0.002 - offset, -0.5, 0));
    gambarKiri.addVertice(new Vector3(-0.51 - offset, -0.64, 0));
    gambarKiri.addVertice(new Vector3(0.5 - offset, -0.65, 0)); //L

    //segi3 kiri tengah bawah
    gambarKiri.addVertice(new Vector3(0.002 - offset, -0.5, 0));
    gambarKiri.addVertice(new Vector3(-0.51 - offset, -0.64, 0));
    gambarKiri.addVertice(new Vector3(-0.19 - offset, -0.38, 0));

    //segi3 kiri tengah atas
    gambarKiri.addVertice(new Vector3(-0.1 - offset, -0.038, 0));
    gambarKiri.addVertice(new Vector3(-0.19 - offset, -0.38, 0));
    gambarKiri.addVertice(new Vector3(-0.35 - offset, -0.21, 0));
    
    //tengah tengah
    gambarKiri.addVertice(new Vector3(-0.1 - offset, -0.038, 0));
    gambarKiri.addVertice(new Vector3(-0.19 - offset, -0.38, 0));
    gambarKiri.addVertice(new Vector3(0.002 - offset, -0.5, 0));

    // tengah tengah atas bagian kanan
    gambarKiri.addVertice(new Vector3(-0.1 - offset, -0.038, 0));
    gambarKiri.addVertice(new Vector3(0.23 - offset, -0.6, 0));
    gambarKiri.addVertice(new Vector3(0.48 - offset, -0.04, 0));
   
    // bagian kanan bawah tengah
    gambarKiri.addVertice(new Vector3(-0.1 - offset, -0.038, 0)); //C1
    gambarKiri.addVertice(new Vector3(0.002 - offset, -0.5, 0)); //G1
    gambarKiri.addVertice(new Vector3(0.23 - offset, -0.6, 0)); //E1
    
    // kanan pojok bawah
    gambarKiri.addVertice(new Vector3(0.5 - offset, -0.65, 0)); //L
    gambarKiri.addVertice(new Vector3(0.46 - offset, -0.48, 0)); //F1
    gambarKiri.addVertice(new Vector3(0.23 - offset, -0.6, 0)); //E1

    // kanan pojok bawah kuning
    gambarKiri.addVertice(new Vector3(0.45 - offset, -0.4, 0)); //A1
    gambarKiri.addVertice(new Vector3(0.46 - offset, -0.48, 0)); //F1
    gambarKiri.addVertice(new Vector3(0.23 - offset, -0.6, 0)); //E1

    // kanan bawah kuning
    gambarKiri.addVertice(new Vector3(0.45 - offset, -0.4, 0)); //A1
    gambarKiri.addVertice(new Vector3(0.002 - offset, -0.5, 0)); //G1
    gambarKiri.addVertice(new Vector3(0.23 - offset, -0.6, 0)); //E1.

    // kanan tengah kuning
    gambarKiri.addVertice(new Vector3(0.45 - offset, -0.4, 0)); //A1
    gambarKiri.addVertice(new Vector3(0.002 - offset, -0.5, 0)); //G1
    gambarKiri.addVertice(new Vector3(0.44 - offset, -0.2, 0)); //Z

    // kanan tengah
    gambarKiri.addVertice(new Vector3(0.47 - offset, -0.04, 0)); //J
    gambarKiri.addVertice(new Vector3(0.002 - offset, -0.5, 0)); //G1
    gambarKiri.addVertice(new Vector3(0.44 - offset, -0.2, 0)); //Z

}

// menambahkan warna pada 3 vertice yg berhubungan dari gambar kanan
function addColorKiri() {
    //trapesium atas
    gambarKiri.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKiri.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKiri.addColor(new Color(color(218), color(165), color(32), 1));

    gambarKiri.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKiri.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKiri.addColor(new Color(color(218), color(165), color(32), 1));

    //persegi panjang banget
    gambarKiri.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKiri.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKiri.addColor(new Color(color(218), color(165), color(32), 1));

    gambarKiri.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKiri.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKiri.addColor(new Color(color(255), color(255), color(0), 1));

    //segi3 atas
    gambarKiri.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKiri.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKiri.addColor(new Color(color(218), color(165), color(32), 1));

    //segi3 kiri bawahnya segi3 kiri atas
    gambarKiri.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKiri.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKiri.addColor(new Color(color(175), color(161), color(136), 1));

    //segi3 paling kiri tengah
    gambarKiri.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKiri.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKiri.addColor(new Color(color(175), color(161), color(136), 1));

    //segi3 kiri tengah
    gambarKiri.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKiri.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKiri.addColor(new Color(color(175), color(161), color(136), 1));

    //segi3 kiri pojok bawah
    gambarKiri.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKiri.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKiri.addColor(new Color(color(175), color(161), color(136), 1));

    //segi3 bawah tengah
    gambarKiri.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKiri.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKiri.addColor(new Color(color(175), color(161), color(136), 1));

    //segi3 kiri tengah bawah
    gambarKiri.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKiri.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKiri.addColor(new Color(color(175), color(161), color(136), 1));

    //segi3 kiri tengah atas
    gambarKiri.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKiri.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKiri.addColor(new Color(color(175), color(161), color(136), 1));

    // tengah tengah bagian kiri
    gambarKiri.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKiri.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKiri.addColor(new Color(color(218), color(165), color(32), 1));

    // tengah tengah bawah bagian kanan
    gambarKiri.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKiri.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKiri.addColor(new Color(color(218), color(165), color(32), 1));

    // bagian kanan bawah tengah
    gambarKiri.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKiri.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKiri.addColor(new Color(color(218), color(165), color(32), 1));

    // kanan pojok bawah
    gambarKiri.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKiri.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKiri.addColor(new Color(color(175), color(161), color(136), 1));

    // kanan pojok bawah kuning
    gambarKiri.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKiri.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKiri.addColor(new Color(color(218), color(165), color(32), 1));

    // kanan bawah kuning
    gambarKiri.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKiri.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKiri.addColor(new Color(color(218), color(165), color(32), 1));

    // kanan tengah kuning
    gambarKiri.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKiri.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKiri.addColor(new Color(color(218), color(165), color(32), 1));

    // kanan atas kuning
    gambarKiri.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKiri.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKiri.addColor(new Color(color(218), color(165), color(32), 1));
}

//menambahkan index vertices dari object, agar menampilkan face object dilayar
function addFaceKiri() {
    for(let i=0; i<gambarKiri._vertices.length; i+=3) {
        gambarKiri.addFace(new Face(i, i+1, i+2));
    }
}

// menambahkan vertices x,y,z dari gambar kanan
function addgambarKanan(){
    //persegi panjang banget vertikal
    gambarKanan.addVertice(new Vector3(-0.023 + offset, 0.43, 0)); //C
    gambarKanan.addVertice(new Vector3(0.02 + offset, 0.44, 0)); //D
    gambarKanan.addVertice(new Vector3(-0.028 + offset, -0.11, 0));//E

    gambarKanan.addVertice(new Vector3(-0.028 + offset, -0.11, 0));//E
    gambarKanan.addVertice(new Vector3(0.02 + offset, 0.44, 0)); //D
    gambarKanan.addVertice(new Vector3(0.04 + offset, -0.11, 0)); //F

    //sisi kiri

    //atas tengah
    gambarKanan.addVertice(new Vector3(-0.023 + offset, 0.4, 0)); //G
    gambarKanan.addVertice(new Vector3(-0.07 + offset, 0.35, 0)); //H
    gambarKanan.addVertice(new Vector3(-0.025 + offset, 0.34, 0));//N2

    //ATAS TENGAH 2
    gambarKanan.addVertice(new Vector3(-0.025 + offset, 0.34, 0));//N2
    gambarKanan.addVertice(new Vector3(-0.07 + offset, 0.35, 0)); //H
    gambarKanan.addVertice(new Vector3(-0.028 + offset, -0.11, 0));//E

    //ATAS TENGAH 3
    gambarKanan.addVertice(new Vector3(-0.17 + offset, 0.28, 0)); //I
    gambarKanan.addVertice(new Vector3(-0.07 + offset, 0.35, 0)); //H
    gambarKanan.addVertice(new Vector3(-0.05 + offset, 0.28, 0)); //G2

    //ATAS TENGAH 4
    gambarKanan.addVertice(new Vector3(-0.17 + offset, 0.28, 0)); //I
    gambarKanan.addVertice(new Vector3(-0.11 + offset, -0.27, 0));//O
    gambarKanan.addVertice(new Vector3(-0.07 + offset, 0.35, 0)); //H

    //ATAS TENGAH 5*
    gambarKanan.addVertice(new Vector3(-0.028 + offset, -0.11, 0));//E
    gambarKanan.addVertice(new Vector3(-0.07 + offset, 0.35, 0)); //H
    gambarKanan.addVertice(new Vector3(-0.04 + offset, -0.17, 0)); //P

    //ATAS TENGAH 6*
    gambarKanan.addVertice(new Vector3(-0.11 + offset, -0.27, 0));//O
    gambarKanan.addVertice(new Vector3(-0.07 + offset, 0.35, 0)); //H
    gambarKanan.addVertice(new Vector3(-0.04 + offset, -0.17, 0)); //P

    //TENGAH 7*
    gambarKanan.addVertice(new Vector3(-0.11 + offset, -0.27, 0));//O
    gambarKanan.addVertice(new Vector3(-0.25 + offset, -0.34, 0)); //N
    gambarKanan.addVertice(new Vector3(-0.17 + offset, 0.28, 0)); //I

    //TENGAH 8*
    gambarKanan.addVertice(new Vector3(-0.3 + offset, 0.25, 0)); //J
    gambarKanan.addVertice(new Vector3(-0.25 + offset, -0.34, 0)); //N
    gambarKanan.addVertice(new Vector3(-0.17 + offset, 0.28, 0)); //I

    //TENGAH 9*
    gambarKanan.addVertice(new Vector3(-0.3 + offset, 0.25, 0)); //J
    gambarKanan.addVertice(new Vector3(-0.25 + offset, -0.34, 0)); //N
    gambarKanan.addVertice(new Vector3(-0.45 + offset, -0.36, 0)); //M

    //TENGAH 10*
    gambarKanan.addVertice(new Vector3(-0.3 + offset, 0.25, 0)); //J
    gambarKanan.addVertice(new Vector3(-0.67 + offset, -0.39, 0)); //F1
    gambarKanan.addVertice(new Vector3(-0.45 + offset, -0.36, 0)); //M

    //TENGAH 10*
    gambarKanan.addVertice(new Vector3(-0.67 + offset, -0.39, 0)); //F1
    gambarKanan.addVertice(new Vector3(-0.3 + offset, 0.25, 0)); //J
    gambarKanan.addVertice(new Vector3(-0.71 + offset, -0.39, 0)); //L

    //ATAS TENGAH 5
    gambarKanan.addVertice(new Vector3(-0.17 + offset, 0.28, 0)); //I
    gambarKanan.addVertice(new Vector3(-0.3 + offset, 0.25, 0)); //J
    gambarKanan.addVertice(new Vector3(-0.22 + offset, 0.21, 0)); //H2

    //ATAS TENGAH 6
    gambarKanan.addVertice(new Vector3(-0.38 + offset, 0.15, 0)); //I2
    gambarKanan.addVertice(new Vector3(-0.3 + offset, 0.25, 0)); //J
    gambarKanan.addVertice(new Vector3(-0.22 + offset, 0.21, 0)); //H2

    //lurus
    gambarKanan.addVertice(new Vector3(-0.71 + offset, -0.39, 0)); //L
    gambarKanan.addVertice(new Vector3(-0.3 + offset, 0.25, 0)); //J
    gambarKanan.addVertice(new Vector3(-0.42 + offset, 0.25, 0)); //K

    //ATAS pojok
    gambarKanan.addVertice(new Vector3(-0.67 + offset, -0.39, 0)); //F1
    gambarKanan.addVertice(new Vector3(-0.3 + offset, 0.25, 0)); //J
    gambarKanan.addVertice(new Vector3(-0.42 + offset, 0.25, 0)); //K

    //bawah
    gambarKanan.addVertice(new Vector3(-0.67 + offset, -0.39, 0)); //F1
    gambarKanan.addVertice(new Vector3(-0.71 + offset, -0.39, 0)); //L
    gambarKanan.addVertice(new Vector3(-0.42 + offset, 0.25, 0)); //K

    // bagian isi buku
    
    //tengah
    gambarKanan.addVertice(new Vector3(-0.028 + offset, -0.11, 0));//E
    gambarKanan.addVertice(new Vector3(0.01 + offset, -0.15, 0)); //V
    gambarKanan.addVertice(new Vector3(0.04 + offset, -0.11, 0)); //F

    //Buku 1 
    gambarKanan.addVertice(new Vector3(-0.028 + offset, -0.11, 0));//E
    gambarKanan.addVertice(new Vector3(0.01 + offset, -0.15, 0)); //V
    gambarKanan.addVertice(new Vector3(0.0005 + offset, -0.21, 0)); //U

    //buku 2
    gambarKanan.addVertice(new Vector3(-0.028 + offset, -0.11, 0));//E
    gambarKanan.addVertice(new Vector3(-0.04 + offset, -0.17, 0)); //P
    gambarKanan.addVertice(new Vector3(0.0005 + offset, -0.21, 0)); //U

    //buku 3
    gambarKanan.addVertice(new Vector3(-0.06 + offset, -0.3, 0));//T
    gambarKanan.addVertice(new Vector3(-0.04 + offset, -0.17, 0)); //P
    gambarKanan.addVertice(new Vector3(0.0005 + offset, -0.21, 0)); //U

    //buku 4
    gambarKanan.addVertice(new Vector3(-0.06 + offset, -0.3, 0));//T
    gambarKanan.addVertice(new Vector3(-0.04 + offset, -0.17, 0)); //P
    gambarKanan.addVertice(new Vector3(-0.11 + offset, -0.27, 0));//O

    //buku 5
    gambarKanan.addVertice(new Vector3(-0.06 + offset, -0.3, 0));//T
    gambarKanan.addVertice(new Vector3(-0.22 + offset, -0.38, 0)); //S
    gambarKanan.addVertice(new Vector3(-0.11 + offset, -0.27, 0));//O
    
    //buku 6
    gambarKanan.addVertice(new Vector3(-0.25 + offset, -0.34, 0)); //N
    gambarKanan.addVertice(new Vector3(-0.22 + offset, -0.38, 0)); //S
    gambarKanan.addVertice(new Vector3(-0.11 + offset, -0.27, 0));//O

    //buku 7
    gambarKanan.addVertice(new Vector3(-0.25 + offset, -0.34, 0)); //N
    gambarKanan.addVertice(new Vector3(-0.22 + offset, -0.38, 0)); //S
    gambarKanan.addVertice(new Vector3(-0.39 + offset, -0.41, 0));//R

    //buku 8
    gambarKanan.addVertice(new Vector3(-0.25 + offset, -0.34, 0)); //N
    gambarKanan.addVertice(new Vector3(-0.45 + offset, -0.36, 0)); //M
    gambarKanan.addVertice(new Vector3(-0.39 + offset, -0.41, 0));//R

    //buku 9
    gambarKanan.addVertice(new Vector3(-0.6 + offset, -0.42, 0)); //Q
    gambarKanan.addVertice(new Vector3(-0.45 + offset, -0.36, 0)); //M
    gambarKanan.addVertice(new Vector3(-0.39 + offset, -0.41, 0));//R

    //buku 10
    gambarKanan.addVertice(new Vector3(-0.6 + offset, -0.42, 0)); //Q
    gambarKanan.addVertice(new Vector3(-0.45 + offset, -0.36, 0)); //M
    gambarKanan.addVertice(new Vector3(-0.67 + offset, -0.39, 0)); //F1

    //coklat tengah

    //tungku 1
    gambarKanan.addVertice(new Vector3(-0.387 + offset, 0.15, 0)); //I2
    gambarKanan.addVertice(new Vector3(-0.225 + offset, 0.22, 0)); //H2
    gambarKanan.addVertice(new Vector3(-0.05 + offset, 0.29, 0)); //G2

    //tungku 2
    gambarKanan.addVertice(new Vector3(-0.387 + offset, 0.15, 0)); //I2
    gambarKanan.addVertice(new Vector3(-0.43 + offset, 0.114, 0)); //J2
    gambarKanan.addVertice(new Vector3(-0.05 + offset, 0.29, 0)); //G2

    //tungku 3
    gambarKanan.addVertice(new Vector3(-0.387 + offset, 0.15, 0)); //I2
    gambarKanan.addVertice(new Vector3(-0.04 + offset, 0.27, 0)); //F2
    gambarKanan.addVertice(new Vector3(-0.05 + offset, 0.29, 0)); //G2
    
    //tungku 4
    gambarKanan.addVertice(new Vector3(-0.387 + offset, 0.15, 0)); //I2
    gambarKanan.addVertice(new Vector3(-0.039 + offset, 0.24, 0)); //E2
    gambarKanan.addVertice(new Vector3(-0.04 + offset, 0.27, 0)); //F2
    
    //tungku 5
    gambarKanan.addVertice(new Vector3(-0.43 + offset, 0.084, 0)); //K2
    gambarKanan.addVertice(new Vector3(-0.43 + offset, 0.114, 0)); //J2
    gambarKanan.addVertice(new Vector3(-0.05 + offset, 0.29, 0)); //G2

    //tungku 6
    gambarKanan.addVertice(new Vector3(-0.43 + offset, 0.084, 0)); //K2
    gambarKanan.addVertice(new Vector3(-0.41 + offset, 0.05, 0)); //L2
    gambarKanan.addVertice(new Vector3(-0.05 + offset, 0.29, 0)); //G2
    
    //tungku 7
    gambarKanan.addVertice(new Vector3(-0.387 + offset, 0.15, 0)); //I2
    gambarKanan.addVertice(new Vector3(-0.066 + offset, 0.17, 0)); //D2
    gambarKanan.addVertice(new Vector3(-0.039 + offset, 0.24, 0)); //E2

    //tungku 8
    gambarKanan.addVertice(new Vector3(-0.43 + offset, 0.084, 0)); //K2
    gambarKanan.addVertice(new Vector3(-0.41 + offset, 0.05, 0)); //L2
    gambarKanan.addVertice(new Vector3(-0.039 + offset, 0.24, 0)); //E2

    //tungku 9
    gambarKanan.addVertice(new Vector3(-0.43 + offset, 0.084, 0)); //K2
    gambarKanan.addVertice(new Vector3(-0.41 + offset, 0.05, 0)); //L2
    gambarKanan.addVertice(new Vector3(-0.066 + offset, 0.17, 0)); //D2

    //tungku 10
    gambarKanan.addVertice(new Vector3(-0.43 + offset, 0.084, 0)); //K2
    gambarKanan.addVertice(new Vector3(-0.039 + offset, 0.24, 0)); //E2
    gambarKanan.addVertice(new Vector3(-0.066 + offset, 0.17, 0)); //D2

    //tungku 11
    gambarKanan.addVertice(new Vector3(-0.43 + offset, 0.084, 0)); //K2
    gambarKanan.addVertice(new Vector3(-0.42 + offset, 0.05, 0)); //L2
    gambarKanan.addVertice(new Vector3(-0.066 + offset, 0.17, 0)); //D2

    //tungku 12
    gambarKanan.addVertice(new Vector3(-0.44 + offset, 0.009, 0)); //M2
    gambarKanan.addVertice(new Vector3(-0.42 + offset, 0.05, 0)); //L2
    gambarKanan.addVertice(new Vector3(-0.066 + offset, 0.17, 0)); //D2

    //tungku 13
    gambarKanan.addVertice(new Vector3(-0.44 + offset, 0.009, 0)); //M2
    gambarKanan.addVertice(new Vector3(-0.06 + offset, 0.16, 0)); //C2
    gambarKanan.addVertice(new Vector3(-0.066 + offset, 0.17, 0)); //D2

    //tungku 14
    gambarKanan.addVertice(new Vector3(-0.44 + offset, 0.009, 0)); //M2
    gambarKanan.addVertice(new Vector3(-0.06 + offset, 0.16, 0)); //C2
    gambarKanan.addVertice(new Vector3(-0.51 + offset, -0.034, 0)); //V1

    //tungku 15
    gambarKanan.addVertice(new Vector3(-0.44 + offset, 0.009, 0)); //M2
    gambarKanan.addVertice(new Vector3(-0.06 + offset, 0.16, 0)); //C2
    gambarKanan.addVertice(new Vector3(-0.03 + offset, 0.15, 0)); //B2

    //tungku 16
    gambarKanan.addVertice(new Vector3(-0.22 + offset, 0.14, 0)); //H1
    gambarKanan.addVertice(new Vector3(-0.36 + offset, -0.01, 0)); //W1
    gambarKanan.addVertice(new Vector3(-0.51 + offset, -0.034, 0)); //V1

    //tungku 17
    gambarKanan.addVertice(new Vector3(-0.22 + offset, 0.14, 0)); //H1
    gambarKanan.addVertice(new Vector3(-0.36 + offset, -0.01, 0)); //W1
    gambarKanan.addVertice(new Vector3(-0.18 + offset, 0.04, 0)); //Z1

    //tungku 18
    gambarKanan.addVertice(new Vector3(-0.22 + offset, 0.14, 0)); //H1
    gambarKanan.addVertice(new Vector3(-0.1 + offset, 0.086, 0)); //A2
    gambarKanan.addVertice(new Vector3(-0.18 + offset, 0.04, 0)); //Z1

    //tungku 19
    gambarKanan.addVertice(new Vector3(-0.22 + offset, 0.14, 0)); //H1
    gambarKanan.addVertice(new Vector3(-0.1 + offset, 0.086, 0)); //A2
    gambarKanan.addVertice(new Vector3(-0.03 + offset, 0.15, 0)); //B2

    //SISI KANAN
    //BUKU 

    //buku 1
    gambarKanan.addVertice(new Vector3(0.028 + offset, -0.21, 0));//O2
    gambarKanan.addVertice(new Vector3(0.01 + offset, -0.15, 0)); //V
    gambarKanan.addVertice(new Vector3(0.04 + offset, -0.11, 0)); //F

    //buku 2
    gambarKanan.addVertice(new Vector3(0.028 + offset, -0.21, 0));//O2
    gambarKanan.addVertice(new Vector3(0.068 + offset, -0.17, 0)); //P2
    gambarKanan.addVertice(new Vector3(0.04 + offset, -0.11, 0)); //F

    //buku 3
    gambarKanan.addVertice(new Vector3(0.028 + offset, -0.21, 0));//O2
    gambarKanan.addVertice(new Vector3(0.068 + offset, -0.17, 0)); //P2
    gambarKanan.addVertice(new Vector3(0.071 + offset, -0.27, 0)); //W

    //buku 4
    gambarKanan.addVertice(new Vector3(0.13 + offset, -0.25, 0));//Q2
    gambarKanan.addVertice(new Vector3(0.068 + offset, -0.17, 0)); //P2
    gambarKanan.addVertice(new Vector3(0.071 + offset, -0.27, 0)); //W

    //buku 5
    gambarKanan.addVertice(new Vector3(0.13 + offset, -0.25, 0));//Q2
    gambarKanan.addVertice(new Vector3(0.071 + offset, -0.27, 0)); //W
    gambarKanan.addVertice(new Vector3(0.15 + offset, -0.33, 0)); //Z

    //buku 6
    gambarKanan.addVertice(new Vector3(0.13 + offset, -0.25, 0));//Q2
    gambarKanan.addVertice(new Vector3(0.22 + offset, -0.31, 0)); //R2
    gambarKanan.addVertice(new Vector3(0.15 + offset, -0.33, 0)); //Z

    //buku 7
    gambarKanan.addVertice(new Vector3(0.26 + offset, -0.38, 0));//A1
    gambarKanan.addVertice(new Vector3(0.22 + offset, -0.31, 0)); //R2
    gambarKanan.addVertice(new Vector3(0.15 + offset, -0.33, 0)); //Z

    //buku 8
    gambarKanan.addVertice(new Vector3(0.26 + offset, -0.38, 0)); //A1
    gambarKanan.addVertice(new Vector3(0.22 + offset, -0.31, 0)); //R2
    gambarKanan.addVertice(new Vector3(0.32 + offset, -0.35, 0)); //S2

    //buku 9
    gambarKanan.addVertice(new Vector3(0.26 + offset, -0.38, 0));//A1
    gambarKanan.addVertice(new Vector3(0.32 + offset, -0.35, 0)); //S2
    gambarKanan.addVertice(new Vector3(0.4 + offset, -0.4, 0)); //B1

    //buku 10
    gambarKanan.addVertice(new Vector3(0.47 + offset, -0.38, 0));//T2
    gambarKanan.addVertice(new Vector3(0.32 + offset, -0.35, 0)); //S2
    gambarKanan.addVertice(new Vector3(0.4 + offset, -0.4, 0)); //B1

    //buku 11
    gambarKanan.addVertice(new Vector3(0.47 + offset, -0.38, 0));//T2
    gambarKanan.addVertice(new Vector3(0.65 + offset, -0.42, 0)); //C1
    gambarKanan.addVertice(new Vector3(0.4 + offset, -0.4, 0)); //B1

    //buku 12
    gambarKanan.addVertice(new Vector3(0.47 + offset, -0.38, 0));//T2
    gambarKanan.addVertice(new Vector3(0.65 + offset, -0.42, 0)); //C1
    gambarKanan.addVertice(new Vector3(0.69 + offset, -0.39, 0)); //E1

    //sisi
    
    //atas 1
    gambarKanan.addVertice(new Vector3(0.02 + offset, 0.44, 0));//D
    gambarKanan.addVertice(new Vector3(0.033 + offset, 0.39, 0)); //K1
    gambarKanan.addVertice(new Vector3(0.04 + offset, -0.11, 0)); //F

    //atas 2
    gambarKanan.addVertice(new Vector3(0.077 + offset, 0.31, 0));//J1
    gambarKanan.addVertice(new Vector3(0.033 + offset, 0.39, 0)); //K1
    gambarKanan.addVertice(new Vector3(0.04 + offset, -0.11, 0)); //F

    //atas 3
    gambarKanan.addVertice(new Vector3(0.077 + offset, 0.31, 0));//J1
    gambarKanan.addVertice(new Vector3(0.068 + offset, -0.17, 0)); //P2
    gambarKanan.addVertice(new Vector3(0.04 + offset, -0.11, 0)); //F

    //atas 4
    gambarKanan.addVertice(new Vector3(0.077 + offset, 0.31, 0));//J1
    gambarKanan.addVertice(new Vector3(0.068 + offset, -0.17, 0)); //P2
    gambarKanan.addVertice(new Vector3(0.13 + offset, -0.25, 0));//Q2

    //atas 5
    gambarKanan.addVertice(new Vector3(0.077 + offset, 0.31, 0));//J1
    gambarKanan.addVertice(new Vector3(0.15 + offset, 0.26, 0)); //I1
    gambarKanan.addVertice(new Vector3(0.13 + offset, -0.25, 0));//Q2

    //atas 6
    gambarKanan.addVertice(new Vector3(0.22 + offset, -0.31, 0)); //R2
    gambarKanan.addVertice(new Vector3(0.15 + offset, 0.26, 0)); //I1
    gambarKanan.addVertice(new Vector3(0.13 + offset, -0.25, 0));//Q2

    //atas 7
    gambarKanan.addVertice(new Vector3(0.22 + offset, -0.31, 0)); //R2
    gambarKanan.addVertice(new Vector3(0.15 + offset, 0.26, 0)); //I1
    gambarKanan.addVertice(new Vector3(0.27 + offset, 0.24, 0)); // L1

    //atas 8
    gambarKanan.addVertice(new Vector3(0.22 + offset, -0.31, 0)); //R2
    gambarKanan.addVertice(new Vector3(0.32 + offset, -0.35, 0)); //S2
    gambarKanan.addVertice(new Vector3(0.27 + offset, 0.24, 0)); // L1

    //atas 9
    gambarKanan.addVertice(new Vector3(0.47 + offset, -0.38, 0));//T2
    gambarKanan.addVertice(new Vector3(0.32 + offset, -0.35, 0)); //S2
    gambarKanan.addVertice(new Vector3(0.27 + offset, 0.24, 0)); // L1

    //atas 10
    gambarKanan.addVertice(new Vector3(0.47 + offset, -0.38, 0));//T2
    gambarKanan.addVertice(new Vector3(0.39 + offset, 0.23, 0)); //G1
    gambarKanan.addVertice(new Vector3(0.27 + offset, 0.24, 0)); // L1

    //atas 10
    gambarKanan.addVertice(new Vector3(0.47 + offset, -0.38, 0));//T2
    gambarKanan.addVertice(new Vector3(0.39 + offset, 0.23, 0)); //G1
    gambarKanan.addVertice(new Vector3(0.7 + offset, -0.4, 0)); // D1

    //kuning kanan

    //sisi 1
    gambarKanan.addVertice(new Vector3(0.4 + offset, 0.144, 0)); //M1
    gambarKanan.addVertice(new Vector3(0.15 + offset, 0.26, 0)); //I1
    gambarKanan.addVertice(new Vector3(0.27 + offset, 0.24, 0)); // L1

    //sisi 2
    gambarKanan.addVertice(new Vector3(0.4 + offset, 0.144, 0)); //M1
    gambarKanan.addVertice(new Vector3(0.15 + offset, 0.26, 0)); //I1
    gambarKanan.addVertice(new Vector3(0.37 + offset, 0.035, 0)); //N1

    //sisi 3
    gambarKanan.addVertice(new Vector3(0.15 + offset, 0.26, 0)); //I1
    gambarKanan.addVertice(new Vector3(0.29 + offset, -0.05, 0)); //O1
    gambarKanan.addVertice(new Vector3(0.37 + offset, 0.035, 0)); //N1

    //sisi 4
    gambarKanan.addVertice(new Vector3(0.15 + offset, 0.26, 0)); //I1
    gambarKanan.addVertice(new Vector3(0.29 + offset, -0.05, 0)); //O1
    gambarKanan.addVertice(new Vector3(0.18 + offset, -0.157, 0)); //P1

    //sisi 5
    gambarKanan.addVertice(new Vector3(0.15 + offset, 0.26, 0)); //I1
    gambarKanan.addVertice(new Vector3(0.07 + offset, -0.02, 0)); //Q1
    gambarKanan.addVertice(new Vector3(0.18 + offset, -0.157, 0)); //P1

    //sisi 6
    gambarKanan.addVertice(new Vector3(0.15 + offset, 0.26, 0)); //I1
    gambarKanan.addVertice(new Vector3(0.07 + offset, -0.02, 0)); //Q1
    gambarKanan.addVertice(new Vector3(0.03 + offset, 0.175, 0)); //S1

    //sisi 7
    gambarKanan.addVertice(new Vector3(0.15 + offset, 0.26, 0)); //I1
    gambarKanan.addVertice(new Vector3(0.077 + offset, 0.31, 0));//J1
    gambarKanan.addVertice(new Vector3(0.03 + offset, 0.175, 0)); //S1

    //sisi 8
    gambarKanan.addVertice(new Vector3(0.077 + offset, 0.31, 0));//J1
    gambarKanan.addVertice(new Vector3(0.03 + offset, 0.175, 0)); //S1
    gambarKanan.addVertice(new Vector3(0.033 + offset, 0.39, 0)); //K1

    //sisi 9
    gambarKanan.addVertice(new Vector3(0.03 + offset, 0.26, 0)); //U1
    gambarKanan.addVertice(new Vector3(0.077 + offset, 0.31, 0));//J1
    gambarKanan.addVertice(new Vector3(0.033 + offset, 0.39, 0)); //K1

    // sisi 10
    gambarKanan.addVertice(new Vector3(0.03 + offset, 0.26, 0)); //U1
    gambarKanan.addVertice(new Vector3(0.077 + offset, 0.31, 0));//J1
    gambarKanan.addVertice(new Vector3(0.033 + offset, 0.39, 0)); //K1

    // sisi 11
    gambarKanan.addVertice(new Vector3(0.03 + offset, 0.26, 0)); //U1
    gambarKanan.addVertice(new Vector3(0.02 + offset, 0.44, 0)); //D  
    gambarKanan.addVertice(new Vector3(0.033 + offset, 0.39, 0)); //K1
}

// menambahkan warna pada 3 vertice yg berhubungan dari gambar kanan
function addColorKanan(){
    //persegi panjang banget vertikal
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(255), color(255), color(0), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(255), color(255), color(0), 1));

    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    //sisi kiri

    //atas tengah
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));

    //ATAS TENGAH 2
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));

    //ATAS TENGAH 3
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));

    //ATAS TENGAH 4
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));

    //ATAS TENGAH 5*
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));

    //ATAS TENGAH 6*
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));

    //TENGAH 7*
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));

    //TENGAH 8*
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));

    //TENGAH 9*
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));

    //TENGAH 10*
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));

    //TENGAH 11*
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    //ATAS TENGAH 5
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));

    //ATAS TENGAH 6
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    
    //LURUS
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    //ATAS POJOK
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    //bawah
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    // bagian isi buku
    
    //tengah
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));

    //buku 1
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));

    //buku 2
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));

    //buku 3
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));

    //buku 4
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));

    //buku 5
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));

    //buku 6
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));

    //buku 7
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));

    //buku 8
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    
    //buku 9
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));

    //buku 10
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));

    //coklat tengah

    //tunggku 1
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    
    //tunggku 2
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    //tunggku 3
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    //tunggku 4
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    //tunggku 5
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    //tunggku 6
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    //tunggku 7
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    //tunggku 8
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    //tunggku 9
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    //tungku 10
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    //tungku 11
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    //tungku 12
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    //tungku 13
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    //tungku 14
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    //tungku 15
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    //tungku 16
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    //tungku 17
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    //tungku 18
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    //tungku 19
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    
    //SISI KANAN
    //BUKU

    //buku 1
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));

    //buku 2
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));

    //buku 3
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));

    //buku 4
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));

    //buku 5
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));

    //buku 6
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));

    //buku 7
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));

    //buku 8
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    
    //buku 9
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));

    //buku 10
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));

    //buku 11
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));

    //buku 12
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));
    gambarKanan.addColor(new Color(color(238), color(232), color(170), 1));

    //sisi

    //atas 1
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    //atas 2
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    
    //atas 3
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    //atas 4
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    //atas 5
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    //atas 6
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    //atas 7
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    //atas 8
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    //atas 9
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    //atas 10
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));

    //atas 11
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));
    gambarKanan.addColor(new Color(color(175), color(161), color(136), 1));


    //kuning kanan
    
    //sisi 1
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));

    //sisi 2
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));

    //sisi 3
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));

    //sisi 4
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));

    //sisi 5
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));

    //sisi 6
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));

    //sisi 7
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));

    //sisi 8
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));

    //sisi 9
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));

    //sisi 10
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));

    //sisi 11
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));
    gambarKanan.addColor(new Color(color(255), color(255), color(0), 1));
    gambarKanan.addColor(new Color(color(218), color(165), color(32), 1));

    // let colors = [(Math.random()/2 + 0.45), (Math.random()/2 + 0.45), (Math.random()/2 + 0.45), (Math.random()/2 + 0.45)];
    // console.log(`vertices count: ${gambarKanan._vertices.length}`);
    // for(let i=gambarKanan._colors.length; i<=gambarKanan._vertices.length; i++) {
    //     colors = [(Math.random()/2 + 0.45), (Math.random()/2 + 0.45), (Math.random()/2 + 0.45), 1];
    //     gambarKanan.addColor(new Color(colors[0], colors[1], colors[2], colors[3]));
    // }
}

//menambahkan index vertices dari object, agar menampilkan face object dilayar
function addFaceKanan(){
    for(let i=0; i<gambarKanan._vertices.length; i+=3) {
        gambarKanan.addFace(new Face(i, i+1, i+2));
    }
}

// convert nilai warna dengan range 0-1
function color(value) {
    return value / 255;
}