/// <reference path="typings/js-yaml/js-yaml.d.ts" />
/// <reference path="typings/lodash/lodash.d.ts" />


import yaml = require("js-yaml");
import os = require("os");
import ps = require("child_process");
import fs = require("fs");
import _ = require("lodash");
import path = require("path");
import util = require("util");

var rootpath = "c:/t";

interface ComponentEntry {
    t?: string;
    repo?: string;
};

class Cm {

    init() {
        var cont = fs.readFileSync("test.yaml").toString();
        var o = yaml.load(cont);
        console.log(o);
        _.forEach(o.components, (e: ComponentEntry) => {
            var pth = path.join(rootpath, e.t);
            process.chdir(rootpath)
            var cmd = util.format("git clone %s %s", e.repo, e.t);
            console.log(cmd);
         });        
    }

    checkOut() {
    }
   
};

var cm = new Cm;
cm.init();
