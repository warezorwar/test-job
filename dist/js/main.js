
document.addEventListener('DOMContentLoaded', function() {
    (function() {
        var container = document.getElementById("container"),
            button = document.getElementById("next"),
            previous = document.getElementById("previous"),
            array = ["img/BG1.png", "img/BG2.png",  "img/BG3.png", "img/BG4.png"],
            text = ["главная","для детской","для спальни","для кухни"],
            navUp = document.querySelector(".up"),
            sliderRulesUp = document.querySelectorAll(".up li"),
            sliderRules = document.querySelectorAll(".nav li"),
            old, i = 0,
            j = sliderRules.length - 1,
            imgSet = function(link) {
                container.style.backgroundImage = "url(" + link + ")"
            };
        container.addEventListener("click", newX, false);
        navUp.addEventListener("click", newX, false);

        for (; j > -1; j--) {
            var link = array[j];
            var img = new Image;
                img.src = link;
            var sliderRule = sliderRules[j];
            sliderRule.dataset.indx = j;
            var sliderRuleUp =
                sliderRulesUp[j];
            sliderRuleUp.textContent = text[j];
            sliderRuleUp.dataset.indx = j
        }
        sliderRule.classList.add("active");
        sliderRuleUp.classList.add("active");
        sliderRule.click();

        function newX(e) {
            var elem = e.target;
            var i = +elem.dataset.indx;
            if (isNaN(i)) return;
            var next = i + 1;
            next == array.length && (next = 0);
            var prev = i - 1;
            0 > prev && (prev = array.length - 1);
            button.dataset.indx = next;
            previous.dataset.indx = prev;
            document.querySelector(".nav .active").classList.remove("active");
            sliderRules[i].classList.add("active");
            document.querySelector(".up .active").classList.remove("active");
            sliderRulesUp[i].classList.add("active");
            var link = array[i];
            imgSet(link);
            e.preventDefault()
        }
    })()
});






