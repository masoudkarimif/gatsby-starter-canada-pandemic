import React from "react"
import * as d3 from "d3";
import {numberWithCommas} from "../helpers/helper"

const Popup = (props) => {
  return (
    <div id="popup" style={{display: props.visibility, left: props.left + "px", top: props.top + "px"}}>
      <h6>{props.province}</h6>
      <table>
        <thead>
          <tr>
            <th>Cases</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{numberWithCommas(props.cases)}</td>
            <td>{numberWithCommas(props.deaths)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}


class CanadaMap extends React.Component {
    constructor(props)  {
      super(props);
      this.state = {
                d3: '',
                visibility: 'none',
                currentProvince: '',
                currentCases: null,
                currentDeaths: null
              }
      this.svgRef = React.createRef();
      this.mapData = this.props.mapData;

      this.popupData = this.props.popupData;
    }


    fillColor(number) {
      return (number < 100) ? "#ccc" :
              (number < 1000) ? "#d07b7e" :
              (number < 2000) ? "#c84449" :
              (number < 3000) ? "#903235" : "#79080b";
    }

    createThePlot() {

      var w = this.props.width; var h = this.props.height, scale = this.props.scale;
      const self =this;

      var svg = d3.select(this.svgRef.current).append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("id", "svg-map-canada")
        .attr("pointer-events", "auto")
        .attr("preserveAspectRatio", "none")
        .attr("viewBox", `0 0 ${this.props.width} ${this.props.height}`)
        .on("mousemove", function(e){
              self.props.mouseMoveHandler(d3.mouse(this)[0] * self.ratio, d3.mouse(this)[1] * self.ratio)
        })

    var projection = d3.geo.azimuthalEqualArea()
      .rotate([100, -45])
      .center([5,18])
      .scale(this.props.scale)
      .translate([w/2, h/2])

    var path = d3.geo.path()
      .projection(projection);

    svg.selectAll("append")
        .data(this.mapData.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", (d,i)=>this.fillColor(this.popupData[i].cases))
        .attr("stroke", "#444")
        .attr("stroke-width", "0.35")
        .on("mouseenter", function(d, i, e){
            self.props.mouseEnterHandler(self.popupData[i].province, self.popupData[i].cases, self.popupData[i].deaths);
        })
        .on("mouseleave", function() {
            self.props.mouseLeaveHandler();
        });
    }

    componentDidMount() {
      this.createThePlot();
    }

    componentDidUpdate() {
      this.ratio = (this.svgRef.current.getBoundingClientRect().height / this.props.height)
    }

    render() {
      return (
        <div ref={this.svgRef} id="svg-holder" className="column"></div>
      )
    }
}

class Map extends React.Component {

 constructor(props) {
   super(props)
   this.state ={
     province: '',
     cases: 0,
     deaths: 0,
     popup: {
       visibility: 'none',
       left: 0,
       top: 0
     }
   }
 }

cumulativeOffset(element) {
    var top = 0, left = 0;
    do {
        top += element.offsetTop  || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
    } while(element);

    return {
        top: top,
        left: left
    };
  }

  mouseMove(left, top) {
    const data = this.cumulativeOffset(document.getElementById("svg-holder"))
    const popupRect = document.getElementById("popup").getBoundingClientRect();
    let popup = {...this.state.popup}
    popup.left =  left + data.left - 0
    popup.top = top + data.top - 80


     this.setState({
       popup
     })
  }

  mouseEnter(province, cases, deaths) {
    let popup = {...this.state.popup}
    popup.visibility = "block"
    this.setState({
           popup,
           province,
           cases: numberWithCommas(cases),
           deaths: numberWithCommas(deaths)
         })
  }

  mouseLeave() {
    let popup = {...this.state.popup}
    popup.visibility = "none"
    this.setState({
           popup,
         })
  }

  render() {
      return (
        <div id="map-holder" className="container">
          <Popup
              province={this.state.province}
              cases={this.state.cases}
              deaths={this.state.deaths}
              visibility={this.state.popup.visibility}
              left={this.state.popup.left}
              top={this.state.popup.top} />

          <CanadaMap
              mapData={this.props.mapData}
              popupData={this.props.data}
              mouseMoveHandler={this.mouseMove.bind(this)}
              mouseEnterHandler={this.mouseEnter.bind(this)}
              mouseLeaveHandler={this.mouseLeave.bind(this)}
              width={800}
              height={600}
              scale={800}
              />
        </div>
      )
  }
}


export default Map;
