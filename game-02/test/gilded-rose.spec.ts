import { CommonItem, AgedBrieItem, SulfurasItem, BackstageItem, ConjuredItem, GildedRose }
from "../app/gilded-rose";


describe("Unit Tests", () => {
    it("Common Item Test", () => {
        let assert = require('assert');
        let item = new CommonItem("Common item #1", 3, 50);
        let gildedRose = new GildedRose([item]);

        for (let iters = 0; iters < 5; iters++) gildedRose.updateQualityItems();

        assert.equal(gildedRose.items[0].quality, 43,"Error in common item quality");
        assert.equal(gildedRose.items[0].sellIn, 0, "Error in common item sell in");
    });

    it("Aged Brie Item Test", () => {
        let assert = require('assert');
        let item = new AgedBrieItem("Aged Brie item #1", 3, 44);
        let gildedRose = new GildedRose([item]);

        for (let iters = 0; iters < 5; iters++) gildedRose.updateQualityItems();

        assert.equal(gildedRose.items[0].quality, 50, "Error in Aged Brie item quality");
        assert.equal(gildedRose.items[0].sellIn, 0, "Error in Aged Brie item sell in");
    });

    it("Sulfuras Item Test", () => {
        let assert = require('assert');

        let item = new SulfurasItem("Legendary item #1", 3, 80);
        let gildedRose = new GildedRose([item]);

        for (let iters = 0; iters < 5; iters++) gildedRose.updateQualityItems();

        assert.equal(gildedRose.items[0].quality, 80,"Error in Legendary item quality");
        assert.equal(gildedRose.items[0].sellIn, 3, "Error in Legendary item sell in");
    });

    it("Backstage Item Test", () => {
        let assert = require('assert');

        let item = new BackstageItem("Backstage item #1", 3, 50);
        let gildedRose = new GildedRose([item]);

        for (let iters = 0; iters < 5; iters++) gildedRose.updateQualityItems();

        assert.equal(gildedRose.items[0].quality, 0,"Error in Backstage item quality");
        assert.equal(gildedRose.items[0].sellIn, 0, "Error in Backstage item sell in");
    });

    it("Conjured Item Test", () => {
        let assert = require('assert');

        let item = new ConjuredItem("Conjured item #1", 3, 50);
        let gildedRose = new GildedRose([item]);

        for (let iters = 0; iters < 5; iters++) gildedRose.updateQualityItems();

        assert.equal(gildedRose.items[0].quality, 36,"Error in Conjured item quality");
        assert.equal(gildedRose.items[0].sellIn, 0, "Error in Conjured item sell in");
    });

});