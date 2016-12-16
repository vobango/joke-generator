$(function(){
	var newJoke="";
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
	var getJoke=function() {
		$.ajax({
			type: "GET",
			url: "http://api.icndb.com/jokes/random",
			dataType: "json",
			success: function(getJoke){
				$("#theJoke").html(getJoke.value.joke);
				newJoke = getJoke.value.joke;
				var tweet = "http://twitter.com/home?status="+newJoke;
				$(".buttons a").attr("href",tweet);
			},
		});
	};
  function changeColor(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    $("body").css("background", "#" + randomColor);
  }
  document.querySelector(".btn").addEventListener("click", function(e){
    getJoke();
    e.preventDeafult;
    var joke = document.querySelector("#theJoke");
    joke.classList.remove("slideInRight");
    void joke.offsetWidth;
    joke.classList.add("slideInRight");
  }, false);
  changeColor();
  setInterval(changeColor, 10000);
});