# rURL

Like cURL but uses [jsdom](https://github.com/tmpvar/jsdom) to download and execute the JavaScript. Useful for parsing webpages that use JavaScript for rendering to the DOM.

**Warning:** This doesn't work *that* well; jsdom doesn't exhaustively cover all DOM api's.

**Warning:** This command executes external code that could escape the jsdom sandbox.

## Getting Started

```sh
npm install -g rurl
```

## Example

Here's what you get when you `curl` a typical React application:

```
❯❯❯ curl http://www.chetcorcos.com/cube/
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Cube</title>
</head>
<body>
  <div id="index"></div>
<script type="text/javascript" src="index.js"></script></body>
</html>
```

And here's what you get when you `rurl`:

```
❯❯❯ rurl http://www.chetcorcos.com/cube/
<!DOCTYPE html><html lang="en"><head>
  <meta charset="UTF-8">
  <title>Cube</title>
<style type="text/css" data-glamor=""></style></head>
<body>
  <div id="index"><div data-reactroot="" class="css-to2mjy"><div class="css-1q7e42a"><div class="css-1x02yr6" id="front" style="background-color: rgb(255, 255, 255);"></div><div class="css-1x02yr6" id="back" style="background-color: rgb(0, 0, 0);"></div><div class="css-1x02yr6" id="left" style="background-color: rgb(252, 157, 157);"></div><div class="css-1x02yr6" id="right" style="background-color: rgb(239, 158, 252);"></div><div class="css-1x02yr6" id="bottom" style="background-color: rgb(248, 252, 158);"></div><div class="css-1x02yr6" id="top" style="background-color: rgb(182, 252, 158);"></div></div></div></div>
<script type="text/javascript" src="index.js"></script>

</body></html>
```

Notice how the JavaScript was executed and rendered into the `div#index`.
