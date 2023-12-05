var data = null;

$(document).ready(() => {
  getAlbums();
});

const getAlbums = () => {
  $.ajax({
    url: `${api}/albums`,
    method: "get",
    success: (res) => {
      data = res;
      console.log(res);
      displayAlbums(res);
    },
    error: (err) => {
      console.log(err);
    },
  });
};



const displayAlbums = (data) => {
  $(".data").html("");
  data.map((item, key) => {
    $(".data").append(`
      <tr>
        <td>${key + 1}</td>
        <td>${item.title}</td>
        <td>
          <div class="btnBox">
            <a href="./photos.html?albumId=${item.id}" class="btn btn-primary active" onclick="openModal(${key})">
              <i class="fa fa-eye" aria-hidden="true"></i>
            </a>
          </div>
        </td>
      </tr>`);
  });
};



