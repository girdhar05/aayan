

function fetchingData() {

    const form1 = document.getElementById('data');
    const file1 = new FormData(form1)
    // file1.append('email', 'abc@gmail.com')
    // file1.append('image1', file1locaton, 'flower.jpg')
    

    // console.log(file1.get("email"))
    // console.log(file1.get('file1'))
    fetch('http://127.0.0.1:3000/test', {
        method: 'post',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: file1
    })
      .then(stream => stream.json())
      .then(data => {
          console.log(data);
      })
}

// cors policy -> Cross Origin Resource Sharing Policy
// multiport 
// multi-domain
// multi-sub-domain
// multi-folder-communication -> accessable