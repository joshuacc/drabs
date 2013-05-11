module.exports = function(grunt) {
    grunt.loadNpmTasks("grunt-contrib-jasmine");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        jshint: {
            files: ["Gruntfile.js", "src/**/*.js", "spec/**/*.js"],
            options: {
                jshintrc: ".jshintrc"
            }
        },

        jasmine: {
            drabs: {
                src: "src/**/*.js",
                options: {
                    specs: "spec/*Spec.js"
                }
            }
        },

        concat: {
            dist: {
                src: ["src/drabs.js"],
                dest: "dist/drabs.js",
                options: {
                    banner:
                        "// Drabs <%= pkg.version %> built on <%= grunt.template.today('dd-mm-yyyy') %>\n" +
                        "// https://github.com/joshuacc/drabs\n" +
                        "// (c) 2013 Joshua Clanton\n" +
                        "// Drabs may be freely distributed under the MIT license.\n"
                }
            }
        },

        uglify: {
            dist: {
                files: {
                    "dist/<%= pkg.name %>.min.js": ["<%= concat.dist.dest %>"]
                }
            }
        },

        watch: {
            files: ["<%= jshint.files %>"],
            tasks: ["test"]
        }
    });


    grunt.registerTask("test", ["jshint", "jasmine"]);

    grunt.registerTask("build", ["jshint", "jasmine", "concat", "uglify"]);

};