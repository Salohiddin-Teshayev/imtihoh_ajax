var userId=null
$(document).ready(()=>{
  var link=window.location.href
    userId=link.slice(link.indexOf("albumId=")+8)
    userId=userId.replaceAll("/", "")
    if(isNaN(Number(userId)) || userId.length==0) {
      console.log("home");
        goHome()
    }else{
      console.log("go");
  getPhotos()
    }
})

const getID=()=>{
  let link=window.location.href;
  let id=link.slice(link.indexOf("albumId=")+8)
  userId=id
}

const goHome=()=>{
  var link=window.location.href
  var newLink=link.slice(0, link.indexOf('html/'))+'index.html'
  window.location.href=newLink
}
const getPhotos = () => {
  getID()
  console.log(userId);
  $.ajax({
    url: `${api}/photos?albumId=${userId}`,
    method: "get",
    success: (res) => {
      if(res.length==0) {
        goHome()
      }else{
        displayPhotos(res);
      }
    },
    error: (err) => {
      console.log(err)
    },
  });
};
const displayPhotos = (data) => {
  $(".data").html("");
  data.map((item, key) => {
    $(".data").append(`
      <tr>
        <td>${key + 1}</td>
        <td>${item.title}</td>
        <td>
          <div class="btnBox">
          <img class="img"  onclick="openModal('${item.url}')" src="${item.thumbnailUrl}" alt="">
          </div>
        </td>
      </tr>`);
  })}
const openModal = (url) => {
  $('#exampleModal').modal('show');
  $(".modal-dialog").html(`<img src="${url}">`);
};
