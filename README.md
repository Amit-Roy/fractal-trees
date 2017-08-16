#Fractal Trees

We implement fractal trees using **p5.js** and **p5.dom.js** libraries.

Check it out at: https://amit-roy.github.io/fractal-trees/

The basic tree has the code: 

```javascript
function stickTree(x, y, len, angle) {
    if (len > 10) {
        push();
        translate(x, y);
        rotate(angle * Math.PI / 180);
        line(0, 0, 0, -len);
        stickTree(0, -len, len * 0.8, -25);
        stickTree(0, -len, len * 0.8, 25);
        pop();
    }
}
```

This is how the _Realistic Tree_ is generated as:
![](https://github.com/Amit-Roy/fractal-trees/blob/master/src/main/resources/example.jpg)

## Warning:
The _Artistic Tree_ and _Realistic Tree_ are very computation intensive. You can safely let it complete computation for the former. For the later, please use caution as it may crash the browser. Also, avoid using Firefox.
