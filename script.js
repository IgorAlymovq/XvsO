jQuery(document).ready(function () {
    function sms(text) {
        $(".sms").removeClass("none")
        $(".sms").text(text)
        function cl() {
            $(".sms").addClass("none")
        }
        setTimeout(cl, 3000)
    }
    sms("Hello players!")
    let red = true
    let pr = false
    let win = ""
    let c = 0
    let z = 0
    jQuery("body").click(function (e) {
        let id = e.target.id
        if (id === "cl") {
            $(".links").addClass("links-close")
            $(".game").addClass("center")
            $("#op").removeClass("none")
            sms("Menu is minimized")
        }
        else if (id === "op") {
            $(".links").removeClass("links-close")
            $(".game").removeClass("center")
            $("#op").addClass("none")
            sms("Menu is expanded")
        }
    })
    jQuery(".btns").click(function (e) {
        let btnId = e.target.id
        if (btnId === "restart") {
            $("#1").attr("class", "btn")
            $("#2").attr("class", "btn")
            $("#3").attr("class", "btn")
            $("#4").attr("class", "btn")
            $("#5").attr("class", "btn")
            $("#6").attr("class", "btn")
            $("#7").attr("class", "btn")
            $("#8").attr("class", "btn")
            $("#9").attr("class", "btn")
            $("#1").text("")
            $("#2").text("")
            $("#3").text("")
            $("#4").text("")
            $("#5").text("")
            $("#6").text("")
            $("#7").text("")
            $("#8").text("")
            $("#9").text("")
            win = ""
            red = true
            sms("Game restart")
        }
        else if (btnId === "help") {
            sms("Error 404")
        }
        else if (btnId === "cheats") {
            sms("Error 404")
        }
    })
    jQuery(".game").click(function (e) {
        let id = e.target.id
        if (id === "") { }
        else {
            if ($("#" + id).text() === "") {
                if (red === true) {
                    $("#" + id).addClass("color-red")
                    $("#" + id).text("X")
                    red = false
                    pr = true
                }
                else if (red === false) {
                    $("#" + id).addClass("color-blue")
                    $("#" + id).text("O")
                    red = true
                    pr = true
                }
            }
        }
        if (pr === true) {
            let text1 = $("#1").text()
            let text2 = $("#2").text()
            let text3 = $("#3").text()
            let text4 = $("#4").text()
            let text5 = $("#5").text()
            let text6 = $("#6").text()
            let text7 = $("#7").text()
            let text8 = $("#8").text()
            let text9 = $("#9").text()
            if (text1 === "X" && text2 === "X" && text3 === "X") {
                win = "red"
            }
            if (text4 === "X" && text5 === "X" && text6 === "X") {
                win = "red"
            }
            if (text7 === "X" && text8 === "X" && text9 === "X") {
                win = "red"
            }
            if (text1 === "X" && text4 === "X" && text7 === "X") {
                win = "red"
            }
            if (text2 === "X" && text5 === "X" && text8 === "X") {
                win = "red"
            }
            if (text3 === "X" && text6 === "X" && text9 === "X") {
                win = "red"
            }
            if (text1 === "X" && text5 === "X" && text9 === "X") {
                win = "red"
            }
            if (text3 === "X" && text5 === "X" && text7 === "X") {
                win = "red"
            }
            if (text1 === "O" && text2 === "O" && text3 === "O") {
                win = "blue"
            }
            if (text4 === "O" && text5 === "O" && text6 === "O") {
                win = "blue"
            }
            if (text7 === "O" && text8 === "O" && text9 === "O") {
                win = "blue"
            }
            if (text1 === "O" && text4 === "O" && text7 === "O") {
                win = "blue"
            }
            if (text2 === "O" && text5 === "O" && text8 === "O") {
                win = "blue"
            }
            if (text3 === "O" && text6 === "O" && text9 === "O") {
                win = "blue"
            }
            if (text1 === "O" && text5 === "O" && text9 === "O") {
                win = "blue"
            }
            if (text3 === "O" && text5 === "O" && text7 === "O") {
                win = "blue"
            }
            if (text1 !== "" && text2 !== "" && text3 !== "" && text4 !== "" && text5 !== "" && text6 !== "" && text7 !== "" && text8 !== "" && text9 !== "") {
                win = "none"
            }
            if (win === "red") {
                sms(text = "Winer: Crosses")
                c++
            }
            if (win === "blue") {
                sms(text = "Winer: Zeros")
                z++
            }
            if (win === "none") {
                sms(text = "Winer: Draw")
            }
            if (win !== "") {
                $("#1").attr("class", "btn")
                $("#2").attr("class", "btn")
                $("#3").attr("class", "btn")
                $("#4").attr("class", "btn")
                $("#5").attr("class", "btn")
                $("#6").attr("class", "btn")
                $("#7").attr("class", "btn")
                $("#8").attr("class", "btn")
                $("#9").attr("class", "btn")
                $("#1").text("")
                $("#2").text("")
                $("#3").text("")
                $("#4").text("")
                $("#5").text("")
                $("#6").text("")
                $("#7").text("")
                $("#8").text("")
                $("#9").text("")
                if (win === "red") {
                    $("#win").text("Winer: Crosses")
                }
                else if (win === "blue") {
                    $("#win").text("Winer: Zeros")
                }
                else if (win === "none") {
                    $("#win").text("Winer: Draw")
                }
                $("#win-c").text("Cross wins: " + c)
                $("#win-z").text("Zeros wins: " + z)
                win = ""
                red = true
            }

            pr = false
        }
    })
})