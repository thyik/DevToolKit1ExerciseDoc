# Day 1 Exercise

## Business Card

* [HTML5 Guide](https://www.semrush.com/blog/semantic-html5-guide)
* [HTML5 Developer Guide](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
* [Web Technology for Developer](https://developer.mozilla.org/en-US/docs/Web)

Useful html tags `<header><article><footer><section>`

Sample Output

![](BusinessCard.PNG)


## [D3.JS](https://d3js.org/)

Draw a scatter plot graph

```
Data = [ [ 10,15], [20,20], [5,20], [7,4], [22, 6] ]
```

Tips : 
* Use SVG circles
* Scale data by 10 times

Note : 
* D3.js v5 and v4 have different behaviour for read csv
* v5 have promise framework. Thus v4 code will not work on v5 

Additional References
* [Making scatter Plot](https://alignedleft.com/tutorials/d3/making-a-scatterplot)
* [D3.js Practical Introduction](https://www.youtube.com/watch?v=TOJ9yjvlapY&list=PLAWhhmqB115BFOrcntOGDE-DsDFeXa_i0&index=2&t=0s)
* [Interactive chart with D3.js](https://www.youtube.com/watch?v=aHJCt2adSWA&list=PLAWhhmqB115BFOrcntOGDE-DsDFeXa_i0&index=3&t=0s)
* [d3-scale](https://github.com/d3/d3-scale)
  * ```<script src="https://d3js.org/d3-scale.v3.min.js"></script>```
* [d3-axis](https://github.com/d3/d3-axis)
  * ```<script src="https://d3js.org/d3-axis.v2.min.js"></script>```
* [Javascript Promise](https://www.youtube.com/watch?v=fdOa6jrJ0UM)

## Javascript

Create code to reverse a string

* Given string : "Hello!"
* Output: "!olleH"

## Self Assessment

[Self Assessment](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Silly_story_generator)

## Image Gallery

[Image](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Image_gallery)

## Bank List

* Create an HTML document which shows a list of Banks. [use, <UL> <LI> to create the list).

```html
<ul>
  <li>DBS</li>
  <li>UOB</li>
  <li>OCBC</li>
  <li>Citi</li>
</ul>
```
* Write a javaScript function addNew(), which when called through a button-click in the HTML page, adds a new bank to the list in the HTML document.
* New bank to add. “MYDigi bank”

Tips: use “ appendChild() ” to ac a new child to list.