Derby Util
==========

A [Derby JS](http://derbyjs.com) component for exposing derby **util** properties such as `isProduction` and `isServer`.

Installation
------------

    $ npm install d-util --save

Usage
-----

Create a view:

    <index: element="util">
      <!-- empty -->

Associate your view with the component:

    app.component('util', require('d-util'));

Use the component:

    <util path="#root.util"></util>
