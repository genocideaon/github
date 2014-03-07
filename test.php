<!DOCTYPE html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>HTML5 Canvas Drawing Board | onlyWebPro.com</title>
    <style>
        #message a
        {
            /* display: block before hiding */
            display: block;
            display: none;

            /* link is above all other elements */
            z-index: 999; 

            /* link doesn't hide text behind it */
            opacity: .8;

            /* link stays at same place on page */
            position: fixed;

            /* link goes at the bottom of the page */
            top: 100%;
            margin-top: -80px; /* = height + preferred bottom margin */

            /* link is centered */
            left: 50%;
            margin-left: -160px; /* = half of width */

            /* round the corners (to your preference) */
            -moz-border-radius: 24px;
            -webkit-border-radius: 24px;

            /* make it big and easy to see (size, style to preferences) */
            width: 300px;
            line-height: 48px;
            height: 48px;
            padding: 10px;
            background-color: #000;
            font-size: 24px;
            text-align: center;
            color: #fff;
        }
    </style>
</head>
<body>
    <div id="top"></div>
    <!-- put all of your normal <body> stuff here -->
    <?php for($i=0;$i<100;$i++): ?>
    xxxx<br>
    <?php endfor; ?>
    <div id="message"><a href="#top">Scroll to top</a></div>
    <script type="text/JavaScript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js?ver=1.4.2"></script>
    <script type="text/javascript">
        $(function () { // run this code on page load (AKA DOM load)

            /* set variables locally for increased performance */
            var scroll_timer;
            var displayed = false;
            var $message = $('#message a');
            var $window = $(window);
            var top = $(document.body).children(0).position().top;
            console.log('top: '+top);

            /* react to scroll event on window */
            $window.scroll(function () {
                window.clearTimeout(scroll_timer);
                scroll_timer = window.setTimeout(function () { // use a timer for performance
                    if($window.scrollTop() <= top) // hide if at the top of the page
                    {
                        displayed = false;
                        $message.fadeOut(500);
                    }
                    else if(displayed == false) // show if scrolling down
                    {
                        displayed = true;
                        $message.stop(true, true).show().click(function () { $message.fadeOut(500); });
                    }
                }, 100);
            });
        });
    </script>
</body>
</html>