<!DOCTYPE html>
<html>

<head>
</head>

<body>
    <div id="result">result</div>
    <button id="add" class="target">add</button>
    <button id="remove" class="target">remove</button>
    <button id="toggle" class="target">toggle</button>

    <script type="text/javascript">


        var result = document.getElementById('result'),
            add = document.getElementById('add'),
            remove = document.getElementById('remove'),
            toggle = document.getElementById('toggle');

        // -------------- helpers --------------
        showResult = function(elem) {
            var elem = elem;
            elem.innerHTML = elem.className;
        }

        aonHasClass = function(el, cls) {
            for (var c = el.className.split(' '), i = c.length - 1; i >= 0; i--) {
                return c[i] == cls ?  true : false;

            }
        }

        aonAddClass = function(el, cls) {
            for (var c = el.className.split(' '), i = c.length - 1; i >= 0; i--) {
                if (c[i] == cls) return
            }

            el.className += ' ' + cls
        }

        aonRemoveClass = function(el, cls) {
            for (var c = el.className.split(' '), i = c.length - 1; i >= 0; i--) {
                if (c[i] == cls) c.splice(i, 1)
            }

            el.className = c.join(' ')
        }

        aonToggleClass = function(el, cls) {
            aonHasClass(el, cls) ? aonRemoveClass(el, cls) : aonAddClass(el, cls);
        }

        var aonManageCls = {
            has: aonHasClass,
            add: aonAddClass,
            remove: aonRemoveClass,
            toggle: aonToggleClass
        };

        add.onclick = function () {
            aonManageCls.add(this, 'button-hover');
            showResult(this);
        }
        remove.onclick = function () {
            aonManageCls.remove(this, 'button-hover');
            showResult(this);
        }
        toggle.onclick = function () {
            aonManageCls.toggle(this, 'button-hover');
            showResult(this);
        }


    </script>
</body>

</html>