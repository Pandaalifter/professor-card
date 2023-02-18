import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js"; 

const chad = new URL('../assets/the-moment.png', import.meta.url).href;

class ProfessorCard extends LitElement {
  static properties = {
    title: {type: String, reflect: true},
    subtitle: {type: String},
    chadLabel: {type: String},
    top: {type: String},
    bottom: {type: String}
  }

  static styles = css`
    :host{
      display: inline-block;
    }
    .card{
      border-radius: 24px;
      border: 3px solid #041E42;
      padding: 8px;
      width: 400px;
      position: relative;
      overflow: hidden;
      box-shadow: 0px 8px 24px #999;
      background-color: lightgrey;
      text-align: center;
      font-family: Arial, Helvetica, sans-serif;
      margin-bottom: 10px;
    }
    .textbox{
      font-size: 15px;
      margin-left: 112px;
      text-align: right;
      border-radius: 24px;
    }
    .description{
      text-shadow: -1px 1px 2px #FFFFFF,
                      1px 1px 2px #FFFFFF,
                      1px -1px 0 #FFFFFF,
                      -1px -1px 0 #FFFFFF;
    }
    .haxbtn{
      display:inline-block;
      text-align: center;
      color: white;
      background-color: #041E42;
      border-radius: 5px;
      font-size: 20px;
      width: 120px;
      height: 32px;
      box-shadow: 0px 10px 24px #999;
      border: 1px solid #041E42;
      visibility: visible;
      padding-top: 10px;
      margin-right: 32px;
    }
    .haxbtn:hover{
      color: #e0e0e0;
      background-color: #07377a;
      box-shadow: 0px 10px 24px white;
      border: 1px solid #07377a;
    }
    .haxbtn:focus{
      color: #e0e0e0;
      background-color: #07377a;
      box-shadow: 0px 10px 24px white;
      border: 1px solid #07377a;
    }
    .title{
      color: white;
      font-size: 24px;
      text-shadow: -1px 1px 2px #000,
                      1px 1px 2px #000,
                      1px -1px 0 #000,
                      -1px -1px 0 #000;
    }
    .subtitle{
      color: white;
      font-size: 16px;
      text-shadow: -1px 1px 2px #000,
                      1px 1px 2px #000,
                      1px -1px 0 #000,
                      -1px -1px 0 #000;
    }
    .giaImg{
      width: 200px;
      border-radius: 24px;
      box-shadow: 0px 10px 24px #999;
      float: left;
    }
    .basic{
      background-color: hotpink;
    }
    .hoverCard{
      border: 3px solid purple;
      box-shadow: 0px 8px 24px yellow;
    }

    @media only screen and (min-width: 600px) and (max-width: 1200px){
      .card{
        background-color: red;
      }
    }
    @media only screen and (max-width: 500px){
      .card{
        background-color: lightblue;
      }
    }
  `;

  constructor() {
    super();
    this.title = "Professor Giacobe";
    this.subtitle = "Chad of Cyber IST";
    this.chadLabel = "Details";
    this.top = "Giacobe";
    this.bottom = "Double Overlaid";
  }

  render() {
    return html`
      <div class="card">
        <h1 class="title">${this.title}</h1>
        <h2 class="subtitle">${this.subtitle}</h2>

        <div class="giaImg">
          <meme-maker 
            image-url="${chad}" 
            top-text="${this.top}" 
            bottom-text="${this.bottom}">
          </meme-maker>
        </div>

        <div class="textbox">
          <details>
            <summary class="haxbtn">${this.chadLabel}</summary>
            <div class="description">
              <slot></slot>
            </div>
          </details>

        </div>
      </div>
    `;
  }
}

customElements.define('professor-card', ProfessorCard);