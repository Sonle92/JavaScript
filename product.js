const man = [
  {
    id: 1,
    name: "The Cosmo (Đen) Quần short khaki",
    code: "TC1025011BA",
    price: "250.000",
    image:
      "https://th.bing.com/th/id/R.156d63bdd3c4b16f1e69e4c46fe9e3ae?rik=uvf3u09wqgAvLw&pid=ImgRaw&r=0",
  },

  {
    id: 2,
    name: "Quần baggy đen sang trọng QQ",
    code: "TC1025011BA",
    price: "398.000",
    image: "https://cf.shopee.vn/file/6464d23c90ea5ca5a782888abbff08a9",
  },

  {
    id: 3,
    name: "The Cosmo (Hồng) Quần short khaki",
    code: "TC1025011BA",
    price: "300.000",
    image:
      "https://maydep.vn/wp-content/uploads/2021/12/kieu-quan-tay-nam-ong-dung-dep-DQNA0008.jpg",
  },

  {
    id: 4,
    name: "The Cosmo (Trắng) Quầb short khaki",
    code: "TC1025011BA",
    price: "400.000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW2KNl9zfeBjguhZChBG25Tp8ou2rZ-HUaYQ&usqp=CAU",
  },
];

const women = [
  {
    id: 1,
    name: "Váy fashion",
    code: "TC1025011BA",
    price: "250.000",
    image:
      "https://i.pinimg.com/originals/37/ba/a2/37baa25a7b95cd788f4b0ec67320e286.jpg",
  },

  {
    id: 2,
    name: "Áo thun phối váy ngắn",
    code: "TC1025011BA",
    price: "398.000",
    image:
      "https://down-vn.img.susercontent.com/file/sg-11134201-22100-pbrp1w40vviv42",
  },

  {
    id: 3,
    name: "Áo khoác",
    code: "TC1025011BA",
    price: "300.000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZJ03xY0cIeMI3dOtvB1hvSXbiOHHhpH5TA&usqp=CAU",
  },

  {
    id: 4,
    name: "Áo thun",
    code: "TC1025011BA",
    price: "400.000",
    image:
      "https://zizoou.com/cdn/shop/products/Ao-khoac-jacket-form-rong-oversize-7-6-Ao-khoac-trang-be-ZiZoou-Store_de69df3e-1358-47b4-a3cf-6ed5a99b7782.jpg?v=1677890431",
  },
];
function showProducts() {
  for (var i = 0; i <= man.length - 1; i++) {
    var demo = '<div class="col-3">';
    demo += '<div class="card" style="width: 18rem;">';
    demo +=
      '<img src="' +
      man[i].image +
      '" class="card-img-top" style="height:400px;">';
    demo += '<div class="card-body">';
    demo += '<h5 class="card-title">' + man[i].name + "</h5>";
    demo += '<p class="card-text">' + man[i].price + "</p>";
    demo += '<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>';
    demo += "</div>";
    demo += "</div>";
    demo += "</div>";
    document.getElementById("men").innerHTML += demo;
  }
  for (var i = 0; i <= women.length - 1; i++) {
    var demo = '<div class="col-3">';
    demo += '<div class="card" style="width: 18rem;">';
    demo +=
      '<img src="' +
      women[i].image +
      '" class="card-img-top" style="height:400px;">';
    demo += '<div class="card-body">';
    demo += '<h5 class="card-title">' + women[i].name + "</h5>";
    demo += '<p class="card-text">' + women[i].price + "</p>";
    demo += '<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>';
    demo += "</div>";
    demo += "</div>";
    demo += "</div>";
    document.getElementById("women").innerHTML += demo;
  }
}

const bien_moi=[];
const bien_cu=[];
const bien1=1;
const bienthu3=[];
