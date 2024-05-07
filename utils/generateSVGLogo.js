class Shape {
  constructor({ textColor, backgroundColor, content }) {
    this.textColor = textColor;
    this.backgroundColor = backgroundColor;
    this.content = content;
  }
}

class Triangle extends Shape {
  render() {
    return `<svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">
  <polygon points="100,10 150,190 50,190" style="fill:${this.backgroundColor};stroke-width:3" />
  <text>
  <tspan fill="${this.textColor}">${this.content}</tspan> 
</text>
<style>
  <![CDATA[
    text{
      dominant-baseline: hanging;
      font: 28px Verdana, Helvetica, Arial, sans-serif;
    }
  ]]>
</style>
 </svg>`;
  }
}

class Circle extends Shape {
  render() {
    return `<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
    <circle r="45" cx="50" cy="50" fill="${this.backgroundColor}" />
    <text>
  <tspan fill="${this.textColor}">${this.content}</tspan> 
</text>
<style>
  <![CDATA[
    text{
      dominant-baseline: hanging;
      font: 28px Verdana, Helvetica, Arial, sans-serif;
    }
  ]]>
</style>
  </svg>`;
  }
}

class Square extends Shape {
  render() {
    return `<svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" x="10" y="10" rx="20" ry="20" fill="${this.backgroundColor}" />
    <text>
  <tspan fill="${this.textColor}">${this.content}</tspan> 
</text>
<style>
  <![CDATA[
    text{
      dominant-baseline: hanging;
      font: 28px Verdana, Helvetica, Arial, sans-serif;
    }
  ]]>
</style>
  </svg>`;
  }
}
module.exports = { Circle, Square, Triangle };
