# jade-resume

### [Sample Resume](https://ankitsultana.me/jade-resume/deedy-resume.pdf)

This is [deedy](https://github.com/deedy/Deedy-Resume)'s awesome resume template, but without any **TeX**.

You can use [jade](http://jade-lang.com) to edit the content to your heart's delight. There is an index.jade file that is initially filled with deedy's data, so you can compare [this](https://ankitsultana.me/jade-resume/deedy-resume.pdf) and the [original](https://raw.githubusercontent.com/deedydas/Deedy-Resume/master/OpenFonts/sample-image.png) one written in Tex.

### Installation

This project has a simple three step installation process:

* Clone this repo (I'd recommend you to fork):

**Note:** Use `--depth 1` to avoid having to download unnecessary commits.

```
git clone https://github.com/bk2dcradle/jade-resume.git --depth 1
```

* Inside the `jade-resume` directory, run:

```
npm install
```

* **(Optional)** Initialize git submodules. These are the fonts [Raleway](https://github.com/softwaymedical/raleway.git) and [Lato](https://github.com/mrkelly/lato.git). Note that these have considerable size (about 16 MB combined):

```
git submodule update --init --recursive
```

### Workflow

To fill in your entries, you only need to edit `index.jade`. You can check the [sample](https://github.com/bk2dcradle/jade-resume/blob/gh-pages/index.jade) to see how it should be filled.

Just go to the `jade-resume` directory and do:

```
grunt server
```

This will open a new tab/window in your default browser, you can use this to save the resume as PDF or preview changes. To change the contents, edit the `index.jade` file. The corresponding tab/window should live reload on every save action on the `index.jade` file. When are you satisfied with the changes, convert the page to PDF as mentioned below.

### PDF

To convert the web page to [pdf](http://www.wikihow.com/Save-a-Web-Page-as-a-PDF-in-Google-Chrome), use the old Command + P (Ctrl + P) trick in Chrome. Settings should be as follows:

Attribute | Value
----------|------
Layout    | Portrait
Paper Size| Letter
Margins   | None
Pages     | 1

### Jade format guide

Most of the information regarding formatting of `index.jade` can be inferred by going through the same and checking it against the provided pdf. I will just point out some of the non obvious ones:

* `.left-column` supports three kinds of lists


Type of List                                  | Jade
-----------------------------------------------|---------------
Bulleted with each element on one line         | `ul`
Bulleted with inline elements                  | `ul.inline`
Non Bulleted with each element in one line     | `ul.nostyle`

* `.right-column` supports 1 type of unordered list, and 2 types of ordered list. The unordered one is the one you can see in the right column of the resume. The ordered ones are either of type `[1] [2] ...` or `1. 2. ...`
* `table` can be of any number of columns
* You can load data using a JSON file. In this case, I am loading some of the data from `data.json` for demonstration purposes
* You can use `.clearfix` above any element that becomes inline when it should not
* You can use `.no-overlap` on any element to give it some `margin-bottom`
* There are three variants of `br`, spacing increases from top to bottom:
  * `br`
  * `br.two`
  * `br.three`


### License

[GNU GPL v3](https://github.com/bk2dcradle/jade-resume/blob/master/LICENSE) (c) [Ankit Sultana](https://twitter.com/AnkitSultana) 2016
