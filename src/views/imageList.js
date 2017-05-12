class imageList {
  constructor(url, caption) {
    this.url = url
    this.caption = caption
  }

  render(){
    
    return `<img src="${this.url.val()}"><p>${this.caption.val()}</p>`
  }

}
