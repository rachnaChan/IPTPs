      
      const String = window.location.search;
        const Url = new URLSearchParams(String);

        const id = Url.get('bookid');
        let result = [];
        let output = '';
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`).then(async(res) => {
            result = await res.json();
            console.log(result)
            output += `<div class="first">` +
                `<div>${result.title}</div>` +
                `<div>${result.albumId}</div>` +
                `</div>` +
                `<div class="home">` +
                `<div>${result.id}</div>` +
                `<img src="${result.url}" alt="#">` +
                `</div>`

            document.getElementsByClassName('items')[0].innerHTML = output;
        });