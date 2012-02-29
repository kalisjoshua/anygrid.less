$.fn.ready(function () {
    function demo (grid, output) {
        var
            container = "<div class=\"grid container_#\">{}</div>"
                .replace("#", grid)

            ,heading = function (str) {

                return "<div class=\"grid_#1\">#2</div>"
                    .replace(/#1/g, grid)
                    .replace(/#2/g, str);
            }

            ,result = ""
            ,temp = "";

        temp = heading("<h2>container_" + grid + "</h2>");

        // two fill the row
        for (var i = 1; i < grid; i++) {
            temp += "<div class=\"grid_#1\"><p>#1</p></div><div class=\"grid_#2\"><p>#2</p></div>"
                .replace(/#1/g, i)
                .replace(/#2/g, grid - i);
        }
        result += container
            .replace("{}", temp);

        temp = heading("<h3>Prefix & Suffix</h3>");

        // one grid sliding across the page
        for (var i = 0; i < grid; i++) {
            temp += "<div class=\"grid_1 prefix_#1 suffix_#2\"><p>#1, #2</p></div>"
                .replace(/#1/g, grid - 1 - i)
                .replace(/#2/g, i);
        }
        result += container
            .replace("{}", temp);

        temp = heading("<h3>Pull & Push</h3>");

        // pull/push each
        for (var i = 1; i < grid; i++) {
            temp += "<div class=\"grid_#1 push_#2\"><p>#1</p></div><div class=\"grid_#2 pull_#1\"><p>#2</p></div>"
                .replace(/#1/g, i)
                .replace(/#2/g, grid - i);
        }
        result += container
            .replace("{}", temp);

        output.innerHTML += result;
    };

    var output = document.getElementById("output");

    demo(12, output);
    output.innerHTML += "<br/>";
    demo(16, output);
    output.innerHTML += "<br/>";
    demo(24, output);
});