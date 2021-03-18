import { AfterViewChecked, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pb-simple-waffle-chart',
  template: `<div class="parent" id="{{divID}}"></div>`,
  styles: ['.parent{ background-color: transparent;}']
})

export class PbSimpleWaffleChartComponent implements OnInit, AfterViewChecked, OnChanges{
  @Input() sizeOfWaffleSquare!: number;
  @Input() marginOfWaffleSquare!: number;
  @Input() waffleCategories!: Array<any>;
  @Input() borderRadiusPercentage!: number;
  @Input() divID!: string;
  @Input() waffleChartWidth!: number;
  @Input() waffleChartHeight!: number;
  @Input() fillMode!: string;

  waffleCategoriesQuantityAdjusted: Array<any>;
  viewScreenArea: number;
  spaceOfOneWaffleSquare: number;

  constructor() {
    this.waffleCategoriesQuantityAdjusted = [];
    this.spaceOfOneWaffleSquare = 0;
    this.viewScreenArea = 0;
  }

  ngOnInit() {
    this.spaceOfOneWaffleSquare = Math.pow((this.sizeOfWaffleSquare + this.marginOfWaffleSquare * 2), 2)
  }

  ngAfterViewChecked(){
    this.appendCSS();
    this.setViewScreenArea()
    this.desertWaffles();
    this.adjustWaffleAmountsToFitScreen();
    this.insertWaffles();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.desertWaffles();
    this.adjustWaffleAmountsToFitScreen();
    this.insertWaffles();
  }

  desertWaffles(){
    let myNode = document.getElementById(this.divID);
    if (myNode) {
      while (myNode.lastChild) {
        myNode.removeChild(myNode.lastChild);
      }
    }
  }

  insertWaffles(){
    this.waffleCategoriesQuantityAdjusted.forEach(wffCat => {
      this.insertWaffle(wffCat);
    });
  }

  insertWaffle(waffle: any) {
    let myNode = document.getElementById(this.divID);
    if (myNode) {
      if (waffle && waffle["val"]) {
        for (let counter = 0; counter < waffle["val"]; counter++) {
          myNode.innerHTML += '<div style="float:left; writing-mode:horizontal-tb; height:'
          + this.sizeOfWaffleSquare + 'px; width: '+ this.sizeOfWaffleSquare 
          + 'px; background-color: ' + waffle["bgColor"] 
          + '; background-image: url(' + waffle["bgImage"] 
          +') ; background-size: cover; margin:'+ this.marginOfWaffleSquare 
          +'px; border-radius: ' + this.borderRadiusPercentage + '%;"></div>';
        } 
      }
    }
  }

  adjustWaffleAmountsToFitScreen(){

    let maxAmount: number;
    maxAmount = Math.floor((this.viewScreenArea / this.spaceOfOneWaffleSquare))

    let totalAmount: number;
    totalAmount = 0;

    this.waffleCategories.forEach((wffCat: any) => {
      totalAmount = totalAmount + wffCat["val"];
    });
    
    let distributionKey: number;
    distributionKey =  maxAmount / totalAmount;

    let realAmountOfSquares = 0;
    this.waffleCategoriesQuantityAdjusted = [];
    
    this.waffleCategories.forEach(waffCat => {
      this.waffleCategoriesQuantityAdjusted.push({"val" : Math.floor(waffCat["val"] * distributionKey), 
      "bgColor" : waffCat["bgColor"], "bgImage" : waffCat["bgImage"]})
      realAmountOfSquares = realAmountOfSquares + Math.round(waffCat["val"] * distributionKey);
    });

  }
  
  setViewScreenArea(){
    if ((this.waffleChartHeight != 0) && (this.waffleChartWidth != 0) ) {
      this.viewScreenArea = this.waffleChartHeight * this.waffleChartWidth;
    }
  }

  appendCSS(){
    let myNode = document.getElementById(this.divID);
    if (myNode) {
      myNode.style.width = this.waffleChartWidth + "px";
      myNode.style.height = this.waffleChartHeight + "px";
      myNode.style.writingMode = this.fillMode;
    }
  }
}