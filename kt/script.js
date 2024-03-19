const food = [
  {
    id: 1,
    name: "Phở",
    image: "https://static.vinwonders.com/production/pho-bo-ha-noi-1.jpg",
    price: "30.000",
    madeIn: "Việt Nam",
    description:
      "Món phở là một món ăn truyền thống của Việt Nam, nổi tiếng với hương vị đậm đà từ nước dùng được nấu từ xương heo, gà hoặc bò, kèm theo sợi phở mềm mịn và thơm lừng. Phở thường được phục vụ với rau sống, gia vị như hành, ngò, quẩy, và chanh.",
  },
  {
    id: 2,
    name: "Bánh Mì",
    image:
      "https://static-images.vnncdn.net/files/publish/2023/4/24/clever-junior-830.jpg",
    price: "15.000",
    madeIn: "Việt Nam",
    description:
      "Bánh mì là một loại bánh mì phổ biến trên thế giới, được làm từ bột mì, nước, muối và men nở. Bánh mì thường được ăn kèm với những loại nhân đa dạng như thịt, pate, xúc xích, trứng, thịt gà hoặc cá, cùng với các loại rau sống và gia vị.",
  },
  {
    id: 3,
    name: "Sushi",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw_HUs8F9vP6cqdPDXMWlgyWD3yZsT8QNyDQ&usqp=CAU",
    price: "25.000",
    madeIn: "Japan",
    description:
      "Sushi là một món ăn truyền thống của Nhật Bản, được làm từ cơm trộn với giấm gạo, kèm theo các loại hải sản hoặc nguyên liệu khác như cá hồi, cá ngừ, tôm, cua, trứng cá muối, rau cải, trứng cá hồi và hành phi. Sushi thường được phục vụ với gừng đỏ, wasabi và dầu mè.",
  },
  {
    id: 4,
    name: "Hamburger",
    image:
      "https://t4.ftcdn.net/jpg/06/05/19/97/360_F_605199701_0UzQJmfAi7Ob81OHWNMiYL4K8QbLKkEB.jpg",
    price: "45.000",
    madeIn: "Germany",
    description:
      "Hamburger là một món ăn phổ biến trên khắp thế giới, được làm từ thịt bò xay, thường được đặt giữa hai miếng bánh mì hamburger. Hamburger thường được ăn kèm với rau sống, cà chua, hành tây, dưa chuột, sốt mayonnaise và các loại sốt khác tùy theo khẩu vị.",
  },
  {
    id: 5,
    name: "Pizza",
    image:
      "https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/cach_lam_banh_pizza_thom_ngon_chuan_nha_hang_2_43d4f180fd.png",
    price: "50.000",
    madeIn: "Italy",
    description:
      "Pizza là một món ăn phổ biến xuất phát từ Ý, được làm từ lớp bánh mì mỏng được phết sốt cà chua, phủ những loại nhân như phô mai, pepperoni, xúc xích, thịt nguội, hải sản hoặc rau cải, và được nướng trong lò pizza.",
  },
];

function showFood() {
  var html = "";
  var d = 0;
  for (var i = 0; i < food.length; i++) {
    d++;
    html + "<tr>";
    html += "<td>" + d + "</td>";
    html += "<input type='hidden' value='" + i + "' id='editIndex'>";
    html += "<td>" + food[i].name + "</td>";
    html +=
      "<td ><img onclick=showDescription(" +
      i +
      ") src=" +
      food[i].image +
      " style=height:100px;width:100px></td>";
    html += "<td>" + food[i].madeIn + "</td>";
    html += "<td>" + food[i].price + "</td>";
    html +=
      "<td><input type='button' value='Sửa' onclick='editFood(" +
      i +
      ")' /> <input type='button' value='Xoá' onclick='deleteFood(" +
      i +
      ")' /></td>";
    html += "</tr>";
  }
  document.getElementById("tbl").innerHTML = html;
}

function createFood() {
  var n = food.length;
  n++;
  var foodName = document.getElementById("foodName").value;
  var foodImage = document.getElementById("foodImage").value;
  var foodPrice = document.getElementById("foodPrice").value;
  var foodMadeIn = document.getElementById("foodMadeIn").value;

  var newFood = {
    id: n,
    name: foodName,
    image: foodImage,
    price: foodPrice,
    madeIn: foodMadeIn,
  };
  food.push(newFood);
  showFood();
}

function deleteContent() {
  document.getElementById("foodName").value = "";
  document.getElementById("foodPrice").value = "";
  document.getElementById("foodMadeIn").value = "";
  document.getElementById("foodImage").value = "";
}

function editFood(index) {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("editForm").style.display = "block";

  document.getElementById("editIndex").value = index;
  document.getElementById("editFoodName").value = food[index].name;
  document.getElementById("editFoodImage").value = food[index].image;
  document.getElementById("editFoodMadeIn").value = food[index].madeIn;
  document.getElementById("editFoodPrice").value = food[index].price;

  document.getElementById("editForm").style.display = "block";
}

function closeEditForm() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("editForm").style.display = "none";
  document.getElementById("showdescription").style.display = "none";
}

function updateFood() {
  var indexToUpdate = parseInt(document.getElementById("editIndex").value);
  var newName = document.getElementById("editFoodName").value;
  var newImage = document.getElementById("editFoodImage").value;
  var madeIn = document.getElementById("editFoodMadeIn").value;
  var newPrice = document.getElementById("editFoodPrice").value;

  food[indexToUpdate].name = newName;
  food[indexToUpdate].image = newImage;
  food[indexToUpdate].madeIn = madeIn;
  food[indexToUpdate].price = newPrice;
  document.getElementById("editForm").style.display = "none";
  showFood(food);
}

function deleteFood(index) {
  food.splice(index, 1);
  showFood();
}

function searchFood() {
  var searchKeyword = document
    .getElementById("searchInput")
    .value.toLowerCase();
  var rows = document.querySelectorAll("#tbl tr");
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var foodName = row.cells[1].innerText.toLowerCase();

    if (foodName.includes(searchKeyword)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
}

function showDescription(index) {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("showdescription").style.display = "block";
  console.log(index);
  var name = document.getElementById("nameFood");
  var description = document.getElementById("description");
  name.innerText = food[index].name;
  description.innerText = food[index].description;
  document.getElementById("showdescription").style.display = "block";
}
