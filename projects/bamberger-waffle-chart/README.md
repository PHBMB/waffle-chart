# pb-simple-waffle-chart

This component can be used to create simple waffle charts. The color or background image of a category can be customized. The area of the entire waffle chart and of the single waffle must be defined. The real numbers of every category are the inputs. No need for a pre-processing. The component calculates the ratio for every category and displays the results optimally. It must be ensured that the defined size of a waffle fits into the defined size of the entire waffle chart.

## Install

You can get it on npm.

```
npm i pb-simple-waffle-chart --save
```

## Usage

### Import the module

```
import { PbSimpleWaffleChartModule } from "pb-simple-waffle-chart";

NgModule({
  imports: [
    PbSimpleWaffleChartModule
  ]
})
```

### Parameters
```
sizeOfWaffleSquare: number // mandatory - size of one waffle square in px
marginOfWaffleSquare: number // mandatory - margin of one waffle square in px
waffleCategories: Array<{"val": number, "bgColor": string, "bgImage": string}> // all mandatory - objects that are represented  
borderRadiusPercentage: number // mandatory - border radius in %
divID: string // mandatory - id of entire DOM element
waffleChartWidth: number // mandatory - width of entire waffle chart in px
waffleChartHeight: number // mandatory - height of entire waffle chart in px
fillMode: string // mandatory - waffle fill mode - possible values: vertical-lr | horizontal-tb | tb

```

### Example Usage

#### Result


#### Script
```
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<pb-simple-waffle-chart
                [sizeOfWaffleSquare] = sizeOfWaffleSquare
                [marginOfWaffleSquare] = marginOfWaffleSquare
                [waffleCategories] = waffleCategories
                [borderRadiusPercentage] = borderRadiusPercentage
                [divID] = divID
                [waffleChartWidth] = waffleChartWidth
                [waffleChartHeight] = waffleChartHeight
                [fillMode] = fillMode>
              </pb-simple-waffle-chart>`,
  styles: ['']
})

export class AppComponent{

  public sizeOfWaffleSquare!: number;
  public marginOfWaffleSquare!: number;
  public waffleCategories!: Array<{}>;
  public borderRadiusPercentage!: number;
  public divID!: string;
  public waffleChartWidth!: number;
  public waffleChartHeight!: number;
  public fillMode!: string;

  constructor() {
    this.sizeOfWaffleSquare = 10;
    this.marginOfWaffleSquare = 2;
    this.waffleCategories= [
      {
        "val" : 100,
        "bgColor" : "",
        "bgImage" : "https://upload.wikimedia.org/wikipedia/commons/4/46/Question_mark_%28black%29.svg"
      },
      {
        "val" : 200,
        "bgColor" : "#0000ff",
        "bgImage" : ""
      },
      {
        "val" : 300,
        "bgColor" : "#ff0000",
        "bgImage" : ""
      },
    ]
    this.borderRadiusPercentage = 100;
    this.divID = "anID";
    this.waffleChartWidth = 182;
    this.waffleChartHeight = 100;
    this.fillMode = "horizontal-tb" //"vertical-lr | horizontal-tb | tb"
  }
}
```

## GitHub
<a href="https://github.com/PHBMB/pb-simple-waffle-chart">GitHub</a>






