class imageController {
  constructor() {

  }

  render(){
    let imageFormView = new imageForm()
    $("#form-place").append(imageFormView.submitForm)
    const img = $("#photo-form")
    img.on("submit", function(event) {
      event.preventDefault()
      let url = $("#img-url")
      let caption = $("#img-caption")
      let imageListView = new imageList(url, caption)
      $("#photo-list").append(imageListView.render())
      url.val("")
      caption.val("")
    })
  }
}
