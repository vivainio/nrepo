/// <reference path="typings/js-yaml/js-yaml.d.ts" />


import yaml = require("js-yaml");
import os = require("os");
import ps = require("child_process");
import fs = require("fs");
import _ = require("lodash");

class Cm {

    init() {
        var cont = fs.readFileSync("test.yaml").toString();
        var o = yaml.load(cont);
        console.log(o);
        
    }

    checkOut() {

    }
   
};

var cm = new Cm;
cm.init();
