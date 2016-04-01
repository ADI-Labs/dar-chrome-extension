var ELEMENT = 1;
var DOCUMENT = 9;
var DOCUMENT_FRAGMENT = 11;
var TEXT = 3;

// Enter things that you\'d like to replace
// var MATCH = [\'computer\',\'person\'];
// var REPLACE = [\'robot\',\'cantaloupe\'];

// walk(document.body);

// function walk(node) {
//     // Function from here for replacing text: http://is.gd/mwZp7E

//     var child, next;

//     switch (node.nodeType) {
//         case ELEMENT:  // Element
//         case DOCUMENT:  // Document
//         case DOCUMENT_FRAGMENT: // Document fragment
//             child = node.firstChild;
//             while (child) {
//                 next = child.nextSibling;
//                 walk(child);
//                 child = next;
//             }
//             break;

//         case TEXT: // Text node
//             replaceText(node);
//             break;
//     }
// }

// function replaceText(textNode) {
//     var v = textNode.nodeValue;

//     // Go through and match/replace all the strings we\'ve given it, using RegExp.
//     for (var i = 0; i < MATCH.length; i++) {
//         v = v.replace(new RegExp(\'\\b\' + MATCH[i] + \'\\b\', \'g\'), REPLACE[i]);
//     }

//     textNode.nodeValue = v;
// }
window.onload = function () {
    var preText = document.getElementsByTagName("pre")[0];
    var textString = preText.innerHTML;
    var lineArray = textString.split("\n");

    var newText = ""

    for (i = lineArray.length-1; i >= 0; i--){
        newText += lineArray[i] + "\n"
    }

    //Replacing <pre> area with white space
    document.getElementsByTagName("pre")[0].innerHTML = " ";
    
    // Inserting html elements into content area
	var s = '  \ <head> \
    <meta charset="utf-8"> \
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> \
    <title>Degree Audit Report</title> \
    <meta name="description" content="Degree Audit Report"> \
    <meta name="creator" content="ADI Labs, Degree Audit Report Team"> \
    <link href=\'https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700,800,900\' rel=\'stylesheet\' type=\'text/css\'> \
    <link rel="stylesheet" href="http:/ /cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css"> \
    <!-- style import --> \
    <!--<link rel="stylesheet" type="text/css" href="css/reset.css"> \
    <link rel="stylesheet" type="text/css" href="css/style.css">--> \
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css"> \
    <link rel="stylesheet" type="text/css" href="css/style.css"> \
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous"> \
    <!-- link style --> \
    <script>(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,\'script\',\'https://www.google-analytics.com/analytics.js\',\'ga\');ga(\'create\', \'UA-50221324-4\', \'auto\'); ga(\'send\', \'pageview\');</script> \
  	</head> \
	<center> <h1> Degree Audit </h1> </center> \
    <section> \
      <table class="table table-bordered"> \
        <thead> \
          <tr> \
            <!-- edited bootstrap.css #2264--> \
            <th colspan="7"> 9 ways of knowing </th> \
          </tr> \
          <tr> \
            <th>Requirement</th> \
            <th>Department</th> \
            <th>Course Number</th> \
            <th>Course Title</th> \
            <th>Credit</th> \
            <th>Grade</th> \
            <th>Status</th> \
          </tr> \
          <style> \
            html, body \
      		{ \
        	font-family: Raleway; \
      		} \
      		.table \
            { \
		        width: 95%; \
		        max-width: 100%; \
		        margin-bottom: 20px; \
		        margin-left: 2.5%; \
		        margin-right: 2.5%; \
		    } \
		    .table-bordered th \
		    { \
		      text-align: center; \
		    } \
		    .table-bordered th, \
		    .table-bordered td \
		    { \
		      background-color: #FFF; \
		    } \
		    footer \
		    { \
		      font-size: 1rem; \
		      color: #4c4c4c; \
		      position: relative; \
		      margin-top: 1rem; \
		      margin-bottom: 1rem; \
		      text-align: center; \
		    } \
    </style> \
        </thead> \
        <tbody> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
        </tbody> \
      </table> \
    </section> \
    <br> \
    <section> \
      <table class="table table-bordered"> \
        <thead> \
          <tr> \
            <!-- edited bootstrap.css #2264--> \
            <th colspan="7"> Major Requirements </th> \
          </tr> \
          <tr> \
            <th>Requirement</th> \
            <th>Department</th> \
            <th>Course Number</th> \
            <th>Course Title</th> \
            <th>Credit</th> \
            <th>Grade</th> \
            <th>Status</th> \
          </tr> \
        </thead> \
        <tbody> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
        </tbody> \
      </table> \
    </section> \
 \
    <br> \
 \
    <section> \
      <table class="table table-bordered"> \
        <thead> \
          <tr> \
            <!-- edited bootstrap.css #2264--> \
            <th colspan="7"> Minor Requirements </th> \
          </tr> \
          <tr> \
            <th>Requirement</th> \
            <th>Department</th> \
            <th>Course Number</th> \
            <th>Course Title</th> \
            <th>Credit</th> \
            <th>Grade</th> \
            <th>Status</th> \
          </tr> \
        </thead> \
        <tbody> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
        </tbody> \
      </table> \
    </section>     \
 \
    <br> \
 \
    <section> \
      <table class="table table-bordered"> \
        <thead> \
          <tr> \
            <!-- edited bootstrap.css #2264--> \
            <th colspan="7"> Transfer/ AP Credits </th> \
          </tr> \
          <tr> \
            <th>Requirement</th> \
            <th>Department</th> \
            <th>Course Number</th> \
            <th>Course Title</th> \
            <th>Credit</th> \
            <th>Grade</th> \
            <th>Status</th> \
          </tr> \
        </thead> \
        <tbody> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td></td> \
          </tr> \
        </tbody> \
      </table> \
    </section> \
 \
    <br> \
 \
    <section> \
      <table class="table table-bordered"> \
        <thead> \
          <tr> \
            <!-- edited bootstrap.css #2264--> \
            <th colspan="7">List of Completed Courses</th> \
          </tr> \
          <tr> \
            <th>Requirement</th> \
            <th>Department</th> \
            <th>Course Number</th> \
            <th>Course Title</th> \
            <th>Credit</th> \
            <th>Grade</th> \
            <th>Status</th> \
          </tr> \
        </thead> \
        <tbody> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
        </tbody> \
      </table> \
    </section>'; // HTML string

	var div = document.createElement('div');
	div.innerHTML = s;

	var replace = document.getElementById("Content");
	replace.appendChild(div);


}
