<!DOCTYPE html>
<html>

    <head>
        <style>

        </style>
    </head>

    <body>
        <form id="file-form" action="handler.php" method="POST">
            <input type="file" id="file-select" name="photos[]" multiple/>
            <button type="submit" id="upload-button">Upload</button>
        </form>
        <script type="text/javascript">
            var formData = new FormData();

            formData.append("username", "Groucho");
            formData.append("accountnum", 123456); // number 123456 is immediately converted to string "123456"

            //    // HTML file input user's choice...
            //    formData.append("userfile", fileInputElement.files[0]);

            // JavaScript file-like object...
            var content = '<a id="a"><b id="b">hey!</b></a>'; // the body of the new file...
            var blob = new Blob([content], {type: "text/xml"});

            formData.append("webmasterfile", blob);


            console.log(formData);
        </script>
    </body>

</html>