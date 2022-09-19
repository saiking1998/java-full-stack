const listItem = document.querySelectorAll(".list-item")
const lists = document.querySelectorAll(".list")

let dragitem = null;
for (let i = 0; i < listItem.length; i++) {
    const item = listItem[i];
    item.addEventListener("dragstart", function () {
        dragitem = item;
        setTimeout(function () {
            item.style.display = "none";
        }, 0)

    })

    item.addEventListener("dragend", function () {

        setTimeout(function () {
            dragitem.style.display = "block"
            dragitem = null;
        }, 0)
    })
    for (let j = 0; j < lists.length; j++) {
        const list = lists[j];

        list.addEventListener("dragover", function (e) {
            e.preventDefault()

        })
        list.addEventListener("dragenter", function (e) {
            e.preventDefault()
            this.style.backgroundColor = '	rgba(0,0,255,0.5)'
        })
        list.addEventListener("dragleave", function () {
            this.style.backgroundColor = 'grey'
        })
        list.addEventListener("drop", function (e) {
            this.append(dragitem);
            this.style.backgroundColor = 'grey'
        })
    }
}
