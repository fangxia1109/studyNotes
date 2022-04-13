window.onload = function (){
    // 搜索框
    var searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("keyup",showKeyword,false);
    searchInput.addEventListener("blur",hideKeyword,false);
    searchInput.addEventListener("focus",showKeyword,false);
    function showKeyword() {
        if(searchInput.value !== ""){
            document.getElementById("search-suggest").style.display = "block"
        }
    }
    function hideKeyword() {
        document.getElementById("search-suggest").style.display = "none"
    }
}
