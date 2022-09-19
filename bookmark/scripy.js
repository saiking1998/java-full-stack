document.getElementById('myForm').addEventListener('submit', savebookmark);
function savebookmark(e) {
    e.preventDefault();
    //feetching form values
    var sitename = document.getElementById('siteName').value;
    var siteurl = document.getElementById('siteUrl').value;

    if (!validateForm(sitename, siteurl)) {
        return false;
    }


    //making the value to obj
    var bookmark = {
        name: sitename,
        url: siteurl
    }
    //storing locally 
    if (localStorage.getItem('bookmarks') === null) {
        var bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        //get existing item
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        //adding bokmark to arrayvalue
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    }
    fetchBookmarks();
}
function deletebookmark(url) {
    //geting the bookmark
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    for (let i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].url == url) {
            bookmarks.splice(i, 1);
        }
    }

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    fetchBookmarks();

}

function fetchBookmarks() {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    var bookmarksResults = document.getElementById('bookmarksResults');
    bookmarksResults.innerHTML = '';

    for (let i = 0; i < bookmarks.length; i++) {
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;
        bookmarksResults.innerHTML += '<div class="well">' +
            '<h3>' + name +
            ' <a class="btn btn-default" target="_blank" href="' + addhttp(url) + '">Visit</a> ' +
            '<a onclick="deletebookmark(\'' + url + '\')" class="btn btn-danger visit" k"href="#">delete</a>' +
            '</h3>' +
            '</div>';
    }

}
function validateForm(sitename, siteurl) {
    if (!sitename || !siteurl) {
        alert('Please fill in the form');
        return false;
    }

    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (!siteurl.match(regex)) {
        alert('Please use a valid URL');
        return false;
    }

    return true;
}

function addhttp(url) {
    if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
        url = "http://" + url;
    }
    return url;
}