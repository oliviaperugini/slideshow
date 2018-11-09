//'use strict'
import React, { Component } from 'react'
import { SketchPicker } from 'react-color'
import './custom.css'


class ToolBar extends Component {
    constructor() {
        super()
        this.state = {
            italicsActive: false,
            boldActive: false,
            underlineActive: false,
            fontSize: 12,
            font: 'default',
            // how to represent bullet points?
            justified: 'left-align',
            backgroundColor: '#fff',   // default background color is white
            textColor: '#000'          // default text color is black
        }

        this.handleItalicButton = this.handleItalicButton.bind(this)
        this.handleBoldButton = this.handleBoldButton.bind(this)
        this.handleUnderlineButton = this.handleUnderlineButton.bind(this)
        this.handleFontSizeButton = this.handleFontSizeButton.bind(this)
        this.handleFontButton = this.handleFontButton.bind(this)
    }

    handleItalicButton() {
        this.setState({italicsActive: !this.state.italicsActive})
    }
    handleBoldButton() {
        this.setState({boldActive: !this.state.boldActive})
    }
    handleUnderlineButton() {
        this.setState({underlineActive: !this.state.underlineActive})
    }
    handleFontSizeButton(newFontSize) {
        this.setState({fontSize: newFontSize})
    }
    handleFontButton(newFont) {
        this.setState({font: newfont})
    }

    render() {
        return (
        <div>
          <div className="btn-toolbar bg-light text-dark" role="toolbar">
            <div className="btn-group " role="group" aria-label="All ToolBar Buttons">

              <div className="btn-group" role="group" aria-label="Font Size">
                <button className="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Font Size</button>
                <div className="dropdown-menu">
                  <a className="dropdown-item">1</a>
                  <a className="dropdown-item">2</a>
                  <a className="dropdown-item">4</a>
                  <a className="dropdown-item">6</a>
                  <a className="dropdown-item">8</a>
                  <a className="dropdown-item">10</a>
                  <a className="dropdown-item">12</a>
                  <a className="dropdown-item">14</a>
                  <a className="dropdown-item">16</a>
                  <a className="dropdown-item">17</a>
                  <a className="dropdown-item">18</a>
                  <a className="dropdown-item">19</a>
                  <a className="dropdown-item">20</a>
                </div>
              </div>

              <div className="btn-group" role="group" aria-label="Font">
                <button className="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Font</button>
                <div className="dropdown-menu">
                    <a className="dropdown-item">Times New Roman</a>
                    <a className="dropdown-item">Calibri</a>
                    <a className="dropdown-item">...</a>
                </div>
              </div>

              <div className="btn-group" role="group" aria-label="Text Bold Italics Underline">
                <button className="btn" type="button">Bold</button>
                <button className="btn" type="button">Italics</button>
                <button className="btn" type="button">Underline</button>
              </div>

              <div className="btn-group" role="group" aria-label="Text Color">
                <button className="btn dropdown-toggle" type="button" data-toggle="dropdown">Text Color</button>
                <div className="dropdown-menu">
                  <SketchPicker />
                </div>
              </div>

              <div className="btn-group" role="group" aria-label="Background Color">
                <button className="btn dropdown-toggle" type="button" data-toggle="dropdown">Background Color</button>
                <div className="dropdown-menu">
                  <SketchPicker />
                </div>
              </div>

              <div>
                <button className="btn dropdown-toggle" type="button" data-toggle="dropdown"></button>
                <div className="dropdown-menu">
                  <a className="btn" type="button" id="left-align"><i className="fas fa-align-left"></i></a>
                  <a className="btn" type="button" id="middle-align"><i className="fas fa-align-center fas-fw"></i></a>
                  <a className="btn" type="button" id="right-align"><i className="fas fa-align-right"></i></a>
                </div>
              </div>

              <div className="btn-group">
                <button className="btn" type="button">
                  bullet points

                </button>
              </div>

            </div>
          </div>
        </div>
      )
    }
}

export default ToolBar;
