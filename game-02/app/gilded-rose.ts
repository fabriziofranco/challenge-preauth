const minQuality = 0;
const maxQuality = 50;
const legendaryQuality = 80;
const minSellIn = 0;
export abstract class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    isOutOfDate(): boolean {
        return this.sellIn == 0;
    }

    abstract updateQuality(): void;
}


export class CommonItem extends Item {
    normalQualityRate: number = 1;
    outOfDateQualityRate: number = 2;

    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }

    updateQuality(): void{
        let qualityRate: number;

        if(this.isOutOfDate()){
            qualityRate= this.outOfDateQualityRate;
        }
        else{
            qualityRate = this.normalQualityRate;
        }

        this.quality = Math.max(this.quality - qualityRate, minQuality);
        this.sellIn = Math.max(this.sellIn - 1, minSellIn);
    }
}


export class AgedBrieItem extends Item {
    normalQualityRate: number = 1;
    outOfDateQualityRate: number = 2;

    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }

    updateQuality(): void{
        let qualityRate: number;
        
        if(this.isOutOfDate()) qualityRate= this.outOfDateQualityRate;
        else qualityRate = this.normalQualityRate;

        this.quality = Math.min(this.quality + qualityRate, maxQuality);
        this.sellIn = Math.max(this.sellIn - 1, minSellIn);        
    }
}


export class SulfurasItem extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }

    updateQuality(): void{
        this.quality = legendaryQuality;
    }
}


export class BackstageItem extends Item {
    normalQualityRate: number = 1;
    outOfDateQualityRate: number = 2;

    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }

    updateQuality(): void{
        if (this.sellIn > 0) {
            let qualityRate: number;
        
            if (this.sellIn > 10) qualityRate = 1;
            else if (this.sellIn <= 10 && this.sellIn > 5) qualityRate = 2;
            else qualityRate = 3;

            this.quality = Math.min(this.quality + qualityRate, maxQuality);
            this.sellIn = Math.max(this.sellIn - 1, minSellIn);   
               
            if (this.sellIn == 0) this.quality = 0;
        }
    }
}

export class ConjuredItem extends Item {
    normalQualityRate: number = 2;
    outOfDateQualityRate: number = 4;
    
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }

    updateQuality(): void{
        let qualityRate: number;

        if(this.isOutOfDate()) qualityRate= this.outOfDateQualityRate;
        else qualityRate = this.normalQualityRate;

        this.quality = Math.max(this.quality - qualityRate, minQuality);
        this.sellIn = Math.max(this.sellIn - 1, minSellIn);        
    }
}


export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQualityItems(): void {
        this.items.forEach(item => {
            item.updateQuality();
        });
    }
}