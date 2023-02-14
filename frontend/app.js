console.log("linked")

var valuelist = document.getElementById('valuelist');
var listArray = [];
var checkboxes = document.querySelectorAll('.checkbox')
console.log(checkboxes)

for( var checkbox of checkboxes){
    checkbox.addEventListener('click', function(){
        if(this.checked == true){
            console.log(this.value)
            listArray.push(this.value)
        } else {
            console.log("unchecked")
        }
    })
}